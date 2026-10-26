---
layout: base
title:  'Statistics of iobj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `iobj`

This relation is universal.
There are 5 language-specific subtypes of `iobj`: <tt><a href="ab_abnc-dep-iobj-cs.html">iobj:cs</a></tt>, <tt><a href="ab_abnc-dep-iobj-lo.html">iobj:lo</a></tt>, <tt><a href="ab_abnc-dep-iobj-po.html">iobj:po</a></tt>, <tt><a href="ab_abnc-dep-iobj-poss.html">iobj:poss</a></tt>, <tt><a href="ab_abnc-dep-iobj-ro.html">iobj:ro</a></tt>.

134 nodes (1%) are attached to their parents as `iobj`.

125 instances of `iobj` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (80; 60% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (33; 25% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (10; 7% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 iobj	color:blue
1	Георги	Георги	PROPN	Noun_Prop_Anthr_M	NameType=Prs	2	nmod:poss	_	LMSeg:Георги
2	иаара	аа-ра́	VERB	VN_Dyn_Sg_Intr_Poss:3SgM	Dyn=Yes|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Subcat=Intr|VerbForm=Vnoun	3	nmod:poss	_	LMSeg:аа-ра́
3	аамҭа	а́амҭа	NOUN	Noun_NH_Sg_Poss:3SgNH	Animacy=Nhum|Gender[psor]=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	LMSeg:а́амҭа
4	анахыҧаӡа	а-хы́ҧара	VERB	V_Dyn_Intr_NonFin_Cnv_Aor_When_Emph_S:3_S:Ad_LO:SgNH	Dyn=Yes|Person[subj]=3|RelType=Tmp|Subcat=Intr|Tense=Aor|VerbForm=NonFin	8	advcl	_	LMSeg:а-хы́·ҧа-ра|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
6	Лиудмила	Лиудмила	PROPN	Noun_Prop_Anthr_F	NameType=Prs	8	nsubj	_	LMSeg:Лиудмила
7	аҭел	а-ҭе́л	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	iobj	_	LMSeg:а-ҭе́л
8	дасит	а́-сра	VERB	V_Dyn_Intr_Fin_Aor_S:3SgH_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Gender[subj]=Com|Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-с-ра|SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	11	punct	_	LMSeg:,
10	аха	аха́	CCONJ	Cj_Coord	_	11	cc	_	LMSeg:аха́
11	ҿимҭит	а-ҿҭра́	VERB	V_Dyn_Tr_Fin_Aor_Neg_S:3SgM_DO:ҿ	Dyn=Yes|Gender[subj]=Masc|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Subcat=Tran|Tense=Aor|VerbForm=Fin	8	conj	_	LMSeg:а-ҿ·ҭ-ра́|SpaceAfter=No
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
3	исҭом	а́-ҭара	VERB	V_Dyn_Tr_Fin_Pres_Neg_S:1Sg_DO:3_DO:Ad_IO:3SgM	Dyn=Yes|Gender[io]=Masc|Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=1|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҭа-ра|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	зегьы	зегьы́	PRON	Pron_Quant	PronType=Tot	6	nsubj	_	LMSeg:зегьы́
6	зхароу	а-ха́разаара	VERB	V_Stat_NonFin_Pres_S:3_S:Ad_IO:Rel_Rel	Dyn=No|Person[io]=Rel|Person[subj]=3|Tense=Pres|VerbForm=NonFin	7	csubj	_	LMSeg:а-ха́ра-заа-ра
7	сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	3	conj	_	LMSeg:сара́
8	соуп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:1Sg_Cop	Dyn=No|Mood=Ind|Number[io]=Sing|Person[io]=1|Person[subj]=3|Tense=Pres|VerbForm=Fin	7	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
9	:	:	PUNCT	Punct_Colon	_	7	punct	_	LMSeg::

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 iobj	color:blue
1	Ҧачулиа	Ҧачулиа	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	4	iobj	_	LMSeg:Ҧачулиа
2	уаҳа	уа́ҳа	ADV	Adv	_	4	advmod	_	LMSeg:уа́ҳа
3	ҧсыхәа	а-ҧсы́хәа	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	4	nsubj	_	LMSeg:а-ҧсы́хәа
4	анимоуӡа	а́ура	VERB	V_Dyn_Intr_NonFin_Cnv_Aor_Neg_When_Emph_S:3_S:Ad_IO:3SgM	Dyn=Yes|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=3|Polarity=Neg|RelType=Tmp|Subcat=Intr|Tense=Aor|VerbForm=NonFin	8	advcl	_	LMSeg:а́у-ра|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
6	аӡбаҩ	а́-ӡбаҩ	NOUN	Noun_H_Sg_Det	Animacy=Hum|Definite=Def|Number=Sing	8	nsubj	_	LMSeg:а́-ӡбаҩ
7	ахәмарра	а́-хәмарра	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	iobj:lo	_	LMSeg:а́-хәмарра
8	даҟәихит	а-ҟәы́хра	VERB	V_Dyn_Tr_Fin_Aor_S:3SgM_DO:3SgH_LO:SgNH	Dyn=Yes|Gender[obj]=Com|Gender[subj]=Masc|Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ҟәы́·х-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


