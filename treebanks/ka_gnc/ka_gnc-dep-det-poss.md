---
layout: base
title:  'Statistics of det:poss in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-det.html">det</a></tt>.

237 nodes (1%) are attached to their parents as `det:poss`.

234 instances of `det:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32911392405063.

The following 5 pairs of parts of speech are connected with `det:poss`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (224; 95% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:poss	color:blue
1	ვნახოთ	ნახვა	VERB	V_Act_Opt_S:1Pl_DO:3	Mood=Sub|Number[subj]=Plur|Person[obj]=3|Person[subj]=1|Tense=Past	0	root	_	LMSeg:ნახვ[ა]/ნახ|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
3	თუ	თუ	SCONJ	Cj_Sub	_	5	mark	_	LMSeg:თუ
4	ვისმე	ვინმე	PRON	Pron_SIndef_Hum_Dat	Animacy=Anim|Case=Dat	5	nsubj	_	LMSeg:ვინმე
5	დამართნია	დამართება	VERB	V_MedPass_Inv_Perf_Pv_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=PastPerf|Voice=Inv	1	ccomp	_	LMSeg:და·მართებ[ა]/მართ
6	იმისი	იმისი	PRON	Pron_Poss_Poss3Sg_Dist_Nom_Att	Case=Nom|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	LMSeg:იმის·ი
7	მსგავსი	მსგავსი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	5	obj	_	LMSeg:მსგავს·ი|SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	11	punct	_	LMSeg:,
9	რაც	რა	PRON	Pron_Rel_Nonhum_Nom_Rel:ც	Case=Nom|PronType=Rel	11	nsubj	_	LMSeg:რ[ა]
10	ჩვენ	ჩვენ	PRON	Pron_Pers_1_Dat_Pl	Case=Dat|Number=Plur|PronType=Prs	11	iobj	_	LMSeg:ჩვენ
11	დაგვატყდა	დატყდომა	VERB	V_Pass_Aor_Pv_LV_S:3Sg_IO:1Pl	Number[io]=Plur|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Past	6	acl:relcl	_	LMSeg:და·ტყდომ[ა]/ტყდ|SpaceAfter=No
12	.	.	PUNCT	Punct_Period	_	1	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:poss	color:blue
1	ჩემი	ჩემი	PRON	Pron_Poss_Poss1Sg_Nom_Att	Case=Nom|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	LMSeg:ჩემ·ი
2	საწყალი	საწყალი	ADJ	A_Part_FutPart_Nom_Att	Case=Nom|Tense=Fut|VerbForm=Part	3	amod	_	LMSeg:საწყ[ა]ლ·ი/წყალ
3	ნინელი	ნინელი	PROPN	N_Prop_Anthr_FirstName_Nom	Case=Nom|NameType=Prs	6	nsubj	_	LMSeg:ნინელი
4	საფლავ	საფლავი	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	6	obl	_	LMSeg:საფლავ·ი|SpaceAfter=No
5	ში	_ში	ADP	Pp	_	4	case	_	LMSeg:_ში
6	იწვეს	წოლა	VERB	V_MedPass_Opt_S:3Sg	Mood=Sub|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	LMSeg:წოლ[ა]/წვ
7	და	და	CCONJ	Cj_Coord	_	11	cc	_	LMSeg:და
8	მე	მე	PRON	Pron_Pers_1_Nom_Sg	Case=Nom|Number=Sing|PronType=Prs	11	nsubj	_	LMSeg:მე
9	ქვეყანა	ქვეყანა	NOUN	N_Dat_Sg_PP_PP:ზე	Case=Dat|Number=Sing	11	obl	_	LMSeg:ქვეყ[ა]ნ[ა]|SpaceAfter=No
10	ზე	_ზე	ADP	Pp	_	9	case	_	LMSeg:_ზე
11	დავდიოდე	სიარული	VERB	V_MedPass_ConjPres_Pv_S:1Sg	Mood=Sub|Number[subj]=Sing|Person[subj]=1|Tense=Pres	6	conj	_	LMSeg:სიარულ·ი/დი|SpaceAfter=No
12	!	!	PUNCT	Punct_ExclPoint	_	6	punct	_	LMSeg:!

~~~


