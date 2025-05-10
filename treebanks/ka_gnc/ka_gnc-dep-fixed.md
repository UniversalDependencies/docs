---
layout: base
title:  'Statistics of fixed in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `fixed`

This relation is universal.

43 nodes (0%) are attached to their parents as `fixed`.

43 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11627906976744.

The following 9 pairs of parts of speech are connected with `fixed`: <tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (11; 26% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (10; 23% instances), <tt><a href="ka_gnc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (6; 14% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (3; 7% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (3; 7% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="ka_gnc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ka_gnc-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	სოფიმ	სოფი	PROPN	N_Prop_Anthr_FirstName_Erg	Case=Erg|NameType=Prs	3	nsubj	_	LMSeg:სოფი
2	არ	არ	ADV	Adv_Neg	_	3	advmod:neg	_	LMSeg:არ
3	იცოდა	ცოდნა	VERB	V_MedPass_Impf_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp	0	root	_	LMSeg:ცოდნ[ა]/ც|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
5	დათანხმებოდა	დათანხმება	VERB	V_Pass_PluPerf_Pv_S:3Sg_IO:3_NonStand	Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Pqp	3	ccomp	_	LMSeg:და·თანხმებ[ა]/თანხმ
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
1	ჯერ	ჯერ	ADV	Adv_Sent_udMWE	ExtPos=ADV	3	advmod	_	LMSeg:ჯერ
2	კიდევ	კიდევ	ADV	Adv_Deg	_	1	fixed	_	LMSeg:კიდევ
3	ბავშვი	ბავშვი	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	0	root	_	LMSeg:ბავშვ·ი
4	ვიყავი	არის	AUX	V_Pass_Aor_S:1Sg	Number[subj]=Sing|Person[subj]=1|Tense=Past	3	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
6	ძველ	ძველი	ADJ	A_Dat_Att	Case=Dat	7	amod	_	LMSeg:ძველ·ი
7	ეგვიპტეს	ეგვიპტე	PROPN	N_Prop_Top_Area_Dat	Case=Dat|NameType=Geo	9	iobj	_	LMSeg:ეგვიპტ[ე]
8	რომ	რომ	SCONJ	Compl	_	9	mark	_	LMSeg:რომ
9	გადავეყარე	გადაყრა	VERB	V_Pass_Aor_Pv_S:1Sg_IO:3	Number[subj]=Sing|Person[io]=3|Person[subj]=1|Tense=Past	3	advcl	_	LMSeg:გადა·ყრ[ა]/ყარ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	მაგრამ	მაგრამ	CCONJ	Cj_Coord	_	10	cc	_	LMSeg:მაგრამ
2	როგორც	როგორც	SCONJ	Cj_Sub	ExtPos=SCONJ	6	mark	_	LMSeg:როგორც
3	კი	კი	ADV	Adv_Disc	_	2	fixed	_	LMSeg:კი
4	ზღვა	ზღვა	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	6	obl	_	LMSeg:ზღვ[ა]|SpaceAfter=No
5	ში	_ში	ADP	Pp	_	4	case	_	LMSeg:_ში
6	გავიდოდა	გასვლა	VERB	V_MedPass_Cond_Pv_S:3Sg	Mood=Cnd|Number[subj]=Sing|Person[subj]=3|Tense=Pres	10	advcl	_	LMSeg:გა·სვლ[ა]/ვ{ი}დ|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
8	ძალიან	ძალიან	ADV	Adv_Deg	_	9	advmod	_	LMSeg:ძალიან
9	შორეული	შორეული	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	10	xcomp	_	LMSeg:შორეულ·ი
10	ხდებოდა	ხდომა	VERB	V_Pass_Impf_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Imp	0	root	_	LMSeg:*·ხდომ[ა]/ხდ|SpaceAfter=No
11	.	.	PUNCT	Punct_Period	_	10	punct	_	LMSeg:.

~~~


