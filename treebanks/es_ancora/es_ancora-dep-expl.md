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
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Caja	Caja	PROPN	PROPN	_	7	nsubj	_	MWE=Caja_San_Fernando|MWEPOS=PROPN
3	San	San	PROPN	PROPN	_	2	flat	_	_
4	Fernando	Fernando	PROPN	PROPN	_	2	flat	_	_
5	estuvo	estar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
6	a	a	ADP	ADP	AdpType=Prep	7	case	_	MWE=a_punto_de|MWEPOS=ADP
7	punto	punto	NOUN	NOUN	_	0	root	_	_
8	de	de	ADP	ADP	AdpType=Prep	9	mark	_	_
9	complicar	complicar	VERB	VERB	VerbForm=Inf	7	acl	_	_
10	le	él	PRON	PRON	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
11	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	vida	vida	NOUN	NOUN	Gender=Fem|Number=Sing	9	obj	_	_
13	al	al	ADP	ADP	AdpType=Preppron	14	case	_	_
14	Joventut	Joventut	PROPN	PROPN	_	9	iobj	_	_
15	en	en	ADP	ADP	AdpType=Prep	16	case	_	_
16	Badalona	Badalona	PROPN	PROPN	_	14	nmod	_	_
17	y	y	CCONJ	CCONJ	_	19	cc	_	_
18	sólo	sólo	ADV	ADV	_	19	advmod	_	_
19	cedió	ceder	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	conj	_	_
20	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	triunfo	triunfo	NOUN	NOUN	Gender=Masc|Number=Sing	19	obj	_	_
22	en	en	ADP	ADP	AdpType=Prep	24	case	_	_
23	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	prórroga	prórroga	NOUN	NOUN	Gender=Fem|Number=Sing	19	obl	_	_
25	(	(	PUNCT	PUNCT	PunctSide=Ini|PunctType=Brck	26	punct	_	SpaceAfter=No
26	85-79	85-79	NUM	NUM	NumForm=Digit|NumType=Card	19	dep	_	SpaceAfter=No
27	)	)	PUNCT	PUNCT	PunctSide=Fin|PunctType=Brck	26	punct	_	_
28	después	después	ADV	ADV	_	19	advmod	_	_
29	de	de	ADP	ADP	AdpType=Prep	33	mark	_	_
30	que	que	SCONJ	SCONJ	_	33	mark	_	_
31	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	partido	partido	NOUN	NOUN	Gender=Masc|Number=Sing	33	nsubj	_	_
33	acabara	acabar	VERB	VERB	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	28	advcl	_	_
34	empatado	empatado	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	33	obj	_	_
35	a	a	ADP	ADP	AdpType=Prep	36	case	_	_
36	72	72	NUM	NUM	NumForm=Digit|NumType=Card	34	obl	_	SpaceAfter=No
37	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


