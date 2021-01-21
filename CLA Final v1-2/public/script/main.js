// const jsonURL = "https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr04-cla/master/database.JSON";
const newJsonUrl = "http://167.172.190.47/getCompData";
const newCompaniesUrl = "http://167.172.190.47/getNewComp";
let currentInfoWindow = null;
const companyURL = "http://167.172.190.47/createNewComp";
const signLogBtns = document.getElementById("signLogBtns");
const yourProfilebtn = document.getElementById("yourProfilebtn");

checkingForUser(signLogBtns, yourProfilebtn);
const markers = [];

function initMap() {
  // Our Json Data
  const getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();

    showData(data);
  };

  getData(companyURL);

  const showData = (info) => {
    info.forEach((element) => {
      codeAddress(
        element.companyAddress,
        element.companyName,
        element.companyEmail,
        element.companyPhone,
        element.companyWebsite
      );
    });
  };

  // Geocoder za convert na adresi vo lat i lng

  const geocoder = new google.maps.Geocoder();

  // Map Options

  let options = {
    zoom: 7,
    center: { lat: 41.6086, lng: 21.7452 },
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#f18900",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#46bcec",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#3e738d",
          },
        ],
      },
    ],
  };

  const map = new google.maps.Map(document.getElementById("map"), options);

  // Add Marker Function

  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage,
    });

    markers.push(marker);

    const mcOptions = {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      maxZoom: null,
      minimumClusterSize: 2,
      gridSize: 60,
    };
    const markerCluster = new MarkerClusterer(map, markers, mcOptions);

    // Check for custonIcon
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    // Check Content
    if (props.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
      marker.addListener("click", function () {
        if (currentInfoWindow != null) {
          currentInfoWindow.close();
        }
        infoWindow.open(map, marker);
        currentInfoWindow = infoWindow;
      });
    }
  }

  // Funkcija za dinamicki stavanje pinpoint! mora da ima evtlistener

  var codeAddress = function (props, about, mailAdd, phoneNum, webSite) {
    let address = props;

    geocoder.geocode({ address: address }, function (results, status) {
      // console.log(results)
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);

        addMarker({
          coords: results[0].geometry.location,
          content: `<div class="ui raised segment">
                                    <h3 style="color: teal;" class="ui header">Company Name: ${about}</h3>
                                    <div class="ui fitted divider"></div> 
                                    <div class="ui teal  segment">
                                        <h4>Email: ${mailAdd}</h4>
                                    </div>
                                    <div class="ui teal segment">
                                        <h4>Phone Number: ${phoneNum}</h4>
                                    </div>
                                    <div class="ui teal segment">
                                        <h4>Web Address: <a href="${webSite}" target="_blank">${webSite}</a></h4>
                                    </div>
                                    <br/>
                                    
                                    <button class="ui teal basic button" onClick="seeCompanyProfile('compProfile', '../profile-and-ad-pages/company-profile2.html', '${about}')">Company Profile</button>
                                    <button class="ui teal basic button" onClick="seeCompanyProfile('compProfile', '../profile-and-ad-pages/company-profile2.html', '${about}')">Show Listing</button>
                                    </div>`,
        });
      } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
        setTimeout(
          codeAddress.bind(null, props, about, mailAdd, phoneNum, webSite),
          200
        );
      }
    });
  };

}
