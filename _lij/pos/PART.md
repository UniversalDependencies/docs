---
layout: postag
title: 'PART'
shortdef: 'particle'
udver: '2'
---

### Definition

The euphonic particle _l’_, which occurs before vowel-initial finite verb forms, is annotated as a separate `PART` token with lemma `l'` and no morphological features. It attaches to the head of its clause with [dep]().

### Example

In _l’arriva_, _l’_ and _arriva_ are separate syntactic words.

~~~ conllu
1	a	o	DET	_	_	2	det	_	Gloss=the
2	figgiña	figgiña	NOUN	_	_	5	nsubj	_	Gloss=little-girl
3	a	o	PRON	_	_	5	expl	_	Gloss=she
4	l’	l'	PART	_	_	5	dep	_	SpaceAfter=No
5	arriva	arrivâ	VERB	_	_	0	root	_	Gloss=arrives

~~~
