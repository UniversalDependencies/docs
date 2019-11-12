---
layout: base
title:  'Statistics of nummod in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `nummod`

This relation is universal.

221 nodes (1%) are attached to their parents as `nummod`.

187 instances of `nummod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3393665158371.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (185; 84% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (13; 6% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (9; 4% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (6; 3% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	a	a	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	via	via	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	fase	fase	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
6	due	due	NUM	N	NumType=Card	5	nummod	_	_
7	di	di	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	governo	governo	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
10	#Monti	#Monti	SYM	SYM	_	9	nmod	_	SpaceAfter=No
11	:	:	PUNCT	FC	_	3	punct	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	risata	risata	NOUN	S	Gender=Fem|Number=Sing	3	parataxis	_	_
14	satanica	satanico	ADJ	A	Gender=Fem|Number=Sing	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	Presentato	presentare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	nuovo	nuovo	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	_
4	iPhone	iPhone	PROPN	SP	_	1	nsubj:pass	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	1	punct	_	_
6	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
7	già	già	ADV	B	_	11	advmod	_	_
8	a	a	ADP	E	_	11	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
10	36	36	NUM	N	NumType=Card	11	nummod	_	SpaceAfter=No
11	%	%	SYM	SYM	_	1	parataxis	_	_
12	di	di	ADP	E	_	13	case	_	_
13	batteria	batteria	NOUN	S	Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	11	punct	_	_
15	[	[	PUNCT	FB	_	16	punct	_	SpaceAfter=No
16	skydark	skydark	X	X	_	1	parataxis	_	SpaceAfter=No
17	]	]	PUNCT	FB	_	16	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nummod	color:blue
1	45	45	NUM	N	NumType=Card	4	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FS	_	1	punct	_	_
3	cosa	cosa	PRON	PQ	PronType=Int	4	obj	_	_
4	pensi	pensare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	di	di	ADP	E	_	7	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	governo	governo	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	_
8	Monti	Monti	PROPN	SP	_	7	nmod	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	4	punct	_	_
10	Possiamo	potere	AUX	VM	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	12	aux	_	_
11	non	non	ADV	BN	PronType=Neg	12	advmod	_	_
12	parlar	parlare	VERB	V	VerbForm=Inf	4	parataxis	_	_
13	ne	ne	PRON	PC	Clitic=Yes|PronType=Prs	12	iobj	_	_
14	!?	!?	PUNCT	FS	_	12	punct	_	_

~~~


