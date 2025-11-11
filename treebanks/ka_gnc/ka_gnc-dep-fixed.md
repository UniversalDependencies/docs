---
layout: base
title:  'Statistics of fixed in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `fixed`

This relation is universal.

51 nodes (0%) are attached to their parents as `fixed`.

51 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13725490196078.

The following 9 pairs of parts of speech are connected with `fixed`: <tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (13; 25% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (12; 24% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (6; 12% instances), <tt><a href="ka_gnc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (6; 12% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (5; 10% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (3; 6% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="ka_gnc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ka_gnc-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	სოფიმ	სოფი	PROPN	N_Prop_Anthr_FirstName_Erg	Case=Erg|NameType=Prs	3	nsubj	_	LMSeg:სოფი
2	არ	არ	ADV	Adv_Neg	_	3	advmod:neg	_	LMSeg:არ
3	იცოდა	ცოდნა	VERB	V_MedPass_Impf_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:ცოდნ[ა]/ც|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
5	დათანხმებოდა	დათანხმება	VERB	V_Pass_PluPerf_Pv_S:3Sg_IO:3_NonStand	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Pqp|VerbForm=Fin	3	ccomp	_	LMSeg:და·თანხმებ[ა]/თანხმ
6	თუ	თუ	CCONJ	Cj_Coord	ExtPos=SCONJ	5	mark	_	LMSeg:თუ
7	არა	არ	ADV	Adv_Neg_L	_	6	fixed	_	LMSeg:არ|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	ჯერ	ჯერ	ADV	Adv_Sent_udMWE	ExtPos=ADV	4	advmod	_	LMSeg:ჯერ
2	კიდევ	კიდევ	ADV	Adv_Deg	_	1	fixed	_	LMSeg:კიდევ
3	მაღლა	მაღლა	ADV	Adv_Loc	AdvType=Loc	4	advmod	_	LMSeg:მაღლა
4	მივიწევდით	მიწევა	VERB	V_Act_Impf_Pv_SV_S:1Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:მი·წევ[ა]/წ[ევ]|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	რა	რა	PRON	Pron_Int_Nonhum_Nom_Att	Case=Nom|ExtPos=ADV	5	advmod	_	LMSeg:რ[ა]
2	თქმა	თქმა	NOUN	N_VN_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	1	fixed	_	LMSeg:თქმ[ა]/თქმ
3	უნდა	უნდა	AUX	Modal	_	1	fixed	_	LMSeg:უნდა|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
5	დავთანხმდი	დათანხმება	VERB	V_Pass_Aor_Pv_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:და·თანხმებ[ა]/თანხმ|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


