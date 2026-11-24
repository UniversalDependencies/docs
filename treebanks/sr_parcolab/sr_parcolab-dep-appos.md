---
layout: base
title:  'Statistics of appos in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `appos`

This relation is universal.

160 nodes (0%) are attached to their parents as `appos`.

160 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.19375.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (104; 65% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (18; 11% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (13; 8% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (8; 5% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-X.html">X</a></tt> (5; 3% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 appos	color:blue
1	Dingo	Dingo	PROPN	N_prop_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
2	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
3	oduvek	oduvek	ADV	Adv_gen_pos	Degree=Pos	4	advmod	_	OrigDep=DepVAdv
4	imao	imati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
5	dva	dva	NUM	Num_card_m_pl_-	Gender=Masc|Number=Plur	6	nummod:gov	_	OrigDep=DepNAdj|OrigFeats=g:m;n:pl
6	gospodara	gospodar	NOUN	N_com_gen_sg_m	Case=Gen|Gender=Masc|Number=Sing	4	obj	_	OrigDep=ObjDir|OrigFeats=c:gen;g:m;n:sg|SpaceAfter=No
7	:	:	PUNCT	Z	_	6	punct	_	OrigDep=Ponct
8	naše	naš	DET	A_pos_acc_pl_m_-	Case=Acc|Gender=Masc|Number=Plur	9	det	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:m;n:pl
9	rođake	rođak	NOUN	N_com_acc_pl_m	Case=Acc|Gender=Masc|Number=Plur	6	appos	_	OrigDep=Ap|OrigFeats=c:acc;g:m;n:pl
10	i	i	CCONJ	C_coord	_	11	cc	_	OrigDep=ConjCoord
11	mene	ja	PRON	P_pers_1_sg_-_acc	Case=Acc|Number=Sing|Person=1	9	conj	_	OrigDep=Coord|OrigFeats=c:acc;n:sg;r:1|SpaceAfter=No
12	.	.	PUNCT	Z	_	11	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 appos	color:blue
1	Još	još	ADV	Part	_	3	advmod:emph	_	OrigDep=Emph
2	samo	samo	ADV	Adv_gen_pos	Degree=Pos	3	advmod:emph	_	OrigDep=Emph
3	ovo	ovaj	PRON	P_dem_-_sg_n_acc	Case=Acc|Gender=Neut|Number=Sing	0	root	_	OrigDep=Root|OrigFeats=c:acc;g:n;n:sg|SpaceAfter=No
4	,	,	PUNCT	Z	_	3	punct	_	OrigDep=Ponct
5	zaista	zaista	ADV	Part	_	7	advmod	_	OrigDep=ExtraPred
6	pravi	pravi	ADJ	A_qual_acc_sg_m_pos	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:m;n:sg
7	kraj	kraj	NOUN	N_com_acc_sg_m	Case=Acc|Gender=Masc|Number=Sing	3	appos	_	OrigDep=Ap|OrigFeats=c:acc;g:m;n:sg|SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 appos	color:blue
1	Počeše	početi	VERB	V_main_aor_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:aor;r:3
2	da	da	SCONJ	C_sub	_	3	mark	_	OrigDep=Sub
3	umiru	umirati	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:pl;t:pres;r:3
4	momci	momak	NOUN	N_com_nom_pl_m	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:pl
5	i	i	CCONJ	C_coord	_	6	cc	_	OrigDep=ConjCoord
6	devojke	devojka	NOUN	N_com_nom_pl_f	Case=Nom|Gender=Fem|Number=Plur	4	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:f;n:pl|SpaceAfter=No
7	,	,	PUNCT	Z	_	6	punct	_	OrigDep=Ponct
8	oni	onaj	PRON	P_dem_-_pl_m_nom	Case=Nom|Gender=Masc|Number=Plur	4	appos	_	OrigDep=Ap|OrigFeats=c:nom;g:m;n:pl
9	što	što	SCONJ	P_rel_-_-_-_nom	_	14	mark	_	OrigDep=Sub|OrigFeats=c:nom
10	im	oni	PRON	P_pers_3_pl_m_dat	Case=Dat|Gender=Masc|Number=Plur|Person=3	14	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:m;n:pl;r:3
11	niko	niko	PRON	P_indef_-_-_-_nom	Case=Nom	14	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
12	ništa	ništa	PRON	P_indef_-_-_-_acc	Case=Acc	14	obj	_	OrigDep=ObjDir|OrigFeats=c:acc
13	ne	ne	PART	Part	Polarity=Neg	14	advmod	_	OrigDep=Neg
14	može	moći	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	OrigDep=PredSub|OrigFeats=n:sg;t:pres;r:3|SpaceAfter=No
15	,	,	PUNCT	Z	_	14	punct	_	OrigDep=Ponct
16	što	što	PRON	P_rel_-_-_-_nom	Case=Nom	18	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
17	sve	sav	PRON	P_indef_-_sg_n_acc	Case=Acc|Gender=Neut|Number=Sing	18	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:n;n:sg
18	mogu	moći	VERB	V_main_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	OrigDep=PredRel|OrigFeats=n:pl;t:pres;r:3|SpaceAfter=No
19	.	.	PUNCT	Z	_	18	punct	_	OrigDep=Ponct

~~~


