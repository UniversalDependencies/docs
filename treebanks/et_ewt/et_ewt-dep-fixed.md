---
layout: base
title:  'Statistics of fixed in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `fixed`

This relation is universal.

85 nodes (0%) are attached to their parents as `fixed`.

85 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05882352941176.

The following 9 pairs of parts of speech are connected with `fixed`: <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (53; 62% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (13; 15% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (12; 14% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	mauxxx	mauxxx	PROPN	S	Case=Nom|Number=Sing	8	parataxis	8:parataxis	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	Ega	ega	ADV	D	Polarity=Neg	8	advmod	8:advmod	_
4	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	8:nsubj	_
5	kahju	kahju	NOUN	S	Case=Par|Number=Sing	8	obj	8:obj	_
6	ka	ka	ADV	D	_	8	advmod	8:advmod	_
7	ei	ei	AUX	V	Connegative=Yes	8	aux	8:aux	_
8	tee	tegema	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
9	,	,	PUNCT	Z	_	12	punct	12:punct	_
10	nii	nii	ADV	D	_	12	advmod	12:advmod	_
11	et	et	SCONJ	J	_	10	fixed	10:fixed	_
12	lase	laskma	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	8:conj	_
13	ülesse	ülesse	ADV	D	_	12	compound:prt	12:compound	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Newtoni	Newton	PROPN	S	Case=Gen|Number=Sing	7	obl	7:obl	_
2	järgi	järgi	ADP	K	AdpType=Post	1	case	1:case	_
3	jah	jah	ADV	D	_	7	advmod	7:advmod	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
5	meeter	meeter	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	7:nsubj	_
6	igalpool	igal_pool	ADV	D	_	7	advmod	7:advmod	_
7	meeter	meeter	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
8	ja	ja	CCONJ	J	_	12	cc	12:cc	_
9	minut	minut	NOUN	S	Case=Nom|Number=Sing	12	nsubj:cop	12:nsubj	_
10	igal	iga	PRON	P	Case=Ade|Number=Sing|PronType=Tot	12	obl	12:obl	_
11	pool	pool	ADV	D	_	10	fixed	10:fixed	_
12	minut	minut	NOUN	S	Case=Par|Number=Sing	7	conj	7:conj	SpaceAfter=No
13	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 fixed	color:blue
1	Sinna	sinna	ADV	D	_	9	advmod	9:advmod	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
3	nii	nii	ADV	D	_	9	advmod	9:advmod	_
4	kui	kui	SCONJ	J	_	3	fixed	3:fixed	_
5	nii	nii	ADV	D	_	3	fixed	3:fixed	_
6	kõige	kõige	ADV	D	_	7	advmod	7:advmod	_
7	olulisem	olulisem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	9	obj	9:obj	_
8	sisse	sisse	ADV	D	_	9	compound:prt	9:compound	_
9	pandud	panema	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


