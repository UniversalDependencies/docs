---
layout: base
title:  'Statistics of dislocated in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `dislocated`

This relation is universal.

7 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.8571428571429.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (6; 86% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	EPM	EPM	NOUN	NN	Number=Sing	4	dislocated	4:dislocated	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	Anyone	anyone	PRON	NN	Number=Sing|PronType=Ind	4	nsubj	4:nsubj	_
4	Dealt	deal	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
5	with	with	ADP	IN	_	6	case	6:case	_
6	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obl	4:obl:with	SpaceAfter=No
7	?	?	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	really	really	ADV	RB	_	2	advmod	2:advmod	_
2	amazing	amazing	ADJ	JJ	Degree=Pos	7	dislocated	7:dislocated	_
3	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
4	new	new	ADJ	JJ	Degree=Pos	7	amod	7:amod	_
5	and	and	CCONJ	CC	_	6	cc	6:cc	_
6	exciting	exciting	ADJ	JJ	Degree=Pos	4	conj	4:conj:and|7:amod	_
7	plays	play	NOUN	NNS	Number=Plur	0	root	0:root	Supersense=n.COMMUNICATION
8	done	do	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	7	acl	7:acl	Supersense=v.stative
9	at	at	ADP	IN	_	11	case	11:case	PRel[config]=default|PRel[gov]=8:do|PRel[obj]=11:theatre|Supersense=p.Locus
10	this	this	DET	DT	Number=Sing|PronType=Dem	11	det	11:det	_
11	theatre	theatre	NOUN	NN	Number=Sing	8	obl	8:obl:at	Supersense=n.GROUP
12	!	!	PUNCT	.	_	7	punct	7:punct	_

~~~


