---
layout: base
title:  'Statistics of obl:agent in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ka_gnc-dep-obl-final.html">obl:final</a></tt>, <tt><a href="ka_gnc-dep-obl-iobj.html">obl:iobj</a></tt>.

9 nodes (0%) are attached to their parents as `obl:agent`.

9 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.22222222222222.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (2; 22% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl:agent	color:blue
1	მოულოდნელად	მოულოდნელი	ADJ	A_Part_NegPart_Advb_Sg	Case=Ess|Number=Sing|Polarity=Neg|Tense=Pres|VerbForm=Part	2	obl	_	LMSeg:მოულოდნელ·ი/ლოდ
2	აღმოაჩენ	აღმოჩენა	VERB	V_Act_Fut_Pv_S:2Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Fut	0	root	_	LMSeg:აღმო·ჩენ[ა]/ჩენ
3	შენს	შენი	PRON	Pron_Poss_Poss2Sg_Dat_Att	Case=Dat|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	4	det:poss	_	LMSeg:შენ·ი
4	ბუდე	ბუდე	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	2	obl	_	LMSeg:ბუდ[ე]|SpaceAfter=No
5	ში	_ში	ADP	Pp	_	4	case	_	LMSeg:_ში
6	მამაკაცს	მამაკაცი	NOUN	N_Hum_Dat_Sg	Animacy=Anim|Case=Dat|Number=Sing	2	obj	_	LMSeg:მამაკაც·ი
7	გუგულის	გუგული	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	9	obl:agent	_	LMSeg:გუგულ·ი
8	მიერ	მიერ	ADP	Pp	_	7	case	_	LMSeg:მიერ
9	დადებული	დადებული	ADJ	A_Part_PastPart_Pv_Nom_Att	Case=Nom|Tense=Past|VerbForm=Part	10	amod	_	LMSeg:და·დებულ·ი/დ
10	კვერცხი	კვერცხი	NOUN	N_Nom_Sg_PP_PP:ვით	Case=Nom|Number=Sing	2	obl	_	LMSeg:კვერცხ·ი|SpaceAfter=No
11	ვით	_ვით	ADP	Pp	_	10	case	_	LMSeg:_ვით|SpaceAfter=No
12	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 obl:agent	color:blue
1	მოგახსენებთ	მოხსენება	VERB	V_Act_Pres_Pv_S:1Sg_DO:3_IO:2Pl	Number[io]=Plur|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Pres	0	root	_	LMSeg:მო·ხსენებ[ა]/ხსენ
2	კიდევ	კიდევ	ADV	Adv_DegNum	_	3	advmod	_	LMSeg:კიდევ
3	ერთ	ერთი	NUM	Num_Card_Alpha_Dat_Att	Case=Dat|NumType=Card	4	nummod	_	LMSeg:ერთ·ი
4	დეტალს	დეტალი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	1	obj	_	LMSeg:დეტალ·ი|SpaceAfter=No
5	:	:	PUNCT	Punct_Colon	_	1	punct	_	LMSeg::
6	პოლიციელი	პოლიციელი	NOUN	N_Hum_Qual_Nom_Att	Animacy=Anim|Case=Nom	7	nmod	_	LMSeg:პოლიციელ·ი
7	შარია	შარია	PROPN	N_Prop_Anthr_LastName_Nom	Case=Nom|NameType=Prs	8	nsubj	_	LMSeg:შარია
8	ირწმუნება	რწმუნება	VERB	V_Pass_Pres_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Pres	1	parataxis	_	LMSeg:*·რწმუნებ[ა]/რწმუნ|SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	17	punct	_	LMSeg:,
10	რომ	რომ	SCONJ	Cj_Sub	_	17	mark	_	LMSeg:რომ
11	ჭრილობა	ჭრილობა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	17	obj	_	LMSeg:ჭრილობ[ა]
12	გოროდოვოი	გოროდოვოი	NOUN	N_Hum_Qual_Gen_Att	Animacy=Anim|Case=Gen	13	nmod	_	LMSeg:გოროდოვოი
13	მახათაძის	მახათაძე	PROPN	N_Prop_Anthr_LastName_Gen	Case=Gen|NameType=Prs	15	obl:agent	_	LMSeg:მახათაძ[ე]
14	მიერ	მიერ	ADP	Pp	_	13	case	_	LMSeg:მიერ
15	ნასროლი	ნასროლი	ADJ	A_Part_PastPart_PastPart:ნა_Inst_Att	Case=Ins|Tense=Past|VerbForm=Part	16	amod	_	LMSeg:ნასროლ·ი/სვრ
16	ტყვიით	ტყვია	NOUN	N_Inst_Sg	Case=Ins|Number=Sing	17	obl	_	LMSeg:ტყვი[ა]
17	მიიღო	მიღება	VERB	V_Act_Aor_Pv_SV_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	8	advcl	_	LMSeg:მი·ღებ[ა]/ღ
18	და	და	CCONJ	Cj_Coord	_	23	cc	_	LMSeg:და
19	არა	არა	ADV	Adv_Root	_	23	advmod:neg	_	LMSeg:არა
20	თუთაშხიას	თუთაშხია	PROPN	N_Prop_Anthr_LastName_Gen	Case=Gen|NameType=Prs	21	nmod	_	LMSeg:თუთაშხია
21	მაუზერი	მაუზერი	NOUN	N_Inst_Sg_PP_PP:დან	Case=Ins|Number=Sing	23	obl	_	LMSeg:მაუზერ·ი|SpaceAfter=No
22	დან	_დან	ADP	Pp	_	21	case	_	LMSeg:_დან
23	ნასროლით	ნასროლი	ADJ	A_Part_PastPart_PastPart:ნა_Inst_Sg	Case=Ins|Number=Sing|Tense=Past|VerbForm=Part	16	conj	_	LMSeg:ნასროლ·ი/სვრ|SpaceAfter=No
24	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 24 obl:agent	color:blue
1	ეს	ეს	PRON	Pron_Dem_Nom_Att	Case=Nom|PronType=Dem	2	det	_	LMSeg:ეს
2	გარემოება	გარემოება	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	4	nsubj	_	LMSeg:გარემოებ[ა]
3	საშუალებას	საშუალება	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	4	obj	_	LMSeg:საშუალებ[ა]
4	გვაძლევდა	მი-ცემა	VERB	V_Act_Impf_S:3Sg_DO:3_IO:1Pl	Number[io]=Plur|Number[subj]=Sing|Person[io]=1|Person[obj]=3|Person[subj]=3|Tense=Imp	0	root	_	LMSeg:მი-ცემ[ა]/ძლ[ევ]|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
6	ასე	ასე	ADV	Adv_Mann	_	4	advmod	_	LMSeg:ასე
7	თუ	თუ	CCONJ	Cj_Coord	_	8	cc	_	LMSeg:თუ
8	ისე	ისე	ADV	Adv_Mann	_	6	conj	_	LMSeg:ისე|SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	12	punct	_	LMSeg:,
10	უწყვეტი	უწყვეტი	ADJ	A_Part_NegPart_Nom_Att	Case=Nom|Polarity=Neg|Tense=Pres|VerbForm=Part	11	amod	_	LMSeg:უწყვეტ·ი/წყვეტ
11	თვალ-ყური	თვალ-ყური	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	12	obj	_	LMSeg:თვალ-ყურ·ი
12	გვედევნებინა	დევნება	VERB	V_Act_PluPerf_S:1Pl_DO:3	Number[subj]=Plur|Person[obj]=3|Person[subj]=1|Tense=Pqp	3	acl	_	LMSeg:დევნებ[ა]/დევნ
13	მის	ის	PRON	Pron_Pers_3_Gen_Sg_PP_PP:თვის	Case=Gen|Number=Sing|PronType=Prs	12	obl:iobj	_	LMSeg:ის|SpaceAfter=No
14	თვის	_თვის	ADP	Pp	_	13	case	_	LMSeg:_თვის
15	და	და	CCONJ	Cj_Coord	_	17	cc	_	LMSeg:და
16	იმედი	იმედი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	17	obj	_	LMSeg:იმედ·ი
17	გვქონდა	ქონა	VERB	V_MedPass_Inv_Impf_S:1Pl_DO:3	Number[subj]=Plur|Person[obj]=3|Person[subj]=1|Tense=Imp|Voice=Inv	4	conj	_	LMSeg:ქონ[ა]/ქონ|SpaceAfter=No
18	,	,	PUNCT	Punct_Comma	_	23	punct	_	LMSeg:,
19	რომ	რომ	SCONJ	Cj_Sub	_	23	mark	_	LMSeg:რომ
20	დღეს	დღეს	ADV	Adv_Temp	AdvType=Tim	23	advmod	_	LMSeg:დღეს
21	თუ	თუ	CCONJ	Cj_Coord	_	22	cc	_	LMSeg:თუ
22	ხვალ	ხვალ	ADV	Adv_Temp	AdvType=Tim	20	conj	_	LMSeg:ხვალ
23	გაებმებოდა	გაბმა	VERB	V_Pass_Cond_Pv_S:3Sg	Mood=Cnd|Number[subj]=Sing|Person[subj]=3|Tense=Pres	16	acl	_	LMSeg:გა·ბმ[ა]/ბ
24	ჩვენს	ჩვენ	PRON	Pron_Pers_1_Dat_Pl	Case=Dat|Number=Plur|PronType=Prs	26	obl:agent	_	LMSeg:ჩვენ
25	მიერ	მიერ	ADP	Pp	_	24	case	_	LMSeg:მიერ
26	დაგებულ	დაგებული	ADJ	A_Part_PastPart_Pv_Dat_Att	Case=Dat|Tense=Past|VerbForm=Part	28	amod	_	LMSeg:და·გებულ·ი/გ
27	რომელიმე	რომელიმე	ADJ	A_Dat_Att	Case=Dat	28	amod	_	LMSeg:რომელიმე
28	მახე	მახე	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	23	obl	_	LMSeg:მახ[ე]|SpaceAfter=No
29	ში	_ში	ADP	Pp	_	28	case	_	LMSeg:_ში|SpaceAfter=No
30	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


