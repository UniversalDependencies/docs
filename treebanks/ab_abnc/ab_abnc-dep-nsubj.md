---
layout: base
title:  'Statistics of nsubj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="ab_abnc-dep-nsubj-outer.html">nsubj:outer</a></tt>.

626 nodes (10%) are attached to their parents as `nsubj`.

498 instances of `nsubj` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79872204472843.

The following 11 pairs of parts of speech are connected with `nsubj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (356; 57% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (153; 24% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (75; 12% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (17; 3% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ab_abnc-pos-AUX.html">AUX</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj	color:blue
1	Бнарак	а́-бнара	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	5	obl	_	LMSeg:а́-бнара
2	аҟны	а-ҟны́	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	1	case	_	LMSeg:а-ҟны́
3	амҩахәасҭа	а-мҩахәа́сҭа	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	obj:lo	_	LMSeg:а-мҩахәа́сҭа
4	ианыланы	а-ны́лара	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а-ны́·ла-ра
5	инеиуан	а-не́ира	VERB	V_Dyn_Intr_Fin_Impf_S:3	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а-не́и-ра
6	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	5	nsubj	_	LMSeg:а-бгахәыҷы́
7	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	Закәызеи	а́кәзаара	AUX	V_Stat_NonFin_Impf_QWhat_S:3_IO:Rel_Rel_Cop	Dyn=No|Person[io]=Rel|Person[subj]=3|Tense=Imp|VerbForm=NonFin	0	root	_	LMSeg:а́кә-заа-ра
3	уара	уара́	PRON	Pron_Pers_2SgM	Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	LMSeg:уара́
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	LMSeg:сара́
6	ашәа	а́шәа	NOUN	Noun_NH_Sg_[Det]	Animacy=Nhum|Number=Sing	7	obj	_	LMSeg:а́шәа
7	сҳәоит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Pres_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|Tense=Pres|VerbForm=Fin	2	parataxis	_	LMSeg:а-ҳәа-ра́
8	,	,	PUNCT	Punct_Comma	_	12	punct	_	LMSeg:,
9	уара	уара́	PRON	Pron_Pers_2SgM	Gender=Masc|Number=Sing|Person=2|PronType=Prs	10	nsubj	_	LMSeg:уара́
10	уцаны	а-цара́	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:2SgM	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[subj]=2|Subcat=Intr|Tense=Aor|VerbForm=NonFin	12	advcl:conv	_	LMSeg:а-ца-ра́
11	амахә	а́-махә	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	12	obj:lo	_	LMSeg:а́-махә
12	уқәтәеит	а́-қәтәара	VERB	V_Dyn_Intr_Fin_Aor_S:2SgM_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Gender[subj]=Masc|Number[lo]=Sing|Number[subj]=Sing|Person[lo]=3|Person[subj]=2|Subcat=Intr|Tense=Aor|VerbForm=Fin	7	conj	_	LMSeg:а́-қә·тәа-ра
13	.	.	PUNCT	Punct_Period	_	12	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj	color:blue
1	Зегь	зегьы́	PRON	Pron_Quant	_	3	nsubj	_	LMSeg:зегьы́
2	еицны	еицны́	ADV	Adv	_	3	advmod	_	LMSeg:еицны́
3	ишнеиуаз	а-не́ира	VERB	V_Dyn_Intr_NonFin_Cnv_Impf_How_S:3	Dyn=Yes|Person[subj]=3|RelType=Mnr|Subcat=Intr|Tense=Imp|VerbForm=NonFin	8	advcl	_	LMSeg:а-не́и-ра
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	Ҵыхәакьаҿ	Ҵыхәакьаҿ	PROPN	Noun_Prop_Name	NameType=Prs	8	nsubj	_	LMSeg:Ҵыхәакьаҿ
6	аҩызцәа	а-ҩы́за	NOUN	Noun_H_Pl_Det	Animacy=Hum|Definite=Def|Number=Plur	8	obj:lo	_	LMSeg:а-ҩы́за
7	ус	а-у́с	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	8	obj	_	LMSeg:а-у́с
8	ранаҳәеит	а́·ҳәара	VERB	V_Dyn_Tr_Fin_Aor_S:3SgNH_DO:3_DO:Ad_LO:3Pl	Dyn=Yes|Gender[subj]=Neut|Number[lo]=Plur|Number[subj]=Sing|Person[lo]=3|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́·ҳәа-ра
9	:	:	PUNCT	Punct_Colon	_	8	punct	_	LMSeg::

~~~


