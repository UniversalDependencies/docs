---
layout: base
title:  'Statistics of expl:pv in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="es_gsd-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_gsd-dep-expl-pass.html">expl:pass</a></tt>.

5332 nodes (1%) are attached to their parents as `expl:pv`.

4609 instances of `expl:pv` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13372093023256.

The following 5 pairs of parts of speech are connected with `expl:pv`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (5313; 100% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="es_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_gsd-pos-X.html">X</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:pv	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:pv	color:blue
1	Les	él	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	2	obl:arg	_	_
2	gusta	gustar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	2	nsubj	_	_
4	que	que	SCONJ	_	_	5	mark	_	_
5	hacen	hacer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
6	y	y	CCONJ	_	_	8	cc	_	_
7	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	8	expl:pv	_	_
8	nota	notar	NOUN	_	Number=Sing	2	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl:pv	color:blue
1	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	2	punct	_	SpaceAfter=No
2	Note	notar	VERB	_	Mood=Imp|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
3	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	2	obl:arg	_	_
4	diferencia	diferenciar	NOUN	_	Number=Sing	2	nsubj	_	_
5	con	con	ADP	_	_	6	case	_	_
6	dato	dato	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
7	indicado	indicar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	6	acl	_	_
8	en	en	ADP	_	_	9	case	_	_
9	tabla	tabla	NOUN	_	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	:	:	PUNCT	_	PunctType=Colo	12	punct	_	_
11	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	12	expl:pv	_	_
12	debe	deber	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	parataxis	_	_
13	a	a	ADP	_	_	17	case	_	_
14	que	que	SCONJ	_	_	17	mark	_	_
15	allí	allí	ADV	_	_	17	advmod	_	_
16	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	17	expl:pv	_	_
17	refiere	referir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	advcl	_	_
18	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	peso	peso	NOUN	_	Gender=Masc|Number=Sing	17	obj	_	_
20	molecular	molecular	ADJ	_	Number=Sing	19	amod	_	_
21	de	de	ADP	_	_	23	case	_	_
22	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	MFD	Mfd	PROPN	_	_	19	nmod	_	SpaceAfter=No
24	,	,	PUNCT	_	PunctType=Comm	27	punct	_	_
25	y	y	CCONJ	_	_	27	cc	_	_
26	aquí	aquí	ADV	_	_	27	advmod	_	_
27	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	conj	_	_
28	de	de	ADP	_	_	30	case	_	_
29	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	30	det	_	_
30	sal	sal	NOUN	_	Gender=Masc|Number=Sing	27	nmod	_	SpaceAfter=No
31	.	.	PUNCT	_	PunctType=Peri	2	punct	_	SpaceAfter=No
32	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	2	punct	_	_

~~~


