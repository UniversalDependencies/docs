---
layout: base
title:  'Statistics of nummod in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="sr_parcolab-dep-nummod-gov.html">nummod:gov</a></tt>.

219 nodes (0%) are attached to their parents as `nummod`.

216 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63013698630137.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (210; 96% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (6; 3% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-X.html">X</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	Još	još	ADV	Part	_	2	advmod:emph	_	OrigDep=Emph
2	jedan	jedan	NUM	Num_card_m_sg_acc	Case=Acc|Gender=Masc|Number=Sing	4	nummod	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:m;n:sg
3	ovakav	ovakav	DET	A_dem_acc_sg_m_-	Case=Acc|Gender=Masc|Number=Sing	4	det	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:m;n:sg
4	kraj	kraj	NOUN	N_com_acc_sg_m	Case=Acc|Gender=Masc|Number=Sing	12	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:m;n:sg
5	i	i	CCONJ	C_coord	_	7	cc	_	OrigDep=ConjCoord
6	ovakve	ovakav	DET	A_dem_acc_pl_m_-	Case=Acc|Gender=Masc|Number=Plur	7	det	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:m;n:pl
7	ljude	ljudi	NOUN	N_com_acc_pl_m	Case=Acc|Gender=Masc|Number=Plur	4	conj	_	OrigDep=Coord|OrigFeats=c:acc;g:m;n:pl
8	nigde	nigde	ADV	Adv_indef_-	_	12	advmod	_	OrigDep=DepVAdv
9	na	na	ADP	Prep	_	10	case	_	OrigDep=DepAdvPrep
10	svetu	svet	NOUN	N_com_loc_sg_m	Case=Loc|Gender=Masc|Number=Sing	8	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:m;n:sg
11	neću	hteti	AUX	V_aux_pres_1_sg_-_neg	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	12	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1
12	naći	naći	VERB	V_main_inf_-_-_-_-	VerbForm=Inf	0	root	_	OrigDep=Root|OrigFeats=t:inf|SpaceAfter=No
13	.	.	PUNCT	Z	_	12	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Imamo	imati	VERB	V_main_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:pres;r:1
2	samo	samo	ADV	Part	_	3	advmod:emph	_	OrigDep=Emph
3	jedne	jedan	NUM	Num_card_f_pl_acc	Case=Acc|Gender=Fem|Number=Plur	4	nummod	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:f;n:pl
4	Zadušnice	Zadušnice	PROPN	N_prop_acc_pl_f	Case=Acc|Gender=Fem|Number=Plur	1	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:pl|SpaceAfter=No
5	.	.	PUNCT	Z	_	4	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 28 nummod	color:blue
1	(	(	PUNCT	Z	_	4	punct	_	OrigDep=Ponct|SpaceAfter=No
2	Posle	posle	ADV	Prep	_	4	case	_	OrigDep=ExtraPred
3	male	mali	ADJ	A_qual_gen_sg_f_pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:f;n:sg
4	pauze	pauza	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	41	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
5	)	)	PUNCT	Z	_	4	punct	_	OrigDep=Ponct|SpaceAfter=No
6	:	:	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
7	Pošto	pošto	SCONJ	C_sub	_	8	mark	_	OrigDep=Sub
8	vidim	videti	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	41	advcl	_	OrigDep=PredSub|OrigFeats=n:sg;t:pres;r:1
9	da	da	SCONJ	C_sub	_	11	mark	_	OrigDep=Sub
10	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	11	expl	_	OrigDep=Ref|OrigFeats=c:acc
11	kolebate	kolebati	VERB	V_main_pres_2_pl_-_-	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	8	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:pl;t:pres;r:2|SpaceAfter=No
12	,	,	PUNCT	Z	_	11	punct	_	OrigDep=Ponct
13	i	i	CCONJ	C_coord	_	17	cc	_	OrigDep=ConjCoord
14	da	da	SCONJ	C_sub	_	17	mark	_	OrigDep=Coord
15	vas	vi	PRON	P_pers_2_pl_-_acc	Case=Acc|Number=Plur|Person=2	17	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;n:pl;r:2
16	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
17	dirnula	dirnuti	VERB	V_main_partact_-_sg_f_-	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	11	conj	_	OrigDep=PredSub|OrigFeats=g:f;n:sg;t:partact
18	moja	moj	DET	A_pos_nom_sg_f_-	Case=Nom|Gender=Fem|Number=Sing	20	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
19	privatna	privatan	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	20	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
20	sudbina	sudbina	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
21	,	,	PUNCT	Z	_	20	punct	_	OrigDep=Ponct
22	sudbina	sudbina	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	20	appos	_	OrigDep=Ap|OrigFeats=c:nom;g:f;n:sg
23	muža	muž	NOUN	N_com_gen_sg_m	Case=Gen|Gender=Masc|Number=Sing	22	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:m;n:sg
24	i	i	CCONJ	C_coord	_	25	cc	_	OrigDep=ConjCoord
25	oca	otac	NOUN	N_com_gen_sg_m	Case=Gen|Gender=Masc|Number=Sing	23	conj	_	OrigDep=Coord|OrigFeats=c:gen;g:m;n:sg
26	dvoje	dvoje	NUM	Num_col_n_pl_gen	Case=Gen|Gender=Neut|Number=Plur	28	nummod:gov	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:n;n:pl
27	nejake	nejak	ADJ	A_qual_gen_sg_f_pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	28	amod	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:f;n:sg
28	dece	dete	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	25	nummod	_	OrigDep=ComplNum|OrigFeats=c:gen;g:f;n:sg
29	–	–	PUNCT	Z	_	28	punct	_	OrigDep=Ponct
30	(	(	PUNCT	Z	_	28	punct	_	OrigDep=Ponct|SpaceAfter=No
31	on	on	PRON	P_pers_3_sg_m_nom	Case=Nom|Gender=Masc|Number=Sing|Person=3	33	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg;r:3
32	me	ja	PRON	P_pers_1_sg_-_acc	Case=Acc|Number=Sing|Person=1	33	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;n:sg;r:1
33	traži	tražiti	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	41	parataxis	_	OrigDep=Juxt|OrigFeats=n:sg;t:pres;r:3
34	svojim	svoj	DET	A_pos_ins_sg_m_-	Case=Ins|Gender=Masc|Number=Sing	36	det	_	OrigDep=DepNAdj|OrigFeats=c:ins;g:m;n:sg
35	izbezumljenim	izbezumljen	ADJ	A_qual_ins_sg_m_pos	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	36	amod	_	OrigDep=DepNAdj|OrigFeats=c:ins;g:m;n:sg
36	pogledom	pogled	NOUN	N_com_ins_sg_m	Case=Ins|Gender=Masc|Number=Sing	33	obl	_	OrigDep=DepVCas|OrigFeats=c:ins;g:m;n:sg
37	u	u	ADP	Prep	_	38	case	_	OrigDep=DepVPrep
38	gomili	gomila	NOUN	N_com_loc_sg_f	Case=Loc|Gender=Fem|Number=Sing	33	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:f;n:sg|SpaceAfter=No
39	)	)	PUNCT	Z	_	38	punct	_	OrigDep=Ponct
40	–	–	PUNCT	Z	_	38	punct	_	OrigDep=Ponct
41	izgladimo	izgladiti	VERB	V_main_imper_1_pl_-_-	Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:imper;r:1|SpaceAfter=No
42	,	,	PUNCT	Z	_	41	punct	_	OrigDep=Ponct
43	gospodo	gospoda	NOUN	N_col_voc_sg_f	Case=Voc|Gender=Fem|Number=Sing	41	vocative	_	OrigDep=DepVCas|OrigFeats=c:voc;g:f;n:sg|SpaceAfter=No
44	,	,	PUNCT	Z	_	43	punct	_	OrigDep=Ponct
45	taj	taj	DET	A_dem_acc_sg_m_-	Case=Acc|Gender=Masc|Number=Sing	46	det	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:m;n:sg
46	nesporazum	nesporazum	NOUN	N_com_acc_sg_m	Case=Acc|Gender=Masc|Number=Sing	41	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:m;n:sg|SpaceAfter=No
47	,	,	PUNCT	Z	_	46	punct	_	OrigDep=Ponct
48	džentlmenski	džentlmenski	ADV	Adv_gen_pos	Degree=Pos	41	advmod	_	OrigDep=DepVAdv|SpaceAfter=No
49	...	...	PUNCT	Z	_	48	punct	_	OrigDep=Ponct
50	»	»	PUNCT	Z	_	48	punct	_	OrigDep=Ponct

~~~


