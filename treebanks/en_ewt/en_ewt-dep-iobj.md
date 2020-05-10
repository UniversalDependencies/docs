---
layout: base
title:  'Statistics of iobj in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `iobj`

This relation is universal.

464 nodes (0%) are attached to their parents as `iobj`.

464 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16594827586207.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (389; 84% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (47; 10% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (25; 5% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	Catriona	Catriona	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj|6:nsubj	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	well	well	ADJ	JJ	Degree=Pos	0	root	0:root	_
4	and	and	CCONJ	CC	_	6	cc	6:cc	_
5	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
6	landed	land	VERB	VBN	Tense=Past|VerbForm=Part	3	conj	3:conj:and	_
7	herself	herself	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	6	iobj	6:iobj	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	_
9	pretty	pretty	ADV	RB	_	10	advmod	10:advmod	_
10	cool	cool	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	job	job	NOUN	NN	Number=Sing	6	obj	6:obj	_
12	in	in	ADP	IN	_	13	case	13:case	_
13	PR	pr	NOUN	NN	Number=Sing	11	nmod	11:nmod:in	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Do	do	AUX	VB	Mood=Imp|VerbForm=Fin	3	aux	3:aux	SpaceAfter=No
2	n't	not	PART	RB	_	3	advmod	3:advmod	_
3	give	give	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
4	these	these	DET	DT	Number=Plur|PronType=Dem	5	det	5:det	_
5	guys	guy	NOUN	NNS	Number=Plur	3	iobj	3:iobj	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	_
7	penny	penny	NOUN	NN	Number=Sing	3	obj	3:obj	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	3:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	Is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
2	that	that	DET	DT	Number=Sing|PronType=Dem	3	det	3:det	_
3	Microwave	microwave	NOUN	NN	Number=Sing	9	nsubj	6:obj|9:nsubj	_
4	that	that	PRON	WDT	PronType=Rel	6	obj	3:ref	_
5	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	6	nsubj	6:nsubj	_
6	gave	give	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	3:acl:relcl	_
7	Dan	Dan	PROPN	NNP	Number=Sing	6	iobj	6:iobj	_
8	really	really	ADV	RB	_	9	advmod	9:advmod	_
9	expensive	expensive	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
10	?	?	PUNCT	.	_	9	punct	9:punct	_

~~~


