---
layout: base
title:  'Statistics of fixed in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `fixed`

This relation is universal.

101 nodes (0%) are attached to their parents as `fixed`.

101 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04950495049505.

The following 9 pairs of parts of speech are connected with `fixed`: <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (67; 66% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (16; 16% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (12; 12% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	See	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	2	det	2:det	_
2	kôik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot|Typo=Yes	5	obj	5:obj	CorrectForm=kõik
3	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ära	ära	ADV	D	_	5	compound:prt	5:compound	_
5	aurustada	aurustama	VERB	V	VerbForm=Inf	3	csubj	3:csubj	_
6	enne	enne	ADV	D	ExtPos=SCONJ	9	mark	9:mark	_
7	kui	kui	SCONJ	J	_	6	fixed	6:fixed	_
8	pôlema	põlema	NOUN	S	Case=Nom|Number=Sing|Typo=Yes	9	obl	9:obl	CorrectForm=põlema
9	pääsed	pääsema	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Newtoni	Newton	PROPN	S	Case=Gen|Number=Sing	7	obl	7:obl	NE=B-Per
2	järgi	järgi	ADP	K	AdpType=Post	1	case	1:case	_
3	jah	jah	ADV	D	_	7	advmod	7:advmod	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
5	meeter	meeter	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	7:nsubj	_
6	igalpool	igal_pool	ADV	D	_	7	advmod	7:advmod	_
7	meeter	meeter	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
8	ja	ja	CCONJ	J	_	12	cc	12:cc	_
9	minut	minut	NOUN	S	Case=Nom|Number=Sing	12	nsubj:cop	12:nsubj	_
10	igal	iga	PRON	P	Case=Ade|ExtPos=ADV|Number=Sing|PronType=Tot	12	advmod	12:advmod	_
11	pool	pool	ADV	D	_	10	fixed	10:fixed	_
12	minut	minut	NOUN	S	Case=Par|Number=Sing	7	conj	0:root|7:conj	SpaceAfter=No
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
3	nii	nii	ADV	D	ExtPos=ADV	9	advmod	9:advmod	_
4	kui	kui	SCONJ	J	_	3	fixed	3:fixed	_
5	nii	nii	ADV	D	_	3	fixed	3:fixed	_
6	kõige	kõige	ADV	D	_	7	advmod	7:advmod	_
7	olulisem	olulisem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	9	obj	9:obj	_
8	sisse	sisse	ADV	D	_	9	compound:prt	9:compound	_
9	pandud	panema	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


