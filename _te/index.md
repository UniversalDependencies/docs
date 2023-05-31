---
layout: base
title:  'Telugu UD'
udver: '2'
---

# UD for Telugu <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. These are normally tokenized as separate tokens (words);
  exceptions include abbreviations (the abbreviation-marking period is part of the main token) and hyphenated compounds (the hyphen does not split
  the token).
* There are no multiword tokens.

## Morphology

### Tags

* The Telugu treebank currently uses only 14 of the 17 universal POS categories, including particles ([PART]()).
  There are no auxiliary verbs, symbols and unknown words.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.

### Features

* The corpus currently does not include morphological features, except for [NumType]()`=Card`, marking cardinal numerals.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a bare noun phrase (without adposition) in the nominative case.
  * A subordinate clause may serve as the subject and is labeled [csubj]().
* Direct object ([obj]()) is a bare noun phrase in accusative.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().

### Non-verbal Clauses

* Non-verbal clauses do not use a copula.

### Relations Overview

* The following relation subtypes are used in Telugu:
  * [nsubj:nc]() for non-canonical subject, such as a nominal in the dative case
  * [acl:relcl]() for relative clauses
  * [advcl:cond]() for conditional adverbial clauses
  * [compound:lvc]() for light verb constructions
  * [compound:svc]() for serial verb constructions
  * [compound:redup]() for reduplications
  * [nmod:poss]() for possessive/genitive modifiers
  * [nmod:tmod]() for temporal modifiers (a nominal modifies another nominal)
  * [obl:tmod]() for temporal modifiers (a nominal modifies a clause)
  * [obl:cau]() for oblique participants in the causative case (the causees)
  * [obl:cmp]() for standards of comparison
* The following relation types are not used in Telugu at all:
  [expl](), [aux](), [cop](), [fixed]()

## Treebanks

There is 1 Telugu UD treebank:

  * [Telugu-MTG](../treebanks/te_mtg/index.html)
