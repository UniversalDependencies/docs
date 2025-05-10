---
layout: base
title:  'Statistics of acl:relcl in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-acl.html">acl</a></tt>.

125 nodes (1%) are attached to their parents as `acl:relcl`.

110 instances of `acl:relcl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.192.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (102; 82% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (16; 13% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl:relcl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl:relcl	color:blue
1	Баҳама	аҳара́	VERB	V_Dyn_Intr_NonFin_Aor_Q_S:3_S:Ad_IO:2SgF	Dyn=Yes|Gender[io]=Fem|Mood=Int|Number[io]=Sing|Person[io]=2|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	0	root	_	LMSeg:аҳа-ра́|SpaceAfter=No
2	?	?	PUNCT	Punct_IntMark	_	1	punct	_	LMSeg:?
3	–	–	PUNCT	Punct_Dash	_	1	punct	_	LMSeg:–
4	ибжьала	а-бжьы́	NOUN	Noun_NH_Sg_Poss:3SgM_PP:ла	Animacy=Nhum|Case=Ins|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl	_	LMSeg:а-бжьы́
5	рыцҳашьара	а-ры́цҳашьара	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	6	nsubj	_	LMSeg:а-ры́цҳашьара
6	злаӡамыз	а́-лазаара	VERB	V_Stat_NonFin_Impf_Neg_Emph_S:3_S:Ad_LO:Rel_Rel	Dyn=No|Person[lo]=Rel|Person[subj]=3|Polarity=Neg|Tense=Imp|VerbForm=NonFin	7	acl:relcl	_	LMSeg:а́-ла-заа-ра
7	аӡәы	аӡәы́	PRON	Pron_Indef_H_Sg	Animacy=Hum|Number=Sing|PronType=Ind	9	advcl	_	LMSeg:аӡәы́
8	шиакәыз	а́кәзаара	AUX	V_Stat_NonFin_Cnv_Impf_How_S:3_IO:3SgM_Cop	Dyn=No|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=3|RelType=Mnr|Tense=Imp|VerbForm=NonFin	7	cop	_	LMSeg:а́кә-заа-ра
9	ҩашьомызт	а-ҩа́шьара	VERB	V_Dyn_Intr_Fin_Impf_Neg_S:3_S:Ad	Dyn=Yes|Person[subj]=3|Polarity=Neg|Subcat=Intr|Tense=Imp|VerbForm=Fin	1	parataxis	_	LMSeg:а-ҩа́шьа-ра|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl:relcl	color:blue
1	40-ҟа	40	NUM	Num_NH_Card_Digits_Approx	Animacy=Nhum|NumType=Card	2	nummod	_	LMSeg:40
2	шықәса	а́-шықәса	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	3	obl	_	LMSeg:а́-шықәса
3	ирықәу	а́-қәзаара	VERB	V_Stat_NonFin_Pres_S:Rel_LO:3Pl_Rel	Dyn=No|Number[lo]=Plur|Person[lo]=3|Person[subj]=Rel|Tense=Pres|VerbForm=NonFin	4	acl:relcl	_	LMSeg:а́-қә-заа-ра
4	ҩны	а-ҩны́	VERB	Noun_NH_Sg_Pred_LHP_S:3_S:Ad	Animacy=Nhum|Dyn=No|Number=Sing|Person[subj]=3	0	root	_	LMSeg:а-ҩны́
5	ҧҳәысуп	а-ҧҳәы́с	VERB	Noun_H_F_Sg_Pred_RHP_Fin_Pres	Animacy=Hum|Dyn=No|Number=Sing|Tense=Pres|VerbForm=Fin	4	compound:pred	_	LMSeg:а-ҧҳәы́с|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


