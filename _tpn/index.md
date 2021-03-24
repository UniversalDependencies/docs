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


## Morphology

* Tupinambá nouns are not marked for gender. Number is optionally marked.

* Nous can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `Tra`, `Loc`, `All`, `Per`.

* What has been traditionally called circunstantial mood or indicative II in some Tupí-Guaraní languages referes to a nominalization accompanied by the fronting of an adverbial expression: adverbs, adverbial expressions, postpositional phrases (oblique topicalization). The nominalized form in this case receives a marked with the feature-value `OblTop=Yes`.

* Lexical roots in Tupinambá are tagged either as NOUN or VERB, but NOUNS, due to the types of constructions are more frequent. VERB is only the case when transitive verbs are third person. The lexical root in the *gerund* [(VerbForm=Ger)](https://universaldependencies.org/u/feat/VerbForm.html) is also marked as VERB.

* Verbs are marked for [aspect](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Aspect.md): `Compl` (completive), `Iter` (Iterative).

* Verbs are also marked for [mood](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Mood.md): `Perm` (permissive), `Subj` (subjunctive).

* Lexical roots may be [reduplicated](https://github.com/UniversalDependencies/docs/blob/pages-source/_tpn/feat/Red.md) in two differentways: 
monosylabic reduplication (`Red=Mo`), disylabic reduplication (`Red=Di`). The modify the aspect of the verb in different ways: disylabic reduplication indicate the repetition or duration of an action; monosylabic reduplication indicates iteration of the action.
Nouns may also be reduplicated in both ways denoting: plurality, collectivity, superlativity, and other semantic nuances. Numerals may also be reduplicated in order to indicate distribution. 

* Nouns are also marked for tense.

* As an omnipredicative language, lexical roots in Tupinambá are existential predicates. In order to function as arguments, the referential marker (a  ̴ ∅), is marked as Case (`Case=Ref`) despite its function being nothing like that of nominal cases.



### Tags

* Tupinambá uses 16 of the 17 universal POS categories, *ADJ* is not used.

Mapping UPOS to XPOS for Tupinambá:
 UPOS | XPOS |
:----: | :------: |
 ADV   | adv      |
 INTJ  | intj     |
 NOUN  | n        |
 PROPN | ppn      |
 VERB  | v, vi, vt|
 ADP   | posp     |
 AUX   | aux      |
 CCONJ | cc       |
 DET   | dem      |
 NUM   | num      |
 PART  | pcl      |
 PRON  | pro      |
 SCONJ | sc       |
 PUNCT | punct    |
 SYM   | sym      |
 X     | x        |

---


---

### Features

* The relational markers `Rel`, which indicate contiguity or non-contiguity between a head and its dependent, take respectively the following features: `Rel=Cont` and `Rel=NCont`. A third type or relational indicates that a possessor is not present, neither contiguously or non-contiguously. This relational is tagged `Rel=Abs`, for absolute. The reflexive/correferential morpheme _o_. which is often referred to as 'relational<sub>3</sub>' is associated with the feature-value `Reflex=Yes`. 

* As a head marking language, Tupinambá cross-references both arguments of a two-place predicate, actor (A) and undergoer (U), only when U is third person: *a-s-epjak* 1.SG-3(RELNCONT)-see 'I see him/her/it/them'. The [PERSON](https://universaldependencies.org/u/feat/Person.html) feature in this case ha sthe value `Person=13` indicating that A is 1<sup>st</sup> and U 3<sup>rd</sup> person.

* The protmanteau markers indicating 1 -> 2 (A is 1<sup>st</sup> and U is 2<sup>nd</sup> person) are asigned the [PERSON](https://universaldependencies.org/u/feat/Person.html) feature `Person12Sg` and `Person12Pl`.

* Tupinambá is reach in nominalizations. Lexical roots can be nominalized by suffixes that receive the following features: nominalizatin of circusntance `Nomzr=Circ` (*-saβ* 'thing, way of VERB'), deverbal passive nominalization `Nomzr=DevPass` (*-pɨr* 'one that is VERB past participle'), `Nomzr=Ag`(*-sar* 'the VERB-_er_').

---

## Syntax

* The order of arguments cross-referenced on the predicate is SOV, and this order seems to be the most common when full NPs semantically associated with the bound arguments are present. In this case, there is no fixed order, and the lack of a formal corpus dos not allow for precise figures. It is worth noting, though, that clauses with two NPs, each related with one of the bound arguments are no as frequent as one would expect.

### 






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
