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
    "Africa/Windhoek": {
      "name": "Africa/Windhoek",
      "abbr": [
        "+0130",
        "SAST",
        "SAST",
        "SAST",
        "CAT",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST",
        "WAT",
        "WAST"
      ],
      "until": [
        -2109288600000,
        -860976000000,
        -845254800000,
        637970400000,
        765324000000,
        778640400000,
        796780800000,
        810090000000,
        828835200000,
        841539600000,
        860284800000,
        873594000000,
        891734400000,
        905043600000,
        923184000000,
        936493200000,
        954633600000,
        967942800000,
        986083200000,
        999392400000,
        1018137600000,
        1030842000000,
        1049587200000,
        1062896400000,
        1081036800000,
        1094346000000,
        1112486400000,
        1125795600000,
        1143936000000,
        1157245200000,
        1175385600000,
        1188694800000,
        1207440000000,
        1220749200000,
        1238889600000,
        1252198800000,
        1270339200000,
        1283648400000,
        1301788800000,
        1315098000000,
        1333238400000,
        1346547600000,
        1365292800000,
        1377997200000,
        1396742400000,
        1410051600000,
        1428192000000,
        1441501200000,
        1459641600000,
        1472950800000,
        1491091200000,
        1504400400000,
        1522540800000,
        1535850000000,
        1554595200000,
        1567299600000,
        1586044800000,
        1599354000000,
        1617494400000,
        1630803600000,
        1648944000000,
        1662253200000,
        1680393600000,
        1693702800000,
        1712448000000,
        1725152400000,
        1743897600000,
        1757206800000,
        1775347200000,
        1788656400000,
        1806796800000,
        1820106000000,
        1838246400000,
        1851555600000,
        1869696000000,
        1883005200000,
        1901750400000,
        1914454800000,
        1933200000000,
        1946509200000,
        1964649600000,
        1977958800000,
        1996099200000,
        2009408400000,
        2027548800000,
        2040858000000,
        2058998400000,
        2072307600000,
        2091052800000,
        2104362000000,
        2122502400000,
        2135811600000,
        null
      ],
      "offset": [
        -90,
        -120,
        -180,
        -120,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120
      ],
      "dst": [
        false,
        false,
        true,
        false,
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
        true
      ]
    }
  },
  "links": []
};
})); 