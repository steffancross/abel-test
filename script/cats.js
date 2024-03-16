const catsData = [
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3127.png",
    inscription: "#53790412",
    price: "0.265",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0693.png",
    inscription: "#53786553",
    price: "0.268",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0183.png",
    inscription: "#53786043",
    price: "0.269",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0266.png",
    inscription: "#53786126",
    price: "0.2699",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0478.png",
    inscription: "#53786338",
    price: "0.272",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2365.png",
    inscription: "#53789305",
    price: "0.275",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2838.png",
    inscription: "#53789778",
    price: "0.2879999",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1751.png",
    inscription: "#53788171",
    price: "0.29",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1531.png",
    inscription: "#53787951",
    price: "0.291",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1186.png",
    inscription: "#53787606",
    price: "0.293",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2220.png",
    inscription: "#53789160",
    price: "0.294",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1665.png",
    inscription: "#53788085",
    price: "0.295",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1869.png",
    inscription: "#53788289",
    price: "0.295",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0692.png",
    inscription: "#53786552",
    price: "0.3",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1653.png",
    inscription: "#53788073",
    price: "0.3",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1851.png",
    inscription: "#53788271",
    price: "0.3",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2746.png",
    inscription: "#53789686",
    price: "0.3",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1648.png",
    inscription: "#53788068",
    price: "0.32",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2440.png",
    inscription: "#53789380",
    price: "0.322",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1311.png",
    inscription: "#53787731",
    price: "0.3253",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2926.png",
    inscription: "#53789866",
    price: "0.3268",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1263.png",
    inscription: "#53787683",
    price: "0.329",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1558.png",
    inscription: "#53787978",
    price: "0.33",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1846.png",
    inscription: "#53788266",
    price: "0.33",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2728.png",
    inscription: "#53789668",
    price: "0.33",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2042.png",
    inscription: "#53788982",
    price: "0.34",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1629.png",
    inscription: "#53788049",
    price: "0.348",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0222.png",
    inscription: "#53786082",
    price: "0.349",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0340.png",
    inscription: "#53786200",
    price: "0.35",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1159.png",
    inscription: "#53787579",
    price: "0.35",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2153.png",
    inscription: "#53789093",
    price: "0.35",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3140.png",
    inscription: "#53790425",
    price: "0.35",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3207.png",
    inscription: "#53790492",
    price: "0.35",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2938.png",
    inscription: "#53789878",
    price: "0.353",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2979.png",
    inscription: "#53789919",
    price: "0.368",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0615.png",
    inscription: "#53786475",
    price: "0.3689",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3326.png",
    inscription: "#53790611",
    price: "0.37",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0005.png",
    inscription: "#53785865",
    price: "0.3788",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1243.png",
    inscription: "#53787663",
    price: "0.395",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2455.png",
    inscription: "#53789395",
    price: "0.398",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2281.png",
    inscription: "#53789221",
    price: "0.399",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0121.png",
    inscription: "#53785981",
    price: "0.4",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2669.png",
    inscription: "#53789609",
    price: "0.4",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3046.png",
    inscription: "#53790331",
    price: "0.4",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3077.png",
    inscription: "#53790362",
    price: "0.403",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0617.png",
    inscription: "#53786477",
    price: "0.41",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3148.png",
    inscription: "#53790433",
    price: "0.4111",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0433.png",
    inscription: "#53786293",
    price: "0.42",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1863.png",
    inscription: "#53788283",
    price: "0.42",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2607.png",
    inscription: "#53789547",
    price: "0.42",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0083.png",
    inscription: "#53785943",
    price: "0.425",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0658.png",
    inscription: "#53786518",
    price: "0.4269",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0577.png",
    inscription: "#53786437",
    price: "0.4321",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0239.png",
    inscription: "#53786099",
    price: "0.444",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1105.png",
    inscription: "#53787525",
    price: "0.444",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1737.png",
    inscription: "#53788157",
    price: "0.444",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2586.png",
    inscription: "#53789526",
    price: "0.4444",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2071.png",
    inscription: "#53789011",
    price: "0.4499",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0995.png",
    inscription: "#53786855",
    price: "0.45",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2067.png",
    inscription: "#53789007",
    price: "0.45",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2865.png",
    inscription: "#53789805",
    price: "0.45",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3181.png",
    inscription: "#53790466",
    price: "0.45",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1254.png",
    inscription: "#53787674",
    price: "0.455",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1331.png",
    inscription: "#53787751",
    price: "0.4555",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0311.png",
    inscription: "#53786171",
    price: "0.469",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2247.png",
    inscription: "#53789187",
    price: "0.469",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2134.png",
    inscription: "#53789074",
    price: "0.4797",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0882.png",
    inscription: "#53786742",
    price: "0.48",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2047.png",
    inscription: "#53788987",
    price: "0.48",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3044.png",
    inscription: "#53790329",
    price: "0.489",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2749.png",
    inscription: "#53789689",
    price: "0.489207",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0526.png",
    inscription: "#53786386",
    price: "0.49",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1003.png",
    inscription: "#53787423",
    price: "0.49",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2609.png",
    inscription: "#53789549",
    price: "0.49",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0673.png",
    inscription: "#53786533",
    price: "0.4969",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2582.png",
    inscription: "#53789522",
    price: "0.498",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1884.png",
    inscription: "#53788304",
    price: "0.4999",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1309.png",
    inscription: "#53787729",
    price: "0.49999",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0579.png",
    inscription: "#53786439",
    price: "0.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0669.png",
    inscription: "#53786529",
    price: "0.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1534.png",
    inscription: "#53787954",
    price: "0.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1602.png",
    inscription: "#53788022",
    price: "0.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1177.png",
    inscription: "#53787597",
    price: "0.521",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2553.png",
    inscription: "#53789493",
    price: "0.5269",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1320.png",
    inscription: "#53787740",
    price: "0.54",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1726.png",
    inscription: "#53788146",
    price: "0.544",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0040.png",
    inscription: "#53785900",
    price: "0.55",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0936.png",
    inscription: "#53786796",
    price: "0.55",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2593.png",
    inscription: "#53789533",
    price: "0.55",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3240.png",
    inscription: "#53790525",
    price: "0.55",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0864.png",
    inscription: "#53786724",
    price: "0.555",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2565.png",
    inscription: "#53789505",
    price: "0.555",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2894.png",
    inscription: "#53789834",
    price: "0.56",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1650.png",
    inscription: "#53788070",
    price: "0.569",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2024.png",
    inscription: "#53788964",
    price: "0.5725",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0291.png",
    inscription: "#53786151",
    price: "0.588",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2585.png",
    inscription: "#53789525",
    price: "0.588",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1444.png",
    inscription: "#53787864",
    price: "0.59",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0238.png",
    inscription: "#53786098",
    price: "0.6",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1556.png",
    inscription: "#53787976",
    price: "0.6",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0328.png",
    inscription: "#53786188",
    price: "0.606",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0369.png",
    inscription: "#53786229",
    price: "0.66",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0066.png",
    inscription: "#53785926",
    price: "0.66",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2868.png",
    inscription: "#53789808",
    price: "0.66",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0133.png",
    inscription: "#53785993",
    price: "0.666",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1406.png",
    inscription: "#53787826",
    price: "0.67817",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1827.png",
    inscription: "#53788247",
    price: "0.687",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0877.png",
    inscription: "#53786737",
    price: "0.688",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1621.png",
    inscription: "#53788041",
    price: "0.689",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0432.png",
    inscription: "#53786292",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0072.png",
    inscription: "#53785932",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0729.png",
    inscription: "#53786589",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1559.png",
    inscription: "#53787979",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1006.png",
    inscription: "#53787426",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2205.png",
    inscription: "#53789145",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2305.png",
    inscription: "#53789245",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2351.png",
    inscription: "#53789291",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2353.png",
    inscription: "#53789293",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2842.png",
    inscription: "#53789782",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2928.png",
    inscription: "#53789868",
    price: "0.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0846.png",
    inscription: "#53786706",
    price: "0.694",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2348.png",
    inscription: "#53789288",
    price: "0.6942",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1788.png",
    inscription: "#53788208",
    price: "0.6969",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3250.png",
    inscription: "#53790535",
    price: "0.6969",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2561.png",
    inscription: "#53789501",
    price: "0.699",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1189.png",
    inscription: "#53787609",
    price: "0.7",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1291.png",
    inscription: "#53787711",
    price: "0.7",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2370.png",
    inscription: "#53789310",
    price: "0.75",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3050.png",
    inscription: "#53790335",
    price: "0.75",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1864.png",
    inscription: "#53788284",
    price: "0.77",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2288.png",
    inscription: "#53789228",
    price: "0.77",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1269.png",
    inscription: "#53787689",
    price: "0.799",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2150.png",
    inscription: "#53789090",
    price: "0.8",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2710.png",
    inscription: "#53789650",
    price: "0.8",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0430.png",
    inscription: "#53786290",
    price: "0.81",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0006.png",
    inscription: "#53785866",
    price: "0.822",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2048.png",
    inscription: "#53788988",
    price: "0.869",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3084.png",
    inscription: "#53790369",
    price: "0.87",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0537.png",
    inscription: "#53786397",
    price: "0.88",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3266.png",
    inscription: "#53790551",
    price: "0.88",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0994.png",
    inscription: "#53786854",
    price: "0.888",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1736.png",
    inscription: "#53788156",
    price: "0.888",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2163.png",
    inscription: "#53789103",
    price: "0.888",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3026.png",
    inscription: "#53790311",
    price: "0.888",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2208.png",
    inscription: "#53789148",
    price: "0.9",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2091.png",
    inscription: "#53789031",
    price: "0.92",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1948.png",
    inscription: "#53788368",
    price: "0.969",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1775.png",
    inscription: "#53788195",
    price: "0.97",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1527.png",
    inscription: "#53787947",
    price: "0.979",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1052.png",
    inscription: "#53787472",
    price: "0.98",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3318.png",
    inscription: "#53790603",
    price: "0.98",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1332.png",
    inscription: "#53787752",
    price: "0.988888",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0460.png",
    inscription: "#53786320",
    price: "0.99",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0594.png",
    inscription: "#53786454",
    price: "0.99",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3135.png",
    inscription: "#53790420",
    price: "0.99",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0778.png",
    inscription: "#53786638",
    price: "0.995",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2286.png",
    inscription: "#53789226",
    price: "0.999",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2895.png",
    inscription: "#53789835",
    price: "0.999",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0591.png",
    inscription: "#53786451",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0781.png",
    inscription: "#53786641",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1128.png",
    inscription: "#53787548",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1015.png",
    inscription: "#53787435",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1178.png",
    inscription: "#53787598",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1363.png",
    inscription: "#53787783",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1615.png",
    inscription: "#53788035",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1835.png",
    inscription: "#53788255",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2148.png",
    inscription: "#53789088",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2403.png",
    inscription: "#53789343",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2827.png",
    inscription: "#53789767",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2904.png",
    inscription: "#53789844",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3192.png",
    inscription: "#53790477",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3033.png",
    inscription: "#53790318",
    price: "1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2444.png",
    inscription: "#53789384",
    price: "1.01",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0051.png",
    inscription: "#53785911",
    price: "1.1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0606.png",
    inscription: "#53786466",
    price: "1.1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0097.png",
    inscription: "#53785957",
    price: "1.1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1287.png",
    inscription: "#53787707",
    price: "1.1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1876.png",
    inscription: "#53788296",
    price: "1.1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2176.png",
    inscription: "#53789116",
    price: "1.1",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0634.png",
    inscription: "#53786494",
    price: "1.11",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2858.png",
    inscription: "#53789798",
    price: "1.11",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0014.png",
    inscription: "#53785874",
    price: "1.2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2612.png",
    inscription: "#53789552",
    price: "1.2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3287.png",
    inscription: "#53790572",
    price: "1.3",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2467.png",
    inscription: "#53789407",
    price: "1.40399",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0132.png",
    inscription: "#53785992",
    price: "1.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1195.png",
    inscription: "#53787615",
    price: "1.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1081.png",
    inscription: "#53787501",
    price: "1.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2043.png",
    inscription: "#53788983",
    price: "1.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0479.png",
    inscription: "#53786339",
    price: "1.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1191.png",
    inscription: "#53787611",
    price: "1.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2180.png",
    inscription: "#53789120",
    price: "1.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2905.png",
    inscription: "#53789845",
    price: "1.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2591.png",
    inscription: "#53789531",
    price: "1.7",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0021.png",
    inscription: "#53785881",
    price: "1.88",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1896.png",
    inscription: "#53788316",
    price: "1.888",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1741.png",
    inscription: "#53788161",
    price: "1.904",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3144.png",
    inscription: "#53790429",
    price: "1.93",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0332.png",
    inscription: "#53786192",
    price: "2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0911.png",
    inscription: "#53786771",
    price: "2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1617.png",
    inscription: "#53788037",
    price: "2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1639.png",
    inscription: "#53788059",
    price: "2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2555.png",
    inscription: "#53789495",
    price: "2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3147.png",
    inscription: "#53790432",
    price: "2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1678.png",
    inscription: "#53788098",
    price: "2.22",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1930.png",
    inscription: "#53788350",
    price: "2.23",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1234.png",
    inscription: "#53787654",
    price: "2.345",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3078.png",
    inscription: "#53790363",
    price: "2.5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2700.png",
    inscription: "#53789640",
    price: "2.7",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0804.png",
    inscription: "#53786664",
    price: "3",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2306.png",
    inscription: "#53789246",
    price: "3",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2929.png",
    inscription: "#53789869",
    price: "3",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3332.png",
    inscription: "#53790617",
    price: "3.332",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2147.png",
    inscription: "#53789087",
    price: "3.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1811.png",
    inscription: "#53788231",
    price: "4",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2257.png",
    inscription: "#53789197",
    price: "4.2",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1789.png",
    inscription: "#53788209",
    price: "4.2069",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2139.png",
    inscription: "#53789079",
    price: "4.2069",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3100.png",
    inscription: "#53790385",
    price: "4.2069",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1464.png",
    inscription: "#53787884",
    price: "4.357",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0373.png",
    inscription: "#53786233",
    price: "4.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2271.png",
    inscription: "#53789211",
    price: "5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2448.png",
    inscription: "#53789388",
    price: "5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2641.png",
    inscription: "#53789581",
    price: "5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2719.png",
    inscription: "#53789659",
    price: "5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3114.png",
    inscription: "#53790399",
    price: "5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3229.png",
    inscription: "#53790514",
    price: "5",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2492.png",
    inscription: "#53789432",
    price: "6.42069",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0227.png",
    inscription: "#53786087",
    price: "6.66",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2110.png",
    inscription: "#53789050",
    price: "6.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0480.png",
    inscription: "#53786340",
    price: "6.9",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1581.png",
    inscription: "#53788001",
    price: "6.9",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2869.png",
    inscription: "#53789809",
    price: "6.9",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3014.png",
    inscription: "#53790299",
    price: "7.47",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0052.png",
    inscription: "#53785912",
    price: "8.88",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1350.png",
    inscription: "#53787770",
    price: "8.8888888",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1355.png",
    inscription: "#53787775",
    price: "9",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0003.png",
    inscription: "#53785863",
    price: "10",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0559.png",
    inscription: "#53786419",
    price: "10",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0688.png",
    inscription: "#53786548",
    price: "10",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1821.png",
    inscription: "#53788241",
    price: "10",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1979.png",
    inscription: "#53788399",
    price: "10",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2154.png",
    inscription: "#53789094",
    price: "10",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2315.png",
    inscription: "#53789255",
    price: "10",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3174.png",
    inscription: "#53790459",
    price: "10",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0829.png",
    inscription: "#53786689",
    price: "12",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2023.png",
    inscription: "#53788963",
    price: "12",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat3237.png",
    inscription: "#53790522",
    price: "12",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1478.png",
    inscription: "#53787898",
    price: "14",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2974.png",
    inscription: "#53789914",
    price: "14",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat2782.png",
    inscription: "#53789722",
    price: "19",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0635.png",
    inscription: "#53786495",
    price: "20",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0861.png",
    inscription: "#53786721",
    price: "69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0424.png",
    inscription: "#53786284",
    price: "69.69",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1440.png",
    inscription: "#53787860",
    price: "69.696969",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat1010.png",
    inscription: "#53787430",
    price: "100",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0000.png",
    inscription: "#53785860",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0001.png",
    inscription: "#53785861",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0010.png",
    inscription: "#53785870",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0100.png",
    inscription: "#53785960",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0101.png",
    inscription: "#53785961",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0102.png",
    inscription: "#53785962",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0103.png",
    inscription: "#53785963",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0104.png",
    inscription: "#53785964",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0105.png",
    inscription: "#53785965",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0106.png",
    inscription: "#53785966",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0107.png",
    inscription: "#53785967",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0108.png",
    inscription: "#53785968",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0109.png",
    inscription: "#53785969",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0011.png",
    inscription: "#53785871",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0110.png",
    inscription: "#53785970",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0111.png",
    inscription: "#53785971",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0112.png",
    inscription: "#53785972",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0113.png",
    inscription: "#53785973",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0114.png",
    inscription: "#53785974",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0115.png",
    inscription: "#53785975",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0116.png",
    inscription: "#53785976",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0117.png",
    inscription: "#53785977",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0118.png",
    inscription: "#53785978",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0119.png",
    inscription: "#53785979",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0012.png",
    inscription: "#53785872",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0120.png",
    inscription: "#53785980",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0122.png",
    inscription: "#53785982",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0123.png",
    inscription: "#53785983",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0124.png",
    inscription: "#53785984",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0125.png",
    inscription: "#53785985",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0126.png",
    inscription: "#53785986",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0127.png",
    inscription: "#53785987",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0128.png",
    inscription: "#53785988",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0129.png",
    inscription: "#53785989",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0013.png",
    inscription: "#53785873",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0130.png",
    inscription: "#53785990",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0131.png",
    inscription: "#53785991",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0134.png",
    inscription: "#53785994",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0135.png",
    inscription: "#53785995",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0136.png",
    inscription: "#53785996",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0137.png",
    inscription: "#53785997",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0138.png",
    inscription: "#53785998",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0139.png",
    inscription: "#53785999",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0140.png",
    inscription: "#53786000",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0141.png",
    inscription: "#53786001",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0142.png",
    inscription: "#53786002",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0143.png",
    inscription: "#53786003",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0144.png",
    inscription: "#53786004",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0145.png",
    inscription: "#53786005",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0146.png",
    inscription: "#53786006",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0147.png",
    inscription: "#53786007",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0148.png",
    inscription: "#53786008",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0149.png",
    inscription: "#53786009",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0015.png",
    inscription: "#53785875",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0150.png",
    inscription: "#53786010",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0151.png",
    inscription: "#53786011",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0152.png",
    inscription: "#53786012",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0153.png",
    inscription: "#53786013",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0154.png",
    inscription: "#53786014",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0155.png",
    inscription: "#53786015",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0156.png",
    inscription: "#53786016",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0157.png",
    inscription: "#53786017",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0158.png",
    inscription: "#53786018",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0159.png",
    inscription: "#53786019",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0016.png",
    inscription: "#53785876",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0160.png",
    inscription: "#53786020",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0161.png",
    inscription: "#53786021",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0162.png",
    inscription: "#53786022",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0163.png",
    inscription: "#53786023",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0164.png",
    inscription: "#53786024",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0165.png",
    inscription: "#53786025",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0166.png",
    inscription: "#53786026",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0167.png",
    inscription: "#53786027",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0168.png",
    inscription: "#53786028",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0169.png",
    inscription: "#53786029",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0017.png",
    inscription: "#53785877",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0170.png",
    inscription: "#53786030",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0171.png",
    inscription: "#53786031",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0172.png",
    inscription: "#53786032",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0173.png",
    inscription: "#53786033",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0174.png",
    inscription: "#53786034",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0175.png",
    inscription: "#53786035",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0176.png",
    inscription: "#53786036",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0177.png",
    inscription: "#53786037",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0178.png",
    inscription: "#53786038",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0179.png",
    inscription: "#53786039",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0018.png",
    inscription: "#53785878",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0180.png",
    inscription: "#53786040",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0181.png",
    inscription: "#53786041",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0182.png",
    inscription: "#53786042",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0184.png",
    inscription: "#53786044",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0185.png",
    inscription: "#53786045",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0186.png",
    inscription: "#53786046",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0187.png",
    inscription: "#53786047",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0188.png",
    inscription: "#53786048",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0189.png",
    inscription: "#53786049",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0019.png",
    inscription: "#53785879",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0190.png",
    inscription: "#53786050",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0191.png",
    inscription: "#53786051",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0192.png",
    inscription: "#53786052",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0193.png",
    inscription: "#53786053",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0194.png",
    inscription: "#53786054",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0195.png",
    inscription: "#53786055",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0196.png",
    inscription: "#53786056",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0197.png",
    inscription: "#53786057",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0198.png",
    inscription: "#53786058",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0199.png",
    inscription: "#53786059",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0002.png",
    inscription: "#53785862",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0020.png",
    inscription: "#53785880",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0200.png",
    inscription: "#53786060",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0201.png",
    inscription: "#53786061",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0202.png",
    inscription: "#53786062",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0203.png",
    inscription: "#53786063",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0204.png",
    inscription: "#53786064",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0205.png",
    inscription: "#53786065",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0206.png",
    inscription: "#53786066",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0207.png",
    inscription: "#53786067",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0208.png",
    inscription: "#53786068",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0209.png",
    inscription: "#53786069",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0210.png",
    inscription: "#53786070",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0211.png",
    inscription: "#53786071",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0212.png",
    inscription: "#53786072",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0213.png",
    inscription: "#53786073",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0214.png",
    inscription: "#53786074",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0215.png",
    inscription: "#53786075",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0216.png",
    inscription: "#53786076",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0217.png",
    inscription: "#53786077",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0218.png",
    inscription: "#53786078",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0219.png",
    inscription: "#53786079",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0022.png",
    inscription: "#53785882",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0220.png",
    inscription: "#53786080",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0221.png",
    inscription: "#53786081",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0223.png",
    inscription: "#53786083",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0224.png",
    inscription: "#53786084",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0225.png",
    inscription: "#53786085",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0226.png",
    inscription: "#53786086",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0228.png",
    inscription: "#53786088",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0229.png",
    inscription: "#53786089",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0023.png",
    inscription: "#53785883",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0230.png",
    inscription: "#53786090",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0231.png",
    inscription: "#53786091",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0232.png",
    inscription: "#53786092",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0233.png",
    inscription: "#53786093",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0234.png",
    inscription: "#53786094",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0235.png",
    inscription: "#53786095",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0236.png",
    inscription: "#53786096",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0237.png",
    inscription: "#53786097",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0024.png",
    inscription: "#53785884",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0240.png",
    inscription: "#53786100",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0241.png",
    inscription: "#53786101",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0242.png",
    inscription: "#53786102",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0243.png",
    inscription: "#53786103",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0244.png",
    inscription: "#53786104",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0245.png",
    inscription: "#53786105",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0246.png",
    inscription: "#53786106",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0247.png",
    inscription: "#53786107",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0248.png",
    inscription: "#53786108",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0249.png",
    inscription: "#53786109",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0025.png",
    inscription: "#53785885",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0250.png",
    inscription: "#53786110",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0251.png",
    inscription: "#53786111",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0252.png",
    inscription: "#53786112",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0253.png",
    inscription: "#53786113",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0254.png",
    inscription: "#53786114",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0255.png",
    inscription: "#53786115",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0256.png",
    inscription: "#53786116",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0257.png",
    inscription: "#53786117",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0258.png",
    inscription: "#53786118",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0259.png",
    inscription: "#53786119",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0026.png",
    inscription: "#53785886",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0260.png",
    inscription: "#53786120",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0261.png",
    inscription: "#53786121",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0262.png",
    inscription: "#53786122",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0263.png",
    inscription: "#53786123",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0264.png",
    inscription: "#53786124",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0265.png",
    inscription: "#53786125",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0267.png",
    inscription: "#53786127",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0268.png",
    inscription: "#53786128",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0269.png",
    inscription: "#53786129",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0027.png",
    inscription: "#53785887",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0270.png",
    inscription: "#53786130",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0271.png",
    inscription: "#53786131",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0272.png",
    inscription: "#53786132",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0273.png",
    inscription: "#53786133",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0274.png",
    inscription: "#53786134",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0275.png",
    inscription: "#53786135",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0276.png",
    inscription: "#53786136",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0277.png",
    inscription: "#53786137",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0278.png",
    inscription: "#53786138",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0279.png",
    inscription: "#53786139",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0028.png",
    inscription: "#53785888",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0280.png",
    inscription: "#53786140",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0281.png",
    inscription: "#53786141",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0282.png",
    inscription: "#53786142",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0283.png",
    inscription: "#53786143",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0284.png",
    inscription: "#53786144",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0285.png",
    inscription: "#53786145",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0286.png",
    inscription: "#53786146",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0287.png",
    inscription: "#53786147",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0288.png",
    inscription: "#53786148",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0289.png",
    inscription: "#53786149",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0029.png",
    inscription: "#53785889",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0290.png",
    inscription: "#53786150",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0292.png",
    inscription: "#53786152",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0293.png",
    inscription: "#53786153",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0294.png",
    inscription: "#53786154",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0295.png",
    inscription: "#53786155",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0296.png",
    inscription: "#53786156",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0297.png",
    inscription: "#53786157",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0298.png",
    inscription: "#53786158",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0299.png",
    inscription: "#53786159",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0030.png",
    inscription: "#53785890",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0300.png",
    inscription: "#53786160",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0301.png",
    inscription: "#53786161",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0302.png",
    inscription: "#53786162",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0303.png",
    inscription: "#53786163",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0304.png",
    inscription: "#53786164",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0305.png",
    inscription: "#53786165",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0306.png",
    inscription: "#53786166",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0307.png",
    inscription: "#53786167",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0308.png",
    inscription: "#53786168",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0309.png",
    inscription: "#53786169",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0031.png",
    inscription: "#53785891",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0310.png",
    inscription: "#53786170",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0312.png",
    inscription: "#53786172",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0313.png",
    inscription: "#53786173",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0314.png",
    inscription: "#53786174",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0315.png",
    inscription: "#53786175",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0316.png",
    inscription: "#53786176",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0317.png",
    inscription: "#53786177",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0318.png",
    inscription: "#53786178",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0319.png",
    inscription: "#53786179",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0032.png",
    inscription: "#53785892",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0320.png",
    inscription: "#53786180",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0321.png",
    inscription: "#53786181",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0322.png",
    inscription: "#53786182",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0323.png",
    inscription: "#53786183",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0324.png",
    inscription: "#53786184",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0325.png",
    inscription: "#53786185",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0326.png",
    inscription: "#53786186",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0327.png",
    inscription: "#53786187",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0329.png",
    inscription: "#53786189",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0033.png",
    inscription: "#53785893",
    price: "",
  },
  {
    img: "https://img-cdn.magiceden.dev/rs:fit:400:0:0/plain/https://quantumcats.xyz/collection/sq1_0305/cat0330.png",
    inscription: "#53786190",
    price: "",
  },
];

module.exports = catsData;
