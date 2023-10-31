---
layout: base
title:  'Haitian Creole UD'
udver: '2'
---

# UD for Haitian Creole <span class="flagspan"><img class="flag" src="../../flags/svg/HT.svg" /></span>
Kreyòl (Kreyòl Ayisyen, Haitian Creole, iso-639-1: ht) is the main language of Haïti. It is spoken by more than 10M speakers both in Haïti and in the diaspora (Canada and USA mainly). It is an official language of Haïti. The dialect spoken in the Cap Haïtien dialect differs slightly in its lexicon from the Center and South varieties.


## Tokenization and Word Segmentation

Words are delimited by whitespace characters.


## Morphology

Haitian Creole is an isolating language.

### Tags

* PART has not been used.
* Haïtian has four preverbal particules that have been tagged AUX: _te_, _ap_, _ta_, _pral_.
* Haïtian does not really have a copula: some ADJs, NOUNs, ADJs, and ADVs can root a clause. There is one existial verb, _se_, that we decided to tag VERB.
* The DET-PRON is unclear and still under studies. We decided to tag DET the pronominal words depending on a NOUN, but their forms are similar to PRONs.

### Features

* PRON have Person and Number features. Pronominal DET also. Some DET have a Definite feature.
* Other POS have no features.
* The treebank is glossed (`Gloss` feature) and translated (`text_fr`) in French, the lexifier language of this creole.


## Syntax

* Haïtian is an SVO language.
* It has double object construction, with the Recipient before the Theme. The recipient has been tagged `iobj` and the Theme `obj`. We do not know any property to distinguish them except their resepective order and their semantic roles.
* It has some Serial Verb Constructions, annotated `compound:svc`.
* We have one cleft construction in our corpus, annotated `advcl:cleft`.
* The `parataxis:insert` relation is used for parenthetical clauses which could not be considered as independent sentences, since they are not saturated.
* Oblique modifiers have been distinguished by the `obl:mod` sub-relation.


## Treebanks

There is [1](../treebanks/ht-comparison.html) Haitian Creole UD treebank:

  * [Haitian Creole Autogramm](../treebanks/ht_a/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
