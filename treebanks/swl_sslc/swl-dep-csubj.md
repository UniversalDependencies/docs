---
layout: base
title:  'Statistics of csubj in UD_Swedish_Sign_Language'
udver: '2'
---

## Treebank Statistics: UD_Swedish_Sign_Language: Relations: `csubj`

This relation is universal.

3 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="swl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="swl-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="swl-pos-PRON.html">PRON</a></tt>-<tt><a href="swl-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="swl-pos-VERB.html">VERB</a></tt>-<tt><a href="swl-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	VARA	_	VERB	VB	_	3	cop	_	_
2	POSS1	_	PRON	PN	_	3	nmod:poss	_	_
3	MÅLSÄTTNING	_	NOUN	NN	_	0	root	_	_
4	FORTSÄTTA	_	VERB	VB	_	3	csubj	_	_
5	TID-FRAMÅT	_	ADV	AB	_	4	advmod	_	_
6	MED	_	ADP	PP	_	7	case	_	_
7	BASKETBOLL	_	NOUN	NN	_	4	obl	_	_
8	PRO1	_	PRON	PN	_	10	nmod:poss	_	_
9	STOR	_	ADJ	JJ	_	10	amod	_	_
10	INTRESSE	_	NOUN	NN	_	4	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 csubj	color:blue
1	PRO1	_	PRON	PN	_	2	nsubj	_	_
2	TÄNKA	_	VERB	VB	_	0	root	_	_
3	PRO1	_	PRON	PN	_	1	conj	_	_
4	UNDERVISA	_	VERB	VB	_	6	csubj	_	_
5	TECKENSPRÅK	_	NOUN	NN	_	4	obl	_	_
6	VAD	_	PRON	PN	_	2	ccomp	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	ORSAK	_	CCONJ	KN	_	6	obl	_	_
2	TILL	_	ADP	PP	_	1	case	_	_
3	VARFÖR	_	ADV	AB	_	6	advmod	_	_
4	PRO1	_	PRON	PN	_	6	nsubj	_	_
5	BLI(L)	_	VERB	VB	_	6	cop	_	_
6	DÖV	_	NOUN	NN	_	7	csubj	_	_
7	VETA-INTE	_	VERB	VB	_	0	root	_	_

~~~


