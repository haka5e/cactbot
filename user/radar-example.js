'use strict';

// Rename this file to `radar.js` and edit it to change the radar ui.
// This file is Javascript.  Anything after "//" on a line is a comment.
// If you edit this file, remember to reload ACT or click the "Reload overlay"
// button on the raidboss CactbotOverlay.
// If there are errors in this file, they will appear in the OverlayPlugin.dll
// log window in ACT.

// Monsters located out of this range will be hidden in the overlay and 0 means
// never hide monsters. Note that you have to detect the monster first, which
// usually needs to be close enough to make ACT "see" the monsters at first.
Options.DetectionRange = 0;

// If true, then text-to-speech alerts are read aloud.
Options.TTS = false;

// If true, then a pop sound alerts are read aloud (but will be overwrite by TTS).
Options.PopSoundAlert = true;

// If true, then the earliest puller of mobs will be recorded.
Options.Puller = true;

// If true, then the position of monster will be shown. (Only x and y)
Options.Position = true;

// You can add your own monster list here.
Options.CustomMonsters = {
  // 'Any': {
  //   'name': {  // monster names
  //     'en': 'ya-te-veo',
  //     'cn': '食人花',
  //     'ja': 'ヤテベオ',
  //   },
  //   'hp': 1000,  // minimum hp of the momnster
  //   'rank': 'Custom',  // rank
  // },
};

// You can also add different options to different ranks.
Options.RankOptions = {
  // 'S': {
  //   DetectionRange: 100,
  //   TTS: true,
  //   Type: 'mob',  // can be 'mob' or 'any'
  // },
  // 'Custom': {
  //   DetectionRange: 500,
  //   TTS: false,
  //   PopSoundAlert: true,
  //   Type: 'any',
  // },
};
