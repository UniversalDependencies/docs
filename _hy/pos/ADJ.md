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

In accordance with the UD approach, adjectival ordinal numerals _(առաջին, երկրորդ, ութերորդ, հարյուր հիսուներորդ)_ are tagged as adjectives, although the traditional grammar classifies them as numerals. They behave like adjectives both morphologically and syntactically, with the exception that they cannot be compared.

Note that participles are word forms that may share properties and usage of adjectives and verbs. Depending on context, they may be classified as either [VERB]() or `ADJ`.

In Armenian adjectives inflect for [Degree](). Degree can also be specified by [adverb](ADV) _ավելի_.

Note that some adjectives and most adverbs in Armenian don’t have a degree feature.

### Examples

- _մեծ_ “big
- _հին_ “old”
-	_կանաչ_ “green”
-	_անընկալելի_ “incomprehensible”
-	_առաջին, երկրորդ, երրորդ_ “first, second, third”
-	_խմելու, գրելու_ “(for) drinking, (for) writing” (infinitives)
-	_կառուցված/կառուցվող/կառուցվելիք շենք_ “a built house, a house, that is being built, a house that will be built” (resultative, subject, destinative passive participial adjective)
-	_հնչած/հնչող/հնչելիք զանգ_ “a ringing call, a call that ringed, a call that will ring” (resultative, subject, destinative participial adjective)

### Border cases

Resultative, subject, destinative participles lie on the border between verbs and adjectives. Core participial forms are tagged [VERB]() (used to form the moods). As participial adjectives they are tagged `ADJ` (used in nominal predication with [copula](cop), and to modify nouns), although they may have verbal features in addition to the adjectival ones.
