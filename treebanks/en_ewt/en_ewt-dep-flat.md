---
layout: base
title:  'Statistics of flat in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="en_ewt-dep-flat-foreign.html">flat:foreign</a></tt>.

1910 nodes (1%) are attached to their parents as `flat`.

1910 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25130890052356.

The following 8 pairs of parts of speech are connected with `flat`: <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1836; 96% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (57; 3% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Shall	shall	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
3	censor	censor	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
5	works	work	NOUN	NNS	Number=Plur	3	obj	3:obj	_
6	of	of	ADP	IN	_	8	case	8:case	_
7	poet	poet	NOUN	NN	Number=Sing	8	compound	8:compound	_
8	Charles	charle	NOUN	NNS	Number=Plur	5	nmod	5:nmod:of	_
9	Baudelaire	Baudelaire	PROPN	NNP	Number=Sing	8	flat	8:flat	_
10	as	as	ADV	RB	_	3	advmod	3:advmod	_
11	well	well	ADV	RB	Degree=Pos	10	fixed	10:fixed	SpaceAfter=No
12	?	?	PUNCT	.	_	3	punct	3:punct	_

~~~


