---
layout: base
title:  'Statistics of root in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `root`

This relation is universal.

5961 nodes (5%) are attached to their parents as `root`.

5961 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.73796342895487.

The following 15 pairs of parts of speech are connected with `root`: -<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (4192; 70% instances), -<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (920; 15% instances), -<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (372; 6% instances), -<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (335; 6% instances), -<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (45; 1% instances), -<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (32; 1% instances), -<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (29; 0% instances), -<tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt> (19; 0% instances), -<tt><a href="en_gum-pos-X.html">X</a></tt> (7; 0% instances), -<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), -<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (2; 0% instances), -<tt><a href="en_gum-pos-PART.html">PART</a></tt> (2; 0% instances), -<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), -<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), -<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Leading	lead	VERB	VBG	VerbForm=Ger	0	root	_	Discourse=elaboration:2->1
2	Dutch	Dutch	ADJ	JJ	Degree=Pos	3	amod	_	Entity=(person-3
3	Librarians	librarian	NOUN	NNS	Number=Plur	1	obj	_	Entity=person-3)
4	into	into	ADP	IN	_	5	case	_	_
5	DH	DH	PROPN	NNP	Number=Sing	1	obl	_	Entity=(abstract-2)

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Introduction	introduction	NOUN	NN	Number=Sing	0	root	_	Discourse=preparation:1->29|Entity=(abstract-1)

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	However	however	ADV	RB	_	6	advmod	_	Discourse=evaluation:13->8|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	Entity=(event-18)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	not	not	PART	RB	Polarity=Neg	6	advmod	_	_
6	enough	enough	ADJ	JJ	Degree=Pos	0	root	_	_
7	to	to	PART	TO	_	9	mark	_	Entity=(event-18
8	have	have	AUX	VB	VerbForm=Inf	9	aux	_	_
9	attained	attain	VERB	VBN	Tense=Past|VerbForm=Part	6	csubj	_	_
10	such	such	ADJ	JJ	Degree=Pos	12	amod	_	Entity=(abstract-13
11	native-like	native-like	ADJ	JJ	Degree=Pos	12	amod	_	_
12	levels	level	NOUN	NNS	Number=Plur	9	obj	_	Entity=event-18)abstract-13)|SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


