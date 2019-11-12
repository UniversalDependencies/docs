---
layout: base
title:  'Statistics of nummod in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `nummod`

This relation is universal.

1078 nodes (1%) are attached to their parents as `nummod`.

772 instances of `nummod` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74025974025974.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (555; 51% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (190; 18% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (185; 17% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (64; 6% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (37; 3% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (27; 3% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	a	a	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	via	via	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	fase	fase	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
6	due	due	NUM	N	NumType=Card	5	nummod	_	_
7	di	di	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	governo	governo	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
10	#Monti	#Monti	SYM	SYM	_	9	nmod	_	SpaceAfter=No
11	:	:	PUNCT	FC	_	3	punct	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	risata	risata	NOUN	S	Gender=Fem|Number=Sing	3	parataxis	_	_
14	satanica	satanico	ADJ	A	Gender=Fem|Number=Sing	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Ancora	ancora	ADV	B	_	3	advmod	_	_
2	32	32	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
3	%	%	SYM	SYM	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	bella	bello	ADJ	A	Gender=Fem|Number=Sing	6	amod	_	_
6	merda	merda	NOUN	S	Gender=Fem|Number=Sing	3	discourse	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Torino	torino	PROPN	SP	_	0	root	_	_
2	2	2	NUM	N	NumType=Card	1	nummod	_	_
3	-	-	PUNCT	FB	_	4	punct	_	_
4	2	2	NUM	N	NumType=Card	2	flat	_	_
5	Inter	Inter	PROPN	SP	_	1	nmod	_	_
6	milan	milan	PROPN	SP	_	5	flat	_	_

~~~


