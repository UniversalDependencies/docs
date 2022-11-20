---
layout: base
title:  'Statistics of goeswith in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `goeswith`

This relation is universal.

5 nodes (0%) are attached to their parents as `goeswith`.

5 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 40% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 20% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 20% instances), <tt><a href="it_postwita-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Sta	stasera	ADV	B	Typo=Yes	3	advmod	_	CorrectForm=stasera
2	sera	_	X	X	_	1	goeswith	_	_
3	tempesta	tempesta	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	più	più	ADV	B	_	5	advmod	_	_
5	grande	grande	ADJ	A	Number=Plur	3	amod	_	_
6	di	di	ADP	E	_	7	case	_	_
7	ieri	ieri	ADV	B	_	5	obl	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 35 goeswith	color:blue
1	RT	RT	SYM	SYM	_	11	parataxis	_	_
2	@user	@user	SYM	SYM	_	11	vocative	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Ehi	ehi	INTJ	I	_	11	discourse	_	_
5	tu	tu	PRON	PE	Number=Sing|Person=2|PronType=Prs	11	vocative	_	SpaceAfter=No
6	!	!	PUNCT	FS	_	5	punct	_	_
7	si	sì	INTJ	I	_	11	discourse	_	CorrectForm=sì
8	proprio	proprio	ADV	B	_	9	advmod	_	_
9	tu	tu	PRON	PE	Number=Sing|Person=2|PronType=Prs	11	vocative	_	_
10	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
11	so	sapere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
12	che	che	SCONJ	CS	_	14	mark	_	_
13	hai	avere	AUX	VA	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	letto	leggere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	ccomp	_	_
15	bhe	bhe	INTJ	I	_	16	discourse	_	_
16	continua	continuare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	14	conj	_	_
17	a	a	ADP	E	_	18	mark	_	_
18	leggere	leggere	VERB	V	VerbForm=Inf	16	xcomp	_	_
19	#rt	#rt	SYM	SYM	_	20	parataxis:hashtag	_	_
20	segui	seguire	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis	_	_
21	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	20	obj	_	_
22	e	e	CCONJ	CC	_	24	cc	_	_
23	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	24	obj	_	_
24	seguo	seguire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	20	conj	_	_
25	in	in	ADP	E	_	26	case	_	_
26	più	più	ADV	B	_	28	advmod	_	_
27	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	28	obj	_	_
28	voto	votare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	20	conj	_	_
29	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	28	dep	_	SpaceAfter=No
30	con	con	ADP	E	_	28	dep	_	_
31	in	in	ADP	E	_	32	case	_	_
32	%	%	SYM	SYM	_	28	obl	_	_
33	...	...	PUNCT	FS	_	28	punct	_	_
34	daii	dai	INTJ	I	Typo=Yes	20	discourse	_	CorrectForm=daiii|NonCan=Stretch
35	i	_	X	X	_	34	goeswith	_	_
36	…	…	PUNCT	FS	_	34	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	meet	meet	NOUN	S	Typo=Yes	6	nsubj	_	_
3	up	_	X	_	_	2	goeswith	_	_
4	a	a	ADP	E	_	5	case	_	_
5	Cuneo	Cuneo	PROPN	SP	_	6	obl	_	_
6	chiude	chiudere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	e	e	CCONJ	CC	_	8	cc	_	_
8	contesta	contestare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	SpaceAfter=No
9	:	:	PUNCT	FC	_	8	punct	_	_
10	#Grillo	#Grillo	SYM	SYM	_	11	nsubj	_	_
11	parla	parlare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	parataxis	_	_
12	bene	bene	ADV	B	_	11	advmod	_	_
13	e	e	CCONJ	CC	_	14	cc	_	_
14	razzola	razzolare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	conj	_	_
15	male	male	ADV	B	_	14	advmod	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	20	punct	_	_
17	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	grillismo	grillismo	NOUN	S	Gender=Masc|Number=Sing	20	nsubj	_	_
19	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
20	diventato	diventare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	conj	_	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	sinonimo	sinonimo	NOUN	S	Gender=Masc|Number=Sing	20	xcomp	_	_
23	di	di	ADP	E	_	24	case	_	_
24	arrivismo	arrivismo	NOUN	S	Gender=Masc|Number=Sing	22	nmod	_	_
25	e	e	CCONJ	CC	_	26	cc	_	_
26	smania	smania	NOUN	S	Gender=Fem|Number=Sing	24	conj	_	_
27	di	di	ADP	E	_	28	case	_	_
28	potere	potere	NOUN	S	Gender=Masc|Number=Sing	26	nmod	_	SpaceAfter=No
29	.	.	PUNCT	FS	_	28	punct	_	_

~~~


