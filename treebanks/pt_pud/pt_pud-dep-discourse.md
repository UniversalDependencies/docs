---
layout: base
title:  'Statistics of discourse in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `discourse`

This relation is universal.

94 nodes (0%) are attached to their parents as `discourse`.

88 instances of `discourse` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.5.

The following 14 pairs of parts of speech are connected with `discourse`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (34; 36% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (23; 24% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (12; 13% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (5; 5% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (4; 4% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (3; 3% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	E	_	CCONJ	CC	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	,	_	3	punct	_	_
3	claro	claro	ADV	RB	_	5	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	tem	ter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	o	o	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	Bob	Bob	PROPN	NNP	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	uma	um	DET	DT	Gender=Fem|Number=Sing	11	det	_	_
10	constante	constante	ADJ	JJ	Gender=Fem|Number=Sing	11	amod	_	_
11	fonte	fonte	NOUN	NN	Gender=Fem|Number=Sing	7	appos	_	_
12	de	de	ADP	IN	_	13	case	_	_
13	entretenimento	entretenimento	NOUN	NN	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 discourse	color:blue
1	Penso	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
2	que	que	SCONJ	IN	_	3	mark	_	_
3	é	ser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
4	por	por	ADP	IN	_	3	discourse	_	_
5	isso	_	PRON	PDEM	Gender=Masc|Number=Sing	4	fixed	_	_
6	que	que	SCONJ	IN	_	9	mark	_	_
7	eles	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Plur|Person=3	9	nsubj	_	_
8	se	_	PRON	SE	Person=3	9	expl:pv	_	_
9	imergiram	imergir	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	3	ccomp	_	_
10	em	em	ADP	IN	_	11	case	_	_
11	padrões	padrão	NOUN	NN	Gender=Masc|Number=Plur	9	obl	_	_
12	e	e	CCONJ	CC	_	13	cc	_	_
13	cor	cor	NOUN	NN	Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Ainda	ainda	ADV	RB	_	4	discourse	_	_
2	assim	assim	ADV	RB	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	,	_	1	punct	_	_
4	há	haver	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	perguntas	pergunta	NOUN	NN	Gender=Fem|Number=Plur	4	obj	_	_
6	deixadas	_	VERB	VBN	Gender=Fem|Number=Plur	5	acl	_	_
7	sem	_	ADP	IN	_	8	case	_	_
8	resposta	resposta	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	_	_

~~~


