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
See the description of `AUX` for more information on the borderline between `VERB` and `AUX`.

Armenian verbs can take the following morphological forms:

- Infinitive (this is the citation form),
- Gerundive (shares properties of verbs and nouns),
- Finite verb (indicative, imperative, subjunctive and conditional forms; necessitative is constructed periphrastically, connegative forms),
- Resultative, processual, imperfective, future-I, perfect participles (used to construct (secondary) complex tenses and moods),
- Converb (also called adverbial participle).

There are participial forms (_verbal adjectives_) that are tagged as verbs rather than adjectives ([ADJ]()). See below for examples.

### Examples

- _գրել, գրել(ը)_ &nbsp;“to write, (the) writing”,
- _գրեցի, գրեցիր, գրեց, գրեցինք, գրեցիք, գրեցին_ &nbsp;“I wrote, you wrote, he/she/it wrote, we wrote, you wrote, they wrote”,
- _ունեմ, ունես, ունի, ունենք, ունեք, ունեն_ &nbsp;“I have, you have, he/she/it has, we have, you have, they have”,
- _գրի՛, գրե՛ք, կարդա՛, կարդացե՛ք_ &nbsp;“write, read” (imperative in different numbers),
- _գրեմ, գրես, գրի, գրենք, գրեք, գրեն_ &nbsp;“I write.Sub, you write.Sub, he/she/it write.Sub, we write.Sub, you write.Sub, they write.Sub”,
- _գնայի, գնայիր, գնար, գնայինք, գնայիք, գնային_ &nbsp;“I went.Sub, you went.Sub, he/she/it went.Sub, we went.Sub, you went.Sub, they went.Sub”,
- _կգնամ, կգնաս, կգնա, կգնանք, կգնաք, կգնան_ &nbsp;“I will go, you will go, he/she/it will go, we will go, you will go, they will go”,
- _կգրեի, կգրեիր, կգրեր, կգրեինք, կգրեիք, կգրեին_ &nbsp;“I would write, you would write, he/she/it would write, we would write, you would write, they would write”,
- _չեմ <b>գրի</b>, չեմ <b>գնա</b>_ &nbsp;“I shall not write, I shall not go”, 
- _գրած, կարդացած, գրելիս, կարդալիս, գրում, կարդում, գրելու, կարդալու, գրել, կարդացել, գրի, կարդա_ &nbsp;“written, read, while writing, while reading, write, read, (will) write, (will) read, have written, have read, write, read” (participles),
- _գրելիս, կարդալիս_ &nbsp;“while writing, while reading” (converb)
- _գրող, կարդացող, գրելիք, կարդալիք_ &nbsp;“writing, reading, smth. to be written, smth. to be read” (verbal adjectives)

### Border cases

Resultative, subject and future-II participles are word forms that may share properties and usage of adjectives and verbs. Note, that in release 2.2 both core participial forms (used to form the moods) and participial adjectives (used in nominal predication with [copula](cop), and to modify nouns) are tagged [VERB](). For example:

-	Resultative: _<b>կառուցված</b> շենք_ “a <b>built</b> house”,
-	Subject: _<b>կառուցվող</b> շենք_ “a house, that is <b>being built</b>”,
-	Future-II: _<b>կառուցվելիք</b> շենք_ “a house, that <b>will be built</b>”
<!-- Interlanguage links updated Út zář 29 20:31:32 CEST 2020 -->
