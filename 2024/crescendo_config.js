var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024onwat",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 9999,
      "required": "true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Notes Scored",
      "code": "ascore",
      "type": "counter"
    },
    { "name": "Note 1",
      "code": "one",
      "type": "bool"
    },
    { "name": "Note 2",
      "code": "two",
      "type": "bool"
    },
    { "name": "Note 3",
      "code": "three",
      "type": "bool"
    },
    { "name": "Note 4",
      "code": "four",
      "type": "bool"
    },
    { "name": "Note 5",
      "code": "five",
      "type": "bool"
    },
    { "name": "Note 6",
      "code": "six",
      "type": "bool"
    },
    { "name": "Note 7",
      "code": "seven",
      "type": "bool"
    },
    { "name": "Note 8",
      "code": "eight",
      "type": "bool"
    },
    { "name": "Field Image",
      "code": "img",
      "type": "clickable_image",
      "filename": "2024/field_image_Windsor.png",
      "clickRestriction": "zero",
      "shape": "circle 5 black red true",
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Notes Fed",
      "code": "fed",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "h": "Harmony<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Note in Trap",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "radio",
      "choices": {
      "m": "Most/all of the match<br>",
      "p": "Part of the match<br>",
      "n": "Never"
      },
      "defaultValue": "x"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 45,
      "maxSize": 300
    }
  ]
}`;
