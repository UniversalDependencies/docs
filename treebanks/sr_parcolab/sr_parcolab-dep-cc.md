---
layout: base
title:  'Statistics of cc in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `cc`

This relation is universal.

2219 nodes (5%) are attached to their parents as `cc`.

2219 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49481748535376.

The following 18 pairs of parts of speech are connected with `cc`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (1012; 46% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (714; 32% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (310; 14% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (63; 3% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (57; 3% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (21; 1% instances), <tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (10; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (8; 0% instances), <tt><a href="sr_parcolab-pos-DET.html">DET</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Ljudi	ljudi	NOUN	N_com_nom_pl_m	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:pl
2	postajahu	postajati	VERB	V_main_impf_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:impf;r:3
3	sve	sve	ADV	Part	_	4	advmod:emph	_	OrigDep=Emph
4	brojniji	brojan	ADJ	A_qual_nom_pl_m_comp	Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	2	xcomp	_	OrigDep=PredicComplSuj|OrigFeats=c:nom;g:m;n:pl
5	i	i	CCONJ	C_coord	_	6	cc	_	OrigDep=ConjCoord
6	pokvariše	pokvariti	VERB	V_main_aor_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	OrigDep=Coord|OrigFeats=n:pl;t:aor;r:3
7	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	6	expl	_	OrigDep=Ref|OrigFeats=c:acc
8	vrlo	vrlo	PART	Part	_	6	advmod	_	OrigDep=DepVAdv|SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	Kal	Kal	PROPN	N_prop_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	0	root	_	OrigDep=Root|OrigFeats=c:nom;g:m;n:sg
2	i	i	CCONJ	C_coord	_	4	cc	_	OrigDep=ConjCoord
3	žitejskoe	žitejskoe	ADJ	A_qual_nom_sg_n_pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:n;n:sg
4	more	more	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
5	!	!	PUNCT	Z	_	4	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	I	i	CCONJ	C_coord	_	0	root	_	OrigDep=Root
2	ja	ja	PRON	P_pers_1_sg_-_nom	Case=Nom|Number=Sing|Person=1	4	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;n:sg;r:1
3	sam	biti	AUX	V_aux_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1|OrigLemma=jesam
4	izabrao	izabrati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	1	conj	_	OrigDep=Coord|OrigFeats=g:m;n:sg;t:partact
5	sigurniji	sigurniji	ADJ	A_qual_acc_sg_m_comp	Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing	4	obj	_	OrigDep=DepEx_DepNAdj|OrigFeats=c:acc;g:m;n:sg
6	i	i	CCONJ	C_coord	_	7	cc	_	OrigDep=ConjCoord
7	kraći	kraći	ADJ	A_qual_acc_sg_m_comp	Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing	5	conj	_	OrigDep=Coord|OrigFeats=c:acc;g:m;n:sg|SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	OrigDep=Ponct

~~~


