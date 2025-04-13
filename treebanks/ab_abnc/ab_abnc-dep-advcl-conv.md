---
layout: base
title:  'Statistics of advcl:conv in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `advcl:conv`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-advcl.html">advcl</a></tt>.
There are also 5 other language-specific subtypes of `advcl`: <tt><a href="ab_abnc-dep-advcl-compar.html">advcl:compar</a></tt>, <tt><a href="ab_abnc-dep-advcl-cond.html">advcl:cond</a></tt>, <tt><a href="ab_abnc-dep-advcl-purp.html">advcl:purp</a></tt>, <tt><a href="ab_abnc-dep-advcl-quote.html">advcl:quote</a></tt>, <tt><a href="ab_abnc-dep-advcl-seq.html">advcl:seq</a></tt>.

217 nodes (3%) are attached to their parents as `advcl:conv`.

201 instances of `advcl:conv` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25806451612903.

The following 4 pairs of parts of speech are connected with `advcl:conv`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (214; 99% instances), <tt><a href="ab_abnc-pos-AUX.html">AUX</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl:conv	color:blue
1	Бнарак	а́-бнара	NOUN	Noun_NH_Sg_Indet	Animacy=Nhum|Number=Sing	5	obl	_	LMSeg:а́-бнара
2	аҟны	а-ҟны́	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	1	case	_	LMSeg:а-ҟны́
3	амҩахәасҭа	а-мҩахәа́сҭа	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	obj:lo	_	LMSeg:а-мҩахәа́сҭа
4	ианыланы	а-ны́лара	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Aor_S:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а-ны́·ла-ра
5	инеиуан	а-не́ира	VERB	V_Dyn_Intr_Fin_Impf_S:3	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:а-не́и-ра
6	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	5	nsubj	_	LMSeg:а-бгахәыҷы́
7	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl:conv	color:blue
1	–	–	PUNCT	Punct_Dash	_	5	punct	_	LMSeg:–
2	Арсҟатәи	а́рсҟатәи	ADJ	Adj_[Det]	_	3	amod	_	LMSeg:а́рсҟатәи
3	аҧара	а-ҧа́ра	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	4	nsubj	_	LMSeg:а-ҧа́ра
4	шәыманы	а́-мазаара	VERB	V_Stat_NonFin_Cnv_Abs_Pres_S:3_S:Ad_IO:2Pl	Dyn=No|Number[io]=Plur|Person[io]=2|Person[subj]=3|Tense=Pres|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а́-ма-заа-ра
5	аума	а́кәзаара	AUX	V_Stat_NonFin_Pres_Q_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Mood=Int|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а́кә-заа-ра
6	,	,	PUNCT	Punct_Comma	_	11	punct	_	LMSeg:,
7	иҵегь	и́-ҵегь	ADV	Adv	_	10	advmod	_	LMSeg:и́-ҵегь
8	аҧара	а-ҧа́ра	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	10	nsubj	_	LMSeg:а-ҧа́ра
9	рацәаны	а́-рацәаны	ADV	Adv_S:Ad	_	8	advmod	_	LMSeg:а́-рацәаны
10	ишәымазар	а́-мазаара	VERB	V_Stat_NonFin_Pres_Conj-I_S:3_IO:2Pl	Dyn=No|Mood=Cnd|Number[io]=Plur|Person[io]=2|Person[subj]=3|Tense=Pres|VerbForm=NonFin	11	xcomp:obj	_	LMSeg:а́-ма-заа-ра
11	зышәҭаххаз	а-ҭахра́	VERB	V_Stat_Tr_Pass_NonFin_Cnv_Impf_Why_S:2Pl_DO:3_DO:Ad	Dyn=No|Number[subj]=Plur|Person[obj]=3|Person[subj]=2|RelType=Cause|Subcat=Tran|Tense=Imp|VerbForm=NonFin|Voice=Pass	5	advcl	_	LMSeg:а-ҭах-ра́
12	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl:conv	color:blue
1	–	–	PUNCT	Punct_Dash	_	5	punct	_	LMSeg:–
2	Мариа	Мариа	PROPN	Noun_Prop_Anthr_F	NameType=Geo	5	vocative	_	LMSeg:Мариа
3	,	,	PUNCT	Punct_Comma	_	5	punct	_	LMSeg:,
4	Ира	Ира	PROPN	Noun_Prop_Anthr_F	NameType=Geo	5	nsubj	_	LMSeg:Ира
5	бҩыза	а-ҩы́за	NOUN	Noun_H_Sg_Poss:2SgF	Animacy=Hum|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2	0	root	_	LMSeg:а-ҩы́за
6	лоуп	а́кәзаара	AUX	V_Stat_Fin_Pres_S:3_IO:3SgF_Cop	Dyn=No|Gender[io]=Fem|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	5	cop	_	LMSeg:а́кә-заа-ра
7	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
8	ҭынч	ҭы́нч	ADV	Adv	_	9	advmod	_	LMSeg:ҭы́нч
9	былмацәажәо	а́цәажәара	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_Neg_S:2SgF_IO:3SgF	Dyn=Yes|Gender[io]=Fem|Gender[subj]=Fem|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=2|Polarity=Neg|Subcat=Intr|Tense=Pres|VerbForm=NonFin	5	advcl:conv	_	LMSeg:а́цәажәа-ра
10	.	.	PUNCT	Punct_Period	_	5	punct	_	LMSeg:.

~~~


