---
layout: base
title:  'Statistics of fixed in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `fixed`

This relation is universal.

86 nodes (0%) are attached to their parents as `fixed`.

86 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03488372093023.

The following 12 pairs of parts of speech are connected with `fixed`: <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (46; 53% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (14; 16% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (10; 12% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (8; 9% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	Charlie	Charlie	PROPN	SP	_	4	nsubj	_	_
2	Hebdo	Hebdo	PROPN	SP	_	1	flat:name	_	_
3	in	in	ADP	E	_	4	case	_	_
4	edicola	edicola	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	insieme	insieme	ADV	B	_	8	case	_	_
6	a	a	ADP	E	_	5	fixed	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Fatto	Fatto	PROPN	SP	_	4	obl	_	_
9	Quotidiano	Quotidiano	PROPN	SP	_	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_
11	Per	per	ADP	E	_	12	case	_	_
12	cui	cui	PRON	PR	PronType=Rel	14	obl	_	_
13	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	14	expl:impers	_	_
14	riderà	ridere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	parataxis	_	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	doppio	doppio	NOUN	S	Gender=Masc|Number=Sing	14	obl	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	16	punct	_	_
18	[	[	PUNCT	FB	_	19	punct	_	SpaceAfter=No
19	xanax	xanax	SYM	SYM	_	14	parataxis	_	SpaceAfter=No
20	]	]	PUNCT	FB	_	19	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	E	e	CCONJ	CC	_	8	discourse	_	_
2	finalmente	finalmente	ADV	B	_	8	advmod	_	_
3	grazie	grazie	ADP	E	_	6	case	_	_
4	a	a	ADP	E	_	3	fixed	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
7	Monti	Monti	PROPN	SP	_	6	nmod	_	_
8	pagherà	pagare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
9	cha	chi	PRON	PR	PronType=Rel	8	nsubj	_	_
10	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
11	sempre	sempre	ADV	B	_	12	advmod	_	_
12	pagato	pagare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	acl:relcl	_	SpaceAfter=No
13	!	!	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	più	più	ADV	B	_	8	advmod	_	_
2	che	che	SCONJ	CS	_	1	fixed	_	_
3	bipolaristi	bipolarista	ADJ	A	Number=Plur	1	amod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	italiani	italiano	NOUN	S	Gender=Masc|Number=Plur	8	nsubj	_	_
7	sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	bipolari	bipolare	ADJ	A	Number=Plur	0	root	_	_

~~~


