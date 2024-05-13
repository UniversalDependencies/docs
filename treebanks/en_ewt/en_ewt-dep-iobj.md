---
layout: base
title:  'Statistics of iobj in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `iobj`

This relation is universal.

794 nodes (0%) are attached to their parents as `iobj`.

793 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25818639798489.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (594; 75% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (121; 15% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (77; 10% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Yet	yet	CCONJ	CC	_	5	cc	5:cc	_
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	5:nsubj	_
3	did	do	AUX	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	5	aux	5:aux	_
4	n't	not	PART	RB	_	5	advmod	5:advmod	_
5	charge	charge	VERB	VB	VerbForm=Inf	0	root	0:root	_
6	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	5	iobj	5:iobj	_
7	for	for	ADP	IN	_	9	case	9:case	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	_
9	evacuation	evacuation	NOUN	NN	Number=Sing	5	obl	5:obl:for	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	5:punct	_

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
4	looking	look	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	_
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


