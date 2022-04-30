---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Adposition is a cover term for prepositions and postpositions.
Adpositions belong to a closed set of items that occur before
(preposition) or after (postposition) a complement composed of a noun
phrase, noun, pronoun, or clause that functions as a noun phrase, and
that form a single structure with the complement to express its
grammatical and semantic relation to another unit within a clause.

In many languages, adpositions can take the form of fixed multiword
expressions, such as _in spite of_, _because of_, _thanks to_. The
component words are then still tagged according to their basic use
(_in_ is `ADP`, _spite_ is [NOUN](), etc.) and their status as
multiword expressions are accounted for in the syntactic annotation.

Note that in Germanic languages, some prepositions may also function
as verbal particles, as in _give <b>in</b>_ or _hold <b>on</b>_. They
are still tagged `ADP` and not [PART]().

A common pathway of grammaticalization is from verbs to adpositions.
Along this pathway of grammaticalization, it is common to have words
with roughly their original verbal meaning and belonging to the inflectional
paradigm of an extant verb with suitable verbal morphology but functioning
in a sentence as a preposition, with certain syntactic tests or finer-grained
semantic criteria suggesting that they are prepositions (for example, they have no
understood subject). These words have
variously been called **deverbal prepositions**, **deverbal connectives**, 
**quasi-prepositions**, or **pseudo-prepositions**. In English this includes words like
*following*, *concerning*, *regarding*, and *given*. 
Similar cases occur in many other languages (such as French *concernant* and *suivant*).
For UD, we have decided that such words
will be given the POS [VERB]() and normal verbal morphological features,
but they can be recognized as syntactically adpositions by giving them the grammatical relation
[case]() or [mark](). Conversely, in cases where there is no longer an extant verb or any still existent 
verb has a quite different meaning, grammaticalization is viewed as complete and the POS should be [ADP](). 
In English this would apply to *pending* or *during* (from the disused verb *dure*:
“The wood being preserv’d dry will dure a very long time” – Evelyn 1664).


### Examples

- _in_
- _to_
- _during_

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an adposition?](https://glossary.sil.org/term/adposition)
- [Wikipedia](http://en.wikipedia.org/wiki/Preposition_and_postposition)
<!-- Interlanguage links updated St lis 3 20:58:07 CET 2021 -->
