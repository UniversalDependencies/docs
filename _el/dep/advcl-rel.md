---
layout: relation
title:  'advcl:relcl'
shortdef : 'adverbial relative clause modifier'
udver: '2'
---

This relation applies to a relative clause that modifies a clause (as opposed to typical relative clauses, which are adnominal and use [acl:relcl]()).

For example, the antecedent is a clause in:

~~~ sdparse
Πρέπει να κοιμήθηκα ένα δεκάωρο περίπου , που για μένα είναι το απόλυτο θαύμα. 
1	Πρέπει	πρέπει	VERB	Vb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	να	να	SCONJ	PtSj	_	3	mark	_	_
3	κοιμήθηκα	κοιμάμαι	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	1	csubj	_	_
4	ένα	ένας	DET	AtId	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	5	det	_	_
5	δεκάωρο	δεκάωρο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
6	περίπου	περίπου	ADV	AdBa	_	5	advmod	_	_
7	,	,	PUNCT	PUNCT	_	14	punct	_	PunctType=Comm
8	που	που	PRON	PnRe	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	14	nsubj	_	_
9	για	για	ADP	AsPpSp	_	10	case	_	_
10	μένα	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	14	obl	_	_
11	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	14	cop	_	_
12	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
13	απόλυτο	απόλυτος	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	14	amod	_	_
14	θαύμα	θαύμα	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	3	advcl:relcl	_	SpaceAfter=No
15	.	.	PUNCT	PTERMP	_	1	punct	_	PunctType=Peri
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:19 CET -->
