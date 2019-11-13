---
layout: base
title:  'Statistics of dislocated in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `dislocated`

This relation is universal.

43 nodes (0%) are attached to their parents as `dislocated`.

32 instances of `dislocated` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.58139534883721.

The following 10 pairs of parts of speech are connected with `dislocated`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (23; 53% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (6; 14% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (4; 9% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (2; 5% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 dislocated	color:blue
1	Arrestato	arrestare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	Scajola	Scajola	PROPN	SP	_	1	nsubj:pass	_	SpaceAfter=No
3	.	.	PUNCT	FS	_	1	punct	_	_
4	Stavolta	stavolta	ADV	B	_	8	advmod	_	_
5	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	_	SpaceAfter=No
6	alloggio	alloggio	NOUN	S	Gender=Masc|Number=Sing	8	dislocated	_	_
7	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	offriamo	offrire	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
9	noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	8	punct	_	_
11	[	[	PUNCT	FB	_	12	punct	_	SpaceAfter=No
12	@user	@user	SYM	SYM	_	1	vocative:mention	_	SpaceAfter=No
13	]	]	PUNCT	FB	_	12	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 dislocated	color:blue
1	@user	@user	SYM	SYM	_	4	vocative:mention	_	_
2	L'	lo	PRON	PC	Clitic=Yes|Number=Sing|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
3	hanno	avere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	letta	leggere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	8	punct	_	_
6	l'	lo	PRON	PC	Clitic=Yes|Number=Sing|Person=3|PronType=Prs	8	obj	_	SpaceAfter=No
7	hanno	avere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	letta	leggere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	8	punct	_	_
10	E	e	CCONJ	CC	_	13	cc	_	_
11	oggi	oggi	ADV	B	_	13	advmod	_	_
12	hanno	avere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	mostrato	mostrare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	parataxis	_	_
14	quanto	quanto	SCONJ	CS	_	16	mark	_	_
15	l'	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	16	dislocated	_	SpaceAfter=No
16	apprezzano	apprezzare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	_	_
17	#labuonascuola	#labuonascuola	SYM	SYM	_	16	obj	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	13	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 dislocated	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Turchia	Turchia	PROPN	SP	_	3	nsubj	_	_
3	abbatte	abbattere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	aereo	aereo	NOUN	S	Gender=Masc|Number=Sing	3	obj	_	_
6	russo	russo	ADJ	A	Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_
8	E	e	CCONJ	CC	_	14	cc	_	_
9	finalmente	finalmente	ADV	B	_	14	advmod	_	_
10	Erdogan	Erdogan	PROPN	SP	_	14	dislocated	_	_
11	ce	ce	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	14	expl	_	_
12	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
13	siamo	essere	AUX	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	tolto	togliere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	parataxis	_	_
15	da	da	ADP	E	_	17	case	_	_
16	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
17	palle	palla	NOUN	S	Gender=Fem|Number=Plur	14	obl	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	14	punct	_	_
19	[	[	PUNCT	FB	_	20	punct	_	SpaceAfter=No
20	@user	@user	SYM	SYM	_	3	vocative:mention	_	SpaceAfter=No
21	]	]	PUNCT	FB	_	20	punct	_	SpaceAfter=\n

~~~


