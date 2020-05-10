---
layout: base
title:  'Statistics of cop in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `cop`

This relation is universal.

3509 nodes (2%) are attached to their parents as `cop`.

2897 instances of `cop` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24365916215446.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1662; 47% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1485; 42% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (172; 5% instances), <tt><a href="hr_set-pos-DET.html">DET</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (66; 2% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (54; 2% instances), <tt><a href="hr_set-pos-PRON.html">PRON</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (33; 1% instances), <tt><a href="hr_set-pos-NUM.html">NUM</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (16; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (14; 0% instances), <tt><a href="hr_set-pos-X.html">X</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="hr_set-pos-ADP.html">ADP</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-PART.html">PART</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-SYM.html">SYM</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cop	color:blue
1	"	"	PUNCT	Z	_	7	punct	_	SpaceAfter=No
2	Povlačiti	povlačiti	VERB	Vmn	VerbForm=Inf	7	csubj	_	_
3	paralele	paralela	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	2	obj	_	_
4	među	među	ADP	Si	Case=Ins	5	case	_	_
5	njima	oni	PRON	Pp3-pi	Case=Ins|Number=Plur|Person=3|PronType=Prs	3	nmod	_	_
6	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	pogrešno	pogrešan	ADJ	Agpnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	Z	_	10	punct	_	_
10	rekao	reći	VERB	Vmp-sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	parataxis	_	_
11	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	Esat	Esat	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	Berisha	Berisha	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
3	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	jedan	jedan	NUM	Mlcmsn	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	6	nummod	_	_
5	takav	takav	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	primjer	primjer	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Bolje	dobro	ADV	Rgc	Degree=Cmp	0	root	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	zaustaviti	zaustaviti	VERB	Vmn	VerbForm=Inf	1	csubj	_	_
4	sukobe	sukob	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	_
5	i	i	CCONJ	Cc	_	6	cc	_	_
6	razviti	razviti	VERB	Vmn	VerbForm=Inf	3	conj	_	_
7	poslovanje	poslovanje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	1	punct	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	1	punct	_	_

~~~


