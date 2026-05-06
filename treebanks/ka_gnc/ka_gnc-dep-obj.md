---
layout: base
title:  'Statistics of obj in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `obj`

This relation is universal.

1209 nodes (5%) are attached to their parents as `obj`.

893 instances of `obj` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01075268817204.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (931; 77% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (193; 16% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (35; 3% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (29; 2% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obj	color:blue
1	თუმცა	თუმცა	SCONJ	Cj_Sub	_	8	cc	_	LMSeg:თუმცა
2	ამჯერად	ამჯერად	ADV	Adv_Temp	AdvType=Tim	8	advmod	_	LMSeg:ამჯერად
3	მის	ის	PRON	Pron_Pers_3_Gen_Sg_PP_PP:თვის	Case=Gen|Number=Sing|PronType=Prs	8	obl	_	LMSeg:ის|SpaceAfter=No
4	თვის	_თვის	ADP	Pp	_	3	case	_	LMSeg:_თვის
5	ამას	ეს	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	8	nsubj	_	LMSeg:ეს
6	მნიშვნელობა	მნიშვნელობა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	8	obj	_	LMSeg:მნიშვნელობ[ა]
7	არ	არ	ADV	Adv_Neg	_	8	advmod:neg	_	LMSeg:არ
8	ჰქონდა	ქონა	VERB	V_MedPass_Inv_Impf_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin|Voice=Inv	0	root	_	LMSeg:ქონ[ა]/ქონ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	რას	რა	PRON	Pron_Int_Nonhum_Dat	Case=Dat|PronType=Int	3	obj	_	LMSeg:რ[ა]
3	გეუბნებიან	თქმა	VERB	V_MedPass_Pres_S:3Pl_DO:3_IO:2	Mood=Ind|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	LMSeg:*·თქმ[ა]/უბნ
4	ექიმები	ექიმი	NOUN	N_Hum_Nom_Pl_NewPl	Animacy=Anim|Case=Nom|Number=Plur	3	nsubj	_	LMSeg:ექიმ·ი|SpaceAfter=No
5	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	ხომ	ხომ	ADV	Adv_Disc	_	3	advmod	_	LMSeg:ხომ
3	შეგპირდი	შეპირება	VERB	V_Pass_Aor_Pv_S:1Sg_IO:2Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=2|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:შე·პირებ[ა]/პირ|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	რომ	რომ	SCONJ	Cj_Sub	_	7	mark	_	LMSeg:რომ
6	მოსკოვს	მოსკოვი	PROPN	N_Prop_Top_Place_Dat	Case=Dat|NameType=Geo	7	obj	_	LMSeg:მოსკოვ·ი
7	გაჩვენებდი	ჩვენება	VERB	V_Act_Cond_S:1Sg_DO:3_IO:2Sg	Mood=Cnd|Number[io]=Sing|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Pres|VerbForm=Fin	3	advcl	_	LMSeg:ჩვენებ[ა]/ჩვენ|SpaceAfter=No
8	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?|SpaceAfter=No
9	!	!	PUNCT	Punct_ExclPoint	_	3	punct	_	LMSeg:!

~~~


