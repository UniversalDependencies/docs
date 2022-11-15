---
layout: base
title:  'Statistics of obl:tmod in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga_cadhan-dep-obl-prep.html">obl:prep</a></tt>.

29 nodes (1%) are attached to their parents as `obl:tmod`.

22 instances of `obl:tmod` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.68965517241379.

The following 5 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (20; 69% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (5; 17% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl:tmod	color:blue
1	Níor	níor	PART	_	PartType=Vb|Polarity=Neg|Tense=Past	2	advmod	_	_
2	óladar	ól	VERB	_	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past	0	root	_	_
3	aon	aon	DET	_	PronType=Ind	4	det	_	_
4	deoch	deoch	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	obj	_	_
5	le	le	ADP	_	_	7	case	_	_
6	dhá	dó	NUM	_	Form=Len|NumType=Card	7	nummod	_	_
7	lá	lá	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	obl:tmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 27 obl:tmod	color:blue
1	Ach	ach	CCONJ	_	_	3	cc	_	_
2	d'	do	PART	_	PartType=Vb	3	mark:prt	_	SpaceAfter=No
3	fhoghluim	foghlaim	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
4	Buck	Buck	PROPN	_	Foreign=Yes	3	nsubj	_	_
5	go	go	PART	_	PartType=Ad	6	mark:prt	_	_
6	furas	furasta	ADJ	_	Degree=Pos	3	advmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	20	punct	_	_
8	agus	agus	CCONJ	_	_	20	cc	_	_
9	leis	le	ADP	_	_	11	case	_	_
10	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	teagasg	teagasc	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	20	obl	_	_
12	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	13	obj	_	_
13	thug	tabhair	VERB	_	Form=Len|Mood=Ind|Tense=Past	11	acl:relcl	_	_
14	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	16	nmod:poss	_	_
15	dhá	dó	NUM	_	Form=Len|NumType=Card	16	nummod	_	_
16	chomrádaidhe	comrádaí	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	13	nsubj	_	_
17	agus	agus	CCONJ	_	_	18	cc	_	_
18	François	François	PROPN	_	Definite=Def|Gender=Masc	16	conj	_	_
19	dó	do	ADP	_	Gender=Masc|Number=Sing|Person=3	13	obl:prep	_	_
20	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	3	conj	_	_
21	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	20	nsubj	_	_
22	ag	ag	ADP	_	_	23	case	_	_
23	éirghe	éirí	NOUN	_	VerbForm=Vnoun	20	xcomp	_	_
24	eólach	eolach	ADJ	_	Case=Nom|Number=Sing	23	xcomp	_	_
25	gach	gach	DET	_	Definite=Def	27	det	_	_
26	aon	aon	DET	_	PronType=Ind	27	det	_	_
27	bhomaite	nóiméad	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	23	obl:tmod	_	SpaceAfter=No
28	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 16 obl:tmod	color:blue
1	“	“	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Brisfidh	bris	VERB	_	Mood=Ind|Tense=Fut	20	ccomp	_	_
3	Drútar	Drútar	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	isteach	isteach	ADV	_	_	2	advmod	_	_
5	beathach	beithíoch	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	obj	_	_
6	allta	allta	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	5	amod	_	_
7	lá	lá	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	obl:tmod	_	_
8	ar	ar	ADP	_	_	7	nmod	_	_
9	bith	bith	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	fixed	_	_
10	den	de	ADP	_	Number=Sing|PronType=Art	11	case	_	_
11	tseachtmhain	seachtain	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	agus	agus	CCONJ	_	_	14	cc	_	_
14	cúpla	cúpla	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	_
15	ceann	ceann	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	nmod	_	_
16	Dia	Dia	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	obl:tmod	_	_
17	Domhnaigh	Domhnach	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
18	,	,	PUNCT	_	_	2	punct	_	SpaceAfter=No
19	”	”	PUNCT	_	_	2	punct	_	_
20	arsa	arsa	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
21	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	22	det	_	_
22	tiománaidhe	tiománaí	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	20	nsubj	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	_
24	ag	ag	ADP	_	_	25	case	_	_
25	tabhairt	tabhairt	NOUN	_	VerbForm=Vnoun	20	xcomp	_	_
26	léim	léim	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	25	obj	_	_
27	ar	ar	ADP	_	_	29	case	_	_
28	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	29	det	_	_
29	trucaill	trucail	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	25	obl	_	_
30	agus	agus	CCONJ	_	_	32	cc	_	_
31	ag	ag	ADP	_	_	32	case	_	_
32	tabhairt	tabhairt	NOUN	_	VerbForm=Vnoun	25	conj	_	_
33	a	a	DET	_	Number=Plur|Person=3|Poss=Yes	34	nmod:poss	_	_
34	gcinn	ceann	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Plur	32	obj	_	_
35	do	do	ADP	_	_	37	case	_	_
36	na	an	DET	_	Definite=Def|Number=Plur|PronType=Art	37	det	_	_
37	caiple	capall	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	32	obl	_	SpaceAfter=No
38	.	.	PUNCT	_	_	20	punct	_	SpacesAfter=\n\n

~~~


