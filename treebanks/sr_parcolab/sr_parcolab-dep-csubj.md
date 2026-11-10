---
layout: base
title:  'Statistics of csubj in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `csubj`

This relation is universal.

9 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (4; 44% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 3 csubj	color:blue
1	Ko	ko	PRON	P_rel_-_-_-_nom	Case=Nom	3	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
2	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	3	expl	_	OrigDep=Ref|OrigFeats=c:acc
3	preturio	preturiti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	16	csubj	_	OrigDep=PredRel|OrigFeats=g:m;n:sg;t:partact
4	(	(	PUNCT	Z	_	3	punct	_	OrigDep=Ponct|SpaceAfter=No
5	okliznula	okliznuti	VERB	V_main_partact_-_sg_f_-	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	3	parataxis	_	OrigDep=Juxt|OrigFeats=g:f;n:sg;t:partact
6	mu	on	PRON	P_pers_3_sg_m_dat	Case=Dat|Gender=Masc|Number=Sing|Person=3	5	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:m;n:sg;r:3
7	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	5	expl	_	OrigDep=Ref|OrigFeats=c:acc
8	noga	noga	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:sg
9	ili	ili	CCONJ	C_coord	_	11	cc	_	OrigDep=ConjCoord
10	ga	on	PRON	P_pers_3_sg_m_acc	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:m;n:sg;r:3
11	pogodilo	pogoditi	VERB	V_main_partact_-_sg_n_-	Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	5	conj	_	OrigDep=Coord|OrigFeats=g:n;n:sg;t:partact
12	tane	tane	NOUN	N_com_nom_sg_n	Case=Nom|Gender=Neut|Number=Sing	11	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg|SpaceAfter=No
13	)	)	PUNCT	Z	_	12	punct	_	OrigDep=Ponct
14	nije	biti	AUX	V_aux_pres_3_sg_-_neg	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	16	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
15	više	više	ADV	Adv_gen_pos	Degree=Pos	16	advmod	_	OrigDep=DepVAdv
16	ustajao	ustajati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact|SpaceAfter=No
17	;	;	PUNCT	Z	_	16	punct	_	OrigDep=Ponct
18	gledali	gledati	VERB	V_main_partact_-_pl_m_-	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	16	parataxis	_	OrigDep=Juxt|OrigFeats=g:m;n:pl;t:partact
19	smo	biti	AUX	V_aux_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	18	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:1|OrigLemma=jesam
20	da	da	SCONJ	C_sub	_	23	mark	_	OrigDep=Sub
21	svi	sav	PRON	P_indef_-_pl_m_nom	Case=Nom|Gender=Masc|Number=Plur	23	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:pl
22	ne	ne	PART	Part	Polarity=Neg	23	advmod	_	OrigDep=Neg
23	padnemo	pasti	VERB	V_main_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	18	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:pl;t:pres;r:1
24	pre	pre	ADP	Prep	_	25	case	_	OrigDep=DepVPrep
25	mraka	mrak	NOUN	N_com_gen_sg_m	Case=Gen|Gender=Masc|Number=Sing	23	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:m;n:sg|SpaceAfter=No
26	.	.	PUNCT	Z	_	25	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Ali	ali	CCONJ	C_coord	_	2	cc	_	OrigDep=Root
2	naivno	naivno	ADJ	A_qual_nom_sg_n_pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:n;n:sg
3	bi	biti	AUX	V_aux_aor_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:aor;r:3
4	bilo	biti	AUX	V_main_partact_-_sg_n_-	Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	2	cop	_	OrigDep=Coord|OrigFeats=g:n;n:sg;t:partact
5	poverovati	poverovati	VERB	V_main_inf_-_-_-_-	VerbForm=Inf	2	csubj	_	OrigDep=Suj|OrigFeats=t:inf
6	da	da	SCONJ	C_sub	_	10	mark	_	OrigDep=Sub
7	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
8	moj	moj	DET	A_pos_nom_sg_m_-	Case=Nom|Gender=Masc|Number=Sing	9	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
9	otac	otac	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
10	ispunjavao	ispunjavati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	5	ccomp	_	OrigDep=PredCompletive|OrigFeats=g:m;n:sg;t:partact
11	svoju	svoj	DET	A_pos_acc_sg_f_-	Case=Acc|Gender=Fem|Number=Sing	12	det	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:f;n:sg
12	sudbinu	sudbina	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg
13	bez	bez	ADP	Prep	_	14	case	_	OrigDep=DepVPrep
14	roptanja	roptanje	NOUN	N_com_gen_sg_n	Case=Gen|Gender=Neut|Number=Sing	10	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:n;n:sg|SpaceAfter=No
15	.	.	PUNCT	Z	_	14	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	Ili	ili	CCONJ	C_coord	_	4	cc	_	OrigDep=Root
2	mu	on	PRON	P_pers_3_sg_m_dat	Case=Dat|Gender=Masc|Number=Sing|Person=3	4	obl	_	OrigDep=DepAdvCas|OrigFeats=c:dat;g:m;n:sg;r:3
3	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	OrigDep=Coord|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
4	svejedno	svejedno	ADV	Adv_gen_pos	Degree=Pos	0	root	_	OrigDep=PredicAdv
5	ko	ko	PRON	P_inter_-_-_-_nom	Case=Nom	4	csubj	_	OrigDep=PredicNom|OrigFeats=c:nom
6	smo	biti	AUX	V_main_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	OrigDep=PredSub|OrigFeats=n:pl;t:pres;r:1|OrigLemma=jesam
7	i	i	CCONJ	C_coord	_	9	cc	_	OrigDep=ConjCoord
8	šta	šta	PRON	P_inter_-_-_-_acc	Case=Acc	9	obj	_	OrigDep=ObjDir|OrigFeats=c:acc
9	radimo	raditi	VERB	V_main_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	conj	_	OrigDep=Coord|OrigFeats=n:pl;t:pres;r:1|SpaceAfter=No
10	?	?	PUNCT	Z	_	9	punct	_	OrigDep=Ponct

~~~


