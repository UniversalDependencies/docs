---
layout: base
title:  'Statistics of csubj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `csubj`

This relation is universal.

20 nodes (1%) are attached to their parents as `csubj`.

12 instances of `csubj` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (16; 80% instances), <tt><a href="ab_abnc-pos-AUX.html">AUX</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Измааноузеи	а́-маана	VERB	Noun_NH_Sg_Pred_NonFin_Pres_QWhat_S:3_Rel_Poss:Rel	Animacy=Nhum|Number=Sing|Person[psor]=Rel|Person[subj]=3|Tense=Pres|VerbForm=NonFin	5	ccomp:quote	_	LMSeg:а́-маана
2	иҟауҵо	а́-ҟаҵара	VERB	V_Dyn_Tr_NonFin_Pres_S:2SgM_DO:Rel_Rel	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=2|Tense=Pres|Trans=Yes|VerbForm=NonFin	1	csubj	_	LMSeg:а́-ҟа·ҵа-ра
3	?	?	PUNCT	Punct_IntMark	_	1	punct	_	LMSeg:?
4	–	–	PUNCT	Punct_Dash	_	1	punct	_	LMSeg:–
5	аҳәеит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Aor_S:3SgNH_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Aor|Trans=Yes|VerbForm=Fin	0	root	_	LMSeg:а-ҳәа-ра́
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 csubj	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	Шәызҿу	а-ҿы́заара	VERB	V_Stat_NonFin_Pres_S:2Pl_LO:Rel_Rel	Dyn=No|Number[subj]=Plur|Person[lo]=Rel|Person[subj]=2|Tense=Pres|VerbForm=NonFin	3	csubj	_	LMSeg:а-ҿы́-заа-ра
3	закәызеи	а́кәзаара	AUX	V_Stat_NonFin_Impf_QWhat_S:3_IO:Rel_Rel_Cop	Dyn=No|Person[io]=Rel|Person[subj]=3|Tense=Imp|VerbForm=NonFin	0	root	_	LMSeg:а́кә-заа-ра
4	шәара	шәара́	PRON	Pron_Pers_2Pl	Number=Plur|Person=2|PronType=Prs	2	nsubj	_	LMSeg:шәара́
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
6	абзамыҟәқәа	а́-бзамыҟә	NOUN	Noun_NH_Pl_Det	Animacy=Nhum|Definite=Def|Number=Plur	4	appos	_	LMSeg:а́-бзамыҟә
7	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 18 csubj	color:blue
1	Мал	а-ма́л	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	3	nmod:quote	_	LMSeg:а-ма́л
2	ҳәа	ҳәа́	PART	Prt_Quote	_	1	mark	_	LMSeg:ҳәа́
3	акгьы	акы́	PRON	Pron_Indef_NH_Sg_Encl:гьы	Animacy=Nhum|Number=Sing|PronType=Ind	4	nsubj	_	LMSeg:акы́
4	имамызт	а́-мазаара	VERB	V_Stat_Fin_Impf_Neg_S:3_S:Ad_IO:3SgM	Dyn=No|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-ма-заа-ра
5	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
6	ҩын	а-ҩны́	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	8	nsubj	_	LMSeg:а-ҩны́
7	хәыҷык	а-хәыҷы́	ADJ	Adj_Sg_Indet	Number=Sing	6	amod	_	LMSeg:а-хәыҷы́
8	изгылан	а-згы́лазаара	VERB	V_Stat_Fin_Impf_S:3_S:Ad_RO:3SgM_Reln:For	Dyn=No|Gender[ro]=Masc|Number[ro]=Sing|Person[ro]=3|Person[subj]=3|Reln=Ben|Tense=Imp|VerbForm=Fin	4	conj	_	LMSeg:а-з·гы́ла-заа-ра
9	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
10	жәки	а́-жә	NOUN	Noun_NH_Sg_Indet_Coord	Animacy=Nhum|Number=Sing	4	conj	_	LMSeg:а́-жә
11	,	,	PUNCT	Punct_Comma	_	12	punct	_	LMSeg:,
12	ҳәыски	а-ҳәы́с	NOUN	Noun_NH_Sg_Indet_Coord	Animacy=Nhum|Number=Sing	10	conj	_	LMSeg:а-ҳәы́с
13	,	,	PUNCT	Punct_Comma	_	14	punct	_	LMSeg:,
14	лаки	а-ла́	NOUN	Noun_NH_Sg_Indet_Coord	Animacy=Nhum|Number=Sing	10	conj	_	LMSeg:а-ла́
15	,	,	PUNCT	Punct_Comma	_	16	punct	_	LMSeg:,
16	цгәыки	а-цгәы́	NOUN	Noun_NH_Sg_Indet_Coord	Animacy=Nhum|Number=Sing	10	conj	_	LMSeg:а-цгәы́
17	ракәын	а́кәзаара	AUX	V_Stat_Fin_Impf_S:3_IO:3Pl_Cop	Dyn=No|Number[io]=Plur|Person[io]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	10	cop	_	LMSeg:а́кә-заа-ра
18	имаӡаз	а́-мазаара	VERB	V_Stat_NonFin_Impf_Emph_S:Rel_IO:3SgM_Rel	Dyn=No|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=Rel|Tense=Imp|VerbForm=NonFin	10	csubj	_	LMSeg:а́-ма-заа-ра
19	.	.	PUNCT	Punct_Period	_	10	punct	_	LMSeg:.

~~~


