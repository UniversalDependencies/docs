---
layout: base
title:  'Statistics of expl:pv in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="es_gsd-dep-expl-pass.html">expl:pass</a></tt>.

5332 nodes (1%) are attached to their parents as `expl:pv`.

4609 instances of `expl:pv` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13672168042011.

The following 7 pairs of parts of speech are connected with `expl:pv`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (5311; 100% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="es_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_gsd-pos-X.html">X</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:pv	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	12	12	NUM	_	NumForm=Digit|NumType=Card	9	obl	_	_
3	de	de	ADP	_	_	4	case	_	_
4	noviembre	noviembre	PROPN	_	_	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	CNT	cnt	PROPN	_	_	9	nsubj	_	_
8	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	expl:pv	_	_
9	retira	retirar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	de	de	ADP	_	_	12	case	_	_
11	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	comités	comités	NOUN	_	Gender=Masc|Number=Plur	9	obl	_	_
13	de	de	ADP	_	_	15	case	_	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	FPA	fpa	PROPN	_	_	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	9	punct	_	_

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
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 expl:pv	color:blue
1	(	(	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Nó	nó	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	te	tú	PRON	_	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	2	obl:arg	_	_
4	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	2	expl:pv	_	_
5	diferencia	diferenciar	NOUN	_	Number=Sing	2	nsubj	_	_
6	con	con	ADP	_	_	7	case	_	_
7	dato	dato	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
8	indicado	indicar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	7	acl	_	_
9	en	en	ADP	_	_	10	case	_	_
10	tabla	tabla	NOUN	_	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	:	:	PUNCT	_	_	13	punct	_	_
12	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	13	expl:pv	_	_
13	debe	deber	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
14	a	a	ADP	_	_	18	case	_	_
15	que	que	SCONJ	_	_	18	mark	_	_
16	allí	allí	ADV	_	_	18	advmod	_	_
17	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	18	expl:pv	_	_
18	refiere	referir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	advcl	_	_
19	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	peso	peso	NOUN	_	Gender=Masc|Number=Sing	18	obj	_	_
21	molecular	molecular	ADJ	_	Number=Sing	20	amod	_	_
22	de	de	ADP	_	_	24	case	_	_
23	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	MFD	mfd	PROPN	_	_	20	nmod	_	SpaceAfter=No
25	,	,	PUNCT	_	_	28	punct	_	_
26	y	y	CCONJ	_	_	28	cc	_	_
27	aquí	aquí	ADV	_	_	28	advmod	_	_
28	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	conj	_	_
29	de	de	ADP	_	_	31	case	_	_
30	su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	31	det	_	_
31	sal	sal	NOUN	_	Gender=Masc|Number=Sing	28	nmod	_	SpaceAfter=No
32	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
33	)	)	PUNCT	_	_	2	punct	_	_

~~~


