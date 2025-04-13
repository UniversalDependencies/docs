---
layout: base
title:  'Statistics of obj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `obj`

This relation is universal.
There are 5 language-specific subtypes of `obj`: <tt><a href="ab_abnc-dep-obj-cs.html">obj:cs</a></tt>, <tt><a href="ab_abnc-dep-obj-lo.html">obj:lo</a></tt>, <tt><a href="ab_abnc-dep-obj-po.html">obj:po</a></tt>, <tt><a href="ab_abnc-dep-obj-poss.html">obj:poss</a></tt>, <tt><a href="ab_abnc-dep-obj-ro.html">obj:ro</a></tt>.

259 nodes (4%) are attached to their parents as `obj`.

256 instances of `obj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31660231660232.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (205; 79% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (38; 15% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	Амла	а́-мла	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	2	iobj	_	LMSeg:а́-мла
2	иакуан	а-кра́	VERB	V_Dyn_Intr_Fin_Impf_S:3_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а-к-ра́
3	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
4	џьара	џьара́	ADV	Adv	_	6	advmod	_	LMSeg:џьара́
5	фатәык	а́-фатә	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	6	obj	_	LMSeg:а́-фатә
6	аҧшаара	а́-ҧшаара	VERB	VN_Dyn_Sg_Det_Tr	Definite=Def|Dyn=Yes|Number=Sing|Subcat=Tran|VerbForm=Vnoun	7	xcomp:lo	_	LMSeg:а́-ҧшаа-ра
7	иашьҭан	а́-шьҭазаара	VERB	V_Stat_Fin_Impf_S:3_LO:3SgNH	Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	2	conj	_	LMSeg:а́-шьҭа-заа-ра
8	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Аха	аха́	CCONJ	Cj_Coord	_	4	cc	_	LMSeg:аха́
2	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	nsubj	_	LMSeg:а-бгахәыҷы́
3	уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	4	obj	_	LMSeg:уи́
4	аунажьуамызт	а́ужьра	VERB	V_Dyn_Tr_Fin_Impf_Neg_S:3SgNH_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Polarity=Neg|Subcat=Tran|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́у·жь-ра
5	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
6	ахаҧыцқәа	а-хаҧы́ц	NOUN	Noun_NH_Pl_Det	Animacy=Nhum|Definite=Def|Number=Plur	7	obj:lo	_	LMSeg:а-хаҧы́ц
7	иркылакны	а-кы́лакызаара	VERB	V_Stat_NonFin_Cnv_Abs_Pres_S:3_LO:3Pl	Dyn=No|Number[lo]=Plur|Person[lo]=3|Person[subj]=3|Tense=Pres|VerbForm=NonFin	8	advcl:conv	_	LMSeg:а-кы́ла·кы-заа-ра
8	иакын	а-кызаара́	VERB	V_Stat_Fin_Impf_S:3_LO:3SgNH	Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	4	conj	_	LMSeg:а-кы-заа-ра́
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	Бзиа	а-бзи́а	ADJ	Adj_Sg	Number=Sing	3	obj	_	LMSeg:а-бзи́а
3	ууит	а-ура́	VERB	V_Dyn_Tr_Fin_Aor_S:2SgM_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Subcat=Tran|Tense=Aor|VerbForm=Fin	7	advcl:quote	_	LMSeg:а-у-ра́
4	!	!	PUNCT	Punct_ExclPoint	_	3	punct	_	LMSeg:!
5	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
6	абжьы	а-бжьы́	NOUN	Noun_NH_Sg_Poss:3SgNH	Animacy=Nhum|Gender[psor]=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	LMSeg:а-бжьы́
7	аагеит	а-гара́	VERB	V_Dyn_Intr_Fin_Aor_FPv:аа_S:3_S:Ad	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-га-ра́
8	Амҵ	а́-мҵ	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	6	nmod:poss	_	LMSeg:а́-мҵ
9	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


