---
layout: base
title:  'Statistics of dep in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `dep`

This relation is universal.

17 nodes (0%) are attached to their parents as `dep`.

15 instances of `dep` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.23529411764706.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (8; 47% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (6; 35% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (2; 12% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADP.html">ADP</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	Tlelevš	tlelevš	X	X	_	2	dep	_	Dep=2|Rel=PPart
2	ostal	ostati	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	kjer	kjer	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	te	ti	PRON	Pp2-sa--y	Case=Acc|Number=Sing|Person=2|PronType=Prs|Variant=Short	6	obj	_	Dep=6|Rel=Obj
6	mam	meti	VERB	Vmpr1s-n	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	advcl	_	Dep=2|Rel=AdvO
7	pred	pred	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	očmi	oči	NOUN	Ncfpi	Case=Ins|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No|Dep=6|Rel=AdvO
9	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 dep	color:blue
1	1470	1470	NUM	Mdc	NumForm=Digit|NumType=Card	9	dep	_	Dep=0|Rel=Root
2	Ludvik	Ludvik	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	Dep=9|Rel=Sb
3	XI.	XI.	NUM	Mro	NumForm=Roman|NumType=Ord	2	nummod	_	Dep=2|Rel=Atr
4	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No|Dep=0|Rel=Root
5	142383	142383	NUM	Mdc	NumForm=Digit|NumType=Card	2	nummod	_	SpaceAfter=No|Dep=0|Rel=Root
6	)	)	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root
7	s	z	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	Švicarji	Švicar	PROPN	Npmpi	Case=Ins|Gender=Masc|Number=Plur	9	obl	_	Dep=9|Rel=Obj
9	sklene	skleniti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
10	zavezništvo	zavezništvo	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	Dep=9|Rel=Obj
11	proti	proti	ADP	Sd	Case=Dat	12	case	_	Dep=12|Rel=Atr
12	Burgundcem	Burgundec	PROPN	Npmpd	Case=Dat|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No|Dep=10|Rel=Atr
13	.	.	PUNCT	Z	_	9	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 1 dep	color:blue
1	20	20	NUM	Mdc	NumForm=Digit|NumType=Card	17	dep	_	Dep=0|Rel=Root
2	Predniki	prednik	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	17	nsubj	_	SpaceAfter=No|Dep=14|Rel=Sb
3	,	,	PUNCT	Z	_	12	punct	_	Dep=0|Rel=Root
4	ki	ki	SCONJ	Cs	_	12	mark	_	Dep=5|Rel=Conj
5	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	cop	_	Dep=2|Rel=Atr
6	za	za	ADP	Sa	Case=Acc	7	case	_	Dep=7|Rel=Atr
7	Nuere	Nuer	PROPN	Npmpa	Case=Acc|Gender=Masc|Number=Plur	12	obl	_	Dep=5|Rel=Obj
8	v	v	ADP	Sl	Case=Loc	10	case	_	Dep=10|Rel=Atr
9	nekem	nek	DET	Pi-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Ind	10	det	_	Dep=10|Rel=Atr
10	smislu	smisel	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	12	obl	_	Dep=5|Rel=AdvM
11	ideološka	ideološki	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	Dep=12|Rel=Atr
12	opora	opora	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	2	acl	_	SpaceAfter=No|Dep=5|Rel=Atr
13	,	,	PUNCT	Z	_	12	punct	_	Dep=0|Rel=Root
14	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	17	cop	_	Dep=0|Rel=Root
15	torej	torej	ADV	Rgp	Degree=Pos	17	advmod	_	Dep=0|Rel=Root
16	tudi	tudi	PART	Q	_	17	advmod	_	Dep=0|Rel=Root
17	institucija	institucija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	Dep=14|Rel=Atr
18	za	za	ADP	Sa	Case=Acc	19	case	_	Dep=19|Rel=Atr
19	mišljenje	mišljenje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	17	nmod	_	SpaceAfter=No|Dep=17|Rel=Atr
20	,	,	PUNCT	Z	_	22	punct	_	Dep=22|Rel=Conj
21	za	za	ADP	Sa	Case=Acc	22	case	_	Dep=22|Rel=Atr
22	spominjanje	spominjanje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	19	conj	_	Dep=19|Rel=Coord
23	in	in	CCONJ	Cc	_	24	cc	_	Dep=24|Rel=Conj
24	pozabljanje	pozabljanje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	19	conj	_	SpaceAfter=No|Dep=19|Rel=Coord
25	.	.	PUNCT	Z	_	17	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


