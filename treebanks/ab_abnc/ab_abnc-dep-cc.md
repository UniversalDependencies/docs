---
layout: base
title:  'Statistics of cc in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `cc`

This relation is universal.

53 nodes (1%) are attached to their parents as `cc`.

53 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `cc`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-CCONJ.html">CCONJ</a></tt> (51; 96% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 cc	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	Ҳәарас	а-ҳәара́	VERB	VN_Dyn_Sg_Advb_Tr	Case=Ess|Dyn=Yes|Number=Sing|Subcat=Tran|VerbForm=Vnoun	3	xcomp	_	LMSeg:а-ҳәа-ра́
3	иаҭахузеи	а-ҭахра́	VERB	V_Stat_Tr_NonFin_Pres_QWhat_S:3SgNH_DO:Rel_Rel	Dyn=No|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а-ҭах-ра́|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	аха	аха́	CCONJ	Cj_Coord	_	8	cc	_	LMSeg:аха́
6	шәахьынӡеицыз	а́ицзаара	VERB	V_Stat_NonFin_Cnv_Impf_ToWhere_S:2Pl	Dyn=No|Number[subj]=Plur|Person[subj]=2|Tense=Imp|VerbForm=NonFin	7	advcl	_	LMSeg:а́иц-заа-ра
7	иаҵанакуа	а́-ҵанакра	VERB	V_Dyn_Tr_NonFin_Pres_[S:3SgNH]_DO:Rel_LO:3SgNH_Rel	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[obj]=Rel|Subcat=Tran|Tense=Pres|VerbForm=NonFin	8	acl:relcl	_	LMSeg:а́-ҵа·на·к-ра
8	аамҭа	а́амҭа	NOUN	Noun_NH_Sg_[Det]	Animacy=Nhum|Number=Sing	3	conj	_	LMSeg:а́амҭа
9	ауп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	8	cop	_	LMSeg:а́кә-заа-ра
10	зыӡбахә	а́-ӡбахә	NOUN	Noun_NH_Sg_Rel_Poss:Rel	Animacy=Nhum|Number=Sing|Person[psor]=Rel	11	nsubj	_	LMSeg:а́-ӡбахә
11	сымоу	а́-мазаара	VERB	V_Stat_NonFin_Pres_Q_S:3_S:Ad_IO:1Sg	Dyn=No|Mood=Int|Number[io]=Sing|Person[io]=1|Person[subj]=3|Tense=Pres|VerbForm=NonFin	8	csubj	_	LMSeg:а́-ма-заа-ра|SpaceAfter=No
12	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 cc	color:blue
1	Ицырцыруа	а́-цырцырра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_S:3	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=NonFin	6	advcl:conv	_	LMSeg:а́-цыр-цыр-ра|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	1	punct	_	LMSeg:,
3	амаҭ	а́-маҭ	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	6	nsubj	_	LMSeg:а́-маҭ
4	зны	зны	ADV	Adv	_	6	advmod	_	LMSeg:зны
5	махәык	а́-махә	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	6	obj:lo	_	LMSeg:а́-махә
6	иқәлон	а́-қәлара	VERB	V_Dyn_Intr_Fin_Impf_S:3_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-қә·ла-ра|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
8	нас	нас	ADV	Adv	_	12	cc	_	LMSeg:нас
9	егьи	егьи́	PRON	Pron_Dem_Sg	Number=Sing|PronType=Dem	10	det	_	LMSeg:егьи́
10	амахә	а́-махә	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	12	obl	_	LMSeg:а́-махә
11	ахь	а́хь	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	10	case	_	LMSeg:а́хь
12	ииасуан	а́-иасра	VERB	V_Dyn_Intr_Fin_Impf_S:3_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	6	conj	_	LMSeg:а́-иа·с-ра|SpaceAfter=No
13	,	,	PUNCT	Punct_Comma	_	12	punct	_	LMSeg:,
14	аха	аха́	CCONJ	Cj_Coord	_	15	cc	_	LMSeg:аха́
15	изылбаауамызт	а́-лбаара	VERB	V_Dyn_Intr_Fin_Pot_Impf_Neg_S:3_Reln:Pot_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Polarity=Neg|Reln=Pot|Subcat=Intr|Tense=Imp|VerbForm=Fin	6	conj	_	LMSeg:а́-л·баа-ра|SpaceAfter=No
16	.	.	PUNCT	Punct_Period	_	15	punct	_	LMSeg:.

~~~


