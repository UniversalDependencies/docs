---
layout: base
title:  'Statistics of obl:agent in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ka_gnc-dep-obl-final.html">obl:final</a></tt>, <tt><a href="ka_gnc-dep-obl-iobj.html">obl:iobj</a></tt>.

8 nodes (0%) are attached to their parents as `obl:agent`.

8 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.875.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (2; 25% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (2; 25% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 obl:agent	color:blue
1	მართლმსაჯულების	მართლმსაჯულება	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	6	obl	_	LMSeg:მართლმსაჯულებ[ა]
2	წინაშე	წინაშე	ADP	Pp	_	1	case	_	LMSeg:წინაშე
3	მით	მით	ADV	Adv	_	4	advmod	_	LMSeg:მით
4	უფრო	უფრო	ADV	Adv_Deg	_	5	advmod	_	LMSeg:უფრო
5	გადაჭრით	გადაჭრით	ADV	Adv	_	6	advmod	_	LMSeg:გადაჭრით
6	დგება	დგომა	VERB	V_Pass_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:*·დგომ[ა]/დგ
7	ბოროტმოქმედის	ბოროტმოქმედი	NOUN	N_Hum_Gen_Sg	Animacy=Anim|Case=Gen|Number=Sing	8	nmod	_	LMSeg:ბოროტმოქმედ·ი
8	შეპყრობის	შეპყრობა	NOUN	N_VN_Pv_Gen_Sg	Case=Gen|Number=Sing|VerbForm=Vnoun	9	nmod	_	LMSeg:შე·პყრობ[ა]/პყრ
9	საჭიროება	საჭიროება	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	6	nsubj	_	LMSeg:საჭიროებ[ა]|SpaceAfter=No
10	,	,	PUNCT	Punct_Comma	_	13	punct	_	LMSeg:,
11	რაც	რაც	ADV	Adv	_	12	advmod	_	LMSeg:რაც
12	უფრო	უფრო	ADV	Adv_Deg	_	13	advmod	_	LMSeg:უფრო
13	იზრდება	ზრდა	VERB	V_Pass_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	6	advcl	_	LMSeg:*·ზრდ[ა]/ზრდ
14	მის	ის	PRON	Pron_Pers_3_Gen_Sg	Case=Gen|Number=Sing|PronType=Prs	16	obl:agent	_	LMSeg:ის
15	მიერ	მიერ	ADP	Pp	_	14	case	_	LMSeg:მიერ
16	ჩადენილ	ჩადენილი	ADJ	A_Part_PastPart_Gen_Att	Case=Gen|Tense=Past|VerbForm=Part	17	nmod	_	LMSeg:ჩადენილ·ი/დენ
17	დანაშაულთა	დანაშაული	NOUN	N_Gen_Pl_OldPl	Case=Gen|Number=Plur	18	nmod	_	LMSeg:დანაშაულ·ი
18	რიცხვი	რიცხვი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	13	nsubj	_	LMSeg:რიცხვ·ი|SpaceAfter=No
19	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

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


