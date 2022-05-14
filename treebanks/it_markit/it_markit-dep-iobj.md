---
layout: base
title:  'Statistics of iobj in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `iobj`

This relation is universal.

177 nodes (0%) are attached to their parents as `iobj`.

141 instances of `iobj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28813559322034.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (165; 93% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (8; 5% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_markit-pos-AUX.html">AUX</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_markit-pos-DET.html">DET</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Ve	ve	PRON	PC	Clitic=Yes|Gender=Fem|Number=Plur|Person=2|PronType=Prs	3	expl	_	_
2	n'	ne	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	3	iobj	_	_
3	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	infatti	infatti	ADV	B	_	3	advmod	_	_
5	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	parte	parte	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
7	che	che	PRON	PR	_	8	nsubj	_	_
8	diffonde	diffondere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
9	cultura	cultura	NOUN	S	Gender=Fem|Number=Sing	8	obj	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	informazione	informazione	NOUN	S	Gender=Fem|Number=Sing	9	conj	_	_
12	.	[PUNCT]	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 iobj	color:blue
1	Tra	tra	ADP	E	_	4	case	_	_
2	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
3	nostre	nostro	DET	AP	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	galassie	galassia	NOUN	S	Gender=Fem|Number=Plur	19	obl	_	_
5	e	e	CCONJ	CC	_	6	cc	_	_
6	quella	quella	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	conj	_	_
7	più	più	ADV	B	_	8	advmod	_	_
8	vicina	vicino	ADJ	A	Gender=Fem|Number=Sing	6	amod	_	_
9	,	,	PUNCT	FF	_	4	punct	_	_
10	invece	invece	ADV	B	_	19	advmod	_	_
11	,	,	PUNCT	FF	_	19	punct	_	_
12	di	di	ADP	E	_	13	case	_	_
13	anni	anno	NOUN	S	Gender=Masc|Number=Plur	19	dislocated	_	_
14	luce	luce	NOUN	S	Gender=Fem|Number=Sing	13	compound	_	_
15	ce	ce	PRON	PC	Clitic=Yes|Gender=Fem|Number=Plur|Person=1|PronType=Prs	19	expl	_	_
16	ne	ne	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	19	iobj	_	_
17	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
18	addirittura	addirittura	ADV	B	_	19	advmod	_	_
19	milioni	milione	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
20	;	;	PUNCT	FC	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 28 iobj	color:blue
1	Sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	proprio	proprio	ADV	B	_	4	advmod	_	_
3	queste	questo	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	4	det	_	_
4	persone	persona	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
5	che	che	PRON	PR	_	14	nsubj	_	_
6	pur	pure	ADV	B	_	8	advmod	_	_
7	di	di	ADP	E	_	8	mark	_	_
8	raggiungere	raggiungere	VERB	V	VerbForm=Inf	14	advcl	_	_
9	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
10	propri	proprio	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	11	det:poss	_	_
11	scopi	scopo	NOUN	S	Gender=Masc|Number=Plur	8	obj	_	_
12	personali	personale	ADJ	A	Gender=Masc|Number=Plur	11	amod	_	_
13	si	si	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
14	fingono	fingere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
15	amici	amico	NOUN	S	Gender=Masc|Number=Plur	14	xcomp	_	_
16	,	[PUNCT]	PUNCT	FF	_	14	punct	_	_
17	usando	usare	VERB	V	VerbForm=Ger	14	advcl	_	_
18	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	19	det	_	_
19	persone	persona	NOUN	S	Gender=Fem|Number=Plur	17	obj	_	_
20	a	a	ADP	E	_	22	case	_	_
21	loro	loro	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	22	det:poss	_	_
22	piacimento	piacimento	NOUN	S	Gender=Masc|Number=Sing	17	obl	_	_
23	facendo	fare	VERB	V	VerbForm=Ger	17	conj	_	_
24	gli	gli	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	23	obj	_	_
25	credere	credere	VERB	V	VerbForm=Inf	23	xcomp	_	_
26	di	di	ADP	E	_	29	mark	_	_
27	esser	essere	AUX	V	VerbForm=Inf	29	cop	_	_
28	gli	gli	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	29	iobj	_	_
29	vicini	vicino	ADJ	A	Gender=Masc|Number=Plur	25	xcomp	_	_
30	.	[PUNCT]	PUNCT	FS	_	4	punct	_	_

~~~


