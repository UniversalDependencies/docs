---
layout: base
title:  'Statistics of nummod in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `nummod`

This relation is universal.

549 nodes (1%) are attached to their parents as `nummod`.

411 instances of `nummod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63205828779599.

The following 17 pairs of parts of speech are connected with `nummod`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (296; 54% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (88; 16% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (84; 15% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (27; 5% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (18; 3% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (10; 2% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (9; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Sondaggio	sondaggio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	Fiducia	fiducia	NOUN	S	Gender=Fem|Number=Sing	1	nmod	_	_
4	governo	governo	NOUN	S	Gender=Masc|Number=Sing	3	compound	_	_
5	Monti	Monti	PROPN	SP	_	4	nmod	_	_
6	a	a	ADP	E	_	9	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	57	57	NUM	N	NumType=Card	9	nummod	_	SpaceAfter=No
9	%	%	SYM	SYM	_	3	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 nummod	color:blue
1	RT	RT	X	X	_	7	dep	_	_
2	@my_supersoccer	@my_supersoccer	SYM	SYM	_	7	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	FULL	full	X	SW	_	7	discourse	_	_
5	TIME	time	X	SW	_	4	flat:foreign	_	_
6	!!!!	!!!!	PUNCT	FS	_	4	punct	_	_
7	Fiorentina	Fiorentina	PROPN	SP	_	0	root	_	_
8	vs	vs	ADP	E	_	9	case	_	_
9	Juventus	Juventus	PROPN	SP	_	7	nmod	_	_
10	4	4	NUM	N	NumType=Card	7	nummod	_	_
11	-	-	PUNCT	FB	_	12	punct	_	_
12	2	2	NUM	N	NumType=Card	10	flat	_	_

~~~


