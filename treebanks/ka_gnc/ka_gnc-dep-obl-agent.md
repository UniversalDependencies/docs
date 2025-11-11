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
Average distance between parent and child is 2.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (2; 22% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl:agent	color:blue
1	მოულოდნელად	მოულოდნელი	ADJ	A_Part_NegPart_Advb_Sg	Case=Ess|Number=Sing|Polarity=Neg|Tense=Pres|VerbForm=Part	2	obl	_	LMSeg:მოულოდნელ·ი/ლოდ
2	აღმოაჩენ	აღმოჩენა	VERB	V_Act_Fut_Pv_S:2Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Fut|VerbForm=Fin	0	root	_	LMSeg:აღმო·ჩენ[ა]/ჩენ
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
1	მოგახსენებთ	მოხსენება	VERB	V_Act_Pres_Pv_S:1Sg_DO:3_IO:2Pl	Mood=Ind|Number[io]=Plur|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:მო·ხსენებ[ა]/ხსენ
2	კიდევ	კიდევ	ADV	Adv_DegNum	_	3	advmod	_	LMSeg:კიდევ
3	ერთ	ერთი	NUM	Num_Card_Alpha_Dat_Att	Case=Dat|NumType=Card	4	nummod	_	LMSeg:ერთ·ი
4	დეტალს	დეტალი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	1	obj	_	LMSeg:დეტალ·ი|SpaceAfter=No
5	:	:	PUNCT	Punct_Colon	_	1	punct	_	LMSeg::
6	პოლიციელი	პოლიციელი	NOUN	N_Hum_Qual_Nom_Att	Animacy=Anim|Case=Nom	7	nmod	_	LMSeg:პოლიციელ·ი
7	შარია	შარია	PROPN	N_Prop_Anthr_LastName_Nom	Case=Nom|NameType=Prs	8	nsubj	_	LMSeg:შარია
8	ირწმუნება	რწმუნება	VERB	V_Pass_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	LMSeg:*·რწმუნებ[ა]/რწმუნ|SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	17	punct	_	LMSeg:,
10	რომ	რომ	SCONJ	Cj_Sub	_	17	mark	_	LMSeg:რომ
11	ჭრილობა	ჭრილობა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	17	obj	_	LMSeg:ჭრილობ[ა]
12	გოროდოვოი	გოროდოვოი	NOUN	N_Hum_Qual_Gen_Att	Animacy=Anim|Case=Gen	13	nmod	_	LMSeg:გოროდოვოი
13	მახათაძის	მახათაძე	PROPN	N_Prop_Anthr_LastName_Gen	Case=Gen|NameType=Prs	15	obl:agent	_	LMSeg:მახათაძ[ე]
14	მიერ	მიერ	ADP	Pp	_	13	case	_	LMSeg:მიერ
15	ნასროლი	ნასროლი	ADJ	A_Part_PastPart_PastPart:ნა_Inst_Att	Case=Ins|Tense=Past|VerbForm=Part	16	amod	_	LMSeg:ნასროლ·ი/სვრ
16	ტყვიით	ტყვია	NOUN	N_Inst_Sg	Case=Ins|Number=Sing	17	obl	_	LMSeg:ტყვი[ა]
17	მიიღო	მიღება	VERB	V_Act_Aor_Pv_SV_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	8	advcl	_	LMSeg:მი·ღებ[ა]/ღ
18	და	და	CCONJ	Cj_Coord	_	23	cc	_	LMSeg:და
19	არა	არა	ADV	Adv_Root	_	23	advmod:neg	_	LMSeg:არა
20	თუთაშხიას	თუთაშხია	PROPN	N_Prop_Anthr_LastName_Gen	Case=Gen|NameType=Prs	21	nmod	_	LMSeg:თუთაშხია
21	მაუზერი	მაუზერი	NOUN	N_Inst_Sg_PP_PP:დან	Case=Ins|Number=Sing	23	obl	_	LMSeg:მაუზერ·ი|SpaceAfter=No
22	დან	_დან	ADP	Pp	_	21	case	_	LMSeg:_დან
23	ნასროლით	ნასროლი	ADJ	A_Part_PastPart_PastPart:ნა_Inst_Sg	Case=Ins|Number=Sing|Tense=Past|VerbForm=Part	16	conj	_	LMSeg:ნასროლ·ი/სვრ|SpaceAfter=No
24	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 obl:agent	color:blue
1	კარ	კარი	NOUN	N_Dat_Sg_PP_PP:ზე	Case=Dat|Number=Sing	3	obl	_	LMSeg:კარ·ი|SpaceAfter=No
2	ზე	_ზე	ADP	Pp	_	1	case	_	LMSeg:_ზე
3	მომდგარ	მომდგარი	ADJ	A_Part_PastPart_Pv_Dat_Att	Case=Dat|Tense=Past|VerbForm=Part	4	amod	_	LMSeg:მო·მდგარ·ი/დგ
4	ბედს	ბედი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	6	iobj	_	LMSeg:ბედ·ი
5	ხელგაშლილი	ხელგაშლილი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	6	advcl	_	LMSeg:ხელგაშლილ·ი
6	გაეგება	გაგება	VERB	V_Pass_Fut_Pv_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Fut|VerbForm=Fin	0	root	_	LMSeg:გა·გებ[ა]/გ|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	12	punct	_	LMSeg:,
8	პუპის	პუპი	PROPN	N_Prop_Anthr_FirstName_Dat	Case=Dat|NameType=Prs	12	iobj	_	LMSeg:პუპი
9	თავის	თავი	PRON	Pron_Refl_Gen	Case=Gen	11	nmod	_	LMSeg:თავ·ი
10	განთქმული	განთქმული	ADJ	A_Part_PastPart_Pv_Nom_Att	Case=Nom|Tense=Past|VerbForm=Part	11	amod	_	LMSeg:გან·თქმულ·ი/თქმ
11	გვარი	გვარი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	12	obj	_	LMSeg:გვარ·ი
12	აჩუქა	ჩუქება	VERB	V_Act_Aor_S:3Sg_DO:3_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	6	conj	_	LMSeg:ჩუქებ[ა]/ჩუქ
13	და	და	CCONJ	Cj_Coord	_	21	cc	_	LMSeg:და
14	ამ	ეს	PRON	Pron_Dem_Advb_Att	Case=Ess|PronType=Dem	15	det	_	LMSeg:ეს
15	რიგად	რიგი	NOUN	N_Advb_Sg	Case=Ess|Number=Sing	21	obl	_	LMSeg:რიგ·ი
16	სხვის	სხვა	ADJ	A_Gen_Sg	Case=Gen|Number=Sing	18	obl:agent	_	LMSeg:სხვ[ა]
17	მიერ	მიერ	ADP	Pp	_	16	case	_	LMSeg:მიერ
18	შემზადებულ	შემზადებული	ADJ	A_Part_PastPart_Pv_Dat_Att	Case=Dat|Tense=Past|VerbForm=Part	19	amod	_	LMSeg:შე·მზადებულ·ი/მზად
19	ბუდე	ბუდე	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	21	obl	_	LMSeg:ბუდ[ე]|SpaceAfter=No
20	ში	_ში	ADP	Pp	_	19	case	_	LMSeg:_ში
21	ჩასახლდა	ჩასახლება	VERB	V_Pass_Aor_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	6	conj	_	LMSeg:ჩა·სახლებ[ა]/სახლ|SpaceAfter=No
22	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


