---
layout: base
title:  'Statistics of nsubj:outer in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_gsd-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.5.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 nsubj:outer	color:blue
1	Heather	heather	PROPN	_	_	2	nsubj	_	_
2	debutó	debutar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	en	en	ADP	_	_	5	case	_	_
4	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	música	música	NOUN	_	Gender=Fem|Number=Sing	2	obl	_	_
6	en	en	ADP	_	_	7	case	_	_
7	Octubre	octubre	PROPN	_	_	2	obl	_	_
8	de	de	ADP	_	_	9	case	_	_
9	2002	2002	NUM	_	NumForm=Digit|NumType=Card	7	nmod	_	_
10	con	con	ADP	_	_	12	case	_	_
11	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Álbum	álbum	PROPN	_	Gender=Masc|Number=Sing	2	obl	_	_
13	This	this	PRON	_	Foreign=Yes|Number=Sing|PronType=Dem	15	nsubj:outer	_	Lang=en
14	Is	be	AUX	_	Foreign=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	Lang=en
15	Who	who	PRON	_	Foreign=Yes|PronType=Int,Rel	12	appos	_	Lang=en
16	I	I	PRON	_	Case=Nom|Foreign=Yes|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	Lang=en
17	Am	be	AUX	_	Foreign=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	cop	_	Lang=en|SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	de	de	ADP	_	_	21	case	_	_
20	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	disquera	disquera	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	_
22	RCA	rca	PROPN	_	_	21	appos	_	SpaceAfter=No
23	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 nsubj:outer	color:blue
1	Los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	motivos	motivo	NOUN	_	Gender=Masc|Number=Plur	13	nsubj:outer	_	_
3	alegados	alegar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	2	acl	_	_
4	para	para	ADP	_	_	5	mark	_	_
5	intentar	intentar	VERB	_	VerbForm=Inf	3	advcl	_	_
6	asesinar	asesinar	VERB	_	VerbForm=Inf	5	xcomp	_	_
7	a	a	ADP	_	_	9	case	_	_
8	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	mujer	mujer	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
10	eran	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	_
11	que	que	SCONJ	_	_	13	mark	_	_
12	ésta	este	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	13	nsubj	_	_
13	provenía	provenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
14	de	de	ADP	_	_	16	case	_	_
15	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	familia	familia	NOUN	_	Gender=Fem|Number=Sing	13	obl	_	_
17	acomodada	acomodado	ADJ	_	Gender=Fem|Number=Sing|VerbForm=Part	16	amod	_	SpaceAfter=No
18	,	,	PUNCT	_	_	26	punct	_	_
19	y	y	CCONJ	_	_	26	cc	_	_
20	que	que	SCONJ	_	_	26	mark	_	_
21	durante	durante	ADP	_	_	23	case	_	_
22	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	separación	separación	NOUN	_	Gender=Fem|Number=Sing	26	obl	_	_
24	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	26	expl:pv	_	_
25	había	haber	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	26	aux	_	_
26	quedado	quedar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	conj	_	_
27	con	con	ADP	_	_	29	case	_	_
28	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	chalé	chalé	NOUN	_	Gender=Masc|Number=Sing	26	obl	_	_
30	familiar	familiar	ADJ	_	Number=Sing	29	amod	_	_
31	y	y	CCONJ	_	_	34	cc	_	_
32	con	con	ADP	_	_	34	case	_	_
33	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
34	empresa	empresa	NOUN	_	Gender=Fem|Number=Sing	29	conj	_	SpaceAfter=No
35	.	.	PUNCT	_	_	13	punct	_	_

~~~


