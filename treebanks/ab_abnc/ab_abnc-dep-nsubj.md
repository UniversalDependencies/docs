---
layout: base
title:  'Statistics of nsubj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="ab_abnc-dep-nsubj-outer.html">nsubj:outer</a></tt>.

981 nodes (10%) are attached to their parents as `nsubj`.

791 instances of `nsubj` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75840978593272.

The following 13 pairs of parts of speech are connected with `nsubj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (567; 58% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (223; 23% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (131; 13% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (22; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	LMSeg:сара́
2	Сталини	Сталин	PROPN	Noun_Prop_Anthr_LastName_Coord	NameType=Prs	4	obj	_	LMSeg:Сталин
3	Бериеи	Бериа	PROPN	Noun_Prop_Anthr_LastName_Coord	NameType=Prs	2	conj	_	LMSeg:Бериа
4	сшьырцаз	а-шьра́	VERB	V_Dyn_Tr_NonFin_Purp_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Mood=Prp|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|VerbForm=NonFin	8	ccomp:purp	_	LMSeg:а-шь-ра́
5	Лакоба	Лакоба	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	6	nsubj	_	LMSeg:Лакоба
6	исиҭаз	а́-ҭара	VERB	V_Dyn_Tr_NonFin_PastIndef_S:3SgM_DO:Rel_IO:1Sg_Rel	Dyn=Yes|Gender[subj]=Masc|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=NonFin	7	acl:relcl	_	LMSeg:а́-ҭа-ра
7	адҵа	а-дҵа́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	obj	_	LMSeg:а-дҵа́
8	насыгӡон	а́-нагӡара	VERB	V_Dyn_Tr_Fin_Impf_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-на·гӡа-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
1	Сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	LMSeg:сара́
2	Сталини	Сталин	PROPN	Noun_Prop_Anthr_LastName_Coord	NameType=Prs	4	obj	_	LMSeg:Сталин
3	Бериеи	Бериа	PROPN	Noun_Prop_Anthr_LastName_Coord	NameType=Prs	2	conj	_	LMSeg:Бериа
4	сшьырцаз	а-шьра́	VERB	V_Dyn_Tr_NonFin_Purp_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Mood=Prp|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|VerbForm=NonFin	8	ccomp:purp	_	LMSeg:а-шь-ра́
5	Лакоба	Лакоба	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	6	nsubj	_	LMSeg:Лакоба
6	исиҭаз	а́-ҭара	VERB	V_Dyn_Tr_NonFin_PastIndef_S:3SgM_DO:Rel_IO:1Sg_Rel	Dyn=Yes|Gender[subj]=Masc|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=NonFin	7	acl:relcl	_	LMSeg:а́-ҭа-ра
7	адҵа	а-дҵа́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	obj	_	LMSeg:а-дҵа́
8	насыгӡон	а́-нагӡара	VERB	V_Dyn_Tr_Fin_Impf_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-на·гӡа-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


