---
layout: base
title:  'Statistics of case in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `case`

This relation is universal.

3705 nodes (8%) are attached to their parents as `case`.

3702 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42726045883941.

The following 19 pairs of parts of speech are connected with `case`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt> (2713; 73% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt> (511; 14% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (315; 9% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt> (74; 2% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt> (23; 1% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (15; 0% instances), <tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt> (13; 0% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (12; 0% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (9; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-DET.html">DET</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-PART.html">PART</a></tt>-<tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-X.html">X</a></tt>-<tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-X.html">X</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
1	I	i	CCONJ	C_coord	_	0	root	_	OrigDep=Root
2	taj	taj	DET	A_dem_nom_sg_m_-	Case=Nom|Gender=Masc|Number=Sing	4	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
3	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
4	pripev	pripev	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
5	govorio	govoriti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	1	conj	_	OrigDep=Coord|OrigFeats=g:m;n:sg;t:partact|SpaceAfter=No
6	,	,	PUNCT	Z	_	5	punct	_	OrigDep=Ponct
7	naravno	naravno	ADV	Part	_	5	advmod	_	OrigDep=ExtraPred|SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
9	o	o	ADP	Prep	_	10	case	_	OrigDep=ObjIndirPrep
10	ljubavi	ljubav	NOUN	N_com_loc_sg_f	Case=Loc|Gender=Fem|Number=Sing	5	obl:arg	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:f;n:sg|SpaceAfter=No
11	.	.	PUNCT	Z	_	10	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Glava	glava	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:sg
2	joj	on	PRON	P_pers_3_sg_f_dat	Case=Dat|Gender=Fem|Number=Sing|Person=3	4	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:f;n:sg;r:3
3	beše	biti	AUX	V_main_impf_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	OrigDep=Root|OrigFeats=n:sg;t:impf;r:3
4	smežurana	smežuran	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:f;n:sg
5	kao	kao	SCONJ	C_sub	_	6	case	_	OrigDep=Sub
6	orah	orah	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	4	obl	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:m;n:sg
7	bez	bez	ADP	Prep	_	8	case	_	OrigDep=DepNPrep
8	mrezge	mrezga	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	_	OrigDep=Ponct

~~~


