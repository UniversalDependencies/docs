---
layout: relation
title: 'ccomp:reported'
shortdef: 'reported speech from active verb of saying'
udver: '2'
---

As per the [changes in v2.10](https://universaldependencies.org/changes.html#reported-speech), reported speech is now coherently treated as a clausal complement of the (possibly elliptical) predicate of saying, and no longer by means of the relation [`parataxis`](la-dep/parataxis). 

We still introduce the subtype `reported` to ease the retrieval of this particular case: in fact, while Latin tipically uses either [non-finite verbal constructions](la-feat/VerbForm) or connectors such as [subordinating conjunctions](la-upos/SCONJ) to introduce an object clause, reported speech can also be conveyed by the simple juxtaposition of an otherwise independent clause with respect to [verb form](la-feat/VerbForm), [mood](la-feat/Mood), [tense](la-feat/Tense), and other.

Reported speech, as any clause, can also appear as a [(passive) subject](la-dep/csubj-reported) of a verb of saying.


~~~ sdparse
Hinc etiam dicebatur de celo peccatori David : Quare tu enarras iustitias meas ? , quasi diceret : Frustra loqueris , cum tu sis alius ab eo quod loqueris
ccomp:reported(diceret, loqueris)
~~~

'Hence a voice from heaven asked the sinner David: "Why do you tell of my righteousness?", as if to <u>say</u>: '**You speak in vain, since your words are belied by what you are**'.' (`UDante Mon-143`, *De Monarchia* I xiii 5, Dante Alighieri)

* the verb of saying of the second reported speech is *dico* 'to say', here with active [voice](la-feat/Voice): 'as if it were saying: ...'




