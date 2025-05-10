---
layout: base
title:  'Statistics of advcl:quote in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `advcl:quote`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-advcl.html">advcl</a></tt>.
There are also 5 other language-specific subtypes of `advcl`: <tt><a href="ab_abnc-dep-advcl-compar.html">advcl:compar</a></tt>, <tt><a href="ab_abnc-dep-advcl-cond.html">advcl:cond</a></tt>, <tt><a href="ab_abnc-dep-advcl-conv.html">advcl:conv</a></tt>, <tt><a href="ab_abnc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="ab_abnc-dep-advcl-seq.html">advcl:seq</a></tt>.

82 nodes (1%) are attached to their parents as `advcl:quote`.

75 instances of `advcl:quote` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.73170731707317.

The following 6 pairs of parts of speech are connected with `advcl:quote`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (67; 82% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (8; 10% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 advcl:quote	color:blue
1	–	–	PUNCT	Punct_Dash	_	9	punct	_	LMSeg:–
2	Уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	3	nsubj	_	LMSeg:уи́
3	баҳаит	аҳара́	VERB	V_Dyn_Intr_Fin_Aor_S:3_S:Ad_IO:2SgF	Dyn=Yes|Gender[io]=Fem|Number[io]=Sing|Person[io]=2|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	9	advcl:quote	_	LMSeg:аҳа-ра́|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
5	егьи	егьи́	PRON	Pron_Dem_Sg	Number=Sing|PronType=Dem	6	nsubj	_	LMSeg:егьи́
6	бмаҳаӡеи	аҳара́	VERB	V_Dyn_Intr_NonFin_Aor_Neg_Q_Emph_S:3_S:Ad_IO:2SgF	Dyn=Yes|Gender[io]=Fem|Mood=Int|Number[io]=Sing|Person[io]=2|Person[subj]=3|Polarity=Neg|Subcat=Intr|Tense=Aor|VerbForm=NonFin	3	conj	_	LMSeg:аҳа-ра́|SpaceAfter=No
7	?	?	PUNCT	Punct_IntMark	_	6	punct	_	LMSeg:?
8	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
9	длықәҳәҳәеит	а́-қәҳәҳәара	VERB	V_Dyn_Intr_Fin_Aor_S:3SgH_LO:3SgF	Dyn=Yes|Gender[lo]=Fem|Gender[subj]=Com|Number[lo]=Sing|Number[subj]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-қә·ҳәҳәа-ра|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl:quote	color:blue
1	–	–	PUNCT	Punct_Dash	_	6	punct	_	LMSeg:–
2	Ааи	а́аи	ADV	Adv_Root	_	6	advcl:quote	_	LMSeg:а́аи|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
4	–	–	PUNCT	Punct_Dash	_	6	punct	_	LMSeg:–
5	илҳәаз	а-ҳәара́	VERB	V_Dyn_Tr_NonFin_PastIndef_S:3SgF_DO:Rel_Rel	Dyn=Yes|Gender[subj]=Fem|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=NonFin	6	ccomp:obj	_	LMSeg:а-ҳәа-ра́
6	шьақәирҕәҕәеит	а́-шьақәырҕәҕәара	VERB	V_Dyn_Intr_Caus_Fin_Aor_S:3SgM_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin|Voice=Cau	0	root	_	LMSeg:а́-шьақәы·р:ҕәҕәа-ра
7	Иура	Иура	PROPN	Noun_Prop_Anthr_M	NameType=Prs	6	nsubj	_	LMSeg:Иура|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl:quote	color:blue
1	Аҿы	а-ҿы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	2	obj	_	LMSeg:а-ҿы́
2	аартны	а́артра	VERB	V_Dyn_Intr_Caus_NonFin_Cnv_Abs_Aor_DO:3_DO:Ad	Dyn=Yes|Person[obj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin|Voice=Cau	8	advcl:conv	_	LMSeg:а́а·р:т-ра
3	«	«	PUNCT	Punct_Quote_Left	_	4	punct	_	LMSeg:«
4	аа	аа́	INTJ	Interj	_	8	advcl:quote	_	LMSeg:аа́
5	»	»	PUNCT	Punct_Quote_Right	_	4	punct	_	LMSeg:»
6	ҳәа	ҳәа́	PART	Prt_Quote	_	4	mark	_	LMSeg:ҳәа́
7	ашәа	а́шәа	NOUN	Noun_NH_Sg_[Det]	Animacy=Nhum|Number=Sing	8	obj	_	LMSeg:а́шәа
8	аацәырнагеит	а-цәы́ргара	VERB	V_Dyn_Tr_Fin_Aor_FPv:аа_S:3SgNH_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-цәы́р·га-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


