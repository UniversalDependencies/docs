---
layout: base
title:  'Statistics of advcl:conv in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `advcl:conv`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-advcl.html">advcl</a></tt>.
There are also 5 other language-specific subtypes of `advcl`: <tt><a href="ab_abnc-dep-advcl-compar.html">advcl:compar</a></tt>, <tt><a href="ab_abnc-dep-advcl-cond.html">advcl:cond</a></tt>, <tt><a href="ab_abnc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="ab_abnc-dep-advcl-quote.html">advcl:quote</a></tt>, <tt><a href="ab_abnc-dep-advcl-seq.html">advcl:seq</a></tt>.

340 nodes (4%) are attached to their parents as `advcl:conv`.

317 instances of `advcl:conv` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19411764705882.

The following 4 pairs of parts of speech are connected with `advcl:conv`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (337; 99% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advcl:conv	color:blue
1	Аџьықәреи	а-џьықәре́и	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	nmod:poss	_	LMSeg:а-џьықәре́и
2	ҟаҧшь	а́-ҟаҧшь	ADJ	Adj_Sg	Number=Sing	1	amod	_	LMSeg:а́-ҟаҧшь
3	аҧаҵа	а-ҧаҵа́	NOUN	Noun_NH_Sg_Poss:3SgNH	Animacy=Nhum|Gender[psor]=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nmod:poss	_	LMSeg:а-ҧаҵа́
4	аҧшра	а-ҧшра́	NOUN	Noun_NH_Sg_Poss:3SgNH	Animacy=Nhum|Gender[psor]=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	LMSeg:а-ҧшра́
5	змаз	а́-мазаара	VERB	V_Stat_NonFin_Impf_S:3_S:Ad_IO:Rel_Rel	Dyn=No|Person[io]=Rel|Person[subj]=3|Tense=Imp|VerbForm=NonFin	6	acl:relcl	_	LMSeg:а́-ма-заа-ра
6	лыхцәы	а-хцәы́	NOUN	Noun_NH_Sg_Poss:3SgF	Animacy=Nhum|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	LMSeg:а-хцәы́
7	иркьаҿны	а-ркьа́ҿра	VERB	V_Dyn_Intr_Caus_StatPass_NonFin_Cnv_Abs_Pres_S:3	Dyn=No|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=NonFin|Voice=Pass	8	advcl:conv	_	LMSeg:а-р:кьа́ҿ-ра
8	иҵырффан	а-ҵырффара́	VERB	V_Dyn_Intr_Caus_StatPass_Fin_Impf_S:3	Dyn=No|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Pass	0	root	_	LMSeg:а-ҵы·р:ффа-ра́|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl:conv	color:blue
1	–	–	PUNCT	Punct_Dash	_	5	punct	_	LMSeg:–
2	Мариа	Мариа	PROPN	Noun_Prop_Anthr_F	NameType=Prs	5	vocative	_	LMSeg:Мариа|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
4	Ира	Ира	PROPN	Noun_Prop_Anthr_F	NameType=Prs	5	nsubj	_	LMSeg:Ира
5	бҩыза	а-ҩы́за	NOUN	Noun_H_Sg_Poss:2SgF	Animacy=Hum|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2	0	root	_	LMSeg:а-ҩы́за
6	лоуп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgF_Cop	Dyn=No|Gender[io]=Fem|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	5	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
8	ҭынч	ҭы́нч	ADV	Adv	_	9	advmod	_	LMSeg:ҭы́нч
9	былмацәажәо	а́цәажәара	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_Neg_S:2SgF_IO:3SgF	Dyn=Yes|Gender[io]=Fem|Gender[subj]=Fem|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=2|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а́цәажәа-ра|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advcl:conv	color:blue
1	Дара	дара́	PRON	Pron_Pers_3Pl	Number=Plur|Person=3|PronType=Prs	3	nsubj	_	LMSeg:дара́
2	акгьы	акы́	PRON	Pron_Indef_NH_Sg_Encl:гьы	Animacy=Nhum|Number=Sing|PronType=Ind	3	obj	_	LMSeg:акы́
3	ҟарҵаӡом	а́-ҟаҵара	VERB	V_Dyn_Tr_Fin_Pres_Neg_Emph_S:3Pl_DO:3_DO:Ad	Dyn=Yes|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҟа·ҵа-ра|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	ҳара	ҳара́	PRON	Pron_Pers_1Pl	Number=Plur|Person=1|PronType=Prs	6	nsubj	_	LMSeg:ҳара́
6	иҟаҳҵо	а́-ҟаҵара	VERB	V_Dyn_Tr_NonFin_Pres_S:1Pl_DO:Rel_Rel	Dyn=Yes|Number[subj]=Plur|Person[obj]=Rel|Person[subj]=1|Subcat=Tran|Tense=Pres|VerbForm=NonFin	7	csubj	_	LMSeg:а́-ҟа·ҵа-ра
7	иазыҧшуп	а-зыҧшра́	VERB	V_Stat_Fin_Pres_S:3_RO:3SgNH_Reln:For	Dyn=No|Gender[ro]=Neut|Number[ro]=Sing|Person[ro]=3|Person[subj]=3|Reln=Ben|Tense=Pres|VerbForm=Fin	3	conj	_	LMSeg:а-зы·ҧш-ра́|SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	12	punct	_	LMSeg:,
9	имазеины	а-мазе́и	ADJ	Adj_Sg_Poss:3SgM_PP:ны	Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	advcl:conv	_	LMSeg:а-мазе́и
10	ианырбалак	а-бара́	VERB	V_Dyn_Tr_NonFin_Cnv_When_WhEver_S:3Pl_DO:3	Dyn=Yes|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|RelType=Tmp|Subcat=Tran|VerbForm=NonFin	12	advcl	_	LMSeg:а-ба-ра́
11	–	–	PUNCT	Punct_Dash	_	12	punct	_	LMSeg:–
12	ирфоит	а́-фара	VERB	V_Dyn_Tr_Fin_Pres_S:3Pl_DO:3	Dyn=Yes|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	3	conj	_	LMSeg:а́-фа-ра|SpaceAfter=No
13	,	,	PUNCT	Punct_Comma	_	14	punct	_	LMSeg:,
14	иржәуеит	а́-жәра	VERB	V_Dyn_Tr_Fin_Pres_S:3Pl_DO:3	Dyn=Yes|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	12	conj	_	LMSeg:а́-жә-ра|SpaceAfter=No
15	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


