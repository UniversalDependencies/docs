---
layout: base
title:  'Tupinambá UD'
udver: '2'
---

# UD for Tupinamba <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words);
* There are no adjectives in Tupinambá. Modification is made by composition, juxtaposing lexical roots, so when a lexical root is modified by another a new word appears as in *kuɲãporaŋ(a)* (*kuɲã* 'woman' + *poraŋ-(a)* 'beauty'). Such words are treated as [multiword tokens](https://universaldependencies.org/format.html#morphological-annotation).

Mapping UPOS to XPOS for Tupinambá:
 UPOS | XPOS |
:----: | :------: |
 ADV   | adv      |
 INTJ  | intj     |
 NOUN  | n        |
 PROPN | ppn      |
 VERB  | v, vi, vt|
 ADP   | posp       |
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

## Morphology

* Tupinambá nouns are not marked for gender. Number is optionally marked.
* Nous can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `Tra`, `Loc`, `All`, `Per`.
* What has been traditionally called circunstantial mood or indicative II in some Tupí-Guaraní languages referes to the nominalization of a predicate and the fronting of an adverbial expression (oblique topicalization). The nominalized form of the verb, morphologically marked if the adverbial expression is fronted  is marked with the feature-value `OblTop=Yes`..


### Tags


* Tupinambá uses 16 of the 17 universal POS categories, *ADJ* is not used.
* The (de)verbal forms used, are: 
* Since Tupinambá is an omnipredicative language, the referential, marker (a  ̴ ∅) is marked as Case (`Case=Ref`) in the treebank, despite its function, which is nothing like that of nominal cases. This marker allows lexical roots to function as arguments of predicates.

---

### Features

* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. A third type or relational indicates that a possessor is not present, neither contiguously or non-contiguously. This relational is tagged `Rel=Abs`, for absolute. The reflexive/correferential morpheme _o_. which is often referred to as 'relational<sub>3</sub>' is associated with the feature-value `Reflex=Yes`. 
* As a head marking language, Tupinambá cross-references arguments on the predicate, actor (A) and undergoer (U) are only marked in transitive verbs when the U is third person: *a-s-epjak* 1.SG-3-see 'I see him'. The [PERSON](https://universaldependencies.org/u/feat/Person.html) feature in this case will be `Person=13` indicating that A is 1<sup>st</sup> and U 3<sup>rd</sup> person.
* The protmanteau markers indicating 1 -> 2 (A is 1<sup>st</sup> and U is 2<sup>nd</sup> person) are asigned the [PERSON](https://universaldependencies.org/u/feat/Person.html) feature `Person12Sg` and `Person12Pl`.
* Tupinambá is reach in nominalizations. Lexical roots can be nominalized by suffixes that receive the following features: nominalizatin of circusntance `Nomzr=Circ` (*-saβ* 'thing, way of VERB'), deverbal passive nominalization `Nomzr=DevPass` (*-pɨr* 'one that is VERB past participle'), `Nomzr=Ag`(*-sar* 'the VERB-_er_').

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

As a head-marking language, core arguments, except oblique core arguments are cross-referenced on the predicate, as in the example below:

```
asepjak 

a-s-epjak

1.SG-3-see

I see her/him/it/them
```

This is the case only when the object is third-person. For this reason the feature [Person](https://universaldependencies.org/u/feat/Person.html) takes values combining both arguments (A dn P): `Person=13`, `Person=23`, and `Person=33`. No othe combinations occur.





---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/tpn-comparison.html) Tupinamba UD treebanks:

  * [Tupinamba-A](../treebanks/tpn_a/index.html)
  * [Tupinamba-B](../treebanks/tpn_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
