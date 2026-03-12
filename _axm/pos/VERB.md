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
- Finite verb (indicative, imperative, subjunctive and conditional forms; necessitative and present (future) are constructed periphrastically, connegative forms),
- Resultative, imperfective, future-I, present and perfect participles (used to construct (secondary) complex tenses and moods),

There are participial forms (_verbal adjectives_) that are tagged as verbs rather than adjectives ([ADJ]()). See below for examples.

### Examples

- _գրել/grel, գրել(ը)/grel(ë)_ &nbsp;“to write, (the) writing”,
- _գրեցի/grec’i, գրեցեր (-իր)/grec’er (-ir), գրեաց (-եց)/greac’ (-ec’), գրեցաք/grec’ak’, գրեցէք (-իք)/grec’ēk’ (-ik’), գրեցին/grec’in_ &nbsp;“I wrote, you wrote, he/she/it wrote, we wrote, you wrote, they wrote”,
- _ունիմ/ownim, ունիս/ownis, ունի/owni, ունին/ownin_ &nbsp;“I have, you have, he/she/it has, they have”,
- _գրեա՛ (գրէ՛)/grea՛ (grē՛), գրէ՛ք/grē՛k’, կարդա՛/karda՛, կարդացէ՛ք/kardac’ē՛k’; ա՛ռ/a՛ṙ; լի՛ց/li՛c’; կա՛լ/ka՛l_ &nbsp;“write!, read!” (imperative in different numbers), “take!”, “fill!”, “close!”
- _գրեմ/grem, գրես/gres, գրէ (-ի)/grē (-i), գրենք/grenk’, գրէք/grēk’, գրեն/gren_ &nbsp;“I write.Sub, you write.Sub, he/she/it write.Sub, we write.Sub, you write.Sub, they write.Sub”,
- _գնայի/gnayi, գնայիր/gnayir, գնայր/gnayr, գնայաք/gnayak’, գնայիք/gnayik’, գնային/gnayin_ &nbsp;“I went.Sub, you went.Sub, he/she/it went.Sub, we went.Sub, you went.Sub, they went.Sub”,
- _կու գնամ/kow gnam, կու գնաս/kow gnas, կու գնայ/kow gnay, կու գնանք/kow gnank’, կու գնաք/kow gnak’, կու գնան/kow gnan_ &nbsp;“I (will) go, you (will) go, he/she/it (will) go, we (will) go, you (will) go, they (will) go”,
- _կու գրէի/kow grēi, կու գրէիր/kow grēir, կու գրէր/kow grēr, կու գրէինք/kow grēink’, կու գրէիք/kow grēik’, կու գրէին/kow grēin_ &nbsp;“I would write, you would write, he/she/it would write, we would write, you would write, they would write”
- _չգրի/čgri, չգնայ/čgnay_ &nbsp;“He/she/it doesn't write, he/she/it doesn't go”, 
- _գրած/graç, խառնուած/xaṙnowaç, գրելոց (գրելոյ)/greloc’ (greloy), կարդալոց (կարդալոյ)/kardaloc’ (kardaloy), գրել (գրեալ)/grel (greal), կարդացել (կարդացեալ)/kardac’el (kardac’eal), գրել (գրեր)/grel (grer), կարդացել (կարդացեր)/kardac’el (kardac’er), գրի/gri, կարդա/karda_ &nbsp;“written, mixed, (will) write, (will) read, wrote, read, have written, have read, write!, read!” (participles),
- _գրող/groġ, կարդացող/kardac’oġ_ &nbsp;“writing, reading, smth. to be written, smth. to be read” (verbal adjectives)

### Border cases

Resultative, subject and perfect participles are word forms that may share properties and usage of adjectives and verbs. Note, that in release 2.2 both core participial forms (used to form the moods) and participial adjectives (used in nominal predication with [copula](cop), and to modify nouns) are tagged [VERB](). For example:

-	Resultative: _<b>կոտրած</b> ատամ/kotraç atam_ “a <b>broken</b> tooth”,
-	Subject: _<b>այրեցող </b> ջերմ/ayrec’oġ ǰerm_ “<b>burning</b> fever”,
-	Perfect: _<b>ծաղկեալ</b> ծառ/çaġkeal çaṙ_ “tree <b>in blossom</b>”
<!-- Interlanguage links updated St 12. listopadu 2025, 09:19:57 CET -->
