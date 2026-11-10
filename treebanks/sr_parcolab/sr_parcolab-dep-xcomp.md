---
layout: base
title:  'Statistics of xcomp in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `xcomp`

This relation is universal.

135 nodes (0%) are attached to their parents as `xcomp`.

133 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01481481481481.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (44; 33% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (43; 32% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (42; 31% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	To	taj	PRON	P_dem_-_sg_n_nom	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
2	će	hteti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3
3	zauvek	zauvek	ADV	Adv_gen_pos	Degree=Pos	4	advmod	_	OrigDep=DepVAdv
4	ostati	ostati	VERB	V_main_inf_-_-_-_-	VerbForm=Inf	0	root	_	OrigDep=Root|OrigFeats=t:inf
5	tajna	tajna	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	4	xcomp	_	OrigDep=PredicComplSuj|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 xcomp	color:blue
1	Ne	ne	PART	Part	Polarity=Neg	2	advmod	_	OrigDep=Neg
2	zvao	zvati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
3	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	2	expl	_	OrigDep=Ref|OrigFeats=c:acc
4	ja	ja	PRON	P_pers_1_sg_-_nom	Case=Nom|Number=Sing|Person=1	2	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;n:sg;r:1
5	kako	kako	ADV	Adv_rel_-	_	7	advmod	_	OrigDep=DepVAdv
6	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	7	expl	_	OrigDep=Ref|OrigFeats=c:acc
7	zovem	zvati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	xcomp	_	OrigDep=PredRel|OrigFeats=n:sg;t:pres;r:1|SpaceAfter=No
8	!	!	PUNCT	Z	_	7	punct	_	OrigDep=Ponct

~~~


