---
layout: base
title:  'Statistics of det:numgov in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="sr_parcolab-dep-det.html">det</a></tt>.

5 nodes (0%) are attached to their parents as `det:numgov`.

5 instances of `det:numgov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2.

The following 2 pairs of parts of speech are connected with `det:numgov`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (4; 80% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 det:numgov	color:blue
1	Znate	znati	VERB	V_main_pres_2_pl_-_-	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:pres;r:2
2	li	li	PART	Part	_	1	advmod	_	OrigDep=Interrog|SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	_	OrigDep=Ponct
4	mladiću	mladić	NOUN	N_com_voc_sg_m	Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	OrigDep=DepVCas|OrigFeats=c:voc;g:m;n:sg
5	moj	moj	DET	A_pos_voc_sg_m_-	Case=Voc|Gender=Masc|Number=Sing	4	det	_	OrigDep=DepNAdj|OrigFeats=c:voc;g:m;n:sg|SpaceAfter=No
6	,	,	PUNCT	Z	_	5	punct	_	OrigDep=Ponct
7	koliko	koliko	DET	Adv_inter_-	_	12	det:numgov	_	OrigDep=Suj
8	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
9	od	od	ADP	Prep	_	10	case	_	OrigDep=DepVPrep
10	tada	tada	ADV	Adv_gen_pos	Degree=Pos	11	obl	_	OrigDep=ComplPrep
11	prošlo	proći	VERB	V_main_partact_-_sg_n_-	Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	1	ccomp	_	OrigDep=PredPercont|OrigFeats=g:n;n:sg;t:partact
12	godina	godina	NOUN	N_com_gen_pl_f	Case=Gen|Gender=Fem|Number=Plur	11	nsubj	_	OrigDep=DepAdvCas|OrigFeats=c:gen;g:f;n:pl|SpaceAfter=No
13	?	?	PUNCT	Z	_	12	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det:numgov	color:blue
1	Dvaput	dvaput	ADV	Adv_gen_pos	Degree=Pos	3	advmod	_	OrigDep=DepVAdv
2	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
3	prešao	preći	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
4	Moravu	Morava	PROPN	N_prop_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg|SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
6	jednom	jednom	ADV	Adv_gen_pos	Degree=Pos	7	orphan	_	OrigDep=DepEx_DepVAdv
7	Ibar	Ibar	PROPN	N_prop_acc_sg_m	Case=Acc|Gender=Masc|Number=Sing	3	conj	_	OrigDep=DepEx_ObjDir|OrigFeats=c:acc;g:m;n:sg|SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
9	potom	potom	ADV	Adv_gen_pos	Degree=Pos	11	mark	_	OrigDep=DepEx_DepVAdv
10	nekoliko	nekoliko	DET	Adv_indef_-	_	11	det:numgov	_	OrigDep=DepEx_ObjDir
11	Stupnica	Stupnica	PROPN	N_prop_gen_pl_f	Case=Gen|Gender=Fem|Number=Plur	3	conj	_	OrigDep=DepAdvCas|OrigFeats=c:gen;g:f;n:pl|SpaceAfter=No
12	.	.	PUNCT	Z	_	11	punct	_	OrigDep=Ponct

~~~


