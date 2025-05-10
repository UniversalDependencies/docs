---
layout: base
title:  'Statistics of obj in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `obj`

This relation is universal.

939 nodes (5%) are attached to their parents as `obj`.

672 instances of `obj` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0010649627263.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (714; 76% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (165; 18% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (21; 2% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (21; 2% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-DET.html">DET</a></tt> (12; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obj	color:blue
1	გრაფ	გრაფი	NOUN	N_Hum_Qual_Dat_Att	Animacy=Anim|Case=Dat	2	nmod	_	LMSeg:გრაფ·ი
2	სეგედის	სეგედი	PROPN	N_Prop_Anthr_LastName_Dat_Dialect	Case=Dat|NameType=Prs	9	nsubj	_	LMSeg:სეგედი
3	ჩვენი	ჩვენი	PRON	Pron_Poss_Poss1Pl_Gen_Att	Case=Gen|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	4	det:poss	_	LMSeg:ჩვენ·ი
4	სახლის	სახლი	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	5	nmod	_	LMSeg:სახლ·ი
5	სარდაფ	სარდაფი	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	9	obl	_	LMSeg:სარდაფ·ი|SpaceAfter=No
6	ში	_ში	ADP	Pp	_	5	case	_	LMSeg:_ში
7	ერთი	ერთი	NUM	Num_Card_Alpha_Nom_Att	Case=Nom|NumType=Card	8	nummod	_	LMSeg:ერთ·ი
8	ოთახი	ოთახი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	9	obj	_	LMSeg:ოთახ·ი
9	ეჭირა	ჭერა	VERB	V_MedPass_Inv_Aor_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Voice=Inv	0	root	_	LMSeg:ჭერ[ა]/ჭირ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	ვერაფერს	ვერაფერი	PRON	Pron_Neg_Nonhum_Dat_Sg_Pot	Case=Dat|Number=Sing	2	obj	_	LMSeg:ვერაფ[ე]რ·ი
2	გავხდი	გახდა	VERB	V_Act_Fut_Pv_S:1Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Fut	0	root	_	LMSeg:გა·ხდ[ა]/ხდ|SpaceAfter=No
3	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obj	color:blue
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


