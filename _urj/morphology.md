---
layout: base
title: 'Morphology'
permalink: urj/overview/morphology.html
udver: 2
---

# Morphology

Uralic languages have rich morphology. The parts-of-speech used are mapped
to UD following common linguistic practices. There is a number of
language-specific features that arch over most of the Uralic languages but are
not found in many others, e.g. IE languages.

These pages detail the best common practices we found so far, so suggested
practices for new treebanks but especially if your language has examples that
you'd think deviate from our descrptions, please describe this in your
language-specific documentation and file a github issue.

## Lemma field

Following the universal principle, lemma field should be filled with dictionary
entry form, as is with existing Uralic treebanks. If no common practice exists
within a language, singular nominatives for nominals and an infinitive or third
person singular presen for verbs is suggested. For lexeme sets with limited
inflection, e.g. adpositions with three case series, it is common to use the
inflected form as lemma, especially if the etymological nominative is highly
theoretical.

## Parts-of-Speech

The common parts of speech are used as defined in Universal part of the standard
without large changes: [VERB](), [NOUN](), [PROPN](), [ADJ](), [ADV](), [ADP](),
[SYM](), [PUNCT](), [INTJ]() and [X]() should follow the universal guidelines.
For determiners [DET]() and auxiliaries [AUX]() are not so common in Uralic
grammars and have been described below, particles [PART]() are used in UD in
more limited form than in some Uralic grammars and are also detailed below.

### Determiners? (DET)

Most Uralic languages do not have determiners (DET) at least not in the sense
of articles (apart Hungarians and...), however, there are open questions
whether to use a certain sub-set of pronouns etc., that modify nouns in
agreement. Most traditional grammars would not talk about determiners in Uralic
languages.

#### Examples

* [fi] _<b>se</b> talo_ "the house"

### Auxiliaries? (AUX)

Auxiliaries are not often used as a part-of-speech in traditional Uralic
grammars, however, they are used in existing Uralic treebanks. It is suggested
to use auxiliaries for copula verbs, verbs involved in temporal constructions
like pluperfect and verbs that are used for habitive constructions. It is also
possible to include all modal verbs into auxiliaries.

#### Examples

* [fi] _<b>olen</b> tehnyt_ " I have done"
* [fi] _minulla <b>on</b> ..._ " I have a ...
* [fi] _täytyy <b>tehdä</b>_ "must do"

### Particles? (PART)

Various Uralic grammars have used particle (PART) category as a left-over class
for hard-to-classify, in some grammars and traditions this class has been
subsumed by adverbs, and partially by interjections. In most Uralic treebanks
we avoid particles, usually interjections or adverbs are more suitable
categories.


## Features

Uralic universal annotations make use of lexical, inflectional and layered
features. Many of lexical and inflectional features follow Universal definitions
closely, e.g. most sub-classes of parts of speech (lexical) and inflectional
affixes mapping to features or layered features. Some inflectional affixes, such
as discourse particle enclitics are hard to map to anything in Universal
Dependencies scheme.

Most basic things like nominal cases and numbers follow Universal
conventions. Tense and mood as well as aspect may require some language specific
values not seen in other languages.

### Possessive suffixes

Most Uralic languages use possessive suffix morphology to describe possession,
rather than specific verbs. The feature to use with the possessive suffixes are:

* [Number[psor]]() and [Person[psor]]() for possessive suffixes marking possessor and
* [Number[psed]]() and [Person[psed]]() for possessive suffixes marking possessed
  quantities and references.

Values are same as with Number and Person in universal features.

### Negation

Many uralic languages mark negation in verb forms with special suffixes and/or
have a specific negation verb, that inflects like a regular verb. This is marked
with [Polarity]() feature and value Negative.

### Non-finite verb forms

Many Uralic languages have large verbal paradigms with number of non-finite
forms. The suggested analysis are to use feature [VerbForm] values Part, Inf,
Ger, Sup with Tense, Case and others (e.g. as normal with nouns and adjectives
when infinitives and participles act as deverbal nouns and adjectives
respectively).

