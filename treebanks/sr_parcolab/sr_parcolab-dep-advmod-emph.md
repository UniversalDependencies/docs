---
layout: base
title:  'Statistics of advmod:emph in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="sr_parcolab-dep-advmod.html">advmod</a></tt>.

602 nodes (1%) are attached to their parents as `advmod:emph`.

579 instances of `advmod:emph` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73421926910299.

The following 14 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (237; 39% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (98; 16% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (80; 13% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (75; 12% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (46; 8% instances), <tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (25; 4% instances), <tt><a href="sr_parcolab-pos-ADP.html">ADP</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (11; 2% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (10; 2% instances), <tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="sr_parcolab-pos-DET.html">DET</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-PART.html">PART</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:emph	color:blue
1	Niko	niko	PRON	P_indef_-_-_-_nom	Case=Nom	3	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
2	ne	ne	PART	Part	Polarity=Neg	3	advmod	_	OrigDep=Neg
3	govori	govoriti	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3
4	ni	ni	ADV	Part	_	5	advmod:emph	_	OrigDep=Emph
5	reči	reč	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	3	obj	_	OrigDep=ObjDir|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advmod:emph	color:blue
1	Da	da	PART	Part	_	6	advmod	_	OrigDep=Interrog
2	li	li	PART	Part	_	1	fixed	_	OrigDep=Polylex
3	ja	ja	PRON	P_pers_1_sg_-_nom	Case=Nom|Number=Sing|Person=1	6	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;n:sg;r:1
4	to	taj	ADV	Part	_	6	advmod:emph	_	OrigDep=Emph
5	samo	samo	ADV	Part	_	6	advmod:emph	_	OrigDep=Emph
6	sanjam	sanjati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:1
7	ili	ili	CCONJ	C_coord	_	8	cc	_	OrigDep=ConjCoord
8	vidim	videti	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	conj	_	OrigDep=Coord|OrigFeats=n:sg;t:pres;r:1
9	ono	onaj	PRON	P_dem_-_sg_n_acc	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:n;n:sg
10	što	što	PRON	P_rel_-_-_-_nom	Case=Nom	12	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
11	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
12	bilo	biti	AUX	V_main_partact_-_sg_n_-	Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	9	acl:relcl	_	OrigDep=PredRel|OrigFeats=g:n;n:sg;t:partact
13	i	i	CCONJ	C_coord	_	16	cc	_	OrigDep=ConjCoord
14	što	što	PRON	P_rel_-_-_-_nom	Case=Nom	16	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
15	će	hteti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3
16	biti	biti	AUX	V_main_inf_-_-_-_-	VerbForm=Inf	12	conj	_	OrigDep=Coord|OrigFeats=t:inf|SpaceAfter=No
17	?	?	PUNCT	Z	_	16	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:emph	color:blue
1	Pričalo	pričati	VERB	V_main_partact_-_sg_n_-	Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:n;n:sg;t:partact
2	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	1	expl	_	OrigDep=Ref|OrigFeats=c:acc
3	još	još	ADV	Adv_gen_pos	Degree=Pos	4	advmod:emph	_	OrigDep=Emph
4	svašta	svašta	PRON	P_indef_-_-_-_nom	Case=Nom	1	nsubj	_	OrigDep=Suj|OrigFeats=c:nom|SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
6	ali	ali	CCONJ	C_coord	_	9	cc	_	OrigDep=ConjCoord
7	ja	ja	PRON	P_pers_1_sg_-_nom	Case=Nom|Number=Sing|Person=1	9	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;n:sg;r:1
8	ne	ne	PART	Part	Polarity=Neg	9	advmod	_	OrigDep=Neg
9	pamtim	pamtiti	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	conj	_	OrigDep=Coord|OrigFeats=n:sg;t:pres;r:1
10	kaljanske	kaljanski	ADJ	A_qual_acc_pl_f_pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:f;n:pl
11	priče	priča	NOUN	N_com_acc_pl_f	Case=Acc|Gender=Fem|Number=Plur	9	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:pl|SpaceAfter=No
12	.	.	PUNCT	Z	_	11	punct	_	OrigDep=Ponct

~~~


