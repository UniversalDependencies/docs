---
layout: base
title:  'Statistics of xcomp in UD_Georgian-GNC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GNC: Relations: `xcomp`

This relation is universal.

95 nodes (1%) are attached to their parents as `xcomp`.

75 instances of `xcomp` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.48421052631579.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NOUN.html">NOUN</a></tt> (38; 40% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADJ.html">ADJ</a></tt> (37; 39% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PRON.html">PRON</a></tt> (8; 8% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-ADV.html">ADV</a></tt> (7; 7% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ka_gnc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_gnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	მოგახსენებთ	მოხსენება	VERB	V_Act_Pres_Pv_S:1Sg_DO:3_IO:2Pl	Number[io]=Plur|Number[subj]=Sing|Person[io]=2|Person[obj]=3|Person[subj]=1|Tense=Pres	0	root	_	LMSeg:მო·ხსენებ[ა]/ხსენ|SpaceAfter=No
2	,	,	PUNCT	Punct_Comma	_	6	punct	_	LMSeg:,
3	ეს	ეს	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	6	nsubj	_	LMSeg:ეს
4	დუელად	დუელი	NOUN	N_Advb_Sg	Case=Ess|Number=Sing	6	xcomp	_	LMSeg:დუელ·ი
5	ვერ	ვერ	ADV	Adv_Neg_Pot	_	6	advmod:neg	_	LMSeg:ვერ
6	ჩაითვლება	ჩათვლა	VERB	V_Pass_Fut_Pv_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Fut	1	ccomp	_	LMSeg:ჩა·თვლ[ა]/თვლ|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	1	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	არც	არ	ADV	Adv_Neg_Encl:ც_Foc	Encl=C	2	advmod:neg	_	LMSeg:არ
2	დათა	დათა	PROPN	N_Prop_Anthr_FirstName_Nom	Case=Nom|NameType=Prs	3	nsubj	_	LMSeg:დათა
3	გამოდგა	გამოდგომა	VERB	V_Pass_Aor_Pv_S:3Sg	Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	LMSeg:გამო·დგომ[ა]/დგ
4	ნაკლებად	ნაკლებად	ADV	A_Advb_Sg	_	5	advmod	_	LMSeg:ნაკლებად
5	ჯიუტი	ჯიუტი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	3	xcomp	_	LMSeg:ჯიუტ·ი|SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	9	punct	_	LMSeg:,
7	გოჯი	გოჯი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	9	obj	_	LMSeg:გოჯ·ი
8	არ	არ	ADV	Adv_Neg	_	9	advmod:neg	_	LMSeg:არ
9	დაუთმო	დათმობა	VERB	V_Act_Aor_Pv_OV_S:3Sg_DO:3_IO:3	Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=3|Tense=Past	3	parataxis	_	LMSeg:და·თმობ[ა]/თმ|SpaceAfter=No
10	.	.	PUNCT	Punct_Period	_	3	punct	_	LMSeg:.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	თავისი	თავისი	PRON	Pron_Poss_Refl_Poss3Sg_Nom_Att	Case=Nom|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	LMSeg:თავის·ი
2	სევდა	სევდა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	6	nsubj	_	LMSeg:სევდ[ა]
3	და	და	CCONJ	Cj_Coord	_	4	cc	_	LMSeg:და
4	ნაღველი	ნაღველი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	conj	_	LMSeg:ნაღვ[ე]ლ·ი
5	არარად	არარა	PRON	Pron_Neg_Nonhum_Advb	Case=Ess	6	xcomp	_	LMSeg:არარ[ა]
6	მოეჩვენა	მოჩვენება	VERB	V_Pass_Aor_Pv_S:3Sg_IO:3	Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past	0	root	_	LMSeg:მო·ჩვენებ[ა]/ჩვენ|SpaceAfter=No
7	.	.	PUNCT	Punct_Period	_	6	punct	_	LMSeg:.

~~~


