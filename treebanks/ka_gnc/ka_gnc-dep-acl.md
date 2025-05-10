---
layout: base
title:  'Statistics of acl in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ka_gnc-dep-acl-relcl.html">acl:relcl</a></tt>.

65 nodes (0%) are attached to their parents as `acl`.

62 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.16923076923077.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (27; 42% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (16; 25% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (6; 9% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl	color:blue
1	მოგვიანებით	მოგვიანებით	ADV	Adv_Temp	AdvType=Tim	3	advmod	_	LMSeg:მოგვიანებით
2	ისიც	ის	PRON	Pron_Pers_3_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing|PronType=Prs	3	obj	_	LMSeg:ის
3	გავიგე	გაგება	VERB	V_Act_Aor_Pv_SV_S:1Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past	0	root	_	LMSeg:გა·გებ[ა]/გ|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	თუ	თუ	SCONJ	Cj_Sub	_	8	mark	_	LMSeg:თუ
6	რა	რა	PRON	Pron_Int_Nonhum_Nom_Att	Case=Nom	7	amod	_	LMSeg:რ[ა]
7	მიზანი	მიზანი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	8	obj	_	LMSeg:მიზ[ა]ნ·ი
8	ჰქონდა	ქონა	VERB	V_MedPass_Inv_Impf_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp|Voice=Inv	2	acl	_	LMSeg:ქონ[ა]/ქონ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	და	და	CCONJ	Cj_Coord	_	4	cc	_	LMSeg:და
2	ახლა	ახლა	ADV	Adv_Temp	AdvType=Tim	4	advmod	_	LMSeg:ახლა
3	ნება	ნება	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	4	obj	_	LMSeg:ნებ[ა]
4	მიბოძე	ბოძება	VERB	V_Act_Impv_OV_S:2Sg_DO:3_IO:1Sg	Mood=Imp|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[obj]=3|Person[subj]=2	0	root	_	LMSeg:ბოძებ[ა]/ბოძ|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
6	არ	არ	ADV	Adv_Neg	_	7	advmod:neg	_	LMSeg:არ
7	მოგახსენო	მოხსენება	VERB	V_Act_Opt_Pv_S:1Sg_DO:3_IO:2Sg	Mood=Sub|Number[io]=Sing|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Past	3	acl	_	LMSeg:მო·ხსენებ[ა]/ხსენ
8	მიზეზი	მიზეზი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	7	obj	_	LMSeg:მიზეზ·ი
9	ჩემი	ჩემი	PRON	Pron_Poss_Poss1Sg_Nom_Att	Case=Nom|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	12	det:poss	_	LMSeg:ჩემ·ი
10	ფერ	ფერი	NOUN	N_Dat_Sg_PP_PP:ზე	Case=Dat|Number=Sing	12	nmod	_	LMSeg:ფერ·ი|SpaceAfter=No
11	ზე	_ზე	ADP	Pp	_	10	case	_	LMSeg:_ზე
12	მოსვლისა	მოსვლა	NOUN	N_VN_Pv_Gen_Sg_L_Encl:IndSp3	Case=Gen|Number=Sing|VerbForm=Vnoun	8	nmod	_	LMSeg:მო·სვლ[ა]/სვლ|SpaceAfter=No
13	ო	_ო	PART	Prt_IndSp3	Evident=Nfh|Person=3	7	mark	_	LMSeg:_ო|SpaceAfter=No
14	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	რატომ	რატომ	ADV	Adv_Int_Causal	_	3	advmod	_	LMSeg:რატომ
2	არაფერს	არაფერი	PRON	Pron_Neg_Nonhum_Dat_Sg	Case=Dat|Number=Sing	3	obj	_	LMSeg:არაფ[ე]რ·ი
3	ამბობდნენ	თქმა	VERB	V_MedAct_Impf_S:3Pl_DO:3	Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Imp	0	root	_	LMSeg:თქმ[ა]/მბობ
4	იმა	ის	PRON	Pron_Pers_3_Dat_Sg_PP_PP:ზე	Case=Dat|Number=Sing|PronType=Prs	3	obl	_	LMSeg:ის|SpaceAfter=No
5	ზე	_ზე	ADP	Pp	_	4	case	_	LMSeg:_ზე|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
7	თუ	თუ	SCONJ	Cj_Sub	_	8	mark	_	LMSeg:თუ
8	ვინ	ვინ	PRON	Pron_Int_Hum_Nom	Animacy=Anim|Case=Nom	4	acl	_	LMSeg:ვინ
9	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	8	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]
10	ადამიანი	ადამიანი	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	8	nsubj	_	LMSeg:ადამიან·ი|SpaceAfter=No
11	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


