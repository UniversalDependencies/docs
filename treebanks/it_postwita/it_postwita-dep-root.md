---
layout: base
title:  'Statistics of root in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `root`

This relation is universal.

6712 nodes (5%) are attached to their parents as `root`.

6712 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92476162097735.

The following 12 pairs of parts of speech are connected with `root`: -<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (3651; 54% instances), -<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1659; 25% instances), -<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (437; 7% instances), -<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (359; 5% instances), -<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (178; 3% instances), -<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (148; 2% instances), -<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (129; 2% instances), -<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (86; 1% instances), -<tt><a href="it_postwita-pos-X.html">X</a></tt> (46; 1% instances), -<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (11; 0% instances), -<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (4; 0% instances), -<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	@user	@user	SYM	SYM	_	8	vocative:mention	_	_
2	si	sì	INTJ	I	_	8	discourse	_	CorrectForm=sì
3	cazzo	cazzo	INTJ	I	_	8	discourse	_	_
4	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	8	expl	_	SpaceAfter=No
5	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	dep	_	_
6	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	devo	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fare	fare	VERB	V	VerbForm=Inf	0	root	_	_
9	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	13	expl	_	SpaceAfter=No
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	dep	_	_
11	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
12	posso	potere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	fare	fare	VERB	V	VerbForm=Inf	8	conj	_	SpaceAfter=No
14	!	!	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	@user	@user	SYM	SYM	_	5	vocative:mention	_	_
2	Mario	mario	PROPN	SP	_	5	nsubj	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	ennesimo	ennesimo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	5	amod	_	_
5	regalo	regalo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
6	a	a	ADP	E	_	8	case	_	_
7	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	Banche	Banche	PROPN	SP	_	5	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Contento	contento	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	orgoglioso	orgoglioso	ADJ	A	Gender=Masc|Number=Sing	1	conj	_	_
4	di	di	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	governo	governo	NOUN	S	Gender=Masc|Number=Sing	1	obl	_	_
7	#Monti	#Monti	SYM	SYM	_	6	nmod	_	_

~~~


