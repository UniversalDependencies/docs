---
layout: base
title:  'Statistics of appos in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `appos`

This relation is universal.

71 nodes (1%) are attached to their parents as `appos`.

71 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3943661971831.

The following 17 pairs of parts of speech are connected with `appos`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (32; 45% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (7; 10% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (5; 7% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Шоферыс	шофёр	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	том	том	ADJ	A	Case=Nom|Number=Sing	4	amod	_	_
4	зонка	зонка	NOUN	N	Case=Nom|Number=Sing	1	appos	_	_
5	на	на	ADV	Adv	_	4	advmod:tmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	дзикӧдз	дзик	ADV	Adv	Case=Ter	8	advmod:deg	_	_
8	растеряйтчис	растеряйтчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 appos	color:blue
1	—	—	PUNCT	PUNCT	_	5	punct	_	_
2	A	а	CCONJ	CC	_	5	cc	_	_
3	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	5	nsubj:cop	_	GTtags=Dem,Sg,Nom
4	нӧ	нӧ	ADV	Adv	_	3	advmod	_	_
5	кодъяс	коді	PRON	Pron	Case=Nom|Number=Plur|PronType=Int	0	root	_	GTtags=Interr,Pl,Nom|SpaceAfter=No
6	?	?	PUNCT	CLB	_	5	punct	_	_
7	—	—	PUNCT	PUNCT	_	8	punct	_	_
8	индіс	индыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	parataxis	_	GTtags=TV,Ind,Prt1,Sg3
9	мамыс	мам	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	GTtags=Sg,Nom,PxSg3
10	воддза	воддза	ADV	Adv	Case=Nom|Number=Sing	8	obl	_	GTtags=Sg,Nom
11	кык	кык	NUM	Num	Case=Nom|Number=Sing|NumType=Card	12	nummod	_	GTtags=Card,Sg,Nom
12	пиыс	пи	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	appos	_	GTtags=Sg,Nom,PxSg3
13	вылӧ	вылӧ	ADP	Adp	Case=Ill	12	case	_	GTtags=Ill|SpaceAfter=No
14	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Ми	ме	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	GTtags=Pers,Pl1,Nom|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	зонпосни	зонпосни	NOUN	N	Case=Nom|Number=Sing	1	appos	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	туриясӧн	тури	NOUN	N	Case=Ins|Number=Plur	6	obl	_	GTtags=Pl,Ins
6	вайӧм	вайны	VERB	V	Tense=Past|VerbForm=Part	7	acl	_	GTtags=TV,Der,Der/ӧм,PastPtc
7	шудсӧ	шуд	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	GTtags=Sg,Acc,PxSg3
8	гӧгӧрволім	гӧгӧрволыны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,Pl1
9	ас	ас	PRON	Pron	PronType=Prs|Reflex=Yes	10	det	_	GTtags=Det,Refl,Abs
10	ног	ног	NOUN	N	Case=Nom|Number=Sing	8	obl	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


