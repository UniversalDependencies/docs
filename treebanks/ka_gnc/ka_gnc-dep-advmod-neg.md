---
layout: base
title:  'Statistics of advmod:neg in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-advmod.html">advmod</a></tt>.

292 nodes (2%) are attached to their parents as `advmod:neg`.

271 instances of `advmod:neg` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19520547945205.

The following 8 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (240; 82% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (31; 11% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (9; 3% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:neg	color:blue
1	ამიტომ	ამიტომ	ADV	Adv_Causal	_	5	advmod	_	LMSeg:ამიტომ
2	კარგა	კარგა	ADJ	A_Dat_Att	Case=Dat	3	amod	_	LMSeg:კარგა
3	ხანს	ხანი	NOUN	N_Temp_Dat_Sg	Case=Dat|Number=Sing	5	obl	_	LMSeg:ხ[ა]ნ·ი
4	არ	არ	ADV	Adv_Neg	_	5	advmod:neg	_	LMSeg:არ
5	ვიცოდი	ცოდნა	VERB	V_MedPass_Impf_S:1Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Imp	0	root	_	LMSeg:ცოდნ[ა]/ც|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
7	როგორი	როგორი	PRON	Pron_Int_Nom_Att	Case=Nom	8	amod	_	LMSeg:როგორ·ი
8	თვალები	თვალი	ADJ	A_Nom_Pl_NewPl_NonStand	Case=Nom|Number=Plur	9	obj	_	LMSeg:თვალ·ი
9	ჰქონდა	ქონა	VERB	V_MedPass_Inv_Impf_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp|Voice=Inv	5	ccomp	_	LMSeg:ქონ[ა]/ქონ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:neg	color:blue
1	სხვა	სხვა	ADJ	A_Nom_Att	Case=Nom	2	amod	_	LMSeg:სხვ[ა]
2	გზა	გზა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	0	root	_	LMSeg:გზ[ა]
3	არ	არ	ADV	Adv_Neg	_	2	advmod:neg	_	LMSeg:არ
4	არის	არის	AUX	V_MedPass_Pres_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Pres	2	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:neg	color:blue
1	სოფი	სოფი	PROPN	N_Prop_Anthr_FirstName_Nom_Att	Case=Nom|NameType=Prs	2	nmod:name	_	LMSeg:სოფი
2	ამუნდსენი	ამუნდსენ	PROPN	N_Prop_Anthr_LastName_Nom	Case=Nom|NameType=Prs	6	nsubj	_	LMSeg:ამუნდსენ
3	არც	არც	ADV	Adv_Deg_udMWE	ExtPos=ADV	6	advmod:neg	_	LMSeg:არც
4	თუ	თუ	ADV	Adv	_	3	fixed	_	LMSeg:თუ
5	ისე	ისე	ADV	Adv_Mann	_	3	fixed	_	LMSeg:ისე
6	კმაყოფილი	კმაყოფილი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	0	root	_	LMSeg:კმაყოფილ·ი
7	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	6	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]
8	თავისი	თავისი	PRON	Pron_Poss_Refl_Poss3Sg_Nom	Case=Nom|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	9	amod	_	LMSeg:თავის·ი
9	გარეგნობით	გარეგნობით	ADV	Adv	_	6	obl	_	LMSeg:გარეგნობით|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


