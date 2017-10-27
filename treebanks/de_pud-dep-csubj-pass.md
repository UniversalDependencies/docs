---
layout: base
title:  'Statistics of csubj:pass in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-csubj.html">csubj</a></tt>.

7 nodes (0%) are attached to their parents as `csubj:pass`.

6 instances of `csubj:pass` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.28571428571429.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (6; 86% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj:pass	color:blue
1	Es	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	3	expl	_	_
2	wurde	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux:pass	_	_
3	betont	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
4	,	_	PUNCT	,	_	10	punct	_	_
5	dass	_	SCONJ	CC	_	10	mark	_	_
6	wir	_	PRON	PRP	Case=Nom|Number=Plur|Person=1	10	nsubj	_	_
7	nicht	_	ADV	RB	Degree=Pos|Polarity=Neg	10	advmod	_	_
8	mit	_	ADP	IN	_	9	case	_	_
9	denen	_	DET	DT	Case=Dat|Definite=Def|Number=Plur|Person=3	10	obl	_	_
10	weiterarbeiten	_	VERB	VB	_	3	csubj:pass	_	_
11	können	_	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	10	aux	_	SpaceAfter=No
12	,	_	PUNCT	,	_	17	punct	_	_
13	die	_	PRON	REL	Case=Nom|Number=Plur|Person=3	17	nsubj	_	_
14	völlig	_	ADV	RB	Degree=Pos	17	advmod	_	_
15	gegen	_	ADP	IN	_	16	case	_	_
16	Italien	_	PROPN	NNP	Case=Acc|Gender=Neut|Number=Sing|Person=3	17	obl	_	_
17	sind	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	9	acl:relcl	_	SpaceAfter=No
18	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 csubj:pass	color:blue
1	Bei	_	ADP	IN	_	3	case	_	_
2	einer	_	DET	DT	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing|Person=3	3	det	_	_
3	Gelegenheit	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	5	obl	_	_
4	wird	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:pass	_	_
5	angedeutet	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
6	,	_	PUNCT	,	_	11	punct	_	_
7	er	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	_
8	sei	_	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
9	ein	_	DET	DT	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3	11	det	_	_
10	verdeckter	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	11	amod	_	InflectionType=Mixed
11	Ermittler	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	csubj:pass	_	SpaceAfter=No
12	,	_	PUNCT	,	_	16	punct	_	_
13	der	_	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|Person=3	16	nsubj	_	_
14	auf	_	ADP	IN	_	15	case	_	_
15	Homer	_	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	16	obl	_	_
16	angesetzt	_	ADJ	JJ	Degree=Pos	11	acl:relcl	_	_
17	ist	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	cop	_	SpaceAfter=No
18	.	_	PUNCT	.	_	5	punct	_	_

~~~


