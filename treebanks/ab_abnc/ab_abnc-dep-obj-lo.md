---
layout: base
title:  'Statistics of obj:lo in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `obj:lo`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-obj.html">obj</a></tt>.
There are also 4 other language-specific subtypes of `obj`: <tt><a href="ab_abnc-dep-obj-cs.html">obj:cs</a></tt>, <tt><a href="ab_abnc-dep-obj-po.html">obj:po</a></tt>, <tt><a href="ab_abnc-dep-obj-poss.html">obj:poss</a></tt>, <tt><a href="ab_abnc-dep-obj-ro.html">obj:ro</a></tt>.

178 nodes (3%) are attached to their parents as `obj:lo`.

172 instances of `obj:lo` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26404494382022.

The following 6 pairs of parts of speech are connected with `obj:lo`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (159; 89% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (9; 5% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj:lo	color:blue
1	Бнарак	а́-бнара	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	5	obl	_	LMSeg:а́-бнара
2	аҟны	а-ҟны́	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	1	case	_	LMSeg:а-ҟны́
3	амҩахәасҭа	а-мҩахәа́сҭа	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	obj:lo	_	LMSeg:а-мҩахәа́сҭа
4	ианыланы	а-ны́лара	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а-ны́·ла-ра
5	инеиуан	а-не́ира	VERB	V_Dyn_Intr_Fin_Impf_S:3	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а-не́и-ра
6	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	5	nsubj	_	LMSeg:а-бгахәыҷы́
7	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj:lo	color:blue
1	Ала	а-ла́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	nsubj	_	LMSeg:а-ла́
2	уи	уи́	PRON	Pron_Pers_3Sg	PronType=Prs	3	obj:lo	_	LMSeg:уи́
3	инахьӡан	а-хьӡара́	VERB	V_Dyn_Intr_Fin_PastIndef_FPv:на_S:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Past|VerbForm=Fin	8	advcl:seq	_	LMSeg:а-хь·ӡа-ра́
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	аҵыхәа	а-ҵы́хәа	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	6	obj:lo	_	LMSeg:а-ҵы́хәа
6	инамҵасны	а́-мҵасра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_FPv:на_S:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	8	advcl:conv	_	LMSeg:а́-мҵа·с-ра
7	илышьҭагәа	а́-шьҭагәара	VERB	V_Dyn_Tr_NonFin_Cnv_Abs_Aor_FPv:ла́_DO:3	Dyn=Yes|Person[obj]=3|Subcat=Tran|Tense=Aor|VerbForm=NonFin	8	advcl:conv	_	LMSeg:а́-шьҭа·гәа-ра
8	иакит	а-кра́	VERB	V_Dyn_Intr_Fin_Aor_S:3_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-к-ра́
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj:lo	color:blue
1	Ииашоуп	а-иа́ша	VERB	Noun_NH_Sg_Pred_Fin_Pres_S:3	Animacy=Nhum|Dyn=No|Number=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	4	ccomp:quote	_	LMSeg:а-иа́ша
2	!	!	PUNCT	Punct_ExclPoint	_	1	punct	_	LMSeg:!
3	–	–	PUNCT	Punct_Dash	_	1	punct	_	LMSeg:–
4	рҳәеит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Aor_S:3Pl_DO:3_DO:Ad	Dyn=Yes|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ҳәа-ра́
5	итәаз	а-тәа́заара	VERB	V_Stat_NonFin_Impf_S:Rel_Rel	Dyn=No|Person[subj]=Rel|Tense=Imp|VerbForm=NonFin	4	csubj	_	LMSeg:а-тәа́-заа-ра
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
7	Мкан	Мкан	PROPN	Noun_Prop_Anthr_M	NameType=Geo	8	obj:lo	_	LMSeg:Мкан
8	инаиқәшаҳаҭхан	а́-қәшаҳаҭхара	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_FPv:на_S:3_LO:3SgM	Dyn=Yes|Gender[lo]=Masc|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	4	advcl:conv	_	LMSeg:а́-қәшаҳаҭ·ха-ра
9	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


