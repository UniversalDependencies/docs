---
layout: base
title:  'Statistics of nummod in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `nummod`

This relation is universal.

153 nodes (1%) are attached to their parents as `nummod`.

151 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22222222222222.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (145; 95% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (5; 3% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	გრაფ	გრაფი	NOUN	N_Hum_Qual_Dat_Att	Animacy=Anim|Case=Dat	2	nmod	_	LMSeg:გრაფ·ი
2	სეგედის	სეგედი	PROPN	N_Prop_Anthr_LastName_Dat_Dialect	Case=Dat|NameType=Prs	9	nsubj	_	LMSeg:სეგედი
3	ჩვენი	ჩვენი	PRON	Pron_Poss_Poss1Pl_Gen_Att	Case=Gen|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	4	det:poss	_	LMSeg:ჩვენ·ი
4	სახლის	სახლი	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	5	nmod	_	LMSeg:სახლ·ი
5	სარდაფ	სარდაფი	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	9	obl	_	LMSeg:სარდაფ·ი|SpaceAfter=No
6	ში	_ში	ADP	Pp	_	5	case	_	LMSeg:_ში
7	ერთი	ერთი	NUM	Num_Card_Alpha_Nom_Att	Case=Nom|NumType=Card	8	nummod	_	LMSeg:ერთ·ი
8	ოთახი	ოთახი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	9	obj	_	LMSeg:ოთახ·ი
9	ეჭირა	ჭერა	VERB	V_MedPass_Inv_Aor_S:3Sg_DO:3	Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Voice=Inv	0	root	_	LMSeg:ჭერ[ა]/ჭირ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	9	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	პირველ	პირველი	NUM	Num_Ord_Alpha_Dat_NonStand_Att	Case=Dat|NumType=Ord	2	nummod	_	LMSeg:პირველი
2	გაკვეთილს	გაკვეთილი	ADJ	A_Part_PastPart_Pv_Dat_Sg	Case=Dat|Number=Sing|Tense=Past|VerbForm=Part	3	iobj	_	LMSeg:გა·კვეთილ·ი/კვეთ
3	შევუდექით	შედგომა	VERB	V_Pass_Aor_Pv_OV_S:1Pl_IO:3	Number[subj]=Plur|Person[io]=3|Person[subj]=1|Tense=Past	0	root	_	LMSeg:შე·დგომ[ა]/დექ|SpaceAfter=No
4	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod	color:blue
1	ვინ	ვინ	PRON	Pron_Int_Hum_Nom	Animacy=Anim|Case=Nom	4	nsubj	_	LMSeg:ვინ
2	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	4	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]
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
13	უსწრებდა	სწრება	VERB	V_Act_Impf_OV_S:3Sg_IO:3	Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Imp	4	acl:relcl	_	LMSeg:*·სწრებ[ა]/სწრ
14	მისას	მისი	PRON	Pron_Poss_Poss3Sg_Dat	Case=Dat|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	13	iobj	_	LMSeg:მის·ი|SpaceAfter=No
15	?	?	PUNCT	Punct_IntMark	_	4	punct	_	LMSeg:?

~~~


