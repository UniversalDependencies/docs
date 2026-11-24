---
layout: base
title:  'Statistics of ccomp:poss in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `ccomp:poss`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-ccomp.html">ccomp</a></tt>.
There are also 6 other language-specific subtypes of `ccomp`: <tt><a href="ab_abnc-dep-ccomp-iobj.html">ccomp:iobj</a></tt>, <tt><a href="ab_abnc-dep-ccomp-lo.html">ccomp:lo</a></tt>, <tt><a href="ab_abnc-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="ab_abnc-dep-ccomp-purp.html">ccomp:purp</a></tt>, <tt><a href="ab_abnc-dep-ccomp-quote.html">ccomp:quote</a></tt>, <tt><a href="ab_abnc-dep-ccomp-ro.html">ccomp:ro</a></tt>.

4 nodes (0%) are attached to their parents as `ccomp:poss`.

4 instances of `ccomp:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `ccomp:poss`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="ab_abnc-pos-ADP.html">ADP</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp:poss	color:blue
1	Асааҭқәа	а-саа́ҭ	NOUN	Noun_NH_Pl_Det	Animacy=Nhum|Definite=Def|Number=Plur	2	nmod:poss	_	LMSeg:а-саа́ҭ
2	рыгха	а-гха́	NOUN	Noun_NH_Sg_Poss:3Pl	Animacy=Nhum|Number=Sing|Number[psor]=Plur|Person[psor]=3	3	obj	_	LMSeg:а-гха́
3	ҟазҵо	а́-ҟаҵара	VERB	V_Dyn_Tr_NonFin_Pres_S:Rel_DO:3_DO:Ad_Rel	Dyn=Yes|Person[obj]=3|Person[subj]=Rel|Subcat=Tran|Tense=Pres|VerbForm=NonFin	4	ccomp:poss	_	LMSeg:а́-ҟа·ҵа-ра
4	дреиуоуп	а́иуа	VERB	Noun_H_Sg_Pred_Fin_Pres_S:3SgH_Poss:3Pl	Animacy=Hum|Dyn=No|Gender[subj]=Com|Mood=Ind|Number=Sing|Number[psor]=Plur|Number[subj]=Sing|Person[psor]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́иуа|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 ccomp:poss	color:blue
1	Игылақәаз	а-гы́лазаара	VERB	V_Stat_NonFin_Impf_S:Rel_Rel_Rel:Pl	Dyn=No|Person[subj]=Rel|Tense=Imp|VerbForm=NonFin	2	ccomp:poss	_	LMSeg:а-гы́ла-заа-ра
2	рахь	а́хь	ADP	PP_Poss:3Pl	Number[psor]=Plur|Person[psor]=3	3	obl	_	LMSeg:а́хь
3	дымҧшӡакәа	а-ҧшра́	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_Neg_Emph_S:3SgH	Dyn=Yes|Gender[subj]=Com|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Subcat=Intr|Tense=Aor|VerbForm=NonFin	8	advcl:conv	_	LMSeg:а-ҧш-ра́|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	Ҧачулиа	Ҧачулиа	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	6	iobj	_	LMSeg:Ҧачулиа
6	диацәажәо	а́цәажәара	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_S:3SgH_IO:3SgM	Dyn=Yes|Gender[io]=Masc|Gender[subj]=Com|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=NonFin	8	advcl:conv	_	LMSeg:а́цәажәа-ра
7	индәылҵны	а-дәы́лҵра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_FPv:на_S:3_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	8	advcl:conv	_	LMSeg:а-дәы́л·ҵ-ра
8	ицеит	а-цара́	VERB	V_Dyn_Intr_Fin_Aor_S:3	Dyn=Yes|Mood=Ind|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ца-ра́|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


