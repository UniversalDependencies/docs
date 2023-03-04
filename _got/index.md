---
layout: base
title:  'Gothic UD'
udver: '2'
---

# UD for Gothic

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* Punctuation such as commas and periods is not included in the data.
  Occasionally a punctuation symbol (typically a hyphen) is part of a word, as in _at-gaf, þat-ain, ga-seƕi_.
* There are no multi-word tokens.
* There are no words with spaces.

## Morphology

### Tags

* Gothic uses 14 universal POS categories. There are no particles, punctuation and other symbols in the data.
* The only auxiliary verb ([AUX]()) in Gothic is _wisan_ “to be”. It is used as copula (_ni aiw swa uskunþ <b>was</b> in Israela_ “it was never so seen in Israel”).
* There are three main (de)verbal forms, distinguished by the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().

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

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
