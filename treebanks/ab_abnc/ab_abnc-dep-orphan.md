---
layout: base
title:  'Statistics of orphan in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `orphan`

This relation is universal.

3 nodes (0%) are attached to their parents as `orphan`.

2 instances of `orphan` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 33% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 orphan	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	Ишҧа	ишҧа́	ADV	Adv_Int	_	3	orphan	_	LMSeg:ишҧа́
3	уара	уара́	PRON	Pron_Pers_2SgM	Gender=Masc|Number=Sing|Person=2|PronType=Prs	0	root	_	LMSeg:уара́
4	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?
5	!	!	PUNCT	Punct_ExclPoint	_	3	punct	_	LMSeg:!

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 orphan	color:blue
1	Ашәқәа	а́-шә	NOUN	Noun_NH_Pl_Det	Animacy=Nhum|Definite=Def|Number=Plur	3	nsubj	_	LMSeg:а́-шә
2	ҩба	ҩба́	NUM	Num_NH_Card	Animacy=Nhum|NumType=Card	1	nummod	_	LMSeg:ҩба́
3	ҿан	а-ҿазаара́	VERB	V_Stat_Fin_Impf_S:3_S:Ad_[LO:3SgNH]	Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а-ҿа-заа-ра́
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	руакы	руакы́	PRON	Pron_Indef_NH_Sg_Poss:3Pl	Animacy=Nhum|Number=Sing|Number[psor]=Plur|Person[psor]=3|PronType=Ind	7	nsubj	_	LMSeg:руакы́
6	ашьашьма	а-шьашьма́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	7	iobj	_	LMSeg:а-шьашьма́
7	иатәын	а-тәы́заара	VERB	V_Stat_Fin_Impf_S:3_IO:3SgNH	Dyn=No|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	3	conj	_	LMSeg:а-тәы́-заа-ра
8	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
9	егьи	егьи́	PRON	Pron_Dem_Sg	Number=Sing|PronType=Dem	3	conj	_	LMSeg:егьи́
10	аҽыкәабарҭа	а-ҽы́кәабарҭа	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	9	orphan	_	LMSeg:а-ҽы́кәабарҭа
11	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
2	Шәлиманраа	Шәлиманраа	PROPN	Noun_Prop_Anthr_Coll_Pl_FirstNameColl	NameType=Geo|Number=Plur	4	iobj	_	LMSeg:Шәлиманраа
3	ҩ-ҭыҧк	а-ҭы́ҧ	NOUN	Noun_NH_Sg_Indet_NumPfx	Animacy=Nhum|Number=Card	4	nsubj	_	LMSeg:а-ҭы́ҧ
4	рымоуп	а́-мазаара	VERB	V_Stat_Fin_Pres_S:3_S:Ad_IO:3Pl	Dyn=No|Number[io]=Plur|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ма-заа-ра
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
6	Кәынҵалраа	Кәынҵалраа	PROPN	Noun_Prop_Anthr_Coll_Pl_FirstNameColl	NameType=Geo|Number=Plur	4	conj	_	LMSeg:Кәынҵалраа
7	–	–	PUNCT	Punct_Dash	_	8	punct	_	LMSeg:–
8	ҭыҧк	а-ҭы́ҧ	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	6	orphan	_	LMSeg:а-ҭы́ҧ
9	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


