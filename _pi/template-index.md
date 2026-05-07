---
layout: base
title:  'Pali UD'
udver: '2'
---

# UD for Pali <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Orthography

* While Pāli can traditionally be written with a variety of scripts, for UD we use [the IAST Romanization standard](https://en.wikipedia.org/wiki/International_Alphabet_of_Sanskrit_Transliteration).
* If your corpus or text is in another script or alternate Romanization, you can use a tool like [aksharamukha](https://aksharamukha.com/python) to automatically convert it to IAST.
* As different scripts use different, and sometimes no, punctuation, we further standardize our orthography by **removing all punctuation** from our texts.
* IAST is case insensitive. Here, we use lowercase with the first letter each sentence capitalized by convention.

## Tokenization and Word Segmentation

* Words are generally delimited by spaces.
* Compounds are split and sandhi undone as it is the custom in Sanskritic linguistics.
* Multi-word tokens are generally not used. Parts of a multi-word name (e.g. "Saccaka Nigaṇṭhāputta") should get the [flat:name]() dependency relation. 

## Morphology

### Tags

#### Particles

The following particles should get the `UPOS` `PART`:

* The quote-ending particle *ti*
  * `LEMMA`: *iti*
  * `DEPREL`: `mark` to the head of the quoted clause
  * The preceding token should usually get `SpaceAfter=No` (as appropriate)

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

There are [N](../treebanks/pi-comparison.html) Pali UD treebanks:

  * [Pali-A](../treebanks/pi_a/index.html)
  * [Pali-B](../treebanks/pi_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
