---
layout: base
title:  'Statistics of aux in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `aux`

This relation is universal.

8444 nodes (4%) are attached to their parents as `aux`.

6004 instances of `aux` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.17195641875888.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (6470; 77% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1462; 17% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (326; 4% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (122; 1% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (31; 0% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (17; 0% instances), <tt><a href="hr_set-pos-DET.html">DET</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="hr_set-pos-NUM.html">NUM</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="hr_set-pos-PRON.html">PRON</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="hr_set-pos-ADP.html">ADP</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	Bytyci	Bytyci	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	kako	kako	SCONJ	Cs	_	7	mark	_	_
4	bi	biti	AUX	Vaa3p	Mood=Cnd|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	_
5	jači	jak	ADJ	Agcmpny	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	6	amod	_	_
6	sindikati	sindikat	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
7	doveli	dovesti	VERB	Vmp-pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	2	ccomp	_	_
8	do	do	ADP	Sg	Case=Gen	10	case	_	_
9	boljih	dobar	ADJ	Agcmpgy	Case=Gen|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	10	amod	_	_
10	ishoda	ishod	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Toliko	toliko	DET	Rgp	Degree=Pos|PronType=Dem	3	det:numgov	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	radnika	radnik	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	_
4	otpušteno	otpustiti	ADJ	Appnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	Otto	Otto	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
2	Rehhagel	Rehhagel	X	Xf	Foreign=Yes	1	flat	_	_
3	devet	devet	NUM	Mlc	NumType=Card	5	nummod	_	_
4	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	godina	godina	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	ToDo=nmod
6	bio	biti	AUX	Vap-sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	cop	_	_
7	trener	trener	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	grčke	grčki	ADJ	Agpfsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	reprezentacije	reprezentacija	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No|ToDo=nmod
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


