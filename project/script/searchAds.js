let postContainer = document.getElementById("postContainer");
let search = document.getElementById("searchBtn");
let reset = document.getElementById("resetBtn");
let keywordInput = document.getElementById("keywordInput");
let locationInput = document.getElementById("locationInput");
let categoryIndustry = document.getElementById("categoryIndustry");

let currentInfoWindow = null;
let markers = [];


const database = 'https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr04-cla/master/database.JSON';

reset.addEventListener("click", function () {
  postContainer.innerHTML = "";
  keywordInput.value = "";
  locationInput.value = "";
})

function initMap() {

  search.addEventListener("click", function () {

    if (keywordInput.value !== "") {
      fetch(database)
        .then(data => data.json())
        .then(function (result) {
          try {
            postContainer.innerHTML = "";
            for (const item of result.users) {
              if (item.companyName.includes(keywordInput.value)) {
                codeAddress(item.companyAddress, item.companyName, item.emailAddress, item.phoneNumber, item.website)
                postContainer.innerHTML += `
                    <div class="ui card">
                    <a class="image" href="#">
                    <img src="./img/Steel-Factory-640x428.jpg">
                    </a>
                    <div class="content">
                    <a class="header" href="#">Procuding Epoxy Tables</a>
                    <div class="meta">
                    <a>${item.dateOfRegistration}</a>
                    <br>
                    <a><b>${item.companyName}</b></a>
                    </div>
                    </div>
                    </div>
    
                    `
              }
            }


          } catch (error) {
            console.log(error)
          }
        })



    } else if (locationInput.value !== "") {

      fetch(database)
        .then(data => data.json())
        .then(function (result) {
          try {
            postContainer.innerHTML = "";
            for (const item of result.users) {
              if (locationInput.value === item.country) {
                codeAddress(item.companyAddress, item.companyName, item.emailAddress, item.phoneNumber, item.website)
                postContainer.innerHTML += `
                    <div class="ui card">
                    <a class="image" href="#">
                    <img src="./img/Steel-Factory-640x428.jpg">
                    </a>
                    <div class="content">
                    <a class="header" href="#">Procuding Epoxy Tables</a>
                    <div class="meta">
                    <a>${item.dateOfRegistration}</a>
                    <br>
                    <a><b>${item.companyName}</b></a>
                    </div>
                    </div>
                    </div>`
              }
            }



          } catch (error) {
            console.log(error)
          }
        })

    }
    else if (categoryIndustry.value !== "") {

      fetch(database)
        .then(data => data.json())
        .then(function (result) {
          try {
            postContainer.innerHTML = "";
            for (const item of result.users) {
              if (item.category === categoryIndustry.value) {
                codeAddress(item.companyAddress, item.companyName, item.emailAddress, item.phoneNumber, item.website)
                console.log(item)
                postContainer.innerHTML += `
                    <div class="ui card">
                    <div class="ui slide masked reveal image">
                      <img src="./img/Google Office image 1.jpg" class="visible content">
                      <img src="./img/Microsoft Building some image.jpg" class="hidden content">
                    </div>
                    <div class="content">
                      <a class="header">${item.companyName}</a>
                      <div class="meta">
                        <span class="date">${item.country}</span>
                      </div>
                    </div>
                    <div class="extra content">
                      <a>
                        <i class="users icon"></i>
                        ${item.emailAddress}
                      </a>
                    </div>
                  </div>`
              }
            }



          } catch (error) {
            console.log(error)
          }
        })

    }
    else {

      fetch(database)
        .then(data => data.json())
        .then(function (result) {
          try {
            postContainer.innerHTML = "";
            for (const item of result.users) {
              postContainer.innerHTML += `
                <div class="ui card">
                <a class="image" href="#">
                <img src="./img/Steel-Factory-640x428.jpg">
                </a>
                <div class="content">
                <a class="header" href="#">Procuding Epoxy Tables</a>
                <div class="meta">
                <a>${item.dateOfRegistration}</a>
                <br>
                <a><b>${item.companyName}</b></a>
                </div>
                </div>
                </div>`
            }


          } catch (error) {
            console.log(error)
          }
        })
    }

  })


  // Geocoder za convert na adresi vo lat i lng

  const geocoder = new google.maps.Geocoder();

  // Map Options

  let options = {
    zoom: 7,
    center: { lat: 41.6086, lng: 21.7452 },
    styles: [
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f18900"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#46bcec"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#3e738d"
          }
        ]
      }
    ]
  }

  const map = new google.maps.Map(document.getElementById("map"), options);

  // Add Marker Function

  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage
    });

    markers.push(marker);

    // Sets the map on all markers in the array.
    function setMapOnAll(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
      setMapOnAll(null);
    }

    // Shows any markers currently in the array.
    function showMarkers() {
      setMapOnAll(map);
    }

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
      clearMarkers();
      markers = [];
    }


    reset.addEventListener("click", function () {
      postContainer.innerHTML = "";
      keywordInput.value = "";
      locationInput.value = "";
      deleteMarkers()
    })

    search.addEventListener("click", function () {
      deleteMarkers()
    })
    // Za marker clusters odkomentiri

    // const mcOptions = {
    //   imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    //   maxZoom: null,
    //   minimumClusterSize: 2,
    //   gridSize: 60

    // };
    // const markerCluster = new MarkerClusterer(map, markers, mcOptions);

    // Check for custonIcon
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    };
    // Check Content
    if (props.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: props.content
      });
      marker.addListener('click', function () {
        if (currentInfoWindow != null) {
          currentInfoWindow.close();
        }
        infoWindow.open(map, marker);
        currentInfoWindow = infoWindow;
      });
    };
  };

  // Funkcija za dinamicki stavanje pinpoint! mora da ima evtlistener

  var codeAddress = function (props, about, mailAdd, phoneNum, webSite) {
    let address = props;

    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
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
                    
                    <button class="ui teal basic button">Company Profile</button>
                    <button class="ui teal basic button">Show Listing</button>
                    </div>`
        })
      } else {
        alert('Not success' + status);
      }
    })
  };


};

