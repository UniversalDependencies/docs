---
layout: base
title:  'Statistics of acl:relcl in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sr_parcolab-dep-acl.html">acl</a></tt>.

667 nodes (1%) are attached to their parents as `acl:relcl`.

662 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.60569715142429.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (527; 79% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (87; 13% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-X.html">X</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl:relcl	color:blue
1	Te	taj	DET	A_dem_nom_pl_f_-	Case=Nom|Gender=Fem|Number=Plur	4	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:pl
2	su	biti	AUX	V_aux_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:3|OrigLemma=jesam
3	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	5	expl	_	OrigDep=Ref|OrigFeats=c:acc
4	večeri	večer	NOUN	N_com_nom_pl_f	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:pl
5	rodile	roditi	VERB	V_main_partact_-_pl_f_-	Gender=Fem|Number=Plur|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:f;n:pl;t:partact
6	iz	iz	ADP	Prep	_	7	case	_	OrigDep=DepVPrep
7	ćutanja	ćutanje	NOUN	N_com_gen_sg_n	Case=Gen|Gender=Neut|Number=Sing	5	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:n;n:sg|SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
9	odakle	odakle	ADV	Adv_rel_-	_	11	advmod	_	OrigDep=DepVAdv
10	sve	sav	PRON	P_indef_-_sg_n_nom	Case=Nom|Gender=Neut|Number=Sing	11	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
11	potiče	poticati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	OrigDep=PredRel|OrigFeats=n:sg;t:pres;r:3|SpaceAfter=No
12	.	.	PUNCT	Z	_	11	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	I	i	CCONJ	C_coord	_	0	root	_	OrigDep=Root
2	verujem	verovati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	conj	_	OrigDep=Coord|OrigFeats=n:sg;t:pres;r:1
3	u	u	ADP	Prep	_	4	case	_	OrigDep=DepVPrep
4	nešto	nešto	PRON	P_indef_-_-_-_acc	Case=Acc	2	obl	_	OrigDep=ComplPrep|OrigFeats=c:acc
5	što	što	PRON	P_rel_-_-_-_acc	Case=Acc	9	obj	_	OrigDep=ObjDir|OrigFeats=c:acc
6	bih	biti	AUX	V_aux_aor_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	7	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:aor;r:1
7	morao	morati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	4	acl:relcl	_	OrigDep=PredRel|OrigFeats=g:m;n:sg;t:partact
8	da	da	SCONJ	C_sub	_	9	mark	_	OrigDep=Sub
9	poričem	poricati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:1|SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 acl:relcl	color:blue
1	Oblaci	oblak	NOUN	N_com_nom_pl_m	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:pl
2	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	3	expl	_	OrigDep=Ref|OrigFeats=c:acc
3	raziđoše	razići	VERB	V_main_aor_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:aor;r:3|SpaceAfter=No
4	,	,	PUNCT	Z	_	3	punct	_	OrigDep=Ponct
5	mlečna	mlečan	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
6	svetlost	svetlost	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:sg
7	(	(	PUNCT	Z	_	6	punct	_	OrigDep=Ponct|SpaceAfter=No
8	koja	koji	PRON	P_rel_-_sg_f_nom	Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:sg
9	kao	kao	SCONJ	C_sub	_	13	mark	_	OrigDep=Sub
10	da	da	SCONJ	C_sub	_	9	fixed	_	OrigDep=Polylex
11	ne	ne	PART	Part	Polarity=Neg	13	advmod	_	OrigDep=Neg
12	beše	biti	AUX	V_main_impf_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	OrigDep=PredSub|OrigFeats=n:sg;t:impf;r:3
13	sunčeva	sunčev	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	acl:relcl	_	OrigDep=PredicNom|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
14	)	)	PUNCT	Z	_	13	punct	_	OrigDep=Ponct
15	obasja	obasjati	VERB	V_main_aor_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	OrigDep=Coord|OrigFeats=n:sg;t:aor;r:3
16	nam	mi	PRON	P_pers_1_pl_-_dat	Case=Dat|Number=Plur|Person=1	15	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;n:pl;r:1
17	lica	lice	NOUN	N_com_acc_pl_n	Case=Acc|Gender=Neut|Number=Plur	15	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:n;n:pl|SpaceAfter=No
18	,	,	PUNCT	Z	_	17	punct	_	OrigDep=Ponct
19	već	već	ADV	Adv_gen_pos	Degree=Pos	20	advmod	_	OrigDep=DepAdjAdv
20	mučenička	mučenički	ADJ	A_qual_acc_sg_f_pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:f;n:sg|SpaceAfter=No
21	.	.	PUNCT	Z	_	20	punct	_	OrigDep=Ponct

~~~


