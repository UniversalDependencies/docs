---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

An adposition is a word that links a nominal to its head. Adpositions are often subdivided into prepositions and postpositions depending on whether they precede or succeed the nominal. (In addition, there exist circumpositions, which are discontiguous expressions that enclose the nominal.)

Clarifications on how to distinguish `ADP` from [SCONJ](), [PART]() and [VERB](), and on fixed expressions:

* In many languages, words that function as adpositions may also be used to mark adverbial clauses, like [en] _before_ and _after_. 
If one of the functions is clearly dominant, the tag corresponding to that function (`ADP` or [SCONJ]()) should be used for all occurrences,
and the difference in syntactic function be marked only by the syntactic relation ([case]() vs. [mark]()).
If both functions are equally regular, then the tag may alternate with the syntactic relation (`case`/`ADP` vs. `mark`/`SCONJ`).

* Note that in Germanic languages, some prepositions may also function
as verbal particles, as in _give <b>in</b>_ or _hold <b>on</b>_. They
are still tagged `ADP` and not [PART]().

* A common pathway of grammaticalization is from verbs to adpositions.
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

* In many languages, adpositions can take the form of fixed multiword expressions.
The component words are grouped together with the [fixed]() relation.
A special case is that of circumpositions, which by necessity are multiword expressions.

### Examples

- _of_
- _from_
- _during_

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an adposition?](https://glossary.sil.org/term/adposition)
- [Wikipedia](http://en.wikipedia.org/wiki/Preposition_and_postposition)
<!-- Interlanguage links updated St 12. listopadu 2025, 09:19:45 CET -->
