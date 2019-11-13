---
layout: base
title:  'Statistics of obl:npmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-tmod.html">obl:tmod</a></tt>.

131 nodes (0%) are attached to their parents as `obl:npmod`.

78 instances of `obl:npmod` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.51908396946565.

The following 14 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (50; 38% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (30; 23% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (21; 16% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (7; 5% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:npmod	color:blue
1	“	"	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
3	sort	sort	NOUN	NN	Number=Sing	5	obl:npmod	_	_
4	of	of	ADP	IN	_	3	fixed	_	_
5	tolerate	tolerate	VERB	VB	VerbForm=Inf	0	root	_	_
6	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl:npmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	took	take	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	Oath	oath	NOUN	NN	Number=Sing	2	obj	_	_
5	to	to	ADP	TO	_	7	case	_	_
6	our	our	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	_	_
7	Constitution	Constitution	PROPN	NNP	Number=Sing	4	nmod	_	_
8	at	at	ADP	IN	_	11	case	_	_
9	22	@card@	NUM	CD	NumType=Card	10	nummod	_	_
10	years	year	NOUN	NNS	Number=Plur	11	obl:npmod	_	_
11	old	old	ADJ	JJ	Degree=Pos	2	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:npmod	color:blue
1	Hopefully	hopefully	ADV	RB	_	5	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	all	all	PRON	DT	_	5	obl:npmod	_	_
5	learn	learn	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	from	from	ADP	IN	_	8	case	_	_
7	past	past	ADJ	JJ	Degree=Pos	8	amod	_	_
8	mistakes	mistake	NOUN	NNS	Number=Plur	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	5	punct	_	_

~~~


