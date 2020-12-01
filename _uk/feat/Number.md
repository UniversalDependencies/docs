---
layout: feature
title: 'Number'
shortdef: 'number'
udver: '2'
---

`Number` is an inflectional feature of [nouns](uk-pos/NOUN) and other parts of speech ([adjectives](uk-pos/ADJ), [verbs](uk-pos/VERB)) that mark agreement with nouns.

### <a name="Sing">`Sing`</a>: singular number

A singular noun denotes one person, animal or thing.

#### Examples

* _<b>старий чоловік прийшов</b>&nbsp;_ “an old man came”
* _<b>молода жінка прийшла</b>&nbsp;_ “a young woman came”
* _<b>мале курча</b>&nbsp;_ “a small chicken came”

### <a name="Plur">`Plur`</a>: plural number

A plural noun denotes several persons, animals or things.

#### Examples

* _<b>старі чоловіки (жінки) прийшли</b>&nbsp;_ “old men (women) came”

### <a name="Ptan">`Ptan`</a>: plurale tantum

Some nouns appear only in the plural form even though they denote one thing (semantic singular); some tagsets mark this distinction. Grammatically they behave like plurals, so `Plur` is obviously the back-off value here; however, the non-existence of singular form sometimes means that the gender is unknown. In Ukrainian, special type of numerals is used when counting nouns that are plurale tantum ([NumType]()`=Sets`).

#### Examples

* _<b>ножиці, штани</b>&nbsp;_ “scissors, pants”

### <a name="Coll">`Coll`</a>: collective / mass / singulare tantum

Collective or mass or singulare tantum is a special case of singular. It applies to words that use grammatical singular to describe sets of objects, i.e. semantic plural. Although in theory they might be able to form plural, in practice it would be rarely semantically plausible. Sometimes, the plural form exists and means “several sorts of” or “several packages of”.

#### Examples

* _<b>людство</b>&nbsp;_ “mankind”

## Diffs

### Ukrainian Dependency Treebank

The UDT tagset does not distinguish `Ptan` from `Plur` and `Coll` from `Sing`, therefore this distinction is not being made in the converted data.
<!-- Interlanguage links updated Čt lis 12 09:43:03 CET 2020 -->
