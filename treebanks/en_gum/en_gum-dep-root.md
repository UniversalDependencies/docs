---
layout: base
title:  'Statistics of root in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `root`

This relation is universal.

7397 nodes (5%) are attached to their parents as `root`.

7397 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.57685548195214.

The following 15 pairs of parts of speech are connected with `root`: -<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (5037; 68% instances), -<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1074; 15% instances), -<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (497; 7% instances), -<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (387; 5% instances), -<tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt> (139; 2% instances), -<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (100; 1% instances), -<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (77; 1% instances), -<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (47; 1% instances), -<tt><a href="en_gum-pos-X.html">X</a></tt> (12; 0% instances), -<tt><a href="en_gum-pos-DET.html">DET</a></tt> (10; 0% instances), -<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (6; 0% instances), -<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (5; 0% instances), -<tt><a href="en_gum-pos-PART.html">PART</a></tt> (3; 0% instances), -<tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Leading	lead	VERB	VBG	VerbForm=Ger	0	root	0:root	Discourse=elaboration:2->1:0
2	Dutch	Dutch	ADJ	JJ	Degree=Pos	3	amod	3:amod	Entity=(person-3-new-2-sgl
3	Librarians	librarian	NOUN	NNS	Number=Plur	1	obj	1:obj	Entity=3)
4	into	into	ADP	IN	_	5	case	5:case	_
5	DH	DH	PROPN	NNP	Abbr=Yes|Number=Sing	1	obl	1:obl:into	Entity=(abstract-2-giv:act-1-coref-Digital_humanities)

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Introduction	introduction	NOUN	NN	Number=Sing	0	root	0:root	Discourse=preparation:1->29:3|Entity=(abstract-1-new-1-sgl)

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	However	however	ADV	RB	_	6	advmod	6:advmod	Discourse=evaluation:13->8:3|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	6:expl	Entity=(event-18-new-1-cata)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
5	not	not	PART	RB	Polarity=Neg	6	advmod	6:advmod	_
6	enough	enough	ADJ	JJ	Degree=Pos	0	root	0:root	_
7	to	to	PART	TO	_	9	mark	9:mark	Entity=(event-18-acc:com-3-coref
8	have	have	AUX	VB	VerbForm=Inf	9	aux	9:aux	_
9	attained	attain	VERB	VBN	Tense=Past|VerbForm=Part	6	csubj	6:csubj	_
10	such	such	ADJ	JJ	Degree=Pos	14	amod	14:amod	Entity=(abstract-13-giv:act-5-coref
11	native	native	NOUN	NN	Number=Sing	13	compound	13:compound	SpaceAfter=No|XML=<w>
12	-	-	PUNCT	HYPH	_	11	punct	11:punct	SpaceAfter=No
13	like	like	ADJ	JJ	Degree=Pos	14	amod	14:amod	XML=</w>
14	levels	level	NOUN	NNS	Number=Plur	9	obj	9:obj	Entity=13)18)|SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


