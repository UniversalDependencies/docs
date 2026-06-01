---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
udver: '2'
---

### Definition

Adjectives are words that typically modify nouns and specify their properties or attributes. They may also function as predicates, as in

_Մեքենան կանաչ է:_/_Mek’enan kanač ē._ “The car is green.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]() for determiners and [NUM]() for numerals.

In accordance with the UD approach, ordinal numerals _(առաջին, երկրորդ, ութերորդ, հարյուր հիսուներորդ)_ are tagged as adjectives, although the traditional grammar classifies them as numerals. They behave like adjectives both morphologically and syntactically, with the exception that they cannot form degrees of comparison.

Most Armenian adjectives inflect for [Degree]() (_մեծ_/_meç_, _ավելի մեծ_/_aveli meç_, _ամենամեծ_/_amenameç_) “big, bigger, the biggest”.

### Examples

- _մեծ_/_meç_ “big”
- _հին_/_hin_ “old”
-	_կանաչ_/_kanač_ “green”
-	_անընկալելի_/_anënkaleli_ “incomprehensible”
-	_առաջին_/_aṙaǰin_, _երկրորդ_/_erkrord_, _երրորդ_/_errord_ “first, second, third”

### Border cases

Resultative, subject, and past participles are word forms that share properties and usage of both adjectives and verbs. Note that both core participial forms (used to form finite indicative tenses) and adjectival participles (used in nominal predication
with the [copula](cop) or to modify nouns) are tagged [VERB]():

- _**հոգնած** է_/_**hognaç** ē_ “he/she is tired”
- _**ստուգված** է_/_**stowgvaç** ē_ “it is checked”
-	_**գնացած** է եղել_/_**gnac’aç** ē eġel_ “he/she had been gone”
-	_**կառուցված, կառուցվող, կառուցվելիք** շենք_/_**kaṙowc’vaç, kaṙowc’voġ, kaṙowc’velik’** šenk’_ “a building constructed, under construction, or to be constructed”
-	_**հնչած, հնչող, հնչելիք** զանգ_/_**hnčaç, hnčoġ, hnčelik’** zang_ “a bell rung, ringing, or to be rung”

Note that some participial adjectives that are already lexicalized as adjectives are tagged `ADJ`, although they may retain certain verbal features.
- _սոված_/_sovaç_ “hungry”
- _հավասարակշռված_/_havasarakšṙvaç_ “balanced”
<!-- Interlanguage links updated St 6. května 2026, 20:41:51 CEST -->
