---
layout: base
title:  'Statistics of advmod:neg in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-advmod.html">advmod</a></tt>.

352 nodes (2%) are attached to their parents as `advmod:neg`.

325 instances of `advmod:neg` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19034090909091.

The following 8 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (287; 82% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (40; 11% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (11; 3% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (7; 2% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:neg	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:neg	color:blue
1	განა	განა	ADV	Adv_Sent	_	3	advmod	_	LMSeg:განა
2	ეს	ეს	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	3	nsubj	_	LMSeg:ეს
3	ტრაგედია	ტრაგედია	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	0	root	_	LMSeg:ტრაგედი[ა]
4	არ	არ	ADV	Adv_Neg	_	3	advmod:neg	_	LMSeg:არ
5	არის	ყოფნა	AUX	V_MedPass_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	3	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
6	?	?	PUNCT	Punct_IntMark	_	3	punct	_	LMSeg:?

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:neg	color:blue
1	პუპი	პუპი	PROPN	N_Prop_Anthr_FirstName_Nom	Case=Nom|NameType=Prs	2	nsubj	_	LMSeg:პუპი
2	დასაწუნი	დასაწუნი	ADJ	A_Part_FutPart_Pv_Nom_Sg	Case=Nom|Number=Sing|Tense=Fut|VerbForm=Part	0	root	_	LMSeg:და·საწუნ·ი/წუნ
3	არა	არ	ADV	Adv_Neg_L_Encl:Aux	_	2	advmod:neg	_	LMSeg:არ|SpaceAfter=No
4	ა	ყოფნა	AUX	V_MedPass_Pres_S:3Sg_Encl	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	2	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


