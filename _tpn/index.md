---
layout: base
title:  'Tupinambá UD'
udver: '2'
---

# UD for Tupinamba <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words);
* There are no adjectives in Tupinambá. Modification is made by composition, so when a lexical root is modified by another a new word appears as in *kuɲãporaŋ* (*kuɲã* 'woman' + *poraŋ* 'beauty'). Such words are treated as [multiword tokens](https://universaldependencies.org/format.html#morphological-annotation).

---

## Morphology

* Tupinambá nouns are not marked for gender. Number is optionally marked.
* Nous can take the following [Cases](https://universaldependencies.org/u/feat/Case.html): `Tra` and `Loc`. There different locatives, which areasigned the following features: `Case=LocPunc` (punctual locative), `CASE=LocDif` (diffuse locative)

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Czech POS tags](pos/index.html) and [Czech features](feat/index.html).

* Tupinambá uses 16 of the 17 universal POS categories. [ADJ](https://universaldependencies.org/u/pos/ADJ.html) is not used.
* The copula with non-verbal predicates.
* The (de)verbal forms used, are: infinitive `Inf`, finite verb `Fin`, tagged, converb `Conv`, gerund `Ger`.
* Since Tupinambá is an omnipredicative language, the referential, marker (a  ̴ ∅) is treated as Case (`Case=Ref`) in the treebank, despite its function, which is nothing like that of nominal cases. This marker allows lexeical roots to function as arguments of predicates.

---

### Features

* The relation markers, which indicate contiguity (dependent head), non-contiguity (dependent head), or absence of a possessor (absolute) have respectively the following features: `Rel=Cont`, `Rel=NCont`, `Rel=Abs'. 
* As a head marking language, Tupinambá cross-references arguments on the predicate, mostly when the object is third person: *a-s-epjak* 1.SG-3-see 'I see him'. The [PERSON](https://universaldependencies.org/u/feat/Person.html) feature in this case will be `Person=33`.
* The protmanteau markers, 1 -> 2 are asigned the [PERSON](https://universaldependencies.org/u/feat/Person.html) feature `Person12Sg` and `Person12Pl`.
* Tupinambá is reach in nominalizations. Lxical roots can be nominalized by suffixes that receive the following features: nominalizatin of circusntance `Nomzr=Circ` (*-saβ* 'thing, way of VERB'), deverbal passive nominalization `Nomzr=DevPass` (*-pɨr* 'one that is VERB').

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax




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
