---
layout: base
title:  'Statistics of advcl in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `advcl`

This relation is universal.

118 nodes (1%) are attached to their parents as `advcl`.

77 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.99152542372881.

The following 8 pairs of parts of speech are connected with `advcl`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (82; 69% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (16; 14% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 17 advcl	color:blue
1	Porém	_	CCONJ	CC	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	eles	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Plur|Person=3	5	nsubj	_	_
4	não	não	ADV	RB	Polarity=Neg	5	advmod	_	_
5	expandiram	expandir	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
6	até	até	ADV	RB	_	17	mark	_	_
7	que	_	ADP	IN	_	6	fixed	_	_
8	navios	navio	NOUN	NN	Gender=Masc|Number=Plur	17	nsubj:pass	_	_
9	grandes	grande	ADJ	JJ	Gender=Masc|Number=Plur	8	amod	_	_
10	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	suficiente	suficiente	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	_
12	para	para	ADP	IN	_	13	case	_	_
13	cruzar	_	VERB	VB	_	9	xcomp	_	_
14	os	o	DET	DT	Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	mares	mar	NOUN	NN	Gender=Masc|Number=Plur	13	obj	_	_
16	fossem	_	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Past	17	aux:pass	_	_
17	contruídos	_	VERB	VBN	Gender=Masc|Number=Plur	5	advcl	_	SpaceAfter=No
18	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advcl	color:blue
1	Em	_	ADP	IN	_	2	case	_	_
2	teoria	teoria	NOUN	NN	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	se	_	SCONJ	IN	_	7	mark	_	_
5	for	_	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Fut	7	aux:pass	_	_
6	bem	bem	ADV	RB	_	7	advmod	_	_
7	feito	_	VERB	VBN	Gender=Masc|Number=Sing	11	advcl	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	não	não	ADV	RB	Polarity=Neg	11	advmod	_	_
10	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
11	detectável	detectável	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 advcl	color:blue
1	É	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
2	mais	mais	ADV	RBR	_	3	advmod	_	_
3	óbvio	óbvio	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
4	quando	_	SCONJ	IN	_	15	mark	_	_
5	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	nome	nome	NOUN	NN	Gender=Masc|Number=Sing	15	nsubj	_	_
7	de	de	ADP	IN	_	9	case	_	_
8	uma	um	DET	DT	Gender=Fem|Number=Sing	9	det	_	_
9	celebridade	celebridade	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	_
10	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	15	cop	_	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	_	_
12	inicialmente	inicialmente	ADV	RB	_	15	advmod	_	SpaceAfter=No
13	,	,	PUNCT	,	_	12	punct	_	_
14	bastante	bastante	ADV	RB	_	15	advmod	_	_
15	raro	raro	ADJ	JJ	Gender=Masc|Number=Sing	3	advcl	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


