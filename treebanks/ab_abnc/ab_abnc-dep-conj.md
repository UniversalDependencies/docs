---
layout: base
title:  'Statistics of conj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `conj`

This relation is universal.

130 nodes (5%) are attached to their parents as `conj`.

130 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.32307692307692.

The following 11 pairs of parts of speech are connected with `conj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (90; 69% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (27; 21% instances), <tt><a href="ab_abnc-pos-AUX.html">AUX</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 conj	color:blue
1	Амла	а́-мла	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	2	iobj	_	LMSeg:а́-мла
2	иакуан	а-кра́	VERB	V_Dyn_Intr_Fin_Impf_S:3_IO:3SgNH	Dyn=Yes|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Imp|Trans=No|VerbForm=Fin	0	root	_	LMSeg:а-к-ра́
3	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
4	џьара	џьара́	ADV	Adv	_	6	advmod	_	LMSeg:џьара́
5	фатәык	а́-фатә	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	6	obj	_	LMSeg:а́-фатә
6	аҧшаара	а́-ҧшаара	VERB	VN_Dyn_Sg_Det_Tr	Definite=Def|Dyn=Yes|Number=Sing|Trans=Yes|VerbForm=Vnoun	7	xcomp:lo	_	LMSeg:а́-ҧшаа-ра
7	иашьҭан	а́-шьҭазаара	VERB	V_Stat_Fin_Impf_S:3_LO:3SgNH	Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	2	conj	_	LMSeg:а́-шьҭа-заа-ра
8	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 conj	color:blue
1	Абгахәыҷи	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det_Coord	Animacy=Nhum|Definite=Def|Number=Sing	0	root	_	LMSeg:а-бгахәыҷы́
2	Аҵысҕреи	а-ҵы́сҕра	NOUN	Noun_NH_Sg_Det_Coord	Animacy=Nhum|Definite=Def|Number=Sing	1	conj	_	LMSeg:а-ҵы́сҕра

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 conj	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	Закәызеи	а́кәзаара	AUX	V_Stat_NonFin_Impf_QWhat_S:3_IO:Rel_Rel_Cop	Dyn=No|Person[io]=Rel|Person[subj]=3|Tense=Imp|VerbForm=NonFin	0	root	_	LMSeg:а́кә-заа-ра
3	уара	уара́	PRON	Pron_Pers_2SgM	Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	LMSeg:уара́
4	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
5	зегьы	зегьы́	PRON	Pron_Quant	_	6	nmod:poss	_	LMSeg:зегьы́
6	уҳаиҕьушәа	а́иҕь	VERB	Adj_Sg_Pred_NonFin_Pres_AsIf_S:2SgM_Poss:1Pl	Gender[subj]=Masc|Number=Sing|Number[psor]=Plur|Number[subj]=Sing|Person[psor]=1|Person[subj]=2|Tense=Pres|VerbForm=NonFin	2	conj	_	LMSeg:а́иҕь
7	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
8	иуцәажәашьоузеи	а-цәа́жәашьа	VERB	Noun_NH_Sg_Pred_NonFin_Pres_QWhat_S:Rel_Rel_Poss:2SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=2|Person[subj]=Rel|Tense=Pres|VerbForm=NonFin	2	conj	_	LMSeg:а-цәа́жәашьа
9	?	?	PUNCT	Punct_IntMark	_	8	punct	_	LMSeg:?
10	!	!	PUNCT	Punct_ExclPoint	_	8	punct	_	LMSeg:!

~~~


