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


## Morphology

### Tags

* Luxembourgish uses all 17 universal POS categories, including particles ([PART]()).
* Luxembourgish auxiliary verbs ([AUX]()) are:
  * _sinn_ for perfect tenses of certain verbs (_Si [ass]() zu Paräis opgewuess._ "She grew up in Paris") and passive constructions (_D'Haus [ass]() gebaut._ "The house is built").
  * _hunn_ for perfect tenses of certain verbs (_D'Meedchen [huet]() e Bréif u säi Frënd geschriwwen_ "The girl wrote a letter to her friend.")
  * _goen_ for subjunctive constructions (_Ech [géing]() heem goen._ "I would go home.").
  * _ginn_ for subjunctive  (_Et [gouf]() gëschter zougestallt._ "It was delivered yesterday") and passive constructions (_Ech [géif]() gär mat him schwätzen._ "I would like to talk to her").
  * _kréien_ for passive constructions (_Ech [kréie]() gehollef._ "I am being helped").
  * _wäerten_ for subjunctive constructions (_Dat [wäert]() sech änneren._ "That will change.")
  * modal verbs _kënnen_ “can”, _mussen_ “must”, _sollen_ “shall”, _däerfen_ “may”, _wollen_ “want”.
  * The verbs _sinn, hunn, goen, ginn_, and _kréien_ can also occur as normal verbs ([VERB]()), meaning “be, have, go, give, and get”.

### Features

* For s clitics in subordinated clauses the feature _clitic_ will be used (currently under misc.)
* For negation particles the feature _negation_ will be used (currently under misc.)

## Syntax

* The copula verb _sinn_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
* The following relation subtypes are used in Luxembourgish:
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [det:poss]() for possessive determiners
  * [nmod:poss]() for possessive modifier phrases
  * (more to come, currently incomplete)

## Treebanks

There is [1](../treebanks/lb-comparison.html) Luxembourgish UD treebank:

  * [LuxBank](treebanks/lb/index.html)