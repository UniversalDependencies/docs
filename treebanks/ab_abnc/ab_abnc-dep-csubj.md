---
layout: base
title:  'Statistics of csubj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="ab_abnc-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="ab_abnc-dep-csubj-quote.html">csubj:quote</a></tt>.

164 nodes (1%) are attached to their parents as `csubj`.

108 instances of `csubj` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92682926829268.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (111; 68% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (19; 12% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (17; 10% instances), <tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ab_abnc-pos-ADP.html">ADP</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 csubj	color:blue
1	Наҳар	Наҳар	PROPN	Noun_Prop_Anthr_M	NameType=Prs	3	iobj:po	_	LMSeg:Наҳар
2	иаҳауаз	аҳара́	VERB	V_Dyn_Intr_NonFin_Impf_S:Rel_IO:3SgM_Rel	Dyn=Yes|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=Rel|Subcat=Intr|Tense=Imp|VerbForm=NonFin	3	csubj	_	LMSeg:аҳа-ра́
3	изычҳауамызт	а́-чҳара	VERB	V_Dyn_Tr_Fin_Pot_Impf_Neg_S:3_S:Ad_Reln:Pot_PO:3SgM	Dyn=Yes|Gender[po]=Masc|Mood=Ind|Number[po]=Sing|Person[po]=3|Person[subj]=3|Polarity=Neg|Reln=Pot|Subcat=Tran|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-чҳа-ра|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	игәы	а-гәы́	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	LMSeg:а-гәы́
6	ҭыҵны	а-ҭы́ҵра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:3_S:Ad	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	7	advcl:conv	_	LMSeg:а-ҭы́·ҵ-ра
7	ицон	а-цара́	VERB	V_Dyn_Intr_Fin_Impf_S:3	Dyn=Yes|Mood=Ind|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	3	conj	_	LMSeg:а-ца-ра́|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Арҭ	а́рҭ	PRON	Pron_Dem_Prox_Pl	Number=Plur|PronType=Dem	2	det	_	LMSeg:а́рҭ
2	ацәаҳәа	а-цәаҳәа́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	nsubj	_	LMSeg:а-цәаҳәа́
3	еиқәаҵәақәа	а́иқәаҵәа	ADJ	Adj_Pl_[Det]	Number=Plur	2	amod	_	LMSeg:а́иқәаҵәа
4	зтәу	а-тәы́заара	VERB	V_Stat_NonFin_Pres_S:3_S:Ad_IO:Rel_Rel	Dyn=No|Person[io]=Rel|Person[subj]=3|Tense=Pres|VerbForm=NonFin	5	csubj	_	LMSeg:а-тәы́-заа-ра
5	уара	уара́	PRON	Pron_Pers_2SgM	Gender=Masc|Number=Sing|Person=2|PronType=Prs	0	root	_	LMSeg:уара́
6	уакәӡами	а́кәзаара	AUX	V_Stat_NonFin_Pres_Neg_Q_Emph_S:3_IO:2SgM_Cop	Dyn=No|Gender[io]=Masc|Mood=Int|Number[io]=Sing|Person[io]=2|Person[subj]=3|Polarity=Neg|Tense=Pres|VerbForm=NonFin	5	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
7	?	?	PUNCT	Punct_IntMark	_	5	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
2	Қарҭҟа	Қарҭ	PROPN	Noun_Prop_Place_PP:ҟа	NameType=Geo	3	obl	_	LMSeg:Қарҭ
3	шәызцоз	а-цара́	VERB	V_Dyn_Intr_NonFin_Cnv_Impf_Why_S:2Pl	Dyn=Yes|Number[subj]=Plur|Person[subj]=2|RelType=Cause|Subcat=Intr|Tense=Imp|VerbForm=NonFin	4	csubj	_	LMSeg:а-ца-ра́
4	ацәыргақәҵазы	а-цәы́ргақәҵа	NOUN	Noun_NH_Sg_Det_PP:зы	Animacy=Nhum|Case=Ben|Definite=Def|Number=Sing	0	root	_	LMSeg:а-цәы́ргақәҵа
5	акәӡамызт	а́кәзаара	AUX	V_Stat_Fin_Impf_Neg_Emph_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Mood=Ind|Number[io]=Sing|Person[io]=3|Person[subj]=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	4	cop	_	LMSeg:а́кә-заа-ра|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


