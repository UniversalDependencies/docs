---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

1466 nodes (1%) are attached to their parents as `nummod`.

1401 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40518417462483.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1300; 89% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (106; 7% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (30; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (19; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	For	for	ADP	IN	_	3	case	3:case	Discourse=organization-preparation:69->73:3:num-count-522|PDTB=Implicit:Comparison.Concession.Arg2-as-denier:but:_:501-520:521-531
2	one	one	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	_
3	thing	thing	NOUN	NN	Number=Sing	6	obl	6:obl:for	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	3:punct	_
5	there	there	PRON	EX	PronType=Dem	6	expl	6:expl	_
6	’s	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Existential-CopPred-ThereExpl
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(100-abstract-new-nnnnn-cf1-2-sgl
8	matter	matter	NOUN	NN	Number=Sing	6	nsubj	6:nsubj	CxnElt=6:Existential-CopPred-ThereExpl.Pivot
9	of	of	ADP	IN	_	10	case	10:case	_
10	agency	agency	NOUN	NN	Number=Sing	8	nmod	8:nmod:of	Entity=(101-abstract-new-nnnnn-cf2-1-sgl)100)|MSeg=agen-cy|SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Now	now	ADV	RB	_	7	advmod	7:advmod	Discourse=adversative-contrast_m:34->33:0:_|PDTB=Implicit:Comparison.Contrast:but:_:235-253:254-261
2	about	about	ADV	RB	_	3	advmod	3:advmod	Entity=(54-organization-new-nnnnn-cf2-3-sgl
3	15	15	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	SpaceAfter=No
4	%	%	SYM	NN	Number=Sing	7	nsubj	7:nsubj	_
5	of	of	ADP	IN	_	6	case	6:case	_
6	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	4	nmod	4:nmod:of	Entity=(52-organization-giv:act-nnnnn-cf1*-1-ana)54)
7	do	do	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	A	A	PROPN	NNP	Number=Sing	0	root	0:root	Bridge=106<107|Discourse=elaboration-additional:69->67:1:sem-mrnym-609-615,617-619|Entity=(107-organization-acc:inf-nnnnn-cf2-1,3-sgl|SpaceAfter=No|XML=<hi rend:::"bold"><ref><w>
2	-	-	PUNCT	HYPH	_	3	punct	3:punct	SpaceAfter=No
3	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	flat	1:flat	Entity=107)|XML=</w></ref></hi>
4	2470	2470	NUM	CD	NumForm=Digit|NumType=Card	5	nummod	5:nummod	Entity=(108-place-new-nnnnn-cf3-2,3-sgl
5	Lemoine	Lemoine	PROPN	NNP	Number=Sing	6	compound	6:compound	_
6	Avenue	Avenue	PROPN	NNP	Number=Sing	1	list	1:list	Entity=108)|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	8:punct	_
8	tel	telephone	NOUN	NN	Number=Sing	10	nsubj	10:nsubj	Entity=(109-abstract-new-nnnnn-cf1-1-coref)|SpaceAfter=No
9	:	:	PUNCT	:	_	8	punct	8:punct	_
10	1	1	NUM	CD	NumForm=Digit|NumType=Card	1	list	1:list	Discourse=elaboration-additional:70->69:0:sem-synym-624,626-628+grf-col-625|Entity=(109-abstract-giv:act-n____-cf1-1,2,3-coref
11	201	201	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	_
12	944-3737	944-3737	NUM	CD	NumForm=Digit|NumType=Card	10	flat	10:flat	Entity=109)|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


