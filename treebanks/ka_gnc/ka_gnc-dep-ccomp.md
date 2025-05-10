---
layout: base
title:  'Statistics of ccomp in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="ka_gnc-dep-ccomp-speech.html">ccomp:speech</a></tt>.

197 nodes (1%) are attached to their parents as `ccomp`.

193 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.09644670050761.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (160; 81% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (18; 9% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (8; 4% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (7; 4% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	დავუშვათ	დაშვება	VERB	V_Act_Opt_Pv_[OV]_S:1Pl_DO:3	Mood=Sub|Number[subj]=Plur|Person[obj]=3|Person[subj]=1|Tense=Past	0	root	_	LMSeg:და·შვებ[ა]/შვ|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
3	სიბრძნისა	სიბრძნე	NOUN	N_Gen_Sg_L_PP_PP:თვის	Case=Gen|Number=Sing	7	obl	_	LMSeg:სიბრძნ[ე]|SpaceAfter=No
4	თვის	_თვის	ADP	Pp	_	3	case	_	LMSeg:_თვის
5	ოხუნჯობაც	ოხუნჯობა	NOUN	N_VN_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing|VerbForm=Vnoun	7	nsubj	_	LMSeg:ოხუნჯობ[ა]/ოხუნჯ
6	ზედმეტი	ზედმეტი	ADJ	A_Nom_Att	Case=Nom	7	amod	_	LMSeg:ზედმეტ·ი
7	სიმსუბუქე	სიმსუბუქე	NOUN	N_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	1	ccomp	_	LMSeg:სიმსუბუქ[ე]|SpaceAfter=No
8	ა	არის	AUX	V_MedPass_Pres_S:3Sg_Encl	Number[subj]=Sing|Person[subj]=3|Tense=Pres	7	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	1	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 ccomp	color:blue
1	განა	განა	ADV	Adv_Sent	_	2	advmod	_	LMSeg:განა
2	უცნაური	უცნაური	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	0	root	_	LMSeg:უცნაურ·ი
3	არ	არ	ADV	Adv_Neg	_	2	advmod:neg	_	LMSeg:არ
4	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	2	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
6	რომ	რომ	SCONJ	Cj_Sub	_	9	mark	_	LMSeg:რომ
7	სოფიმ	სოფი	PROPN	N_Prop_Anthr_FirstName_Erg	Case=Erg|NameType=Prs	9	nsubj	_	LMSeg:სოფი
8	არ	არ	ADV	Adv_Neg	_	9	advmod:neg	_	LMSeg:არ
9	იცოდა	ცოდნა	VERB	V_MedPass_Impf_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp	2	csubj	_	LMSeg:ცოდნ[ა]/ც|SpaceAfter=No
10	,	,	PUNCT	Punct_Comma	_	11	punct	_	LMSeg:,
11	ვინ	ვინ	PRON	Pron_Int_Hum_Nom	Animacy=Anim|Case=Nom	9	ccomp	_	LMSeg:ვინ
12	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	11	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]|SpaceAfter=No
13	?	?	PUNCT	Punct_IntMark	_	2	punct	_	LMSeg:?

~~~


