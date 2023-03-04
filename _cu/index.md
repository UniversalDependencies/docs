---
layout: base
title:  'Old Church Slavonic UD'
udver: '2'
---

# UD for Old Church Slavonic <span class="flagspan"><img class="flag" src="../../flags/svg/MORAVA.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* Punctuation such as commas and periods is not included in the data.
  Occasionally a punctuation symbol (typically a hyphen) is part of a word, as in _вꙑ-инѫ_.
* There are no multi-word tokens.
* There are no words with spaces.

## Morphology

### Tags

* Old Church Slavonic uses 14 universal POS categories. There are no particles, punctuation and other symbols in the data.
* The only auxiliary verb ([AUX]()) in Old Church Slavonic is _бꙑти_ “to be”. It is used as copula (_съ ними <b>естъ</b> женихъ_ “the bridegroom is with them”).
* There are five main (de)verbal forms, distinguished by the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]().
  * Resultative participle `PartRes`, tagged [VERB]() or [AUX]().
  * Supine `Sup`, tagged [VERB]() or [AUX]().

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

There is 1 Old Church Slavonic UD treebank:

  * [Old Church Slavonic-PROIEL](../treebanks/cu_proiel/index.html)
