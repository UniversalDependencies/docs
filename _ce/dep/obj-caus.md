---
layout: relation
title: 'obj:caus'
shortdef: 'agentive object of a causative predicate'
udver: '2'
---

In Chechen, a predicate's valency can be increased by causative morphology.
When applied to a transitive verb, it introduces an additional argument, commonly the causer of the event, in which case it functions as the syntactic subject, 
while the caused agent functions as the syntactic object and is annotated with the `obj:caus` relation.

~~~ conllu

1	as	as	PRON	_	Case=Erg|Number=Sing|Person=1	6	nsubj
2	sai	sai	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs|Reflex=Yes	3	nmod
3	deegha	diagh	NOUN	_	Case=Obl	6	obl
4	t'era	t'era	ADP	_	AdpType=Post	3	case
5	zhizhg	zhizhig	NOUN	_	Case=Abs	6	obj
6	do'aitara	d.a'a	VERB	_	NounClass=Dclass|Voice=Caus	0	root
7	hwoega	hwo	PRON	_	Case=All|Number=Sing|Person=2	6	obj:caus

as sai deegha t'era zhizhg   d-o'a-jt-ara   hwoega
I  my  body   from  meat.OBL D-eat-CAUS-FUT you
"I would let you eat flesh from my body."
~~~
