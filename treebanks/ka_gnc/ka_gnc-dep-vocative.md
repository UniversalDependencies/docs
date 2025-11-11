---
layout: base
title:  'Statistics of vocative in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `vocative`

This relation is universal.

41 nodes (0%) are attached to their parents as `vocative`.

21 instances of `vocative` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.39024390243902.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (19; 46% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (17; 41% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	–	–	PUNCT	Punct_Dash	_	6	punct	_	LMSeg:–
2	კი	კი	ADV	Adv_Root	_	6	advmod	_	LMSeg:კი|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
4	ვარდენ	ვარდენ	PROPN	N_Prop_Anthr_FirstName_Voc	Case=Voc|NameType=Prs	6	vocative	_	LMSeg:ვარდენ|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
6	გაგიგე	გაგება	VERB	V_Act_Aor_Pv_OV_S:1Sg_DO:3_IO:2Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	LMSeg:გა·გებ[ა]/გ|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	–	–	PUNCT	Punct_Dash	_	2	punct	_	LMSeg:–
2	დაბრძანდით	დაბრძანება	VERB	V_Pass_Impv_Pv_S:2Pl	Mood=Imp|Number[subj]=Plur|Person[subj]=2|VerbForm=Fin	0	root	_	LMSeg:და·ბრძანებ[ა]/ბრძან|SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	4	punct	_	LMSeg:,
4	ჰერ	ჰერ	NOUN	N_Hum_Voc_Sg_Foreign	Animacy=Anim|Case=Voc|Number=Sing	2	vocative	_	LMSeg:ჰერ|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
6	გთხოვთ	თხოვნა	VERB	V_Act_Pres_S:1Sg_DO:3_IO:2Pl	Mood=Ind|Number[io]=Plur|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Pres|VerbForm=Fin	2	parataxis	_	LMSeg:*·თხოვნ[ა]/თხოვ|SpaceAfter=No
7	!	!	PUNCT	Punct_ExclPoint	_	2	punct	_	LMSeg:!

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 vocative	color:blue
1	თვითონ	თვითონ	ADV	Adv_Foc	_	2	advmod	_	LMSeg:თვითონ
2	შეგეძლო	შეძლება	VERB	V_MedPass_Inv_Aor_Pv_S:2Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Past|VerbForm=Fin|Voice=Inv	0	root	_	LMSeg:შე·ძლებ[ა]/ძლ
3	მათი	მათი	PRON	Pron_Poss_Poss3Pl_Nom_Att	Case=Nom|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	4	det:poss	_	LMSeg:მათ·ი
4	შეჩერება	შეჩერება	NOUN	N_VN_Pv_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	2	obj	_	LMSeg:შე·ჩერებ[ა]/ჩერ|SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	10	punct	_	LMSeg:,
6	მაგრამ	მაგრამ	CCONJ	Cj_Coord	_	10	cc	_	LMSeg:მაგრამ
7	შენ	შენ	PRON	Pron_Pers_2_Nom_Sg	Case=Nom|Number=Sing|PronType=Prs	10	nsubj	_	LMSeg:შენ
8	ხომ	ხომ	ADV	Adv_Disc	_	10	advmod	_	LMSeg:ხომ
9	ასეთი	ასეთი	PRON	Pron_Indef_Prox_Nom_Att	Case=Nom|PronType=Ind	10	det	_	LMSeg:ასეთ·ი
10	მოუქნელი	მოუქნელი	ADJ	A_Part_NegPart_Pv_Nom_Sg	Case=Nom|Number=Sing|Polarity=Neg|Tense=Pres|VerbForm=Part	2	conj	_	LMSeg:მო·უქნელ·ი/ქნ
11	ხარ	ყოფნა	AUX	V_MedPass_Pres_S:2Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|VerbForm=Fin	10	cop	_	LMSeg:ყოფნ[ა]/არ|SpaceAfter=No
12	,	,	PUNCT	Punct_Comma	_	13	punct	_	LMSeg:,
13	ერიკა	ერიკა	PROPN	N_Prop_Anthr_FirstName_Voc	Case=Voc|NameType=Prs	10	vocative	_	LMSeg:ერიკა|SpaceAfter=No
14	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


