const jsonURL = "https://raw.githubusercontent.com/sedc-codecademy/sp2020-pr04-cla/master/database.JSON";
let currentInfoWindow = null;


function initMap() {

    const geocoder = new google.maps.Geocoder();

    // Map Options

    let options = {
        zoom: 16,
        center: { lat: 12.6574, lng: 23.6574 },
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

    function codeAddress(props, about, mailAdd, phoneNum, webSite) {
        let address = props;

        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
                addMarker({
                    coords: results[0].geometry.location,
                    content: `<div class="ui raised segment">
                    <h3 style="color: teal;" class="ui header">${about}</h3> 
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
                    <div class="ui teal segment">
                    <p>Address: 11th October St. 33, Skopje 1000</p>
                    </div>
                        
                    </div>`
                })
            } else {
                alert('Not success' + status);
            }
        })
    };
    codeAddress('11th October St. 33, Skopje 1000', 'This is Us! Here we are!', 'seavus@test.com', '++389-000-000-00', 'www.seavus.com')
};

