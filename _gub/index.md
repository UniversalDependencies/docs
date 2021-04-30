---
layout: base
title:  'Guajajara UD'
udver: '2'
---

# UD for Guajajara <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens (words);


## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Mundurukú POS tags](pos/index.html)
and [Mundurukú features](feat/index.html).

* Tupinambá uses 16 of the 17 universal POS categories. `ADJ` is not used since there is no separate class of adjectives.
Stative-verbs and possessed nouns behave alike, in a way that is not possible to distinguish them morphologically
(I am ugly / I have uglyness; ugly boy / boy with uglyness).

Mapping UPOS to XPOS Tupinambá

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

* Guajajara nouns are not marked for gender. Number is optionally marked by the particle _wa_.
* Nouns can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `All`, `Dat` and `Loc`.
* [NOUN](https://universaldependencies.org/u/pos/NOUN.html), [PROPN](https://universaldependencies.org/u/pos/PROPN.html) and [PRON](https://universaldependencies.org/u/pos/PRON.html), are not marked for [Gender](https://universaldependencies.org/u/feat/Gender.html).
* Personal Pronouns and Person Markers distinguish [Number](https://universaldependencies.org/u/feat/Number.html)(Singular or Plural). They also distinguish [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) in the 1<sup>st</sup> person plural.
* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. A third type or relational indicates that a possessor is not present, neither contiguously or non-contiguously. This relational is tagged `Rel=Abs`, for absolute. The reflexive/correferential morpheme _ze_. which is often referred to as 'relational<sub>3</sub>' is associated with the feature-value `Reflex=Yes`. 
* Tupinambá is rich in nominalizations. Lexical roots can be nominalized by suffixes that receive the following features: nominalization of circunstance `Nomzr=Circ` (*-haw* 'thing, way of VERB'), passive nominalization `Nomzr=Pas`, deverbal passive nominalization `Nomzr=DevPass` (*-pɨr* 'one that is VERB past participle'), `Nomzr=Ag`(*-sar* 'the VERB-_er_').
* Nouns may also be reduplicated in both ways denoting emphasis. 
* Nouns can be also marked for past tense.

### Verbal Features

* Verbs have a lexical [Aspect](https://universaldependencies.org/u/feat/Aspect.html): imperfective (Imp), perfective (Perf), iterative (Iter).
* As a head marking language, Tupinambá cross-references both arguments of a two-place predicate, S and O, only when O is third person: *a-s-epjak* 1.SG-3(RELNCONT)-see 'I see him/her/it/them'. The [PERSON](https://universaldependencies.org/u/feat/Person.html) feature in this case ha sthe value `Person=13` indicating that A is 1<sup>st</sup> and O 3<sup>rd</sup> person.
* Verbs are marked for [aspect](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Aspect.md): `Compl` (completive), `Iter` (Iterative), `Suc` Successive.
* Verbs are also marked for [mood](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Mood.md): `Perm` (permissive).
* Lexical roots may be [reduplicated](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Red.md) in two differentways: 
monosylabic reduplication (`Red=Mo`), disylabic reduplication (`Red=Di`). The modify the aspect of the verb in different ways: disylabic reduplication indicate the repetition or duration of an action; monosylabic reduplication indicates iteration of the action. 
---

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

As a head-marking language, core arguments, except oblique core arguments are cross-referenced on the predicate, as in the example below:

```
uzakook

u-Z-akook

3-3-empty

He/She/They empty it/them
```

This is the case only when the object is third-person. For this reason the feature [Person](https://universaldependencies.org/u/feat/Person.html) takes values combining both arguments (A dn P): `Person=13`, `Person=23`, and `Person=33`. No othe combinations occur.






---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/gub-comparison.html) Guajajara UD treebanks:

  * [Guajajara-A](../treebanks/gub_a/index.html)
  * [Guajajara-B](../treebanks/gub_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
