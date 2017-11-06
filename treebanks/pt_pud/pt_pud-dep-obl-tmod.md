---
layout: base
title:  'Statistics of obl:tmod in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-obl.html">obl</a></tt>.

36 nodes (0%) are attached to their parents as `obl:tmod`.

28 instances of `obl:tmod` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (16; 44% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (9; 25% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (3; 8% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (2; 6% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obl:tmod	color:blue
1	Dia	_	NOUN	NN	Gender=Masc|Number=Sing	5	obl:tmod	_	_
2	três	_	NUM	CD	_	1	nummod	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	eu	_	PRON	PRP	Case=Nom|Number=Sing|Person=1	5	nsubj	_	_
5	estava	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
6	de	_	ADP	IN	_	7	case	_	_
7	volta	_	NOUN	NN	Gender=Fem|Number=Sing	5	obl	_	_
8	em	em	ADP	INDT	_	10	case	_	_
9	o	o	DET	_	Gender=Masc|Number=Sing	10	det	_	_
10	EMicro	_	PROPN	NNP	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
11	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 obl:tmod	color:blue
1	Ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	obteve	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	um	_	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
4	Mestrado	_	NOUN	NN	Gender=Masc|Number=Sing	2	obj	_	_
5	(	_	PUNCT	(	_	7	punct	_	SpaceAfter=No
6	em	_	ADP	IN	_	7	case	_	_
7	Artes	_	NOUN	NN	Gender=Fem|Number=Plur	4	nmod	_	Proper=True|SpaceAfter=No
8	)	_	PUNCT	)	_	7	punct	_	_
9	em	_	ADP	IN	_	10	case	_	_
10	21	_	NUM	CD	Gender=Masc	2	obl	_	_
11	abril	_	NOUN	NN	Gender=Masc|Number=Sing	10	obl:tmod	_	_
12	1882	_	NUM	CD	Gender=Masc	11	obl:tmod	_	SpaceAfter=No
13	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 obl:tmod	color:blue
1	De	_	ADP	IN	_	6	case	_	_
2	acordo	_	NOUN	NN	Gender=Masc|Number=Sing	1	fixed	_	_
3	com	_	ADP	IN	_	1	fixed	_	_
4	o	_	DET	DT	Gender=Masc|Number=Sing	6	det	_	_
5	Novo	_	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	Proper=True
6	Testamento	_	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	Proper=True|SpaceAfter=No
7	,	_	PUNCT	,	_	6	punct	_	_
8	Paulo	_	PROPN	NNP	Gender=Masc|Number=Sing	9	nsubj	_	_
9	passou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
10	dezoito	_	NUM	CD	_	11	nummod	_	_
11	meses	_	NOUN	NN	Gender=Masc|Number=Plur	9	obl:tmod	_	_
12	em	_	ADP	IN	_	13	case	_	_
13	Corinto	_	PROPN	NNP	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
14	,	_	PUNCT	,	_	18	punct	_	_
15	aproximadamente	_	ADV	RB	_	16	advmod	_	_
16	dezessete	_	NUM	CD	_	17	nummod	_	_
17	anos	_	NOUN	NN	Gender=Masc|Number=Plur	18	obl:tmod	_	_
18	depois	_	ADV	RB	_	9	advmod	_	_
19	de	de	ADP	INDT	_	22	case	_	_
20	a	o	DET	_	Gender=Fem|Number=Sing	22	det	_	_
21	sua	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	22	det	_	_
22	conversão	_	NOUN	NN	Gender=Fem|Number=Sing	18	obl	_	SpaceAfter=No
23	.	_	PUNCT	.	_	9	punct	_	_

~~~


