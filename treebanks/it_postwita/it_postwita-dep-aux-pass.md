---
layout: base
title:  'Statistics of aux:pass in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-aux.html">aux</a></tt>.

152 nodes (0%) are attached to their parents as `aux:pass`.

152 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11842105263158.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (149; 98% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Tobin	Tobin	PROPN	SP	_	7	parataxis:nsubj	_	_
2	tax	tax	PROPN	SP	_	1	flat:name	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Jerusalmi	Jerusalmi	PROPN	SP	_	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	dannosa	dannoso	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_
8	va	andare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
9	tolta	togliere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	conj	_	_
10	http://t.co/7klJ49BVBj	http://t.co/7klJ49BVBj	SYM	X	_	7	dep	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 aux:pass	color:blue
1	Troppo	troppo	ADV	B	_	2	advmod	_	_
2	berlusconismo	berlusconismo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
3	in	in	ADP	E	_	5	case	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	esordio	esordio	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	di	di	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	governo	governo	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
9	Monti	Monti	PROPN	SP	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	_
11	E	e	CCONJ	CC	_	26	cc	_	_
12	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	13	det	_	SpaceAfter=No
13	Italia	italia	PROPN	SP	_	26	nsubj:pass	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	13	punct	_	_
15	a	a	ADP	E	_	16	case	_	_
16	furia	furia	NOUN	S	Gender=Fem|Number=Sing	26	obl	_	_
17	di	di	ADP	E	_	18	mark	_	_
18	subire	subire	VERB	V	VerbForm=Inf	16	acl	_	_
19	"	"	PUNCT	FB	_	20	punct	_	_
20	lacrime	lacrima	NOUN	S	Gender=Fem|Number=Plur	18	obj	_	_
21	e	e	CCONJ	CC	_	22	cc	_	_
22	sangue	sangue	NOUN	S	Gender=Masc|Number=Sing	20	conj	_	_
23	"	"	PUNCT	FB	_	20	punct	_	SpaceAfter=No
24	,	,	PUNCT	FF	_	20	punct	_	_
25	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	aux:pass	_	_
26	governa...	governa...	X	X	_	2	parataxis	_	_
27	http://t.co/9Qfg6RsM	http://t.co/9Qfg6RsM	SYM	X	_	2	dep	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 aux:pass	color:blue
1	@user	@user	SYM	SYM	_	9	vocative:mention	_	_
2	si	sì	INTJ	I	_	9	discourse	_	CorrectForm=sì
3	si	sì	INTJ	I	_	9	discourse	_	CorrectForm=sì
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
5	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	_
6	tra	tra	ADP	E	_	9	case	_	_
7	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
8	più	più	ADV	B	_	9	advmod	_	_
9	disponibili	disponibile	ADJ	A	Number=Plur	0	root	_	SpaceAfter=No
10	!	!	PUNCT	FS	_	9	punct	_	_
11	Mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det:poss	_	_
12	padre	padre	NOUN	S	Gender=Masc|Number=Sing	14	nsubj	_	_
13	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	parataxis	_	_
15	che	che	SCONJ	CS	_	17	mark	_	_
16	avevamo	avere	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	17	aux	_	_
17	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	ccomp	_	_
18	850	850	NUM	N	NumType=Card	19	nummod	_	_
19	km	km	NOUN	S	Gender=Masc	17	obj	_	_
20	e	e	CCONJ	CC	_	23	cc	_	_
21	lui	lui	PRON	PE	Number=Sing|Person=3|PronType=Prs	23	nsubj	_	_
22	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux	_	_
23	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	conj	_	_
24	che	che	SCONJ	CS	_	27	mark	_	_
25	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	27	expl	_	_
26	sarebbe	essere	AUX	VA	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	aux	_	_
27	fermato	fermare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	23	ccomp	_	_
28	anche	anche	ADV	B	_	27	advmod	_	_

~~~


