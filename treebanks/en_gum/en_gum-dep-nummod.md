---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

1073 nodes (1%) are attached to their parents as `nummod`.

1014 instances of `nummod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.381174277726.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (968; 90% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (46; 4% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (33; 3% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	In	in	ADP	IN	_	3	case	3:case	Discourse=context-circumstance:110->112:1
2	fifteen	fifteen	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Entity=(136-time-new-cf6-2-sgl
3	minutes	minute	NOUN	NNS	Number=Plur	7	nmod	7:nmod:in	Entity=136)
4	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(69-person-giv:inact-cf1-1-ana)
5	would	would	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
7	home	home	ADV	RB	Degree=Pos	0	root	0:root	Entity=(126-place-giv:inact-cf4-1-coref)
8	and	and	CCONJ	CC	_	12	cc	12:cc	Discourse=joint-list_m:111->110:0
9	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	Entity=(25-person-giv:inact-cf3-2-coref(2-person-giv:inact-cf2-1-ana)
10	mother	mother	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Entity=25)
11	would	would	AUX	MD	Number=Sing|Person=3|VerbForm=Fin	12	aux	12:aux	_
12	fry	fry	VERB	VB	VerbForm=Inf	7	conj	7:conj:and	_
13	eggs	egg	NOUN	NNS	Number=Plur	12	obj	12:obj	Entity=(137-object-new-cf5-1-sgl)|SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nummod	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=context-background:117->124:2|Entity=(21-person-giv:inact-cf3-1-ana)
2	spent	spend	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	$	$	SYM	$	_	2	obj	2:obj	Entity=(83-abstract-new-cf2-1-coref|SpaceAfter=No|XML=<w>
4	2	2	NUM	CD	NumForm=Digit|NumType=Card	5	compound	5:compound	XML=</w>
5	trillion	trillion	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Entity=83)
6	in	in	ADP	IN	_	7	case	7:case	_
7	Iraq	Iraq	PROPN	NNP	Number=Sing	2	obl	2:obl:in	Entity=(75-place-giv:act-cf1*-1-coref-Iraq)|SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	9:punct	_
9	$	$	SYM	$	_	2	parataxis	2:parataxis	Entity=(83-abstract-giv:act-cf2-1-coref|SpaceAfter=No|XML=<w>
10	2	2	NUM	CD	NumForm=Digit|NumType=Card	11	compound	11:compound	XML=</w>
11	trillion	trillion	NUM	CD	NumForm=Word|NumType=Card	9	nummod	9:nummod	Entity=83)|SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	A	A	PROPN	NNP	Number=Sing	0	root	0:root	Bridge=106<107|Discourse=elaboration-additional:69->67:1|Entity=(107-organization-acc:inf-cf2-1-sgl|SpaceAfter=No|XML=<hi rend:::"bold"><ref><w>
2	-	-	PUNCT	HYPH	_	3	punct	3:punct	SpaceAfter=No
3	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	dep	1:dep	Entity=107)|XML=</w></ref></hi>
4	2470	2470	NUM	CD	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Entity=(108-place-new-cf3-2,3-sgl
5	Lemoine	Lemoine	PROPN	NNP	Number=Sing	6	compound	6:compound	_
6	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	1:list	Entity=108)|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	8:punct	_
8	tel	telephone	NOUN	NN	Number=Sing	10	nsubj	10:nsubj	Entity=(109-abstract-new-cf1-1-coref)|SpaceAfter=No
9	:	:	PUNCT	:	_	8	punct	8:punct	_
10	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Discourse=elaboration-additional:70->69:0|Entity=(109-abstract-giv:act-cf1-1,2,3-coref
11	201	201	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	_
12	944-3737	944-3737	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	Entity=109)|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


