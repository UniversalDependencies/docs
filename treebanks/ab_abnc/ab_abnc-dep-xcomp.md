---
layout: base
title:  'Statistics of xcomp in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `xcomp`

This relation is universal.
There are 2 language-specific subtypes of `xcomp`: <tt><a href="ab_abnc-dep-xcomp-lo.html">xcomp:lo</a></tt>, <tt><a href="ab_abnc-dep-xcomp-subj.html">xcomp:subj</a></tt>.

51 nodes (1%) are attached to their parents as `xcomp`.

51 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29411764705882.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (34; 67% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (13; 25% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="ab_abnc-pos-ADP.html">ADP</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	Наҳар	Наҳар	PROPN	Noun_Prop_Anthr_M	NameType=Prs	4	nsubj	_	LMSeg:Наҳар
2	илымҳа	а-лы́мҳа	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obj	_	LMSeg:а-лы́мҳа
3	кыдҵаны	а-кы́дҵара	VERB	V_Dyn_Tr_NonFin_Cnv_Abs_Aor_DO:3_DO:Ad_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[obj]=3|Subcat=Tran|Tense=Aor|VerbForm=NonFin	4	advcl:conv	_	LMSeg:а-кы́д·ҵа-ра
4	дӡырҩуан	а́-ӡырҩра	VERB	V_Dyn_Intr_Fin_Impf_S:3SgH	Dyn=Yes|Gender[subj]=Com|Number[subj]=Sing|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-ӡырҩ-ра
5	уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	6	det	_	LMSeg:уи́
6	аҧҳәыс	а-ҧҳәы́с	NOUN	Noun_H_F_Sg_Det	Animacy=Hum|Definite=Def|Number=Sing	8	nsubj	_	LMSeg:а-ҧҳәы́с
7	аҭакс	а-ҭа́к	NOUN	Noun_NH_Sg_Det_Advb	Animacy=Nhum|Case=Ess|Definite=Def|Number=Sing	8	xcomp	_	LMSeg:а-ҭа́к
8	иҟалҵарызеи	а́-ҟаҵара	VERB	V_Dyn_Tr_NonFin_Fut-I_QWhat_S:3SgF_DO:Rel_Rel	Dyn=Yes|Gender[subj]=Fem|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Fut|VerbForm=NonFin	4	advcl:quote	_	LMSeg:а́-ҟа·ҵа-ра
9	ҳәа	ҳәа́	PART	Prt_Quote	_	8	mark	_	LMSeg:ҳәа́|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	Уахыки-ҽнаки	уахы́ки-ҽна́ки	ADV	Adv	_	4	advmod	_	LMSeg:уахы́ки-ҽна́ки
2	еиҳаны	еиҳаны́	ADV	Adv	_	4	advmod	_	LMSeg:еиҳаны́
3	Аҧсны	Аҧсны́	PROPN	Noun_Prop_Place	NameType=Geo	4	obl	_	LMSeg:Аҧсны́
4	алагылара	а́-лагылара	VERB	VN_Dyn_Sg_Det_Intr	Definite=Def|Dyn=Yes|Number=Sing|Subcat=Intr|VerbForm=Vnoun	6	xcomp	_	LMSeg:а́-ла·гыла-ра
5	азин	а-зи́н	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	6	obj	_	LMSeg:а-зи́н
6	рырымҭеит	а́-ҭара	VERB	V_Dyn_Tr_Fin_Aor_Neg_S:3Pl_DO:3_DO:Ad_IO:3Pl	Dyn=Yes|Number[io]=Plur|Number[subj]=Plur|Person[io]=3|Person[obj]=3|Person[subj]=3|Polarity=Neg|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-ҭа-ра|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	2	xcomp	_	LMSeg:уи́
2	акәхеит	а́кәхара	VERB	V_Dyn_Intr_Fin_Aor_S:3_IO:3SgNH_Cop	Dyn=Yes|Gender[io]=Neut|Number[io]=Sing|Person[io]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́кә·ха-ра|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
4	иҳәыҧыӡыҧуа	а-ҳәҧы́ӡыҧра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_S:3	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Pres|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а-ҳәҧы́ӡыҧ-ра
5	иаалахеит	а́-лахара	VERB	V_Dyn_Intr_Fin_Aor_FPv:аа_S:3_[LO:3SgNH]	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	2	conj	_	LMSeg:а́-ла·ха-ра|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


