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

Czech verbs can take the following morphological forms:

- Infinitive (this is the citation form)
- Finite verb (indicative and imperative forms; conditional is constructed periphrastically)
- Past participle (used to construct past and conditional)
- Passive participle (used to construct passive voice; also used separately as an adjective)
- Transgressive (also called adverbial participle)

There are participial forms that are tagged as adjectives ([ADJ]()) rather than verbs.
See below for examples.

A verbal noun can be derived productively from almost every verb
(e.g. _есть_ &nbsp;“to eat” → _поедание_ &nbsp;“eating”).
While in other languages a corresponding form may be called gerund and tagged `VERB`,
in Russian it is tagged [NOUN](). It has always the neuter [ru-feat/Gender]()
and it inflects for [ru-feat/Number]() and [ru-feat/Case]().

### Examples

- _рисовать_ &nbsp;“to draw”
- _рисую, рисуешь, рисует, рисуем, рисуете, рисуют_ &nbsp;“I draw, you draw, he/she/it draw, we draw, you draw, they draw”
- _рисуй, рисуйте_ &nbsp;“draw” (imperative in different persons and numbers)
- _рисовал, рисовала, рисовало, рисовали_ &nbsp;“drew” (past participle in different genders and numbers)
- _рисован, рисована, рисовано, рисованы_ &nbsp;“drawn” (passive participle in different genders and numbers)
- _рисуя_ &nbsp;“drawing” (present transgressive)

### Border cases

There are passive participles as verb forms (`VERB`)
and participial adjectives (`ADJ`). For example:

- Verb: _рисован, рисована, рисовано, рисованы_ &nbsp;“drawn”
- Adjective: _рисованый, рисованая, рисованое, рисованые_ &nbsp;“drawn”

Their meaning is almost identical but the usage slightly varies.
Both groups can be used in nominal predication with [copula](ru-dep/cop).
Only true participles (verbs) can be used to form the passive voice
(but it may be sometimes difficult to distinguish from copula constructions, see [AUX]()).
On the other hand, the participial adjectives inflect for case and thus
can modify nouns.

There is an analogy with some adjectives that preserved so called nominal (short) forms.
And these adjectives are not derived from verbs. Example:

- Short (nominal) forms: _стар, стара, старо_ &nbsp;“old”
- Normal (pronominal) forms: _старый, старая, старое_ &nbsp;“old”

Here both groups are `ADJ`. The nominal forms are used in predication,
the standard forms both in predication and to modify nouns.
