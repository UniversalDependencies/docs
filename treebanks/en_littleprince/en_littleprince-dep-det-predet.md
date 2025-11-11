---
layout: base
title:  'Statistics of det:predet in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_littleprince-dep-det.html">det</a></tt>.

14 nodes (0%) are attached to their parents as `det:predet`.

14 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35714285714286.

The following 2 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-DET.html">DET</a></tt> (10; 71% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (4; 29% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det:predet	color:blue
1	Mine	mine	PRON	PRP	Gender=Neut|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nsubj	_	_
2	perfumed	perfume	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	all	all	DET	PDT	_	5	det:predet	_	_
4	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	planet	planet	NOUN	NN	Number=Sing	2	obj	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 det:predet	color:blue
1	But	but	CCONJ	CC	_	10	cc	_	_
2	on	on	ADP	IN	_	5	case	_	_
3	this	this	DET	DT	Number=Sing|PronType=Dem	5	det	_	_
4	last	last	ADJ	JJ	Degree=Pos	5	amod	_	_
5	morning	morning	NOUN	NN	Number=Sing	10	obl	_	_
6	all	all	PRON	PDT	_	9	det:predet	_	_
7	these	this	DET	DT	Number=Plur|PronType=Dem	9	det	_	_
8	familiar	familiar	ADJ	JJ	Degree=Pos	9	amod	_	_
9	tasks	task	NOUN	NNS	Number=Plur	10	nsubj	_	_
10	seemed	seem	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
11	very	very	ADV	RB	_	12	advmod	_	_
12	precious	precious	ADJ	JJ	Degree=Pos	10	xcomp	_	_
13	to	to	ADP	IN	_	14	case	_	_
14	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl	_	_
15	.	.	PUNCT	.	_	10	punct	_	_

~~~


