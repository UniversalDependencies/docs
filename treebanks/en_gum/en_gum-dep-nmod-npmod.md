---
layout: base
title:  'Statistics of nmod:npmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gum-dep-nmod-tmod.html">nmod:tmod</a></tt>.

52 nodes (0%) are attached to their parents as `nmod:npmod`.

27 instances of `nmod:npmod` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.26923076923077.

The following 7 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (32; 62% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (6; 12% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (5; 10% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (4; 8% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 nmod:npmod	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Discourse=joint:51->49|Entity=(place-55)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(place-55
4	limestone	limestone	NOUN	NN	Number=Sing	5	compound	5:compound	Entity=(substance-92)
5	island	island	NOUN	NN	Number=Sing	0	root	0:root	_
6	with	with	ADP	IN	_	7	case	7:case	_
7	heights	height	NOUN	NNS	Number=Plur	5	nmod	5:nmod:with	Entity=(abstract-93
8	up	up	ADV	IN	_	10	advmod	10:advmod	_
9	to	to	ADP	IN	_	8	fixed	8:fixed	_
10	213	213	NUM	CD	NumForm=Digit|NumType=Card	11	nummod	11:nummod	Entity=(abstract-94
11	m	meter	NOUN	NNS	Number=Plur	7	nmod:npmod	7:nmod:npmod	Entity=abstract-93)abstract-94)
12	in	in	ADP	IN	_	14	case	14:case	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(place-95
14	west	west	NOUN	NN	Number=Sing	7	nmod	7:nmod:in	Entity=place-55)place-95)|SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:npmod	color:blue
1	F-E	F-E	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj	Discourse=elaboration:99->95|Entity=(abstract-153-Dynamic_and_formal_equivalence)
2	focuses	focus	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	attention	attention	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=(abstract-154)
4	on	on	ADP	IN	_	6	case	6:case	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Entity=(abstract-123
6	message	message	NOUN	NN	Number=Sing	2	obl	2:obl:on	_
7	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nmod:npmod	6:nmod:npmod	Entity=abstract-123)|SpaceAfter=No
8	,	,	PUNCT	,	_	11	punct	11:punct	_
9	in	in	ADP	IN	_	11	case	11:case	_
10	both	both	CCONJ	CC	_	11	cc:preconj	11:cc:preconj	Entity=(abstract-134
11	form	form	NOUN	NN	Number=Sing	2	obl	2:obl:in	Entity=(abstract-128)
12	and	and	CCONJ	CC	_	13	cc	13:cc	_
13	content	content	NOUN	NN	Number=Sing	11	conj	2:obl:in|11:conj:and	Entity=(abstract-125)abstract-134)|SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:npmod	color:blue
1	There	there	PRON	EX	_	2	expl	2:expl	Discourse=joint:14->7
2	are	be	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	also	also	ADV	RB	_	2	advmod	2:advmod	_
4	attractions	attraction	NOUN	NNS	Number=Plur	2	nsubj	2:nsubj	Entity=(abstract-26
5	on	on	ADP	IN	_	6	case	6:case	_
6	Coron	Coron	PROPN	NNP	Number=Sing	4	nmod	4:nmod:on	Entity=(place-9
7	Island	Island	PROPN	NNP	Number=Sing	6	flat	6:flat	_
8	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nmod:npmod	6:nmod:npmod	Entity=abstract-26)place-9)|SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


