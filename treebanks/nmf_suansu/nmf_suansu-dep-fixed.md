---
layout: base
title:  'Statistics of fixed in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `fixed`

This relation is universal.

11 nodes (0%) are attached to their parents as `fixed`.

11 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `fixed`: <tt><a href="nmf_suansu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nmf_suansu-pos-PART.html">PART</a></tt> (9; 82% instances), <tt><a href="nmf_suansu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="nmf_suansu-pos-NUM.html">NUM</a></tt>-<tt><a href="nmf_suansu-pos-ADV.html">ADV</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Wi	wi	INTJ	_	_	6	discourse	6:discourse	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	didi	didi	PRON	_	Deixis=Remt|Number=Sing|PronType=Dem	4	obj	4:obj	_
4	ay	ay	INTJ	_	ExtPos=VERB|Polarity=Pos	6	xcomp	6:xcomp	_
5	re	re	PART	REP	_	4	fixed	4:fixed	_
6	mumate	mu	VERB	COMPL	Aspect=Perf|Mood=Ind|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	Nahn	nahn	PRON	_	Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	_
2	badi	ba	PRON	_	Case=Top|Number=Sing|Person=3|PronType=Prs	3	obj	3:obj	_
3	ay	ay	INTJ	_	ExtPos=VERB|Polarity=Pos	0	root	0:root	_
4	rema	re	PART	REP	Polarity=Neg	3	fixed	3:fixed	SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	9:punct	_
6	regu	regu	CCONJ	_	_	9	cc	9:cc	_
7	A	a	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj	_
8	badi	ba	PRON	_	Case=Top|Number=Sing|Person=3|PronType=Prs	9	obj	9:obj	_
9	ay	ay	INTJ	_	ExtPos=VERB|Polarity=Pos	3	conj	3:conj	_
10	re	re	VERB	_	Polarity=Neg	9	fixed	9:fixed	_
11	lama	la	AUX	_	Polarity=Neg|VerbForm=Inf	9	aux	9:aux	SpaceAfter=No
12	?	?	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Phabtama	phabta	VERB	_	Polarity=Neg|VerbForm=Inf	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	5:punct	_
3	ska	ska	NUM	_	ExtPos=ADV|NumForm=Word|NumType=Card	5	advmod	5:advmod	_
4	li	li	ADV	ASC	_	3	fixed	3:fixed	_
5	phabtama	phabta	VERB	_	Polarity=Neg|VerbForm=Inf	1	parataxis	1:parataxis	_

~~~


