---
layout: base
title:  'Statistics of reparandum in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `reparandum`

This relation is universal.

2 nodes (0%) are attached to their parents as `reparandum`.

2 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 17.

The following 2 pairs of parts of speech are connected with `reparandum`: <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 reparandum	color:blue
1	godinu	godina	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	10	reparandum	_	OrigDep=Juxt|OrigFeats=c:acc;g:f;n:sg|SpaceAfter=No
2	,	,	PUNCT	Z	_	1	punct	_	OrigDep=Ponct
3	mada	mada	SCONJ	C_sub	_	10	mark	_	OrigDep=Root
4	su	biti	AUX	V_aux_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:3|OrigLemma=jesam
5	i	i	ADV	Part	_	6	advmod:emph	_	OrigDep=Emph
6	mnoge	mnogi	NOUN	N_com_nom_pl_f	Case=Nom|Gender=Fem|Number=Plur	10	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:pl
7	pre	pre	ADP	Prep	_	8	case	_	OrigDep=DepNPrep
8	nje	on	PRON	P_pers_3_sg_f_gen	Case=Gen|Gender=Fem|Number=Sing|Person=3	6	nmod	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:f;n:sg;r:3
9	bile	biti	AUX	V_main_partact_-_pl_f_-	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Act	10	cop	_	OrigDep=PredSub|OrigFeats=g:f;n:pl;t:partact
10	rđave	rđav	ADJ	A_qual_nom_pl_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:f;n:pl|SpaceAfter=No
11	;	;	PUNCT	Z	_	10	punct	_	OrigDep=Ponct
12	bolje	bolja	NOUN	N_com_nom_pl_f	Case=Nom|Gender=Fem|Number=Plur	13	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:pl
13	idu	ići	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	parataxis	_	OrigDep=Juxt|OrigFeats=n:pl;t:pres;r:3
14	na	na	ADP	Prep	_	16	case	_	OrigDep=DepVPrep
15	druga	drugi	ADJ	A_qual_acc_pl_n_pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	16	amod	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:n;n:pl
16	mesta	mesto	NOUN	N_com_acc_pl_n	Case=Acc|Gender=Neut|Number=Plur	13	obl	_	OrigDep=ComplPrep|OrigFeats=c:acc;g:n;n:pl|SpaceAfter=No
17	.	.	PUNCT	Z	_	16	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 3 reparandum	color:blue
1	Mislio	misliti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
2	sam	biti	AUX	V_aux_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1|OrigLemma=jesam
3	da	da	SCONJ	C_sub	_	28	reparandum	_	OrigDep=ObjDir
4	kada	kada	SCONJ	C_sub	_	6	mark	_	OrigDep=Sub
5	već	već	PART	Part	_	6	advmod	_	OrigDep=DepVAdv
6	znam	znati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	31	advcl	_	OrigDep=PredSub|OrigFeats=n:sg;t:pres;r:1
7	tajnu	tajna	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg
8	smrti	smrt	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
9	,	,	PUNCT	Z	_	8	punct	_	OrigDep=Ponct
10	to	taj	PRON	P_dem_-_sg_n_nom	Case=Nom|ExtPos=ADV|Gender=Neut|Number=Sing	13	advmod	_	OrigDep=ConjCoord|OrigFeats=c:nom;g:n;n:sg
11	jest	jesam	PART	Part	_	10	fixed	_	OrigDep=Polylex
12	samu	sam	ADJ	A_qual_acc_sg_f_pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:f;n:sg
13	činjenicu	činjenica	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	7	conj	_	OrigDep=Coord|OrigFeats=c:acc;g:f;n:sg
14	postojanja	postojanje	NOUN	N_com_gen_sg_n	Case=Gen|Gender=Neut|Number=Sing	13	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:n;n:sg
15	smrti	smrt	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:sg
16	(	(	PUNCT	Z	_	15	punct	_	OrigDep=Ponct|SpaceAfter=No
17	to	taj	PRON	P_dem_-_sg_n_acc	Case=Acc|Gender=Neut|Number=Sing	19	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:n;n:sg
18	sam	biti	AUX	V_aux_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	19	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1|OrigLemma=jesam
19	nazivao	nazivati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	13	parataxis	_	OrigDep=Juxt|OrigFeats=g:m;n:sg;t:partact
20	u	u	ADP	Prep	_	21	case	_	OrigDep=DepVPrep
21	sebi	sebe	PRON	P_ref_-_-_-_loc	Case=Loc	19	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc
22	«	«	PUNCT	Z	_	21	punct	_	OrigDep=Ponct
23	tajnom	tajna	NOUN	N_com_ins_sg_f	Case=Ins|Gender=Fem|Number=Sing	19	xcomp	_	OrigDep=PredicComplObj|OrigFeats=c:ins;g:f;n:sg
24	smrti	smrt	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:sg
25	»	»	PUNCT	Z	_	24	punct	_	OrigDep=Ponct|SpaceAfter=No
26	)	)	PUNCT	Z	_	24	punct	_	OrigDep=Ponct|SpaceAfter=No
27	,	,	PUNCT	Z	_	24	punct	_	OrigDep=Ponct
28	da	da	SCONJ	C_sub	_	31	mark	_	OrigDep=Coord
29	sam	biti	AUX	V_aux_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	31	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1|OrigLemma=jesam
30	time	taj	PRON	P_dem_-_sg_n_ins	Case=Ins|Gender=Neut|Number=Sing	31	obl	_	OrigDep=DepVCas|OrigFeats=c:ins;g:n;n:sg
31	otkrio	otkriti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	1	ccomp	_	OrigDep=PredSub|OrigFeats=g:m;n:sg;t:partact
32	i	i	ADV	Part	_	33	advmod:emph	_	OrigDep=Emph
33	tajnu	tajna	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	31	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg
34	besmrtnosti	besmrtnost	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	33	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
35	.	.	PUNCT	Z	_	34	punct	_	OrigDep=Ponct

~~~


