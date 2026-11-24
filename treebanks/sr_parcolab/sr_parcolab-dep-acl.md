---
layout: base
title:  'Statistics of acl in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="sr_parcolab-dep-acl-relcl.html">acl:relcl</a></tt>.

10 nodes (0%) are attached to their parents as `acl`.

10 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (6; 60% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl	color:blue
1	Pojavio	pojaviti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
2	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	1	expl	_	OrigDep=Ref|OrigFeats=c:acc
3	iznenada	iznenada	ADV	Adv_gen_pos	Degree=Pos	1	advmod	_	OrigDep=DepVAdv
4	i	i	CCONJ	C_coord	_	5	cc	_	OrigDep=ConjCoord
5	nestao	nestati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	1	conj	_	OrigDep=Coord|OrigFeats=g:m;n:sg;t:partact
6	isto	isto	ADV	Adv_gen_pos	Degree=Pos	7	advmod	_	OrigDep=DepAdvAdv
7	tako	tako	ADV	Adv_gen_pos	Degree=Pos	8	advmod	_	OrigDep=DepAdvAdv
8	brzo	brzo	ADV	Adv_gen_pos	Degree=Pos	5	advmod	_	OrigDep=DepVAdv
9	i	i	CCONJ	C_coord	_	10	cc	_	OrigDep=ConjCoord
10	iznenadno	iznenadno	ADV	Adv_gen_pos	Degree=Pos	8	conj	_	OrigDep=Coord|SpaceAfter=No
11	,	,	PUNCT	Z	_	10	punct	_	OrigDep=Ponct
12	kao	kao	SCONJ	C_sub	_	13	case	_	OrigDep=Sub
13	zvezda	zvezda	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	5	obl	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:f;n:sg
14	kad	kada	SCONJ	C_sub	_	15	mark	_	OrigDep=DepEx_Sub
15	pada	padati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	acl	_	OrigDep=PredSub|OrigFeats=n:sg;t:pres;r:3|SpaceAfter=No
16	.	.	PUNCT	Z	_	15	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 acl	color:blue
1	Jer	jer	SCONJ	C_sub	_	5	mark	_	OrigDep=Root
2	moj	moj	DET	A_pos_nom_sg_m_-	Case=Nom|Gender=Masc|Number=Sing	3	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
3	otac	otac	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
4	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
5	brao	brati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=PredSub|OrigFeats=g:m;n:sg;t:partact
6	koprivu	kopriva	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg
7	kao	kao	SCONJ	C_sub	_	8	case	_	OrigDep=Sub
8	pas	pas	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	5	advcl	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:m;n:sg
9	kad	kada	SCONJ	C_sub	_	10	mark	_	OrigDep=DepEx_Sub
10	grize	gristi	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	orphan	_	OrigDep=PredSub|OrigFeats=n:pl;t:pres;r:3
11	travu	trava	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg
12	pred	pred	ADP	Prep	_	13	case	_	OrigDep=DepVPrep
13	oluju	oluja	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	10	obl	_	OrigDep=ComplPrep|OrigFeats=c:acc;g:f;n:sg|SpaceAfter=No
14	:	:	PUNCT	Z	_	13	punct	_	OrigDep=Ponct
15	besan	besan	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	parataxis	_	OrigDep=Juxt|OrigFeats=c:nom;g:m;n:sg
16	i	i	CCONJ	C_coord	_	17	cc	_	OrigDep=ConjCoord
17	nemoćan	nemoćan	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	15	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:m;n:sg
18	da	da	SCONJ	C_sub	_	19	mark	_	OrigDep=Sub
19	podmetne	podmetnuti	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	acl	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:3
20	požar	požar	NOUN	N_com_acc_sg_m	Case=Acc|Gender=Masc|Number=Sing	19	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:m;n:sg|SpaceAfter=No
21	.	.	PUNCT	Z	_	20	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl	color:blue
1	U	u	ADP	Prep	_	3	case	_	OrigDep=DepVPrep
2	srušenoj	srušen	ADJ	A_qual_loc_sg_f_pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	OrigDep=DepNAdj|OrigFeats=c:loc;g:f;n:sg
3	kući	kuća	NOUN	N_com_loc_sg_f	Case=Loc|Gender=Fem|Number=Sing	20	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:f;n:sg
4	ispod	ispod	ADP	Prep	_	6	case	_	OrigDep=DepNPrep
5	stare	star	ADJ	A_qual_gen_sg_f_pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:f;n:sg
6	tvrđave	tvrđava	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:f;n:sg
7	(	(	PUNCT	Z	_	6	punct	_	OrigDep=Ponct|SpaceAfter=No
8	tamo	tamo	ADV	Adv_gen_pos	Degree=Pos	20	advmod	_	OrigDep=DepVAdv
9	gde	gde	ADV	Adv_rel_-	_	11	advmod	_	OrigDep=DepVAdv
10	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	11	expl	_	OrigDep=Ref|OrigFeats=c:acc
11	rodio	roditi	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	8	acl	_	OrigDep=PredRel|OrigFeats=g:m;n:sg;t:partact
12	Sveti	svet	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
13	Dimitrije	Dimitrije	PROPN	N_prop_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
14	,	,	PUNCT	Z	_	13	punct	_	OrigDep=Ponct
15	svetac	svetac	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	13	appos	_	OrigDep=Ap|OrigFeats=c:nom;g:m;n:sg
16	nekih	neki	PRON	P_indef_-_pl_m_gen	Case=Gen|Gender=Masc|Number=Plur	15	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:m;n:pl
17	od	od	ADP	Prep	_	18	case	_	OrigDep=DepNPrep
18	nas	mi	PRON	P_pers_1_pl_-_gen	Case=Gen|Number=Plur|Person=1	16	nmod	_	OrigDep=ComplPrep|OrigFeats=c:gen;n:pl;r:1|SpaceAfter=No
19	)	)	PUNCT	Z	_	18	punct	_	OrigDep=Ponct
20	stanuje	stanovati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3
21	starac	starac	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	20	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
22	derviš	derviš	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	21	appos	_	OrigDep=Ap|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
23	,	,	PUNCT	Z	_	22	punct	_	OrigDep=Ponct
24	slep	slep	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	21	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
25	,	,	PUNCT	Z	_	24	punct	_	OrigDep=Ponct
26	ćelav	ćelav	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	24	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:m;n:sg
27	i	i	CCONJ	C_coord	_	28	cc	_	OrigDep=ConjCoord
28	bradat	bradat	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	24	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
29	,	,	PUNCT	Z	_	28	punct	_	OrigDep=Ponct
30	smežuran	smežuran	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	21	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
31	kao	kao	SCONJ	C_sub	_	32	case	_	OrigDep=Sub
32	orah	orah	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	30	obl	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
33	,	,	PUNCT	Z	_	32	punct	_	OrigDep=Ponct
34	malen	malen	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	21	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
35	od	od	ADP	Prep	_	36	case	_	OrigDep=DepAdjPrep
36	starosti	starost	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	34	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
37	,	,	PUNCT	Z	_	36	punct	_	OrigDep=Ponct
38	sa	sa	ADP	Prep	_	40	case	_	OrigDep=DepNPrep
39	izlizanim	izlizan	ADJ	A_qual_ins_pl_f_pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur	40	amod	_	OrigDep=DepNAdj|OrigFeats=c:ins;g:f;n:pl
40	brojanicama	brojanica	NOUN	N_com_ins_pl_f	Case=Ins|Gender=Fem|Number=Plur	21	nmod	_	OrigDep=ComplPrep|OrigFeats=c:ins;g:f;n:pl
41	u	u	ADP	Prep	_	42	case	_	OrigDep=DepNPrep
42	rukama	ruka	NOUN	N_com_loc_pl_f	Case=Loc|Gender=Fem|Number=Plur	40	nmod	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:f;n:pl|SpaceAfter=No
43	.	.	PUNCT	Z	_	42	punct	_	OrigDep=Ponct

~~~


