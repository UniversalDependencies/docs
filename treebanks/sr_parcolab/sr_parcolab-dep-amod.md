---
layout: base
title:  'Statistics of amod in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `amod`

This relation is universal.

2612 nodes (6%) are attached to their parents as `amod`.

2347 instances of `amod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44180704441041.

The following 10 pairs of parts of speech are connected with `amod`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (2508; 96% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (52; 2% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (41; 2% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="sr_parcolab-pos-X.html">X</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Kal	Kal	PROPN	N_prop_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	0	root	_	OrigDep=Root|OrigFeats=c:nom;g:m;n:sg
2	i	i	CCONJ	C_coord	_	4	cc	_	OrigDep=ConjCoord
3	žitejskoe	žitejskoe	ADJ	A_qual_nom_sg_n_pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:n;n:sg
4	more	more	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
5	!	!	PUNCT	Z	_	4	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
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


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	I	i	CCONJ	C_coord	_	6	cc	_	OrigDep=Root
2	oni	onaj	PRON	P_dem_-_pl_m_nom	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:pl
3	koji	koji	PRON	P_rel_-_pl_m_nom	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:pl
4	preživeše	preživeti	VERB	V_main_aor_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	acl:relcl	_	OrigDep=PredRel|OrigFeats=n:pl;t:aor;r:3|SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
6	poželeše	poželeti	VERB	V_main_aor_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	OrigDep=Coord|OrigFeats=n:pl;t:aor;r:3
7	smrt	smrt	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg
8	ili	ili	CCONJ	C_coord	_	9	cc	_	OrigDep=ConjCoord
9	nešto	nešto	PRON	P_indef_-_-_-_acc	Case=Acc	7	conj	_	OrigDep=Coord|OrigFeats=c:acc
10	brže	brz	ADJ	A_qual_acc_sg_n_comp	Case=Acc|Degree=Cmp|Gender=Neut|Number=Sing	9	amod	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:n;n:sg
11	i	i	CCONJ	C_coord	_	12	cc	_	OrigDep=ConjCoord
12	gore	loš	ADJ	A_qual_acc_sg_n_comp	Case=Acc|Degree=Cmp|Gender=Neut|Number=Sing	10	conj	_	OrigDep=Coord|OrigFeats=c:acc;g:n;n:sg|SpaceAfter=No
13	.	.	PUNCT	Z	_	12	punct	_	OrigDep=Ponct

~~~


