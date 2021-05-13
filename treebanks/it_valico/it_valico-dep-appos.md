---
layout: base
title:  'Statistics of appos in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `appos`

This relation is universal.

14 nodes (0%) are attached to their parents as `appos`.

14 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71428571428571.

The following 4 pairs of parts of speech are connected with `appos`: <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (7; 50% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt> (3; 21% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 appos	color:blue
1	Ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	pensato	pensare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	che	che	SCONJ	CS	_	7	mark	_	_
4	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	voce	voce	NOUN	S	Gender=Fem|Number=Sing	7	nsubj	_	_
6	fosse	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
7	similare	similare	ADJ	A	Number=Sing	2	ccomp	_	_
8	a	a	ADP	E	_	9	case	_	_
9	Giorgia	Giorgia	PROPN	SP	_	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	13	punct	_	_
11	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
12	tua	tuo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	13	det:poss	_	_
13	collega	collega	NOUN	S	Gender=Fem|Number=Sing	9	appos	_	_
14	a	a	ADP	E	_	16	case	_	_
15	l'	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	università	università	NOUN	S	Gender=Fem	13	nmod	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Non	non	ADV	BN	PronType=Neg	2	advmod	_	_
2	capisco	capire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	ADP	E	_	5	case	_	_
4	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	gente	gente	NOUN	S	Gender=Fem|Number=Sing	2	obl	_	_
6	pettegola	pettegolo	ADJ	A	Gender=Fem|Number=Sing	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	8	punct	_	_
8	gente	gente	NOUN	S	Gender=Fem|Number=Sing	5	appos	_	_
9	che	che	PRON	PR	PronType=Rel	12	nsubj	_	_
10	soltanto	soltanto	ADV	B	_	12	advmod	_	_
11	voglie	volere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	chiamare	chiamare	VERB	V	VerbForm=Inf	8	acl:relcl	_	_
13	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	pò	pò	NOUN	S	Gender=Masc|Number=Sing	12	obl	_	LOC=adv
15	l'	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
16	atenzione	atenzione	NOUN	S	Gender=Fem|Number=Sing	12	obj	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 appos	color:blue
1	Un'	una	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	13	nsubj	_	_
3	molto	molto	ADV	B	_	4	advmod	_	_
4	forte	forte	ADJ	A	Number=Sing	2	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	intelligente	intelligente	ADJ	A	Number=Sing	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	8	punct	_	_
8	sportivo	sportivo	ADJ	A	Gender=Masc|Number=Sing	4	conj	_	_
9	e	e	CCONJ	CC	_	10	cc	_	_
10	carino	carino	ADJ	A	Gender=Masc|Number=Sing	4	conj	_	_
11	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	13	obj	_	_
12	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	salvato	salvare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
14	di	di	ADP	E	_	17	case	_	_
15	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	17	det	_	_
16	ignorante	ignorante	ADJ	A	Number=Sing	17	amod	_	_
17	persona	persona	NOUN	S	Gender=Fem|Number=Sing	13	obl	_	_
18	Marco	Marco	PROPN	SP	_	17	appos	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	13	punct	_	SpacesAfter=\n

~~~


