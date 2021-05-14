---
layout: feature
title: 'Animacy'
shortdef: 'animacy'
udver: '2'
---

Similarly to [Gender]() (and to the African noun classes), animacy
is usually a lexical feature of [nouns](u-pos/NOUN) and inflectional feature of
other parts of speech that mark agreement with nouns. It is
independent of gender, therefore it is encoded separately in some
tagsets (e.g. all the Multext-East tagsets).

In the BulTreeBank tagset `Animacy` is not encoded as a special feature.
The dichotomy that plays a role here is rather: Human - Non-human.
With very few exceptions, these features are not encoded grammatically.
At this point we consider dangerous to use `Hum: human`.

### <a name="Anim">`Anim`</a>: animate

#### Examples

As explicitly Animate can be considered the following pronouns:

- the masculine accusative forms of some pronouns: _Pre-as-m_ (relative - _когото_ /_kogoto_ "whom"), _Pce-as-m_ (collective - _всекиго_ /_vsekigo_ "everybody",
_Pie-as-m_ (interrogative - _кого_ /_kogo_ "whom"), _Pfe-as-m_ (indefinite - _някого_ /_nyakogo_ "somebody"), _Pne-as-m_ (negative - _никого_ /_nikogo_ "nobody"))
- some pronouns for quantity of humans: _Piy_ (interrogative - _колцина_ / _koltsina_ "how many"); _Pfy#_ (indefinite - _неколцина_ / _nekoltsina_ "few, some")
- the 1st and 2nd personal and possessive pronouns: _Ppe#1_ (_аз, ние_ / _az, nie_ "I, we"), _Ppe#2_ (_ти, вие_ / _ti, vie_ "you, you"), _Pph#2_ (_Вие_ / _Vie_ "you-honorific");
_Ps#1#_ (_мой_ / _moy_ "my"), _Ps#2#_ (_твой_ / _tvoy_ "your")

### <a name="Nhum">`Nhum`</a>: animate but non-human

#### Examples

It has the so-called `count form` in contrast to the humans, but only for masculine nouns. The `count form` is a kind of plural, which comes after numerals.

- _два лъва_ / _dva lava_ "two lions"

### <a name="Inan">`Inan`</a>: inanimate

#### Examples

It has also the so-called `count form` in contrast to the humans, but only for masculine nouns. The `count form` is a kind of plural, which comes after numerals.

- _три стола_ / _tri stola_ "three chairs"

Note that the symbol `#', used in the Universal POS section indicates a holder for arbitrary number of features, suppressed in the respective tag as irrelevant in the BulTreeBank tagset, when mapped to the Universal one.
<!-- Interlanguage links updated Pá kvě 14 11:08:27 CEST 2021 -->
