---
layout: base
title:  'Statistics of advcl:relcl in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-advcl.html">advcl</a></tt>.

4 nodes (0%) are attached to their parents as `advcl:relcl`.

3 instances of `advcl:relcl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 2 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 18 advcl:relcl	color:blue
1	თვე	თვე	NOUN	N_Temp_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	3	obl	_	LMSeg:თვ[ე]|SpaceAfter=No
2	ში	_ში	ADP	Pp	_	1	case	_	LMSeg:_ში
3	ერთხელ	ერთხელ	ADV	Adv_Num_Repet	_	7	advmod	_	LMSeg:ერთხელ
4	ერიკა	ერიკა	PROPN	N_Prop_Anthr_FirstName_Nom	Case=Nom|NameType=Prs	7	nsubj	_	LMSeg:ერიკა
5	დედას	დედა	NOUN	N_Hum_Dat_Sg	Animacy=Anim|Case=Dat|Number=Sing	7	iobj	_	LMSeg:დედ[ა]
6	თმას	თმა	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	7	obj	_	LMSeg:თმ[ა]
7	უღებავს	შეღებვა	VERB	V_Act_Pres_OV_S:3Sg_DO:3_IO:3	Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	LMSeg:შე·ღებვ[ა]/ღებ|SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	18	punct	_	LMSeg:,
9	რომლის	რომელი	PRON	Pron_Rel_Gen_Sg	Case=Gen|Number=Sing|PronType=Rel	10	nmod	_	LMSeg:რომ[ე]ლ·ი
10	დროსაც	დრო	NOUN	N_Temp_Dat_Sg_Rel:ც	Case=Dat|Number=Sing	18	obl	_	LMSeg:დრო
11	პატარა	პატარა	ADJ	A_Dat_Att	Case=Dat	12	amod	_	LMSeg:პატარ[ა]
12	ფუნჯს	ფუნჯი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	18	obj	_	LMSeg:ფუნჯ·ი
13	და	და	CCONJ	Cj_Coord	_	16	cc	_	LMSeg:და
14	საღებავ	საღებავი	ADJ	A_Part_FutPart_Dat_Att	Case=Dat|Tense=Fut|VerbForm=Part	16	amod	_	LMSeg:საღებავ·ი/ღებ
15	„	„	PUNCT	Punct_Quote	_	16	punct	_	LMSeg:„
16	პოლიკოლორს	პოლიკოლორი	NOUN	N_Dat_Sg_Guess	Case=Dat|Number=Sing	12	conj	_	LMSeg:პოლიკოლორ·ი
17	”	”	PUNCT	Punct_Quote	_	16	punct	_	LMSeg:”
18	ხმარობს	ხმარება	VERB	V_MedAct_Pres_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres	7	advcl:relcl	_	LMSeg:ხმარებ[ა]/ხმარ|SpaceAfter=No
19	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl:relcl	color:blue
1	და	და	CCONJ	Cj_Coord	_	8	cc	_	LMSeg:და|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	4	punct	_	LMSeg:,
3	რაც	რა	PRON	Pron_Rel_Nonhum_Nom_Rel:ც	Case=Nom|PronType=Rel	4	nsubj	_	LMSeg:რ[ა]
4	მთავარი	მთავარი	NOUN	N_Hum_Nom_Sg_Encl:Aux	Animacy=Anim|Case=Nom|Number=Sing	8	advcl:relcl	_	LMSeg:მთავ[ა]რ·ი|SpaceAfter=No
5	ა	არის	AUX	V_MedPass_Pres_S:3Sg_Encl	Number[subj]=Sing|Person[subj]=3|Tense=Pres	4	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
7	როგორ	როგორ	ADV	Adv_Int_Mann	_	8	advmod	_	LMSeg:როგორ
8	ვიცხოვროთ	ცხოვრება	VERB	V_MedAct_Opt_S:1Pl	Mood=Sub|Number[subj]=Plur|Person[subj]=1|Tense=Past	0	root	_	LMSeg:ცხოვრებ[ა]/ცხოვრ|SpaceAfter=No
9	?	?	PUNCT	Punct_IntMark	_	8	punct	_	LMSeg:?

~~~


