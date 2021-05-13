---
layout: base
title:  'Statistics of obj in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `obj`

This relation is universal.

790 nodes (3%) are attached to their parents as `obj`.

713 instances of `obj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94683544303797.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (660; 84% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (92; 12% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (16; 2% instances), <tt><a href="es_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	programa	_	NOUN	NN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	gana	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	dinero	_	NOUN	NN	Gender=Masc|Number=Sing	3	obj	_	_
5	mediante	_	ADP	IN	_	7	case	_	_
6	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	patrocinio	_	NOUN	NN	Gender=Masc|Number=Sing	3	obl	_	_
8	y	_	CCONJ	CC	_	10	cc	_	_
9	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	publicidad	_	NOUN	NN	Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	No	_	ADV	RB	Polarity=Neg	4	advmod	_	_
2	todo	_	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	4	det	_	_
3	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	mundo	_	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
5	puede	poder	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	superar	_	VERB	VB	Aspect=Imp|VerbForm=Fin	0	root	_	_
7	lo	él	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obj	_	_
8	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obj	color:blue
1	De	_	ADP	IN	_	7	discourse	_	_
2	todas	_	DET	DT	Gender=Fem|Number=Plur|PronType=Tot	1	fixed	_	_
3	maneras	_	NOUN	NN	Gender=Fem|Number=Plur	1	fixed	_	SpaceAfter=No
4	,	_	PUNCT	,	_	1	punct	_	_
5	Pyrrhus	_	PROPN	NNP	Gender=Masc|Number=Sing	7	nsubj:pass	_	_
6	fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	7	aux:pass	_	_
7	forzado	_	VERB	VBN	Gender=Masc|Number=Sing|VerbForm=Fin	0	root	_	_
8	a	_	ADP	IN	_	9	case	_	_
9	dejar	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	7	xcomp	_	_
10	Sicilia	_	PROPN	NNP	Number=Sing	9	obj	_	_
11	para	_	ADP	IN	_	12	case	_	_
12	atender	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	9	xcomp	_	_
13	unos	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	14	det	_	_
14	negocios	_	NOUN	NN	Gender=Masc|Number=Plur	12	obj	_	_
15	en	_	ADP	IN	_	17	case	_	_
16	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	sur	_	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
18	de	_	ADP	IN	_	19	case	_	_
19	Italia	_	PROPN	NNP	Number=Sing	17	nmod	_	SpaceAfter=No
20	.	_	PUNCT	.	_	7	punct	_	_

~~~


