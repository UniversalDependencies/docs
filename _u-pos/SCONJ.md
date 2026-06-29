---
layout: postag
title: 'SCONJ'
shortdef: 'subordinating conjunction'
udver: '2'
---

### Definition

A subordinating conjunction is a word that links a subordinate clause to its head.

Common subtypes of subordinating conjunctions are:

* Conjunctions that mark complement clauses, like [en] _that_ or _whether_
* Conjunctions that mark adverbial clauses of different types, like [en] _because_ (causal) or _although_ (concessive)
* Non-pronominal relativizers, like [he] _še_.

Clarifications on how to distinguish the second type from [ADP]()/[CCONJ]() and the third type from [PRON]():

* Subordinating conjunctions contrast with coordinating conjunctions, which mark clauses (or other expression types) that are in a relation of coordination rather than subordination; see [CCONJ]().
* In many languages, adverbial clauses are regularly marked by words that also function as adpositions, like [en] _before_ and _after_. 
If one of the functions is clearly dominant, the tag corresponding to that function (`SCONJ` or [ADP]()) should be used for all occurrences,
and the difference in syntactic function be marked only by the syntactic relation ([mark]() vs. [case]()).
If both functions are equally regular, then the tag may alternate with the syntactic relation (`mark`/`SCONJ` vs. `case`/`ADP`).
* In the case of relativizers, the tag `SCONJ` (and the relation [mark]()) should only be used for words that mark a relative clause
without fulfilling a syntactic role in the clause. Relative and resumptive pronouns (like [en] _that_ and _which_) should be tagged [PRON]().

### Examples

- _that_ as in _I believe <b>that</b> he will come._
- _if_
- _while_

### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is a subordinating conjunction?](https://glossary.sil.org/term/subordinating-conjunction)
- [Wikipedia](http://en.wikipedia.org/wiki/Conjunction_(grammar))
<!-- Interlanguage links updated Po 29. června 2026, 18:10:22 CEST -->
