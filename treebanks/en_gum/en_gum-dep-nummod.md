---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

1374 nodes (1%) are attached to their parents as `nummod`.

1282 instances of `nummod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39737991266376.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1206; 88% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (93; 7% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (42; 3% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (18; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	In	in	ADP	IN	_	3	case	3:case	Discourse=context-circumstance:110->112:1:_|PDTB=Implicit:Temporal.Asynchronous.Precedence:then:_:856-861:862-875
2	fifteen	fifteen	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Entity=(136-time-new-cf6-2-sgl|MSeg=fif-teen
3	minutes	minute	NOUN	NNS	Number=Plur	7	obl	7:obl:in	Entity=136)|MSeg=minute-s
4	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(69-person-giv:inact-cf1-1-ana)
5	would	would	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
6	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
7	home	home	ADV	RB	Degree=Pos	0	root	0:root	Entity=(126-place-giv:inact-cf4-1-coref)
8	and	and	CCONJ	CC	_	12	cc	12:cc	Discourse=joint-list_m:111->110:0:dm-and-869|PDTB=Explicit:Expansion.Conjunction:and:869:862-868:870-875
9	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	Entity=(25-person-giv:inact-cf3-2-coref(2-person-giv:inact-cf2-1-ana)
10	mother	mother	NOUN	NN	Number=Sing	12	nsubj	12:nsubj	Entity=25)
11	would	would	AUX	MD	VerbForm=Fin	12	aux	12:aux	_
12	fry	fry	VERB	VB	VerbForm=Inf	7	conj	7:conj:and	_
13	eggs	egg	NOUN	NNS	Number=Plur	12	obj	12:obj	Entity=(137-object-new-cf5-1-sgl)|MSeg=egg-s|SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Consider	consider	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=organization-preparation:59->63:3:lex-indwd-563
2	what	what	PRON	WP	PronType=Rel	1	obj	1:obj	_
3	$	$	SYM	$	_	10	nsubj	10:nsubj	Entity=(87-abstract-giv:inact-cf1-1-coref(116-abstract-new-cf3-1-sgl
4	5,000	5000	NUM	CD	NumForm=Digit|NumType=Card	3	nummod	3:nummod	Entity=116)
5	per	per	ADP	IN	_	6	case	6:case	_
6	person	person	NOUN	NN	Number=Sing	3	nmod	3:nmod:per	Entity=(105-person-giv:inact-cf2-1-coref)
7	per	per	ADP	IN	_	8	case	8:case	_
8	year	year	NOUN	NN	Number=Sing	3	nmod	3:nmod:per	Entity=(117-time-new-cf4-1-sgl)87)
9	would	would	AUX	MD	VerbForm=Fin	10	aux	10:aux	_
10	mean	mean	VERB	VB	VerbForm=Inf	2	acl:relcl	2:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	A	A	PROPN	NNP	Number=Sing	0	root	0:root	Bridge=106<107|Discourse=elaboration-additional:69->67:1:sem-mrnym-609-615,617-619|Entity=(107-organization-acc:inf-cf2-1-sgl|SpaceAfter=No|XML=<hi rend:::"bold"><ref><w>
2	-	-	PUNCT	HYPH	_	3	punct	3:punct	SpaceAfter=No
3	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	dep	1:dep	Entity=107)|XML=</w></ref></hi>
4	2470	2470	NUM	CD	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Entity=(108-place-new-cf3-2,3-sgl
5	Lemoine	Lemoine	PROPN	NNP	Number=Sing	6	compound	6:compound	_
6	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	1:list	Entity=108)|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	8:punct	_
8	tel	telephone	NOUN	NN	Number=Sing	10	nsubj	10:nsubj	Entity=(109-abstract-new-cf1-1-coref)|SpaceAfter=No
9	:	:	PUNCT	:	_	8	punct	8:punct	_
10	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Discourse=elaboration-additional:70->69:0:sem-synym-624,626-628+grf-col-625|Entity=(109-abstract-giv:act-cf1-1,2,3-coref
11	201	201	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	_
12	944-3737	944-3737	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	Entity=109)|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


