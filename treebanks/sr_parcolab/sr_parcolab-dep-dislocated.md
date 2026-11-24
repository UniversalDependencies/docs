---
layout: base
title:  'Statistics of dislocated in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `dislocated`

This relation is universal.

15 nodes (0%) are attached to their parents as `dislocated`.

13 instances of `dislocated` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 20.2.

The following 7 pairs of parts of speech are connected with `dislocated`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (6; 40% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 dislocated	color:blue
1	Ostalo	ostalo	NOUN	N_com_nom_sg_n	Case=Nom|Gender=Neut|Number=Sing	8	dislocated	_	OrigDep=Ap|OrigFeats=c:nom;g:n;n:sg|SpaceAfter=No
2	,	,	PUNCT	Z	_	1	punct	_	OrigDep=Ponct
3	pak	pak	ADV	Part	_	8	discourse	_	OrigDep=ExtraPred|SpaceAfter=No
4	,	,	PUNCT	Z	_	3	punct	_	OrigDep=Ponct
5	to	taj	PRON	P_dem_-_sg_n_nom	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
6	su	biti	AUX	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	OrigDep=Root|OrigFeats=n:pl;t:pres;r:3|OrigLemma=jesam
7	bolesne	bolestan	ADJ	A_qual_nom_pl_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	8	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:pl
8	izmišljotine	izmišljotina	NOUN	N_com_nom_pl_f	Case=Nom|Gender=Fem|Number=Plur	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:f;n:pl
9	ljubomorne	ljubomoran	ADJ	A_qual_gen_sg_f_pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:f;n:sg
10	fantazije	fantazija	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
11	.	.	PUNCT	Z	_	10	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 2 dislocated	color:blue
1	Ali	ali	CCONJ	C_coord	_	16	cc	_	OrigDep=Root
2	ono	ono	PRON	P_dem_-_sg_n_nom	Case=Nom|Gender=Neut|Number=Sing	16	dislocated	_	OrigDep=Ap|OrigFeats=c:nom;g:n;n:sg
3	što	što	PRON	P_rel_-_-_-_nom	Case=Nom	6	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
4	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
5	bilo	biti	AUX	V_main_partact_-_sg_n_-	Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	6	cop	_	OrigDep=PredRel|OrigFeats=g:n;n:sg;t:partact
6	najčudnije	čudan	ADJ	A_qual_nom_sg_n_sup	Case=Nom|Degree=Sup|Gender=Neut|Number=Sing	2	acl:relcl	_	OrigDep=PredicNom|OrigFeats=c:nom;g:n;n:sg
7	na	na	ADP	Prep	_	9	case	_	OrigDep=DepVPrep
8	tom	taj	DET	A_dem_loc_sg_n_-	Case=Loc|Gender=Neut|Number=Sing	9	det	_	OrigDep=DepNAdj|OrigFeats=c:loc;g:n;n:sg
9	psetancetu	psetance	NOUN	N_com_loc_sg_n	Case=Loc|Gender=Neut|Number=Sing	6	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:n;n:sg|SpaceAfter=No
10	,	,	PUNCT	Z	_	9	punct	_	OrigDep=Ponct
11	to	taj	PRON	P_dem_-_sg_n_nom	Case=Nom|Gender=Neut|Number=Sing	16	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
12	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
13	bila	biti	AUX	V_main_partact_-_sg_f_-	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	16	cop	_	OrigDep=Coord|OrigFeats=g:f;n:sg;t:partact
14	neka	neki	DET	A_indef_nom_sg_f_-	Case=Nom|Gender=Fem|Number=Sing	16	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
15	neverovatna	neverovatan	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
16	sličnost	sličnost	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
17	,	,	PUNCT	Z	_	16	punct	_	OrigDep=Ponct
18	u	u	ADP	Prep	_	19	case	_	OrigDep=DepNPrep
19	izrazu	izraz	NOUN	N_com_loc_sg_m	Case=Loc|Gender=Masc|Number=Sing	16	nmod	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:m;n:sg
20	očiju	oko	NOUN	N_com_gen_pl_f	Case=Gen|Gender=Fem|Number=Plur	19	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:pl
21	i	i	CCONJ	C_coord	_	23	cc	_	OrigDep=ConjCoord
22	u	u	ADP	Prep	_	23	case	_	OrigDep=Coord
23	borama	bora	NOUN	N_com_loc_pl_f	Case=Loc|Gender=Fem|Number=Plur	19	conj	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:f;n:pl
24	oko	oko	ADP	Prep	_	25	case	_	OrigDep=DepNPrep
25	usana	usna	NOUN	N_com_gen_pl_f	Case=Gen|Gender=Fem|Number=Plur	23	nmod	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:f;n:pl|SpaceAfter=No
26	,	,	PUNCT	Z	_	25	punct	_	OrigDep=Ponct
27	sa	sa	ADP	Prep	_	29	case	_	OrigDep=DepNPrep
28	starom	star	ADJ	A_qual_ins_sg_f_pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	29	amod	_	OrigDep=DepNAdj|OrigFeats=c:ins;g:f;n:sg
29	gospođom	gospođa	NOUN	N_com_ins_sg_f	Case=Ins|Gender=Fem|Number=Sing	16	nmod	_	OrigDep=ComplPrep|OrigFeats=c:ins;g:f;n:sg
30	Kniper	Kniper	PROPN	N_prop_nom_sg_-	Case=Nom|Number=Sing	29	flat	_	OrigDep=Ap|OrigFeats=c:nom;n:sg|SpaceAfter=No
31	,	,	PUNCT	Z	_	30	punct	_	OrigDep=Ponct
32	seoskom	seoski	ADJ	A_qual_ins_sg_f_pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	33	amod	_	OrigDep=DepNAdj|OrigFeats=c:ins;g:f;n:sg
33	babicom	babica	NOUN	N_com_ins_sg_f	Case=Ins|Gender=Fem|Number=Sing	29	appos	_	OrigDep=Ap|OrigFeats=c:ins;g:f;n:sg|SpaceAfter=No
34	.	.	PUNCT	Z	_	33	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 3 dislocated	color:blue
1	Taj	taj	DET	A_dem_nom_sg_m_-	Case=Nom|Gender=Masc|Number=Sing	3	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
2	mali	mali	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
3	život	život	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	23	dislocated	_	OrigDep=Ap|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
4	,	,	PUNCT	Z	_	3	punct	_	OrigDep=Ponct
5	ta	taj	DET	A_dem_nom_sg_f_-	Case=Nom|Gender=Fem|Number=Sing	7	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
6	vlažna	vlažan	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
7	njuška	njuška	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	3	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
9	te	taj	DET	A_dem_nom_pl_f_-	Case=Nom|Gender=Fem|Number=Plur	11	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:pl
10	drhtave	drhtav	ADJ	A_qual_nom_pl_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:pl
11	šapice	šapica	NOUN	N_com_nom_pl_f	Case=Nom|Gender=Fem|Number=Plur	3	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:f;n:pl
12	što	što	PRON	P_rel_-_-_-_nom	Case=Nom	14	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
13	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	14	expl	_	OrigDep=Ref|OrigFeats=c:acc
14	otvaraju	otvarati	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	OrigDep=PredRel|OrigFeats=n:pl;t:pres;r:3
15	i	i	CCONJ	C_coord	_	16	cc	_	OrigDep=ConjCoord
16	zatvaraju	zatvarati	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	14	conj	_	OrigDep=Coord|OrigFeats=n:pl;t:pres;r:3
17	kao	kao	SCONJ	C_sub	_	19	case	_	OrigDep=Sub
18	trnov	trnov	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
19	cvet	cvet	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	14	obl	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
20	,	,	PUNCT	Z	_	19	punct	_	OrigDep=Ponct
21	sve	sav	DET	A_indef_nom_sg_n_-	Case=Nom|Gender=Neut|Number=Sing	23	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:n;n:sg
22	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
23	to	taj	PRON	P_dem_-_sg_n_nom	Case=Nom|Gender=Neut|Number=Sing	25	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
24	sada	sada	ADV	Adv_gen_pos	Degree=Pos	25	advmod	_	OrigDep=DepVAdv
25	predato	predati	VERB	V_main_partpass_-_sg_n_-	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Conv	0	root	_	OrigDep=Root|OrigFeats=g:n;n:sg;t:partpass
26	u	u	ADP	Prep	_	28	case	_	OrigDep=DepAdjPrep
27	moje	moj	DET	A_pos_acc_pl_f_-	Case=Acc|Gender=Fem|Number=Plur	28	det	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:f;n:pl
28	ruke	ruka	NOUN	N_com_acc_pl_f	Case=Acc|Gender=Fem|Number=Plur	25	obl	_	OrigDep=ComplPrep|OrigFeats=c:acc;g:f;n:pl|SpaceAfter=No
29	,	,	PUNCT	Z	_	28	punct	_	OrigDep=Ponct
30	ta	taj	DET	A_dem_nom_sg_f_-	Case=Nom|Gender=Fem|Number=Sing	33	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
31	sadašnja	sadašnji	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	33	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
32	nežna	nežan	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	33	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
33	igračka	igračka	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	23	appos	_	OrigDep=Ap|OrigFeats=c:nom;g:f;n:sg
34	koja	koji	PRON	P_rel_-_sg_f_nom	Case=Nom|Gender=Fem|Number=Sing	37	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:sg
35	će	hteti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	37	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3
36	jednom	jednom	ADV	Adv_gen_pos	Degree=Pos	37	advmod	_	OrigDep=DepVAdv
37	postati	postati	VERB	V_main_inf_-_-_-_-	VerbForm=Inf	33	acl:relcl	_	OrigDep=PredRel|OrigFeats=t:inf
38	opasno	opasan	ADJ	A_qual_nom_sg_n_pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	39	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:n;n:sg
39	oružje	oružje	NOUN	N_com_nom_sg_n	Case=Nom|Gender=Neut|Number=Sing	37	xcomp	_	OrigDep=PredicComplSuj|OrigFeats=c:nom;g:n;n:sg
40	u	u	ADP	Prep	_	42	case	_	OrigDep=DepNPrep
41	mojim	moj	DET	A_pos_loc_pl_f_-	Case=Loc|Gender=Fem|Number=Plur	42	det	_	OrigDep=DepNAdj|OrigFeats=c:loc;g:f;n:pl
42	rukama	ruka	NOUN	N_com_loc_pl_f	Case=Loc|Gender=Fem|Number=Plur	39	nmod	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:f;n:pl|SpaceAfter=No
43	,	,	PUNCT	Z	_	42	punct	_	OrigDep=Ponct
44	strah	strah	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	39	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:m;n:sg
45	i	i	CCONJ	C_coord	_	46	cc	_	OrigDep=ConjCoord
46	trepet	trepet	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	44	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:m;n:sg
47	mojih	moj	DET	A_pos_gen_pl_m_-	Case=Gen|Gender=Masc|Number=Plur	48	det	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:m;n:pl
48	neprijatelja	neprijatelj	NOUN	N_com_gen_pl_m	Case=Gen|Gender=Masc|Number=Plur	44	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:m;n:pl|SpaceAfter=No
49	,	,	PUNCT	Z	_	48	punct	_	OrigDep=Ponct
50	čuvar	čuvar	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	39	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:m;n:sg
51	mog	moj	DET	A_pos_gen_sg_m_-	Case=Gen|Gender=Masc|Number=Sing	52	det	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:m;n:sg
52	sna	san	NOUN	N_com_gen_sg_m	Case=Gen|Gender=Masc|Number=Sing	50	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:m;n:sg
53	i	i	CCONJ	C_coord	_	55	cc	_	OrigDep=ConjCoord
54	mog	moj	DET	A_pos_gen_sg_n_-	Case=Gen|Gender=Neut|Number=Sing	55	det	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:n;n:sg
55	tela	telo	NOUN	N_com_gen_sg_n	Case=Gen|Gender=Neut|Number=Sing	52	conj	_	OrigDep=Coord|OrigFeats=c:gen;g:n;n:sg|SpaceAfter=No
56	,	,	PUNCT	Z	_	55	punct	_	OrigDep=Ponct
57	no	no	CCONJ	C_coord	_	61	cc	_	OrigDep=ConjCoord
58	još	još	ADV	Part	_	59	advmod:emph	_	OrigDep=Emph
59	i	i	ADV	Part	_	60	advmod:emph	_	OrigDep=Emph
60	cirkusko	cirkuski	ADJ	A_qual_nom_sg_n_pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	61	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:n;n:sg
61	čudo	čudo	NOUN	N_com_nom_sg_n	Case=Nom|Gender=Neut|Number=Sing	39	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:n;n:sg
62	koje	koji	PRON	P_rel_-_sg_n_nom	Case=Nom|Gender=Neut|Number=Sing	63	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
63	igra	igrati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	61	acl:relcl	_	OrigDep=PredRel|OrigFeats=n:sg;t:pres;r:3
64	na	na	ADP	Prep	_	66	case	_	OrigDep=DepVPrep
65	zadnjim	zadnji	ADJ	A_qual_loc_pl_f_pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	66	amod	_	OrigDep=DepNAdj|OrigFeats=c:loc;g:f;n:pl
66	šapama	šapa	NOUN	N_com_loc_pl_f	Case=Loc|Gender=Fem|Number=Plur	63	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:f;n:pl
67	i	i	CCONJ	C_coord	_	68	cc	_	OrigDep=ConjCoord
68	puši	pušiti	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	63	conj	_	OrigDep=Coord|OrigFeats=n:sg;t:pres;r:3
69	lulu	lula	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	68	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg|SpaceAfter=No
70	!	!	PUNCT	Z	_	69	punct	_	OrigDep=Ponct

~~~


