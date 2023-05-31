---
layout: base
title:  'Statistics of iobj in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `iobj`

This relation is universal.

791 nodes (0%) are attached to their parents as `iobj`.

790 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25790139064475.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (591; 75% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (121; 15% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (76; 10% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Cloud	Cloud	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	_
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	instructed	instruct	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
4	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	iobj	3:iobj|6:nsubj:xsubj	_
5	to	to	PART	TO	_	6	mark	6:mark	_
6	call	call	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
7	with	with	ADP	IN	_	10	case	10:case	_
8	any	any	DET	DT	_	10	det	10:det	_
9	further	further	ADJ	JJ	Degree=Pos	10	amod	10:amod	_
10	questions	question	NOUN	NNS	Number=Plur	6	obl	6:obl:with	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	ca	can	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
2	nt	not	PART	RB	Typo=Yes	3	advmod	3:advmod	CorrectForm=n't
3	decide	decide	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	ask	ask	VERB	VB	Mood=Imp|VerbForm=Fin	3	parataxis	3:parataxis	_
5	friends	friend	NOUN	NNS	Number=Plur	4	iobj	4:iobj	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 iobj	color:blue
1	i	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj|11:nsubj	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
3	not	not	PART	RB	_	4	advmod	4:advmod	_
4	looking	look	VERB	VBG	VerbForm=Ger	0	root	0:root	_
5	foward	foward	ADV	RB	_	4	advmod	4:advmod	_
6	to	to	ADP	IN	_	7	case	7:case	_
7	that	that	PRON	DT	Number=Sing|PronType=Dem	4	obl	4:obl:to	_
8	but	but	CCONJ	CC	_	11	cc	11:cc	_
9	do	do	AUX	VB	Mood=Imp|VerbForm=Fin	11	aux	11:aux	_
10	n't	not	PART	RB	_	11	advmod	11:advmod	_
11	tell	tell	VERB	VB	Mood=Imp|VerbForm=Fin	4	conj	4:conj:but	_
12	val	val	PROPN	NNP	Number=Sing	11	iobj	11:iobj	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


