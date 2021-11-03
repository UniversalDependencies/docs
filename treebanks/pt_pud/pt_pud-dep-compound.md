---
layout: base
title:  'Statistics of compound in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `compound`

This relation is universal.

20 nodes (0%) are attached to their parents as `compound`.

20 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (13; 65% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-X.html">X</a></tt> (3; 15% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	O	o	DET	PDT	Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
2	seu	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	4	det	_	_
3	primeiro	primeiro	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
4	rei	rei	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
5	foi	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
6	Mojmir	Mojmir	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
7	I	_	ADJ	JJ	Gender=Masc|Number=Sing	6	compound	_	Proper=True
8	(	(	PUNCT	(	_	10	punct	_	SpaceAfter=No
9	que	_	PRON	WP	_	10	nsubj	_	_
10	governou	governar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	_
11	de	de	ADP	IN	_	12	case	_	_
12	830	_	NUM	CD	Gender=Masc	10	obl	_	_
13	a	_	ADP	IN	_	14	case	_	_
14	846	_	NUM	CD	Gender=Masc	12	nmod	_	SpaceAfter=No
15	)	)	PUNCT	)	_	10	punct	_	SpaceAfter=No
16	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound	color:blue
1	A	o	DET	DT	Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Revolução	revolução	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj	_	Proper=True
3	Industrial	industrial	ADJ	JJ	Gender=Fem|Number=Sing	2	amod	_	Proper=True
4	aconteceu	acontecer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	antes	antes	ADV	RB	_	4	advmod	_	_
6	em	em	ADP	INDT	_	8	case	_	_
7	a	o	DET	_	Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Grã	Grã	PROPN	NNP	Gender=Fem|Number=Sing	5	obl	_	_
9	Bretanha	_	X	GW	_	8	compound	_	Proper=True
10	de	de	ADP	INDT	_	5	case	_	_
11	o	o	DET	_	Gender=Masc|Number=Sing	5	det	_	_
12	que	_	ADP	IN	_	16	case	_	ToDo=ex-adp-child
13	em	em	ADP	IN	_	16	case	_	_
14	qualquer	_	DET	PDT	Gender=Masc|Number=Sing	16	det	_	_
15	outro	_	DET	DT	Gender=Masc|Number=Sing	16	det	_	_
16	país	país	NOUN	NN	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 compound	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Dupla	dupla	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	fez	fazer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	uma	um	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	pegadinha	_	NOUN	NN	Gender=Fem|Number=Sing	3	obj	_	_
6	a	a	ADP	INDT	_	8	case	_	_
7	o	o	DET	_	Gender=Masc|Number=Sing	8	det	_	_
8	entrar	_	VERB	VB	_	3	xcomp	_	_
9	em	em	ADP	INDT	_	11	case	_	_
10	o	o	DET	_	Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	torneio	torneio	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	_
12	de	de	ADP	IN	_	13	case	_	_
13	golfe	golfe	NOUN	NN	Gender=Masc|Number=Sing	11	nmod	_	_
14	norte	norte	ADJ	JJ	Gender=Masc|Number=Sing	11	amod	_	_
15	coreano	coreano	ADJ	_	Gender=Masc|Number=Sing	14	compound	_	_
16	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
17	,	,	PUNCT	,	_	18	punct	_	_
18	saiu	sair	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	parataxis	_	_
19	em	em	ADP	INDT	_	21	case	_	_
20	as	o	DET	_	Gender=Fem|Number=Plur|PronType=Art	21	det	_	_
21	notícias	notícia	NOUN	NN	Gender=Fem|Number=Plur	18	obl	_	_
22	de	de	ADP	INDT	_	24	case	_	_
23	o	o	DET	_	Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	Brisbane's	Brisbane's	PROPN	NNP	Gender=Masc|Number=Sing	21	nmod	_	_
25	Nine	Nine	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	24	flat	_	SpaceAfter=No
26	.	.	PUNCT	.	_	3	punct	_	_

~~~


