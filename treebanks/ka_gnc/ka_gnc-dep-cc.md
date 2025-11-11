---
layout: base
title:  'Statistics of cc in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `cc`

This relation is universal.

1053 nodes (5%) are attached to their parents as `cc`.

1053 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.89553656220323.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (642; 61% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (242; 23% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (80; 8% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (32; 3% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (30; 3% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (12; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 cc	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	ჰკითხა	კითხვა	VERB	V_MedAct_Aor_S:3Sg_DO:3_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:კითხვ[ა]/კითხ
3	კ-მ	კ.	PROPN	N_Prop_Anthr_Abbrev_Erg	Abbr=Yes|Case=Erg|NameType=Prs	2	nsubj	_	LMSeg:კ.
4	და	და	CCONJ	Cj_Coord	_	8	cc	_	LMSeg:და
5	საწოლი	საწოლი	NOUN	N_Inst_Sg_PP_PP:დან	Case=Ins|Number=Sing	8	obl	_	LMSeg:საწოლ·ი|SpaceAfter=No
6	დან	_დან	ADP	Pp	_	5	case	_	LMSeg:_დან
7	ნახევრად	ნახევრად	ADV	Adv_Deg	_	8	advmod	_	LMSeg:ნახევრად
8	წამოიწია	წამოწევა	VERB	V_Pass_Aor_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	2	conj	_	LMSeg:წამო·წევ[ა]/წ[ევ]|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	მარტო	მარტო	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	2	nmod:pred	_	LMSeg:მარტო
2	ყოფნა	ყოფნა	NOUN	N_VN_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	5	obj	_	LMSeg:ყოფნ[ა]/ყოფნ
3	და	და	CCONJ	Cj_Coord	_	4	cc	_	LMSeg:და
4	სიმშვიდე	სიმშვიდე	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	conj	_	LMSeg:სიმშვიდ[ე]
5	მენატრებოდა	ნატრება	VERB	V_MedPass_Inv_Impf_S:1Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Imp|VerbForm=Fin|Voice=Inv	0	root	_	LMSeg:ნატრებ[ა]/ნატრ|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	სტუმარი	სტუმარი	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	2	nsubj	_	LMSeg:სტუმ[ა]რ·ი
2	ტანადიც	ტანადი	ADJ	A_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing	0	root	_	LMSeg:ტანად·ი
3	იყო	ყოფნა	AUX	V_Pass_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	2	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]
4	და	და	CCONJ	Cj_Coord	_	5	cc	_	LMSeg:და
5	ძვალმსხვილიც	ძვალმსხვილი	ADJ	A_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing	2	conj	_	LMSeg:ძვალმსხვილ·ი|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


