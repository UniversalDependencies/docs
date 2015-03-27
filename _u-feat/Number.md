---
layout: feature
title: 'Number'
shortdef: 'number'
---

`Number` is usually an inflectional feature of [nouns](u-pos/NOUN) and,
depending on language, other parts of speech ([pronouns](u-pos/PRON),
[adjectives](u-pos/ADJ), [determiners](u-pos/DET), [numerals](u-pos/NUM),
[verbs](u-pos/VERB)) that mark agreement with nouns.

### `Sing`: singular number

A singular noun denotes one person, animal or thing.

#### Examples

* [en] _<b>car</b>_

### `Plur`: plural number

A plural noun denotes several persons, animals or things.

#### Examples

* [en] _<b>cars</b>_

### `Dual`: dual number

A dual noun denotes two persons, animals or things.

#### Examples

* [sl] singular _glas_ "voice", dual _<b>glasova</b>_ "voices", plural
  _glasovi_ "voices"
* [ar] singular سَنَةٌ _sanatun_ "year", dual <b>سَنَتَانِ
  _sanatāni_</b> "years", plural سِنُونَ _sinūna_ "years".

### `Ptan`: plurale tantum

Some nouns appear only in the plural form even though they denote one
thing (semantic singular); some tagsets mark this distinction.
Grammatically they behave like plurals, so `Plur` is obviously the
back-off value here; however, if the language also marks gender, the
non-existence of singular form sometimes means that the gender is
unknown. In Czech, special type of numerals is used when counting
nouns that are plurale tantum ([NumType]() = Sets).

#### Examples

* [en] _<b>scissors, pants</b>_
* [cs] _<b>nůžky, kalhoty</b>_

### `Coll`: collective / mass / singulare tantum

Collective or mass or singulare tantum is a special case of
singular. It applies to words that use grammatical singular to
describe sets of objects, i.e. semantic plural. Although in theory
they might be able to form plural, in practice it would be rarely
semantically plausible. Sometimes, the plural form exists and means
"several sorts of" or "several packages of".

#### Examples

* [cs] _<b>lidstvo</b>_ "mankind"
