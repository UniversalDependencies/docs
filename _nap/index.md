---
layout: base
title:  'Neapolitan UD'
udver: '2'
---

# UD for Neapolitan <span class="flagspan"><img class="flag" src="../../flags/svg/IT-CAM.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace or apostrophes. The apostrophes indicate elision, i.e. the omission of a sound in a word.
* In Neapolitan, articles undergo elision, e.g.: _unu_ → _'nu_.INDF.M; _de/re_ → _'e_.GEN
* Multiword tokens do occur, namely in the form of [ADP]()+[DET]().

---

## Morphology

### Tags

* Neapolitan uses all 17 universal tags.
* Auxiliaries are verbal, usually formed from the verbs _essĕ_ "to be" and _avé_ “to have”, which indicates perfective aspect. The tag AUX is mainly used to mark:
  - _essĕ_ "to be", which is also the copula;
  - tense auxiliaries formed, as also in Italian, by _essĕ_ "to be" and _avé_ “to have”;
  - auxiliaries in the progressive form, such _stonghĕ venennĕ_ "I am coming"
* (De)verbal forms can be tagged in different ways.
  * Participles are usually tagged as [ADJ]().
  * Infinitive forms are always tagged as [NOUN]().

---

### Features

* Nouns are inflected by [Gender](M or F) and [Number](Sg or Pl).
* Sometimes, the difference is only graphic, as most word-final vowels are reduced (indicated with a breve diacritic).
  - Example: _gruossŏ_ “big”.`Masc`.`Sing` vs. _gruossĕ_ “big”.`Masc`.`Plur`
* Grammatical gender is often marked not by the final vowel, but by the word-internal vowel or diphthong.
  - Example: _gruossŏ_ “big”.`Masc`.`Sing` vs. _grossă_ “big”.`Fem`.`Sing`

* Verbs all end with a reduced vowel. However, the distinction between etymological forms is retained by graphemes with a breve diacritic.
  - Example: _ijĕ magnĕ_ “I eat”; _issŏ magnă_ “he eats”
* Adverbs inflect for degree. However, Neapolitan tends to use the intensifier _cchiù_ "more" in phrases like _cchiù megliŏ_ lit. "more better", where _megliŏ_ "better" is already in the comparative grade.

---

## Syntax

* Subjects are constituted of noun phrases, which can be also deverbal. They are not marked and usually preceed the verb, except for presentational constructions, e.g.:
  - _Dimmanĕ venĕ Giuvannĕ_ “Tomorrow John is coming”
* Subjects can be omitted, since Neapolitan is a pro-drop language.
* Objects usually follow the main verb, or can be constituted by whole clauses, e.g.:
  - _Mĕ piacĕ 'e pazzià a ppallonĕ_ “I like to play football”

---

## Treebanks

There is 1<!--[N](../treebanks/nap-comparison.html)--> Neapolitan UD treebank:

* [Neapolitan-RB](../treebanks/nap_rb/index.html)
