---
layout: base
title:  'Statistics of obj:po in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `obj:po`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-obj.html">obj</a></tt>.
There are also 4 other language-specific subtypes of `obj`: <tt><a href="ab_abnc-dep-obj-cs.html">obj:cs</a></tt>, <tt><a href="ab_abnc-dep-obj-lo.html">obj:lo</a></tt>, <tt><a href="ab_abnc-dep-obj-poss.html">obj:poss</a></tt>, <tt><a href="ab_abnc-dep-obj-ro.html">obj:ro</a></tt>.

16 nodes (0%) are attached to their parents as `obj:po`.

14 instances of `obj:po` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.125.

The following 4 pairs of parts of speech are connected with `obj:po`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (7; 44% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (7; 44% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj:po	color:blue
1	Азныказы	а́зныказы	ADV	Adv	_	3	advmod	_	LMSeg:а́зныказы
2	абла	а́-бла	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	nsubj	_	LMSeg:а́-бла
3	иабаз	а-бара́	VERB	V_Dyn_Tr_NonFin_PastIndef_S:3SgNH_DO:Rel_Rel	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=Rel|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=NonFin	4	csubj	_	LMSeg:а-ба-ра́
4	азхамҵеит	а-хаҵара́	VERB	V_Dyn_Tr_Fin_Pot_Aor_Neg_S:3_S:Ad_Reln:Pot_PO:3SgNH	Dyn=Yes|Gender[po]=Neut|Number[po]=Sing|Person[po]=3|Person[subj]=3|Polarity=Neg|Reln=Pot|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-ха·ҵа-ра́
5	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	obj:po	_	LMSeg:а-бгахәыҷы́|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obj:po	color:blue
1	Уи	уи́	PRON	Pron_Dem_Dist_Sg	Number=Sing|PronType=Dem	5	obl	_	LMSeg:уи́
2	еиҧш	а́иҧш	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	1	case	_	LMSeg:а́иҧш
3	сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	5	obj:po	_	LMSeg:сара́
4	снапы	а-напы́	NOUN	Noun_NH_Sg_Poss:1Sg	Animacy=Nhum|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nsubj	_	LMSeg:а-напы́
5	сзаҵаҩуам	а́-ҵаҩра	VERB	V_Dyn_Tr_Fin_Pot_Pres_Neg_S:3_S:Ad_LO:3SgNH_Reln:Pot_PO:1Sg	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Number[po]=Sing|Person[lo]=3|Person[po]=1|Person[subj]=3|Polarity=Neg|Reln=Pot|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а́-ҵа·ҩ-ра|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obj:po	color:blue
1	Арахь	ара́хь	ADV	Adv	_	5	advmod	_	LMSeg:ара́хь
2	лхаҭа	а-хаҭа́	ADV	Adv_Poss:3SgF	Gender[psor]=Fem|Number[psor]=Sing|Person[psor]=3	5	obj:po	_	LMSeg:а-хаҭа́
3	аурысшәа	а́-урысшәа	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	5	nsubj	_	LMSeg:а́-урысшәа
4	ицқьаны	цқьаны́	ADV	Adv_S:3	Person[subj]=3	5	advmod	_	LMSeg:цқьаны́
5	илызҳәаӡом	а-ҳәара́	VERB	V_Dyn_Tr_Fin_Pot_Pres_Neg_Emph_S:3_Reln:Pot_PO:3SgF	Dyn=Yes|Gender[po]=Fem|Number[po]=Sing|Person[po]=3|Person[subj]=3|Polarity=Neg|Reln=Pot|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:а-ҳәа-ра́|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


