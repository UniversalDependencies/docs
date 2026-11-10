---
layout: base
title:  'Statistics of compound in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="oge_oglauro-dep-compound-lvc.html">compound:lvc</a></tt>.

83 nodes (1%) are attached to their parents as `compound`.

75 instances of `compound` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68674698795181.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="oge_oglauro-pos-NUM.html">NUM</a></tt>-<tt><a href="oge_oglauro-pos-NUM.html">NUM</a></tt> (75; 90% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="oge_oglauro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	ძენი	ძე	NOUN	N_Nom_Pl	Case=Nom|Number=Plur	0	root	_	_
2	ფურსისნი	ფურსი	PROPN	N_Prop_Gen_Sg_Nom_Pl	Case=Gen|Case[sauf]=Nom|NameType=Prs|Number=Sing|Number[sauf]=Plur	1	nmod	_	_
3	ორ	ორი	NUM	Num_Abs	Case=Abs|NumType=Card	1	nummod	_	_
4	ათას	ათასი	NUM	Num_Abs	Case=Abs|NumType=Card	3	compound	_	_
5	ას	ასი	NUM	Num_Abs	Case=Abs|NumType=Card	3	compound	_	_
6	სამეოცდათორმეტ	სამეოცდათორმეტი	NUM	Num_Abs	Case=Abs|NumType=Card	3	compound	_	SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	ხოლო	ხოლო	CCONJ	Cj_Coord	_	3	cc	_	_
2	პიტიახშმან	პიტიახში	NOUN	N_Erg_Sg	Case=Erg|Number=Sing	3	nsubj	_	_
3	გამოარჩია	გამორჩევა	VERB	V_Act_Aor_Pv_AV_S:3Sg_O:3	Mood=Ind|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes|Version=A
4	ძუძუჲს	ძუძუჲ	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	5	compound	_	_
5	მტჱ	მტჱ	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	3	obj	_	_
6	მისი	მისი	PRON	Pron_Poss_3Sg_Nom_Sg	Case=Nom|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod	_	_
7	საკუთარი	საკუთარი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	5	amod	_	SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	10	punct	_	_
9	რაჲთა	რაჲთა	SCONJ	Cj_Sub	_	10	mark	_	_
10	მოიყვანოს	მოყვანება	VERB	V_Act_Subj_Pv_IV_S:3Sg_O:3	Mood=Sub|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	3	advcl	_	Preverb=Yes|Version=I
11	იგი	იგი	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	10	obj	_	_
12	ტაძრად	ტაძარი	NOUN	N_Adv_Sg	Case=Ess|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	Punct_FullStop	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 compound	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	მოვიდოდეს	მოსლვა	VERB	V_Act_Imp_Pv_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	Preverb=Yes
3	მამანი	მამა	NOUN	N_Nom_Pl	Case=Nom|Number=Plur	2	nsubj	_	_
4	და	და	CCONJ	Cj_Coord	_	5	cc	_	_
5	დედანი	დედა	NOUN	N_Nom_Pl	Case=Nom|Number=Plur	3	conj	_	_
6	აღნათქუემთა	აღნათქუემი	NOUN	N_Obl_Pl	Case=Gen|Number=Plur	7	obj	_	_
7	შეწირვად	შეწირვა	VERB	V_Masd_Pv_Adv	Case=Ess|VerbForm=Vnoun	2	xcomp	_	Preverb=Yes
8	და	და	CCONJ	Cj_Coord	_	14	cc	_	SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	8	punct	_	_
10	რაჲ	რაჲ	PRON	Pron_Int_Nom_Sg	Case=Nom|Number=Sing|PronType=Int	12	obj	_	_
11	ვის	ვინ	PRON	Pron_Int_Dat_Sg	Case=Dat|Number=Sing|PronType=Int	12	iobj	_	_
12	უჴმდა	ჴმობა	VERB	V_Act_Imp_UV_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Imp|VerbForm=Fin	14	advcl	_	SpaceAfter=No|Preverb=No|Version=U
13	,	,	PUNCT	Punct_Comma	_	12	punct	_	_
14	მიემადლებოდა	მიმადლება	VERB	V_Pass_Imp_Pv_EV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	2	conj	_	Preverb=Yes|Version=E
15	წმიდითა	წმიდა	ADJ	A_Ins_Sg	Case=Ins|Number=Sing	16	amod	_	_
16	ლოცვითა	ლოცვა	NOUN	N_Ins_Sg	Case=Ins|Number=Sing	14	obl	_	_
17	ნეტარისა	ნეტარი	ADJ	A_Gen_Sg	Case=Gen|Number=Sing	18	amod	_	_
18	შუშანიკისითა	შუშანიკი	PROPN	N_Prop_Gen_Sg_Ins_Sg	Case=Gen|Case[sauf]=Ins|NameType=Prs|Number=Sing|Number[sauf]=Sing	16	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Punct_Comma	_	21	punct	_	_
20	რომელსა	რომელი	PRON	Pron_Rel_Dat_Sg	Case=Dat|Number=Sing|PronType=Rel	21	obj	_	_
21	მოსცემდა	მოცემა	VERB	V_Act_Imp_Pv_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Imp|VerbForm=Fin	14	acl:relcl	_	Preverb=Yes
22	მას	იგი	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	21	iobj	_	_
23	კაცთ	კაცი	NOUN	N_Obl_Pl	Case=Gen|Number=Plur	24	compound	_	_
24	მოყუარე	მოყუარე	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	25	amod	_	_
25	ღმერთი	ღმერთი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	21	nsubj	_	SpaceAfter=No
26	:	:	PUNCT	Punct_Colon	_	2	punct	_	_

~~~


