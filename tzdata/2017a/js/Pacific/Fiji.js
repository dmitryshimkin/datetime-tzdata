(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // Anonymous AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  }

  if (typeof global === 'object') {
    root = global;
  }

  // Always expose tzdata to globals
  root.tzdata = factory();
}(this, function () {
  return {
  "version": "2017a",
  "zones": {
    "Pacific/Fiji": {
      "name": "Pacific/Fiji",
      "abbr": [
        "LMT",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12",
        "+13",
        "+12"
      ],
      "until": [
        -1709985344000,
        909842400000,
        920124000000,
        941896800000,
        951573600000,
        1259416800000,
        1269698400000,
        1287842400000,
        1299333600000,
        1319292000000,
        1327154400000,
        1350741600000,
        1358604000000,
        1382796000000,
        1390050000000,
        1414850400000,
        1421503200000,
        1446300000000,
        1452952800000,
        1478354400000,
        1484402400000,
        1509804000000,
        1516456800000,
        1541253600000,
        1547906400000,
        1572703200000,
        1579356000000,
        1604152800000,
        1610805600000,
        1636207200000,
        1642255200000,
        1667656800000,
        1673704800000,
        1699106400000,
        1705759200000,
        1730556000000,
        1737208800000,
        1762005600000,
        1768658400000,
        1793455200000,
        1800108000000,
        1825509600000,
        1831557600000,
        1856959200000,
        1863612000000,
        1888408800000,
        1895061600000,
        1919858400000,
        1926511200000,
        1951308000000,
        1957960800000,
        1983362400000,
        1989410400000,
        2014812000000,
        2020860000000,
        2046261600000,
        2052914400000,
        2077711200000,
        2084364000000,
        2109160800000,
        2115813600000,
        2140610400000,
        2147263200000,
        null
      ],
      "offset": [
        -715.7333,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720
      ],
      "dst": [
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 