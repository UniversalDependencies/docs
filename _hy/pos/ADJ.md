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

Following the UD approach, ordinal numerals _(առաջին, երկրորդ, ութերորդ, հարյուր հիսուներորդ)_ are tagged as adjectives, although the traditional grammar classifies them as numerals. They behave like adjectives both morphologically and syntactically, with the exception that they cannot form degrees of comparison.

Most Armenian adjectives form comparative and superlative [Degree]() (_մեծ_/_meç_, _ավելի մեծ_/_aveli meç_, _ամենամեծ_/_amenameç_) “big, bigger, the biggest”.

### Examples

- _մեծ_/_meç_ “big”
- _հին_/_hin_ “old”
-	_կանաչ_/_kanač_ “green”
-	_անընկալելի_/_anënkaleli_ “incomprehensible”
-	_առաջին_/_aṙaǰin_, _երկրորդ_/_erkrord_, _երրորդ_/_errord_ “first, second, third”

### Border cases

Resultative, subject, and past participles share properties of both adjectives and verbs. Note that both core participial forms (used to form finite indicative tenses) and adjectival participles (used either in nominal predication with the [copula](cop) or as noun modifiers) are tagged [VERB]():

- _<b>հոգնած</b> է_/_<b>hognaç</b> ē_ “he/she is tired”
- _<b>ստուգված</b> է_/_<b>stowgvaç</b> ē_ “it is checked”
-	_<b>գնացած</b> է եղել_/_<b>gnac’aç</b> ē eġel_ “he/she had been gone”
-	_<b>կառուցված, կառուցվող, կառուցվելիք</b> շենք_/_<b>kaṙowc’vaç, kaṙowc’voġ, kaṙowc’velik’</b> šenk’_ “a building constructed, under construction, or to be constructed”
-	_<b>հնչած, հնչող, հնչելիք</b> զանգ_/_<b>hnčaç, hnčoġ, hnčelik’</b> zang_ “a bell rung, ringing, or to be rung”

Note that some participial adjectives that are already lexicalized as adjectives are tagged `ADJ`, although they may retain certain verbal features.
- _սոված_/_sovaç_ “hungry”
- _հավասարակշռված_/_havasarakšṙvaç_ “balanced”
<!-- Interlanguage links updated Po 29. června 2026, 17:57:35 CEST -->
