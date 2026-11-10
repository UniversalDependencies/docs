---
layout: base
title:  'Statistics of aux in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `aux`

This relation is universal.

2447 nodes (5%) are attached to their parents as `aux`.

1954 instances of `aux` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9987740089906.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (2188; 89% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (106; 4% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (78; 3% instances), <tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (42; 2% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (16; 1% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="sr_parcolab-pos-DET.html">DET</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	I	i	ADV	Part	_	2	advmod:emph	_	OrigDep=Emph
2	da	da	SCONJ	C_sub	_	4	mark	_	OrigDep=Sub
3	smo	biti	AUX	V_aux_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:1|OrigLemma=jesam
4	imali	imati	VERB	V_main_partact_-_pl_m_-	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	12	advcl	_	OrigDep=PredSub|OrigFeats=g:m;n:pl;t:partact
5	gde	gde	ADV	Adv_indef_-	_	7	advmod	_	OrigDep=DepVAdv
6	da	da	SCONJ	C_sub	_	7	mark	_	OrigDep=Sub
7	pobegnemo	pobeći	VERB	V_main_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:pl;t:pres;r:1|SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
9	ne	ne	PART	Part	Polarity=Neg	12	advmod	_	OrigDep=Neg
10	bismo	biti	AUX	V_aux_aor_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	12	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:aor;r:1
11	to	taj	PRON	P_dem_-_sg_n_acc	Case=Acc|Gender=Neut|Number=Sing	12	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:n;n:sg
12	uradili	uraditi	VERB	V_main_partact_-_pl_m_-	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:pl;t:partact|SpaceAfter=No
13	.	.	PUNCT	Z	_	12	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Nisam	biti	AUX	V_aux_pres_1_sg_-_neg	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1|OrigLemma=jesam
2	više	više	ADV	Adv_gen_pos	Degree=Pos	4	advmod	_	OrigDep=DepVAdv
3	bio	biti	AUX	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	4	cop	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
4	sam	sam	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
5	.	.	PUNCT	Z	_	4	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux	color:blue
1	«	«	PUNCT	Z	_	2	punct	_	OrigDep=Ponct
2	Znam	znati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	ccomp	_	OrigDep=PredRap|OrigFeats=n:sg;t:pres;r:1
3	šta	šta	PRON	P_inter_-_-_-_nom	Case=Nom	8	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
4	će	hteti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3
5	biti	biti	AUX	V_main_inf_-_-_-_-	VerbForm=Inf	8	cop	_	OrigDep=PredPercont|OrigFeats=t:inf
6	u	u	ADP	Prep	_	8	case	_	OrigDep=PredicAdv
7	tom	taj	DET	A_dem_loc_sg_n_-	Case=Loc|Gender=Neut|Number=Sing	8	det	_	OrigDep=DepNAdj|OrigFeats=c:loc;g:n;n:sg
8	pismu	pismo	NOUN	N_com_loc_sg_n	Case=Loc|Gender=Neut|Number=Sing	2	ccomp	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:n;n:sg
9	»	»	PUNCT	Z	_	8	punct	_	OrigDep=Ponct|SpaceAfter=No
10	,	,	PUNCT	Z	_	8	punct	_	OrigDep=Ponct
11	rekla	reći	VERB	V_main_partact_-_sg_f_-	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:f;n:sg;t:partact
12	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
13	i	i	ADV	Part	_	15	advmod:emph	_	OrigDep=Emph
14	ne	ne	PART	Part	Polarity=Neg	15	advmod	_	OrigDep=Neg
15	pocrvenevši	pocrveneti	VERB	V_main_partpast_-_-_-_-	Tense=Past|VerbForm=Conv	11	advcl	_	OrigDep=DepVPart|OrigFeats=t:partpast|SpaceAfter=No
16	.	.	PUNCT	Z	_	15	punct	_	OrigDep=Ponct

~~~


