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
    "Antarctica/Macquarie": {
      "name": "Antarctica/Macquarie",
      "abbr": [
        "AEST",
        "AEDT",
        "AEST",
        "-00",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "+11"
      ],
      "until": [
        -1680508800000,
        -1665392400000,
        -1601719200000,
        -687052800000,
        -71136000000,
        -55411200000,
        -37267200000,
        -25776000000,
        -5817600000,
        5673600000,
        25632000000,
        37728000000,
        57686400000,
        67968000000,
        89136000000,
        100022400000,
        120585600000,
        131472000000,
        152035200000,
        162921600000,
        183484800000,
        194976000000,
        215539200000,
        226425600000,
        246988800000,
        257875200000,
        278438400000,
        289324800000,
        309888000000,
        320774400000,
        341337600000,
        352224000000,
        372787200000,
        386092800000,
        404841600000,
        417542400000,
        436291200000,
        447177600000,
        467740800000,
        478627200000,
        499190400000,
        510076800000,
        530035200000,
        542736000000,
        562089600000,
        574790400000,
        594144000000,
        606240000000,
        625593600000,
        637689600000,
        657043200000,
        670348800000,
        686678400000,
        701798400000,
        718128000000,
        733248000000,
        749577600000,
        764697600000,
        781027200000,
        796147200000,
        812476800000,
        828201600000,
        844531200000,
        859651200000,
        875980800000,
        891100800000,
        907430400000,
        922550400000,
        938880000000,
        954000000000,
        967305600000,
        985449600000,
        1002384000000,
        1017504000000,
        1033833600000,
        1048953600000,
        1065283200000,
        1080403200000,
        1096732800000,
        1111852800000,
        1128182400000,
        1143907200000,
        1159632000000,
        1174752000000,
        1191686400000,
        1207411200000,
        1223136000000,
        1238860800000,
        1254585600000,
        1270310400000,
        null
      ],
      "offset": [
        -600,
        -660,
        -600,
        0,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -660
      ],
      "dst": [
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
        false
      ]
    }
  },
  "links": []
};
})); 