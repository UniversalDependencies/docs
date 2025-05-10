---
layout: relation
title: 'ccomp:speech'
shortdef: 'direct speech'
udver: '2'
---

The `ccomp:speech` (direct speech clausal complement) is used for complement sentences that are marked with one of the direct speech enclitics.

~~~ conllu
# text = ბავშვს ჰკითხეს, რა გატირებსო?
# text-transcription = bavšvs hḳitxes, ra gaṭirebso?
# translation = They asked the child: what makes you cry?
1	ბავშვს	ბავშვი	NOUN	_	Animacy=Anim|Case=Dat|Number=Sing	2	iobj	_	LMSeg:ბავშვ·ი
2	ჰკითხეს	კითხვა	VERB	_	Number[subj]=Plur|Person[io]=3|Person[obj]=3|Person[subj]=3|Tense=Past	0	root	_	LMSeg:კითხვ[ა]/კითხ|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	LMSeg:,
4	რა	რა	PRON	_	Case=Nom	5	nsubj	_	LMSeg:რ[ა]
5	გატირებსო	დატირება	VERB	_	Number[io]=Sing|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=3|Tense=Pres	2	ccomp:quote	_	LMSeg:და·ტირებ[ა]/ტირ|SpaceAfter=No
6	?	?	PUNCT	_	_	2	punct	_	LMSeg:?
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:10 CEST -->
