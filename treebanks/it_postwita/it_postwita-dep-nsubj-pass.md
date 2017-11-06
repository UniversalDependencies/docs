---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-nsubj.html">nsubj</a></tt>.

95 nodes (0%) are attached to their parents as `nsubj:pass`.

64 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22105263157895.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (48; 51% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (28; 29% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (11; 12% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nsubj:pass	color:blue
1	RT	RT	X	X	_	7	dep	_	_
2	@dolceebastarda	@dolceebastarda	SYM	SYM	_	7	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	A	a	ADP	E	_	6	case	_	_
5	certi	certo	DET	DI	PronType=Ind	6	det	_	_
6	tweet	tweet	NOUN	S	_	7	obl	_	_
7	andrebbero	andare	VERB	V	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	allegate	allegare	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	7	xcomp	_	_
9	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	lamette	lametta	NOUN	S	Gender=Fem|Number=Plur	8	nsubj:pass	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	Denunciato	denunciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	Mario	mario	PROPN	SP	_	1	nsubj:pass	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	per	per	ADP	E	_	6	case	_	_
5	alto	alto	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	_
6	tradimento	tradimento	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
7	http://t.co/QlD7KTk7	http://t.co/QlD7KTk7	SYM	X	_	1	dep	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	@lucatelese	@lucatelese	SYM	SYM	_	4	vocative:mention	_	_
2	#Grillo	#Grillo	SYM	SYM	_	4	nsubj:pass	_	_
3	andrebbe	andare	AUX	VA	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	messo	mettere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	a	a	ADP	E	_	7	case	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	prova	prova	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	12	punct	_	_
9	ma	ma	CCONJ	CC	_	12	cc	_	_
10	non	non	ADV	BN	PronType=Neg	12	advmod	_	_
11	e'	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	conj	_	_
13	che	che	SCONJ	CS	_	14	mark	_	_
14	riuscira'	riuscire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	12	ccomp	_	_

~~~


