---
layout: base
title:  'Statistics of iobj in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `iobj`

This relation is universal.

371 nodes (2%) are attached to their parents as `iobj`.

261 instances of `iobj` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19137466307278.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (245; 66% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (71; 19% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (34; 9% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (15; 4% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	დავისვი	დასმა	VERB	V_Act_Aor_Pv_SV_S:1Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past	0	root	_	LMSeg:და·სმ[ა]/სვ
2	და	და	CCONJ	Cj_Coord	_	4	cc	_	LMSeg:და
3	კარნახს	კარნახი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	4	iobj	_	LMSeg:კარნახ·ი
4	შევუდექი	შედგომა	VERB	V_Pass_Aor_Pv_OV_S:1Sg_IO:3	Number[subj]=Sing|Person[io]=3|Person[subj]=1|Tense=Past	1	conj	_	LMSeg:შე·დგომ[ა]/დექ|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	1	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	ეგ	ეგ	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	_	LMSeg:ეგ
2	იქნებ	იქნებ	ADV	Adv_Comm	_	4	advmod	_	LMSeg:იქნებ
3	ისეთსაც	ისეთი	PRON	Pron_Indef_Dist_Dat_Sg_Encl:ც_Foc	Case=Dat|Encl=C|Number=Sing|PronType=Ind	4	iobj	_	LMSeg:ისეთ·ი
4	გადაეყაროს	გადაყრა	VERB	V_Pass_Opt_Pv_S:3Sg_IO:3	Mood=Sub|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past	0	root	_	LMSeg:გადა·ყრ[ა]/ყარ|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
6	რომ	რომ	SCONJ	Cj_Sub	_	9	mark	_	LMSeg:რომ
7	თავხედობის	თავხედობა	NOUN	N_VN_Gen_Sg_PP_PP:თვის	Case=Gen|Number=Sing|VerbForm=Vnoun	9	obl	_	LMSeg:თავხედობ[ა]/თავხედ|SpaceAfter=No
8	თვის	_თვის	ADP	Pp	_	7	case	_	LMSeg:_თვის
9	მიუზღოს	მიზღვა	VERB	V_Act_Opt_Pv_OV_S:3Sg_DO:3_IO:3	Mood=Sub|Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=3|Tense=Past	4	advcl	_	LMSeg:მი·ზღვ[ა]/ზღ
10	კიდეც	კიდეც	ADV	Adv_Foc	_	9	advmod	_	LMSeg:კიდეც|SpaceAfter=No
11	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 iobj	color:blue
1	სეგედის	სეგედი	PROPN	N_Prop_Anthr_LastName_Dat_Dialect	Case=Dat|NameType=Prs	6	iobj	_	LMSeg:სეგედი
2	ამ	ეს	PRON	Pron_Dem_Gen_Att	Case=Gen|PronType=Dem	3	det	_	LMSeg:ეს
3	ფიგურის	ფიგურა	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	4	nmod	_	LMSeg:ფიგურ[ა]
4	კეთება	კეთება	NOUN	N_VN_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing|VerbForm=Vnoun	6	obl	_	LMSeg:კეთებ[ა]/კეთ|SpaceAfter=No
5	ში	_ში	ADP	Pp	_	4	case	_	LMSeg:_ში
6	შევასწარი	შესწრება	VERB	V_Act_Aor_Pv_S:1Sg_DO:3_IO:3	Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=1|Tense=Past	0	root	_	LMSeg:შე·სწრებ[ა]/სწ[ა]რ|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


