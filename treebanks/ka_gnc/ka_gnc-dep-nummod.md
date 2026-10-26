---
layout: base
title:  'Statistics of nummod in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `nummod`

This relation is universal.

210 nodes (1%) are attached to their parents as `nummod`.

208 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19047619047619.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (201; 96% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	–	–	PUNCT	Punct_Dash	_	4	punct	_	LMSeg:–
2	ღამის	ღამე	NOUN	N_Temp_Gen_Sg	Case=Gen|Number=Sing	4	nmod	_	LMSeg:ღამ[ე]
3	9	9	NUM	Num_Card_Digits	NumType=Card	4	nummod	_	LMSeg:9
4	საათი	საათი	NOUN	N_Temp_Nom_Sg_Encl:Aux	Case=Nom|Number=Sing	0	root	_	LMSeg:საათ·ი|SpaceAfter=No
5	ა	ყოფნა	AUX	V_MedPass_Pres_S:3Sg_Encl	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	4	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
6	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	პირველ	პირველი	NUM	Num_Ord_Alpha_Dat_NonStand_Att	Case=Dat|NumType=Ord	2	nummod	_	LMSeg:პირველი
2	გაკვეთილს	გაკვეთილი	ADJ	A_Part_PastPart_Pv_Dat_Sg	Case=Dat|Number=Sing|Tense=Past|VerbForm=Part	3	iobj	_	LMSeg:გა·კვეთილ·ი/კვეთ
3	შევუდექით	შედგომა	VERB	V_Pass_Aor_Pv_OV_S:1Pl_IO:3	Mood=Ind|Number[subj]=Plur|Person[io]=3|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:შე·დგომ[ა]/დექ|SpaceAfter=No
4	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod	color:blue
1	ვინ	ვინ	PRON	Pron_Int_Hum_Nom	Animacy=Anim|Case=Nom|PronType=Int	4	nsubj	_	LMSeg:ვინ
2	იყო	ყოფნა	AUX	V_Pass_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	4	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]
3	ეს	ეს	PRON	Pron_Dem_Nom_Att	Case=Nom|PronType=Dem	4	det	_	LMSeg:ეს
4	ჰილდე	ჰილდე	PROPN	N_Prop_Anthr_FirstName_Nom	Case=Nom|NameType=Prs	0	root	_	LMSeg:ჰილდე|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	13	punct	_	LMSeg:,
6	რომლის	რომელი	PRON	Pron_Rel_Gen_Sg	Case=Gen|Number=Sing|PronType=Rel	8	nmod	_	LMSeg:რომ[ე]ლ·ი
7	მე-15	15	NUM	Num_Ord_Digits	NumType=Ord	8	nummod	_	LMSeg:15
8	წლისთავი	წლისთავი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	13	nsubj	_	LMSeg:წლისთავ·ი
9	სულ	სულ	ADV	Adv_Deg	_	13	advmod	_	LMSeg:სულ
10	რაღაც	რაღაც	PRON	Pron_Indef_Nonhum_Att	PronType=Ind	12	det	_	LMSeg:რაღაც
11	ერთი	ერთი	NUM	Num_Card_Alpha_Nom_Sg	Case=Nom|NumType=Card	12	nummod	_	LMSeg:ერთ·ი
12	თვით	თვით	ADV	Adv_Foc	_	13	obl	_	LMSeg:თვით
13	უსწრებდა	სწრება	VERB	V_Act_Impf_OV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	4	acl:relcl	_	LMSeg:*·სწრებ[ა]/სწრ
14	მისას	მისი	PRON	Pron_Poss_Poss3Sg_Dat	Case=Dat|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	13	iobj	_	LMSeg:მის·ი|SpaceAfter=No
15	?	?	PUNCT	Punct_IntMark	_	4	punct	_	LMSeg:?

~~~


