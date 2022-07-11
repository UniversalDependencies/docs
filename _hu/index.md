---
layout: base
title:  'Hungarian UD'
udver: '2'
---

# UD for Hungarian <span class="flagspan"><img class="flag" src="../../flags/svg/HU.svg" /></span>

## Tokenization and Word Segmentation

*

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Most verbs have two inflected tenses, past and present, and a future form using an auxiliary verb.
  The verb _lenni_ “to be” has three inflected tenses: past (_volt_ “was”), present (_van_ “is”) and future (_lesz_ “will be”).
  However, _lesz_ is kept as a separate lemma in the data, and `Tense=Pres` is used with its present/future forms, not `Tense=Fut`;
  it also has a past tense, _lett_ “became”.
* The auxiliary _fog_ expresses future intention: _Fogok menni._ “I am going to go.”
* The auxiliary _lehet_ “may, can” is used impersonally, as in _Oda lehet menni._ “One can go there.”
  Otherwise, potential can also be expressed using the suffix -hat/-het, followed by regular conjugation: _Mehetek_ “I can/may go”.
  <!-- https://en.wikipedia.org/wiki/Hungarian_verbs -->
* Other modal verbs than _lehet_ are not analyzed as auxiliaries.

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

There is 1 Hungarian UD treebank:

  * [Hungarian-Szeged](../treebanks/hu_szeged/index.html)
