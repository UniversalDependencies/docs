---
layout: relation
title: 'xcomp:obj'
shortdef: 'direct object free complement'
udver: '2'
---

The `ccomp:obj` relation marks an a free clausal complement cross-referenced by a direct object marker.

~~~ conllu
# text = – Саргьы убри сҳәар сҭахын!
# text-transcription = – Sarg’ə ubri sḥʷar staxən!
# translation = I also wanted to say this!
1	–	–	PUNCT	_	_	2	punct	_	LMSeg:–
2	Саргьы	сара́	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	LMSeg:сара́
3	убри	убри́	PRON	_	Number=Sing|PronType=Dem	4	obj	_	LMSeg:убри́
4	сҳәар	а-ҳәара́	VERB	_	Dyn=Yes|Mood=Conj1|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Trans=Yes|VerbForm=NonFin	5	xcomp:obj	_	LMSeg:а-ҳәа-ра́
5	сҭахын	а-ҭахра́	VERB	_	Dyn=No|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Imp|Trans=Yes|VerbForm=Fin	0	root	_	LMSeg:а-ҭах-ра́
6	!	!	PUNCT	_	_	5	punct	_	LMSeg:!

~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:50 CEST -->
