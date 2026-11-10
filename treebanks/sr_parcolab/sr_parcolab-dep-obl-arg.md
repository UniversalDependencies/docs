---
layout: base
title:  'Statistics of obl:arg in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="sr_parcolab-dep-obl.html">obl</a></tt>.

120 nodes (0%) are attached to their parents as `obl:arg`.

63 instances of `obl:arg` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.325.

The following 12 pairs of parts of speech are connected with `obl:arg`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (47; 39% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (21; 18% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (13; 11% instances), <tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (10; 8% instances), <tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (10; 8% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:arg	color:blue
1	Ima	imati	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3
2	li	li	PART	Part	_	1	advmod	_	OrigDep=Interrog
3	ičega	išta	PRON	P_inter_-_-_-_gen	Case=Gen	1	obl:arg	_	OrigDep=SujLog|OrigFeats=c:gen
4	iza	iza	ADV	Adv_gen_pos	Degree=Pos	1	advmod	_	OrigDep=DepVAdv|SpaceAfter=No
5	?	?	PUNCT	Z	_	4	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 obl:arg	color:blue
1	I	i	CCONJ	C_coord	_	0	root	_	OrigDep=Root
2	taj	taj	DET	A_dem_nom_sg_m_-	Case=Nom|Gender=Masc|Number=Sing	4	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:m;n:sg
3	je	biti	AUX	V_aux_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
4	pripev	pripev	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
5	govorio	govoriti	VERB	V_main_partact_-_sg_m_-	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	1	conj	_	OrigDep=Coord|OrigFeats=g:m;n:sg;t:partact|SpaceAfter=No
6	,	,	PUNCT	Z	_	5	punct	_	OrigDep=Ponct
7	naravno	naravno	ADV	Part	_	5	advmod	_	OrigDep=ExtraPred|SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
9	o	o	ADP	Prep	_	10	case	_	OrigDep=ObjIndirPrep
10	ljubavi	ljubav	NOUN	N_com_loc_sg_f	Case=Loc|Gender=Fem|Number=Sing	5	obl:arg	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:f;n:sg|SpaceAfter=No
11	.	.	PUNCT	Z	_	10	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 obl:arg	color:blue
1	Ali	ali	CCONJ	C_coord	_	7	cc	_	OrigDep=Root
2	mu	on	PRON	P_pers_3_sg_m_dat	Case=Dat|Gender=Masc|Number=Sing|Person=3	7	obl:arg	_	OrigDep=SujLog|OrigFeats=c:dat;g:m;n:sg;r:3
3	od	od	ADP	Prep	_	4	case	_	OrigDep=DepVPrep
4	toga	taj	PRON	P_dem_-_sg_n_gen	Case=Gen|Gender=Neut|Number=Sing	7	obl	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:n;n:sg
5	nije	biti	AUX	V_aux_pres_3_sg_-_neg	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	OrigDep=AuxV|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
6	bilo	biti	AUX	V_main_partact_-_sg_n_-	Gender=Neut|Number=Sing|VerbForm=Part|Voice=Act	7	cop	_	OrigDep=Coord|OrigFeats=g:n;n:sg;t:partact
7	lakše	lako	ADV	Adv_gen_comp	Degree=Cmp	0	root	_	OrigDep=PredicAdv
8	i	i	CCONJ	C_coord	_	9	cc	_	OrigDep=ConjCoord
9	bolje	bolje	ADV	Adv_gen_comp	Degree=Cmp	7	conj	_	OrigDep=Coord|SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	_	OrigDep=Ponct

~~~


