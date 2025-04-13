---
layout: base
title:  'Statistics of csubj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ab_abnc-dep-csubj-outer.html">csubj:outer</a></tt>.

81 nodes (1%) are attached to their parents as `csubj`.

50 instances of `csubj` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01234567901235.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (50; 62% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (11; 14% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (10; 12% instances), <tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="ab_abnc-pos-AUX.html">AUX</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Измааноузеи	а́-маана	VERB	Noun_NH_Sg_Pred_NonFin_Pres_QWhat_S:3_Rel_Poss:Rel	Animacy=Nhum|Dyn=No|Number=Sing|Person[psor]=Rel|Person[subj]=3|Tense=Pres|VerbForm=NonFin	5	ccomp:quote	_	LMSeg:а́-маана
2	иҟауҵо	а́-ҟаҵара	VERB	V_Dyn_Tr_NonFin_Pres_S:2SgM_DO:Rel_Rel	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=2|Subcat=Tran|Tense=Pres|VerbForm=NonFin	1	csubj	_	LMSeg:а́-ҟа·ҵа-ра
3	?	?	PUNCT	Punct_IntMark	_	1	punct	_	LMSeg:?
4	–	–	PUNCT	Punct_Dash	_	1	punct	_	LMSeg:–
5	аҳәеит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Aor_S:3SgNH_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ҳәа-ра́
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	Амшын	а-мшы́н	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	nsubj	_	LMSeg:а-мшы́н
2	иаҵәаӡа	а́-иаҵәа	ADJ	Adj_Sg_Emph	Number=Sing	3	advmod	_	LMSeg:а́-иаҵәа
3	иҭынчуп	а-ҭы́нч	VERB	Adj_Sg_Pred_Fin_Pres_S:3	Dyn=No|Number=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а-ҭы́нч
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	иҭынчым	а-ҭы́нч	VERB	Adj_Sg_Pred_NonFin_Pres_Neg_S:Rel_Rel	Dyn=No|Number=Sing|Person[subj]=Rel|Polarity=Neg|Tense=Pres|VerbForm=NonFin	8	csubj	_	LMSeg:а-ҭы́нч
6	амшын	а-мшы́н	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	7	obj:lo	_	LMSeg:а-мшы́н
7	иҭоу	а-ҭа́заара	VERB	V_Stat_NonFin_Pres_S:Rel_LO:3SgNH_Rel	Dyn=No|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=Rel|Tense=Pres|VerbForm=NonFin	8	acl:relcl	_	LMSeg:а-ҭа́-заа-ра
8	аҧсшьаҩцәа	а-ҧсшьаҩы́	NOUN	Noun_H_Pl_Det	Animacy=Hum|Definite=Def|Number=Plur	3	conj	_	LMSeg:а-ҧсшьаҩы́
9	роуп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3Pl_Cop	Dyn=No|Number[io]=Plur|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	8	cop	_	LMSeg:а́кә-заа-ра
10	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj	color:blue
1	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
2	Нас	нас	ADV	Adv	_	4	advmod	_	LMSeg:нас
3	,	,	PUNCT	Punct_Comma	_	2	punct	_	LMSeg:,
4	сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	0	root	_	LMSeg:сара́
5	соума	а́кәзаара	AUX	V_Stat_NonFin_Pres_Q_S:3_IO:1Sg_Cop	Dyn=No|Mood=Int|Number[io]=Sing|Person[io]=1|Person[subj]=3|Tense=Pres|VerbForm=NonFin	4	cop	_	LMSeg:а́кә-заа-ра
6	хәарҭара	а-хәарҭара́	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	7	nsubj	_	LMSeg:а-хәарҭара́
7	злам	а́-лазаара	VERB	V_Stat_NonFin_Pres_Neg_S:3_S:Ad_LO:Rel_Rel	Dyn=No|Person[lo]=Rel|Person[subj]=3|Polarity=Neg|Tense=Pres|VerbForm=NonFin	9	xcomp	_	LMSeg:а́-ла-заа-ра
8	ҳәа	ҳәа́	PART	Prt_Quote	_	7	mark	_	LMSeg:ҳәа́
9	иуҧхьаӡо	а́-ҧхьаӡара	VERB	V_Dyn_Tr_NonFin_Pres_S:2SgM_DO:Rel_Rel	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=2|Subcat=Tran|Tense=Pres|VerbForm=NonFin	4	csubj	_	LMSeg:а́-ҧхьаӡа-ра
10	!	!	PUNCT	Punct_ExclPoint	_	4	punct	_	LMSeg:!

~~~


