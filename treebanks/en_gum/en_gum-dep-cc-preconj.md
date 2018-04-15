---
layout: base
title:  'Statistics of cc:preconj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-cc.html">cc</a></tt>.

38 nodes (0%) are attached to their parents as `cc:preconj`.

37 instances of `cc:preconj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60526315789474.

The following 13 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (11; 29% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (5; 13% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (5; 13% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (4; 11% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (4; 11% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (2; 5% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cc:preconj	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
2	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	either	either	CCONJ	CC	_	6	cc:preconj	_	_
4	raised	raise	VERB	VBN	Tense=Past|VerbForm=Part	6	amod	_	_
5	coral	coral	NOUN	NN	Number=Sing	6	compound	_	_
6	limestone	limestone	NOUN	NN	Number=Sing	0	root	_	_
7	or	or	CCONJ	CC	_	9	cc	_	_
8	coral	coral	NOUN	NN	Number=Sing	9	compound	_	_
9	atolls	atoll	NOUN	NNS	Number=Plur	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cc:preconj	color:blue
1	F-E	F-E	PROPN	NNP	Number=Sing	2	nsubj	_	_
2	focuses	focus	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	attention	attention	NOUN	NN	Number=Sing	2	obj	_	_
4	on	on	ADP	IN	_	6	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	message	message	NOUN	NN	Number=Sing	2	obl	_	_
7	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nmod:npmod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	_	_
9	in	in	ADP	IN	_	11	case	_	_
10	both	both	PRON	DT	_	11	cc:preconj	_	_
11	form	form	NOUN	NN	Number=Sing	2	obl	_	_
12	and	and	CCONJ	CC	_	13	cc	_	_
13	content	content	NOUN	NN	Number=Sing	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	And	and	CCONJ	CC	_	7	cc	_	_
2	afterwards	afterwards	ADV	RB	_	4	advmod	_	_
3	either	either	CCONJ	CC	_	4	cc:preconj	_	_
4	infected	infect	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	them	them	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	4	obj	_	_
6	or	or	CCONJ	CC	_	7	cc	_	_
7	not	not	PART	RB	_	4	conj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	4	punct	_	_
9	Then	then	ADV	RB	PronType=Dem	15	advmod	_	_
10	for	for	ADP	IN	_	13	case	_	_
11	about	about	ADV	RB	_	12	advmod	_	_
12	two	two	NUM	CD	NumType=Card	13	nummod	_	_
13	weeks	week	NOUN	NNS	Number=Plur	15	obl	_	_
14	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	_
15	count	count	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
16	every	every	DET	DT	_	17	det	_	_
17	day	day	NOUN	NN	Number=Sing	15	obl:tmod	_	_
18	how	how	SCONJ	WRB	PronType=Int	19	advmod	_	_
19	many	many	ADJ	JJ	Degree=Pos	20	amod	_	_
20	ants	ant	NOUN	NNS	Number=Plur	21	nsubj	_	_
21	died	die	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	15	obj	_	SpaceAfter=No
22	.	.	PUNCT	.	_	4	punct	_	_

~~~


