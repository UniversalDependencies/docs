---
layout: base
title:  'Statistics of nmod in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `nmod`

This relation is universal.
There are 4 language-specific subtypes of `nmod`: <tt><a href="ka_gnc-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="ka_gnc-dep-nmod-iobj.html">nmod:iobj</a></tt>, <tt><a href="ka_gnc-dep-nmod-name.html">nmod:name</a></tt>, <tt><a href="ka_gnc-dep-nmod-pred.html">nmod:pred</a></tt>.

957 nodes (4%) are attached to their parents as `nmod`.

924 instances of `nmod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41065830721003.

The following 18 pairs of parts of speech are connected with `nmod`: <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (671; 70% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (136; 14% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (65; 7% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (37; 4% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (22; 2% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	–	–	PUNCT	Punct_Dash	_	6	punct	_	LMSeg:–
2	აქედან	აქედან	ADV	Adv_Loc	AdvType=Loc	3	advmod	_	LMSeg:აქედან
3	გასვლის	გასვლა	NOUN	N_VN_Pv_Gen_Sg	Case=Gen|Number=Sing|VerbForm=Vnoun	4	nmod	_	LMSeg:გა·სვლ[ა]/სვლ
4	უფლება	უფლება	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	6	obj	_	LMSeg:უფლებ[ა]
5	არა	არ	ADV	Adv_Neg_L	_	6	advmod:neg	_	LMSeg:არ
6	გაქვთ	ქონა	VERB	V_MedPass_Inv_Pres_LV_DO:3_S:2Pl	Mood=Ind|Number[subj]=Plur|Person[obj]=3|Person[subj]=2|Tense=Pres|VerbForm=Fin|Voice=Inv	0	root	_	LMSeg:ქონ[ა]/ქვ|SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
8	დაპატიმრებული	დაპატიმრებული	ADJ	A_Part_PastPart_Pv_Nom_Sg	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	9	xcomp	_	LMSeg:და·პატიმრებულ·ი/პატიმრ
9	ბრძანდებით	ბრძანება	VERB	V_Pass_Pres_S:2Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=2|Tense=Pres|VerbForm=Fin	6	parataxis	_	LMSeg:*·ბრძანებ[ა]/ბრძან|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
1	ეს	ეს	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	_	LMSeg:ეს
2	გახლდათ	ხლება	VERB	V_MedPass_Impf_S:3Sg_IO:2Pl	Mood=Ind|Number[io]=Plur|Number[subj]=Sing|Person[io]=2|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:ხლებ[ა]/ახლ
3	ფრაუ	ფრაუ	NOUN	N_Hum_Qual_Gen_Att_Foreign	Animacy=Anim|Case=Gen	4	nmod	_	LMSeg:ფრაუ
4	გრუბახის	გრუბახი	PROPN	N_Prop_Anthr_LastName_Gen	Case=Gen|NameType=Prs	6	nmod	_	LMSeg:გრუბახ·ი
5	საერთო	საერთო	ADJ	A_Nom_Att	Case=Nom	6	amod	_	LMSeg:საერთო
6	ოთახი	ოთახი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	xcomp	_	LMSeg:ოთახ·ი|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	ეს	ეს	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	_	LMSeg:ეს
2	გახლდათ	ხლება	VERB	V_MedPass_Impf_S:3Sg_IO:2Pl	Mood=Ind|Number[io]=Plur|Number[subj]=Sing|Person[io]=2|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:ხლებ[ა]/ახლ
3	ფრაუ	ფრაუ	NOUN	N_Hum_Qual_Gen_Att_Foreign	Animacy=Anim|Case=Gen	4	nmod	_	LMSeg:ფრაუ
4	გრუბახის	გრუბახი	PROPN	N_Prop_Anthr_LastName_Gen	Case=Gen|NameType=Prs	6	nmod	_	LMSeg:გრუბახ·ი
5	საერთო	საერთო	ADJ	A_Nom_Att	Case=Nom	6	amod	_	LMSeg:საერთო
6	ოთახი	ოთახი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	xcomp	_	LMSeg:ოთახ·ი|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	2	punct	_	LMSeg:.

~~~


