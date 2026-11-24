---
layout: base
title:  'Statistics of expl in UD_Old_Occitan-CorAG'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CorAG: Relations: `expl`

This relation is universal.

562 nodes (1%) are attached to their parents as `expl`.

540 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55693950177936.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (551; 98% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-PART.html">PART</a></tt> (11; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	No-	_	ADV	_	Polarity=Neg	3	advmod	_	_
2	-s	_	PRON	_	Person=3|PronType=Prs|Reflex=Yes	3	expl	_	_
3	serve	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	passat	_	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	3	advcl	_	_
5	.XXX.	_	NUM	_	_	6	nummod	_	_
6	antz	_	NOUN	_	_	4	nsubj	_	SpaceAfter=No
7	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 expl	color:blue
1	et	_	CCONJ	_	_	11	cc	_	_
2	que	_	PART	_	_	11	expl	_	_
3	lo	_	DET	_	_	4	det	_	_
4	Rey	_	NOUN	_	_	11	nsubj	_	_
5	o	_	CCONJ	_	_	7	cc	_	_
6	los	_	DET	_	_	7	det	_	_
7	baillius	_	NOUN	_	_	4	conj	_	_
8	de	_	ADP	_	_	9	case	_	_
9	luy	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nmod	_	_
10	no	_	ADV	_	Polarity=Neg	11	advmod	_	_
11	deyan	_	VERB	_	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
12	occupar	_	VERB	_	VerbForm=Inf	11	xcomp	_	_
13	la	_	DET	_	_	14	det	_	_
14	terra	_	NOUN	_	_	12	obj	_	_
15	o	_	CCONJ	_	_	17	cc	_	_
16	los	_	DET	_	_	17	det	_	_
17	filhs	_	NOUN	_	_	14	conj	_	_
18	o	_	CCONJ	_	_	20	cc	_	_
19	las	_	DET	_	_	20	det	_	_
20	filhas	_	NOUN	_	_	17	conj	_	_
21	de-	_	ADP	_	_	22	case	_	_
22	-los	_	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	nmod	_	_
23	qui	_	PRON	_	PronType=Rel	25	nsubj	_	_
24	seran	_	AUX	_	Number=Plur|Person=3|VerbForm=Fin	25	aux	_	_
25	mortz	_	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	22	acl:relcl	_	SpaceAfter=No
26	.	_	PUNCT	_	_	11	punct	_	_

~~~


