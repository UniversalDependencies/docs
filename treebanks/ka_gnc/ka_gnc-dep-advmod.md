---
layout: base
title:  'Statistics of advmod in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="ka_gnc-dep-advmod-neg.html">advmod:neg</a></tt>.

1870 nodes (8%) are attached to their parents as `advmod`.

1650 instances of `advmod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1144385026738.

The following 13 pairs of parts of speech are connected with `advmod`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (1339; 72% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (164; 9% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (144; 8% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (125; 7% instances), <tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (43; 2% instances), <tt><a href="ka_gnc-pos-DET.html">DET</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (14; 1% instances), <tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (11; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ka_gnc-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt>-<tt><a href="ka_gnc-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	ამგვარი	ამგვარი	ADJ	A_Nom_Att	Case=Nom	2	amod	_	LMSeg:ამგვარ·ი
2	რამ	რამ	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	4	nsubj	_	LMSeg:რამ
3	არასოდეს	არასოდეს	ADV	Adv_Neg_Temp	AdvType=Tim	4	advmod	_	LMSeg:არასოდეს
4	მომხდარა	მოხდომა	VERB	V_Pass_Perf_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=PastPerf|VerbForm=Fin	0	root	_	LMSeg:მო·ხდომ[ა]/ხდ|SpaceAfter=No
5	.	.	PUNCT	Punct_Period	_	4	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	დინჯად	დინჯად	ADV	A_Advb_Sg	_	7	advmod	_	LMSeg:დინჯად|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
3	მსუბუქად	მსუბუქად	ADV	A_Advb_Sg	_	7	advmod	_	LMSeg:მსუბუქად|SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	7	punct	_	LMSeg:,
5	მუდამ	მუდამ	ADV	Adv_Temp	AdvType=Tim	6	advmod	_	LMSeg:მუდამ
6	თავჩაქინდრული	თავჩაქინდრული	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	7	advcl	_	LMSeg:თავჩაქინდრულ·ი
7	დადიოდა	სიარული	VERB	V_MedPass_Impf_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	LMSeg:სიარულ·ი/დი|SpaceAfter=No
8	.	.	PUNCT	Punct_Period	_	7	punct	_	LMSeg:.

~~~


