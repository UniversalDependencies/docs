---
layout: base
title:  'Statistics of obj in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `obj`

This relation is universal.

1979 nodes (4%) are attached to their parents as `obj`.

1291 instances of `obj` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.12430520464881.

The following 9 pairs of parts of speech are connected with `obj`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1141; 58% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (790; 40% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (22; 1% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (16; 1% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Niko	niko	PRON	P_indef_-_-_-_nom	Case=Nom	3	nsubj	_	OrigDep=Suj|OrigFeats=c:nom
2	ne	ne	PART	Part	Polarity=Neg	3	advmod	_	OrigDep=Neg
3	govori	govoriti	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3
4	ni	ni	ADV	Part	_	5	advmod:emph	_	OrigDep=Emph
5	reči	reč	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	3	obj	_	OrigDep=ObjDir|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obj	color:blue
1	Mislim	misliti	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:1
2	da	da	SCONJ	C_sub	_	4	mark	_	OrigDep=Sub
3	nije	biti	AUX	V_main_pres_3_sg_-_neg	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	cop	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
4	potrebno	potreban	ADJ	A_qual_nom_sg_n_pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	1	ccomp	_	OrigDep=PredicNom|OrigFeats=c:nom;g:n;n:sg
5	da	da	SCONJ	C_sub	_	9	mark	_	OrigDep=Sub
6	ti	ti	PRON	P_pers_2_sg_-_dat	Case=Dat|Number=Sing|Person=2	9	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;n:sg;r:2
7	išta	išta	PRON	P_indef_-_-_-_acc	Case=Acc	9	obj	_	OrigDep=ObjDir|OrigFeats=c:acc
8	više	mnogo	ADV	Adv_gen_pos	Degree=Pos	9	advmod	_	OrigDep=DepVAdv
9	kažem	kazati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	ccomp	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:1|SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Bezbroj	bezbroj	ADV	Adv_gen_pos	Degree=Pos	3	obj	_	OrigDep=ObjDir
2	opanaka	opanak	NOUN	N_com_gen_pl_m	Case=Gen|Gender=Masc|Number=Plur	1	obl	_	OrigDep=DepAdvCas|OrigFeats=c:gen;g:m;n:pl
3	pocepao	pocepati	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	OrigDep=Root|OrigFeats=g:m;n:sg;t:partact
4	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
5	odande	odande	ADV	Adv_gen_pos	Degree=Pos	3	advmod	_	OrigDep=DepVAdv
6	dovde	dovde	ADV	Adv_gen_pos	Degree=Pos	5	advmod	_	OrigDep=Correl|SpaceAfter=No
7	,	,	PUNCT	Z	_	6	punct	_	OrigDep=Ponct
8	a	a	CCONJ	C_coord	_	9	cc	_	OrigDep=ConjCoord
9	mogao	moći	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	3	conj	_	OrigDep=Coord|OrigFeats=g:m;n:sg;t:partact
10	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
11	i	i	ADV	Part	_	12	advmod:emph	_	OrigDep=Emph
12	više	više	ADV	Adv_gen_comp	Degree=Cmp	9	advmod	_	OrigDep=DepVAdv|SpaceAfter=No
13	.	.	PUNCT	Z	_	12	punct	_	OrigDep=Ponct

~~~


