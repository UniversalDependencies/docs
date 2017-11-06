---
layout: base
title:  'Statistics of aux:pass in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="it_partut-dep-aux.html">aux</a></tt>.

521 nodes (1%) are attached to their parents as `aux:pass`.

521 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23800383877159.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-AUX.html">AUX</a></tt> (515; 99% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj:pass	_	_
2	fu	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	scoperto	scoprire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	per	per	ADP	E	_	7	case	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	prima	primo	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	7	amod	_	_
7	volta	volta	NOUN	S	Gender=Fem|Number=Sing	3	obl	_	_
8	in	in	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	1859	1859	NUM	N	NumType=Card	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 aux:pass	color:blue
1	Per	per	ADP	E	_	3	case	_	_
2	alcuni	alcuno	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	3	det	_	_
3	comuni	comune	NOUN	S	Gender=Masc|Number=Plur	13	obl	_	_
4	di	di	ADP	E	_	7	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	_
7	paese	paese	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	situazione	situazione	NOUN	S	Gender=Fem|Number=Sing	13	nsubj:pass	_	_
10	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:pass	_	_
11	stata	essere	AUX	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	13	cop	_	_
12	veramente	veramente	ADV	B	_	13	advmod	_	_
13	infernale	infernale	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux:pass	color:blue
1	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
2	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	cop	_	_
3	a	a	ADP	E	_	4	case	_	_
4	causa	causa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	di	di	ADP	E	_	8	case	_	_
6	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
7	sciagurate	sciagurato	ADJ	A	Gender=Fem|Number=Plur	8	amod	_	_
8	politiche	politica	NOUN	S	Gender=Fem|Number=Plur	4	nmod	_	_
9	di	di	ADP	E	_	12	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det:poss	_	_
12	partito	partito	NOUN	S	Gender=Masc|Number=Sing	8	nmod	_	_
13	conservatore	conservatore	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
14	.	.	PUNCT	FS	_	4	punct	_	_

~~~


