---
layout: relation
title:  'xcomp:pred'
shortdef : 'predicate'
udver: '2'
---

We follow Irish and subtype the label `xcomp` as a UD Irish as `xcomp:pred` to mark predicates of the substantive verb _bi_ (to be), which can have predicate arguments in the form of adverbial (replacing `advmod`, adjectival (replacing `amod`) and prepositional phrases (replacing `obl`) and for cases where a secondary predicate occurs.

This is by far the most common relation between the verb _bi_ and the verbal noun in periphrastic constructions.

### Examples

_Tha m' amhaich goirt 's tha mi a' call mo ghuth_ "My throat is sore and I am losing my voice" (c02\_002b)

~~~ sdparse
Tha m' amhaich goirt 's tha mi a' call mo ghuth \n is my throat sore and am I ASP losing my voice
xcomp:pred(Tha, goirt)
xcomp:pred(tha, call)
~~~

In the next example, 'they would be then once enclosing the shore' (n09\_002), the time adverbs remain as `advmod` and `xcomp:pred` marks the verbal noun.

~~~ conllu
1	bhiodh	bi	VERB	V-h	Mood=Cnd	0	root	_	_
2	iad	iad	PRON	Pp3p	Number=Plur|Person=3	1	nsubj	_	_
3	an	an	ADV	Rt	_	1	advmod	_	_
4	uair	uair	ADV	Rt	_	3	fixed	_	_
5	sin	sin	ADV	Rt	_	3	fixed	_	_
6	uaireigin	uaireigin	ADV	Rt	_	1	advmod	_	_
7	a'	ag	PART	Sa	_	8	case	_	_
8	cuartachadh	cuartaich	NOUN	Nv	VerbForm=Vnoun	1	xcomp:pred	_	_
9	cladaich	cladach	NOUN	Ncsmg	Case=Gen|Gender=Masc|Number=Sing	8	obj	_	_
~~~

<!-- Interlanguage links updated Po lis 14 15:35:46 CET 2022 -->
