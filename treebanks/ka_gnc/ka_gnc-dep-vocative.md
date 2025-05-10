---
layout: base
title:  'Statistics of vocative in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `vocative`

This relation is universal.

37 nodes (0%) are attached to their parents as `vocative`.

19 instances of `vocative` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.37837837837838.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (17; 46% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (16; 43% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	–	–	PUNCT	Punct_Dash	_	6	punct	_	LMSeg:–
2	კი	კი	ADV	Adv_Root	_	6	advmod	_	LMSeg:კი|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
4	ვარდენ	ვარდენ	PROPN	N_Prop_Anthr_FirstName_Voc	Case=Voc|NameType=Prs	6	vocative	_	LMSeg:ვარდენ|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
6	გაგიგე	გაგება	VERB	V_Act_Aor_Pv_OV_S:1Sg_DO:3_IO:2Sg	Number[io]=Sing|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Past	0	root	_	LMSeg:გა·გებ[ა]/გ|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	დაბრძანდით	დაბრძანება	VERB	V_Pass_Impv_Pv_S:2Pl	Mood=Imp|Number[subj]=Plur|Person[subj]=2	0	root	_	LMSeg:და·ბრძანებ[ა]/ბრძან|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	4	punct	_	LMSeg:,
4	ჰერ	ჰერ	NOUN	N_Hum_Voc_Sg_Foreign	Animacy=Anim|Case=Voc|Number=Sing	2	vocative	_	LMSeg:ჰერ|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
6	გთხოვთ	თხოვნა	VERB	V_Act_Pres_S:1Sg_DO:3_IO:2Pl	Number[io]=Plur|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Pres	2	parataxis	_	LMSeg:*·თხოვნ[ა]/თხოვ|SpaceAfter=No
7	!	!	PUNCT	Punct_ExclPoint	_	2	punct	_	LMSeg:!

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 vocative	color:blue
1	სოფი	სოფი	PROPN	N_Prop_Anthr_FirstName_Voc	Case=Voc|NameType=Prs	5	vocative	_	LMSeg:სოფი|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
3	ძვირფასო	ძვირფასი	ADJ	A_Voc_Sg	Case=Voc|Number=Sing	5	vocative	_	LMSeg:ძვირფას·ი|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
5	ვფიქრობ	ფიქრი	VERB	V_MedAct_Pres_S:1Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres	0	root	_	LMSeg:ფიქრ·ი/ფიქრ|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
7	რომ	რომ	SCONJ	Cj_Sub	_	10	mark	_	LMSeg:რომ
8	შენ	შენ	PRON	Pron_Pers_2_Nom_Sg	Case=Nom|Number=Sing|PronType=Prs	10	nsubj	_	LMSeg:შენ
9	ერთ-ერთი	ერთ-ერთი	DET	A_Quant_Nom_Att	Case=Nom	10	det	_	LMSeg:ერთ-ერთ·ი
10	იმათგანი	იმათგანი	PRON	Pron_Par_Nom	Case=Nom	5	ccomp	_	LMSeg:იმათგან·ი
11	არა	არ	ADV	Adv_Neg_L	_	10	advmod:neg	_	LMSeg:არ
12	ხარ	არის	AUX	V_MedPass_Pres_S:2Sg	Number[subj]=Sing|Person[subj]=2|Tense=Pres	10	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
13	,	,	PUNCT	Punct_Comma	_	19	punct	_	LMSeg:,
14	ვისაც	ვინ	PRON	Pron_Rel_Hum_Dat_Rel:ც	Animacy=Anim|Case=Dat|PronType=Rel	19	nsubj	_	LMSeg:ვინ
15	ეს	ეს	PRON	Pron_Dem_Nom_Att	Case=Nom|PronType=Dem	16	det	_	LMSeg:ეს
16	ქვეყანა	ქვეყანა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	19	obj	_	LMSeg:ქვეყ[ა]ნ[ა]
17	მუქთად	მუქთად	ADV	Adv_Mann	_	18	advmod	_	LMSeg:მუქთად
18	მოცემული	მოცემული	ADJ	A_Part_PastPart_Pv_Nom_Sg	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	19	xcomp	_	LMSeg:მო·ცემულ·ი/ცემ
19	ჰგონია	გონება	VERB	V_MedPass_Inv_Pres_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres|Voice=Inv	10	acl:relcl	_	LMSeg:გონებ[ა]/გონ|SpaceAfter=No
20	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


