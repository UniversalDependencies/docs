---
layout: base
title:  'Statistics of nummod in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `nummod`

This relation is universal.

15 nodes (0%) are attached to their parents as `nummod`.

15 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-NUM.html">NUM</a></tt> (13; 87% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="el_cretan-pos-DET.html">DET</a></tt>-<tt><a href="el_cretan-pos-NUM.html">NUM</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Σ	σε	ADP	OPUNCT	_	4	case	_	_
2	τσοι	o	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
3	πέντε	πέντε	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	4	nummod	_	_
4	δρόμους	δρόμος	NOUN	NoCm	Case=Acc|Gender=Masc|Number=Plur	0	root	_	_
5	,	,	PUNCT	PUNCT	_	6	punct	_	PunctType=Comm
6	δέσποτα	δέσποτας	NOUN	NoCm	Case=Voc|Gender=Masc|Number=Sing	4	vocative	_	_
7	.	.	PUNCT	PTERMP	_	4	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nummod	color:blue
1	Εκατό	εκατό	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	7	nummod	_	_
2	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
3	εκατόν	εκατόν	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	4	compound	_	_
4	πενήντα	πενήντα	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	1	conj	_	_
5	,	,	PUNCT	PUNCT	_	6	punct	_	PunctType=Comm
6	διακόσιους	διακόσιοι	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	1	conj	_	_
7	φάρδους	φάρδος	ADJ	AjBa	Case=Acc|Gender=Masc|Number=Plur	12	dislocated	_	_
8	γεμάτους	γεμάτος	ADJ	AjBa	Case=Acc|Gender=Masc|Number=Plur	7	advcl	_	_
9	ελιές	ελιά	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	8	obl	_	_
10	είχενε	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	να	να	SCONJ	PtSj	_	12	mark	_	_
12	αλέσει	αλέθω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	10	xcomp	_	_
13	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	κουμπάρος	κουμπάρος	NOUN	AjBa	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
15	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Στελιανός	Στελιανός	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	14	appos	_	_
17	.	.	PUNCT	PTERMP	_	10	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Όποιος	όποιος	DET	PnRi	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	_
2	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	ξέρει	ξέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	csubj	_	_
4	και	και	CCONJ	CjCo	_	6	cc	_	_
5	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	πει	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	conj	_	_
7	τρεις	τρεις	NUM	AjBa	Case=Acc|Gender=Fem|Number=Plur|NumType=Card	8	nummod	_	_
8	φορές	φορά	DET	PnDm	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	6	obl	_	_
9	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	ημέρα	ημέρα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
11	,	,	PUNCT	PUNCT	_	3	punct	_	PunctType=Comm
12	σ	σε	ADP	AsPpSp	_	14	case	_	_
13	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	φωτιά	φωτιά	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	16	obl	_	_
15	να	να	AUX	PtSj	_	16	aux	_	_
16	δίνει	δίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
17	και	και	CCONJ	CjCo	_	20	cc	_	_
18	να	να	SCONJ	PtSj	_	20	mark	_	_
19	μην	μην	PART	PtNg	Polarity=Neg	20	advmod	_	_
20	καίγεται	καίω	VERB	NoCm	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	16	conj	_	_
21	,	,	PUNCT	PUNCT	_	26	punct	_	PunctType=Comm
22	σ	σε	ADP	AsPpSp	_	24	case	_	_
23	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	ποταμό	ποταμός	NOUN	NoCm	Case=Acc|Gender=Masc|Number=Sing	26	obl	_	_
25	να	να	AUX	PtSj	_	26	aux	_	_
26	δίδει	δίδω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	conj	_	_
27	και	και	CCONJ	CjCo	_	31	cc	_	_
28	να	να	SCONJ	PtSj	_	31	mark	_	_
29	μην	μην	PART	PtNg	Polarity=Neg	31	advmod	_	_
30	τονε	εγώ	PRON	PnPe	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	obj	_	MGloss=him-euphonic|MSeg=τον-ε
31	παίρνει	παίρνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	conj	_	_
32	και	και	CCONJ	CjCo	_	37	cc	_	_
33	σε	σε	ADP	AsPpSp	_	34	case	_	_
34	ώρα	ώρα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	37	obl	_	_
35	κρίσεως	κρίση	NOUN	NoCm	Case=Gen|Gender=Fem|Number=Sing	34	nmod	_	_
36	να	να	AUX	PtSj	_	37	aux	_	_
37	βγαίνει	βγαίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	conj	_	_
38	κερδεμένος	κερδεμένος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	37	advcl	_	SpaceAfter=No
39	.	.	PUNCT	PTERMP	_	16	punct	_	PunctType=Peri

~~~


