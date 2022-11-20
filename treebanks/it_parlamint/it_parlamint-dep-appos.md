---
layout: base
title:  'Statistics of appos in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `appos`

This relation is universal.

37 nodes (0%) are attached to their parents as `appos`.

37 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.75675675675676.

The following 6 pairs of parts of speech are connected with `appos`: <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (21; 57% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (5; 14% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (3; 8% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 appos	color:blue
1	Ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	facoltà	facoltà	NOUN	S	Gender=Fem|Number=Sing	1	obj	_	_
3	di	di	ADP	E	_	4	mark	_	_
4	parlare	parlare	VERB	V	VerbForm=Inf	2	acl	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	ministro	ministro	NOUN	S	Gender=Masc|Number=Sing	1	nsubj	_	_
7	di	di	ADP	E	_	9	case	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	giustizia	giustizia	NOUN	S	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	11	punct	_	_
11	onorevole	onorevole	NOUN	S	Number=Sing	6	appos	_	_
12	Bonafede	Bonafede	PROPN	SP	_	11	nmod	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	FILIPPIN	Filippin	PROPN	SP	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	relatrice	relatore	NOUN	S	Gender=Fem|Number=Sing	1	appos	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 appos	color:blue
1	Ringraziamo	ringraziare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	7	punct	_	_
3	come	come	SCONJ	CS	_	7	mark	_	_
4	altri	altro	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj	_	_
5	hanno	avere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	già	già	ADV	B	_	7	advmod	_	_
7	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	advcl	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	7	punct	_	_
9	tutti	tutto	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	10	det	_	_
10	coloro	coloro	PRON	PD	Number=Plur|PronType=Dem	1	obj	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	12	punct	_	_
12	donne	donna	NOUN	S	Gender=Fem|Number=Plur	10	appos	_	_
13	e	e	CCONJ	CC	_	14	cc	_	_
14	uomini	uomo	NOUN	S	Gender=Masc|Number=Plur	12	conj	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	12	punct	_	_
16	che	che	PRON	PR	PronType=Rel	17	nsubj	_	_
17	lavorano	lavorare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	acl	_	_
18	a	a	ADP	E	_	20	case	_	_
19	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	20	det	_	_
20	interno	interno	NOUN	S	Gender=Masc|Number=Sing	17	obl	_	_
21	di	di	ADP	E	_	23	case	_	_
22	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	23	det	_	_
23	strutture	struttura	NOUN	S	Gender=Fem|Number=Plur	20	nmod	_	_
24	carcerarie	carcerario	ADJ	A	Gender=Fem|Number=Plur	23	amod	_	SpaceAfter=No
25	.	.	PUNCT	FS	_	1	punct	_	_

~~~


