---
layout: base
title:  'Statistics of det in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="en_gum-dep-det-predet.html">det:predet</a></tt>.

9494 nodes (8%) are attached to their parents as `det`.

9488 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58605435011586.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (8335; 88% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (930; 10% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (140; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (39; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (16; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (15; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	In	in	ADP	IN	_	3	case	_	Discourse=elaboration:70->65
2	his	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	_	Entity=(abstract-96(person-90)
3	memory	memory	NOUN	NN	Number=Sing	5	obl	_	Entity=abstract-96)
4	Byron	Byron	PROPN	NNP	Number=Sing	5	nsubj	_	Entity=(person-3)
5	composed	compose	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	Thyrza	Thyrza	PROPN	NNP	Number=Sing	5	obj	_	Entity=(abstract-97)|SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	Entity=(abstract-97
9	series	series	NOUN	NN	Number=Sing	6	appos	_	_
10	of	of	ADP	IN	_	11	case	_	_
11	elegies	elegy	NOUN	NNS	Number=Plur	9	nmod	_	Entity=abstract-97)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_
13	[	[	PUNCT	-LSB-	_	14	punct	_	Discourse=evidence:71->70|SpaceAfter=No
14	25	25	NUM	CD	NumType=Card	5	dep	_	Entity=(abstract-98)|SpaceAfter=No
15	]	]	PUNCT	-RSB-	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det	color:blue
1	—	—	PUNCT	:	_	2	punct	_	Discourse=attribution:60->54
2	NORTON	Norton	PROPN	NNP	Number=Sing	0	root	_	Entity=(abstract-102(person-1
3	I	I	NUM	NNP	Number=Sing	2	nummod	_	Entity=person-1)|SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	_
5	Emperor	Emperor	PROPN	NNP	Number=Sing	2	appos	_	Entity=(person-1
6	of	of	ADP	IN	_	9	case	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	Entity=(place-8
8	United	United	PROPN	NNP	Number=Sing	9	amod	_	_
9	States	States	PROPN	NNPS	Number=Plur	5	nmod	_	Entity=abstract-102)person-1)place-8)|SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	By	by	ADP	IN	_	2	case	_	Discourse=elaboration:68->65
2	far	far	ADV	RB	Degree=Pos	10	nmod	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	Entity=(abstract-121
4	most	most	ADV	RBS	_	5	advmod	_	_
5	successful	successful	ADJ	JJ	Degree=Pos	10	nsubj	_	_
6	of	of	ADP	IN	_	8	case	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	_	Entity=(abstract-122
8	operas	opera	NOUN	NNS	Number=Plur	5	obl	_	Entity=abstract-121)abstract-122)
9	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	Rusalka	Rusalka	PROPN	NNP	Number=Sing	0	root	_	Entity=(abstract-121)|SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


