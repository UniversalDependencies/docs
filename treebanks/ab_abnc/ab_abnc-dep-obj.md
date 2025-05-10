---
layout: base
title:  'Statistics of obj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `obj`

This relation is universal.
There are 5 language-specific subtypes of `obj`: <tt><a href="ab_abnc-dep-obj-cs.html">obj:cs</a></tt>, <tt><a href="ab_abnc-dep-obj-lo.html">obj:lo</a></tt>, <tt><a href="ab_abnc-dep-obj-po.html">obj:po</a></tt>, <tt><a href="ab_abnc-dep-obj-poss.html">obj:poss</a></tt>, <tt><a href="ab_abnc-dep-obj-ro.html">obj:ro</a></tt>.

404 nodes (4%) are attached to their parents as `obj`.

398 instances of `obj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35148514851485.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (330; 82% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (49; 12% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (7; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj	color:blue
1	Сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	LMSeg:сара́
2	Сталини	Сталин	PROPN	Noun_Prop_Anthr_LastName_Coord	NameType=Prs	4	obj	_	LMSeg:Сталин
3	Бериеи	Бериа	PROPN	Noun_Prop_Anthr_LastName_Coord	NameType=Prs	2	conj	_	LMSeg:Бериа
4	сшьырцаз	а-шьра́	VERB	V_Dyn_Tr_NonFin_Purp_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Mood=Prp|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|VerbForm=NonFin	8	ccomp:purp	_	LMSeg:а-шь-ра́
5	Лакоба	Лакоба	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	6	nsubj	_	LMSeg:Лакоба
6	исиҭаз	а́-ҭара	VERB	V_Dyn_Tr_NonFin_PastIndef_S:3SgM_DO:Rel_IO:1Sg_Rel	Dyn=Yes|Gender[subj]=Masc|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=NonFin	7	acl:relcl	_	LMSeg:а́-ҭа-ра
7	адҵа	а-дҵа́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	obj	_	LMSeg:а-дҵа́
8	насыгӡон	а́-нагӡара	VERB	V_Dyn_Tr_Fin_Impf_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-на·гӡа-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	3	obj	_	LMSeg:уи́
2	схы	а-хы́	NOUN	Noun_NH_Sg_Poss:1Sg	Animacy=Nhum|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	iobj	_	LMSeg:а-хы́
3	иархәаны	а́-рхәара	VERB	V_Dyn_Intr_Caus_NonFin_Cnv_Abs_Aor_DO:3_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[obj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin|Voice=Cau	9	advcl:conv	_	LMSeg:а́-р:хәа-ра
4	смыццакӡакәа	а́-ццакра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_Neg_Emph_S:1Sg	Dyn=Yes|Number[subj]=Sing|Person[subj]=1|Polarity=Neg|Subcat=Intr|Tense=Aor|VerbForm=NonFin	9	advcl:conv	_	LMSeg:а́-ццак-ра
5	зегьы	зегьы́	PRON	Pron_Quant	_	8	obj	_	LMSeg:зегьы́
6	аахтны	аахтны́	ADV	Adv_S:Ad	_	8	advmod	_	LMSeg:аахтны́
7	ашәҟәы	а-шәҟәы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	obj:lo	_	LMSeg:а-шәҟәы́
8	анҵара	а-нҵара́	VERB	VN_Dyn_Sg_Det_Tr_[LO:3SgNH]	Definite=Def|Dyn=Yes|Gender[lo]=Neut|Number=Sing|Number[lo]=Sing|Person[lo]=3|Subcat=Tran|VerbForm=Vnoun	9	xcomp:lo	_	LMSeg:а-н·ҵа-ра́
9	саҿуп	а-ҿы́заара	VERB	V_Stat_Fin_Pres_S:1Sg_LO:3SgNH	Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Number[subj]=Sing|Person[lo]=3|Person[subj]=1|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а-ҿы́-заа-ра|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj	color:blue
1	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
2	Бхаҵа	а-ха́ҵа	NOUN	Noun_H_Sg_Poss:2SgF	Animacy=Hum|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2	3	nmod:poss	_	LMSeg:а-ха́ҵа
3	иҿала	а-ҿы́	NOUN	Noun_NH_Sg_Poss:3SgM_PP:ла	Animacy=Nhum|Case=Ins|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	LMSeg:а-ҿы́
4	иҳәахьеит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Perf_S:3SgM_DO:3	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Prf|VerbForm=Fin	0	root	_	LMSeg:а-ҳәа-ра́|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
6	бара	бара́	PRON	Pron_Pers_2SgF	Gender=Fem|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	LMSeg:бара́
7	мап	ма́п	ADV	Adv_Root	_	8	obj	_	LMSeg:ма́п
8	зыбкуазеи	а-кра́	VERB	V_Dyn_Tr_NonFin_Pres_Why_Q_S:2SgF_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Fem|Mood=Int|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|RelType=Cause|Subcat=Tran|Tense=Pres|VerbForm=NonFin	4	conj	_	LMSeg:а-к-ра́|SpaceAfter=No
9	?	?	PUNCT	Punct_IntMark	_	8	punct	_	LMSeg:?

~~~


