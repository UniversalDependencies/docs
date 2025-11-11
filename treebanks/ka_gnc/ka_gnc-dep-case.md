---
layout: base
title:  'Statistics of case in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `case`

This relation is universal.

1336 nodes (6%) are attached to their parents as `case`.

1325 instances of `case` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07709580838323.

The following 6 pairs of parts of speech are connected with `case`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (1048; 78% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (169; 13% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (69; 5% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (25; 2% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (17; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (8; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	კარ	კარი	NOUN	N_Dat_Sg_PP_PP:ზე	Case=Dat|Number=Sing	4	obl	_	LMSeg:კარ·ი|SpaceAfter=No
2	ზე	_ზე	ADP	Pp	_	1	case	_	LMSeg:_ზე
3	იმწამსვე	იმწამსვე	ADV	Adv	_	4	advmod	_	LMSeg:იმწამსვე
4	დააკაკუნეს	დაკაკუნება	VERB	V_Act_Aor_Pv_S:3Pl_DO:3	Mood=Ind|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:და·კაკუნებ[ა]/კაკუნ|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	თუმცა	თუმცა	SCONJ	Cj_Sub	_	8	cc	_	LMSeg:თუმცა
2	ამჯერად	ამჯერად	ADV	Adv_Temp	AdvType=Tim	8	advmod	_	LMSeg:ამჯერად
3	მის	ის	PRON	Pron_Pers_3_Gen_Sg_PP_PP:თვის	Case=Gen|Number=Sing|PronType=Prs	8	obl	_	LMSeg:ის|SpaceAfter=No
4	თვის	_თვის	ADP	Pp	_	3	case	_	LMSeg:_თვის
5	ამას	ეს	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	8	nsubj	_	LMSeg:ეს
6	მნიშვნელობა	მნიშვნელობა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	8	obj	_	LMSeg:მნიშვნელობ[ა]
7	არ	არ	ADV	Adv_Neg	_	8	advmod:neg	_	LMSeg:არ
8	ჰქონდა	ქონა	VERB	V_MedPass_Inv_Impf_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin|Voice=Inv	0	root	_	LMSeg:ქონ[ა]/ქონ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	მაშინვე	მაშინვე	ADV	Adv_Temp	AdvType=Tim	2	advmod	_	LMSeg:მაშინვე
2	მითხრა	თქმა	VERB	V_Act_Aor_S:3Sg_DO:3_IO:1Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:თქმ[ა]/თხ[ა]რ|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
4	გვატემალა	გვატემალა	PROPN	N_Prop_Top_Area_Dat_PP_PP:ში	Case=Dat|NameType=Geo	6	obl	_	LMSeg:გვატემალა|SpaceAfter=No
5	ში	_ში	ADP	Pp	_	4	case	_	LMSeg:_ში
6	მივფრინავ	მიფრენა	VERB	V_MedAct_Pres_Pv_S:1Sg_Encl:IndSp3	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|VerbForm=Fin	2	ccomp:speech	_	LMSeg:მი·ფრენ[ა]/ფრინ|SpaceAfter=No
7	ო	_ო	PART	Prt_IndSp3	Evident=Nfh	6	mark	_	LMSeg:_ო|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


