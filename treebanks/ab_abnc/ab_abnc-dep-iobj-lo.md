---
layout: base
title:  'Statistics of iobj:lo in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `iobj:lo`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-iobj.html">iobj</a></tt>.
There are also 4 other language-specific subtypes of `iobj`: <tt><a href="ab_abnc-dep-iobj-cs.html">iobj:cs</a></tt>, <tt><a href="ab_abnc-dep-iobj-po.html">iobj:po</a></tt>, <tt><a href="ab_abnc-dep-iobj-poss.html">iobj:poss</a></tt>, <tt><a href="ab_abnc-dep-iobj-ro.html">iobj:ro</a></tt>.

357 nodes (3%) are attached to their parents as `iobj:lo`.

348 instances of `iobj:lo` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26330532212885.

The following 7 pairs of parts of speech are connected with `iobj:lo`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (310; 87% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (16; 4% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (14; 4% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (12; 3% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
6	иҭашны	а-ҭашра́	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:3	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	7	advcl:conv	_	LMSeg:а-ҭа·ш-ра́
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj:lo	color:blue
1	Наҳар	Наҳар	PROPN	Noun_Prop_Anthr_M	NameType=Prs	3	nsubj	_	LMSeg:Наҳар
2	акьыҧхьра	а-кьы́ҧхьра	VERB	VN_Dyn_Sg_Det_Tr	Definite=Def|Dyn=Yes|Number=Sing|Subcat=Tran|VerbForm=Vnoun	3	iobj:lo	_	LMSeg:а-кьы́ҧхь-ра
3	дахыццакуамызт	а-хы́ццакра	VERB	V_Dyn_Intr_Fin_Impf_Neg_S:3SgH_LO:SgNH	Dyn=Yes|Gender[subj]=Com|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Subcat=Intr|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а-хы́·ццак-ра|SpaceAfter=No
4	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


