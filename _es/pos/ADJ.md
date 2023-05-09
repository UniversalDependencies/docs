---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
udver: '2'
---

### Definition

Adjectives are words that typically modify nouns and specify their properties or attributes. They may also function as predicates, as in

_El coche es <b>verde</b>._ "The car is green."

In Spanish, adjectives normally follow the noun, e.g. _La casa <b>amarilla</b>_ "The yellow house", although sometimes they may also precede the noun, e.g. _La <b>blanca</b> nieve_ "The white snow".

Adjectives in Spanish agree in number and gender with the noun they modify, e.g. _la casa <b>amarilla</b>_ (femenine singular), _las casas <b>amarillas</b>_ (femenine plural).

### Examples

* _grande_ "big"
* _viejo_ "old"
* _verde_ "green"
* _incomprensible_ “incomprehensible”
* _primero_ "first", _segundo_ "second", _tercero_ "third"

The class of adjectives in Spanish UD also includes ordinal numbers and participles. Ordinal numbers can function in different contexts, as adverbs (ADV) when modifying a verb (VERB), as adjectives (ADJ) when modifying a noun (NOUN). They are tagged `ADJ` in both situations (while the dependency relation will distinguish [amod]() from [advmod]()). Note that participles are word forms that may share properties and usage of adjectives and verbs. Depending on context, they may be classified as either [VERB]() or ADJ. In the case of participial adjectives, the lemma is not the verb in the infinitive form, but rather the masculine singular form of the participle.

### For example:

form: _moderada_; lemma: _moderado_ "moderated"
form: _organizadas_; lemma: _organizado_ "organized"

In Spanish, there are two types of possessive adjectives: unstressed (mi, tu, su, nuestro, vuestro) and stressed (mío, tuyo, suyo, nuestro, vuestro). These possessive adjectives agree in gender and number with the noun they modify and are treated as [DET]() within the UD framework.

<!-- Interlanguage links updated Út 9. května 2023, 20:03:21 CEST -->
