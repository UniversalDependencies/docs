---
layout: base
title:  'Statistics of orphan in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

2 instances of `orphan` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 orphan	color:blue
1	Wiadomości	wiadomość	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
2	o	o	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc
3	odwrocie	odwrót	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	obl:arg	1:obl:arg	_
4	ogromnie	ogromnie	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	_
5	wstrząsnęły	wstrząsnąć	VERB	praet:pl:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	duńską	duński	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	opinią	opinia	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	5	iobj	5:iobj	_
8	publiczną	publiczny	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
10	która	który	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	11	nsubj	11:nsubj	_
11	uznawała	uznawać	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	_
12	Danevirke	Danevirke	PROPN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	11	obj	11:obj	_
13	za	za	ADP	prep:acc	AdpType=Prep	16	orphan	16:orphan	Case=Acc
14	nie	nie	PART	part	Polarity=Neg	16	advmod:neg	16:advmod:neg	_
15	do	do	ADP	prep:gen	AdpType=Prep	16	case	16:case	Case=Gen
16	zdobycia	zdobyć	NOUN	ger:sg:gen:n:perf:aff	Aspect=Perf|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	11	obl:arg	11:obl:arg	SpaceAfter=No
17	,	,	PUNCT	interp	PunctType=Comm	23	punct	23:punct	_
18	i	i	CCONJ	conj	_	23	cc	23:cc	_
19	Generał	generał	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	23	nsubj:pass	23:nsubj:pass	_
20	Meza	Meza	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	19	appos	19:appos	_
21	został	zostać	AUX	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	23	aux:pass	23:aux:pass	_
22	szybko	szybko	ADV	adv:pos	Degree=Pos	23	advmod	23:advmod	_
23	pozbawiony	pozbawić	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	5	conj	0:root|5:conj	_
24	dowództwa	dowództwo	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	23	iobj	23:iobj	SpaceAfter=No
25	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 orphan	color:blue
1	I	i	CCONJ	conj	_	7	cc	7:cc	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
3	jak	jak	SCONJ	comp	_	4	mark	4:mark	_
4	przyznała	przyznać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	7:advcl	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
6	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	7	punct	7:punct	SpaceAfter=No
7	trzeba	trzeba	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	0	root	0:root	_
8	zwrócić	zwrócić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	uwagę	uwaga	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	8	obj	8:obj	_
10	na	na	ADP	prep:acc	AdpType=Prep	11	case	11:case	Case=Acc
11	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	obl:arg	8:obl:arg	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
13	że	że	SCONJ	comp	_	14	mark	14:mark	_
14	uznała	uznać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	orphan	11:orphan	SpaceAfter=No
15	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
16	że	że	SCONJ	comp	_	17	mark	17:mark|21:mark	_
17	musimy	musieć	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	ccomp	14:ccomp	_
18	zrobić	zrobić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	17	xcomp	17:xcomp	_
19	więcej	więcej	DET	num:sg:acc:n:rec	Case=Acc|Gender=Neut|Number=Sing|NumType=Card|PronType=Ind	18	obj	18:obj	_
20	–	–	PUNCT	interp	PunctType=Dash	21	punct	21:punct	_
21	możemy	móc	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	14:ccomp|17:conj	_
22	działać	działać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	21	xcomp	21:xcomp	_
23	lepiej	dobrze	ADV	adv:com	Degree=Cmp	22	advmod	22:advmod	_
24	–	–	PUNCT	interp	PunctType=Dash	21	punct	21:punct	_
25	i	i	CCONJ	conj	_	27	cc	27:cc	_
26	że	że	SCONJ	comp	_	27	mark	27:mark	_
27	wyraziła	wyrazić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	14	conj	11:orphan|14:conj	_
28	żal	żal	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	27	obj	27:obj	SpaceAfter=No
29	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	7	punct	7:punct	SpaceAfter=No
30	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 orphan	color:blue
1	Durán	Durán	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	pełni	pełnić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	rolę	rola	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	_
4	rzecznika	rzecznik	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	a	a	CCONJ	conj	_	7	cc	7:cc	_
7	Ángel	Ángel	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	conj	0:root|2:conj	_
8	Pintado	Pintado	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	7	flat	7:flat	_
9	–	–	PUNCT	interp	PunctType=Dash	7	punct	7:punct	_
10	skarbnika	skarbnik	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	7	orphan	7:orphan	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


