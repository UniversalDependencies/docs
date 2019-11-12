---
layout: base
title:  'Statistics of csubj in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_ewt-dep-csubj-pass.html">csubj:pass</a></tt>.

340 nodes (0%) are attached to their parents as `csubj`.

211 instances of `csubj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.19117647058824.

The following 16 pairs of parts of speech are connected with `csubj`: <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (151; 44% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (108; 32% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (54; 16% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PART.html">PART</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Great	great	ADJ	JJ	Degree=Pos	0	root	0:root	_
2	to	to	PART	TO	_	3	mark	3:mark	_
3	have	have	VERB	VB	VerbForm=Inf	1	csubj	1:csubj	_
4	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	3	obj	3:obj	_
5	on	on	ADP	IN	_	6	case	6:case	_
6	board	board	NOUN	NN	Number=Sing	3	obl	3:obl:on	SpaceAfter=No
7	!	!	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	how	how	ADV	WRB	PronType=Int	2	advmod	2:advmod	_
2	much	much	ADJ	JJ	Degree=Pos	5	obj	5:obj	_
3	does	do	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
4	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	5:expl	_
5	cost	cost	VERB	VB	VerbForm=Inf	0	root	0:root	_
6	to	to	PART	TO	_	7	mark	7:mark	_
7	join	join	VERB	VB	VerbForm=Inf	5	csubj	5:csubj	_
8	world	world	PROPN	NNP	Number=Sing	10	compound	10:compound	_
9	resorts	resorts	PROPN	NNPS	Number=Plur	10	compound	10:compound	_
10	international	international	PROPN	NNP	Number=Sing	7	obj	7:obj	SpaceAfter=No
11	?	?	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj	color:blue
1	Heather	Heather	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj	_
2	moving	move	VERB	VBG	VerbForm=Ger	8	csubj	8:csubj	_
3	in	in	ADV	RB	_	2	advmod	2:advmod	_
4	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	8:aux	_
5	been	be	AUX	VBN	Tense=Past|VerbForm=Part	8	cop	8:cop	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
7	different	different	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	story	story	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


