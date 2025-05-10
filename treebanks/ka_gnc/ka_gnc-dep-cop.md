---
layout: base
title:  'Statistics of cop in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `cop`

This relation is universal.

324 nodes (2%) are attached to their parents as `cop`.

283 instances of `cop` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42283950617284.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (150; 46% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (95; 29% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (45; 14% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (23; 7% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	მარტოხელა	მარტოხელა	ADJ	A_Nom_Att	Case=Nom	2	amod	_	LMSeg:მარტოხელა
2	კაცი	კაცი	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	0	root	_	LMSeg:კაც·ი
3	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	2	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]|SpaceAfter=No
4	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	საქმე	საქმე	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	nsubj	_	LMSeg:საქმ[ე]
2	აუარებელი	აუარებელი	ADJ	A_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	0	root	_	LMSeg:აუარებ[ე]ლ·ი|SpaceAfter=No
3	ა	არის	AUX	V_MedPass_Pres_S:3Sg_Encl	Number[subj]=Sing|Person[subj]=3|Tense=Pres	2	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
4	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 cop	color:blue
1	ყოველ	ყოველი	DET	A_Quant_Dat_Att	Case=Dat	2	det	_	LMSeg:ყოვ[ე]ლ·ი
2	წელიწადს	წელიწადი	NOUN	N_Temp_Dat_Sg	Case=Dat|Number=Sing	3	obl	_	LMSeg:წელიწად·ი
3	მივდიოდი	მისვლა	VERB	V_MedPass_Impf_Pv_S:1Sg	Number[subj]=Sing|Person[subj]=1|Tense=Imp	0	root	_	LMSeg:მი·სვლ[ა]/დი
4	და	და	CCONJ	Cj_Coord	_	5	cc	_	LMSeg:და
5	მეცნობებოდა	ცნობება	VERB	V_MedPass_Inv_Impf_S:1Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Imp|Voice=Inv	3	conj	_	LMSeg:ცნობებ[ა]/ცნობ|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
7	აბა	აბა	INTJ	Interj	_	8	discourse	_	LMSeg:აბა
8	რა	რა	PRON	Pron_Int_Nonhum_Nom	Case=Nom	3	parataxis	_	LMSeg:რ[ა]
9	იქნებოდა	არის	AUX	V_Pass_Cond_S:3Sg	Mood=Cnd|Number[subj]=Sing|Person[subj]=3|Tense=Pres	8	cop	_	LMSeg:ყოფნ[ა]/ქნ|SpaceAfter=No
10	!	!	PUNCT	Punct_ExclPoint	_	3	punct	_	LMSeg:!

~~~


