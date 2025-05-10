---
layout: base
title:  'Statistics of obj:ro in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `obj:ro`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-obj.html">obj</a></tt>.
There are also 4 other language-specific subtypes of `obj`: <tt><a href="ab_abnc-dep-obj-cs.html">obj:cs</a></tt>, <tt><a href="ab_abnc-dep-obj-lo.html">obj:lo</a></tt>, <tt><a href="ab_abnc-dep-obj-po.html">obj:po</a></tt>, <tt><a href="ab_abnc-dep-obj-poss.html">obj:poss</a></tt>.

26 nodes (0%) are attached to their parents as `obj:ro`.

24 instances of `obj:ro` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46153846153846.

The following 4 pairs of parts of speech are connected with `obj:ro`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (17; 65% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (3; 12% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj:ro	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	Азакәан	а-закәа́н	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	obj:ro	_	LMSeg:а-закәа́н
3	базхәыцхьоу	а-зхәы́цра	VERB	V_Dyn_Intr_NonFin_Perf_S:2SgF_RO:3SgNH_Reln:For	Dyn=Yes|Gender[ro]=Neut|Gender[subj]=Fem|Number[ro]=Sing|Number[subj]=Sing|Person[ro]=3|Person[subj]=2|Reln=Ben|Subcat=Intr|Tense=Prf|VerbForm=NonFin	0	root	_	LMSeg:а-з·хәы́ц-ра|SpaceAfter=No
4	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obj:ro	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obj:ro	color:blue
1	Урҭгьы	у́рҭ	PRON	Pron_Pers_3Pl_Encl:гьы	Number=Plur|Person=3|PronType=Prs	7	obj:ro	_	LMSeg:у́рҭ
2	ҩынтә	ҩы́нтә	NUM	Num_Mult	_	3	nummod	_	LMSeg:ҩы́нтә
3	еихагылоу	аихагы́ла	VERB	Adj_Sg_Pred_NonFin_Pres_S:Rel_Rel	Dyn=No|Number=Sing|Person[subj]=Rel|Tense=Pres|VerbForm=NonFin	5	acl:relcl	_	LMSeg:аихагы́ла
4	ахатә	а-хатәы́	ADJ	Adj_Det	Definite=Def	5	amod	_	LMSeg:а-хатәы́
5	ҩны	а-ҩны́	NOUN	Noun_NH_Sg	Animacy=Nhum|Number=Sing	7	nsubj	_	LMSeg:а-ҩны́
6	ду	а-ду́	ADJ	Adj_Sg	Number=Sing	5	amod	_	LMSeg:а-ду́
7	рызгылоуп	а-згы́лазаара	VERB	V_Stat_Fin_Pres_S:3_S:Ad_RO:3Pl_Reln:For	Dyn=No|Number[ro]=Plur|Person[ro]=3|Person[subj]=3|Reln=Ben|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а-з·гы́ла-заа-ра|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


