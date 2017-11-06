---
layout: base
title:  'Statistics of compound in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="pt_pud-dep-compound-prt.html">compound:prt</a></tt>.

36 nodes (0%) are attached to their parents as `compound`.

36 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13888888888889.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (17; 47% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (6; 17% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-X.html">X</a></tt> (3; 8% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-X.html">X</a></tt> (3; 8% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-X.html">X</a></tt> (2; 6% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	O	_	DET	PDT	Gender=Masc|Number=Sing	4	det:predet	_	_
2	seu	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	4	det	_	_
3	primeiro	_	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
4	rei	_	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
5	foi	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
6	Mojmir	_	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
7	I	_	ADJ	JJ	Gender=Masc|Number=Sing	6	compound	_	Proper=True
8	(	_	PUNCT	(	_	10	punct	_	SpaceAfter=No
9	que	_	PRON	WP	_	10	nsubj	_	_
10	governou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	_
11	de	_	ADP	IN	_	12	case	_	_
12	830	_	NUM	CD	Gender=Masc	10	obl	_	_
13	a	_	ADP	IN	_	14	case	_	_
14	846	_	NUM	CD	Gender=Masc	12	nmod	_	SpaceAfter=No
15	)	_	PUNCT	)	_	10	punct	_	SpaceAfter=No
16	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound	color:blue
1	Enquanto	_	ADP	IN	_	10	discourse	_	_
2	isso	_	PRON	PDEM	Gender=Masc|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	seu	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	5	det	_	_
5	lugar	_	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj:pass	_	_
6	em	em	ADP	INDT	_	8	case	_	_
7	a	o	DET	_	Gender=Fem|Number=Sing	8	det	_	_
8	tribuna	_	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	_
9	foi	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	10	aux:pass	_	_
10	tomado	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Sing	0	root	_	_
11	por	_	ADP	IN	_	12	case	_	_
12	Marco	_	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	Proper=True
13	Antonio	_	PROPN	NNP	Gender=Masc|Number=Sing	12	compound	_	SpaceAfter=No
14	,	_	PUNCT	,	_	16	punct	_	_
15	quem	_	PRON	WP	_	16	nsubj	_	_
16	ocupou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	12	acl:relcl	_	_
17	a	_	DET	DT	Gender=Fem|Number=Sing	18	det	_	_
18	posição	_	NOUN	NN	Gender=Fem|Number=Sing	16	obj	_	_
19	até	_	ADP	IN	_	20	case	_	_
20	dezembro	_	NOUN	NN	Gender=Masc|Number=Sing	16	obl	_	SpaceAfter=No
21	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound	color:blue
1	Mas	_	CCONJ	CC	_	20	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	17	punct	_	_
3	a	a	ADP	INDT	_	17	mark	_	_
4	a	o	DET	_	Gender=Fem|Number=Sing	3	fixed	_	_
5	medida	_	NOUN	NN	Gender=Fem|Number=Sing	3	fixed	_	_
6	que	_	ADP	IN	_	3	fixed	_	_
7	a	_	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
8	crítica	_	NOUN	NN	Gender=Fem|Number=Sing	17	nsubj	_	_
9	contra	_	ADP	IN	_	10	case	_	_
10	Clinton	_	PROPN	NNP	Gender=Fem|Number=Sing	8	nmod	_	_
11	como	_	ADP	IN	_	12	case	_	_
12	Primeira	_	NOUN	NN	Gender=Fem|Number=Sing	10	nmod	_	_
13	Dama	_	X	GW	_	12	compound	_	_
14	se	_	PRON	SE	Person=3	17	compound:prt	_	_
15	tornou	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	17	cop	_	_
16	mais	_	ADV	RBR	_	17	advmod	_	_
17	ácida	_	ADJ	JJ	Gender=Fem|Number=Sing	20	advcl	_	SpaceAfter=No
18	,	_	PUNCT	,	_	17	punct	_	_
19	Karel	_	PROPN	NNP	Gender=Masc|Number=Sing	20	nsubj	_	_
20	demonstrou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
21	mais	_	ADJ	JJR	Gender=Fem|Number=Sing	22	amod	_	_
22	empatia	_	NOUN	NN	Gender=Fem|Number=Sing	20	obj	_	SpaceAfter=No
23	.	_	PUNCT	.	_	20	punct	_	_

~~~


