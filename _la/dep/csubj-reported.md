---
layout: relation
title: 'csubj:reported'
shortdef: 'reported speech from passive verb of saying'
udver: '2'
---

As per the [changes in v2.10](https://universaldependencies.org/changes.html#reported-speech), reported speech is now coherently treated as a clausal complement of the (possibly elliptical) predicate of saying, and no longer by means of the relation [`parataxis`](la-dep/parataxis): specifically, together with [`ccomp:reported`](la-dep/ccomp-reported) it replaces the previous relation [`parataxis:rep`](la-dep/parataxis-rep) and helps better describe this construction.

We still introduce the subtype `reported` to ease the retrieval of this particular case: in fact, while Latin tipically uses either [non-finite verbal constructions](la-feat/VerbForm) or connectors such as [subordinating conjunctions](la-upos/SCONJ) to introduce an object clause, reported speech can also be conveyed by the simple juxtaposition of an otherwise independent clause with respect to [verb form](la-feat/VerbForm), [mood](la-feat/Mood), [tense](la-feat/Tense), and other.

Reported speech, as any clause, can also appear as an [object](la-dep/ccomp-reported) of a verb of saying. When it is a subject, it is always intended as a [passive](la-dep/csubj-pass) one: there is no other logical possibility.


~~~ sdparse
Hinc etiam dicebatur de celo peccatori David : Quare tu enarras iustitias meas ? , quasi diceret : Frustra loqueris , cum tu sis alius ab eo quod loqueris
csubj:reported(dicebatur, enarras)
~~~

'Hence a voice from heaven <u>asked</u> the sinner David: "**Why do you tell of my righteousness?**", as if to say: 'You speak in vain, since your words are belied by what you are'.' (`UDante Mon-143`, *De Monarchia* I xiii 5, Dante Alighieri)

* Here, the first verb of saying, *dico* 'to say', is in the passive [voice](la-feat/Voice), so literally: 'from the heavens it was being said to the sinner David: ...'


~~~ sdparse
Sed nunc queritur : Cum illa regio celi circulariter feratur , quare illa elevatio non fuit circularis ?
csubj:reported(queritur, circularis)
advcl(circularis, feratur)
~~~

'But now the question arises: Since that region of heaven is borne round us in a circle, why was not the corresponding elevation circular?' (`UDante Que-108`, *aqua et terra* 74, Dante Alighieri)

* The verb of saying is *quaero* 'to ask', so literally: 'but now it is asked: ...'
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:03 CEST -->
