---
layout: base
title:  'Statistics of dep in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `dep`

This relation is universal.

2 nodes (0%) are attached to their parents as `dep`.

1 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-CCONJ.html">CCONJ</a></tt> (1; 50% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-SCONJ.html">SCONJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 4 dep	color:blue
1	Dunque	dunque	ADV	B	_	14	advmod	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	14	punct	_	_
3	che	che	CCONJ	CC	_	4	advmod	_	_
4	altro	altro	CCONJ	CC	Gender=Masc|Number=Sing	14	dep	_	_
5	riforma	riforma	NOUN	S	Gender=Fem|Number=Sing	14	nsubj	_	_
6	di	di	ADP	E	_	8	case	_	_
7	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	stato	stato	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
9	e	e	CCONJ	CC	_	10	cc	_	_
10	governi	governo	NOUN	S	Gender=Masc|Number=Plur	5	conj	_	_
11	di	di	ADP	E	_	12	case	_	_
12	garanzia	garanzia	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	14	punct	_	_
14	verrebbe	venire	VERB	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	da	da	ADP	E	_	16	mark	_	_
16	dire	dire	VERB	V	VerbForm=Inf	14	ccomp	_	SpaceAfter=No
17	:	:	PUNCT	FC	_	14	punct	_	_
18	a	a	ADP	E	_	20	case	_	_
19	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	centro	centro	NOUN	S	Gender=Masc|Number=Sing	29	obl	_	_
21	di	di	ADP	E	_	23	case	_	_
22	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	confronto	confronto	NOUN	S	Gender=Masc|Number=Sing	20	nmod	_	_
24	tra	tra	ADP	E	_	25	case	_	_
25	centrodestra	centrodestra	NOUN	S	Gender=Fem|Number=Sing	23	nmod	_	_
26	e	e	CCONJ	CC	_	27	cc	_	_
27	centrosinistra	centrosinistra	NOUN	S	Gender=Masc	25	conj	_	_
28	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	29	expl	_	SpaceAfter=No
29	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	parataxis	_	_
30	nient'	niente	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	31	nmod	_	SpaceAfter=No
31	altro	altro	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	29	nsubj	_	_
32	che	che	CCONJ	CC	_	34	cc	_	_
33	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
34	data	data	NOUN	S	Gender=Fem|Number=Sing	31	conj	_	_
35	in	in	ADP	E	_	36	case	_	_
36	cui	cui	PRON	PR	PronType=Rel	37	obl	_	_
37	far	fare	VERB	V	VerbForm=Inf	34	acl:relcl	_	_
38	tornare	tornare	VERB	V	VerbForm=Inf	37	ccomp	_	_
39	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	40	det	_	_
40	italiani	italiano	NOUN	S	Gender=Masc|Number=Plur	38	obj	_	_
41	a	a	ADP	E	_	43	case	_	_
42	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	43	det	_	_
43	urne	urna	NOUN	S	Gender=Fem|Number=Plur	38	obl	_	_
44	da	da	ADP	E	_	45	mark	_	_
45	riempire	riempire	VERB	V	VerbForm=Inf	38	advcl	_	SpaceAfter=No
46	.	.	PUNCT	FS	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 dep	color:blue
1	Ma	ma	CCONJ	CC	_	17	cc	_	_
2	da	da	ADP	E	_	4	case	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	momento	momento	NOUN	S	Gender=Masc|Number=Sing	17	obl	_	_
5	che	che	SCONJ	CS	_	9	mark	_	_
6	anche	anche	ADV	B	_	7	advmod	_	_
7	lei	lei	PRON	PE	Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	9	expl	_	_
9	iscrive	iscrivere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl	_	_
10	in	in	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	registro	registro	NOUN	S	Gender=Masc|Number=Sing	9	obl	_	_
13	di	di	ADP	E	_	15	case	_	_
14	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	buoni	buono	NOUN	S	Gender=Masc|Number=Plur	12	nmod	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	17	punct	_	_
17	diciamo	dire	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
18	che	che	SCONJ	CS	_	17	dep	_	_
19	...	...	PUNCT	FC	_	18	punct	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	17	punct	_	_

~~~


