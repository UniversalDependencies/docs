---
layout: base
title:  'Statistics of nmod in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="ab_abnc-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="ab_abnc-dep-nmod-quote.html">nmod:quote</a></tt>.

33 nodes (0%) are attached to their parents as `nmod`.

27 instances of `nmod` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39393939393939.

The following 13 pairs of parts of speech are connected with `nmod`: <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (10; 30% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (8; 24% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	Сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	LMSeg:сара́
2	сиқәӡбоит	а́-қәыӡбара	VERB	V_Dyn_Intr_Fin_Pres_S:1Sg_LO:3SgM	Dyn=Yes|Gender[lo]=Masc|Mood=Ind|Number[lo]=Sing|Number[subj]=Sing|Person[lo]=3|Person[subj]=1|Subcat=Intr|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-қәы·ӡба-ра
3	ажәлар	а́-жәлар	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	nmod:poss	_	LMSeg:а́-жәлар
4	раҕа	аҕа́	NOUN	Noun_H_Sg_Poss:3Pl	Animacy=Hum|Number=Sing|Number[psor]=Plur|Person[psor]=3	5	nmod	_	LMSeg:аҕа́
5	Лакоба	Лакоба	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	2	iobj:lo	_	LMSeg:Лакоба|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
1	Ачараҿ	а-ча́ра	NOUN	Noun_NH_Sg_Det_PP:ҿы́	Animacy=Nhum|Case=Ine|Definite=Def|Number=Sing	2	obl	_	LMSeg:а-ча́ра
2	сахьынӡаҟаз	а́-ҟазаара	VERB	V_Stat_NonFin_Cnv_Impf_ToWhere_S:1Sg	Dyn=No|Number[subj]=Sing|Person[subj]=1|Tense=Imp|VerbForm=NonFin	6	advcl	_	LMSeg:а́-ҟа-заа-ра|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
4	фырџьан	а-фырџьа́н	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	6	nmod	_	LMSeg:а-фырџьа́н
5	заҵәык	заҵәы́к	ADV	Adv	_	4	advmod	_	LMSeg:заҵәы́к
6	ауатка	а-уа́тка	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	0	root	_	LMSeg:а-уа́тка
7	ауп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Mood=Ind|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	6	cop	_	LMSeg:а́кә-заа-ра
8	изжәыз	а́-жәра	VERB	V_Dyn_Tr_NonFin_PastIndef_S:1Sg_DO:Rel_Rel	Dyn=Yes|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=1|Subcat=Tran|Tense=Past|VerbForm=NonFin	6	csubj	_	LMSeg:а́-жә-ра|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	3	nmod	_	LMSeg:уи́
2	еиҧш	а́иҧш	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	1	case	_	LMSeg:а́иҧш
3	ауаҩы	а-уаҩы́	NOUN	Noun_H_Sg_Det	Animacy=Hum|Definite=Def|Number=Sing	5	nsubj	_	LMSeg:а-уаҩы́
4	Аҧсны	Аҧсны́	PROPN	Noun_Prop_Place	NameType=Geo	5	iobj	_	LMSeg:Аҧсны́
5	димамызт	а́-мазаара	VERB	V_Stat_Fin_Impf_Neg_S:3SgH_IO:3SgM	Dyn=No|Gender[io]=Masc|Gender[subj]=Com|Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-ма-заа-ра|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
7	Ҧачулиа	Ҧачулиа	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	8	nmod:poss	_	LMSeg:Ҧачулиа
8	иҿы	а-ҿы́	ADP	PP_Poss:3SgM	Gender[psor]=Masc|Number[psor]=Sing|Person[psor]=3	9	obl	_	LMSeg:а-ҿы́
9	даангылт	а́ангылара	VERB	V_Dyn_Intr_Fin_Aor_S:3SgH	Dyn=Yes|Gender[subj]=Com|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	5	conj	_	LMSeg:а́ан·гыла-ра|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


