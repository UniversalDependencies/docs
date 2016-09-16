---
layout: feature
title: 'Number'
shortdef: 'number'
---

`Number` is an inflectional feature of [nouns](cs-pos/NOUN) and
other parts of speech ([adjectives](cs-pos/ADJ),
[verbs](cs-pos/VERB)) that mark agreement with nouns.

### `Sing`: singular number

A singular noun denotes one person, animal or thing.

#### Examples

* _<b>starý muž přišel</b>&nbsp;_ “an old man came”
* _<b>mladá žena přišla</b>&nbsp;_ “a young woman came”
* _<b>malé kuře přišlo</b>&nbsp;_ “a small chicken came”

### `Plur`: plural number

A plural noun denotes several persons, animals or things.

#### Examples

* _<b>staří muži přišli</b>&nbsp;_ “old men came”
* _<b>mladé ženy přišly</b>&nbsp;_ “young women came”
* _<b>malá kuřata přišla</b>&nbsp;_ “small chickens came”

### `Dual`: dual number

A dual noun denotes two objects.
The dual number has almost vanished from Czech with the exception
of special instrumental case suffixes for body parts that occur in pairs,
and any adjectives that modify them.

#### Examples

The noun _noha&nbsp;_ means either “leg” of a human, or of a table.
Dual is used for the former and plural for the latter:

* _holka s&nbsp;<b>dlouhýma nohama</b>&nbsp;_ “a girl with <b>long legs</b>”
* _stůl s&nbsp;dlouhými nohami&nbsp;_ “a table with long legs”

The numeral _sto&nbsp;_ “hundred” has also a special form of plural that is actually the dual:

* _dvě <b>stě</b>&nbsp;_ “two <b>hundred</b>”
* _tři sta&nbsp;_ “three hundred”

### `Ptan`: plurale tantum

Some nouns appear only in the plural form even though they denote one
thing (semantic singular); some tagsets mark this distinction.
Grammatically they behave like plurals, so `Plur` is obviously the
back-off value here; however, the
non-existence of singular form sometimes means that the gender is
unknown. In Czech, special type of numerals is used when counting
nouns that are plurale tantum ([NumType]()`=Sets`).

#### Examples

* _<b>nůžky, kalhoty</b>&nbsp;_ “scissors, pants”

### `Coll`: collective / mass / singulare tantum

Collective or mass or singulare tantum is a special case of
singular. It applies to words that use grammatical singular to
describe sets of objects, i.e. semantic plural. Although in theory
they might be able to form plural, in practice it would be rarely
semantically plausible. Sometimes, the plural form exists and means
“several sorts of” or “several packages of”.

#### Examples

* _<b>lidstvo</b>&nbsp;_ “mankind”

## Diffs

### Prague Dependency Treebank

The PDT tagset does not distinguish `Ptan` from `Plur` and `Coll` from `Sing`,
therefore this distinction is not being made in the converted data.
