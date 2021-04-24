---
layout: base
title:  'Munduruku UD'
udver: '2'
---

# UD for Mundurukú <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>


## Tokenization and Word Segmentation

* Words are delimited by whitespace characters
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens (words);
* There are no adjectives in Tupinambá. Modification is made by composition, juxtaposing lexical roots, so when a lexical root is modified by another a new word appears as in *kuɲãporaŋ(a)* 'beautiful woman' (*kuɲã* 'woman' + *poraŋ-(a)* 'beauty'). Such words are treated sometimes as [multiword tokens](https://universaldependencies.org/format.html#morphological-annotation), sometimes as a single word.
* Some compound words from Portuguese are written as one word, e.g. _santaCruz_ 'holy cross'. 


## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Mundurukú POS tags](pos/index.html)
and [Mundurukú features](feat/index.html).

* Mundurukú uses 16 ofthe 17 universal POS categories. `ADJ` is not used since there is no separate class of adjectives.
Stative-verbs and possessed nouns behave alike, in a way that is not possible to distinguish them morphologically
(I am ugly / I have uglyness; ugly boy / boy with uglyness).

Mapping UPOS to XPOS Mundurukú

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

* [NOUN](https://universaldependencies.org/u/pos/NOUN.html), [PROPN](https://universaldependencies.org/u/pos/PROPN.html) and [PRON](https://universaldependencies.org/u/pos/PRON.html), are not marked for [Gender](https://universaldependencies.org/u/feat/Gender.html).
* Personal Pronouns and Person Markers distinguish [Number](https://universaldependencies.org/u/feat/Number.html)(Singular or Plural). They also distinguish [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) in the 1<sup>st</sup> person plural. Mundurukú marks the 3<sup>rd</sup> person plural by adding the partical _ip_.
* Another way to express existential predication is through the reduplication of a noun with the vowel *e* replacing
the original vowel, e.g, *xat* 'food' *xaxet* 'there is food'. These nouns receive a marked `Redup=Ex` (reduplication existential) in the FEATS column.
* Mundurukú classifiers are lexical roots. Nouns in this function have the feature `Noun=Clf`.
* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`.
* Mundurukú has possessor markers that distinguish alienably and inalienably possessed nouns. These types of possession have the feature [Poss](https://universaldependencies.org/u/feat/Poss.html) and the values alienable `(Poss=Ali)`, and inalienable `(Poss=Inal)`.

### Verbal Features

* Verbs have a lexical [Aspect](https://universaldependencies.org/u/feat/Aspect.html): imperfective (Imp), perfective (Perf), iterative (Iter).
* Some lexical roots can not easily be assigned to a  specific lexical category. This is the case with *kake* and *opop*.
These are tagged as [AUX](https://universaldependencies.org/u/pos/AUX_.html) in the [UPOS](), and v:ex (existential verb) and `aux` respectively in the XPOS.
* As a head marking language, Tupinambá cross-references both arguments of a two-place predicate, S and O, only when O is third person: *a-s-epjak* 1.SG-3(RELNCONT)-see 'I see him/her/it/them'. The [PERSON](https://universaldependencies.org/u/feat/Person.html) feature in this case ha sthe value `Person=13` indicating that A is 1<sup>st</sup> and O 3<sup>rd</sup> person.
* The protmanteau markers indicating 1 -> 2 (A is 1<sup>st</sup> and U is 2<sup>nd</sup> person) are asigned the [PERSON](https://universaldependencies.org/u/feat/Person.html) feature `Person12Sg` and `Person12Pl`.

---

Mundurukú has some auxiliary verbs, which are tagged as [AUX](https://universaldependencies.org/u/pos/AUX_.html). The have two specific functions:
indicate *tense* or *posture*. The table below, shows auxiliaries, giving their functions and giving their plural forms, which for some for some of the verbs have different forms for the singular and plural:


|Auxiliary | Tense | Posture | Plural | Meaning |
|:-------------:| :--------:|:-------:|:------:|:------:|
|osusnuy | past |  |  | was/were |
|oeku | past | | | was/were in movement |
|osodop | past |  |  | was/were |
|e'em |  |  |  | |
|dopdom |  |  | nuynuy | | 
|g̃uy |  |  |  | remain |
|jop | |  |  | remain |
|cũg̃'i |  | standing | kacũg̃cũg̃'i |  |
|xik'i |  | sitting | kaxikxik'i |  |
|toro'i |  | hanging | katororo'i |  |
|mũg̃'i |  | leaning | kamũg̃mũg̃'i |  |
|po'i |  | laying | kapopo'i | |





* Particles or reduplication mark [Aspect](https://universaldependencies.org/u/feat/Aspect.html) or [Tense](https://universaldependencies.org/u/feat/Tense.html).
* [Person](https://universaldependencies.org/u/feat/Person.html) can have the value [1](), [2](), and [3]().
* The feature [Evident](https://universaldependencies.org/u/feat/Evident.html) can take the following values in:
* [Clusivity](https://universaldependencies.org/u/feat/Clusivity.html) is also distinguished.
* There are three values for the [Voice](https://universaldependencies.org/u/feat/Voice.html) feature: Act, Mid Pass. All other verb forms have Voice=Act.


## Syntax

### Core Arguments, Oblique Arguments and Adjuncts
* As a head-marking language, core arguments, except oblique core arguments are cross-referenced on the predicate.
For this reason the feature [Person](https://universaldependencies.org/u/feat/Person.html) takes values combining both arguments (A dn P): `Person=13`, `Person=23`, and `Person=33`. No other combinations occur.
* The order of arguments cross-referenced on the predicate is SOV. These NPs are marked as `obl` ' obliques', since they are not the core arguments. 
* Transitivity is found only with third person objects.
* There is a split in alignment type based on verbal aspect.


### Non-verbal clauses

Mundurukú has some lexemes that function as [copula](https://universaldependencies.org/u/dep/cop.html) in non-verbal clauses for existentia and locational predicates. Examples are: *opop*, *kug̃*, and *kake*. These copular elements are not treated as the
head of a clause, but rather the dependent of a lexical predicate
---

## Treebanks

There is 1 Mundurukú UD treebank:

  * [Munduruku-TuDeT](../treebanks/myu_tudet/index.html)
