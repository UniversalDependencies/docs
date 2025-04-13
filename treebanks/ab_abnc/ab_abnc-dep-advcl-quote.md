---
layout: base
title:  'Statistics of advcl:quote in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `advcl:quote`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-advcl.html">advcl</a></tt>.
There are also 5 other language-specific subtypes of `advcl`: <tt><a href="ab_abnc-dep-advcl-compar.html">advcl:compar</a></tt>, <tt><a href="ab_abnc-dep-advcl-cond.html">advcl:cond</a></tt>, <tt><a href="ab_abnc-dep-advcl-conv.html">advcl:conv</a></tt>, <tt><a href="ab_abnc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="ab_abnc-dep-advcl-seq.html">advcl:seq</a></tt>.

62 nodes (1%) are attached to their parents as `advcl:quote`.

59 instances of `advcl:quote` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.48387096774194.

The following 5 pairs of parts of speech are connected with `advcl:quote`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (51; 82% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (7; 11% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-INTJ.html">INTJ</a></tt> (2; 3% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advcl:quote	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 advcl:quote	color:blue
1	Иҵегь	и́-ҵегь	ADV	Adv	_	8	advcl:quote	_	LMSeg:и́-ҵегь
2	,	,	PUNCT	Punct_Comma	_	3	punct	_	LMSeg:,
3	иҵегь	и́-ҵегь	ADV	Adv	_	1	conj	_	LMSeg:и́-ҵегь
4	!	!	PUNCT	Punct_ExclPoint	_	1	punct	_	LMSeg:!
5	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
6	абас	аба́с	ADV	Adv	_	8	advmod	_	LMSeg:аба́с
7	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	obj:lo	_	LMSeg:а-бгахәыҷы́
8	иазҿнаҭуа	а-зҿыҭра́	VERB	V_Dyn_Tr_NonFin_Pres_S:3SgNH_DO:3_RO:3SgNH_Reln:For_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Gender[ro]=Neut|Gender[subj]=Neut|Number[lo]=Sing|Number[ro]=Sing|Number[subj]=Sing|Person[lo]=3|Person[obj]=3|Person[ro]=3|Person[subj]=3|Reln=Ben|Subcat=Tran|Tense=Pres|VerbForm=NonFin	9	xcomp:lo	_	LMSeg:а-з·ҿы·ҭ-ра́
9	иалагеит	а́-лагара	VERB	V_Dyn_Intr_Fin_Aor_S:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-ла·га-ра
10	Аҵысҕра	а-ҵы́сҕра	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	9	nsubj	_	LMSeg:а-ҵы́сҕра
11	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

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
8	аацәырнагеит	а-цәы́ргара	VERB	V_Dyn_Tr_Fin_Aor_FPv:аа_S:3SgNH_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-цәы́р·га-ра
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


