---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
udver: '2'
---

### Definition

Adjectives are words that typically modify nouns and specify their properties or attributes. They may also function as predicates, as in

_Մեքենան կանաչ է:_ “The car is green.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]() for determiners and [NUM]() for numerals.

In accordance with the UD approach, ordinal numerals _(առաջին, երկրորդ, ութերորդ, հարյուր հիսուներորդ)_ are tagged as adjectives, although the traditional grammar classifies them as numerals. They behave like adjectives both morphologically and syntactically, with the exception that they cannot be compared.

Most Armenian adjectives inflect for [Degree]() (_մեծ, ավելի մեծ, ամենամեծ_) “big”.

### Examples

- _մեծ_ “big
- _հին_ “old”
-	_կանաչ_ “green”
-	_անընկալելի_ “incomprehensible”
-	_առաջին, երկրորդ, երրորդ_ “first, second, third”
-	_հայոց, վրաց, պարսից, վանա_ “armenians’, georgians’, of Persis, of Van” (possessive adjectives)

### Border cases

Resultative, subject and future-II participles are word forms that may share properties and usage of adjectives and verbs. Note, that in release 2.2 both core participial forms (used to form the moods) and participial adjectives (used in nominal predication with [copula](cop), and to modify nouns) are tagged [VERB]():

- _<b>կառուցված, կառուցվող, կառուցվելիք</b> շենք_ “a built house; a house, that is being built; a house that will be built”
-	_<b>հնչած, հնչող, հնչելիք</b> զանգ_ “a ringing call; a call that ringed; a call that will ring”

Note that some participial adjectives are tagged `ADJ`, although they may have verbal features in addition to the adjectival ones.
<!-- Interlanguage links updated Út zář 29 18:40:42 CEST 2020 -->
