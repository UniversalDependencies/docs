---
layout: base
title:  'Makurap UD'
udver: '2'
---

# UD for Makurap <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens (words);
* There are no adjectives in Makurap. Modification is made by composition, juxtaposing lexical roots, so when a lexical root is modified by another a new word appears as in *kito moke* 'the thief man' (*kito* 'man' + *moke* 'thief'). Such words are treated sometimes as [multiword tokens](https://universaldependencies.org/format.html#morphological-annotation).

---

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Mundurukú POS tags](pos/index.html) and [Mundurukú features](feat/index.html).

* Makurap uses 16 of the 17 universal POS categories. `ADJ` is not used since there is no separate class of adjectives.

Mapping UPOS to XPOS Makurap

 UPOS | XPOS |
:----: | :------: |
 ADJ   | adj      |
 ADV   | adv      |
 INTJ  | intj     |
 NOUN  | n        |
 PROPN | ppn      |
 VERB  | v, vi, vt|
 ADP   | pp       |
 AUX   | aux      |
 CCONJ | cc       |
 DET   | det      |
 NUM   | num      |
 PART  | pcl      |
 PRON  | pro      |
 SCONJ | sc       |
 PUNCT | punct    |
 SYM   | sym      |
 X     | x        |

### Nominal Features

* Makurap nouns are not marked for gender. Number is optionally marked by the lexical root _yã_ .
* Nous can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `Gen`.
* [NOUN](https://universaldependencies.org/u/pos/NOUN.html), [PROPN](https://universaldependencies.org/u/pos/PROPN.html) and [PRON](https://universaldependencies.org/u/pos/PRON.html), are not marked for [Gender](https://universaldependencies.org/u/feat/Gender.html).
* Personal Pronouns and Person Markers distinguish [Number](https://universaldependencies.org/u/feat/Number.html)(Singular or Plural). They also distinguish [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) in the 1<sup>st</sup> person plural.
* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. The reflexive/correferential morpheme _et_ is associated with the feature-value `Reflex=Yes`. 
* Makurap is reach in nominalizations. Lexical roots can be nominalized by suffixes that receive the following features: nominalization of circunstance `Nomzr=Circ` (*-ap*), `Nomzr=Ag`(*-ret*), `Nomzr=Obj`(*-yĩ*).
* Nouns may also be reduplicated in both ways denoting: plurality, collectivity, superlativity, and other semantic nuances. Numerals may also be reduplicated in order to indicate distribution.

### Verbal Features

* Verbs have a lexical [Aspect](https://universaldependencies.org/u/feat/Aspect.html): `Imp` (Imperfective), `Perf` (Perfective) , `Iter` (Iterative), `Compl` (Completive).
* Makurap is a head marking language
* Lexical roots may be [reduplicated](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Red.md) in two differentways: 
monosylabic reduplication (`Red=Mo`). The modify the aspect of the verb in different ways: disylabic reduplication indicate the repetition or duration of an action; monosylabic reduplication indicates iteration of the action. 

---

## Syntax

* As a head-marking language, core arguments, except oblique core arguments are cross-referenced on the predicate.
* The order of arguments cross-referenced on the predicate is SOV. Full NPs associated with core arguments may appear in any order. The NPs may be marked as `obl` ' obliques', since they are not the core arguments. 
* Particles may indicate `Tense` (Tense), `Mood` (Mood),  and `Evident` (Evidentiality).

---

## Treebanks

There is 1 Makurap UD treebank:

  * [Makurap-A](https://github.com/UniversalDependencies/UD_Makurap-TuDeT)

---
