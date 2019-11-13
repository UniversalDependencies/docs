---
layout: base
title:  'Statistics of csubj:pass in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-csubj.html">csubj</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 csubj:pass	color:blue
1	Kita	kita	ADV	sampl.prv.nelygin.	Degree=Pos|Hyph=Yes	11	parataxis	11:parataxis|19:parataxis	_
2	vertus	vertus	X	tęs.	Hyph=Yes	1	nmod	1:nmod	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	1	punct	1:punct	_
4	griežtai	griežtai	ADV	prv.nelygin.	Degree=Pos	5	advmod	5:advmod	_
5	laikantis	laikytis	VERB	vksm.sngr.pad.es.	Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Ger	11	advcl	11:advcl|19:advcl	_
6	statistinio	statistinis	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	reprezentatyvumo	reprezentatyvumas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	5	obj	5:obj	SpaceAfter=No
8	,	,	PUNCT	skyr.	_	5	punct	5:punct	_
9	viename	vienas	PRON	įv.vyr.vns.Vt.	Case=Loc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	10	nmod	10:nmod	_
10	tyrime	tyrimas	NOUN	dkt.vyr.vns.Vt.	Case=Loc|Gender=Masc|Number=Sing	11	obl	11:obl	_
11	imti	imti	VERB	vksm.dlv.neveik.būt.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
12	emigracijoje	emigracija	NOUN	dkt.mot.vns.Vt.	Case=Loc|Gender=Fem|Number=Sing	13	obl	13:obl	_
13	buvusieji	būti	VERB	vksm.dlv.veik.būt-k.įvardž.vyr.dgs.V.	Aspect=Perf|Case=Nom|Definite=Def|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	csubj:pass	11:csubj:pass	_
14	metus	metai	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	13	obl	13:obl	_
15	ir	ir	CCONJ	jng.	_	16	cc	16:cc	_
16	daugiau	daug	ADV	prv.aukšt.	Degree=Cmp	14	conj	13:obl|14:conj	SpaceAfter=No
17	,	,	PUNCT	skyr.	_	19	punct	19:punct	_
18	visuose	visas	DET	įv.vyr.dgs.Vt.	Case=Loc|Definite=Ind|Gender=Masc|Number=Plur|PronType=Tot	19	det	19:det	_
19	kituose	kitas	PRON	įv.vyr.dgs.Vt.	Case=Loc|Definite=Ind|Gender=Masc|Number=Plur|PronType=Ind	11	conj	0:root|11:conj	_
20	–	–	PUNCT	skyr.	_	21	punct	21:punct	_
21	pusę	pusė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	19	appos	19:appos	_
22	metų	metai	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	21	nmod	21:nmod	SpaceAfter=No
23	.	.	PUNCT	skyr.	_	11	punct	11:punct	_

~~~


