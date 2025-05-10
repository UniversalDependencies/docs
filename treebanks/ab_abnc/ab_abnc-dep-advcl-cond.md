---
layout: base
title:  'Statistics of advcl:cond in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `advcl:cond`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-advcl.html">advcl</a></tt>.
There are also 5 other language-specific subtypes of `advcl`: <tt><a href="ab_abnc-dep-advcl-compar.html">advcl:compar</a></tt>, <tt><a href="ab_abnc-dep-advcl-conv.html">advcl:conv</a></tt>, <tt><a href="ab_abnc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="ab_abnc-dep-advcl-quote.html">advcl:quote</a></tt>, <tt><a href="ab_abnc-dep-advcl-seq.html">advcl:seq</a></tt>.

58 nodes (1%) are attached to their parents as `advcl:cond`.

52 instances of `advcl:cond` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.27586206896552.

The following 4 pairs of parts of speech are connected with `advcl:cond`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (54; 93% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 advcl:cond	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 advcl:cond	color:blue
1	–	–	PUNCT	Punct_Dash	_	7	punct	_	LMSeg:–
2	Ус	ус	ADV	Adv	_	7	advcl:cond	_	LMSeg:ус
3	акәзар	а́кәзаара	AUX	V_Stat_NonFin_Pres_Conj-I_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Mood=Cnd|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=NonFin	2	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	амла	а́-мла	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	6	iobj	_	LMSeg:а́-мла
6	уаганы	а-гара́	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:2SgM_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Gender[subj]=Masc|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=2|Subcat=Intr|Tense=Aor|VerbForm=NonFin	7	advcl:conv	_	LMSeg:а-га-ра́
7	аҧср	а-ҧсра́	VERB	VN_Dyn_Sg_Det_Intr_Cop	Definite=Def|Dyn=Yes|Number=Sing|Subcat=Intr|VerbForm=Vnoun	0	root	_	LMSeg:а-ҧс-ра́|SpaceAfter=No
8	оуп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgNH_EnclCop	Dyn=No|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	7	cop	_	LMSeg:а́кә-заа-ра
9	иузыҧшу	а-зыҧшра́	VERB	V_Stat_NonFin_Pres_S:Rel_RO:2SgM_Rel_Reln:For	Dyn=No|Gender[ro]=Masc|Number[ro]=Sing|Person[ro]=2|Person[subj]=Rel|Reln=Ben|Tense=Pres|VerbForm=NonFin	7	csubj	_	LMSeg:а-зы·ҧш-ра́|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advcl:cond	color:blue
1	–	–	PUNCT	Punct_Dash	_	10	punct	_	LMSeg:–
2	Аҩны	а-ҩны́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	obj:lo	_	LMSeg:а-ҩны́
3	иҩноу	а-ҩна́заара	VERB	V_Stat_NonFin_Pres_S:Rel_LO:3SgNH_Rel	Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=Rel|Tense=Pres|VerbForm=NonFin	5	ccomp:iobj	_	LMSeg:а-ҩна́-заа-ра
4	цәыӡ	а-цәы́ӡ	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	5	nsubj	_	LMSeg:а-цәы́ӡ
5	иоур	а́ура	VERB	V_Dyn_Intr_NonFin_Conj-I_S:3_S:Ad_IO:3SgM	Dyn=Yes|Gender[io]=Masc|Mood=Cnd|Number[io]=Sing|Person[io]=3|Person[subj]=3|Subcat=Intr|VerbForm=NonFin	8	advcl:cond	_	LMSeg:а́у-ра|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
7	изхарахо	а-ха́рахара	VERB	V_Dyn_Intr_NonFin_Pres_S:3_Rel_Poss:Rel	Dyn=Yes|Person[psor]=Rel|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=NonFin	8	csubj	_	LMSeg:а-ха́ра·ха-ра
8	аҧшәма	а́-ҧшәма	NOUN	Noun_H_Sg_Det	Animacy=Hum|Definite=Def|Number=Sing	10	csubj	_	LMSeg:а́-ҧшәма
9	шиакәу	а́кәзаара	AUX	V_Stat_NonFin_Cnv_Pres_How_S:3_IO:3SgM_Cop	Dyn=No|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=3|RelType=Mnr|Tense=Pres|VerbForm=NonFin	8	cop	_	LMSeg:а́кә-заа-ра
10	узымдырӡои	а-ды́рра	VERB	V_Dyn_Tr_NonFin_Pres_Neg_Q_Emph_S:1Sg_DO:2SgM	Dyn=Yes|Gender[obj]=Masc|Mood=Int|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=1|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а-ды́р-ра|SpaceAfter=No
11	?	?	PUNCT	Punct_IntMark	_	10	punct	_	LMSeg:?|SpaceAfter=No
12	!	!	PUNCT	Punct_ExclPoint	_	10	punct	_	LMSeg:!

~~~


