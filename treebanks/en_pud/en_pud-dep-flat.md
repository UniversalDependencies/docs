---
layout: base
title:  'Statistics of flat in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `flat`

This relation is universal.

220 nodes (1%) are attached to their parents as `flat`.

220 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15.

The following 9 pairs of parts of speech are connected with `flat`: <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (174; 79% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (17; 8% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (9; 4% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (9; 4% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-X.html">X</a></tt> (7; 3% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Durán	Durán	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj|6:nsubj	_
2	acts	act	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	as	as	ADP	IN	_	4	case	4:case	_
4	spokesman	spokesman	NOUN	NN	Number=Sing	2	obl	2:obl:as	_
5	and	and	CCONJ	CC	_	6	cc	2.1:cc|6:cc	_
6	Ángel	Ángel	PROPN	NNP	Number=Sing	2	conj	2:conj:and|2.1:nsubj	_
7	Pintado	Pintado	PROPN	NNP	Number=Sing	6	flat	6:flat	_
8	as	as	ADP	IN	_	9	case	9:case	_
9	treasurer	treasurer	NOUN	NN	Number=Sing	6	orphan	2.1:obl:as	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Their	their	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	first	first	ADJ	JJ	Degree=Pos|NumForm=Word|NumType=Ord	3	amod	3:amod	_
3	king	king	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	_
4	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
5	Mojmír	Mojmír	PROPN	NNP	Number=Sing	0	root	0:root	_
6	I	I	NUM	CD	NumForm=Roman|NumType=Card	5	flat	5:flat	_
7	(	(	PUNCT	-LRB-	_	8	punct	8:punct	SpaceAfter=No
8	ruled	rule	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	parataxis	5:parataxis	_
9	830	830	NUM	CD	NumForm=Digit|NumType=Card	8	obj	8:obj	SpaceAfter=No
10	–	–	ADP	IN	_	11	case	11:case	SpaceAfter=No
11	846	846	NUM	CD	NumForm=Digit|NumType=Card	9	nmod	9:nmod	SpaceAfter=No
12	)	)	PUNCT	-RRB-	_	8	punct	8:punct	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Day	day	NOUN	NN	Number=Sing	6	nmod:unmarked	6:nmod:unmarked	TemporalNPAdjunct=Yes
2	three	three	NUM	CD	NumForm=Word|NumType=Card	1	flat	1:flat	SpaceAfter=No
3	,	,	PUNCT	,	_	6	punct	6:punct	_
4	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	_
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	6:cop	_
6	back	back	ADV	RB	_	0	root	0:root	_
7	on	on	ADP	IN	_	9	case	9:case	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	_
9	EMicro	EMicro	PROPN	NNP	Number=Sing	6	obl	6:obl:on	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


