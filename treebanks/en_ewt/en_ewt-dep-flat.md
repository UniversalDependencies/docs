---
layout: base
title:  'Statistics of flat in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="en_ewt-dep-flat-foreign.html">flat:foreign</a></tt>.

1966 nodes (1%) are attached to their parents as `flat`.

1966 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30671414038657.

The following 10 pairs of parts of speech are connected with `flat`: <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1835; 93% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (57; 3% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (51; 3% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Ben	Ben	PROPN	NNP	Number=Sing	6	nsubj	6:nsubj	_
2	Goodger	Goodger	PROPN	NNP	Number=Sing	1	flat	1:flat	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
4	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
5	lead	lead	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	engineer	engineer	NOUN	NN	Number=Sing	0	root	0:root	_
7	for	for	ADP	IN	_	9	case	9:case	_
8	Mozilla	Mozilla	PROPN	NNP	Number=Sing	9	compound	9:compound	_
9	Firefox	Firefox	PROPN	NNP	Number=Sing	6	nmod	6:nmod:for	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	One	one	NUM	CD	NumType=Card	6	nsubj	6:nsubj	_
2	of	of	ADP	IN	_	4	case	4:case	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
4	Wesley	Wesley	PROPN	NNP	Number=Sing	1	nmod	1:nmod:of	_
5	boys	boy	NOUN	NNS	Number=Plur	4	flat	4:flat	_
6	wrote	write	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	_
8	hymn	hymn	NOUN	NN	Number=Sing	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	-	-	PUNCT	NFP	_	2	punct	2:punct	_
2	ENRON-CPS	enron-cps	NOUN	GW	_	0	root	0:root	_
3	(	(	X	GW	_	2	flat	2:flat	SpaceAfter=No
4	GISB	gisb	X	GW	_	2	flat	2:flat	_
5	rev1	rev1	X	GW	_	2	flat	2:flat	SpaceAfter=No
6	)	)	X	GW	_	2	flat	2:flat	SpaceAfter=No
7	.doc	.doc	X	NN	Number=Sing	2	flat	2:flat	_

~~~


