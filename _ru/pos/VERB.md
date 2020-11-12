---
layout: postag
title: 'VERB'
shortdef: 'verb'
---

### Definition

A verb is a member of the syntactic class of words that typically
signal events and actions, can constitute a minimal predicate in a
clause, and govern the number and types of other constituents which
may occur in the clause.

Note that the `VERB` tag covers main verbs _(content verbs),_
_modal verbs_ and
_copulas_ but it does not cover _auxiliary verbs,_ for which there is
the [AUX]() tag. (Russian modal verbs are not considered auxiliary.)
See the description of `AUX` for more information on the borderline
between `VERB` and `AUX`.

Russian verbs can take the following morphological forms:

- Infinitive (this is the citation form)
- Finite verb (indicative and imperative forms; conditional future tense forms are constructed periphrastically)
- Participle (short forms mostly used in passive predicative constructions, full forms mostly used in attributive constructions)
- Converb (also called adverbial participle or transgressive)  
See examples below.

A verbal noun can be derived productively from many verbs (e.g. _есть_ &nbsp;“to eat” → _поедание_ &nbsp;“eating”).
While in other languages the corresponding form may be called gerund and tagged `VERB`,
in Russian it is tagged [NOUN](). It inflects for [ru-feat/Number]() and [ru-feat/Case]().

### Examples

- _рисовать_ &nbsp;“to draw” (infinitive)
- _рисую, рисуешь, рисует, рисуем, рисуете, рисуют, рисовал, рисовала, рисовало, рисовали_ &nbsp;“I draw, you draw, he/she/it draw, we draw, you draw, they draw” (finite indicative)
- _рисуй, рисуйте_ &nbsp;“draw” (finite imperative)
- _(на)рисован, рисуем_ &nbsp;“drawn” (short passive participle in different tenses)
- _рисующий, рисовавший, рисуемый, рисованный_ &nbsp;“drew” (participle in different tenses and voices, full forms)
- _рисуя, рисовав_ &nbsp;“drawing” (converb)

### Border cases

There can be passive participles (tagged as verb forms (`VERB`)) 
and participial adjectives (tagged as (`ADJ`)). For example:

- Verb: _бронирован, бронирована, бронировано, бронированы, бронированный, бронированная, бронированное, бронированное_ &nbsp;“armored”
- Adjective: _бронированный, бронированная, бронированное, бронированное_ &nbsp;“armored”

Their meaning is almost identical but the usage slightly varies.
Both groups can be used in nominal predication with [copula](ru-dep/cop).
Only true participles (verbs) can be used to form the passive construction and 
take obliques that refer to semantic agents (actor), place and other circumstances of the situation
(e. g. _танк не был бронирован на заводе_, _бронированный на заводе танк_ &nbsp;“the tank (was) armored at the factory”).
On the other hand, the participial adjectives modify nouns and are used in attributive, depictive (and sometimes predicative) constructions.

<!-- Interlanguage links updated Čt lis 12 09:42:58 CET 2020 -->
