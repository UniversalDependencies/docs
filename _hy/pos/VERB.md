---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---

### Definition

A verb is a member of the syntactic class of words that typically
signal events and actions, can constitute a minimal predicate in a
clause, and govern the number and types of other constituents which
may occur in the clause.

Note that the `VERB` tag covers main verbs _(content verbs)_, but it does not cover _auxiliary verbs_ and _copulas,_ for which there is
the [AUX]() tag. (Armenian modal verbs are not considered auxiliary.)
See the description of `AUX` for more information on the borderline
between `VERB` and `AUX`.

Armenian verbs can take the following morphological forms:

- Infinitive (this is the citation form)
- Finite verb (indicative, imperative, subjunctive and conditional forms; necessitative is constructed periphrastically)
- Resultative, subject, processual, imperfective, future-I, future-II, perfect and negative participles (used to construct (secondary) complex tenses and moods)
- Converb (also called adverbial participle)

There are participial forms that are tagged as adjectives ([ADJ]()) rather than verbs.

Infinitves behave similarly to [nouns]() and are used as such. Depending on context, they may be tagged as either `VERB` or `NOUN`.

### Examples

- _գրել, գրելը_ &nbsp;“to write, the writing”
- _գրեցի, գրեցիր, գրեց, գրեցինք, գրեցիք, գրեցին_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _ունեմ, ունես, ունի, ունենք, ունեք, ունեն_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _գրի՛, գրե՛ք, կարդա՛, կարդացե՛ք_ &nbsp;“write, read” (imperative in different persons and numbers)
- _գրեմ, գրես, գրի, գրենք, գրեք, գրեն_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _կարդայի, կարդայիր, կարդար, կարդայինք, կարդայիք, կարդային_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _կկարդամ, կկարդաս, կկարդա, կկարդանք, կկարդաք, կկարդան_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _գրեի, գրեիր, գրեր, գրեինք, գրեիք, գրեին_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _գրած, կարդացած, գրող, կարդացող, գրելիս, կարդալիս, գրում, կարդում, գրելու, կարդալու, գրելիք, կարդալիք, գրել, կարդացել, գրի, կարդա_ &nbsp;“write, read” (participles)
- _գրելիս, կարդալիս_ &nbsp;“writing, reading” (converb)

### Border cases

Resultative, subject, future-II destinative participles lie on the border between verbs and adjectives. Core participial forms are tagged [VERB]() and used to form the moods. As participial adjectives they are tagged [ADJ]() (used in nominal predication with [copula](cop), and to modify nouns), although they may have verbal features in addition to the adjectival ones. For example:

-	Resultative: _<b>կառուցված</b> շենք_ “a built house”,
-	Subject: _<b>կառուցվող</b> շենք_ “a house, that is being built”
-	Future-II: _<b>կառուցվելիք</b> շենք_ “a house that will be built”
