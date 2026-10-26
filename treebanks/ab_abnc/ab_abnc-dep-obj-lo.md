---
layout: base
title:  'Statistics of obj:lo in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `obj:lo`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-obj.html">obj</a></tt>.
There are also 4 other language-specific subtypes of `obj`: <tt><a href="ab_abnc-dep-obj-cs.html">obj:cs</a></tt>, <tt><a href="ab_abnc-dep-obj-po.html">obj:po</a></tt>, <tt><a href="ab_abnc-dep-obj-poss.html">obj:poss</a></tt>, <tt><a href="ab_abnc-dep-obj-ro.html">obj:ro</a></tt>.

258 nodes (3%) are attached to their parents as `obj:lo`.

250 instances of `obj:lo` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24031007751938.

The following 6 pairs of parts of speech are connected with `obj:lo`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (229; 89% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (13; 5% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (6; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj:lo	color:blue
1	Ибымҳәар	а-ҳәара́	VERB	V_Dyn_Tr_NonFin_Conj-I_Neg_S:2SgF_DO:3	Dyn=Yes|Gender[subj]=Fem|Mood=Cnd|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Polarity=Neg|Subcat=Tran|VerbForm=NonFin	8	advcl:cond	_	LMSeg:а-ҳәа-ра́|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
3	бхәыҷы	а-хәыҷы́	ADJ	Adj_Sg_Poss:2SgF	Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	nmod:poss	_	LMSeg:а-хәыҷы́
4	ихш	а́-хш	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	LMSeg:а́-хш
5	бгәы	а-гәы́	NOUN	Noun_NH_Sg_Poss:2SgF	Animacy=Nhum|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2	6	obj:lo	_	LMSeg:а-гәы́
6	иҭашны	а-ҭашра́	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:3_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	7	advcl:conv	_	LMSeg:а-ҭа·ш-ра́
7	баблырц	а-былра́	VERB	V_Dyn_Tr_NonFin_Purp_S:3SgNH_DO:2SgF	Dyn=Yes|Gender[obj]=Fem|Gender[subj]=Neut|Mood=Prp|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3|Subcat=Tran|VerbForm=NonFin	8	advcl:purp	_	LMSeg:а-был-ра́
8	иҟоуп	а́-ҟазаара	VERB	V_Stat_Fin_Pres_S:3	Dyn=No|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҟа-заа-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obj:lo	color:blue
1	Лакоба	Лакоба	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	5	nsubj	_	LMSeg:Лакоба
2	абарҭ	аба́рҭ	PRON	Pron_Dem_Prox_Pl	Number=Plur|PronType=Dem	5	obj:lo	_	LMSeg:аба́рҭ
3	зегьы	зегьы́	PRON	Pron_Quant	_	2	det	_	LMSeg:зегьы́
4	ибла	а́-бла	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obj	_	LMSeg:а́-бла
5	нархигеит	а-хгара́	VERB	V_Dyn_Tr_Fin_Aor_FPv:на_S:3SgM_DO:3_DO:Ad_LO:3Pl	Dyn=Yes|Gender[subj]=Masc|Number[lo]=Plur|Number[subj]=Sing|Person[lo]=3|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-х·га-ра́|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj:lo	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	Имаҷны	а-ма́ҷны	ADV	Adv_S:3	Person[subj]=3	0	root	_	LMSeg:а-ма́ҷны
3	ауп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	2	cop	_	LMSeg:а́кә-заа-ра
4	дшыздыруа	а-ды́рра	VERB	V_Dyn_Tr_NonFin_Cnv_Pres_How_S:1Sg_DO:3SgH	Dyn=Yes|Gender[obj]=Com|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|RelType=Mnr|Subcat=Tran|Tense=Pres|VerbForm=NonFin	2	csubj	_	LMSeg:а-ды́р-ра|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
6	лыҩнуҵҟа	а-ҩы́нуҵҟа	ADP	PP_Poss:3SgF	Gender[psor]=Fem|Number[psor]=Sing|Person[psor]=3	7	obl	_	LMSeg:а-ҩы́нуҵҟа
7	илыҕроу	а-ҕра́заара	VERB	V_Stat_NonFin_Pres_S:Rel_LO:3SgF_Rel	Dyn=No|Gender[lo]=Fem|Number[lo]=Sing|Person[lo]=3|Person[subj]=Rel|Tense=Pres|VerbForm=NonFin	8	obj:lo	_	LMSeg:а-ҕра́-заа-ра
8	иалыздыраауеи	а́-лдыраара	VERB	V_Dyn_Tr_NonFin_Pres_Q_S:1Sg_DO:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Mood=Int|Number[lo]=Sing|Number[subj]=Sing|Person[lo]=3|Person[obj]=3|Person[subj]=1|Subcat=Tran|Tense=Pres|VerbForm=NonFin	2	conj	_	LMSeg:а́-л·дыраа-ра|SpaceAfter=No
9	?	?	PUNCT	Punct_IntMark	_	8	punct	_	LMSeg:?

~~~


