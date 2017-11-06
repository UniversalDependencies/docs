---
layout: base
title:  'Statistics of mark in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `mark`

This relation is universal.

555 nodes (3%) are attached to their parents as `mark`.

555 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.4954954954955.

The following 14 pairs of parts of speech are connected with `mark`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PART.html">PART</a></tt> (246; 44% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (238; 43% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (18; 3% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (13; 2% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (8; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-PART.html">PART</a></tt> (7; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PART.html">PART</a></tt> (7; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	SpaceAfter=No
2	’re	’re	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	usually	usually	ADV	RB	_	4	advmod	_	_
4	artists	artist	NOUN	NNS	Number=Plur	0	root	_	_
5	who	who	PRON	WP	PronType=Rel	6	nsubj	_	_
6	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	to	to	PART	TO	_	8	mark	_	_
8	do	do	VERB	VB	VerbForm=Inf	6	xcomp	_	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	_	_
10	bunch	bunch	NOUN	NN	Number=Sing	8	obj	_	_
11	of	of	ADP	IN	_	12	case	_	_
12	stuff	stuff	NOUN	NN	Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	His	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	skill	skill	NOUN	NN	Number=Sing	11	nsubj:pass	_	_
3	in	in	SCONJ	IN	_	4	mark	_	_
4	getting	get	VERB	VBG	VerbForm=Ger	2	acl	_	_
5	answers	answer	NOUN	NNS	Number=Plur	4	obj	_	_
6	for	for	ADP	IN	_	7	case	_	_
7	taxpayers	taxpayer	NOUN	NNS	Number=Plur	4	obl	_	_
8	will	will	AUX	MD	VerbForm=Fin	11	aux	_	_
9	be	be	AUX	VB	VerbForm=Inf	11	aux:pass	_	_
10	sorely	sorely	ADV	RB	_	11	advmod	_	_
11	missed	miss	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 mark	color:blue
1	Because	because	SCONJ	IN	_	9	mark	_	_
2	series	series	NOUN	NN	Number=Sing	9	nsubj	_	_
3	1	1	NUM	CD	NumType=Card	2	nummod	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
5	no	no	ADV	RB	Polarity=Neg	6	advmod	_	_
6	longer	longer	ADV	RBR	Degree=Cmp	9	advmod	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
8	old	old	ADJ	JJ	Degree=Pos	9	amod	_	_
9	one	one	NOUN	NN	Number=Sing	14	advcl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	14	punct	_	_
11	many	many	ADJ	JJ	Degree=Pos	12	amod	_	_
12	users	user	NOUN	NNS	Number=Plur	14	nsubj	_	_
13	can	can	AUX	MD	VerbForm=Fin	14	aux	_	_
14	save	save	VERB	VB	VerbForm=Inf	0	root	_	_
15	100	100	NUM	CD	NumType=Card	16	nummod	_	_
16	euros	euro	NOUN	NNS	Number=Plur	14	obj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	14	punct	_	_

~~~


