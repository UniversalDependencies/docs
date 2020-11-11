---
layout: base
title:  'Statistics of mark in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `mark`

This relation is universal.

249 nodes (1%) are attached to their parents as `mark`.

249 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.55421686746988.

The following 9 pairs of parts of speech are connected with `mark`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-SCONJ.html">SCONJ</a></tt> (196; 79% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-SCONJ.html">SCONJ</a></tt> (19; 8% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-SCONJ.html">SCONJ</a></tt> (14; 6% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (8; 3% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	É	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
2	justo	justo	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
3	dizer	_	VERB	VB	_	2	csubj	_	_
4	que	que	SCONJ	IN	_	7	mark	_	_
5	Rocco	Rocco	PROPN	NNP	Gender=Masc|Number=Sing	7	nsubj	_	_
6	Catalano	Catalano	PROPN	NNP	Gender=Masc|Number=Sing	5	flat:name	_	_
7	trabalha	trabalhar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	_	_
9	vive	viver	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	respira	respirar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	conj	_	_
12	retro	retro	NOUN	NN	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Vamos	ir	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	3	aux	_	_
2	simplesmente	simplesmente	ADV	RB	_	3	advmod	_	_
3	dizer	_	VERB	VB	_	0	root	_	_
4	que	que	SCONJ	IN	_	7	mark	_	_
5	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
6	está	estar	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	cop	_	_
7	errado	errado	ADJ	JJ	Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 mark	color:blue
1	Porque	_	SCONJ	IN	_	9	mark	_	_
2	a	o	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	série	série	NOUN	NN	Gender=Fem|Number=Sing	9	nsubj	_	_
4	1	_	NUM	CD	Gender=Masc	3	appos	_	_
5	não	não	ADV	RB	Polarity=Neg	9	advmod	_	_
6	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	cop	_	_
7	a	o	DET	DT	Gender=Fem|Number=Sing	9	det	_	_
8	mais	_	ADJ	JJS	Gender=Fem|Number=Sing	9	amod	_	_
9	antiga	antigo	NOUN	NN	Gender=Fem|Number=Sing	13	advcl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	_	_
11	muitos	_	DET	DT	Gender=Masc|Number=Plur	12	det	_	_
12	usuários	usuário	NOUN	NN	Gender=Masc|Number=Plur	13	nsubj	_	_
13	conseguem	conseguir	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
14	economizar	_	VERB	VB	_	13	xcomp	_	_
15	100	_	NUM	CD	_	16	nummod	_	_
16	Euros	euro	NOUN	NN	Gender=Masc|Number=Plur	14	obj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	13	punct	_	_

~~~


