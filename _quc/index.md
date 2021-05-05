---
layout: base
title:  'Kʼicheʼ UD'
udver: '2'
---

# UD for Kʼicheʼ <span class="flagspan"><img class="flag" src="../../flags/svg/GT-QC.svg" /></span>

## Tokenisation and Word Segmentation

* In general words are split on spaces. 
* Status suffixes, a characteristic feature of Mayan languages are split from their verbal or directional hosts
* Contractions of preposition and relational noun are split (e.g. *chqawach* = *chi* + *qawach*)

## Morphology

### Tags

* Kʼicheʼ uses 15 out of the 17 universal tags, unused are `X` and `SYM`.
  * [ADJ]() [ADP]() [ADV]() [AUX]() [CCONJ]() [INTJ]() [NOUN]() [NUM]() [PART]() [PRON]() [PROPN]() [PUNCT]() [SCONJ]() [VERB]()
* Kʼicheʼ has at minimum 2 auxiliaries, *tajin* for the progressive aspect and *ta(j)* for irrealis.
* There are are several verbal nouns, which are annotated with `VerbForm=Inf` and a verbal adjective *-inaq* annotated with `VerbForm=Part`.
* There are two prepositions in Kʼicheʼ, *chi* and *pa*.

### Features

#### Nouns
* Most nouns are not inflected for number, although animate nouns can be, in this case they are annotated with `Number=Plur`.
* There is a subset of nouns used relationally, these are called relational nouns and are used where adpositions would be used in other languages.
  * They are marked with the feature `NounType=Relat`.
  * The lemmas are: *ech*,  *ukʼ*,  *umal*,  *wach*,  *ibʼ*,  *onojel*,  *wiʼ*,  *pam*,  *ij*,  *xeʼ*,  *xoʼl*,  *tukel*,  *tzalaj*,  *naqaj*.
  * Relational nouns are also used for:
    * Reflexive, *ibʼ*
    * Introducing the agent in a passive, *umal* 

#### Verbs 
* Transitive verbs have polypersonal agreement which is indicated through layered features `Person[obj]`, `Number[obj]`, `Person[subj]`, `Number[subj]`.
* Finite verbs have `Aspect` but no `Tense`. 
  * The imperfective or incompletive is annotated with `Aspect=Imp`.
  * The perfective or completive is annotated with `Aspect=Perf`.
* Incorporated movement is indicated through the feature `Movement`:
  * Movement away from is marked with `Movement=Abl`, this is the morph *-eʼ-*
  * Movement towards is marked with `Movement=Lat`, this is the morph *-l-*
* There are two principle valency changing processes: Passive and antipassive. Both produce verbs with only set B agreement.
  * In the passive, annotated with `Voice=Pass`, the object is promoted to subject and the subject is demoted to oblique.
  * In the antipassive, annotated with `Voice=Antip`, the subject agreement is maintained and the object is demoted to oblique.

## Syntax

Kʼicheʼ has ergative-absolutive alignment and verbs have polypersonal agreement. The subject of an intransitive verb takes a 
set B subject marker. The subject of a transitive verb takes a set A subject marker and a set B object marker. If the verb is 
passivised or antipassivised then the only remaining marker is a set B marker.

There are no copulas but there is an existential word *kʼo* meaning something like "existent". Another non-verbal predicate
is *rajawaxik* "necessary".

### Language-specific relations

* [`dep:ss`]() Used for status suffixes
* [`dep:agr`]() Used for clitic agreement markers 
* [`advmod:neg`]() Used for the negative markers *ma(n)* and *na*


## Treebanks

There is [1](../treebanks/quc-comparison.html) Kʼicheʼ UD treebank:

  * [Kʼicheʼ-IU](../treebanks/quc_iu/index.html)

