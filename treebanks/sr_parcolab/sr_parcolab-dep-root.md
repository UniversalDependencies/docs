---
layout: base
title:  'Statistics of root in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `root`

This relation is universal.

1747 nodes (4%) are attached to their parents as `root`.

1747 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.32627361190612.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1449; 83% instances), -<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (107; 6% instances), -<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (93; 5% instances), -<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (21; 1% instances), -<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (19; 1% instances), -<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (16; 1% instances), -<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (14; 1% instances), -<tt><a href="sr_parcolab-pos-PART.html">PART</a></tt> (10; 1% instances), -<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), -<tt><a href="sr_parcolab-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), -<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (3; 0% instances), -<tt><a href="sr_parcolab-pos-X.html">X</a></tt> (3; 0% instances), -<tt><a href="sr_parcolab-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Toliko	toliko	ADV	Adv_gen_pos	Degree=Pos	2	advmod	_	OrigDep=DepVAdv
2	znam	znati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:1|SpaceAfter=No
3	!	!	PUNCT	Z	_	2	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Bili	biti	AUX	V_main_partact_-_pl_m_-	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	3	cop	_	OrigDep=Root|OrigFeats=g:m;n:pl;t:partact
2	smo	biti	AUX	V_aux_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:1|OrigLemma=jesam
3	čuvari	čuvar	NOUN	N_com_nom_pl_m	Case=Nom|Gender=Masc|Number=Plur	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:m;n:pl
4	blaga	blago	NOUN	N_com_gen_sg_n	Case=Gen|Gender=Neut|Number=Sing	3	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:n;n:sg
5	koje	koji	PRON	P_rel_-_sg_n_acc	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:n;n:sg
6	nismo	biti	AUX	V_aux_pres_1_pl_-_neg	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:1|OrigLemma=jesam
7	smeli	smeti	VERB	V_main_partact_-_pl_m_-	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	4	acl:relcl	_	OrigDep=PredRel|OrigFeats=g:m;n:pl;t:partact
8	da	da	SCONJ	C_sub	_	9	mark	_	OrigDep=Sub
9	taknemo	taknuti	VERB	V_main_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:pl;t:pres;r:1
10	jer	jer	SCONJ	C_sub	_	13	mark	_	OrigDep=Sub
11	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
12	bilo	biti	AUX	V_main_partact_-_sg_n_-	Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	13	cop	_	OrigDep=PredSub|OrigFeats=g:n;n:sg;t:partact
13	božje	Božji	ADJ	A_qual_nom_sg_n_pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	7	advcl	_	OrigDep=PredicNom|OrigFeats=c:nom;g:n;n:sg|SpaceAfter=No
14	.	.	PUNCT	Z	_	13	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Nisam	biti	AUX	V_aux_pres_1_sg_-_neg	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:1|OrigLemma=jesam
2	više	više	ADV	Adv_gen_pos	Degree=Pos	4	advmod	_	OrigDep=DepVAdv
3	bio	biti	AUX	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	4	cop	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
4	sam	sam	ADJ	A_qual_nom_sg_m_pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
5	.	.	PUNCT	Z	_	4	punct	_	OrigDep=Ponct

~~~


