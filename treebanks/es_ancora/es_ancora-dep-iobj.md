---
layout: base
title:  'Statistics of iobj in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `iobj`

This relation is universal.

2109 nodes (0%) are attached to their parents as `iobj`.

1122 instances of `iobj` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21384542437174.

The following 16 pairs of parts of speech are connected with `iobj`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1149; 54% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (516; 24% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (255; 12% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (153; 7% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADV.html">ADV</a></tt> (11; 1% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-INTJ.html">INTJ</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-PART.html">PART</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
1	Y	y	CCONJ	CCONJ	_	11	advmod	_	_
2	tú	tú	PRON	PRON	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	_	_
3	con	con	ADP	ADP	AdpType=Prep	5	case	_	_
4	tus	tu	DET	DET	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	5	det	_	_
5	caras	cara	NOUN	NOUN	Gender=Fem|Number=Plur	11	obl	_	_
6	y	y	CCONJ	CCONJ	_	8	cc	_	_
7	tus	tu	DET	DET	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	8	det	_	_
8	nombres	nombre	NOUN	NOUN	Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
10	nos	yo	PRON	PRON	Case=Dat|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs	11	iobj	_	_
11	dejaste	dejar	VERB	VERB	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	0	root	_	_
12	tutear	tutear	VERB	VERB	VerbForm=Inf	11	xcomp	_	_
13	te	tú	PRON	PRON	Case=Acc|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	12	obj	_	_
14	.	.	PUNCT	PUNCT	PunctType=Peri	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	placa	placa	NOUN	NOUN	Gender=Fem|Number=Sing	4	iobj	_	_
3	la	él	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	obj	_	_
4	forman	formar	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	cuatro	cuatro	NUM	NUM	Number=Plur|NumType=Card	6	nummod	_	_
6	plafones	plafón	NOUN	NOUN	Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 iobj	color:blue
1	Lo	él	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	2	obj	_	_
2	anuncian	anunciar	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	en	en	ADP	ADP	AdpType=Prep	5	case	_	_
4	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	tele	tele	NOUN	NOUN	Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	PunctType=Comm	9	punct	_	_
7	en	en	ADP	ADP	AdpType=Prep	9	case	_	_
8	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	prensa	prensa	NOUN	NOUN	Gender=Fem|Number=Sing	5	conj	_	_
10	Ford	Ford	PROPN	PROPN	_	2	iobj	_	MWE=Ford_Mondeo|MWEPOS=PROPN
11	Mondeo	Mondeo	PROPN	PROPN	_	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


