---
layout: base
title:  'Statistics of acl in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ka_gnc-dep-acl-relcl.html">acl:relcl</a></tt>.

69 nodes (0%) are attached to their parents as `acl`.

66 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.26086956521739.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (29; 42% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (18; 26% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (6; 9% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl	color:blue
1	მოგვიანებით	მოგვიანებით	ADV	Adv_Temp	AdvType=Tim	3	advmod	_	LMSeg:მოგვიანებით
2	ისიც	ის	PRON	Pron_Pers_3_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing|PronType=Prs	3	obj	_	LMSeg:ის
3	გავიგე	გაგება	VERB	V_Act_Aor_Pv_SV_S:1Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:გა·გებ[ა]/გ|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	თუ	თუ	SCONJ	Cj_Sub	_	8	mark	_	LMSeg:თუ
6	რა	რა	PRON	Pron_Int_Nonhum_Nom_Att	Case=Nom	7	amod	_	LMSeg:რ[ა]
7	მიზანი	მიზანი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	8	obj	_	LMSeg:მიზ[ა]ნ·ი
8	ჰქონდა	ქონა	VERB	V_MedPass_Inv_Impf_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin|Voice=Inv	2	acl	_	LMSeg:ქონ[ა]/ქონ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 acl	color:blue
1	იოტისოდენა	იოტისოდენა	ADJ	A_Nom_Att	Case=Nom	2	amod	_	LMSeg:იოტისოდენ[ა]
2	სურვილიც	სურვილი	NOUN	N_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing	4	obj	_	LMSeg:სურვილ·ი
3	არ	არ	ADV	Adv_Neg	_	4	advmod:neg	_	LMSeg:არ
4	მქონდა	ქონა	VERB	V_MedPass_Inv_Impf_S:1Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Imp|VerbForm=Fin|Voice=Inv	0	root	_	LMSeg:ქონ[ა]/ქონ|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
6	ვინმეს	ვინმე	PRON	Pron_SIndef_Hum_Dat_PP_PP:თან	Animacy=Anim|Case=Dat	8	nmod	_	LMSeg:ვინმე|SpaceAfter=No
7	თან	_თან	ADP	Pp	_	6	case	_	LMSeg:_თან
8	საუბარი	საუბარი	NOUN	N_VN_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	9	obj	_	LMSeg:საუბ[ა]რ·ი/საუბრ
9	გამება	გაბმა	VERB	V_Act_PluPerf_Pv_S:1Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pqp|VerbForm=Fin	2	acl	_	LMSeg:გა·ბმ[ა]/ბ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	რატომ	რატომ	ADV	Adv_Int_Causal	_	3	advmod	_	LMSeg:რატომ
2	არაფერს	არაფერი	PRON	Pron_Neg_Nonhum_Dat_Sg	Case=Dat|Number=Sing	3	obj	_	LMSeg:არაფ[ე]რ·ი
3	ამბობდნენ	თქმა	VERB	V_MedAct_Impf_S:3Pl_DO:3	Mood=Ind|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:თქმ[ა]/მბობ
4	იმა	ის	PRON	Pron_Pers_3_Dat_Sg_PP_PP:ზე	Case=Dat|Number=Sing|PronType=Prs	3	obl	_	LMSeg:ის|SpaceAfter=No
5	ზე	_ზე	ADP	Pp	_	4	case	_	LMSeg:_ზე|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
7	თუ	თუ	SCONJ	Cj_Sub	_	8	mark	_	LMSeg:თუ
8	ვინ	ვინ	PRON	Pron_Int_Hum_Nom	Animacy=Anim|Case=Nom	4	acl	_	LMSeg:ვინ
9	იყო	ყოფნა	AUX	V_Pass_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	8	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]
10	ადამიანი	ადამიანი	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	8	nsubj	_	LMSeg:ადამიან·ი|SpaceAfter=No
11	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


