---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
udver: '2'
---

### Definition

Adjectives are words that typically modify nouns and specify their properties or attributes. They may also function as predicates, as in

_Շտերն աղտեղի է:_ “The papules are unpleasant.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]() for determiners and [NUM]() for numerals.

In accordance with the UD approach, ordinal numerals _(առջի, իրեքում, չորսում, տասնուվեցում)_ are tagged as adjectives, although the traditional grammar classifies them as numerals. They behave like adjectives both morphologically and syntactically, with the exception that they cannot be compared.

Most Middle Armenian adjectives inflect for [Degree]() (_մենձ, այլ մենձ, այլ մենձն_) “big”.

### Examples

- _մենձ_ “big”
- _ամուր_ “hard, strong”
-	_կանանչ_ “green”
-	_անլմնելի_ “endless, infinite”
-	_առջի, երկուսում, իրեքում_ “first, second, third”

### Border cases

Resultative, subject and future-II participles are word forms that may share properties and usage of adjectives and verbs. Note, that in release 2.2 both core participial forms (used to form the moods) and participial adjectives (used in nominal predication with [copula](cop), and to modify nouns) are tagged [VERB]():

- _<b>ծաղկեալ ծառ_ “a tree in bloom”
-  _ջրած գինի_ “wine diluted with water”
-	_<b>սնցնաւղ մայր_ “a feeding mother”

Note that some participial adjectives are tagged `ADJ`, although they may have verbal features in addition to the adjectival ones.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:19:43 CET -->
