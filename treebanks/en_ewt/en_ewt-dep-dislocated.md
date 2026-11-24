---
layout: base
title:  'Statistics of dislocated in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `dislocated`

This relation is universal.

8 nodes (0%) are attached to their parents as `dislocated`.

8 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (7; 88% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dislocated	color:blue
1	so	so	ADV	RB	_	7	advmod	7:advmod	_
2	any	any	DET	DT	PronType=Ind	3	det	3:det	_
3	price	price	NOUN	NN	Number=Sing	7	dislocated	5:obj|7:dislocated	_
4	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	5	nsubj	5:nsubj	_
5	find	find	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	acl:relcl	3:acl:relcl	Cxn=rc-red-obj|SpaceAfter=No
6	,	,	PUNCT	,	_	3	punct	3:punct	_
7	DOUBLE	double	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
8	IT	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	obj	7:obj	_
9	figure	figure	VERB	VB	Mood=Imp|VerbForm=Fin	7	parataxis	7:parataxis	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	11:punct	_
11	$	$	SYM	$	_	9	obj	9:obj	SpaceAfter=No
12	40	40	NUM	CD	NumForm=Digit|NumType=Card	13	compound	13:compound	SpaceAfter=No
13	K	thousand	NUM	CD	Abbr=Yes|NumForm=Word|NumType=Card	11	nummod	11:nummod	_
14	at	at	ADP	IN	_	15	case	15:case	_
15	least	least	ADJ	JJS	Degree=Sup	13	nmod	13:nmod:at	SpaceAfter=No
16	.	.	PUNCT	.	_	7	punct	7:punct	_

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


