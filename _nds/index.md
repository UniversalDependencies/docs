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
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence; that includes possessives.
* Low Saxon auxiliary verbs ([AUX]()) are:
  * _weasen_ for perfect tenses of some verbs (_ik bün koamen_ “I have come”) and as copula (_hee is old_ “he is old”)
  * _hebben_ for perfect tenses of the remaining verbs (_ik hev eaten_ “I have eaten”)
  * _werden_ for the passive (_dat wardt eaten_ “it is (being) eaten”)
  * _sköälen_, _willen_ and _werden_ for future tense (_ik skal binnenkört dår weasen_ “I will arrive soon”)
  * modal verbs _dörven_ “may”, _künnen_ “can”, _möägen_ “may, want”, _möten_ “must”, _sköälen_ “shall”, _willen_ “want”
  * The verbs _weasen, hebben_ and _werden_ can also occur as normal verbs ([VERB]()), meaning “be, have, become”.
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [ADJ]().
  * Verbal noun `Vnoun`, tagged [NOUN](), looks like an infinitive or (especially in older language) like a present participle but has an article and may inflect.

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
