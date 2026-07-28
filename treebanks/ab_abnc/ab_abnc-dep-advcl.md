---
layout: base
title:  'Statistics of advcl in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `advcl`

This relation is universal.
There are 6 language-specific subtypes of `advcl`: <tt><a href="ab_abnc-dep-advcl-compar.html">advcl:compar</a></tt>, <tt><a href="ab_abnc-dep-advcl-cond.html">advcl:cond</a></tt>, <tt><a href="ab_abnc-dep-advcl-conv.html">advcl:conv</a></tt>, <tt><a href="ab_abnc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="ab_abnc-dep-advcl-quote.html">advcl:quote</a></tt>, <tt><a href="ab_abnc-dep-advcl-seq.html">advcl:seq</a></tt>.

372 nodes (3%) are attached to their parents as `advcl`.

328 instances of `advcl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.35483870967742.

The following 8 pairs of parts of speech are connected with `advcl`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (347; 93% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (15; 4% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	аҵабырг	а-ҵа́бырг	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	obj	_	LMSeg:а-ҵа́бырг
2	мҩа	а́-мҩа	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	3	xcomp	_	LMSeg:а́-мҩа
3	иқәиҵарц	а́-қәҵара	VERB	V_Dyn_Tr_NonFin_Purp_S:3SgM_DO:3	Dyn=Yes|Gender[subj]=Masc|Mood=Prp|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|VerbForm=NonFin	0	root	_	LMSeg:а́-қә·ҵа-ра
4	ари	ари́	PRON	Pron_Dem_Prox_Sg	Number=Sing|PronType=Dem	5	det	_	LMSeg:ари́
5	адгьыл	а́дгьыл	NOUN	Noun_NH_Sg_[Det]	Animacy=Nhum|Number=Sing	7	obl	_	LMSeg:а́дгьыл
6	ахь	а́хь	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	5	case	_	LMSeg:а́хь
7	дшаашьҭыз	а́ашьҭра	VERB	V_Dyn_Tr_StatPass_NonFin_Cnv_Impf_How_S:3SgH	Dyn=No|Gender[subj]=Com|Number[subj]=Sing|Person[subj]=3|RelType=Mnr|Subcat=Tran|Tense=Imp|VerbForm=NonFin|Voice=Pass	3	advcl	_	LMSeg:а́а·шьҭ-ра|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advcl	color:blue
1	–	–	PUNCT	Punct_Dash	_	7	punct	_	LMSeg:–
2	Пиатаков	Пиатаков	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	4	obj	_	LMSeg:Пиатаков
3	раҧхьа	а́ҧхьа	ADP	PP_Poss:3Pl	Number[psor]=Plur|Person[psor]=3	4	obl	_	LMSeg:а́ҧхьа
4	дахьыббаз	а-бара́	VERB	V_Dyn_Tr_NonFin_Cnv_PastIndef_Where_S:2SgF_DO:3SgH	Dyn=Yes|Gender[obj]=Com|Gender[subj]=Fem|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|RelType=Loc|Subcat=Tran|Tense=Past|VerbForm=NonFin	7	advcl	_	LMSeg:а-ба-ра́
5	атроцкист	а-троцки́ст	NOUN	Noun_H_Sg_Det	Animacy=Hum|Definite=Def|Number=Sing	7	nmod:poss	_	LMSeg:а-троцки́ст
6	Лакоба	Лакоба	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	5	appos	_	LMSeg:Лакоба
7	иҩнаҿ	а-ҩны́	NOUN	Noun_NH_Sg_Poss:3SgM_Cop_PP:ҿы́	Animacy=Nhum|Case=Ine|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	LMSeg:а-ҩны́|SpaceAfter=No
8	оуп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgNH_EnclCop	Dyn=No|Gender[io]=Neut|Mood=Ind|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	7	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl	color:blue
1	Ус	ус	ADV	Adv	_	4	advcl	_	LMSeg:ус
2	шакәызгьы	а́кәзаара	AUX	V_Stat_NonFin_Cnv_Impf_How_S:3_IO:3SgNH_Cop_Encl:гьы	Dyn=No|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|RelType=Mnr|Tense=Imp|VerbForm=NonFin	1	cop	_	LMSeg:а́кә-заа-ра
3	агәы	а-гәы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	nsubj	_	LMSeg:а-гәы́
4	ҭынчымызт	а-ҭы́нч	VERB	Adj_Sg_Pred_Fin_Impf_Neg_S:3_S:Ad	Dyn=No|Mood=Ind|Number=Sing|Person[subj]=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а-ҭы́нч|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
6	иахьтәаз	а-тәа́заара	VERB	V_Stat_NonFin_Cnv_Impf_Where_S:3	Dyn=No|Person[subj]=3|RelType=Loc|Tense=Imp|VerbForm=NonFin	7	advcl	_	LMSeg:а-тәа́-заа-ра
7	итәан	а-тәа́заара	VERB	V_Stat_Fin_Impf_S:3	Dyn=No|Mood=Ind|Person[subj]=3|Tense=Imp|VerbForm=Fin	4	conj	_	LMSeg:а-тәа́-заа-ра
8	макьана	макьа́на	ADV	Adv	_	7	advmod	_	LMSeg:макьа́на|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


