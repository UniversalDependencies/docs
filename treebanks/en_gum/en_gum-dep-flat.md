---
layout: base
title:  'Statistics of flat in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `flat`

This relation is universal.

1431 nodes (1%) are attached to their parents as `flat`.

1431 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.361285814116.

The following 16 pairs of parts of speech are connected with `flat`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1242; 87% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (113; 8% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (27; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	John	John	PROPN	NNP	Number=Sing	0	root	0:root	Discourse=background:55->42:4|Entity=(person-61-giv:inact-1,2-coref-John_FitzGibbon%2C_2nd_Earl_of_Clare
2	FitzGibbon	Fitzgibbon	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=61)|SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	5:punct	_
4	2nd	2nd	ADJ	JJ	Degree=Pos|NumType=Ord	5	amod	5:amod	Entity=(person-61-giv:act-2,4-appos-John_FitzGibbon%2C_2nd_Earl_of_Clare
5	Earl	Earl	PROPN	NNP	Number=Sing	1	appos	1:appos	_
6	of	of	ADP	IN	_	7	case	7:case	_
7	Clare	Clare	PROPN	NNP	Number=Sing	5	nmod	5:nmod:of	Entity=61)

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	File	file	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=background:2->9:3|Entity=(abstract-4-new-2-coref
2	photo	photo	NOUN	NN	Number=Sing	0	root	0:root	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(person-5-new-1,2,3-coref-David_Titley
5	David	David	PROPN	NNP	Number=Sing	4	flat	4:flat	_
6	Titley	Titley	PROPN	NNP	Number=Sing	4	flat	4:flat	Entity=5)4)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 flat	color:blue
1	Moreau	Moreau	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj|5:nsubj:xsubj	Discourse=sequence_m:101->84:0|Entity=(person-1-giv:inact-1-coref-Jeanne_Moreau)
2	went	go	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	on	on	ADP	RP	_	2	compound:prt	2:compound:prt	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	work	work	VERB	VB	VerbForm=Inf	2	xcomp	2:xcomp	_
6	with	with	ADP	IN	_	7	case	7:case	_
7	many	many	ADJ	JJ	Degree=Pos	5	obl	5:obl:with	Entity=(person-163-new-1,6-sgl
8	of	of	ADP	IN	_	18	case	18:case	_
9	the	the	DET	DT	Definite=Def|PronType=Art	18	det	18:det	Entity=(person-164-new-4,10-sgl
10	best	well	ADV	RBS	Degree=Sup	11	advmod	11:advmod	_
11	known	know	VERB	VBN	Tense=Past|VerbForm=Part	18	amod	18:amod	_
12	New	New	ADJ	NNP	Degree=Pos	13	amod	13:amod	Entity=(abstract-165-new-1,2-coref-French_New_Wave|XML=<ref target:::"https://en.wikipedia.org/wiki/French_New_Wave">
13	Wave	Wave	PROPN	NNP	Number=Sing	18	compound	18:compound	Entity=165)|XML=</ref>
14	and	and	CCONJ	CC	_	15	cc	15:cc	_
15	avant	avant	X	FW	_	13	amod	13:amod	SpaceAfter=No|XML=<w>
16	-	-	PUNCT	HYPH	_	17	punct	17:punct	SpaceAfter=No
17	garde	garde	X	FW	_	15	flat	15:flat	XML=</w>
18	directors	director	NOUN	NNS	Number=Plur	7	nmod	7:nmod:of	Entity=164)163)|SpaceAfter=No
19	.	.	PUNCT	.	_	2	punct	2:punct	_
20	[	[	PUNCT	-LRB-	_	21	punct	21:punct	Discourse=evidence:102->101:0|SpaceAfter=No|XML=<ref>
21	2	2	NUM	CD	NumForm=Digit|NumType=Card	2	dep	2:dep	Entity=(abstract-95-giv:inact-1-coref)|SpaceAfter=No
22	]	]	PUNCT	-RRB-	_	21	punct	21:punct	XML=</ref>

~~~


