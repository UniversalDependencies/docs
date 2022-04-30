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
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	Caja	Caja	PROPN	np00000	_	7	nsubj	7:nsubj	MWE=Caja_San_Fernando|MWEPOS=PROPN|ClusterId=CESS-CAST-P-20001201-176-c16|ClusterType=Spec.organization|MentionSpan=1-4
3	San	San	PROPN	_	_	2	flat	2:flat	_
4	Fernando	Fernando	PROPN	_	_	2	flat	2:flat	_
5	estuvo	estar	AUX	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	7:cop	_
6	a	a	ADP	sps00	_	7	case	7:case	MWE=a_punto_de|MWEPOS=ADP
7	punto	punto	NOUN	_	_	0	root	0:root	_
8	de	de	ADP	_	_	9	mark	9:mark	_
9	complicar	complicar	VERB	vmn0000	VerbForm=Inf	7	acl	7:acl	ClusterId=CESS-CAST-P-20001201-176-c18|ClusterType=|MentionSpan=9-10
10	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	9	expl	9:expl	_
11	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	12:det	_
12	vida	vida	NOUN	ncfs000	Gender=Fem|Number=Sing	9	obj	9:obj	_
13	a	a	ADP	spcms	_	15	case	15:case	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	15:det	_
15	Joventut	Joventut	PROPN	np00000	_	9	iobj	9:iobj	ClusterId=CESS-CAST-P-20001201-176-c18|ClusterType=|MentionSpan=15|MentionMisc=ClusterTypeMismatch:Spec.organization:
16	en	en	ADP	sps00	_	17	case	17:case	_
17	Badalona	Badalona	PROPN	np00000	_	15	nmod	15:nmod	ClusterId=CESS-CAST-P-20001201-176-s11.sn.27|ClusterType=Spec.location|MentionSpan=17
18	y	y	CCONJ	cc	_	20	cc	20:cc	_
19	sólo	sólo	ADV	rg	_	20	advmod	20:advmod	_
20	cedió	ceder	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	conj	7:conj	_
21	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	22:det	_
22	triunfo	triunfo	NOUN	ncms000	Gender=Masc|Number=Sing	20	obj	20:obj	ClusterId=CESS-CAST-P-20001201-176-c23|ClusterType=Gen|MentionSpan=21-22|MentionMisc=HomoDD
23	en	en	ADP	sps00	_	25	case	25:case	_
24	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	25:det	_
25	prórroga	prórroga	NOUN	ncfs000	Gender=Fem|Number=Sing	20	obl	20:obl	ClusterId=CESS-CAST-P-20001201-176-s11.sn.47|ClusterType=Gen|MentionSpan=24-25
26	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	27	punct	27:punct	SpaceAfter=No
27	85-79	85-79	NUM	_	NumForm=Digit|NumType=Card	20	dep	20:dep	SpaceAfter=No|ClusterId=CESS-CAST-P-20001201-176-s11.sn.53|ClusterType=Spec.number|MentionSpan=26-28
28	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	27	punct	27:punct	_
29	después	después	ADV	rg	_	20	advmod	20:advmod	_
30	de	de	ADP	sps00	_	34	mark	34:mark	_
31	que	que	SCONJ	cs	_	34	mark	34:mark	_
32	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	33	det	33:det	_
33	partido	partido	NOUN	ncms000	Gender=Masc|Number=Sing	34	nsubj	34:nsubj	ClusterId=CESS-CAST-P-20001201-176-s11.sn.67|ClusterType=Gen|MentionSpan=32-33
34	acabara	acabar	VERB	vmsi3s0	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	29	advcl	29:advcl	_
35	empatado	empatado	ADJ	aq0msp	Gender=Masc|Number=Sing|VerbForm=Part	34	obj	34:obj	_
36	a	a	ADP	sps00	_	37	case	37:case	_
37	72	72	NUM	_	NumForm=Digit|NumType=Card	35	obl	35:obl	SpaceAfter=No|ClusterId=CESS-CAST-P-20001201-176-s11.sn.80|ClusterType=Spec.number|MentionSpan=37
38	.	.	PUNCT	fp	PunctType=Peri	7	punct	7:punct	_

~~~


