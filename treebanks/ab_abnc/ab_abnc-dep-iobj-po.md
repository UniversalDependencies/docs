---
layout: base
title:  'Statistics of iobj:po in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `iobj:po`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-iobj.html">iobj</a></tt>.
There are also 4 other language-specific subtypes of `iobj`: <tt><a href="ab_abnc-dep-iobj-cs.html">iobj:cs</a></tt>, <tt><a href="ab_abnc-dep-iobj-lo.html">iobj:lo</a></tt>, <tt><a href="ab_abnc-dep-iobj-poss.html">iobj:poss</a></tt>, <tt><a href="ab_abnc-dep-iobj-ro.html">iobj:ro</a></tt>.

21 nodes (0%) are attached to their parents as `iobj:po`.

19 instances of `iobj:po` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23809523809524.

The following 4 pairs of parts of speech are connected with `iobj:po`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (10; 48% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (8; 38% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (2; 10% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj:po	color:blue
1	Уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	5	obl	_	LMSeg:уи́
2	еиҧш	а́иҧш	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	1	case	_	LMSeg:а́иҧш
3	сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	5	iobj:po	_	LMSeg:сара́
4	снапы	а-напы́	NOUN	Noun_NH_Sg_Poss:1Sg	Animacy=Nhum|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nsubj	_	LMSeg:а-напы́
5	сзаҵаҩуам	а́-ҵаҩра	VERB	V_Dyn_Tr_Fin_Pot_Pres_Neg_S:3_S:Ad_Reln:Pot_PO:1Sg_LO:SgNH	Dyn=Yes|Mood=Ind|Number[po]=Sing|Person[po]=1|Person[subj]=3|Polarity=Neg|Reln=Pot|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҵа·ҩ-ра|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj:po	color:blue
1	Азныказы	а́зныказы	ADV	Adv	_	3	advmod	_	LMSeg:а́зныказы
2	абла	а́-бла	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	nsubj	_	LMSeg:а́-бла
3	иабаз	а-бара́	VERB	V_Dyn_Tr_NonFin_PastIndef_S:3SgNH_DO:Rel_Rel	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=NonFin	4	csubj	_	LMSeg:а-ба-ра́
4	азхамҵеит	а-хаҵара́	VERB	V_Dyn_Tr_Fin_Pot_Aor_Neg_S:3_S:Ad_Reln:Pot_PO:3SgNH	Dyn=Yes|Gender[po]=Neut|Mood=Ind|Number[po]=Sing|Person[po]=3|Person[subj]=3|Polarity=Neg|Reln=Pot|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ха·ҵа-ра́
5	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	iobj:po	_	LMSeg:а-бгахәыҷы́|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj:po	color:blue
1	Наҳар	Наҳар	PROPN	Noun_Prop_Anthr_M	NameType=Prs	3	iobj:po	_	LMSeg:Наҳар
2	иаҳауаз	аҳара́	VERB	V_Dyn_Intr_NonFin_Impf_S:Rel_IO:3SgM_Rel	Dyn=Yes|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=Rel|Subcat=Intr|Tense=Imp|VerbForm=NonFin	3	csubj	_	LMSeg:аҳа-ра́
3	изычҳауамызт	а́-чҳара	VERB	V_Dyn_Tr_Fin_Pot_Impf_Neg_S:3_S:Ad_Reln:Pot_PO:3SgM	Dyn=Yes|Gender[po]=Masc|Mood=Ind|Number[po]=Sing|Person[po]=3|Person[subj]=3|Polarity=Neg|Reln=Pot|Subcat=Tran|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а́-чҳа-ра|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	игәы	а-гәы́	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	LMSeg:а-гәы́
6	ҭыҵны	а-ҭы́ҵра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:3_S:Ad	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	7	advcl:conv	_	LMSeg:а-ҭы́·ҵ-ра
7	ицон	а-цара́	VERB	V_Dyn_Intr_Fin_Impf_S:3	Dyn=Yes|Mood=Ind|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	3	conj	_	LMSeg:а-ца-ра́|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


