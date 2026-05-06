---
layout: base
title:  'Statistics of advcl:conv in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `advcl:conv`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-advcl.html">advcl</a></tt>.
There are also 5 other language-specific subtypes of `advcl`: <tt><a href="ab_abnc-dep-advcl-compar.html">advcl:compar</a></tt>, <tt><a href="ab_abnc-dep-advcl-cond.html">advcl:cond</a></tt>, <tt><a href="ab_abnc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="ab_abnc-dep-advcl-quote.html">advcl:quote</a></tt>, <tt><a href="ab_abnc-dep-advcl-seq.html">advcl:seq</a></tt>.

493 nodes (4%) are attached to their parents as `advcl:conv`.

455 instances of `advcl:conv` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27586206896552.

The following 5 pairs of parts of speech are connected with `advcl:conv`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (488; 99% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
8	иҵырффан	а-ҵырффара́	VERB	V_Dyn_Intr_Caus_StatPass_Fin_Impf_S:3	Dyn=No|Mood=Ind|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Pass	0	root	_	LMSeg:а-ҵы·р:ффа-ра́|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 advcl:conv	color:blue
1	–	–	PUNCT	Punct_Dash	_	9	punct	_	LMSeg:–
2	Уаргьы	уара́	PRON	Pron_Pers_2SgM_Encl:гьы	Gender=Masc|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	LMSeg:уара́
3	унаскьа	а́-наскьара	VERB	V_Dyn_Intr_Fin_Impv_S:2SgM	Dyn=Yes|Gender[subj]=Masc|Mood=Imp|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|VerbForm=Fin	9	ccomp:quote	_	LMSeg:а́-наскьа-ра|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
5	саргьы	сара́	PRON	Pron_Pers_1Sg_Encl:гьы	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	LMSeg:сара́
6	снаскьоит	а́-наскьара	VERB	V_Dyn_Intr_Fin_Pres_S:1Sg	Dyn=Yes|Mood=Ind|Number[subj]=Sing|Person[subj]=1|Subcat=Intr|Tense=Pres|VerbForm=Fin	3	conj	_	LMSeg:а́-наскьа-ра|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
8	–	–	PUNCT	Punct_Dash	_	9	punct	_	LMSeg:–
9	аҳәеит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Aor_S:3SgNH_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Neut|Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ҳәа-ра́
10	Тәыҩаду	Тәыҩаду	PROPN	Noun_Prop_Name	NameType=Prs	9	nsubj	_	LMSeg:Тәыҩаду|SpaceAfter=No
11	,	,	PUNCT	Punct_Comma	_	13	punct	_	LMSeg:,
12	абжьы	а-бжьы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	13	obj	_	LMSeg:а-бжьы́
13	ныҵакны	ны́ҵакны	ADV	Adv_S:Ad	_	9	advcl:conv	_	LMSeg:ны́ҵакны|SpaceAfter=No
14	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

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
6	лоуп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgF_Cop	Dyn=No|Gender[io]=Fem|Mood=Ind|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	5	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
8	ҭынч	ҭы́нч	ADV	Adv	_	9	advmod	_	LMSeg:ҭы́нч
9	былмацәажәо	а́цәажәара	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_Neg_S:2SgF_IO:3SgF	Dyn=Yes|Gender[io]=Fem|Gender[subj]=Fem|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=2|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а́цәажәа-ра|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


