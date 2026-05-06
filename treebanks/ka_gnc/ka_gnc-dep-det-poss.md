---
layout: base
title:  'Statistics of det:poss in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="ka_gnc-dep-det.html">det</a></tt>.

301 nodes (1%) are attached to their parents as `det:poss`.

297 instances of `det:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28571428571429.

The following 5 pairs of parts of speech are connected with `det:poss`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (284; 94% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	–	–	PUNCT	Punct_Dash	_	6	punct	_	LMSeg:–
2	თქვენს	თქვენი	PRON	Pron_Poss_Poss2Pl_Dat_Att	Case=Dat|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	3	det:poss	_	LMSeg:თქვენ·ი
3	ოთახ	ოთახი	NOUN	N_Dat_Sg_PP_PP:ში	Case=Dat|Number=Sing	6	obl	_	LMSeg:ოთახ·ი|SpaceAfter=No
4	ში	_ში	ADP	Pp	_	3	case	_	LMSeg:_ში
5	უნდა	უნდა	AUX	Modal	_	6	aux	_	LMSeg:უნდა
6	დარჩენილიყავით	დარჩენა	VERB	V_Pass_PluPerf_Pv_S:2Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=2|Tense=Pqp|VerbForm=Fin	0	root	_	LMSeg:და·რჩენ[ა]/რჩენ|SpaceAfter=No
7	!	!	PUNCT	Punct_ExclPoint	_	6	punct	_	LMSeg:!

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	ის	ის	PRON	Pron_Pers_3_Nom_Sg	Case=Nom|Number=Sing|PronType=Prs	4	nsubj	_	LMSeg:ის
2	თავის	თავისი	PRON	Pron_Poss_Refl_Poss3Sg_Dat_Att	Case=Dat|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	3	det:poss	_	LMSeg:თავის·ი
3	ro-ro-ro-ს	ro-ro-ro	PROPN	N_Prop_Foreign_Dat	Case=Dat	4	obj	_	LMSeg:ro-ro-ro
4	კითხულობდა	კითხვა	VERB	V_MedAct_Impf_S:3Sg_DO:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:*·კითხვ[ა]/კითხულ|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	–	–	PUNCT	Punct_Dash	_	3	punct	_	LMSeg:–
2	ჩემო	ჩემი	PRON	Pron_Poss_Poss1Sg_Voc_Att	Case=Voc|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	LMSeg:ჩემ·ი
3	ერთადერთო	ერთადერთი	ADJ	A_Voc_Sg	Case=Voc|Number=Sing	0	root	_	LMSeg:ერთადერთ·ი|SpaceAfter=No
4	!	!	PUNCT	Punct_ExclPoint	_	3	punct	_	LMSeg:!

~~~


