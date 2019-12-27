'use strict';

[{
  zoneRegex: /^(Eden's Gate: Resurrection|伊甸希望乐园 \(觉醒之章1\)|희망의 낙원 에덴: 각성편 \(1\))$/,
  timelineFile: 'e1n.txt',
  triggers: [
    {
      id: 'E1N Eden\'s Gravity',
      regex: / 14:3D94:Eden Prime starts using Eden's Gravity/,
      regexCn: / 14:3D94:至尊伊甸 starts using 伊甸重力/,
      regexDe: / 14:3D94:Prim-Eden starts using Eden-Gravitas/,
      regexFr: / 14:3D94:Primo-Éden starts using Gravité Édénique/,
      regexJa: / 14:3D94:エデン・プライム starts using エデン・グラビデ/,
      regexKo: / 14:3D94:에덴 프라임 starts using 에덴 그라비데/,
      condition: function(data) {
        return data.role == 'healer';
      },
      infoText: {
        en: 'aoe',
        de: 'AoE',
        fr: 'Dégâts de zone',
        cn: 'AOE',
        ko: 'AOE',
      },
    },
    {
      id: 'E1N Fragor Maximus',
      regex: / 14:3DA4:Eden Prime starts using Fragor Maximus/,
      regexCn: / 14:3DA4:至尊伊甸 starts using 极大爆炸/,
      regexDe: / 14:3DA4:Prim-Eden starts using Fragor Maximus/,
      regexFr: / 14:3DA4:Primo-Éden starts using Fragor Maximus/,
      regexJa: / 14:3DA4:エデン・プライム starts using フラゴルマクシマス/,
      regexKo: / 14:3DA4:에덴 프라임 starts using 우주 탄생/,
      condition: function(data) {
        return data.role == 'healer';
      },
      infoText: {
        en: 'aoe',
        de: 'AoE',
        fr: 'Dégâts de zone',
        cn: 'AOE',
        ko: 'AOE',
      },
    },
    {
      id: 'E1N Dimensional Shift',
      regex: / 14:3D9C:Eden Prime starts using Dimensional Shift/,
      regexCn: / 14:3D9C:至尊伊甸 starts using 空间转换/,
      regexDe: / 14:3D9C:Prim-Eden starts using Dimensionsverschiebung/,
      regexFr: / 14:3D9C:Primo-Éden starts using Translation Dimensionnelle/,
      regexJa: / 14:3D9C:エデン・プライム starts using ディメンションシフト/,
      regexKo: / 14:3D9C:에덴 프라임 starts using 차원 전환/,
      condition: function(data) {
        return data.role == 'healer';
      },
      infoText: {
        en: 'aoe',
        de: 'AoE',
        fr: 'Dégâts de zone',
        cn: 'AOE',
        ko: 'AOE',
      },
    },
    {
      id: 'E1N Eden\'s Flare',
      regex: / 14:3D97:Eden Prime starts using Eden's Flare/,
      regexCn: / 14:3D97:至尊伊甸 starts using 伊甸核爆/,
      regexDe: / 14:3D97:Prim-Eden starts using Eden-Flare/,
      regexFr: / 14:3D97:Primo-Éden starts using Brasier Édénique/,
      regexJa: / 14:3D97:エデン・プライム starts using エデン・フレア/,
      regexKo: / 14:3D97:에덴 프라임 starts using 에덴 플레어/,
      alertText: {
        en: 'Under',
        de: 'Unter ihn',
        fr: 'Sous le boss',
        cn: '脚下',
        ko: '보스안으로',
      },
    },
    {
      id: 'E1N Vice of Vanity You',
      regex: / 23:\y{ObjectId}:(\y{Name}):\y{ObjectId}:Eden Prime:....:....:0011:/,
      regexCn: / 23:\y{ObjectId}:(\y{Name}):\y{ObjectId}:至尊伊甸:....:....:0011:/,
      regexDe: / 23:\y{ObjectId}:(\y{Name}):\y{ObjectId}:Prim-Eden:....:....:0011:/,
      regexFr: / 23:\y{ObjectId}:(\y{Name}):\y{ObjectId}:Primo-Éden:....:....:0011:/,
      regexJa: / 23:\y{ObjectId}:(\y{Name}):\y{ObjectId}:エデン・プライム:....:....:0011:/,
      regexKo: / 23:\y{ObjectId}:(\y{Name}):\y{ObjectId}:에덴 프라임:....:....:0011:/,
      condition: function(data, matches) {
        return data.me == matches[1];
      },
      alertText: {
        en: 'Tank Laser on YOU',
        de: 'Tank Laser auf DIR',
        fr: 'Tank laser sur VOUS',
        cn: '坦克射线点名',
        ko: '탱크 레이저 on YOU',
      },
    },
    {
      id: 'E1N Spear Of Paradise',
      regex: / 14:3DA1:Eden Prime starts using Spear [Oo]f Paradise on (\y{Name})/,
      regexCn: / 14:3DA1:至尊伊甸 starts using 乐园之枪 on (\y{Name})/,
      regexDe: / 14:3DA1:Prim-Eden starts using Paradiesspeer on (\y{Name})/,
      regexFr: / 14:3DA1:Primo-Éden starts using Lance [Dd]u [Pp]aradis on (\y{Name})/,
      regexJa: / 14:3DA1:エデン・プライム starts using スピア・オブ・パラダイス on (\y{Name})/,
      regexKo: / 14:3DA1:에덴 프라임 starts using 낙원의 창 on (\y{Name})/,
      alertText: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tankbuster auf DIR',
            fr: 'Tankbuster sur VOUS',
            cn: '死刑点名',
            ko: '탱크버스터 on YOU',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches[1]),
            de: 'Tankbuster auf ' + data.ShortName(matches[1]),
            fr: 'Tankbuster sur ' + data.ShortName(matches[1]),
            cn: '死刑 -> ' + data.ShortName(matches[1]),
            ko: '탱버 -> ' + data.ShortName(matches[1]),
          };
        }
      },
      infoText: function(data, matches) {
        if (matches[1] != data.me && data.role == 'tank') {
          return {
            en: 'Buster on ' + data.ShortName(matches[1]),
            de: 'Tankbuster auf ' + data.ShortName(matches[1]),
            fr: 'Tankbuster sur ' + data.ShortName(matches[1]),
            cn: '死刑 -> ' + data.ShortName(matches[1]),
            ko: '탱버 -> ' + data.ShortName(matches[1]),
          };
        }
      },
    },
    {
      id: 'E1N Vice of Apathy Mark',
      regex: / 1B:\y{ObjectId}:(\y{Name}):....:....:001C:/,
      condition: function(data, matches) {
        return data.me == matches[1];
      },
      alertText: {
        en: 'Drop Puddle, Run Middle',
        de: 'Flächen ablegen, danach in die Mitte',
        fr: 'Placez les flaques, courez au centre',
        cn: '放圈，回中央',
        ko: '장판 깔고 중앙으로',
      },
    },
    {
      // 10.5 second cast, maybe warn 6 seconds ahead so that folks bait outside.
      id: 'E1N Pure Light',
      regex: / 14:3DA3:Eden Prime starts using Pure Light/,
      regexCn: / 14:3DA3:至尊伊甸 starts using 净土之光/,
      regexDe: / 14:3DA3:Prim-Eden starts using Läuterndes Licht/,
      regexFr: / 14:3DA3:Primo-Éden starts using Lumière Purificatrice/,
      regexJa: / 14:3DA3:エデン・プライム starts using ピュアライト/,
      regexKo: / 14:3DA3:에덴 프라임 starts using 완전한 빛/,
      delaySeconds: 4.5,
      alertText: {
        en: 'Get Behind',
        de: 'Hinter ihn',
        fr: 'Derrière le boss',
        cn: '身后躲避',
        ko: '뒤로',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Eden Prime': 'Eden Prime',
        'Eden': 'Eden',
        'Engage!': 'Start!',
        'Guardian of Paradise': 'Hüter von Eden',
      },
      'replaceText': {
        'attack': 'Attacke',
        'Vice Of Vanity': 'Laster der Eitelkeit',
        'Vice Of Apathy': 'Laster der Apathie',
        'Vice And Virtue': 'Laster und Tugend',
        'Unto Dust': 'Sprengung',
        'Unknown Ability': 'Unknown Ability',
        'Sunder Pressure': 'Druck',
        'Spear Of Paradise': 'Paradiesspeer',
        'Pure Light': 'Läuterndes Licht',
        'Pure Beam': 'Läuternder Strahl',
        'Primeval Stasis': 'Urzeitliche Stase',
        'Paradise Lost': 'Verlorenes Paradies',
        'Paradisal Dive': 'Paradiessturz',
        'Mana Slice': 'Manahieb',
        'Mana Burst': 'Manastoß',
        'Heavensunder': 'Himmelsdonner',
        'Fragor Maximus': 'Fragor Maximus',
        'Eternal Breath': 'Ewiger Atem',
        'Enrage': 'Finalangriff',
        'Eden\'s Thunder III': 'Eden-Blitzga',
        'Eden\'s Gravity': 'Eden-Gravitas',
        'Eden\'s Flare': 'Eden-Flare',
        'Eden\'s Fire III': 'Eden-Feuga',
        'Eden\'s Blizzard III': 'Eden-Eisga',
        'Dimensional Shift': 'Dimensionsverschiebung',
        'Delta Attack': 'Delta-Attacke',
        '--untargetable--': '--nich anvisierbar--',
        '--targetable--': '--anvisierbar--',
        '--corner--': '--ecke--',
        '--center--': '..mitte--',
      },
      '~effectNames': {
        'Summon Order': 'Egi-Attacke I',
        'Heavy': 'Gewicht',
        'Fetters': 'Gefesselt',
        'Brink of Death': 'Sterbenselend',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Eden Prime': 'Primo-Éden',
        'Engage!': 'À l\'attaque',
      },
      'replaceText': {
        'attack': 'Attaque',
        'Spear Of Paradise': 'Lance du paradis',
        'Vice of Vanity': 'Péché de vanité',
        'Vice of Apathy': 'Péché d\'apathie',
        'Vice and Virtue': 'Vice et vertue',
        'Unto Dust': 'Déflagration',
        'Unknown Ability': 'Unknown Ability',
        'Sunder Pressure': 'Force de pesanteur',
        'Spear of Paradise': 'Lance du paradis',
        'Pure Light': 'Lumière purificatrice',
        'Pure Beam': 'Rayon purificateur',
        'Primeval Stasis': 'Stase primordiale',
        'Paradise Lost': 'Paradis perdu',
        'Paradisal Dive': 'Piqué du paradis',
        'Mana Slice': 'Taillade de mana',
        'Mana Burst': 'Explosion de mana',
        'Heavensunder': 'Ravageur de paradis',
        'Fragor Maximus': 'Fragor Maximus',
        'Eternal Breath': 'Souffle de l\'éternel',
        'Enrage': 'Enrage',
        'Eden\'s Thunder III': 'Méga Foudre édénique',
        'Eden\'s Gravity': 'Gravité édénique',
        'Eden\'s Flare': 'Brasier édénique',
        'Eden\'s Fire III': 'Méga Feu édénique',
        'Eden\'s Blizzard III': 'Méga Glace édénique',
        'Dimensional Shift': 'Translation dimensionnelle',
        'Delta Attack': 'Attaque Delta',
        '--untargetable--': '--Impossible à cibler--',
        '--targetable--': '--Ciblable--',
        '--sync--': '--Synchronisation--',
        '--Reset--': '--Réinitialisation--',
        '--corner--': '--Coin--',
        '--center--': '--Centre--',
      },
      '~effectNames': {
        'Summon Order': 'Action en attente: 1',
        'Heavy': 'Pesanteur',
        'Fetters': 'Attache',
        'Brink of Death': 'Mourant',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Eden Prime': 'Eden Prime',
        'Engage!': '戦闘開始！',
      },
      'replaceText': {
        'attack': '攻撃',
        'Vice of Vanity': 'ヴァイス・オブ・ヴァニティー',
        'Vice of Apathy': 'ヴァイス・オブ・アパシー',
        'Vice and Virtue': 'ヴァイス・アンド・ヴァーチュー',
        'Unto Dust': '爆裂',
        'Unknown Ability': 'Unknown Ability',
        'Sunder Pressure': '重圧',
        'Spear of Paradise': 'スピア・オブ・パラダイス',
        'Pure Light': 'ピュアライト',
        'Pure Beam': 'ピュアレイ',
        'Primeval Stasis': 'プライムイーバルステーシス',
        'Paradise Lost': 'パラダイスロスト',
        'Paradisal Dive': 'パラダイスダイブ',
        'Mana Slice': 'マナスラッシュ',
        'Mana Burst': 'マナバースト',
        'Heavensunder': 'ヘヴンサンダー',
        'Fragor Maximus': 'フラゴルマクシマス',
        'Eternal Breath': 'エターナル・ブレス',
        'Eden\'s Thunder III': 'エデン・サンダガ',
        'Eden\'s Gravity': 'エデン・グラビデ',
        'Eden\'s Flare': 'エデン・フレア',
        'Eden\'s Fire III': 'エデン・ファイガ',
        'Eden\'s Blizzard III': 'エデン・ブリザガ',
        'Dimensional Shift': 'ディメンションシフト',
        'Delta Attack': 'デルタアタック',
      },
      '~effectNames': {
        'Summon Order': 'アクション実行待機I',
        'Heavy': 'ヘヴィ',
        'Fetters': '拘束',
        'Brink of Death': '衰弱［強］',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Eden Prime': '至尊伊甸',
        'Eden': '伊甸',
        'Guardian of Paradise': '伊甸守护者',
        'Engage!': '战斗开始！',
      },
      'replaceText': {
        'attack': '攻击',
        'Vice [oO]f Vanity': '虚荣之恶',
        'Vice [oO]f Apathy': '冷漠之恶',
        'Vice [aA]nd Virtue': '恶习与美德',
        'Unto Dust': '归于尘土',
        'Sunder Pressure': '超重压',
        'Spear [oO]f Paradise': '乐园之枪',
        'Pure Light': '净土之光',
        'Pure Beam': '净土射线',
        'Primeval Stasis': '原初停滞',
        'Paradise Lost': '失乐园',
        'Paradisal Dive': '乐园冲',
        'Mana Slice': '魔力斩击',
        'Mana Burst': '魔力爆发',
        'Heavensunder': '天国分断',
        'Fragor Maximus': '极大爆炸',
        'Eternal Breath': '永恒吐息',
        'Eden\'s Thunder III': '伊甸暴雷',
        'Eden\'s Gravity': '伊甸重力',
        'Eden\'s Flare': '伊甸核爆',
        'Eden\'s Fire III': '伊甸爆炎',
        'Eden\'s Blizzard III': '伊甸冰封',
        'Dimensional Shift': '空间转换',
        'Delta Attack': '三角攻击',
        '--corner--': '--角落--',
        '--center--': '--中央--',
        '--untargetable--': '--无法选中--',
        '--targetable--': '--可选中--',
      },
      '~effectNames': {
        'Summon Order': '发动技能待命I',
        'Heavy': '加重',
        'Fetters': '拘束',
        'Brink of Death': '濒死',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Eden Prime': '에덴 프라임',
        'Eden': '에덴',
        'Guardian of Paradise': '에덴의 수호자',
        'Engage!': '전투 시작!',
      },
      'replaceText': {
        'attack': '공격', 
        'Vice [oO]f Vanity': '허영의 악덕',
        'Vice [oO]f Apathy': '냉담의 악덕',
        'Vice [aA]nd Virtue': '선과 악',
        'Unto Dust': '폭렬',
        'Sunder Pressure': '중압',
        'Spear [oO]f Paradise': '낙원의 창',
        'Pure Light': '완전한 빛',
        'Pure Beam': '완전한 광선',
        'Primeval Stasis': '태초의 안정',
        'Paradise Lost': '실낙원',
        'Paradisal Dive': '낙원 강하',
        'Mana Slice': '마나 베기',
        'Mana Burst': '마나 폭발',
        'Heavensunder': '천국의 낙뢰',
        'Fragor Maximus': '우주 탄생',
        'Eternal Breath': '영원의 숨결',
        'Eden\'s Thunder III': '에덴 선더가',
        'Eden\'s Gravity': '에덴 그라비데',
        'Eden\'s Flare': '에덴 플레어',
        'Eden\'s Fire III': '에덴 파이가',
        'Eden\'s Blizzard III': '에덴 블리자가',
        'Dimensional Shift': '차원 전환',
        'Delta Attack': '델타 공격',
        '--corner--': '--모서리--',
        '--center--': '--중앙--',
        '--untargetable--': '--타겟불가능--',
        '--targetable--': '--타겟가능--',
      },
      '~effectNames': {
        'Summon Order': 'Summon Order',
        'Heavy': 'Heavy',
        'Fetters': 'Fetters',
        'Brink of Death': 'Brink of Death',
      },
	  },
  ],
}];
