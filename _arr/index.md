---
layout: base
title:  'Karo UD'
udver: '2'
---

# UD for Karo <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens (words);

---

## Morphology

### Tags

* Karo uses all 17 universal POS categories. `ADJ` is not used since there is no separate class of adjectives.

Mapping UPOS to XPOS Karo

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

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Nominal Features

* Tupinambá nouns are not marked for gender. Number is optionally marked by the lexical root _etá_ .
* Nous can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `Tra`, `Loc`, `All`, `Per`, `Dat`.
* [NOUN](https://universaldependencies.org/u/pos/NOUN.html), [PROPN](https://universaldependencies.org/u/pos/PROPN.html) and [PRON](https://universaldependencies.org/u/pos/PRON.html), are not marked for [Gender](https://universaldependencies.org/u/feat/Gender.html).
* Personal Pronouns and Person Markers distinguish [Number](https://universaldependencies.org/u/feat/Number.html)(Singular or Plural). They also distinguish [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) in the 1<sup>st</sup> person plural.
* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. A third type or relational indicates that a possessor is not present, neither contiguously or non-contiguously. This relational is tagged `Rel=Abs`, for absolute. The reflexive/correferential morpheme _o_. which is often referred to as 'relational<sub>3</sub>' is associated with the feature-value `Reflex=Yes`. 
* Tupinambá is reach in nominalizations. Lexical roots can be nominalized by suffixes that receive the following features: nominalizatin of circusntance `Nomzr=Circ` (*-saβ* 'thing, way of VERB'), passive nominalization `Nomzr=Pas`, deverbal passive nominalization `Nomzr=DevPass` (*-pɨr* 'one that is VERB past participle'), `Nomzr=Ag`(*-sar* 'the VERB-_er_').
* Nouns may also be reduplicated in both ways denoting: plurality, collectivity, superlativity, and other semantic nuances. Numerals may also be reduplicated in order to indicate distribution.
* Nouns are also marked for tense.
* As an omnipredicative language, lexical roots in Tupinambá are existential predicates. In order to function as arguments, the referential marker (a  ̴ ∅), is required (marked as `Case=Ref`) despite its function being nothing like that of nominal cases.

### Verbal Features

* Verbs have a lexical [Aspect](https://universaldependencies.org/u/feat/Aspect.html): imperfective (Imp), perfective (Perf), iterative (Iter).
* As a head marking language, Tupinambá cross-references both arguments of a two-place predicate, S and O, only when O is third person: *a-s-epjak* 1.SG-3(RELNCONT)-see 'I see him/her/it/them'. The [PERSON](https://universaldependencies.org/u/feat/Person.html) feature in this case ha sthe value `Person=13` indicating that A is 1<sup>st</sup> and O 3<sup>rd</sup> person.
* The protmanteau markers indicating 1 -> 2 (A is 1<sup>st</sup> and U is 2<sup>nd</sup> person) are asigned the [PERSON](https://universaldependencies.org/u/feat/Person.html) feature `Person12Sg` and `Person12Pl`.
* The lexical root in the *gerund* [(VerbForm=Ger)](https://universaldependencies.org/u/feat/VerbForm.html) is marked as VERB even when combining with a relational.
* Verbs are marked for [aspect](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Aspect.md): `Compl` (completive), `Iter` (Iterative), `Suc` Successive.
* Verbs are also marked for [mood](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Mood.md): `Perm` (permissive).
* Lexical roots may be [reduplicated](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Red.md) in two differentways: 
monosylabic reduplication (`Red=Mo`), disylabic reduplication (`Red=Di`). The modify the aspect of the verb in different ways: disylabic reduplication indicate the repetition or duration of an action; monosylabic reduplication indicates iteration of the action. 
---

## Syntax

* As a head-marking language, core arguments, except oblique core arguments are cross-referenced on the predicate, as in the example below:






---

## Treebanks

There are [N](../treebanks/arr-comparison.html) Karo UD treebanks:

  * [Karo-A](../treebanks/arr_a/index.html)
  * [Karo-B](../treebanks/arr_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
