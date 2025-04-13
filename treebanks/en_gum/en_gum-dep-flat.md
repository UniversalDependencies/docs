---
layout: base
title:  'Statistics of flat in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `flat`

This relation is universal.

1893 nodes (1%) are attached to their parents as `flat`.

1893 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31642894875858.

The following 19 pairs of parts of speech are connected with `flat`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1660; 88% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (113; 6% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (49; 3% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (14; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt> (9; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	John	John	PROPN	NNP	Number=Sing	0	root	0:root	Discourse=context-background:56->43:4:grf-ly-+sem-synym-324-350,424-425|Entity=(61-person-giv:inact-cf1-1,2-coref-John_FitzGibbon%2C_2nd_Earl_of_Clare
2	FitzGibbon	Fitzgibbon	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=61)|SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	5:punct	_
4	2nd	2nd	ADJ	JJ	Degree=Pos|NumForm=Combi|NumType=Ord	5	amod	5:amod	Entity=(61-person-giv:act-cf1-2,4-appos-John_FitzGibbon%2C_2nd_Earl_of_Clare
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
1	File	file	NOUN	NN	Number=Sing	2	compound	2:compound	Discourse=context-background:2->9:3:grf-ly-|Entity=(4-abstract-new-cf2-2-coref
2	photo	photo	NOUN	NN	Number=Sing	0	root	0:root	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(5-person-new-cf1-1,2,3-coref-David_Titley|MSeg=interview-ee
5	David	David	PROPN	NNP	Number=Sing	4	flat	4:flat	MSeg=Dav-id
6	Titley	Titley	PROPN	NNP	Number=Sing	4	flat	4:flat	Entity=5)4)|SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Try	try	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=elaboration-additional:44->41:1:sem-rpt-288-290,313-314
2	to	to	PART	TO	_	3	mark	3:mark	_
3	ensure	ensure	VERB	VB	VerbForm=Inf	1	xcomp	1:xcomp	MSeg=en-sure
4	there	there	PRON	EX	PronType=Dem	5	expl	5:expl	_
5	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	3:ccomp	Cxn=Existential-CopPred-ThereExpl
6	an	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(50-abstract-new-cf2-4-sgl
7	al	al	X	FW	_	9	amod	9:amod	XML=<hi rend:::"italic">
8	dente	dente	X	FW	_	7	flat	7:flat	XML=</hi>
9	bite	bite	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	CxnElt=5:Existential-CopPred-ThereExpl.Pivot|Entity=50)
10	to	to	ADP	IN	_	12	case	12:case	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(47-object-giv:act-cf1*-2-coref
12	germ	germ	NOUN	NN	Number=Sing	5	obl	5:obl:to	Entity=47)|SpaceAfter=No
13	,	,	PUNCT	,	_	17	punct	17:punct	_
14	in	in	ADP	IN	_	17	case	17:case	_
15	the	the	DET	DT	Definite=Def|PronType=Art	17	det	17:det	Entity=(51-abstract-new-cf3-3-sgl
16	same	same	ADJ	JJ	Degree=Pos	17	amod	17:amod	_
17	way	way	NOUN	NN	Number=Sing	5	obl	5:obl:in	_
18	as	as	ADP	IN	_	19	case	19:case	_
19	pasta	pasta	NOUN	NN	Number=Sing	17	nmod	17:nmod:as	Entity=(52-substance-new-cf4-1-sgl)51)|SpaceAfter=No
20	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


