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
the [AUX]() tag.
See the description of `AUX` for more information on the borderline
between `VERB` and `AUX`.

Armenian verbs can take the following morphological forms:

- Infinitive (this is the citation form),
- Finite verb (indicative, imperative, subjunctive and conditional forms; necessitative is constructed periphrastically),
- Resultative, subject, processual, imperfective, future-I, future-II, perfect and negative participles (used to construct (secondary) complex tenses and moods),
- Converb (also called adverbial participle).

There are participial forms that are tagged as adjectives ([ADJ]()) rather than verbs.

Infinitves behave similarly to nouns ([NOUN]()) and are used as such. Depending on context, they may be tagged as either `VERB` or `NOUN`.

### Examples

- _գրել, գրել(ը)_ &nbsp;“to write, (the) writing”,
- _գրեցի, գրեցիր, գրեց, գրեցինք, գրեցիք, գրեցին_ &nbsp;“I wrote, you wrote, he/she/it wrote, we wrote, you wrote, they wrote”,
- _ունեմ, ունես, ունի, ունենք, ունեք, ունեն_ &nbsp;“I have, you have, he/she/it has, we have, you have, they have”,
- _գրի՛, գրե՛ք, կարդա՛, կարդացե՛ք_ &nbsp;“write, read” (imperative in different numbers),
- _գրեմ, գրես, գրի, գրենք, գրեք, գրեն_ &nbsp;“I write.`Sub`, you write.`Sub`, he/she/it write.`Sub`, we write.`Sub`, you write.`Sub`, they write.`Sub`”,
- _գնայի, գնայիր, գնար, գնայինք, գնայիք, գնային_ &nbsp;“I went.`Sub`, you went.`Sub`, he/she/it went.`Sub`, we went.`Sub`, you went.`Sub`, they went.`Sub`”,
- _կգնամ, կգնաս, կգնա, կգնանք, կգնաք, կգնան_ &nbsp;“I will go, you will go, he/she/it will go, we will go, you will go, they will go”,
- _կգրեի, կգրեիր, կգրեր, կգրեինք, կգրեիք, կգրեին_ &nbsp;“I would write, you would write, he/she/it would write, we would write, you would write, they would write”,
- _գրած, կարդացած, գրող, կարդացող, գրելիս, կարդալիս, գրում, կարդում, գրելու, կարդալու, գրելիք, կարդալիք, գրել, կարդացել, գրի, կարդա_ &nbsp;“written, read, writing, reading, while writing, while reading, write, read, (will) write, (will) read, smth. to be written, smth. to be read, have written, have read, write, read” (participles),
- _գրելիս, կարդալիս_ &nbsp;“while writing, while reading” (converb)

### Border cases

Resultative, subject, future-II destinative participles lie on the border between verbs and adjectives. Core participial forms are tagged [VERB]() and used to form the moods. As participial adjectives they are tagged [ADJ]() (used in nominal predication with copula, and to modify nouns), although they may have verbal features in addition to the adjectival ones. For example:

-	Resultative: _<b>կառուցված</b> շենք_ “a <b>built</b> house”,
-	Subject: _<b>կառուցվող</b> շենք_ “a house, that is <b>being built</b>”,
-	Future-II: _<b>կառուցվելիք</b> շենք_ “a house, that <b>will be built</b>”
