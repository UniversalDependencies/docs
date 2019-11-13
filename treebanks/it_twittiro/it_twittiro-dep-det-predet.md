---
layout: base
title:  'Statistics of det:predet in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_twittiro-dep-det-poss.html">det:poss</a></tt>.

31 nodes (0%) are attached to their parents as `det:predet`.

31 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12903225806452.

The following 4 pairs of parts of speech are connected with `det:predet`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (28; 90% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 det:predet	color:blue
1	desidero	desiderare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	esprimere	esprimere	VERB	V	VerbForm=Inf	1	xcomp	_	_
3	tutto	tutto	DET	DI	PronType=Ind	6	det:predet	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	sostegno	sostegno	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	_
7	a	a	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	governo	governo	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
10	Monti	Monti	PROPN	SP	_	9	nmod	_	_
11	Python	Python	PROPN	SP	_	10	flat:name	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 det:predet	color:blue
1	#labuonascuola	#labuonascuola	SYM	SYM	_	2	parataxis:hashtag	_	_
2	Fornitura	fornitura	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
3	illimitata	illimitato	ADJ	A	Gender=Fem|Number=Sing	2	amod	_	_
4	di	di	ADP	E	_	5	case	_	_
5	rotoli	rotolo	NOUN	S	Gender=Masc|Number=Plur	2	nmod	_	_
6	di	di	ADP	E	_	7	case	_	_
7	carta	carta	NOUN	S	Gender=Fem|Number=Sing	5	nmod	_	_
8	igienica	igienico	ADJ	A	Gender=Fem|Number=Sing	7	amod	_	_
9	e	e	CCONJ	CC	_	18	cc	_	_
10	poi	poi	ADV	B	_	18	advmod	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	12	punct	_	_
12	piano	piano	ADV	B	_	18	advmod	_	_
13	piano	piano	ADV	B	_	12	advmod	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	12	punct	_	_
15	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	18	det:predet	_	_
16	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	18	det	_	_
17	altri	altro	ADJ	A	Gender=Masc|Number=Plur	18	amod	_	_
18	aspetti	aspetto	NOUN	S	Gender=Masc|Number=Plur	2	conj	_	_
19	meno	meno	ADV	B	_	20	advmod	_	_
20	importanti	importante	ADJ	A	Number=Plur	18	amod	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	2	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 det:predet	color:blue
1	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	2	amod	_	_
2	principio	principio	NOUN	S	Gender=Masc|Number=Sing	10	parataxis	_	_
3	per	per	ADP	E	_	6	case	_	_
4	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	buona	buono	ADJ	A	Gender=Fem|Number=Sing	6	amod	_	_
6	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
7	:	:	PUNCT	FC	_	2	punct	_	_
8	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
9	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	expl	_	_
10	assumono	assumere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	150.000	150.000	NUM	N	NumType=Card	12	nummod	_	_
12	precari	precario	NOUN	S	Gender=Masc|Number=Plur	10	obj	_	_
13	ma	ma	CCONJ	CC	_	15	cc	_	_
14	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	15	expl	_	_
15	precarizzano	precarizzare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	conj	_	_
16	tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	18	det:predet	_	_
17	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	18	det	_	_
18	altri	altro	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	15	nsubj	_	SpaceAfter=No
19	:	:	PUNCT	FC	_	10	punct	_	_
20	luglio	luglio	NOUN	S	_	10	parataxis	_	_
21	agosto	agosto	NOUN	S	_	20	parataxis	_	_
22	no	no	INTJ	I	_	23	nmod	_	_
23	lavoro	lavoro	NOUN	S	Gender=Masc|Number=Sing	20	discourse	_	_
24	no	no	INTJ	I	_	25	nmod	_	_
25	money	money	INTJ	I	_	20	discourse	_	SpaceAfter=\n

~~~


