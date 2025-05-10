---
layout: base
title:  'Statistics of punct in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `punct`

This relation is universal.

3495 nodes (19%) are attached to their parents as `punct`.

1835 instances of `punct` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.0068669527897.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (2717; 78% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (408; 12% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (177; 5% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (65; 2% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (58; 2% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (46; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="ka_gnc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ka_gnc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ka_gnc-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 punct	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 punct	color:blue
1	მარტოხელა	მარტოხელა	ADJ	A_Nom_Att	Case=Nom	2	amod	_	LMSeg:მარტოხელა
2	კაცი	კაცი	NOUN	N_Hum_Nom_Sg	Animacy=Anim|Case=Nom|Number=Sing	0	root	_	LMSeg:კაც·ი
3	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	2	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]|SpaceAfter=No
4	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 punct	color:blue
1	ზოგი	ზოგი	DET	A_Quant_Nom_Sg	Case=Nom|Number=Sing	2	nsubj	_	LMSeg:ზოგ·ი
2	სველი	სველი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	0	root	_	LMSeg:სველ·ი
3	იყო	არის	AUX	V_Pass_Aor_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	2	cop	_	LMSeg:ყოფნ[ა]/ყ[ავ]|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	ზოგი	ზოგი	DET	A_Quant_Nom_Sg	Case=Nom|Number=Sing	7	orphan	_	LMSeg:ზოგ·ი
6	ნახევრად	ნახევრად	ADV	Adv_Deg	_	7	advmod	_	LMSeg:ნახევრად
7	დამწვარი	დამწვარი	ADJ	A_Part_PastPart_Pv_Nom_Sg	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	2	conj	_	LMSeg:და·მწვ[ა]რ·ი/წვ|SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
9	ზოგიც	ზოგი	DET	A_Quant_Nom_Sg_Encl:ც_Foc	Case=Nom|Encl=C|Number=Sing	10	orphan	_	LMSeg:ზოგ·ი
10	მთელი	მთელი	DET	A_Quant_Nom_Sg	Case=Nom|Number=Sing	2	conj	_	LMSeg:მთელ·ი|SpaceAfter=No
11	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


