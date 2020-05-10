---
layout: base
title:  'Statistics of dep in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `dep`

This relation is universal.

26 nodes (0%) are attached to their parents as `dep`.

14 instances of `dep` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.65384615384615.

The following 17 pairs of parts of speech are connected with `dep`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (3; 12% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (3; 12% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (3; 12% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (2; 8% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (2; 8% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 dep	color:blue
1	cigs	cigs	PROPN	S	Case=Nom|Number=Sing	6	parataxis	6:parataxis	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	Mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	6	dep	6:dep	_
4	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	nmod	5:nmod	_
5	msni	msni	NOUN	S	Case=Gen|Number=Sing	6	nmod	6:nmod	_
6	inimestel	inimene	NOUN	S	Case=Ade|Number=Plur	0	root	0:root	_
7	viga	viga	NOUN	S	Case=Par|Number=Sing	6	nsubj:cop	6:nsubj	_
8	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	SpaceAfter=No
9	?	?	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dep	color:blue
1	eripruul	eri_pruul	PROPN	S	Case=Nom|Number=Sing	7	parataxis	7:parataxis	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	Mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	7	dep	7:dep	_
4	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	7:nsubj	_
5	neid	see	DET	P	Case=Par|Number=Plur|PronType=Dem	6	det	6:det	_
6	eksameid	eksam	NOUN	S	Case=Par|Number=Plur	7	obj	7:obj	_
7	treid	treidma	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
8	?	?	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 dep	color:blue
1	või	või	CCONJ	J	_	3	cc	3:cc	_
2	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
3	kehtib	kehtima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ka	ka	ADV	D	_	5	advmod	5:advmod	_
5	tänapäeval	täna_päev	NOUN	S	Case=Ade|Number=Sing	3	obl	3:obl	SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	9:punct	_
7	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	9	obj	9:obj	_
8	Jesaja	Jesaja	PROPN	S	Case=Nom|Number=Sing	9	nsubj	9:nsubj	_
9	ütleb	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	dep	3:dep	SpaceAfter=No
10	:	:	PUNCT	Z	_	9	punct	9:punct	_
11	silmad	silm	NOUN	S	Case=Nom|Number=Plur	12	nsubj:cop	12:nsubj	_
12	neil	tema	PRON	P	Case=Ade|Number=Plur|Person=3|PronType=Prs	9	parataxis	9:parataxis	_
13	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	SpaceAfter=No
14	,	,	PUNCT	Z	_	18	punct	18:punct	_
15	aga	aga	CCONJ	J	_	18	cc	18:cc	_
16	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	18	nsubj	18:nsubj	_
17	ei	ei	AUX	V	Polarity=Neg	18	aux	18:aux	_
18	näe	nägema	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	12:conj	SpaceAfter=No
19	;	;	PUNCT	Z	_	21	punct	21:punct	_
20	kõrvad	kõrv	NOUN	S	Case=Nom|Number=Plur	21	nsubj:cop	21:nsubj	_
21	neil	tema	PRON	P	Case=Ade|Number=Plur|Person=3|PronType=Prs	12	conj	12:conj	_
22	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	cop	21:cop	_
23	aga	aga	CCONJ	J	_	26	cc	26:cc	_
24	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	26	nsubj	26:nsubj	_
25	ei	ei	AUX	V	Polarity=Neg	26	aux	26:aux	_
26	kuule	kuulma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	21	conj	21:conj	SpaceAfter=No
27	?	?	PUNCT	Z	_	3	punct	3:punct	_

~~~


