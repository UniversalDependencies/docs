---
layout: base
title:  'Thai UD'
udver: '2'
---

# UD for Thai <span class="flagspan"><img class="flag" src="../../flags/svg/TH.svg" /></span>

## Tokenization and Word Segmentation

* The Thai writing system does not have the concept of orthographic words. Longer text segments are occasionally
  separated by whitespace but most words are not delimited this way. Therefore, in the annotation, `SpaceAfter=No`
  is used even between letters. Multiword tokens are not used.

## Morphology

### Tags

* The Thai treebank currently uses only 15 of the 17 universal POS categories, including particles ([PART]()).
  There are no interjections and unknown words.

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a bare noun phrase (without adposition).
  * A subordinate clause may serve as the subject and is labeled [csubj]().
* Direct object ([obj]()) is a bare noun phrase.
  * Nominal objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().

### Non-verbal Clauses

* The default copula is เป็น _pĕn_ “is”.
  At present the annotation uses the [cop]() relation for several other word types, which act as pseudo-copulas.
  Examples include ใช่ _chì_ “yes”, ชื่อ _chụ̄̀x_ “name”, คล้าย _khl̂āy_ “resemble”. These should be re-analyzed as heads
  and use the [xcomp]() relation to connect the secondary predicate.

### Relations Overview

* The following relation subtypes are used in Thai:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [aux:pass]() for passive auxiliaries
  * [acl:relcl]() for relative clauses
  * [compound:prt]() for verbal particles
  * [nmod:poss]() for possessive/genitive modifiers
  * [obl:poss]() for possessive modifiers when the parent is a verb (nominalized, but still tagged [VERB]())
  * [obl:tmod]() for temporal modifiers (a nominal modifies a clause)
  * [flat:name]() to connect parts of a personal name
  * [cc:preconj]() for the first part of a multi-word coordinating conjunction _(both)_
* The following main types are not used alone and must be subtyped:
  [flat]()
* The following relation types are not used in Thai at all:
  [expl](), [orphan]()

## Treebanks

There is 1 Thai UD treebank:

  * [Thai-PUD](../treebanks/th_pud/index.html)
