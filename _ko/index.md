---
layout: base
title:  'Korean UD'
udver: '2'
---

# UD for Korean <span class="flagspan"><img class="flag" src="../../flags/svg/KR.svg" /></span>

## Tokenization and Word Segmentation

* The tokenization of the Korean UD treebanks follows the tokenization of the Korean data distributed
  by the [SPMRL 2013 shared task](http://www.spmrl.org/category/spmrl2013.html), which is
  a straightforward whitespace-based tokenization with conventional separation of punctuation.
* There are no words with spaces.
* There are currently no multi-word tokens. This may change in the future, as some words have no
  space between them, and instead of indicating this by `SpaceAfter=No` in MISC, multi-word tokens
  may be preferable.

## Morphology

### Lemmas

* At present, the lemma column in the GSD and Kaist treebanks violates the UD guidelines. Instead
  of showing a selected surface form as the citation form for the lexeme, it shows the morphemes
  delimited by the plus _(+)_ character. This should be fixed in future version and a real lemma
  should be provided.

### Tags

* All 17 universal POS categories are relevant in Korean, including particles ([PART]()).
  At present, hundreds of word types are tagged [PART](). This is a legacy of an existing Korean
  morphological analyzer and many of these words should probably belong to another category in UD;
  however, the exact list has yet to be worked out.
* The following words are treated as auxiliaries ([AUX]()):
  * The affirmative copula 이 _i_ (“to be”) is written as a suffix to the nominal predicate but it
    is treated as a separate auxiliary verb in UD.
  * 않 _anh_ (“to not be”) is the negative copula or an auxiliary in a negative clause.
  * 있 _iss_ (“to be”) is an auxiliary in affirmative clauses.
  * 하 _ha_ (“must, should”) is a necessitative modal auxiliary.
  * 싶 _sip_ (“will, to want”) is a desiderative modal auxiliary.

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Korean uses a nominative-accusative alignment. Direct objects are marked by the accusative
  morpheme 을 _eul_.

### Relations Overview

* The following relation subtypes are used in Korean:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [nmod:poss]() for possessive (genitive) modifiers
  * [det:poss]() for possessive determiners
  * [acl:relcl]() for relative clauses
  * [obl:tmod]() for temporal adjuncts
  * [compound:lvc]() for light verb constructions
  * [flat:name]() for connection of parts of a flat multi-word named entity
* The following relation types are not used in Korean at all:
  [expl](), [list](), [parataxis](), [reparandum]()

## Treebanks

There are [3](../treebanks/ko-comparison.html) Korean UD treebanks:

  * [Korean-GSD](../treebanks/ko_gsd/index.html)
  * [Korean-Kaist](../treebanks/ko_kaist/index.html)
  * [Korean-PUD](../treebanks/ko_pud/index.html)
