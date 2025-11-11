---
layout: base
title:  'Statistics of cop in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `cop`

This relation is universal.

366 nodes (2%) are attached to their parents as `cop`.

322 instances of `cop` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40710382513661.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (165; 45% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (114; 31% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (46; 13% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (26; 7% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
2	ღამის	ღამე	NOUN	N_Temp_Gen_Sg	Case=Gen|Number=Sing	4	nmod	_	LMSeg:ღამ[ე]
3	9	9	NUM	Num_Card_Digits	NumType=Card	4	nummod	_	LMSeg:9
4	საათი	საათი	NOUN	N_Temp_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	0	root	_	LMSeg:საათ·ი|SpaceAfter=No
5	ა	ყოფნა	AUX	V_MedPass_Pres_S:3Sg_Encl	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	4	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	სტუმარი	სტუმარი	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	2	nsubj	_	LMSeg:სტუმ[ა]რ·ი
2	ტანადიც	ტანადი	ADJ	A_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing	0	root	_	LMSeg:ტანად·ი
3	იყო	ყოფნა	AUX	V_Pass_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	2	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]
4	და	და	CCONJ	Cj_Coord	_	5	cc	_	LMSeg:და
5	ძვალმსხვილიც	ძვალმსხვილი	ADJ	A_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing	2	conj	_	LMSeg:ძვალმსხვილ·ი|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 cop	color:blue
1	ყოველ	ყოველი	DET	A_Quant_Dat_Att	Case=Dat	2	det	_	LMSeg:ყოვ[ე]ლ·ი
2	წელიწადს	წელიწადი	NOUN	N_Temp_Dat_Sg	Case=Dat|Number=Sing	3	obl	_	LMSeg:წელიწად·ი
3	მივდიოდი	მისვლა	VERB	V_MedPass_Impf_Pv_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:მი·სვლ[ა]/დი
4	და	და	CCONJ	Cj_Coord	_	5	cc	_	LMSeg:და
5	მეცნობებოდა	ცნობება	VERB	V_MedPass_Inv_Impf_S:1Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Imp|VerbForm=Fin|Voice=Inv	3	conj	_	LMSeg:ცნობებ[ა]/ცნობ|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
7	აბა	აბა	INTJ	Interj	_	8	discourse	_	LMSeg:აბა
8	რა	რა	PRON	Pron_Int_Nonhum_Nom	Case=Nom	3	parataxis	_	LMSeg:რ[ა]
9	იქნებოდა	ყოფნა	AUX	V_Pass_Cond_S:3Sg	Mood=Cnd|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	8	cop	_	LMSeg:ყოფნ[ა]/ქნ|SpaceAfter=No
10	!	!	PUNCT	Punct_ExclPoint	_	3	punct	_	LMSeg:!

~~~


