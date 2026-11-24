---
layout: base
title:  'Statistics of discourse in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `discourse`

This relation is universal.

6 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.16666666666667.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (2; 33% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PART.html">PART</a></tt> (2; 33% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (1; 17% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 discourse	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 discourse	color:blue
1	(	(	PUNCT	Z	_	12	punct	_	OrigDep=Ponct|SpaceAfter=No
2	Eto	eto	PART	Part	_	12	discourse	_	OrigDep=Cit|SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	_	OrigDep=Ponct
4	pomislih	pomisliti	VERB	V_main_aor_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	12	parataxis	_	OrigDep=Root|OrigFeats=n:sg;t:aor;r:1
5	u	u	ADP	Prep	_	6	case	_	OrigDep=DepVPrep
6	sebi	se	PRON	P_ref_-_-_-_loc	Case=Loc	4	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc|SpaceAfter=No
7	,	,	PUNCT	Z	_	6	punct	_	OrigDep=Ponct
8	eto	eto	PART	Part	_	12	discourse	_	OrigDep=CoordF
9	kako	kako	ADV	Adv_gen_pos	Degree=Pos	12	mark	_	OrigDep=Sub
10	tvoj	tvoj	DET	A_pos_nom_sg_m_-	Case=Nom|Gender=Masc|Number=Sing	11	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
11	otac	otac	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
12	šalje	slati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=PredSub|OrigFeats=n:sg;t:pres;r:3
13	poruke	poruka	NOUN	N_com_acc_pl_f	Case=Acc|Gender=Fem|Number=Plur	12	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:pl
14	Morzeom	Morze	PROPN	N_prop_ins_sg_m	Case=Ins|Gender=Masc|Number=Sing	12	obl	_	OrigDep=DepVCas|OrigFeats=c:ins;g:m;n:sg|SpaceAfter=No
15	.	.	PUNCT	Z	_	14	punct	_	OrigDep=Ponct|SpaceAfter=No
16	)	)	PUNCT	Z	_	14	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 40 discourse	color:blue
1	On	on	PRON	P_pers_3_sg_m_nom	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg;r:3
2	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
3	hteo	hteti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
4	da	da	SCONJ	C_sub	_	5	mark	_	OrigDep=Sub
5	da	dati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:3
6	svakome	svako	PRON	P_indef_-_-_-_dat	Case=Dat	5	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat
7	do	do	ADP	Prep	_	8	case	_	OrigDep=DepVPrep
8	znanja	znanje	NOUN	N_com_gen_sg_n	Case=Gen|Gender=Neut|Number=Sing	5	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:n;n:sg
9	da	da	SCONJ	C_sub	_	12	mark	_	OrigDep=Sub
10	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
11	on	on	PRON	P_pers_3_sg_m_nom	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg;r:3
12	Žrtva	žrtva	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	5	ccomp	_	OrigDep=PredicNom|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
13	,	,	PUNCT	Z	_	12	punct	_	OrigDep=Ponct
14	da	da	SCONJ	C_sub	_	17	mark	_	OrigDep=Coord
15	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
16	on	on	PRON	P_pers_3_sg_m_nom	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg;r:3
17	taj	taj	PRON	P_dem_-_sg_m_nom	Case=Nom|Gender=Masc|Number=Sing	12	conj	_	OrigDep=PredicNom|OrigFeats=c:nom;g:m;n:sg
18	koji	koji	PRON	P_rel_-_sg_m_nom	Case=Nom|Gender=Masc|Number=Sing	20	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
19	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	20	expl	_	OrigDep=Ref|OrigFeats=c:acc
20	žrtvuje	žrtvovati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	acl:relcl	_	OrigDep=PredRel|OrigFeats=n:sg;t:pres;r:3|SpaceAfter=No
21	,	,	PUNCT	Z	_	20	punct	_	OrigDep=Ponct
22	taj	taj	PRON	P_dem_-_sg_m_nom	Case=Nom|Gender=Masc|Number=Sing	17	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:m;n:sg
23	kome	koji	PRON	P_rel_-_sg_m_dat	Case=Dat|Gender=Masc|Number=Sing	25	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:m;n:sg
24	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
25	pisano	pisati	VERB	V_main_partpass_-_sg_n_-	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Conv	22	acl:relcl	_	OrigDep=PredRel|OrigFeats=g:n;n:sg;t:partpass
26	da	da	SCONJ	C_sub	_	28	mark	_	OrigDep=Sub
27	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	28	expl	_	OrigDep=Ref|OrigFeats=c:acc
28	žrtvuje	žrtvovati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:3|SpaceAfter=No
29	,	,	PUNCT	Z	_	28	punct	_	OrigDep=Ponct
30	i	i	CCONJ	C_coord	_	31	cc	_	OrigDep=ConjCoord
31	hteo	hteti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	3	conj	_	OrigDep=Coord|OrigFeats=g:m;n:sg;t:partact
32	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	31	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
33	da	da	SCONJ	C_sub	_	36	mark	_	OrigDep=Sub
34	svi	sav	PRON	P_indef_-_pl_m_nom	Case=Nom|Gender=Masc|Number=Plur	36	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:pl
35	to	taj	PRON	P_dem_-_sg_n_acc	Case=Acc|Gender=Neut|Number=Sing	36	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:n;n:sg
36	cene	ceniti	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	31	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:pl;t:pres;r:3
37	i	i	CCONJ	C_coord	_	41	cc	_	OrigDep=ConjCoord
38	da	da	SCONJ	C_sub	_	41	mark	_	OrigDep=Coord
39	mu	on	PRON	P_pers_3_sg_m_dat	Case=Dat|Gender=Masc|Number=Sing|Person=3	41	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:m;n:sg;r:3
40	dakle	dakle	ADV	Part	_	41	discourse	_	OrigDep=ExtraPred
41	prilaze	prilaziti	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	36	conj	_	OrigDep=PredSub|OrigFeats=n:pl;t:pres;r:3
42	kao	kao	SCONJ	C_sub	_	43	case	_	OrigDep=Sub
43	Žrtvovanom	žrtvovani	NOUN	N_com_dat_sg_m	Case=Dat|Gender=Masc|Number=Sing	41	obl	_	OrigDep=DepEx_DepVCas|OrigFeats=c:dat;g:m;n:sg|SpaceAfter=No
44	.	.	PUNCT	Z	_	43	punct	_	OrigDep=Ponct

~~~


