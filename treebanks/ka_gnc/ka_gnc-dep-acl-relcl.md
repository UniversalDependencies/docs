---
layout: base
title:  'Statistics of acl:relcl in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-acl.html">acl</a></tt>.

127 nodes (1%) are attached to their parents as `acl:relcl`.

124 instances of `acl:relcl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.96062992125984.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (86; 68% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (16; 13% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl:relcl	color:blue
1	აი	აი	ADV	Adv_Disc	_	5	advmod	_	LMSeg:აი|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
3	კიდევ	კიდევ	ADV	Adv_DegNum	_	4	advmod	_	LMSeg:კიდევ
4	ერთი	ერთი	NUM	Num_Card_Alpha_Nom_Att	Case=Nom|NumType=Card	5	nummod	_	LMSeg:ერთ·ი
5	კითხვა	კითხვა	NOUN	N_VN_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	0	root	_	LMSeg:კითხვ[ა]/კითხ|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
7	რომელიც	რომელი	PRON	Pron_Rel_Nom_Sg_Rel:ც	Case=Nom|Number=Sing|PronType=Rel	10	nsubj	_	LMSeg:რომ[ე]ლ·ი
8	კატას	კატა	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	10	iobj	_	LMSeg:კატ[ა]
9	არასოდეს	არასოდეს	ADV	Adv_Neg_Temp	AdvType=Tim	10	advmod	_	LMSeg:არასოდეს
10	გასჩენია	გაჩენა	VERB	V_Pass_Perf_Pv_S:3Sg_IO:3	Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=PastPerf	5	acl:relcl	_	LMSeg:გა·ჩენ[ა]/ჩენ|SpaceAfter=No
11	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl:relcl	color:blue
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 acl:relcl	color:blue
1	მწერი	მწერი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	nsubj	_	LMSeg:მწერ·ი
2	გრძნობს	გრძნობა	VERB	V_MedAct_Pres_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	LMSeg:გრძნობ[ა]/გრძნ|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
4	რომ	რომ	SCONJ	Cj_Sub	_	7	mark	_	LMSeg:რომ
5	მას	ის	PRON	Pron_Pers_3_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing|PronType=Prs	7	obl	_	LMSeg:ის|SpaceAfter=No
6	ში	_ში	ADP	Pp	_	5	case	_	LMSeg:_ში
7	თვლემს	თვლემა	VERB	V_Act_Pres_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres	2	ccomp	_	LMSeg:*·თვლემ[ა]/თვლემ
8	ის	ის	PRON	Pron_Dem_Nom_Att	Case=Nom|PronType=Dem	9	det	_	LMSeg:ის
9	ძალა	ძალა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	7	nsubj	_	LMSeg:ძალ[ა]|SpaceAfter=No
10	,	,	PUNCT	Punct_Comma	_	17	punct	_	LMSeg:,
11	რომლის	რომელი	PRON	Pron_Rel_Gen_Sg_PP_PP:თვის_Rel:ც	Case=Gen|Number=Sing|PronType=Rel	17	obl	_	LMSeg:რომ[ე]ლ·ი|SpaceAfter=No
12	თვისაც	_თვის	ADP	Pp	_	11	case	_	LMSeg:_თვის
13	მხოლოდ	მხოლოდ	ADV	Adv_Deg	_	14	advmod	_	LMSeg:მხოლოდ
14	მუსიკა	მუსიკა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	17	nsubj	_	LMSeg:მუსიკ[ა]
15	არ	არ	ADV	Adv_Neg	_	17	advmod:neg	_	LMSeg:არ
16	არის	არის	AUX	V_MedPass_Pres_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Pres	17	cop	_	LMSeg:ყოფნ[ა]/არ
17	საკმარისი	საკმარისი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	9	acl:relcl	_	LMSeg:საკმარის·ი|SpaceAfter=No
18	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


