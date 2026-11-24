---
layout: base
title:  'Statistics of nummod:gov in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="sr_parcolab-dep-nummod.html">nummod</a></tt>.

58 nodes (0%) are attached to their parents as `nummod:gov`.

58 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31034482758621.

The following 1 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (58; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod:gov	color:blue
1	Imaju	imati	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:pres;r:3
2	dva	dva	NUM	Num_card_m_pl_acc	Case=Acc|Gender=Masc|Number=Plur	3	nummod:gov	_	OrigDep=ObjDir|OrigFeats=c:acc;g:m;n:pl
3	lica	lice	NOUN	N_com_gen_sg_n	Case=Gen|Gender=Neut|Number=Sing	1	obj	_	OrigDep=ComplNum|OrigFeats=c:gen;g:n;n:sg
4	i	i	CCONJ	C_coord	_	6	cc	_	OrigDep=ConjCoord
5	dve	dva	NUM	Num_card_f_pl_-	Gender=Fem|Number=Plur	6	nummod:gov	_	OrigDep=Coord|OrigFeats=g:f;n:pl
6	duše	duša	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	2	conj	_	OrigDep=ComplNum|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
7	,	,	PUNCT	Z	_	6	punct	_	OrigDep=Ponct
8	a	a	CCONJ	C_coord	_	12	cc	_	OrigDep=ConjCoord
9	tela	telo	NOUN	N_com_nom_pl_n	Case=Nom|Gender=Neut|Number=Plur	12	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:pl
10	su	biti	AUX	V_aux_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:3|OrigLemma=jesam
11	im	oni	PRON	P_pers_3_pl_m_dat	Case=Dat|Gender=Masc|Number=Plur|Person=3	12	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:m;n:pl;r:3
12	obeležena	obeležiti	VERB	V_main_partpass_-_pl_n_-	Gender=Neut|Number=Plur|Tense=Past|VerbForm=Conv	1	conj	_	OrigDep=Coord|OrigFeats=g:n;n:pl;t:partpass|SpaceAfter=No
13	.	.	PUNCT	Z	_	12	punct	_	OrigDep=Ponct

~~~


