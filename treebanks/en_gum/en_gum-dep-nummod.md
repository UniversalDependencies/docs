---
layout: base
title:  'Statistics of nummod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nummod`

This relation is universal.

1606 nodes (1%) are attached to their parents as `nummod`.

1519 instances of `nummod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39975093399751.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1429; 89% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (133; 8% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (31; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	For	for	ADP	IN	_	3	case	3:case	Discourse=organization-preparation:69->73:3:num-count-522-gold|PDTB=NoRel:NoRel:_:_:501-520:521-531
2	one	one	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	_
3	thing	thing	NOUN	NN	Number=Sing	6	obl	6:obl:for	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	3:punct	_
5	there	there	PRON	EX	PronType=Dem	6	expl	6:expl	_
6	’s	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Cxn=Existential-CopPred-ThereExpl
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Bridge=99<100:set-member|Entity=(100-abstract-acc:inf-nnnnn-cf1-2-sgl
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nummod	color:blue
1	–	-	PUNCT	:	_	6	punct	6:punct	Discourse=explanation-evidence:31->29:0:_
2	USPS	USPS	PROPN	NNP	Number=Sing	5	compound	5:compound	Entity=(89-time-new-nnnnn-cf4-1,4-sgl(77-organization-giv:inact-ssnnn-cf2-1-coref-United_States_Postal_Service)
3	2	2	NUM	CD	NumForm=Digit|NumType=Card	5	nummod	5:nummod	SpaceAfter=No|XML=<w>
4	-	-	PUNCT	HYPH	_	3	punct	3:punct	SpaceAfter=No
5	Day	Day	PROPN	NNP	Number=Sing	6	nsubj	6:nsubj	Entity=89)|XML=</w>
6	$	$	SYM	$	_	0	root	0:root	Entity=(90-abstract-new-nnnnn-cf6-1-sgl|SpaceAfter=No|XML=<w>
7	5.68	5.68	NUM	CD	NumForm=Digit|NumType=Frac	6	nummod	6:nummod	XML=</w>
8	(	(	PUNCT	-LRB-	_	10	punct	10:punct	Discourse=elaboration-additional:32->31:0:_|SpaceAfter=No
9	46	46	NUM	CD	NumForm=Digit|NumType=Card	10	nummod	10:nummod	Entity=(91-abstract-new-nnnnn-cf5-2-sgl
10	cents	cent	NOUN	NNS	Number=Plur	6	appos	6:appos	MSeg=c-ent-s
11	without	without	ADP	IN	_	16	case	16:case	Discourse=mode-manner:33->32:0:dm-without-383-_|MSeg=with-out
12	the	the	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Bridge=85<92:entity-associative|Entity=(92-abstract-acc:inf-nnnnn-cf3-5-sgl
13	2	2	NUM	CD	NumForm=Digit|NumType=Card	15	nummod	15:nummod	Entity=(86-time-giv:act-nnnnn-cf1*-3-coref|SpaceAfter=No|XML=<w>
14	-	-	PUNCT	HYPH	_	13	punct	13:punct	SpaceAfter=No
15	day	day	NOUN	NN	Number=Sing	16	compound	16:compound	Entity=86)|XML=</w>
16	restriction	restriction	NOUN	NN	Number=Sing	10	nmod	10:nmod:without	Entity=92)91)|MSeg=restrict-ion|SpaceAfter=No
17	)	)	PUNCT	-RRB-	_	10	punct	10:punct	Entity=90)

~~~


