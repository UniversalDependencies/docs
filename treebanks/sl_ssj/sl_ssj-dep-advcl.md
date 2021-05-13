---
layout: base
title:  'Statistics of advcl in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `advcl`

This relation is universal.

1307 nodes (1%) are attached to their parents as `advcl`.

754 instances of `advcl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.99387911247131.

The following 15 pairs of parts of speech are connected with `advcl`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (941; 72% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (144; 11% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (137; 10% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (22; 2% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (20; 2% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (17; 1% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Juhe	juha	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	Dep=2|Rel=Sb
2	teknejo	tekniti	VERB	Vmbr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	če	če	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	6	obj	_	Dep=6|Rel=Obj
6	serviramo	servirati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	advcl	_	Dep=2|Rel=AdvO
7	vroče	vroč	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	5	acl	_	Dep=6|Rel=Atr
8	ali	ali	CCONJ	Cc	_	11	cc	_	Dep=11|Rel=Conj
9	pa	pa	CCONJ	Cc	_	6	advmod	_	Dep=0|Rel=Root
10	tudi	tudi	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
11	hladne	hladen	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No|Dep=7|Rel=Coord
12	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 advcl	color:blue
1	Če	če	SCONJ	Cs	_	3	mark	_	Dep=3|Rel=Conj
2	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	obj	_	Dep=3|Rel=Obj
3	ve	vedeti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
4	Janša	Janša	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	Dep=3|Rel=Sb
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=7|Rel=Conj
6	če	če	SCONJ	Cs	_	8	mark	_	Dep=7|Rel=Conj
7	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	Dep=13|Rel=AdvO
8	pomembno	pomemben	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	13	advcl	_	SpaceAfter=No|Dep=7|Rel=Atr
9	,	,	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root
10	bom	biti	AUX	Va-f1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	13	aux	_	Dep=13|Rel=PPart
11	z	z	ADP	Si	Case=Ins	12	case	_	Dep=12|Rel=Atr
12	veseljem	veselje	NOUN	Ncnsi	Case=Ins|Gender=Neut|Number=Sing	13	obl	_	Dep=13|Rel=AdvM
13	prisluhnil	prisluhniti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	3	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
14	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 advcl	color:blue
1	Ker	ker	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	imata	imeti	VERB	Vmpr3d-n	Aspect=Imp|Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	advcl	_	Dep=9|Rel=AdvO
3	oba	oba	DET	Pg-mdn	Case=Nom|Gender=Masc|Number=Dual|PronType=Tot	2	nsubj	_	Dep=2|Rel=Sb
4	težave	težava	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	2	obj	_	Dep=2|Rel=Obj
5	z	z	ADP	Si	Case=Ins	6	case	_	Dep=6|Rel=Atr
6	ledvicami	ledvica	NOUN	Ncfpi	Case=Ins|Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No|Dep=4|Rel=Atr
7	,	,	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root
8	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	aux	_	Dep=9|Rel=PPart
9	bilo	biti	AUX	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	13	cop	_	Dep=0|Rel=Root
10	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	13	nsubj	_	Dep=9|Rel=Sb
11	zanju	zame	PRON	Pp3mda--b	Case=Acc|Gender=Masc|Number=Dual|Person=3|PronType=Prs|Variant=Bound	13	obj	_	Dep=13|Rel=Obj
12	zelo	zelo	ADV	Rgp	Degree=Pos	13	advmod	_	Dep=13|Rel=Atr
13	oteženo	otežen	ADJ	Appnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=9|Rel=Atr
14	.	.	PUNCT	Z	_	13	punct	_	Dep=0|Rel=Root

~~~


