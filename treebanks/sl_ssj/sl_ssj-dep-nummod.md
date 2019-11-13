---
layout: base
title:  'Statistics of nummod in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `nummod`

This relation is universal.

1610 nodes (1%) are attached to their parents as `nummod`.

1286 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39565217391304.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (1495; 93% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (59; 4% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (47; 3% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nummod	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nummod	color:blue
1	Danes	danes	ADV	Rgp	Degree=Pos	2	advmod	_	Dep=2|Rel=AdvO
2	ima	imeti	VERB	Vmpr3s-n	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
3	Primorje	Primorje	PROPN	Npnsn	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	Dep=2|Rel=Sb
4	že	že	PART	Q	_	2	advmod	_	Dep=0|Rel=Root
5	več	več	DET	Rgc	PronType=Ind	9	advmod	_	Dep=9|Rel=Atr
6	kot	kot	SCONJ	Cs	_	5	fixed	_	Dep=9|Rel=Atr
7	91	91	NUM	Mdc	NumForm=Digit|NumType=Card	9	nummod	_	SpaceAfter=No|Dep=9|Rel=Atr
8	-	-	PUNCT	Z	_	9	punct	_	SpaceAfter=No|Dep=0|Rel=Root
9	odstotni	odstoten	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	Dep=10|Rel=Atr
10	delež	delež	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	Dep=2|Rel=Obj
11	Gradisa	Gradis	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	Dep=10|Rel=Atr
12	GPL	GPL	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No|Dep=11|Rel=Atr
13	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Od	od	ADP	Sg	Case=Gen	2	case	_	Dep=2|Rel=Atr
2	izstrelitve	izstrelitev	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	7	obl	_	Dep=7|Rel=AdvO
3	sonde	sonda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
4	Pioneer	Pioneer	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
5	VI	VI	NUM	Mrc	NumForm=Roman|NumType=Card	4	nummod	_	Dep=4|Rel=Atr
6	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Dep=7|Rel=PPart
7	minilo	miniti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
8	že	že	PART	Q	_	7	advmod	_	Dep=0|Rel=Root
9	35	35	NUM	Mdc	NumForm=Digit|NumType=Card	10	nummod	_	Dep=10|Rel=Atr
10	let	leto	NOUN	Ncnpg	Case=Gen|Gender=Neut|Number=Plur	7	nsubj	_	SpaceAfter=No|Dep=7|Rel=Sb
11	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~


