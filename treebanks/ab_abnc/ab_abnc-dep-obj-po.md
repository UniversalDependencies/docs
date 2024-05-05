---
layout: base
title:  'Statistics of obj:po in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `obj:po`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-obj.html">obj</a></tt>.
There are also 3 other language-specific subtypes of `obj`: <tt><a href="ab_abnc-dep-obj-lo.html">obj:lo</a></tt>, <tt><a href="ab_abnc-dep-obj-poss.html">obj:poss</a></tt>, <tt><a href="ab_abnc-dep-obj-ro.html">obj:ro</a></tt>.

3 nodes (0%) are attached to their parents as `obj:po`.

2 instances of `obj:po` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `obj:po`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (2; 67% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj:po	color:blue
1	Иахьанӡа	иахьа́нӡа	ADV	Adv	_	3	advmod	_	LMSeg:иахьа́нӡа
2	убри	убри́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	3	nsubj	_	LMSeg:убри́
3	шҧашәзеилымкаац	а́илкаара	VERB	V_Dyn_Tr_NonFin_Cnv_Pot_Perf_Neg_How_Q_S:3_S:Ad_LO:Rec_Reln:Pot_PO:2Pl	Dyn=Yes|Mood=Int|Number[po]=Plur|Person[lo]=Rec|Person[po]=2|Person[subj]=3|Polarity=Neg|Reln=Pot|RelType=Mnr|Tense=Prf|Trans=Yes|VerbForm=NonFin	8	ccomp:quote	_	LMSeg:а́и·л·каа-ра
4	шәара	шәара́	PRON	Pron_Pers_2Pl	Number=Plur|Person=2|PronType=Prs	3	obj:po	_	LMSeg:шәара́
5	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?
6	!	!	PUNCT	Punct_ExclPoint	_	3	punct	_	LMSeg:!
7	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
8	аҳәеит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Aor_S:3SgNH_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Aor|Trans=Yes|VerbForm=Fin	0	root	_	LMSeg:а-ҳәа-ра́
9	Ала	а-ла́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	8	nsubj	_	LMSeg:а-ла́
10	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj:po	color:blue
1	Азныказы	а́зныказы	ADV	Adv	_	3	advmod	_	LMSeg:а́зныказы
2	абла	а́-бла	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	nsubj	_	LMSeg:а́-бла
3	иабаз	а-бара́	VERB	V_Dyn_Tr_NonFin_PastIndef_S:3SgNH_DO:Rel_Rel	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=3|Tense=Past|Trans=Yes|VerbForm=NonFin	4	csubj	_	LMSeg:а-ба-ра́
4	азхамҵеит	а-хаҵара́	VERB	V_Dyn_Tr_Fin_Pot_Aor_Neg_S:3_S:Ad_Reln:Pot_PO:3SgNH	Dyn=Yes|Gender[po]=Neut|Number[po]=Sing|Person[po]=3|Person[subj]=3|Polarity=Neg|Reln=Pot|Tense=Aor|Trans=Yes|VerbForm=Fin	0	root	_	LMSeg:а-ха·ҵа-ра́
5	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	obj:po	_	LMSeg:а-бгахәыҷы́
6	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


