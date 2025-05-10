---
layout: base
title:  'Statistics of case in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `case`

This relation is universal.

1139 nodes (6%) are attached to their parents as `case`.

1127 instances of `case` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08428446005268.

The following 7 pairs of parts of speech are connected with `case`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (897; 79% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (148; 13% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (47; 4% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (23; 2% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (16; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	მას	ის	PRON	Pron_Pers_3_Dat_Sg_PP_PP:თან	Case=Dat|Number=Sing|PronType=Prs	11	obl	_	LMSeg:ის|SpaceAfter=No
2	თან	_თან	ADP	Pp	_	1	case	_	LMSeg:_თან
3	ჩემ	მე	PRON	Pron_Pers_1_Gen_Sg_PP_PP:თვის	Case=Gen|Number=Sing|PronType=Prs	5	obl	_	LMSeg:მე|SpaceAfter=No
4	თვის	_თვის	ADP	Pp	_	3	case	_	LMSeg:_თვის
5	უცნობი	უცნობი	ADJ	A_Nom_Att	Case=Nom	10	amod	_	LMSeg:უცნობ·ი
6	და	და	CCONJ	Cj_Coord	_	9	cc	_	LMSeg:და
7	ჩემ	მე	PRON	Pron_Pers_1_Dat_Sg_PP_PP:ზე	Case=Dat|Number=Sing|PronType=Prs	9	obl	_	LMSeg:მე|SpaceAfter=No
8	ზე	_ზე	ADP	Pp	_	7	case	_	LMSeg:_ზე
9	უფროსი	უფროსი	ADJ	A_Nom_Att	Case=Nom	5	conj	_	LMSeg:უფროს·ი
10	გოგო-ბიჭები	გოგო-ბიჭი	NOUN	N_Hum_Nom_Pl_NewPl	Animacy=Anim|Case=Nom|Number=Plur	11	obj	_	LMSeg:გოგო-ბიჭ·ი
11	დაჰყავდათ	დაყოლა	VERB	V_MedAct_Inv_Impf_Pv_S:3Pl_DO:3	Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Imp|Voice=Inv	0	root	_	LMSeg:და·ყოლ[ა]/ყავ|SpaceAfter=No
12	.	.	PUNCT	Punct_Period	_	11	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	ისინი	ის	PRON	Pron_Pers_3_Nom_Pl	Case=Nom|Number=Plur|PronType=Prs	8	nsubj	_	LMSeg:ის
2	სეგედის	სეგედი	PROPN	N_Prop_Anthr_LastName_Gen_Dialect_PP_PP:გან	Case=Gen|NameType=Prs	8	obl	_	LMSeg:სეგედი|SpaceAfter=No
3	გან	_გან	ADP	Pp	_	2	case	_	LMSeg:_გან
4	გერმანულ	გერმანული	ADJ	A_Dat_Att	Case=Dat	7	amod	_	LMSeg:გერმანულ·ი
5	და	და	CCONJ	Cj_Coord	_	6	cc	_	LMSeg:და
6	ფრანგულ	ფრანგული	ADJ	A_Dat_Att	Case=Dat	4	conj	_	LMSeg:ფრანგულ·ი
7	ენებს	ენა	NOUN	N_Dat_Pl_NewPl	Case=Dat|Number=Plur	8	obj	_	LMSeg:ენ[ა]
8	სწავლობდნენ	სწავლა	VERB	V_MedAct_Impf_S:3Pl_DO:3	Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Imp	0	root	_	LMSeg:სწავლ[ა]/სწავლ|SpaceAfter=No
9	.	.	PUNCT	Punct_Period	_	8	punct	_	LMSeg:.

~~~


