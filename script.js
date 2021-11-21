var mymap = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "24h Closet",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.170458, 45.452075, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Abbigliamento Vintage Milano Darsena - Hangover Vintage",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.175587, 45.454581, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Alice in Vintage Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.18737, 45.455473, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Ambroeus Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.186046, 45.486581, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Back Stage Vintage",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.180929, 45.459574, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "BADDARO'- il mercatino del Borgo",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.227087, 45.488594, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Bivio Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.180226, 45.459019, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Cavalli e Nastri Brera",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.188191, 45.469442, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Delphine Vintage",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.186247, 45.486218, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "East Market",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.24924, 45.45114, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "give and take",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.161343, 45.468703, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Groupies Vintage Di Cipriani Alice",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.180087, 45.45885, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Humana Vintage",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.175713, 45.459897, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Humana Vintage Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.189171, 45.463077, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Humana Vintage Vigevano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.171295, 45.453253, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "I Love Vintage Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.214274, 45.481369, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Indaco Second Hand",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.206632, 45.478339, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Insight Vintage",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.161655, 45.490891, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "L’incanto",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.215835, 45.473256, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Lo Specchio Di Alice Snc",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.180498, 45.455285, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Mela Vintage - Negozio di Accessori Vintage, Bijoux, Second Hand Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.204684, 45.456446, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Mercatino Franchising Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.126428, 45.469315, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Mercatino Franchising Milano Jenner",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.174973, 45.496546, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Mercatino Milano Centrale",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.209973, 45.495372, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Mercatopoli Milano Giambellino",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.151779, 45.451454, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Mister Libra",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.180728, 45.456953, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "my room Vintage Shop",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.182927, 45.462899, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Napoleone",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.186891, 45.461804, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Old Star Vintage",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.203503, 45.449075, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Pourquoi Moi Vintage",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.174594, 45.451073, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Room37 Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.185415, 45.489656, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "SALTLESS vintage | sartoria",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.214562, 45.479108, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "SHARE - Second HAnd REuse",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.220543, 45.488895, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Sous Vintage Shop",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.176322, 45.445825, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "THE CLOISTER",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.185355, 45.46222, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "Usato Firmato Regina Giovanna Milano",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.208454, 45.475654, 0] },
    },
    {
      type: "Feature",
      properties: {
        name: "VESTO MILANO",
        styleUrl: "#icon-1899-0288D1-nodesc",
        styleHash: "48999a20",
        styleMapHash: {
          normal: "#icon-1899-0288D1-nodesc-normal",
          highlight: "#icon-1899-0288D1-nodesc-highlight",
        },
      },
      geometry: { type: "Point", coordinates: [9.180703, 45.461321, 0] },
    },
  ],
};
var geojsonLayer = L.geoJSON(geojson).addTo(mymap);
mymap.fitBounds(geojsonLayer.getBounds());
