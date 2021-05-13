---
layout: base
title:  'Statistics of expl in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl`

This relation is universal.
There are 3 language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_ancora-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="es_ancora-dep-expl-pv.html">expl:pv</a></tt>.

1 nodes (0%) are attached to their parents as `expl`.

1 instances of `expl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 expl	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Caja	Caja	PROPN	_	_	7	nsubj	_	MWE=Caja_San_Fernando|MWEPOS=PROPN
3	San	San	PROPN	_	_	2	flat	_	_
4	Fernando	Fernando	PROPN	_	_	2	flat	_	_
5	estuvo	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
6	a	a	ADP	_	_	7	case	_	MWE=a_punto_de|MWEPOS=ADP
7	punto	punto	NOUN	_	_	0	root	_	_
8	de	de	ADP	_	_	9	mark	_	_
9	complicar	complicar	VERB	_	VerbForm=Inf	7	acl	_	_
10	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
11	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	vida	vida	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	_
13	a	a	ADP	_	_	15	case	_	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	Joventut	Joventut	PROPN	_	_	9	iobj	_	_
16	en	en	ADP	_	_	17	case	_	_
17	Badalona	Badalona	PROPN	_	_	15	nmod	_	_
18	y	y	CCONJ	_	_	20	cc	_	_
19	sólo	sólo	ADV	_	_	20	advmod	_	_
20	cedió	ceder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	conj	_	_
21	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	triunfo	triunfo	NOUN	_	Gender=Masc|Number=Sing	20	obj	_	_
23	en	en	ADP	_	_	25	case	_	_
24	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	_
25	prórroga	prórroga	NOUN	_	Gender=Fem|Number=Sing	20	obl	_	_
26	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	27	punct	_	SpaceAfter=No
27	85-79	85-79	NUM	_	NumForm=Digit|NumType=Card	20	dep	_	SpaceAfter=No
28	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	27	punct	_	_
29	después	después	ADV	_	_	20	advmod	_	_
30	de	de	ADP	_	_	34	mark	_	_
31	que	que	SCONJ	_	_	34	mark	_	_
32	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
33	partido	partido	NOUN	_	Gender=Masc|Number=Sing	34	nsubj	_	_
34	acabara	acabar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	29	advcl	_	_
35	empatado	empatado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	34	obj	_	_
36	a	a	ADP	_	_	37	case	_	_
37	72	72	NUM	_	NumForm=Digit|NumType=Card	35	obl	_	SpaceAfter=No
38	.	.	PUNCT	_	PunctType=Peri	7	punct	_	_

~~~


