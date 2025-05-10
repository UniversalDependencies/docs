---
layout: base
title:  'Statistics of ccomp:quote in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `ccomp:quote`

This relation is a language-specific subtype of .
There are also 6 other language-specific subtypes of `ccomp`: <tt><a href="ab_abnc-dep-ccomp-iobj.html">ccomp:iobj</a></tt>, <tt><a href="ab_abnc-dep-ccomp-lo.html">ccomp:lo</a></tt>, <tt><a href="ab_abnc-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="ab_abnc-dep-ccomp-poss.html">ccomp:poss</a></tt>, <tt><a href="ab_abnc-dep-ccomp-purp.html">ccomp:purp</a></tt>, <tt><a href="ab_abnc-dep-ccomp-ro.html">ccomp:ro</a></tt>.

125 nodes (1%) are attached to their parents as `ccomp:quote`.

119 instances of `ccomp:quote` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.736.

The following 6 pairs of parts of speech are connected with `ccomp:quote`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (116; 93% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp:quote	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	Шәҭазаара	а-ҭа́заара	VERB	VN_Stat_Sg_Poss:2Pl	Dyn=No|Number=Sing|Number[psor]=Plur|Person[psor]=2|VerbForm=Vnoun	3	nsubj	_	LMSeg:а-ҭа́-заа-ра
3	бзиазааит	а-бзи́а	VERB	Adj_Sg_Pred_Fin_Subj_S:3_S:Ad	Dyn=No|Mood=Sub|Number=Sing|Person[subj]=3|VerbForm=Fin	6	ccomp:quote	_	LMSeg:а-бзи́а|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
5	–	–	PUNCT	Punct_Dash	_	6	punct	_	LMSeg:–
6	иҳәан	а-ҳәара́	VERB	V_Dyn_Tr_Fin_PastIndef_S:3SgM_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=Fin	10	advcl:seq	_	LMSeg:а-ҳәа-ра́|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
8	Лакоба	Лакоба	PROPN	Noun_Prop_Anthr_LastName	NameType=Prs	10	nsubj	_	LMSeg:Лакоба
9	агылара	а-гы́лара	VERB	VN_Dyn_Sg_Det_Intr	Definite=Def|Dyn=Yes|Number=Sing|Subcat=Intr|VerbForm=Vnoun	10	obj:ro	_	LMSeg:а-гы́ла-ра
10	иҽазикит	а-ҽазкра́	VERB	V_Dyn_Tr_Fin_Aor_S:3SgM_RO:3SgNH_Refl:3SgM_Reln:For	Dyn=Yes|Gender[refl]=Masc|Gender[ro]=Neut|Gender[subj]=Masc|Number[refl]=Sing|Number[ro]=Sing|Number[subj]=Sing|Person[refl]=3|Person[ro]=3|Person[subj]=3|Reln=Ben|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ҽ·а·з·к-ра́|SpaceAfter=No
11	.	.	PUNCT	Punct_Period	_	10	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 ccomp:quote	color:blue
1	Иабыкәу	иабы́кәу	VERB	Pron_Int_NH_Pred_NonFin_Where_Q_S:3	Animacy=Nhum|Dyn=No|Person[subj]=3|RelType=Loc|VerbForm=NonFin	3	advcl:quote	_	LMSeg:иабы́кәу
2	ҳәа	ҳәа́	PART	Prt_Quote	_	1	mark	_	LMSeg:ҳәа́
3	слазҵааит	а́зҵаара	VERB	V_Dyn_Intr_Fin_Aor_S:1Sg_IO:3SgF	Dyn=Yes|Gender[io]=Fem|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=1|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́зҵаа-ра|SpaceAfter=No
4	:	:	PUNCT	Punct_Colon	_	3	punct	_	LMSeg::
5	–	–	PUNCT	Punct_Dash	_	6	punct	_	LMSeg:–
6	Абааҭа	а-бааҭа́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	11	ccomp:quote	_	LMSeg:а-бааҭа́|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
8	нан	на́н	NOUN	Noun_H_F_Sg	Animacy=Hum|Number=Sing	6	vocative	_	LMSeg:на́н|SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	11	punct	_	LMSeg:,
10	–	–	PUNCT	Punct_Dash	_	11	punct	_	LMSeg:–
11	лҳәеит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Aor_S:3SgF_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Fem|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	3	parataxis	_	LMSeg:а-ҳәа-ра́|SpaceAfter=No
12	.	.	PUNCT	Punct_Period	_	11	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 ccomp:quote	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	Азамана	а́-замана	ADV	Adv	_	7	ccomp:quote	_	LMSeg:а́-замана|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	4	punct	_	LMSeg:,
4	сазыразуп	а-зы́раззаара	VERB	V_Stat_Fin_Pres_S:1Sg_RO:3SgNH_Reln:For	Dyn=No|Gender[ro]=Neut|Number[ro]=Sing|Number[subj]=Sing|Person[ro]=3|Person[subj]=1|Reln=Ben|Tense=Pres|VerbForm=Fin	2	parataxis	_	LMSeg:а-зы́·раз-заа-ра|SpaceAfter=No
5	!	!	PUNCT	Punct_ExclPoint	_	2	punct	_	LMSeg:!
6	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
7	иҳәеит	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Aor_S:3SgM_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ҳәа-ра́
8	аҧсуа	а́ҧсуа	NOUN	Noun_H_Sg_Det	Animacy=Hum|Definite=Def|Number=Sing	7	nsubj	_	LMSeg:а́ҧсуа|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


