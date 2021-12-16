---
layout: feature
title: 'Number'
shortdef: 'number'
udver: '2'
---

`Number` is an inflectional feature of [nouns](ru-pos/NOUN) and
other parts of speech ([adjectives](ru-pos/ADJ),
[verbs](ru-pos/VERB)) that mark agreement with nouns.

### <a name="Sing">`Sing`</a>: singular number

A singular noun denotes one person, animal or thing.

#### Examples

* _<b>старый мужчина пришёл</b>&nbsp;_ “an old man came”
* _<b>молодая женщина пришла</b>&nbsp;_ “a young woman came”
* _<b>маленький цыплёнок пришёл</b>&nbsp;_ “a small chicken came”

### <a name="Plur">`Plur`</a>: plural number

A plural noun denotes several persons, animals or things.

#### Examples

* _<b>старые мужчины пришли</b>&nbsp;_ “old men came”
* _<b>молодые женщины пришли</b>&nbsp;_ “young women came”
* _<b>маленькие цыплята пришли</b>&nbsp;_ “small chickens came”

### <a name="Ptan">`Ptan`</a>: plurale tantum

Some nouns appear only in the plural form even though they denote one
thing (semantic singular); some tagsets mark this distinction.
Grammatically they behave like plurals, so `Plur` is obviously the
back-off value here; however, the
non-existence of singular form sometimes means that the gender is
unknown. In Russian, special type of numerals is used when counting
nouns that are plurale tantum ([NumType]()`=Sets`).

#### Examples

* _<b>ножницы, штаны</b>&nbsp;_ “scissors, pants”

### <a name="Coll">`Coll`</a>: collective / mass / singulare tantum

Collective or mass or singulare tantum is a special case of
singular. It applies to words that use grammatical singular to
describe sets of objects, i.e. semantic plural. Although in theory
they might be able to form plural, in practice it would be rarely
semantically plausible. Sometimes, the plural form exists and means
“several sorts of” or “several packages of”.

#### Examples

* _<b>человечество</b>&nbsp;_ “mankind”

## Diffs

### Russian National Corpus

The RNC tagset does not distinguish `Ptan` from `Plur` and `Coll` from `Sing`,
therefore this distinction is not being made in the converted data.
<!-- Interlanguage links updated St lis 3 20:58:24 CET 2021 -->
