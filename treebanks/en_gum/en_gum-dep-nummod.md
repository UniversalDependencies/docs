---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

921 nodes (1%) are attached to their parents as `nummod`.

865 instances of `nummod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37024972855592.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (831; 90% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (35; 4% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (35; 4% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	In	in	ADP	IN	_	3	case	3:case	Discourse=circumstance:110->112:1
2	fifteen	fifteen	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Entity=(time-136-new-2-sgl
3	minutes	minute	NOUN	NNS	Number=Plur	7	nmod	7:nmod:in	Entity=136)
4	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(person-69-giv:inact-1-ana)
5	would	would	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
7	home	home	ADV	RB	Degree=Pos	0	root	0:root	Entity=(place-126-giv:inact-1-coref)
8	and	and	CCONJ	CC	_	12	cc	12:cc	Discourse=sequence_m:111->110:0
9	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	Entity=(person-25-giv:inact-2-coref(person-2-giv:inact-1-ana)
10	mother	mother	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Entity=25)
11	would	would	AUX	MD	Number=Sing|Person=3|VerbForm=Fin	12	aux	12:aux	_
12	fry	fry	VERB	VB	VerbForm=Inf	7	conj	7:conj:and	_
13	eggs	egg	NOUN	NNS	Number=Plur	12	obj	12:obj	Entity=(object-137-new-1-sgl)|SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	A	A	PROPN	NNP	Number=Sing	0	root	0:root	Bridge=106<107|Discourse=elaboration:69->67:1|Entity=(organization-107-acc:inf-1-sgl|SpaceAfter=No|XML=<hi rend:::"bold"><ref><w>
2	-	-	PUNCT	HYPH	_	3	punct	3:punct	SpaceAfter=No
3	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	dep	1:dep	Entity=107)|XML=</w></ref></hi>
4	2470	2470	NUM	CD	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Entity=(place-108-new-2,3-sgl
5	Lemoine	Lemoine	PROPN	NNP	Number=Sing	6	compound	6:compound	_
6	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	1:list	Entity=108)|SpaceAfter=No
7	,	,	PUNCT	,	_	10	punct	10:punct	_
8	tel	telephone	NOUN	NN	Number=Sing	10	nsubj	10:nsubj	Entity=(abstract-109-new-1-coref)|SpaceAfter=No
9	:	:	PUNCT	:	_	8	punct	8:punct	_
10	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Discourse=elaboration:70->69:0|Entity=(abstract-109-giv:act-1,2,3-coref
11	201	201	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	_
12	944-3737	944-3737	NUM	CD	NumForm=Word|NumType=Card	10	flat	10:flat	Entity=109)|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	Through	through	ADP	IN	_	2	case	2:case	Discourse=evidence:53->52:0
2	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	5	obl	5:obl:through	Entity=(organization-67-giv:act-1-ana)
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Entity=(event-58-giv:inact-1-ana)
4	may	may	AUX	MD	VerbForm=Fin	5	aux	5:aux	_
5	cost	cost	VERB	VB	VerbForm=Inf	0	root	0:root	_
6	£	£	SYM	SYM	_	5	obj	5:obj	Entity=(abstract-69-new-1-sgl|XML=<measure type:::"currency">
7	20	20	NUM	CD	NumForm=Digit|NumType=Card	6	nummod	6:nummod	Entity=69)|XML=</measure>
8	in	in	ADP	IN	_	9	case	9:case	_
9	total	total	NOUN	NN	Number=Sing	5	obl	5:obl:in	_
10	per	per	ADP	IN	_	11	case	11:case	_
11	person	person	NOUN	NN	Number=Sing	9	nmod	9:nmod:per	Entity=(person-70-new-1-sgl)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


