---
layout: base
title:  'Statistics of nmod in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="ab_abnc-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="ab_abnc-dep-nmod-quote.html">nmod:quote</a></tt>.

2 nodes (0%) are attached to their parents as `nmod`.

2 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `nmod`: <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Жьыхәҭак	а-жьхәҭа́	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	2	nmod	_	LMSeg:а-жьхәҭа́
2	акәац	а-кәа́ц	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	obl	_	LMSeg:а-кәа́ц
3	азы	а-зы́	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	2	case	_	LMSeg:а-зы́
4	шәеибашьуама	а́ибашьра	VERB	V_Dyn_Tr_NonFin_Pres_Q_S:Rec_DO:2Pl	Dyn=Yes|Mood=Int|Number[obj]=Plur|Person[obj]=2|Person[subj]=Rec|Subcat=Tran|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а́иба·шь-ра
5	?	?	PUNCT	Punct_IntMark	_	4	punct	_	LMSeg:?
6	!	!	PUNCT	Punct_ExclPoint	_	4	punct	_	LMSeg:!

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
1	Уара	уара́	PRON	Pron_Pers_2SgM	Gender=Masc|Number=Sing|Person=2|PronType=Prs	4	obl	_	LMSeg:уара́
2	уда	а́-да	ADP	PP_Poss:2SgM	Gender[psor]=Masc|Number[psor]=Sing|Person[psor]=2	1	case	_	LMSeg:а́-да
3	хәарҭара	а-хәарҭара́	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	4	nsubj	_	LMSeg:а-хәарҭара́
4	злоу	а́-лазаара	VERB	V_Stat_NonFin_Pres_S:3_S:Ad_LO:Rel_Rel	Dyn=No|Person[lo]=Rel|Person[subj]=3|Tense=Pres|VerbForm=NonFin	6	nmod	_	LMSeg:а́-ла-заа-ра
5	уаҳа	уа́ҳа	ADV	Adv	_	7	advmod	_	LMSeg:уа́ҳа
6	акгьы	акгьы́	PRON	Pron_NH	Animacy=Nhum	7	nsubj	_	LMSeg:акгьы́
7	ыҟаӡам	а́-ҟазаара	VERB	V_Stat_Fin_Pres_Neg_Emph_S:3_S:Ad	Dyn=No|Person[subj]=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҟа-заа-ра
8	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
9	ус	ус	ADV	Adv	_	7	conj	_	LMSeg:ус
10	аума	а́кәзаара	AUX	V_Stat_NonFin_Pres_Q_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Mood=Int|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=NonFin	9	cop	_	LMSeg:а́кә-заа-ра
11	?	?	PUNCT	Punct_IntMark	_	9	punct	_	LMSeg:?
12	!	!	PUNCT	Punct_ExclPoint	_	9	punct	_	LMSeg:!

~~~


