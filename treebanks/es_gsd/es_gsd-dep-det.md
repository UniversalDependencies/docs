---
layout: base
title:  'Statistics of det in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `det`

This relation is universal.

61296 nodes (14%) are attached to their parents as `det`.

61137 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13367919603237.

The following 18 pairs of parts of speech are connected with `det`: <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (51228; 84% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (5984; 10% instances), <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (970; 2% instances), <tt><a href="es_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (967; 2% instances), <tt><a href="es_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (687; 1% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (311; 1% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (253; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (224; 0% instances), <tt><a href="es_gsd-pos-X.html">X</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (208; 0% instances), <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (178; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (118; 0% instances), <tt><a href="es_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (81; 0% instances), <tt><a href="es_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (28; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (23; 0% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (23; 0% instances), <tt><a href="es_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="es_gsd-pos-DET.html">DET</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="es_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Aun	aun	ADV	_	_	2	advmod	_	_
2	hay	haber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	otros	otro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	2	obj	_	_
4	reclutados	reclutar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	3	acl	_	_
5	por	por	ADP	_	_	7	case	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Ejército	ejército	NOUN	_	_	4	obl:agent	_	_
8	Blanco	Blanco	PROPN	_	_	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	12	12	NUM	_	NumForm=Digit|NumType=Card	9	obl	_	_
3	de	de	ADP	_	_	4	case	_	_
4	noviembre	noviembre	NOUN	_	_	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	PunctType=Comm	2	punct	_	_
6	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	CNT	Cnt	PROPN	_	_	9	nsubj	_	_
8	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	expl:pv	_	_
9	retira	retirar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	de	de	ADP	_	_	12	case	_	_
11	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	comités	comités	NOUN	_	Gender=Masc|Number=Plur	9	obl	_	_
13	de	de	ADP	_	_	15	case	_	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	FPA	Fpa	PROPN	_	_	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Tiene	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	todo	todo	DET	_	Gender=Masc|Number=Sing|PronType=Tot	3	det	_	_
3	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	1	obj	_	_
4	que	que	PRON	_	PronType=Rel	5	obj	_	_
5	necesitas	necesitar	VERB	_	Mood=Ind|Number=Plur|VerbForm=Fin	3	acl:relcl	_	_
6	para	para	ADP	_	_	7	mark	_	_
7	relajar	relajar	VERB	_	VerbForm=Inf	5	advcl	_	_
8	te	tú	PRON	_	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	7	obl:arg	_	_
9	y	y	CCONJ	_	_	10	cc	_	_
10	pasar	pasar	VERB	_	VerbForm=Inf	7	conj	_	_
11	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	buen	buen	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
13	rato	rato	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	PunctType=Peri	1	punct	_	_

~~~


