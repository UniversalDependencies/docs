---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---

### Definition

A verb is a member of the syntactic class of words that typically signal events and actions, can constitute a minimal predicate in a
clause, and govern the number and types of other constituents which may occur in the clause.

Note that the `VERB` tag covers main verbs _(content verbs)_, but it does not cover _auxiliary verbs_ and _copulas,_ for which there is
the [AUX]() tag.
See the description of `AUX` for more information on the borderline between `VERB` and `AUX`.

Middle Armenian verbs can take the following morphological forms:

- Infinitive (this is the citation form that shares properties of verbs and nouns),
- Finite verb (indicative, imperative, subjunctive and conditional forms; necessitative is constructed periphrastically, connegative forms),
- Resultative, processual, imperfective, future-I, present and perfect participles (used to construct (secondary) complex tenses and moods),

There are participial forms (_verbal adjectives_) that are tagged as verbs rather than adjectives ([ADJ]()). See below for examples.

### Examples

- _գրել, գրել(ը)_ &nbsp;“to write, (the) writing”,
- _գրեցի, գրեցեր (-իր), գրեաց (-եց), գրեցաք, գրեցէք (-իք), գրեցին_ &nbsp;“I wrote, you wrote, he/she/it wrote, we wrote, you wrote, they wrote”,
- _ունիմ, ունիս, ունի, ունին_ &nbsp;“I have, you have, he/she/it has, we have, you have, they have”,
- _գրեա՛/գրէ՛, գրէ՛ք, կարդա՛, կարդացէ՛ք; ա՛ռ; լի՛ց; կա՛լ_ &nbsp;“write, read” (imperative in different numbers),
- _գրեմ, գրես, գրէ (-ի), գրենք, գրէք, գրեն_ &nbsp;“I write.Sub, you write.Sub, he/she/it write.Sub, we write.Sub, you write.Sub, they write.Sub”,
- _գնայի, գնայիր, գնայր, գնայաք, գնայիք, գնային_ &nbsp;“I went.Sub, you went.Sub, he/she/it went.Sub, we went.Sub, you went.Sub, they went.Sub”,
- _կու գնամ, կու գնաս, կու գնա, կու գնանք, կու գնաք, կու գնան_ &nbsp;“I will go, you will go, he/she/it will go, we will go, you will go, they will go”,
- _կու գրէի, կու գրէիր, կու գրէր, կու գրէինք, կու գրէիք, կու գրէին_ &nbsp;“I would write, you would write, he/she/it would write, we would write, you would write, they would write”,
- _չգրի, չգնայ_ &nbsp;“I shall not write, I shall not go”, 
- _գրած, կարդացած, գրելիս, կարդալիս, գրում, կարդում, գրելու, կարդալու, գրել, կարդացել, գրի, կարդա_ &nbsp;“written, read, while writing, while reading, write, read, (will) write, (will) read, have written, have read, write, read” (participles),
- _գրելիս, կարդալիս_ &nbsp;“while writing, while reading” (converb)
- _գրող, կարդացող, գրելիք, կարդալիք_ &nbsp;“writing, reading, smth. to be written, smth. to be read” (verbal adjectives)

### Border cases

Resultative, subject and future-II participles are word forms that may share properties and usage of adjectives and verbs. Note, that in release 2.2 both core participial forms (used to form the moods) and participial adjectives (used in nominal predication with [copula](cop), and to modify nouns) are tagged [VERB](). For example:

-	Resultative: _<b>կառուցված</b> շենք_ “a <b>built</b> house”,
-	Subject: _<b>կառուցվող</b> շենք_ “a house, that is <b>being built</b>”,
-	Future-II: _<b>կառուցվելիք</b> շենք_ “a house, that <b>will be built</b>”
<!-- Interlanguage links updated St 12. listopadu 2025, 09:19:57 CET -->
