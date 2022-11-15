---
layout: base
title:  'Statistics of advcl in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `advcl`

This relation is universal.

48 nodes (2%) are attached to their parents as `advcl`.

29 instances of `advcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 6 pairs of parts of speech are connected with `advcl`: <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (42; 88% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 advcl	color:blue
1	Yamburi	mburi	VERB	V	Number=Plur|Person=1|VerbForm=Fin	0	root	_	TokenRange=0:7
2	maniaka	maniaka	NOUN	N	Number=Sing	1	obj	_	TokenRange=8:15
3	paranã	paranã	NOUN	N	Number=Sing	1	obl	_	TokenRange=16:22
4	upé	upé	ADP	ADP	_	3	case	_	TokenRange=23:26
5	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	TokenRange=27:28
6	membeka	membeka	VERB	V2	_	1	advcl	_	TokenRange=29:36
7	arama	arama	SCONJ	CONJ	_	6	mark	_	SpaceAfter=No|TokenRange=37:42
8	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=42:43

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advcl	color:blue
1	Ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	2	advmod	_	TokenRange=0:2
2	mayé	mayé	ADV	ADV	_	0	root	_	TokenRange=3:7
3	ayuká	yuká	VERB	V	Number=Sing|Person=1|VerbForm=Fin	2	advcl	_	TokenRange=8:13
4	arama	arama	SCONJ	SCONJ	_	3	mark	_	TokenRange=14:19
5	kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	6	det	_	TokenRange=20:23
6	buya	buya	NOUN	N	Number=Sing	3	obj	_	SpaceAfter=No|TokenRange=24:28
7	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 advcl	color:blue
1	Kuxiíma	kuxiíma	ADV	ADV	_	5	advmod	_	TokenRange=0:7
2	paá	paá	PART	RPRT	Evident=Nfh|PartType=Mod	5	advmod	_	TokenRange=8:11
3	anhuantẽ	anhuantẽ	ADV	ADV	_	5	advmod	_	TokenRange=12:20
4	paá	paá	PART	RPRT	Evident=Nfh|PartType=Mod	5	advmod	_	TokenRange=21:24
5	aikwé	aikwé	PART	EXST	_	0	root	_	TokenRange=25:30
6	ara	ara	NOUN	N	Number=Sing	5	nsubj	_	SpaceAfter=No|TokenRange=31:34
7	,	,	PUNCT	PUNCT	_	9	punct	_	TokenRange=34:35
8	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	9	advmod	_	TokenRange=36:38
9	yamaã	maã	VERB	V	Number=Plur|Person=1|VerbForm=Fin	5	parataxis	_	TokenRange=39:44
10	pituna	pituna	NOUN	N	Number=Sing	9	obj	_	SpaceAfter=No|TokenRange=45:51
11	,	,	PUNCT	PUNCT	_	18	punct	_	TokenRange=51:52
12	mira-itá	mira	NOUN	N	Number=Plur	18	nsubj	_	TokenRange=53:61
13	ta	ta	PRON	PRON	Number=Plur|Person=3|PronType=Prs	18	expl	_	TokenRange=62:64
14	uputari	putari	AUX	AUXN	Person=3|VerbForm=Fin	18	aux	_	TokenRange=65:72
15	paá	paá	PART	RPRT	Evident=Nfh|PartType=Mod	18	advmod	_	TokenRange=73:76
16	yepé	yepé	PART	FRUST	Aspect=Frus	18	advmod	_	TokenRange=77:81
17	ta	ta	PRON	PRON	Number=Plur|Person=3|PronType=Prs	18	expl	_	TokenRange=82:84
18	ukiri	kiri	VERB	V	Person=3|VerbForm=Fin	9	parataxis	_	SpaceAfter=No|TokenRange=85:90
19	,	,	PUNCT	PUNCT	_	18	punct	_	TokenRange=90:91
20	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	21	advmod	_	TokenRange=92:94
21	mayé	mayé	ADV	ADV	_	18	parataxis	_	TokenRange=95:99
22	ra	ra	SCONJ	SCONJ	_	21	advcl	_	SpaceAfter=No|TokenRange=100:102
23	,	,	PUNCT	PUNCT	_	18	punct	_	TokenRange=102:103
24	[...]	[...]	PUNCT	ELIP	PunctType=Elip	5	punct	_	SpaceAfter=No|TokenRange=104:109
25	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=109:110

~~~


