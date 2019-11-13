---
layout: base
title:  'Statistics of aux in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_twittiro-dep-aux-pass.html">aux:pass</a></tt>.

533 nodes (2%) are attached to their parents as `aux`.

531 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22889305816135.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (506; 95% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (11; 2% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Pure	pure	ADV	B	_	5	advmod	_	_
2	Passera	Passera	PROPN	SP	_	5	nsubj	_	_
3	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	5	expl	_	_
4	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	definire	definire	VERB	V	VerbForm=Inf	0	root	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	membro	membro	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	_
8	di	di	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	governo	governo	NOUN	S	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	5	punct	_	_
12	#monti	#monti	SYM	SYM	_	5	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 aux	color:blue
1	@user	@user	SYM	SYM	_	4	vocative:mention	_	_
2	#labuonascuola	#labuonascuola	SYM	SYM	_	4	nsubj	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	quella	quello	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	0	root	_	_
5	di	di	ADP	E	_	6	case	_	_
6	#Renzi	#Renzi	SYM	SYM	_	4	nmod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	_	_
8	Come	come	ADV	B	_	9	advmod	_	_
9	dire	dire	VERB	V	VerbForm=Inf	4	parataxis	_	_
10	che	che	SCONJ	CS	_	17	mark	_	_
11	fino	fino	ADV	B	_	13	case	_	_
12	ad	ad	ADP	E	_	11	fixed	_	_
13	ora	ora	ADV	B	_	17	advmod	_	_
14	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux	_	_
15	stata	essere	AUX	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	17	cop	_	_
16	cattiva	cattivo	ADJ	A	Gender=Fem|Number=Sing	17	amod	_	_
17	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	9	ccomp	_	SpaceAfter=No
18	?!	?!	PUNCT	FS	_	9	punct	_	_
19	Boh	boh	INTJ	I	_	4	discourse	_	SpaceAfter=No
20	...	...	PUNCT	FS	_	19	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 aux	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Pd	Pd	PROPN	SP	_	3	nsubj	_	_
3	diviso	diviso	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
4	in	in	ADP	E	_	5	case	_	_
5	due	due	NUM	N	NumType=Card	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	3	punct	_	_
7	Non	non	ADV	BN	PronType=Neg	12	advmod	_	_
8	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	mai	mai	ADV	B	_	12	advmod	_	_
10	stato	essere	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	aux	_	_
11	così	così	ADV	B	_	12	advmod	_	_
12	unito	unito	ADJ	A	Gender=Masc|Number=Sing	3	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_
14	[	[	PUNCT	FB	_	15	punct	_	SpaceAfter=No
15	@user	@user	SYM	SYM	_	12	vocative:mention	_	SpaceAfter=No
16	]	]	PUNCT	FB	_	15	punct	_	SpaceAfter=\n

~~~


