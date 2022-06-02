---
layout: base
title:  'Cantonese UD'
udver: '2'
---

# UD for Cantonese <span class="flagspan"><img class="flag" src="../../flags/svg/HK.svg" /></span>

## Tokenization and Word Segmentation

* Cantonese is written using Chinese characters. Whitespaces are not used in this writing system, hence there are no orthographic words
  (except for occasional intrusion of words in Roman and other alphabets). Syntactic words (nodes in the tree structure) have been
  identified following language-internal criteria. In the CoNLL-U file, `SpaceAfter=No` is used at almost every token, including at the
  end of the sentence.

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Cantonese POS tags](pos/index.html).

* All 17 universal POS categories are relevant for Cantonese, including particles ([PART]()).
  However, the categories [SYM]() and [X]() do not occur in the current data.
* TODO: Auxiliaries.

### Features

* At present only one language-specific feature is used, [NounType]()`=Clf`, to distinguish classifiers from ordinary nouns.

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [Cantonese relations](dep/index.html).

### Relations Overview

* The following relation subtypes are used in Czech:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [nsubj:periph]() for postposed nominal subjects
  * [obj:periph]() for preposed objects
  * [obl:agent]() for agents of passive verbs
  * [obl:patient]() for objects raised to preverbal position and marked by 將 _zoeng1_
  * [obl:tmod]() for temporal oblique modifiers
  * [advmod:df]() for noun phrases headed by classifiers and specifying duration or frequency of event
  * [advcl:coverb]() for coverb phrases
  * [mark:adv]() for the manner adverbializer 噉 _gam2_
  * [mark:rel]() for the adjectival, relativizer, and nominalizer 嘅 _ge3_
  * [case:loc]() for postpositional localizers
  * [compound:dir]() for directional verb compounds
  * [compound:ext]() for extent and descriptive verb compounds
  * [compound:quant]() for verb-quantifier compounds
  * [compound:vo]() for verb-object compounds
  * [compound:vv]() for verb-verb compounds
  * [discourse:sp]() for sentence-final particles
* The following relation types are not used in Cantonese at all:
  [expl](), [fixed]()

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses.

---

## Treebanks

There is 1 Cantonese UD treebank:

  * [Cantonese-HK](../treebanks/yue_hk/index.html)
