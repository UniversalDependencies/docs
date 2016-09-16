---
layout: base
title:  'Morphology'
permalink: urj/overview/morphology.html
---

# Morphology

Uralic languages exhibit rich morphology. The parts-of-speech used are mapped
to UD following common linguistic practices. There is a number of
language-specific features that arch over most of the Uralic languages but are
not found in many others, e.g. IE languages.

This page is an overview to open questions and general guidelines.

## Lemma field

Following the universal principle, lemma field should be filled with dictionary
entry form, as is with existing Uralic treebanks. If no practice exists,
singular nominatives for nominals and an infinitive for verbs is common. For
lexeme sets with limited inflection, e.g. adpositions with three case series,
it is common to use the inflected form as lemma, especially if the etyomological
nominative is highly theoretical.

## Parts-of-Speech

The common parts of speech are used as defined in Universal part of the standard
without large changes. Verbs (VERB), nouns (NOUN), adjectives (ADJ) are
quite straight forward in the common cases and exist for all Uralic languages.
Also adverbs (ADV) and adpositions (ADP) should be used as separate classes.
The classes for symbols (SYM) and punctuation (PUNCT) are both used as normal.
Interjections (INTJ) are used. The uncategorisable (X) class should be used for
foreign tokens and otherwise non-linguistic or broken tokens.

### Determiners? (DET)

Most Uralic languages do not have determiners (DET) at least not in the sense
of articles (apart Hungarians and...), however, there are open questions
whether to use a certain sub-set of pronouns etc., that modify nouns in
agreement. Most traditional grammars would not talk about determiners in Uralic
languages.

### Auxiliaries? (AUX)

Auxiliaries are not often used as a part-of-speech in Uralic grammars, however,
they are used in existing Uralic treebanks. Generally an auxiliary can be used
for verb that has verbal complement or forms verb chains.

### Particles? (PART)

Various Uralic grammars have used particle (PART) category as a left-over class
for hard-to-classify, in some grammars and traditions this class has been
subsumed by adverbs, and partially by interjections.

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

* Number[psor] and Person[psor] for possessive suffixes marking possessor and
* Number[psed] and Person[psed] for possessive suffixes marking possessed 
  quantities and references.

Values are same as with Number and Person in universal features.

### Negation

Many uralic languages mark negation in verb forms with special suffixes and/or
have a specific negation verb, that inflects like a regular verb.

### Non-finite verb forms

Many Uralic languages exhibit large verbal paradigms with number of non-finite
grammatical forms. There are no clear tendencies, languages should make use of
language specific values for VerbForm feature?
