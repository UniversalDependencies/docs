---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

1446 nodes (1%) are attached to their parents as `nummod`.

1381 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4073305670816.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1303; 90% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (106; 7% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (23; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	For	for	ADP	IN	_	3	case	3:case	Discourse=organization-preparation:69->73:3:num-count-522-gold|PDTB=Implicit:Comparison.Concession.Arg2-as-denier:but:_:501-520:521-531
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	8	8	X	LS	_	2	discourse	2:discourse	Discourse=joint-list_m:106->95:2:grf-seq-768,860-_|XML=<hi rend:::"bold"><ref target:::"https://en.wikivoyage.org/wiki/Isfahan#/maplink/7"></ref>
2	Hasht	Hasht	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(149-place-new-nnnnn-cf1-1,2-coref-Hasht_Behesht
3	Behesht	Behesht	PROPN	NNP	Number=Sing	2	flat	2:flat	Entity=149)|XML=</hi>
4	(	(	PUNCT	-LRB-	_	6	punct	6:punct	Discourse=restatement-partial:107->106:0:sem-synym-861-862,864-868-_+grf-prn-863,869-_|SpaceAfter=No
5	The	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Entity=(149-place-giv:act-nnnnn-cf1-2,5-appos-Hasht_Behesht|XML=<hi rend:::"italic">
6	Palace	Palace	PROPN	NNP	Number=Sing	2	appos	2:appos	_
7	of	of	ADP	IN	_	9	case	9:case	_
8	Eight	eight	NUM	CD	NumForm=Word|NumType=Card	9	nummod	9:nummod	Entity=(150-abstract-new-nnnnn-cf2-2-sgl
9	Paradises	Paradise	PROPN	NNPS	Number=Plur	6	nmod	6:nmod:of	Entity=150)149)|MSeg=Paradise-s|SpaceAfter=No|XML=</hi>
10	)	)	PUNCT	-RRB-	_	6	punct	6:punct	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


