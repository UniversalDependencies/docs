---
layout: base
title:  'Statistics of iobj:lo in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `iobj:lo`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-iobj.html">iobj</a></tt>.
There are also 4 other language-specific subtypes of `iobj`: <tt><a href="ab_abnc-dep-iobj-cs.html">iobj:cs</a></tt>, <tt><a href="ab_abnc-dep-iobj-po.html">iobj:po</a></tt>, <tt><a href="ab_abnc-dep-iobj-poss.html">iobj:poss</a></tt>, <tt><a href="ab_abnc-dep-iobj-ro.html">iobj:ro</a></tt>.

415 nodes (3%) are attached to their parents as `iobj:lo`.

404 instances of `iobj:lo` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28433734939759.

The following 7 pairs of parts of speech are connected with `iobj:lo`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (355; 86% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (20; 5% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (20; 5% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (16; 4% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj:lo	color:blue
1	Ибымҳәар	а-ҳәара́	VERB	V_Dyn_Tr_NonFin_Conj-I_Neg_S:2SgF_DO:3	Dyn=Yes|Gender[subj]=Fem|Mood=Cnd|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Polarity=Neg|Subcat=Tran|VerbForm=NonFin	8	advcl:cond	_	LMSeg:а-ҳәа-ра́|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
3	бхәыҷы	а-хәыҷы́	ADJ	Adj_Sg_Poss:2SgF	Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	nmod:poss	_	LMSeg:а-хәыҷы́
4	ихш	а́-хш	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	LMSeg:а́-хш
5	бгәы	а-гәы́	NOUN	Noun_NH_Sg_Poss:2SgF	Animacy=Nhum|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2	6	iobj:lo	_	LMSeg:а-гәы́
6	иҭашны	а-ҭашра́	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:3_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	7	advcl:conv	_	LMSeg:а-ҭа·ш-ра́
7	баблырц	а-былра́	VERB	V_Dyn_Tr_NonFin_Purp_S:3SgNH_DO:2SgF	Dyn=Yes|Gender[obj]=Fem|Gender[subj]=Neut|Mood=Prp|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3|Subcat=Tran|VerbForm=NonFin	8	advcl:purp	_	LMSeg:а-был-ра́
8	иҟоуп	а́-ҟазаара	VERB	V_Stat_Fin_Pres_S:3	Dyn=No|Mood=Ind|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҟа-заа-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj:lo	color:blue
1	Лакоба	Лакоба	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	5	nsubj	_	LMSeg:Лакоба
2	абарҭ	аба́рҭ	PRON	Pron_Dem_Prox_Pl	Number=Plur|PronType=Dem	5	iobj:lo	_	LMSeg:аба́рҭ
3	зегьы	зегьы́	PRON	Pron_Quant	PronType=Tot	2	det	_	LMSeg:зегьы́
4	ибла	а́-бла	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obj	_	LMSeg:а́-бла
5	нархигеит	а-хгара́	VERB	V_Dyn_Tr_Fin_Aor_FPv:на_S:3SgM_DO:3_DO:Ad_LO:3Pl	Dyn=Yes|Gender[subj]=Masc|Mood=Ind|Number[lo]=Plur|Number[subj]=Sing|Person[lo]=3|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-х·га-ра́|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj:lo	color:blue
1	Ҧачулиа	Ҧачулиа	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	4	nsubj	_	LMSeg:Ҧачулиа
2	ауаа	а-уаҩы́	NOUN	Noun_H_Pl_Det	Animacy=Hum|Definite=Def|Number=Plur	3	nmod:poss	_	LMSeg:а-уаҩы́
3	ршьа	а-шьа́	NOUN	Noun_NH_Sg_Poss:3Pl	Animacy=Nhum|Number=Sing|Number[psor]=Plur|Person[psor]=3	4	obj	_	LMSeg:а-шьа́
4	ижәуеит	а́-жәра	VERB	V_Dyn_Tr_Fin_Pres_S:3SgM_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Masc|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	8	advcl:quote	_	LMSeg:а́-жә-ра
5	ҳәа	ҳәа́	PART	Prt_Quote	_	4	mark	_	LMSeg:ҳәа́
6	Аҧсны	Аҧсны́	PROPN	Noun_Prop_Place	NameType=Geo	8	iobj:lo	_	LMSeg:Аҧсны́
7	зегь	зегьы́	PRON	Pron_Quant	PronType=Tot	6	det	_	LMSeg:зегьы́
8	иаалаҩит	а́-лаҩра	VERB	V_Dyn_Intr_Fin_Aor_FPv:аа_S:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Mood=Ind|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-ла·ҩ-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


