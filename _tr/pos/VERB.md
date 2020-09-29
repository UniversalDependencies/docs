---
layout: postag
title: 'VERB'
shortdef: 'verb'
---

### Definition

A verb is a member of the syntactic class of words that typically signal events and actions, 
can constitute a minimal predicate in a clause,
and govern the number and types of other constituents which may occur in the clause.
Verbs are often associated with grammatical categories like
tense, mood, aspect and voice,
which can either be expressed inflectionally or using auxiliary verbs or particles.

We tag all verbs, including auxiliary and copula use of verbs "ol-" and "bulun-" as `VERB`.

Besides ordinary verb stems, we also mark the non-root [inflectional groups](../overview/tokenization.html) that introduce a copular construction, as in _Ali evde<b>ydi</b>_ "Ali <b>was</b> at home".

Turkish verbs can get a complex set of inflections which assign _voice_, _tense_, _aspect_, _mood_, _negation_, _person_ and _number_.
Some feature assignments are ambiguous or non-trivial.
See the section on verbal features in [tr-overview/specific-syntax]().

### Examples

- _koş_, _ye_ "run, eat"
- _koştu_, _yedi_ "run (past), ate"
- _görüştürülmüyorlarmış_ "they were not allowed to see each other" 
<!-- Interlanguage links updated Út zář 29 20:23:04 CEST 2020 -->
