---
layout: base
title:  'Statistics of compound in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ab_abnc-dep-compound-pred.html">compound:pred</a></tt>, <tt><a href="ab_abnc-dep-compound-prt.html">compound:prt</a></tt>.

15 nodes (0%) are attached to their parents as `compound`.

15 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (11; 73% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	–	–	PUNCT	Punct_Dash	_	7	punct	_	LMSeg:–
2	Аҧсшьарҭа	а-ҧсшьа́рҭа	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	compound	_	LMSeg:а-ҧсшьа́рҭа
3	ҩнқәа	а-ҩны́	NOUN	Noun_NH_Pl	Animacy=Nhum|Number=Plur	7	obl	_	LMSeg:а-ҩны́
4	рҿы	а-ҿы́	ADP	PP_Poss:3Pl	Number[psor]=Plur|Person[psor]=3	3	case	_	LMSeg:а-ҿы́
5	еиҳа	еиҳа́	ADV	Adv	_	7	advmod	_	LMSeg:еиҳа́
6	ахақәиҭра	а-хақәи́ҭра	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	7	nsubj	_	LMSeg:а-хақәи́ҭра
7	ыҟоуп	а́-ҟазаара	VERB	V_Stat_Fin_Pres_S:3_S:Ad	Dyn=No|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҟа-заа-ра|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
2	Ара	ара́	ADV	Adv	_	4	advmod	_	LMSeg:ара́
3	ҧсшьарҭа	а-ҧсшьа́рҭа	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	4	compound	_	LMSeg:а-ҧсшьа́рҭа
4	ҩным	а-ҩны́	VERB	Noun_NH_Sg_Pred_Fin_Pres_Neg_S:3_S:Ad	Animacy=Nhum|Dyn=No|Number=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а-ҩны́|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	–	–	PUNCT	Punct_Dash	_	8	punct	_	LMSeg:–
2	Сыцхыраара	а-цхы́раара	NOUN	Noun_NH_Sg_Poss:1Sg	Animacy=Nhum|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	LMSeg:а-цхы́раара
3	акыр	акы́р	ADV	Adv	_	4	advmod	_	LMSeg:акы́р
4	ишәыхәозар	а́-хәара	VERB	V_Dyn_Intr_NonFin_Pres_Conj-I_S:3_IO:2Pl	Dyn=Yes|Mood=Cnd|Number[io]=Plur|Person[io]=2|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=NonFin	8	advcl:cond	_	LMSeg:а́-хәа-ра|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
6	мап	ма́п	ADV	Adv_Root	_	7	compound	_	LMSeg:ма́п
7	кышьас	а-кы́шьа	NOUN	Noun_NH_Sg_Advb	Animacy=Nhum|Case=Ess|Number=Sing	8	xcomp	_	LMSeg:а-кы́шьа
8	исымои	а́-мазаара	VERB	V_Stat_NonFin_Pres_Q_S:3_IO:1Sg	Dyn=No|Mood=Int|Number[io]=Sing|Person[io]=1|Person[subj]=3|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а́-ма-заа-ра|SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
10	суалҧшьа	а-уа́лҧшьа	NOUN	Noun_NH_Sg_Poss:1Sg	Animacy=Nhum|Number=Sing|Number[psor]=Sing|Person[psor]=1	8	conj	_	LMSeg:а-уа́лҧшьа
11	ауп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	10	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
12	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


