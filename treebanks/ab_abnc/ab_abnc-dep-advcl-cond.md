---
layout: base
title:  'Statistics of advcl:cond in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `advcl:cond`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-advcl.html">advcl</a></tt>.
There are also 5 other language-specific subtypes of `advcl`: <tt><a href="ab_abnc-dep-advcl-compar.html">advcl:compar</a></tt>, <tt><a href="ab_abnc-dep-advcl-conv.html">advcl:conv</a></tt>, <tt><a href="ab_abnc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="ab_abnc-dep-advcl-quote.html">advcl:quote</a></tt>, <tt><a href="ab_abnc-dep-advcl-seq.html">advcl:seq</a></tt>.

40 nodes (1%) are attached to their parents as `advcl:cond`.

35 instances of `advcl:cond` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.125.

The following 5 pairs of parts of speech are connected with `advcl:cond`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (35; 88% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="ab_abnc-pos-AUX.html">AUX</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 advcl:cond	color:blue
1	–	–	PUNCT	Punct_Dash	_	10	punct	_	LMSeg:–
2	Аха	аха́	CCONJ	Cj_Coord	_	10	cc	_	LMSeg:аха́
3	аӡынра	а́-ӡынра	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	6	obl	_	LMSeg:а́-ӡынра
4	ишәфо	а́-фара	VERB	V_Dyn_Tr_NonFin_Pres_S:2Pl_DO:Rel_Rel	Dyn=Yes|Number[subj]=Plur|Person[obj]=Rel|Person[subj]=2|Subcat=Tran|Tense=Pres|VerbForm=NonFin	5	csubj	_	LMSeg:а́-фа-ра
5	шәмоуа	а́ура	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_Neg_S:3_S:Ad_IO:2Pl	Dyn=Yes|Number[io]=Plur|Person[io]=2|Person[subj]=3|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=NonFin	6	advcl:conv	_	LMSeg:а́у-ра
6	шәаақәхар	а́-қәхара	VERB	V_Dyn_Intr_NonFin_Conj-I_FPv:аа_S:2Pl_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Mood=Cnd|Number[lo]=Sing|Number[subj]=Plur|Person[lo]=3|Person[subj]=2|Subcat=Intr|VerbForm=NonFin	10	advcl:cond	_	LMSeg:а́-қә·ха-ра
7	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
8	амла	а́-мла	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	9	iobj	_	LMSeg:а́-мла
9	шәаганы	а-гара́	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:2Pl_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Number[io]=Sing|Number[subj]=Plur|Person[io]=3|Person[subj]=2|Subcat=Intr|Tense=Aor|VerbForm=NonFin	10	advcl:conv	_	LMSeg:а-га-ра́
10	шәымҧсуеи	а-ҧсра́	VERB	V_Dyn_Intr_NonFin_Pres_Neg_Q_S:2Pl	Dyn=Yes|Mood=Int|Number[subj]=Plur|Person[subj]=2|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а-ҧс-ра́
11	!	!	PUNCT	Punct_ExclPoint	_	10	punct	_	LMSeg:!

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 advcl:cond	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	Ус	ус	ADV	Adv	_	7	advcl:cond	_	LMSeg:ус
3	акәзар	а́кәзаара	AUX	V_Stat_NonFin_Pres_Conj-I_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Mood=Cnd|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=NonFin	2	cop	_	LMSeg:а́кә-заа-ра
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	амла	а́-мла	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	6	iobj	_	LMSeg:а́-мла
6	уаганы	а-гара́	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:2SgM_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Gender[subj]=Masc|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=2|Subcat=Intr|Tense=Aor|VerbForm=NonFin	7	advcl:conv	_	LMSeg:а-га-ра́
7	аҧсра_	а-ҧсра́	VERB	VN_Dyn_Sg_Det_Intr_Cop	Definite=Def|Dyn=Yes|Number=Sing|Subcat=Intr|VerbForm=Vnoun	0	root	_	LMSeg:а-ҧс-ра́
8	_ауп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	7	cop	_	LMSeg:а́кә-заа-ра
9	иузыҧшу	а-зыҧшра́	VERB	V_Stat_NonFin_Pres_S:Rel_RO:2SgM_Rel_Reln:For	Dyn=No|Gender[ro]=Masc|Number[ro]=Sing|Person[ro]=2|Person[subj]=Rel|Reln=Ben|Tense=Pres|VerbForm=NonFin	7	csubj	_	LMSeg:а-зы·ҧш-ра́
10	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advcl:cond	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	Ҳәарас	а-ҳәара́	VERB	VN_Dyn_Sg_Advb_Tr	Case=Ess|Dyn=Yes|Number=Sing|Subcat=Tran|VerbForm=Vnoun	3	xcomp	_	LMSeg:а-ҳәа-ра́
3	иаҭахузеи	а-ҭахра́	VERB	V_Stat_Tr_NonFin_Pres_QWhat_S:3SgNH_DO:Rel_Rel	Dyn=No|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а-ҭах-ра́
4	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
5	сҽеиҭаскыр	а-ҽе́иҭакра	VERB	V_Dyn_Tr_NonFin_Conj-I_S:1Sg_Refl:1Sg	Dyn=Yes|Mood=Cnd|Number[refl]=Sing|Number[subj]=Sing|Person[refl]=1|Person[subj]=1|Subcat=Tran|VerbForm=NonFin	6	advcl:cond	_	LMSeg:а-ҽ·е́иҭа·к-ра
6	акәымзи	а́кәзаара	AUX	V_Stat_NonFin_Impf_Neg_Q_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Mood=Int|Number[io]=Sing|Person[io]=3|Person[subj]=3|Polarity=Neg|Tense=Imp|VerbForm=NonFin	3	conj	_	LMSeg:а́кә-заа-ра
7	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


