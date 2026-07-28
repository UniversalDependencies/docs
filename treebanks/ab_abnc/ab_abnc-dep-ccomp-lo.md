---
layout: base
title:  'Statistics of ccomp:lo in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `ccomp:lo`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-ccomp.html">ccomp</a></tt>.
There are also 6 other language-specific subtypes of `ccomp`: <tt><a href="ab_abnc-dep-ccomp-iobj.html">ccomp:iobj</a></tt>, <tt><a href="ab_abnc-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="ab_abnc-dep-ccomp-poss.html">ccomp:poss</a></tt>, <tt><a href="ab_abnc-dep-ccomp-purp.html">ccomp:purp</a></tt>, <tt><a href="ab_abnc-dep-ccomp-quote.html">ccomp:quote</a></tt>, <tt><a href="ab_abnc-dep-ccomp-ro.html">ccomp:ro</a></tt>.

15 nodes (0%) are attached to their parents as `ccomp:lo`.

15 instances of `ccomp:lo` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26666666666667.

The following 2 pairs of parts of speech are connected with `ccomp:lo`: <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt> (14; 93% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 ccomp:lo	color:blue
1	Аформулақәа	а-фо́рмула	NOUN	Noun_NH_Pl_Det	Animacy=Nhum|Definite=Def|Number=Plur	2	obj	_	LMSeg:а-фо́рмула
2	анысҵа	а-ҵара́	VERB	V_Dyn_Tr_NonFin_Cnv_Aor_When_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|RelType=Tmp|Subcat=Tran|Tense=Aor|VerbForm=NonFin	6	advcl	_	LMSeg:а-ҵа-ра́
3	схала	ха́ла	ADV	Adv_Poss:1Sg	Number[psor]=Sing|Person[psor]=1	5	advmod	_	LMSeg:ха́ла
4	аҳасабтәқәа	а́-ҳасабтә	NOUN	Noun_NH_Pl_Det	Animacy=Nhum|Definite=Def|Number=Plur	5	obj	_	LMSeg:а́-ҳасабтә
5	сҳасабуа	а́-ҳасабра	VERB	V_Dyn_Tr_NonFin_Cnv_Abs_Pres_S:1Sg_DO:3_DO:Ad	Dyn=Yes|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Subcat=Tran|Tense=Pres|VerbForm=NonFin	6	ccomp:lo	_	LMSeg:а́-ҳасаб-ра
6	салагеит	а́-лагара	VERB	V_Dyn_Intr_Fin_Aor_S:1Sg_LO:SgNH	Dyn=Yes|Mood=Ind|Number[subj]=Sing|Person[subj]=1|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-ла·га-ра|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 ccomp:lo	color:blue
1	Аҳәынҭқар	а-ҳәынҭқа́р	NOUN	Noun_H_M_Sg_Det	Animacy=Hum|Definite=Def|Number=Sing	4	ccomp:lo	_	LMSeg:а-ҳәынҭқа́р
2	дҭазырхарц	а-ҭархара́	VERB	V_Dyn_Intr_Caus_NonFin_Purp_S:Rel_DO:3SgH_Rel	Dyn=Yes|Gender[obj]=Com|Mood=Prp|Number[obj]=Sing|Person[obj]=3|Person[subj]=Rel|Subcat=Intr|VerbForm=NonFin|Voice=Cau	4	advcl:purp	_	LMSeg:а-ҭа·р:ха-ра́
3	ицәгьахәыцуа	а́-цәгьахәыцра	VERB	V_Dyn_Intr_NonFin_Cnv_Abs_Pres_S:Rel_Rel	Dyn=Yes|Person[subj]=Rel|Subcat=Intr|Tense=Pres|VerbForm=NonFin	4	acl:relcl	_	LMSeg:а́-цәгьа·хәыц-ра
4	ишьҭаз	а́-шьҭазаара	VERB	V_Stat_NonFin_Impf_S:Rel_LO:3SgM_Rel	Dyn=No|Gender[lo]=Masc|Number[lo]=Sing|Person[lo]=3|Person[subj]=Rel|Tense=Imp|VerbForm=NonFin	6	ccomp:obj	_	LMSeg:а́-шьҭа-заа-ра
5	аанкыланы	а-нкы́лара	VERB	V_Dyn_Tr_NonFin_Cnv_Abs_Aor_FPv:аа_DO:3_DO:Ad	Dyn=Yes|Person[obj]=3|Subcat=Tran|Tense=Aor|VerbForm=NonFin	6	advcl:conv	_	LMSeg:а-н·кы́ла-ра
6	иширҳәацәоз	а-рҳәацәара́	VERB	V_Dyn_Intr_Caus_NonFin_Cnv_Impf_How_S:3SgM_DO:3	Dyn=Yes|Gender[subj]=Masc|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|RelType=Mnr|Subcat=Intr|Tense=Imp|VerbForm=NonFin|Voice=Cau	7	ccomp:obj	_	LMSeg:а-р:ҳәацәа-ра́
7	удыруама	а-ды́рра	VERB	V_Dyn_Tr_NonFin_Pres_Q_S:2SgM_DO:3_DO:Ad	Dyn=Yes|Gender[subj]=Masc|Mood=Int|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Subcat=Tran|Tense=Pres|VerbForm=NonFin	0	root	_	LMSeg:а-ды́р-ра|SpaceAfter=No
8	?	?	PUNCT	Punct_IntMark	_	7	punct	_	LMSeg:?

~~~


