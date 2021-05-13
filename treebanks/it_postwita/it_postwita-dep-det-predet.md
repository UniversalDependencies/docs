---
layout: base
title:  'Statistics of det:predet in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_postwita-dep-det-poss.html">det:poss</a></tt>.

145 nodes (0%) are attached to their parents as `det:predet`.

145 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12413793103448.

The following 7 pairs of parts of speech are connected with `det:predet`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (124; 86% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (7; 5% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (5; 3% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det:predet	color:blue
1	@user	@user	SYM	SYM	_	6	vocative:mention	_	_
2	ma	ma	CCONJ	CC	_	6	cc	_	_
3	per	per	ADP	E	_	4	case	_	_
4	lui	lui	PRON	PE	Number=Sing|Person=3|PronType=Prs	6	obl	_	_
5	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	Pasqua	Pasqua	PROPN	SP	_	0	root	_	_
7	tutto	tutto	DET	DI	PronType=Ind	9	det:predet	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	anno	anno	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
10	ahahah	ahahah	INTJ	I	_	6	discourse	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det:predet	color:blue
1	#Grillo	#Grillo	SYM	SYM	_	6	nsubj	_	_
2	esaltato	esaltato	ADJ	A	Gender=Masc|Number=Sing	1	amod	_	_
3	da	da	ADP	E	_	5	case	_	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	sondaggi	sondaggio	NOUN	S	Gender=Masc|Number=Plur	2	obl:agent	_	_
6	minaccia	minacciare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	tutti	tutto	DET	DI	PronType=Ind	9	det:predet	_	_
8	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	#politici	#politici	SYM	SYM	_	6	obj	_	SpaceAfter=No
10	:	:	PUNCT	FC	_	6	punct	_	_
11	"	"	PUNCT	FB	_	13	punct	_	_
12	Li	li	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	13	obj	_	_
13	porteremo	portare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	6	parataxis	_	_
14	a	a	ADP	E	_	15	case	_	_
15	Norimberga	norimberga	PROPN	SP	_	13	obl	_	_
16	"	"	PUNCT	FB	_	13	punct	_	_
17	...	...	PUNCT	FS	_	13	punct	_	_
18	e	e	CCONJ	CC	_	21	cc	_	_
19	Noi	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	21	nsubj	_	_
20	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	21	obj	_	_
21	porteremo	portare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	13	conj	_	_
22	a	a	ADP	E	_	23	case	_	_
23	zelig	zelig	PROPN	SP	_	21	obl	_	_
24	...	...	PUNCT	FS	_	21	punct	_	_
25	#sallo	#sallo	SYM	SYM	_	6	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:predet	color:blue
1	@user1	@user1	SYM	SYM	_	2	vocative:mention	_	_
2	lassa	lassare	X	SW	_	0	root	_	_
3	Peddere	perdere	X	SW	_	2	flat:foreign	_	_
4	Rocco	rocco	PROPN	SP	_	2	obj	_	_
5	che	che	PRON	PR	PronType=Rel	7	nsubj	_	_
6	me	me	X	SW	_	7	iobj	_	_
7	rovina	rovinare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
8	tutti	tutto	DET	DI	PronType=Ind	10	det:predet	_	_
9	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	Tweet	Tweet	PROPN	SP	_	7	obj	_	_
11	@user2	@user2	SYM	SYM	_	2	vocative:mention	_	_

~~~


