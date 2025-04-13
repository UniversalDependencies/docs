---
layout: base
title:  'Statistics of nmod:poss in UD_Abkhaz-AbNC'
udver: '2'
---

## Treebank Statistics: UD_Abkhaz-AbNC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ab_abnc-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="ab_abnc-dep-nmod-quote.html">nmod:quote</a></tt>.

88 nodes (1%) are attached to their parents as `nmod:poss`.

87 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17045454545455.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (55; 63% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (9; 10% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (7; 8% instances), <tt><a href="ab_abnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt> (7; 8% instances), <tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (6; 7% instances), <tt><a href="ab_abnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ab_abnc-pos-ADP.html">ADP</a></tt>-<tt><a href="ab_abnc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ab_abnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ab_abnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Алымҳақәа	а-лы́мҳа	NOUN	Noun_NH_Pl_Det	Animacy=Nhum|Definite=Def|Number=Plur	3	nsubj	_	LMSeg:а-лы́мҳа
2	кьацәӡа	кьа́цәӡа	ADV	Adv_S:Ad	_	3	advmod	_	LMSeg:кьа́цәӡа
3	иҩагылеит	а́-ҩагылара	VERB	V_Dyn_Intr_Fin_Aor_S:3	Dyn=Yes|Person[subj]=3|Subcat=Intr|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а́-ҩа·гыла-ра
4	Абгахәыҷы	а-бгахәыҷы́	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	5	nmod:poss	_	LMSeg:а-бгахәыҷы́
5	абжьы	а-бжьы́	NOUN	Noun_NH_Sg_Poss:3SgNH	Animacy=Nhum|Gender[psor]=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	LMSeg:а-бжьы́
6	заҳаз	аҳара́	VERB	V_Dyn_Intr_NonFin_PastIndef_S:3_S:Ad_IO:Rel_Rel	Dyn=Yes|Person[io]=Rel|Person[subj]=3|Subcat=Intr|Tense=Past|VerbForm=NonFin	8	acl:relcl	_	LMSeg:аҳа-ра́
7	ашәарыцаҩ	а́-шәарыцаҩ	NOUN	Noun_H_Sg_Det	Animacy=Hum|Definite=Def|Number=Sing	8	nmod:poss	_	LMSeg:а́-шәарыцаҩ
8	ила	а-ла́	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obj:lo	_	LMSeg:а-ла́
9	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nmod:poss	color:blue
1	Аҵысҕра	а-ҵы́сҕра	NOUN	Noun_NH_Sg_Det	Animacy=Nhum|Definite=Def|Number=Sing	2	nsubj	_	LMSeg:а-ҵы́сҕра
2	ахьынаҧшуаз	а́-наҧшра	VERB	V_Dyn_Intr_NonFin_Cnv_Impf_Where_S:3_S:Ad	Dyn=Yes|Person[subj]=3|RelType=Loc|Subcat=Intr|Tense=Imp|VerbForm=NonFin	3	advcl	_	LMSeg:а́-на·ҧш-ра
3	иаагәанаҭеит	а-гәа́ҭара	VERB	V_Dyn_Tr_Fin_Aor_FPv:аа_S:3SgNH_DO:3	Dyn=Yes|Gender[subj]=Neut|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Aor|VerbForm=Fin	0	root	_	LMSeg:а-гәа́·ҭа-ра
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	шәарыцаҩык	а́-шәарыцаҩ	NOUN	Noun_H_Sg_Indet	Animacy=Hum|Number=Sing	8	nmod:poss	_	LMSeg:а́-шәарыцаҩ
6	ила	а-ла́	NOUN	Noun_NH_Sg_Poss:3SgM	Animacy=Nhum|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	LMSeg:а-ла́
7	иманы	а́-мазаара	VERB	V_Stat_NonFin_Cnv_Abs_Pres_S:3_S:Ad_IO:3SgM	Dyn=No|Gender[io]=Masc|Number[io]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=NonFin	8	advcl:conv	_	LMSeg:а́-ма-заа-ра
8	дшааиуаз	аа́ира	VERB	V_Dyn_Intr_NonFin_Cnv_Impf_How_S:3SgH	Dyn=Yes|Gender[subj]=Com|Number[subj]=Sing|Person[subj]=3|RelType=Mnr|Subcat=Intr|Tense=Imp|VerbForm=NonFin	3	advcl	_	LMSeg:аа́и-ра
9	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	Сара	сара́	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	3	nmod:poss	_	LMSeg:сара́
3	сыблақәа	а́-бла	NOUN	Noun_NH_Pl_Poss:1Sg	Animacy=Nhum|Number=Plur|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	LMSeg:а́-бла
4	шкьаҧшу	а-кьа́ҧш	VERB	Adj_Sg_Pred_NonFin_Cnv_Pres_How_S:3_S:Ad	Dyn=No|Number=Sing|Person[subj]=3|RelType=Mnr|Tense=Pres|VerbForm=NonFin	5	advcl	_	LMSeg:а-кьа́ҧш
5	умаҳаӡаци	аҳара́	VERB	V_Dyn_Intr_NonFin_Perf_Neg_Q_Emph_S:3_S:Ad_IO:2SgM	Dyn=Yes|Gender[io]=Masc|Mood=Int|Number[io]=Sing|Person[io]=2|Person[subj]=3|Polarity=Neg|Subcat=Intr|Tense=Prf|VerbForm=NonFin	0	root	_	LMSeg:аҳа-ра́
6	уара	уара́	PRON	Pron_Pers_2SgM	Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	iobj	_	LMSeg:уара́
7	?	?	PUNCT	Punct_IntMark	_	5	punct	_	LMSeg:?
8	!	!	PUNCT	Punct_ExclPoint	_	5	punct	_	LMSeg:!

~~~


