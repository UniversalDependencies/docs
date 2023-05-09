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
1	Es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	wurde	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux:pass	_	_
3	betont	betonen	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	10	punct	_	_
5	dass	dass	SCONJ	CC	_	10	mark	_	_
6	wir	wir	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
7	nicht	nicht	PART	RB	Polarity=Neg	10	advmod	_	_
8	mit	mit	ADP	IN	_	9	case	_	_
9	denen	der	PRON	DT	Case=Dat|Number=Plur|PronType=Dem,Rel	10	obl	_	_
10	weiterarbeiten	weiterarbeiten	VERB	VB	_	3	csubj:pass	_	_
11	können	können	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	10	aux	_	SpaceAfter=No
12	,	,	PUNCT	,	_	17	punct	_	_
13	die	der	PRON	REL	Case=Nom|Number=Plur|PronType=Dem,Rel	17	nsubj	_	_
14	völlig	völlig	ADV	RB	Degree=Pos	17	advmod	_	_
15	gegen	gegen	ADP	IN	_	16	case	_	_
16	Italien	Italien	PROPN	NNP	Case=Acc|Gender=Neut|Number=Sing	17	obl	_	_
17	sind	sein	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	9	acl:relcl	_	SpaceAfter=No
18	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 csubj:pass	color:blue
1	Bei	bei	ADP	IN	_	3	case	_	_
2	einer	ein	DET	DT	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	3	det	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	5	obl	_	_
4	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:pass	_	_
5	angedeutet	andeuten	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
6	,	,	PUNCT	,	_	11	punct	_	_
7	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
8	sei	sein	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
9	ein	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	11	det	_	_
10	verdeckter	verdeckt	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	InflectionType=Mixed
11	Ermittler	Ermittler	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	csubj:pass	_	SpaceAfter=No
12	,	,	PUNCT	,	_	16	punct	_	_
13	der	der	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem,Rel	16	nsubj	_	_
14	auf	auf	ADP	IN	_	15	case	_	_
15	Homer	Homer	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	16	obl	_	_
16	angesetzt	ansetzen	ADJ	JJ	Degree=Pos	11	acl:relcl	_	_
17	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	cop	_	SpaceAfter=No
18	.	.	PUNCT	.	_	5	punct	_	_

~~~


