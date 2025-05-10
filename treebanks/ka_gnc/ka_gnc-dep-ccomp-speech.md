---
layout: base
title:  'Statistics of ccomp:speech in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `ccomp:speech`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-ccomp.html">ccomp</a></tt>.

61 nodes (0%) are attached to their parents as `ccomp:speech`.

37 instances of `ccomp:speech` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 5 pairs of parts of speech are connected with `ccomp:speech`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (48; 79% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (7; 11% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp:speech	color:blue
1	არ	არ	ADV	Adv_Neg	_	2	advmod:neg	_	LMSeg:არ
2	უთქვამს	თქმა	VERB	V_MedAct_Inv_Pres_OV_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres|Voice=Inv	0	root	_	LMSeg:თქმ[ა]/თქვ|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
4	მე	მე	PRON	Pron_Pers_1_Dat_Sg	Case=Dat|Number=Sing|PronType=Prs	6	nsubj	_	LMSeg:მე
5	არაფერი	არაფერი	PRON	Pron_Neg_Nonhum_Nom_Sg	Case=Nom|Number=Sing	6	obj	_	LMSeg:არაფ[ე]რ·ი
6	ჩამიდვია	ჩადება	VERB	V_Act_Perf_Pv_S:1Sg_DO:3_Encl:IndSp3	Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=PastPerf	2	ccomp:speech	_	LMSeg:ჩა·დებ[ა]/დვ|SpaceAfter=No
7	ო	_ო	PART	Prt_IndSp3	Evident=Nfh|Person=3	6	mark	_	LMSeg:_ო|SpaceAfter=No
8	?	?	PUNCT	Punct_IntMark	_	2	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp:speech	color:blue
1	იუანა	იუანა	PROPN	N_Prop_Anthr_FirstName_Nom	Case=Nom|NameType=Prs	2	nsubj	_	LMSeg:იუანა
2	ამბობდა	თქმა	VERB	V_MedAct_Impf_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp	0	root	_	LMSeg:თქმ[ა]/მბობ|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
4	ადამიანის	ადამიანი	NOUN	N_Hum_Gen_Sg	Animacy=Anim|Case=Gen|Number=Sing	5	nmod	_	LMSeg:ადამიან·ი
5	ტვინი	ტვინი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	7	nsubj	_	LMSeg:ტვინ·ი
6	განვითარებული	განვითარებული	ADJ	A_Part_PastPart_Pv_Nom_Att	Case=Nom|Tense=Past|VerbForm=Part	7	amod	_	LMSeg:გან·ვითარებულ·ი/ვითარ
7	კომპიუტერი	კომპიუტერი	NOUN	N_Nom_Sg_Encl:Aux_Encl:IndSp3	Case=Nom|Number=Sing	2	ccomp:speech	_	LMSeg:კომპიუტერ·ი|SpaceAfter=No
8	ა	არის	AUX	V_MedPass_Pres_S:3Sg_Encl	Number[subj]=Sing|Person[subj]=3|Tense=Pres	7	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
9	ო	_ო	PART	Prt_IndSp3	Evident=Nfh|Person=3	7	mark	_	LMSeg:_ო|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp:speech	color:blue
1	დედა	დედა	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	2	nsubj	_	LMSeg:დედ[ა]
2	ამბობს	თქმა	VERB	V_MedAct_Pres_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	LMSeg:თქმ[ა]/მბობ|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	4	punct	_	LMSeg:,
4	საჭირო	საჭირო	ADJ	A_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	2	ccomp:speech	_	LMSeg:საჭირო|SpaceAfter=No
5	ა	არის	AUX	V_MedPass_Pres_S:3Sg_Encl	Number[subj]=Sing|Person[subj]=3|Tense=Pres	4	cop	_	LMSeg:ყოფნ[ა]/არ
6	სადღაც	სადღაც	ADV	Adv_Indef_Loc	AdvType=Loc	4	advmod	_	LMSeg:სადღაც
7	სამანის	სამანი	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	8	nmod	_	LMSeg:სამან·ი
8	გავლება	გავლება	NOUN	N_VN_Pv_Nom_Sg_Encl:IndSp3	Case=Nom|Number=Sing|VerbForm=Vnoun	4	nsubj	_	LMSeg:გა·ვლებ[ა]/ვლ|SpaceAfter=No
9	ო	_ო	PART	Prt_IndSp3	Evident=Nfh|Person=3	4	mark	_	LMSeg:_ო|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


