---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
---

### Definition

A proper noun is a noun that is the name of a specific individual, place, or object. Note that names of days of week (e.g. 月曜, 日曜) are not considered proper nouns.

Multi-word named entities have internal syntactic structure, which is preserved in the annotation. The headword is usually noun or suffix and there may be other nouns involved. They will be tagged either [PROPN]() or [NOUN]().
 For instance,
An NE _<b>長谷寺</b>&nbsp;_ “Hasedera temple”consists of a proper noun
_<b>長谷</b>&nbsp;_ “Hase”and an ordinary noun _<b>寺</b>&nbsp;_ “temple”.


### Examples

- _<b>京都</b>&nbsp;_ “Kyoto” city name (`noun(proper.place.general)` / 名詞-固有名詞-地名-一般)
- _<b>鈴木</b>&nbsp;_ “Suzuki” family name (`noun(proper.name.surname)` / 名詞-固有名詞-人名-姓)
