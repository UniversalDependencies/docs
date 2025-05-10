---
layout: base
title:  'Statistics of iobj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `iobj`

This relation is universal.

98 nodes (1%) are attached to their parents as `iobj`.

92 instances of `iobj` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51020408163265.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (60; 61% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (24; 24% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (8; 8% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 iobj	color:blue
1	Георги	Георги	PROPN	Noun_Prop_Anthr_M	NameType=Prs	2	nmod:poss	_	LMSeg:Георги
2	иаара	аа-ра́	VERB	VN_Dyn_Sg_Intr_Poss:3SgM	Dyn=Yes|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Subcat=Intr|VerbForm=Vnoun	3	nmod:poss	_	LMSeg:аа-ра́
3	аамҭа	а́амҭа	NOUN	Noun_NH_Sg_Poss:3SgNH	Animacy=Nhum|Gender[psor]=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	LMSeg:а́амҭа
4	анахыҧаӡа	а-хы́ҧара	VERB	V_Dyn_Intr_NonFin_Cnv_Aor_When_Emph_S:3_S:Ad_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|RelType=Tmp|Subcat=Intr|Tense=Aor|VerbForm=NonFin	8	advcl	_	LMSeg:а-хы́·ҧа-ра|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
6	Лиудмила	Лиудмила	PROPN	Noun_Prop_Anthr_F	NameType=Prs	8	nsubj	_	LMSeg:Лиудмила
7	аҭел	а-ҭе́л	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	iobj	_	LMSeg:а-ҭе́л
8	дасит	а́-сра	VERB	V_Dyn_Intr_Fin_Aor_S:3SgH_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Gender[subj]=Com|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-с-ра|SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	11	punct	_	LMSeg:,
10	аха	аха́	CCONJ	Cj_Coord	_	11	cc	_	LMSeg:аха́
11	ҿимҭит	а-ҿҭра́	VERB	V_Dyn_Tr_Fin_Aor_Neg_S:3SgM_DO:ҿ	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Subcat=Tran|Tense=Aor|VerbForm=Fin	8	conj	_	LMSeg:а-ҿ·ҭ-ра́|SpaceAfter=No
12	.	.	PUNCT	Punct_Period	_	11	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Аӡәгьы	аӡәы́	PRON	Pron_Indef_H_Sg_Encl:гьы	Animacy=Hum|Number=Sing|PronType=Ind	3	iobj	_	LMSeg:аӡәы́
2	гәыбҕан	а-гәыбҕа́н	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	3	obj	_	LMSeg:а-гәыбҕа́н
3	исҭом	а́-ҭара	VERB	V_Dyn_Tr_Fin_Pres_Neg_S:1Sg_DO:3_DO:Ad_IO:3SgM	Dyn=Yes|Gender[io]=Masc|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=1|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҭа-ра|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	зегьы	зегьы́	PRON	Pron_Quant	_	6	nsubj	_	LMSeg:зегьы́
6	зхароу	а-ха́разаара	VERB	V_Stat_NonFin_Pres_S:3_S:Ad_IO:Rel_Rel	Dyn=No|Person[io]=Rel|Person[subj]=3|Tense=Pres|VerbForm=NonFin	7	csubj	_	LMSeg:а-ха́ра-заа-ра
7	сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	3	conj	_	LMSeg:сара́
8	соуп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:1Sg_Cop	Dyn=No|Number[io]=Sing|Person[io]=1|Person[subj]=3|Tense=Pres|VerbForm=Fin	7	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
9	:	:	PUNCT	Punct_Colon	_	7	punct	_	LMSeg::

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
2	Шәлиманраа	Шәлиманраа	PROPN	Noun_Prop_Anthr_Coll_Pl_FirstNameColl	NameType=Prs|Number=Plur	4	iobj	_	LMSeg:Шәлиманраа
3	ҩ-ҭыҧк	а-ҭы́ҧ	NOUN	Noun_NH_Sg_Indet_NumPfx	Animacy=Nhum|Number=Card	4	nsubj	_	LMSeg:а-ҭы́ҧ
4	рымоуп	а́-мазаара	VERB	V_Stat_Fin_Pres_S:3_S:Ad_IO:3Pl	Dyn=No|Number[io]=Plur|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ма-заа-ра|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
6	Кәынҵалраа	Кәынҵалраа	PROPN	Noun_Prop_Anthr_Coll_Pl_FirstNameColl	NameType=Prs|Number=Plur	4	conj	_	LMSeg:Кәынҵалраа
7	–	–	PUNCT	Punct_Dash	_	8	punct	_	LMSeg:–
8	ҭыҧк	а-ҭы́ҧ	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	6	orphan	_	LMSeg:а-ҭы́ҧ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


