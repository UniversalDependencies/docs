---
layout: base
title:  'Esperanto UD'
udver: '2'
---

# UD for Esperanto <span class="flagspan"><img class="flag" src="../../flags/svg/ESPERANTO.svg" /></span>
As of July 2025, Esperanto UD contains two documents (Manufest de Prago and Cairo) annotated with Universal Dependencies.

## Tokenization and Word Segmentation

* Esperanto words are delimited by whitespace or punctuation, and no tokens in any of the UD Esperanto corpus currently contain whitespace. Only a few multiword tokens should be used for Esperanto clitics, such as _dank'al_ (_danke_ + _al_, "thanks to"), or l' (reduced form of the definite article "la"). 

## Morphology
### Tags
* Esperanto uses all 17 universal POS categories.

* PART is annotated to _ĉi_, the adverbial particle for expressing proximity, making the distinctiong between _tiu_ "that" and _ĉi_ _tiu_ "this". 

* AUX is annotated to the copula _esti_.

* DET is annotated to the definite article _la_ (Esperanto has no indefinite article), and _correlatives_, such as _iu_ "some," _tio_ "that," _tiu_ "that person," _ĉiu_ "all," etc. when used before a noun.

* PRON is annotated to pronouns (e.g., _Ili_ estas lernantoj. "They are students.") and stand-alone correlatives functioning as demonstrative pronouns (e.g., _Tiuj_ estas lernantoj. "Those people are students.") 

* Each participle is annotated with the appropriate tag according to its function in the sentence it appears, which may be revised in future.

In Esperanto, the word-ending morpheme of a word indicates its part of speech: Nouns end with _-o_ (when nominative singular), infinitive verbs with _-i_, adjectives with _-a_, and adverbs with _-e_. For example,with the root _aŭd-_, _aŭdo_ means "hearing," _aŭdi_ means "to hear," _aŭda_ means "auditory," and _aŭde_ means "by ear."

### Nouns:
Suffixes on nouns indicate their case and number: Nouns ending with _-o_ are nominative singular, those with _-oj_ are nominative plural, _-on_ accusative singular, and _-ojn_ accusative plural. For example,

_Esploristo faras eksperimenton._ "A researcher conducts an experiment."

The noun _esploristo_ is a nominative singular, functioning as the subject of the verb _faras_, while the noun _eksperimenton_ is an accusative singular, functioning as the object of the same verb. For another example, 

_Esploristoj faras eksperimentojn_. "Researchers conduct experiments."

The noun _esploristoj_ is a nominative plural, functioning as the subject of the verb _faras_ (Esperanto does not have subject-verb agreement). The noun _eksperimentojn_ is an accusative plural, functioning as the object of the same verb.

### Adjectives:
Adjectives agree with the nouns they modify in terms of their case and number: Adjectives ending with _-a_ are nominative singular, those with _-aj_ are nominative plural, _-an_ accusative singular, and _-ajn_ accusative plural. For example, 

_Laborema esploristo faras malfacilan eksperimenton._ "A hard-working researcher conducts a difficult experiment."

The nominative singular adjective _laborema_ agrees with the nominative singular noun _esploristo_, while the accusative singular adjective _malfacilan_ agrees with the accusative singular noun _experimenton._ For another example,

_Laboremaj esploristoj faras malfacilajn eksperimentojn._ "Hard-working researchers conduct difficult experiments."

The nominative plural adjective _laboremaj_ agrees with the nominative plural noun _esploristoj,_ while the accusative plural adjective _malfacilajn_ agrees with the accusative plural noun _experimentojn._

Adjectives also agree with the subject when they are the complement of the copula _esti._ For example,

_Ĉi tiuj eksperimentoj estas malfacilaj._ "These experiments are difficult."

The nominative plural adjective "malfacilaj" agrees with the nominative plural noun "eksperimentoj."

### Verbs:
Suffixes on verbs indicate their mood and tense: verbs ending with _-i_ are their infinite forms, _-as_ indicates the indicative present, _-is_ the indicative past, _-os_ the indicative future, _-us_ the subjunctive, and _-u_ the imperative. For example,

_Esploristo faras eksperimenton._ "A researcher conducts an experiment."

_Esploristo faris eksperimenton._ "A researcher conducted an experiment."

_Esploristo faros eksperimenton._ "A researcher will conduct an experiment."

_Eploristo farus eksperimenton._ "A researcher would conduct an experiment."

_Faru eksperimenton, mi petas._ "Conduct an experiment, please."

(To be continued)


### Features

*

## Syntax
Standard deprels are used.

## Treebanks

There are [2](../treebanks/eo-comparison.html) Esperanto UD treebanks:

  * [Esperanto-A](../treebanks/eo_a/index.html)
  * [Esperanto-B](../treebanks/eo_b/index.html)

