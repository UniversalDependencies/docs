---
layout: base
title:  'Statistics of ccomp:obj in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `ccomp:obj`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-ccomp.html">ccomp</a></tt>.
There are also 5 other language-specific subtypes of `ccomp`: <tt><a href="ab_abnc-dep-ccomp-iobj.html">ccomp:iobj</a></tt>, <tt><a href="ab_abnc-dep-ccomp-poss.html">ccomp:poss</a></tt>, <tt><a href="ab_abnc-dep-ccomp-purp.html">ccomp:purp</a></tt>, <tt><a href="ab_abnc-dep-ccomp-quote.html">ccomp:quote</a></tt>, <tt><a href="ab_abnc-dep-ccomp-ro.html">ccomp:ro</a></tt>.

41 nodes (1%) are attached to their parents as `ccomp:obj`.

36 instances of `ccomp:obj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31707317073171.

The following 3 pairs of parts of speech are connected with `ccomp:obj`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (39; 95% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 ccomp:obj	color:blue
1	Иҟалаз	а́-ҟалара	VERB	V_Dyn_Intr_NonFin_PastIndef_S:Rel_Rel	Dyn=Yes|Person[subj]=Rel|Subcat=Intr|Tense=Past|VerbForm=NonFin	3	ccomp:obj	_	LMSeg:а́-ҟа·ла-ра
2	џьашьахәыс	а́-џьашьахә	NOUN	Noun_NH_Sg_Advb	Animacy=Nhum|Case=Ess|Number=Sing	3	obl	_	LMSeg:а́-џьашьахә
3	ишьҭнахит	а́-шьҭыхра	VERB	V_Dyn_Tr_Fin_Aor_S:3SgNH_DO:3	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-шьҭы·х-ра
4	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	3	nsubj	_	LMSeg:а-бгахәыҷы́
5	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp:obj	color:blue
1	Акәакьқәа	а-кәа́кь	NOUN	Noun_NH_Pl_Det	Animacy=Nhum|Definite=Def|Number=Plur	6	obl	_	LMSeg:а-кәа́кь
2	рҿы	а-ҿы́	ADP	PP_Poss:3Pl	Number[psor]=Plur|Person[psor]=3	1	case	_	LMSeg:а-ҿы́
3	аҟәардә	а-ҟәа́рдә	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	6	xcomp	_	LMSeg:а-ҟәа́рдә
4	ҟәымшәышәқәа	а-ҟәымшәы́шә	ADJ	Adj_Pl	Number=Plur	3	amod	_	LMSeg:а-ҟәымшәы́шә
5	икҿагылаз	а-кҿагы́лазаара	VERB	V_Stat_NonFin_Impf_S:Rel_Rel	Dyn=No|Person[subj]=Rel|Tense=Imp|VerbForm=NonFin	3	ccomp:obj	_	LMSeg:а-кҿа·гы́ла-заа-ра
6	ааиган	аа́гара	VERB	V_Dyn_Tr_Fin_PastIndef_S:3SgM_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Past|VerbForm=Fin	13	advcl:seq	_	LMSeg:аа́·га-ра
7	,	,	PUNCT	Punct_Comma	_	13	punct	_	LMSeg:,
8	азал	а-за́л	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	13	obl	_	LMSeg:а-за́л
9	агәҭаны	а-гәҭаны́	ADP	PP_Poss:3SgNH	Gender[psor]=Neut|Number[psor]=Sing|Person[psor]=3	8	case	_	LMSeg:а-гәҭаны́
10	ҩ-шьаҿак	а-шьаҿа́	NOUN	Noun_NH_Sg_Indet_NumPfx	Animacy=Nhum|Number=Card	11	obj:ro	_	LMSeg:а-шьаҿа́
11	иазынаҧшуа	а-зы́наҧшра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_S:3_RO:3SgNH_Reln:For	Dyn=Yes|Gender[ro]=Neut|Number[ro]=Sing|Person[ro]=3|Person[subj]=3|Reln=Ben|Subcat=Intr|Tense=Pres|VerbForm=NonFin	12	advcl:conv	_	LMSeg:а-зы́·на·ҧш-ра
12	набжьаҵаны	а-бжьаҵара́	VERB	V_Dyn_Tr_NonFin_Cnv_Abs_Aor_FPv:на_DO:3_DO:Ad_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Number[lo]=Sing|Person[lo]=3|Person[obj]=3|Subcat=Tran|Tense=Aor|VerbForm=NonFin	13	advcl:conv	_	LMSeg:а-бжьа·ҵа-ра́
13	иаадиргылт	а́-дыргылара	VERB	V_Dyn_Intr_Caus_Fin_Aor_FPv:аа_S:3SgM_DO:3_LO:3SgNH	Dyn=Yes|Gender[lo]=Neut|Gender[subj]=Masc|Number[lo]=Sing|Number[subj]=Sing|Person[lo]=3|Person[obj]=3|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin|Voice=Cau	0	root	_	LMSeg:а́-ды·р:гыла-ра
14	.	.	PUNCT	Punct_Period	_	13	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 ccomp:obj	color:blue
1	Уи	уи́	PRON	Pron_Pers_3Sg	PronType=Prs	3	ccomp:obj	_	LMSeg:уи́
2	акәу	а́кәзаара	AUX	V_Stat_NonFin_Pres_Q_S:3_IO:3SgNH_Cop	Dyn=No|Gender[io]=Neut|Mood=Int|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=NonFin	1	cop	_	LMSeg:а́кә-заа-ра
3	здырхуада	а-ды́рра	VERB	V_Dyn_Tr_NonFin_Pres_QWho_Again_S:Rel_DO:3_DO:Ad_Rel	Dyn=Yes|Person[obj]=3|Person[subj]=Rel|Subcat=Tran|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а-ды́р-ра
4	Шараҭ	Шараҭ	PROPN	Noun_Prop_Anthr_M	NameType=Geo	6	nsubj	_	LMSeg:Шараҭ
5	амыцхә	а́мыцхә	ADV	Adv	_	6	advmod	_	LMSeg:а́мыцхә
6	длыхәазырҧшы	а́-хәарҧшра	VERB	V_Dyn_Intr_Caus_NonFin_Aor_S:Rel_DO:3SgH_LO:3SgF_Rel	Dyn=Yes|Gender[lo]=Fem|Gender[obj]=Com|Number[lo]=Sing|Number[obj]=Sing|Person[lo]=3|Person[obj]=3|Person[subj]=Rel|Subcat=Intr|Tense=Aor|VerbForm=NonFin|Voice=Cau	1	csubj	_	LMSeg:а́-хәа·р:ҧш-ра
7	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


