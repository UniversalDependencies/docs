---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
---

### Definition

Adjectives are words that typically modify nouns and specify their properties or attributes. They may also function as predicates, as in
_Մեքենան կանաչ է_ “The car is green.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]() for determiners and [NUM]() for numerals.

In accordance with the UD approach, adjectival ordinal numerals _(առաջին, երկրորդ, ութերորդ, հարյուր հիսուներորդ)_ are tagged as adjectives, although the traditional grammar classifies them as numerals. They behave like adjectives both morphologically and syntactically, with the exception that they cannot be compared.

Note that participles are word forms that may share properties and usage of adjectives and verbs. Depending on context, they may be classified as either [VERB]() or `ADJ`.

In Armenian the Adjectives inflect for [Degree](). Degree can also be specified by a set of [adverbs]().

Note that some adjectives and most adverbs in Armenian don’t have a Degree feature.

All adjectives and some of the adverbs may function as a noun without additional derivation, in these cases, we keep the POS tag of the original word, but assign nominal features to the word.

### Examples

- _մեծ_ “big
- _հին_ “old”
-	_կանաչ_ “green”
-	_անընկալելի_ “incomprehensible”
-	_առաջին, երկրորդ, երրորդ_ “first, second, third”
-	_խմելու, գրելու_ “(for) drinking, (for) writing”
-	_կառուցված/կառուցվող/կառուցվելիք շենք_ “a built house, a house, that is being built, a house that will be built” (resultative, subject, destinative passive participial adjective)
-	_հնչող/հնչած/հնչելիք զանգ_ “a ringing call, a call that ringed, a call that will ring” (resultative, subject, destinative participial adjective)

Resultative, subject, destinative participles lie on the border between verbs and adjectives. Core participial forms are tagged [VERB]() (used in predication). As participial adjectives they are tagged `ADJ` and thus modify nouns.
