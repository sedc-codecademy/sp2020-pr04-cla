let postContainer = document.getElementById("postContainer");
let search = document.getElementById("searchBtn");
let reset = document.getElementById("resetBtn");
let keywordInput = document.getElementById("keywordInput");
let locationInput = document.getElementById("locationInput");
let categoryIndustry = document.getElementById("categoryIndustry");
const signLogBtns = document.getElementById("signLogBtns");
const yourProfilebtn = document.getElementById("yourProfilebtn");

checkingForUser(signLogBtns, yourProfilebtn);

let currentInfoWindow = null;
let markers = [];

const database = "http://167.172.190.47/createNewComp";

reset.addEventListener("click", function () {
  postContainer.innerHTML = "";
  keywordInput.value = "";
  locationInput.value = "";
});

const searchDataPosts = function (item) {
  return ` <div class="ui card">
          <div class="ui slide masked reveal image">
            <img src="./img/Google Office image 1.jpg" class="visible content">
            <img src="./img/Microsoft Building some image.jpg" class="hidden content">
          </div>
          <div class="content">
            <a class="header" onClick="seeCompanyProfile('compProfile', '../profile-and-ad-pages/company-profile2.html', '${item.companyName}')" >${item.companyName}</a>
            <div class="meta">
              <span class="date">${item.companyCountry}</span>
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="users icon"></i>
              ${item.companyEmail}
            </a>
          </div>
        </div>`;
};

function initMap() {
  if (
    document.referrer === "http://167.172.190.47/category-page/index.html" &&
    localStorage.category_value != ""
  ) {
    categoryIndustry.value = localStorage.category_value;
    // categoryIndustry.textContent = localStorage.category_value;

    fetch(database)
      .then((data) => data.json())
      .then(function (result) {
        try {
          postContainer.innerHTML = "";
          for (const item of result) {
            if (categoryIndustry.value === item.companyCategory) {
              codeAddress(
                item.companyAddress,
                item.companyName,
                item.companyEmail,
                item.companyPhone,
                item.companyWebsite
              );
              postContainer.innerHTML += searchDataPosts(item);
            }
          }
        } catch (error) {
          console.log("Error: " + error);
        }
        localStorage.removeItem("category_value");
      });
  }

  if (
    document.referrer === "http://167.172.190.47/index.html" &&
    localStorage.keyword != ""
  ) {
    keywordInput.value = localStorage.keyword;

    fetch(database)
      .then((data) => data.json())
      .then(function (result) {
        try {
          postContainer.innerHTML = "";
          for (const item of result) {
            if (item.companyName.includes(keywordInput.value)) {
              codeAddress(
                item.companyAddress,
                item.companyName,
                item.companyEmail,
                item.companyPhone,
                item.companyWebsite
              );
              postContainer.innerHTML += searchDataPosts(item);
            }
          }
        } catch (error) {
          console.log("Error: " + error);
        }
      });
  } else if (
    document.referrer === "http://167.172.190.47/index.html" &&
    localStorage.address != ""
  ) {
    locationInput.value = localStorage.address;

    fetch(database)
      .then((data) => data.json())
      .then(function (result) {
        try {
          postContainer.innerHTML = "";
          for (const item of result) {
            if (locationInput.value === item.companyCountry) {
              console.log(item);
              codeAddress(
                item.companyAddress,
                item.companyName,
                item.companyEmail,
                item.companyPhone,
                item.companyWebsite
              );
              postContainer.innerHTML += searchDataPosts(item);
            }
          }
        } catch (error) {
          console.log("Error: " + error);
        }
      });
  } else if (
    document.referrer === "http://167.172.190.47/index.html" &&
    localStorage.category != ""
  ) {
    categoryIndustry.value = localStorage.category;

    fetch(database)
      .then((data) => data.json())
      .then(function (result) {
        try {
          postContainer.innerHTML = "";
          for (const item of result) {
            if (categoryIndustry.value === item.companyCategory) {
              console.log(item);
              codeAddress(
                item.companyAddress,
                item.companyName,
                item.companyEmail,
                item.companyPhone,
                item.companyWebsite
              );
              postContainer.innerHTML += searchDataPosts(item);
            }
          }
        } catch (error) {
          console.log("Error: " + error);
        }
        localStorage.removeItem("category");
      });
  }

  localStorage.removeItem("keyword");

  localStorage.removeItem("address");

  search.addEventListener("click", function () {
    // Ova e test ako potpolni poveke parametri za prebaruvanje!
    if (keywordInput.value !== "" && locationInput.value !== "") {
      alert("Error");
    } else if (keywordInput.value !== "") {
      fetch(database)
        .then((data) => data.json())
        .then(function (result) {
          try {
            postContainer.innerHTML = "";
            for (const item of result) {
              if (item.companyName.includes(keywordInput.value)) {
                codeAddress(
                  item.companyAddress,
                  item.companyName,
                  item.companyEmail,
                  item.companyPhone,
                  item.companyWebsite
                );

                postContainer.innerHTML += searchDataPosts(item);
              }
            }
          } catch (error) {
            console.log(error);
          }
        });
    } else if (locationInput.value !== "") {
      fetch(database)
        .then((data) => data.json())
        .then(function (result) {
          try {
            postContainer.innerHTML = "";
            for (const item of result) {
              if (locationInput.value === item.companyCountry) {
                codeAddress(
                  item.companyAddress,
                  item.companyName,
                  item.companyEmail,
                  item.companyPhone,
                  item.companyWebsite
                );
                postContainer.innerHTML += searchDataPosts(item);
              }
            }
          } catch (error) {
            console.log(error);
          }
        });
    } else if (categoryIndustry.value !== "") {
      fetch(database)
        .then((data) => data.json())
        .then(function (result) {
          try {
            postContainer.innerHTML = "";
            for (const item of result) {
              if (categoryIndustry.value === item.companyCategory) {
                codeAddress(
                  item.companyAddress,
                  item.companyName,
                  item.companyEmail,
                  item.companyPhone,
                  item.companyWebsite
                );
                postContainer.innerHTML += searchDataPosts(item);
              }
            }
          } catch (error) {
            console.log(error);
          }
        });
    } else {
      fetch(database)
        .then((data) => data.json())
        .then(function (result) {
          try {
            postContainer.innerHTML = "";
            for (const item of result) {
              postContainer.innerHTML += searchDataPosts(item);
              codeAddress(
                item.companyAddress,
                item.companyName,
                item.companyEmail,
                item.companyPhone,
                item.companyWebsite
              );
            }
          } catch (error) {
            console.log(error);
          }
        });
    }
  });

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

    // Sets the map on all markers in the array.
    function setMapOnAll(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
      setMapOnAll(null);
      markerCluster = "";
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
      deleteMarkers();
    });

    search.addEventListener("click", function () {
      deleteMarkers();
    });
    // Za clusters

    // let mcOptions = {
    //   imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    //   maxZoom: null,
    //   minimumClusterSize: 2,
    //   gridSize: 60

    // };

    // let markerCluster = new MarkerClusterer(map, markers, mcOptions);
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
