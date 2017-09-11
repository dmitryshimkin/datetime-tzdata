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
    "Asia/Tomsk": {
      "name": "Asia/Tomsk",
      "abbr": [
        "LMT",
        "+06",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+06",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07"
      ],
      "until": [
        -1578807591000,
        -1247551200000,
        354906000000,
        370713600000,
        386442000000,
        402249600000,
        417978000000,
        433785600000,
        449600400000,
        465332400000,
        481057200000,
        496782000000,
        512506800000,
        528231600000,
        543956400000,
        559681200000,
        575406000000,
        591130800000,
        606855600000,
        622580400000,
        638305200000,
        654634800000,
        686088000000,
        695764800000,
        701809200000,
        717534000000,
        733258800000,
        748983600000,
        764708400000,
        780433200000,
        796158000000,
        811882800000,
        828212400000,
        846356400000,
        859662000000,
        877806000000,
        891111600000,
        909255600000,
        922561200000,
        941310000000,
        954010800000,
        972759600000,
        985460400000,
        1004209200000,
        1017514800000,
        1020193200000,
        1035662400000,
        1048968000000,
        1067112000000,
        1080417600000,
        1099166400000,
        1111867200000,
        1130616000000,
        1143316800000,
        1162065600000,
        1174766400000,
        1193515200000,
        1206820800000,
        1224964800000,
        1238270400000,
        1256414400000,
        1269720000000,
        1288468800000,
        1301169600000,
        1414263600000,
        1464465600000,
        null
      ],
      "offset": [
        -339.85,
        -360,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -360,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -480,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420
      ],
      "dst": [
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
        true,
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
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 