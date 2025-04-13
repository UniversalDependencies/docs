---
layout: base
title:  'Statistics of aux:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-aux.html">aux</a></tt>.

1583 nodes (1%) are attached to their parents as `aux:pass`.

1580 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2406822488945.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1583; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	His	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=organization-preparation:20->21:4:sem-synym-146,157|Entity=(34-abstract-new-cf2-2-sgl(3-person-giv:act-cf1*-1-ana-Lord_Byron)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(35-abstract-new-cf3-1-sgl)34)|MSeg=moderat-ion
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	Negation=Yes
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=restrict-ed
8	to	to	ADP	IN	_	10	case	10:case	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(36-event-new-cf4-2-sgl|MSeg=physic-al
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	7:obl:to	Entity=36)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


