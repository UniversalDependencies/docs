---
layout: base
title:  'Statistics of vocative in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `vocative`

This relation is universal.

52 nodes (0%) are attached to their parents as `vocative`.

27 instances of `vocative` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.90384615384615.

The following 12 pairs of parts of speech are connected with `vocative`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (16; 31% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (13; 25% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (5; 10% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 vocative	color:blue
1	What	what	PRON	WP	PronType=Int	4	obj	4:obj	Discourse=question:1->2:1|SpaceAfter=No|XML=<w>
2	'd	do	AUX	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	4	aux	4:aux	XML=</w>
3	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	Entity=(person-1-acc:com-1-ana)
4	do	do	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	Sabrina	Sabrina	PROPN	NNP	Number=Sing	4	vocative	4:vocative	Entity=(person-1-giv:act-1-coref)|SpaceAfter=No
6	?	?	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 vocative	color:blue
1	Well	well	INTJ	UH	_	4	discourse	4:discourse	Discourse=preparation:97->107:5|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	everybody	everybody	NOUN	NN	Number=Sing	4	vocative	4:vocative	Entity=(person-1-giv:inact-1-coref)
4	count	count	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Entity=(event-54-new-1-disc
5	together	together	ADV	RB	Degree=Pos	4	advmod	4:advmod	Entity=54)|SpaceAfter=No
6	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 vocative	color:blue
1	Ramon	Ramon	PROPN	NNP	Number=Sing	8	vocative	8:vocative	Discourse=concession:54->52:1|Entity=(person-60-giv:inact-1-coref)|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	Entity=(time-64-new-2-sgl
4	equinox	equinox	NOUN	NN	Number=Sing	8	nsubj	8:nsubj|10:nsubj	Entity=64)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
6	n’t	not	PART	RB	Polarity=Neg	8	advmod	8:advmod	_
7	for	for	ADP	IN	_	8	case	8:case	_
8	weeks	week	NOUN	NNS	Number=Plur	0	root	0:root	Entity=(time-65-new-1-sgl)
9	and	and	CCONJ	CC	_	10	cc	10:cc	_
10	weeks	week	NOUN	NNS	Number=Plur	8	conj	8:conj:and	Entity=(time-66-new-1-sgl)|SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


