---
layout: base
title:  'Luxembourgish UD'
udver: '2'
---

# UD for Luxembourgish <span class="flagspan"><img class="flag" src="../../flags/svg/LU.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace characters.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
  with the exception of:
  * The determiner _d'_ "the" is kept as one token with the apostrophe.
  * Abbreviations which are kept as one token with the period. 
* Luxembourgish compounds are written as one word and we do not split them.
* There are two classes of multi-word tokens: 
  * The contractions of prepositions and definite articles. (Example: _vum = vun + dem_ "from the".)
  * Univerbation due to main verb with verb particle. (Example: _opzehalen = ze + ophalen_ "to stop".)


---

---

## Morphology

### Tags

* Luxembourgish uses all 17 universal POS categories, including particles ([PART]()).
* Luxembourgish auxiliary verbs ([AUX]()) are:
  * _hunn_
  * _sinn_
  * _goen_
  * _ginn_
  * _kréien_
  * _wäerten_ 
  * modal verbs _kënnen_ “can”, _mussen_ “must”, _sollen_ “shall”, _däerfen_ “may”, _wollen_ “want”.
  * The verbs _sinn, hunn, goen, ginn_, and _kréien_ can also occur as normal verbs ([VERB]()), meaning “be, have, go, give, and get”.

---


---

### Features

* clitic
* negation

---


---

## Syntax

* The copula verb _sinn_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
* The following relation subtypes are used in German:
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [det:poss]() for possessive determiners
  * [nmod:poss]() for possessive modifier phrases

---


---

## Treebanks

There is [1](../treebanks/lb-comparison.html) Luxembourgish UD treebank:

  * [LuxBank](../treebanks/_lb/index.html)


---
