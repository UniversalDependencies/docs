---
layout: postag
title: 'NOUN'
shortdef: 'noun'
udver: '2'
---

### Definition

Nouns are a part of speech typically denoting a person, place, thing, animal, or idea.

The NOUN tag is intended for common nouns only. See <a>`PROPN`</a> for proper nouns and <a>`PRON`</a> for pronouns.

As a special case, classifiers (量詞 / _liàngcí_) are also tagged `NOUN` per UD guidelines. Their classifier status may be preserved in the feature column (FEATS) as `NounType=Clf`.

### Examples

- Nouns
  - can form noun phrase by pre-modifying with a numeral and a classifier, like 一杯水 / _yībēishǔi_ "a cup of water".
  - 杯子／ _bēizi_ "cup", 草 / _cǎo_ "grass", 氧氣 / _yǎngqì_ "oxygen", 地方 / _dìfang_ "place", 能力 / _nénglì_ "ability", 歷史 / _lìshǐ_ "history"
- Classifiers
  - can be pre-modified by both <a>`NUM`</a> and <a>`DET`</a> directly. 
  - 個 / _gè_ (generic classifier), 條 / _tiáo_ (classifier for long, slim objects), 本 / _běn_ (classifier for book-like objects), 雙 / _shuāng_ "pair", 杯 / _bēi_ "cup (of something)", 磅 / _bàng_ "pound", 年 / _nián_ "year"
- Temporal nouns
  - typically act as adjunct of verb phrases but can pre-modify another noun by adding a 的 / _de_ suffix.
  - 今天 / _jīntiān_ ‘today’, 去年 / _qùnián_ “last year”, 晚上 / _wǎnshàng_ “night”
- Position words
  - typically act as object of directional verb, 在 / _zài_ "at" but do not satisfy the requirements of [PROPN]() and [PRON]().
  - 旁邊 / _pángbiān_ "side", 一旁 / _yīpáng_ "aside"
- Localizers
  - typically indicate spatial information and is used as a sentence constituent, like [obj]() and [obl]().
  - 西 / _xī_ "west"
<!-- Interlanguage links updated Út zář 29 20:31:29 CEST 2020 -->
