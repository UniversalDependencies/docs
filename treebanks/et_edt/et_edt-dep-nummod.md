---
layout: base
title:  'Statistics of nummod in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `nummod`

This relation is universal.

5941 nodes (1%) are attached to their parents as `nummod`.

4939 instances of `nummod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36105032822757.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (5157; 87% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (475; 8% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (199; 3% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (48; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (40; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Igaüks	iga_üks	PRON	P	Case=Nom|Number=Sing|PronType=Ind	3	nsubj	3:nsubj	Arg=kirjutama_Arg_0
2	neist	tema	PRON	P	Case=Ela|Number=Plur|Person=3|PronType=Prs	1	nmod	1:nmod	_
3	kirjutab	kirjutama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=kirjutama
4	Vermeerile	Vermeer	PROPN	S	Case=All|Number=Sing	3	obl	3:obl	Arg=kirjutama_Arg_2|NE=B-Per
5	kuus	kuus	NUM	N	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	6	nummod	6:nummod	_
6	kirja	kiri	NOUN	S	Case=Par|Number=Sing	3	obj	3:obj	Arg=kirjutama_Arg_1|SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	20	20	NUM	N	NumForm=Digit|NumType=Card	2	nummod	2:nummod	_
2	aastat	aasta	NOUN	S	Case=Par|Number=Sing	8	obl	8:obl	_
3	peab	pidama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	_
4	keskmine	keskmine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	amod	5:amod	_
5	kasvutempo	kasvu_tempo	NOUN	S	Case=Nom|Number=Sing	8	nsubj:cop	8:nsubj	_
6	olema	olema	AUX	V	Case=Ill|VerbForm=Sup|Voice=Act	8	cop	8:cop	_
7	6-7	6-7	NUM	N	NumForm=Digit|NumType=Range	8	nummod	8:nummod	SpaceAfter=No
8	%	%	SYM	Z	_	0	root	0:root	_
9	aastas	aasta	NOUN	S	Case=Ine|Number=Sing	8	nmod	8:nmod	SpaceAfter=No
10	.	.	PUNCT	Z	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	ABC	ABC	PROPN	S	Case=Nom|Number=Sing	0	root	0:root	NE=B-Prod
2	"	"	PUNCT	Z	_	4	punct	4:punct	NE=B-Prod|SpaceAfter=No
3	The	the	DET	T	Definite=Def|PronType=Art	4	det	4:det	Lang=en|NE=I-Prod
4	Lexicon	lexicon	NOUN	T	Number=Sing	1	nmod	1:nmod	Lang=en|NE=I-Prod
5	Of	of	ADP	T	_	6	case	6:case	Lang=en|NE=I-Prod
6	Love	love	NOUN	T	Number=Sing	4	nmod	4:nmod	Lang=en|NE=I-Prod|SpaceAfter=No
7	"	"	PUNCT	Z	_	4	punct	4:punct	NE=I-Prod
8	(	(	PUNCT	Z	_	9	punct	9:punct	SpaceAfter=No
9	Mercury	Mercury	PROPN	S	Case=Nom|Number=Sing	1	parataxis	1:parataxis	NE=B-Org|SpaceAfter=No
10	,	,	PUNCT	Z	_	9	punct	9:punct	_
11	1982	1982	NUM	N	NumForm=Digit|NumType=Card	9	nummod	9:nummod	SpaceAfter=No
12	)	)	PUNCT	Z	_	9	punct	9:punct	_

~~~


