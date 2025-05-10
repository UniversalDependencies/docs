---
layout: base
title:  'Statistics of csubj in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ka_gnc-dep-csubj-outer.html">csubj:outer</a></tt>.

36 nodes (0%) are attached to their parents as `csubj`.

36 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.16666666666667.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (14; 39% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (11; 31% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	მაგრამ	მაგრამ	CCONJ	Cj_Coord	_	2	cc	_	LMSeg:მაგრამ
2	შეიძლება	შეძლება	VERB	V_Pass_Pres_Pv_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	LMSeg:შე·ძლებ[ა]/ძლ|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
4	რომ	რომ	SCONJ	Cj_Sub	_	7	mark	_	LMSeg:რომ
5	რაღაცას	რაღაც	PRON	Pron_Indef_Dat_Sg	Case=Dat|Number=Sing|PronType=Ind	7	nsubj	_	LMSeg:რაღაც
6	ყოველთვის	ყოველთვის	ADV	Adv_Temp	AdvType=Tim	7	advmod	_	LMSeg:ყოველთვის
7	ეარსება	არსებობა	VERB	V_MedAct_PluPerf_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Pqp	2	csubj	_	LMSeg:არსებობ[ა]/არსებ|SpaceAfter=No
8	?	?	PUNCT	Punct_IntMark	_	2	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	დღესა	დღე	NOUN	N_Temp_Dat_Sg_PP_PP:ვით	Case=Dat|Number=Sing	3	obl	_	LMSeg:დღ[ე]|SpaceAfter=No
2	ვით	_ვით	ADP	Pp	_	1	case	_	LMSeg:_ვით
3	ნათელი	ნათელი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	0	root	_	LMSeg:ნათ[ე]ლ·ი
4	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	3	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
6	რომ	რომ	SCONJ	Cj_Sub	_	9	mark	_	LMSeg:რომ
7	რაღაც	რაღაც	PRON	Pron_Indef_Nonhum_Nom_Sg	Case=Nom|Number=Sing|PronType=Ind	9	obj	_	LMSeg:რაღაც
8	ჰქონდა	ქონა	AUX	V_MedPass_Inv_Impf_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp|Voice=Inv	9	aux	_	LMSeg:ქონ[ა]/ქონ
9	სათქმელი	სათქმელი	VERB	A_Part_FutPart_Nom_Sg	Case=Nom|Number=Sing|Tense=Fut|VerbForm=Part	3	csubj	_	LMSeg:სათქმელ·ი/თქმ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	რა	რა	PRON	Pron_Int_Nonhum_Nom_Att	Case=Nom	2	amod	_	LMSeg:რ[ა]
2	უსამართლობა	უსამართლობა	NOUN	N_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	0	root	_	LMSeg:უსამართლობ[ა]|SpaceAfter=No
3	ა	არის	AUX	V_MedPass_Pres_S:3Sg_Encl	Number[subj]=Sing|Person[subj]=3|Tense=Pres	2	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	LMSeg:,
5	რომ	რომ	SCONJ	Cj_Sub	_	8	mark	_	LMSeg:რომ
6	სიცოცხლე	სიცოცხლე	INTJ	Interj	_	8	nsubj	_	LMSeg:სიცოცხლე
7	უნდა	უნდა	AUX	Modal	_	8	aux	_	LMSeg:უნდა
8	შეწყდეს	შეწყდომა	VERB	V_Pass_Opt_Pv_S:3Sg	Mood=Sub|Number[subj]=Sing|Person[subj]=3|Tense=Past	2	csubj	_	LMSeg:შე·წყდომ[ა]/წყდ|SpaceAfter=No
9	!	!	PUNCT	Punct_ExclPoint	_	2	punct	_	LMSeg:!

~~~


