---
layout: base
title:  'Low Saxon UD'
udver: '2'
---

# UD for Low Saxon <span class="flagspan"><img class="flag" src="../../flags/svg/DE-HANNOVER.svg" /></span>

## Introduction

A part of this documentation is copied from the current German documentation [UD for German](https://universaldependencies.org/de/index.html), which can mostly be applied to Low Saxon as well. 

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
* Low Saxon compounds are written as one word and we do not split them.
* There are classes of multi-word tokens such as contractions of prepositions and definite articles as well as contractions of verbs and a (clitic) pronoun.
  Examples: _hek = hev + ik_ "I have", _im = in + dem_ "in the"

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Low Saxon uses all 17 universal POS categories, including particles ([PART]()).
* The following words are particles in Low Saxon: _nich_ “not”, and the infinitive marker _to_ “to”.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/nds-comparison.html) Low Saxon UD treebanks:

  * [Low Saxon-A](../treebanks/nds_a/index.html)
  * [Low Saxon-B](../treebanks/nds_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
