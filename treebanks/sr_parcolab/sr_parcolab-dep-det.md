---
layout: base
title:  'Statistics of det in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="sr_parcolab-dep-det-numgov.html">det:numgov</a></tt>.

1821 nodes (4%) are attached to their parents as `det`.

1808 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44261394838001.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (1750; 96% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (41; 2% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (20; 1% instances), <tt><a href="sr_parcolab-pos-X.html">X</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 det	color:blue
1	Kad	kada	SCONJ	C_sub	_	3	mark	_	OrigDep=Sub
2	bismo	biti	AUX	V_aux_aor_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	3	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:aor;r:1
3	ispričali	ispričati	VERB	V_main_partact_-_pl_m_-	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	13	advcl	_	OrigDep=PredSub|OrigFeats=g:m;n:pl;t:partact
4	šta	šta	PRON	P_inter_-_-_-_acc	Case=Acc	8	obj	_	OrigDep=ObjDir|OrigFeats=c:acc
5	su	biti	AUX	V_aux_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:3|OrigLemma=jesam
6	nam	mi	PRON	P_pers_1_pl_-_dat	Case=Dat|Number=Plur|Person=1	8	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;n:pl;r:1
7	sve	sve	DET	A_indef_acc_sg_n_-	Case=Acc|Gender=Neut|Number=Sing	4	det	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:n;n:sg
8	radili	raditi	VERB	V_main_partact_-_pl_m_-	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	3	ccomp	_	OrigDep=PredPercont|OrigFeats=g:m;n:pl;t:partact|SpaceAfter=No
9	,	,	PUNCT	Z	_	8	punct	_	OrigDep=Ponct
10	niko	niko	PRON	P_indef_-_-_-_nom	Case=Nom	13	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
11	ne	ne	PART	Part	Polarity=Neg	13	advmod	_	OrigDep=Neg
12	bi	biti	AUX	V_aux_aor_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:aor;r:3
13	poverovao	poverovati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact|SpaceAfter=No
14	.	.	PUNCT	Z	_	13	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	«	«	PUNCT	Z	_	8	punct	_	OrigDep=Ponct
2	Draga	drag	ADJ	A_qual_voc_sg_f_pos	Case=Voc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	OrigDep=DepNAdj|OrigFeats=c:voc;g:f;n:sg
3	moja	moj	DET	A_pos_voc_sg_f_-	Case=Voc|Gender=Fem|Number=Sing	4	det	_	OrigDep=DepNAdj|OrigFeats=c:voc;g:f;n:sg
4	Maruseta	Maruseta	PROPN	N_prop_voc_sg_f	Case=Voc|Gender=Fem|Number=Sing	8	vocative	_	OrigDep=DepVCas|OrigFeats=c:voc;g:f;n:sg|SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
6	tu	tu	ADV	Adv_gen_pos	Degree=Pos	8	advmod	_	OrigDep=DepVAdv
7	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	8	expl	_	OrigDep=Ref|OrigFeats=c:acc
8	gaji	gajiti	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3
9	jasmin	jasmin	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
10	kao	kao	SCONJ	C_sub	_	11	case	_	OrigDep=Sub
11	grašak	grašak	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	8	obl	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
12	.	.	PUNCT	Z	_	11	punct	_	OrigDep=Ponct

~~~


