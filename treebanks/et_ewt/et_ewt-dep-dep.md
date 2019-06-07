---
layout: base
title:  'Statistics of dep in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `dep`

This relation is universal.

12 nodes (0%) are attached to their parents as `dep`.

7 instances of `dep` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.91666666666667.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (3; 25% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 8% instances).


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


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 33 dep	color:blue
1	pani	panema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	mingi	mingi	DET	P	Case=Gen|Number=Sing|PronType=Ind	4	det	4:det	_
3	naeru	naer	NOUN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	_
4	märgi	märk	NOUN	S	Case=Gen|Number=Sing	1	obj	1:obj	_
5	ka	ka	ADV	D	_	6	advmod	6:advmod	_
6	veel	veel	ADV	D	_	1	advmod	1:advmod	_
7	nii	nii	ADV	D	_	8	advmod	8:advmod	_
8	vastik	vastik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	1	conj	1:conj	_
9	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
10	olla	olema	VERB	V	VerbForm=Inf	8	csubj:cop	8:csubj	SpaceAfter=No
11	,	,	PUNCT	Z	_	16	punct	16:punct	_
12	kooklis	kool	NOUN	S	Case=Ine|Number=Sing	16	obl	16:obl	_
13	ka	ka	ADV	D	_	16	advmod	16:advmod	_
14	mingi	mingi	DET	P	Case=Nom|Number=Sing|PronType=Ind	16	det	16:det	_
15	küikk	kõik	PRON	P	Case=Nom|Number=Plur|PronType=Tot	16	nsubj	16:nsubj	_
16	pelgavad	pelgama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	1:conj	_
17	mind	mina	PRON	P	Case=Par|Number=Sing|Person=1|PronType=Prs	16	obj	16:obj	_
18	jja	ja	CCONJ	J	_	19	cc	19:cc	_
19	sosistavad	sosistama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	1:conj	_
20	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	19	obl	19:obl	_
21	ees	ees	ADP	K	AdpType=Post	20	case	20:case	_
22	Mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	25	obj	25:obj	_
23	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	25	nsubj	25:nsubj	_
24	neile	tema	PRON	P	Case=All|Number=Plur|Person=3|PronType=Prs	25	obl	25:obl	_
25	ütlema	ütlema	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	1	parataxis	1:parataxis	_
26	pean	pidama	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	25	aux	25:aux	SpaceAfter=No
27	?	?	PUNCT	Z	_	25	punct	25:punct	_
28	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	29	nsubj	29:nsubj	_
29	ütlevad	ütlema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	1:parataxis	_
30	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	29	obl	29:obl	_
31	migni	mingi	DET	P	Case=Nom|Number=Sing|PronType=Ind	33	det	33:det	_
32	loll	loll	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	33	amod	33:amod	_
33	sõber	sõber	NOUN	S	Case=Nom|Number=Sing	29	dep	29:dep	_
34	ausõna	au_sõna	NOUN	S	Case=Nom|Number=Sing	29	obl	29:obl	SpaceAfter=No
35	!	!	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 dep	color:blue
1	Minuarust	minu_arust	ADV	D	_	5	advmod	5:advmod	_
2	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	5	nsubj:cop	5:nsubj	_
3	ei	ei	AUX	V	Polarity=Neg	5	aux	5:aux	_
4	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	õige	õige	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	9:punct	_
7	et	et	SCONJ	J	_	9	mark	9:mark	_
8	moslemid	moslem	NOUN	S	Case=Nom|Number=Plur	9	nsubj	9:nsubj	_
9	tapavad	tapma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	dep	5:dep	_
10	kristlasi	kristlane	NOUN	S	Case=Par|Number=Plur	9	obj	9:obj	SpaceAfter=No
11	!	!	PUNCT	Z	_	5	punct	5:punct	_

~~~


