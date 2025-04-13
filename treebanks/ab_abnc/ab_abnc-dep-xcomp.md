---
layout: base
title:  'Statistics of xcomp in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `xcomp`

This relation is universal.
There are 3 language-specific subtypes of `xcomp`: <tt><a href="ab_abnc-dep-xcomp-lo.html">xcomp:lo</a></tt>, <tt><a href="ab_abnc-dep-xcomp-obj.html">xcomp:obj</a></tt>, <tt><a href="ab_abnc-dep-xcomp-subj.html">xcomp:subj</a></tt>.

35 nodes (1%) are attached to their parents as `xcomp`.

35 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37142857142857.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (24; 69% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (8; 23% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	Уи	уи́	PRON	Pron_Pers_3Sg	PronType=Prs	5	nsubj	_	LMSeg:уи́
3	уара	уара́	PRON	Pron_Pers_2SgM	Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	iobj	_	LMSeg:уара́
4	гәырҩас	а-гәырҩа́	NOUN	Noun_NH_Sg_Advb	Animacy=Nhum|Case=Ess|Number=Sing	5	xcomp	_	LMSeg:а-гәырҩа́
5	изумоузеи	а́-мазаара	VERB	V_Stat_NonFin_Cnv_Pres_Why_Q_S:3_IO:2SgM	Dyn=No|Gender[io]=Masc|Mood=Int|Number[io]=Sing|Person[io]=2|Person[subj]=3|RelType=Cause|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а́-ма-заа-ра
6	?	?	PUNCT	Punct_IntMark	_	5	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 xcomp	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	2	xcomp	_	LMSeg:уи́
2	акәхеит	а́кәхара	VERB	V_Dyn_Intr_Fin_Aor_S:3_IO:3SgNH_Cop	Dyn=Yes|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́кә·ха-ра
3	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
4	иҳәыҧыӡыҧуа	а-ҳәҧы́ӡыҧра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_S:3	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а-ҳәҧы́ӡыҧ-ра
5	иаалахеит	а́-лахара	VERB	V_Dyn_Intr_Fin_Aor_FPv:аа_S:3_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	2	conj	_	LMSeg:а́-ла·ха-ра
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


