---
layout: postag
title: 'VERB'
shortdef: 'verb'
---

### Definition

A verb is a member of the syntactic class of words that typically signal events and actions, can constitute a minimal predicate in a
clause, and govern the number and types of other constituents which may occur in the clause.

Note that the `VERB` tag covers main verbs _(content verbs)_ and _modal verbs_ but it does not cover _auxiliary verbs,_ for which there is the [AUX]() tag. (Ukrainian modal verbs are not considered auxiliary.) See the description of `AUX` for more information on the borderline between `VERB` and `AUX`.

Ukrainian verbs can take the following morphological forms:

- Infinitive (this is the citation form)
- Finite verb (indicative and imperative forms; conditional is constructed periphrastically). Ukrainian future tense can be formed either analitically, with the help of the auxiliary verb _бути_ &nbsp;“to be” or syntactically, with the help of endings rooted in the auxiliary verb _мати_ &nbsp;“to have”. 
- Active and passive adverbial participle
- Impersonal form ending with _-но/-то_. In Slavic languages other than Ukrainian and Polish this form coincides with the neutral passive adjectival participle, but in those two languages the participle has a different ending: _-не_ in Ukrainian and _-ne_ in Polish, which is why it is treated as a separate verbal form.

There are participial forms that are tagged as adjectives ([ADJ]()) rather than verbs.
See below for border cases.

A verbal noun can be derived productively from almost every verb (e.g. _робити_ &nbsp;“to do” → _робіння_ &nbsp;“doing”). While in other languages a corresponding form may be called gerund and tagged `VERB`, in Ukrainian it is tagged [NOUN](). It has always the neuter [uk-feat/Gender]() and it inflects for [uk-feat/Number]() and [uk-feat/Case]().

### Examples

- _нести_ &nbsp;“to carry”
- _несу, несеш, несе, несемо, несете, несуть_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _неси, несімо, несіть_ &nbsp;“carry” (imperative in different persons and numbers)
- _ніс, несла, несло, несли_ &nbsp;“carried” (past tense forms in different genders and numbers)
- _несено_&nbsp;“(it was/somebody) carried” (passive impersonal form)
- _несучи, нісши_ &nbsp;“carrying” (present and past adverbial participles)

### Border cases

Passive and active adjectival participles are non-finite verb forms that share properties of verbs and adjectives.
- Passive adjectival participle is used to construct passive voice: _несений, несена, несене, несені_ &nbsp;“carried” (passive participle in different genders and numbers). It is also used separately as an adjective: _ношений, драний_ &nbsp;“carried, torn/ragged”. Their meaning is almost identical but the usage slightly varies. Both groups can be used in nominal predication with [copula](uk-dep/cop). Only true participles (verbs) can be used to form the passive voice (but it may be sometimes difficult to distinguish from copula constructions, see [AUX]()). On the other hand, the participial adjectives inflect for case and thus can modify nouns.
- Active participle (it is considered ungrammatical but still used occasionally, which is why it is encoded): _несучий, несуча, несуче, несучі_ &nbsp;“carrying” (present adjectival participle in different genders and numbers).

<!-- Interlanguage links updated Pá kvě 14 11:08:26 CEST 2021 -->
