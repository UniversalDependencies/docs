---
layout: base
title:  'Statistics of nmod in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `nmod`

This relation is universal.

1562 nodes (3%) are attached to their parents as `nmod`.

1541 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.24199743918054.

The following 15 pairs of parts of speech are connected with `nmod`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1404; 90% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (47; 3% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (38; 2% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (30; 2% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (23; 1% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-NUM.html">NUM</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-X.html">X</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
1	Glava	glava	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:f;n:sg
2	joj	on	PRON	P_pers_3_sg_f_dat	Case=Dat|Gender=Fem|Number=Sing|Person=3	4	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;g:f;n:sg;r:3
3	beše	biti	AUX	V_main_impf_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	OrigDep=Root|OrigFeats=n:sg;t:impf;r:3
4	smežurana	smežuran	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:f;n:sg
5	kao	kao	SCONJ	C_sub	_	6	case	_	OrigDep=Sub
6	orah	orah	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	4	obl	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:m;n:sg
7	bez	bez	ADP	Prep	_	8	case	_	OrigDep=DepNPrep
8	mrezge	mrezga	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
1	Ili	ili	CCONJ	C_coord	_	0	root	_	OrigDep=Root
2	su	biti	AUX	V_aux_pres_3_pl_-_-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	OrigDep=AuxV|OrigFeats=n:pl;t:pres;r:3|OrigLemma=jesam
3	mislili	misliti	VERB	V_main_partact_-_pl_m_-	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	1	conj	_	OrigDep=Coord|OrigFeats=g:m;n:pl;t:partact
4	da	da	SCONJ	C_sub	_	10	mark	_	OrigDep=Sub
5	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	OrigDep=PredCompletive|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
6	život	život	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
7	među	među	ADP	Prep	_	8	case	_	OrigDep=DepNPrep
8	njima	oni	PRON	P_pers_3_pl_m_ins	Case=Ins|Gender=Masc|Number=Plur|Person=3	6	nmod	_	OrigDep=ComplPrep|OrigFeats=c:ins;g:m;n:pl;r:3
9	najgora	loš	ADJ	A_qual_nom_pl_f_sup	Case=Nom|Degree=Sup|Gender=Fem|Number=Plur	10	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:pl
10	kazna	kazna	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	3	ccomp	_	OrigDep=PredicNom|OrigFeats=c:nom;g:f;n:sg|SpaceAfter=No
11	?	?	PUNCT	Z	_	10	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nmod	color:blue
1	Gde	gde	ADV	Adv_inter_-	_	2	advmod	_	OrigDep=DepVAdv
2	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
3	sjaj	sjaj	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
4	pozlate	pozlata	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:sg
5	sa	sa	ADP	Prep	_	7	case	_	OrigDep=DepNPrep
6	starih	star	ADJ	A_qual_gen_pl_m_pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:m;n:pl
7	ramova	ram	NOUN	N_com_gen_pl_m	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:m;n:pl|SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
9	osmeh	osmeh	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	3	conj	_	OrigDep=Coord|OrigFeats=c:nom;g:m;n:sg
10	Mona	Mona	PROPN	N_prop_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:sg
11	Lize	Liza	PROPN	N_prop_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	10	flat	_	OrigDep=Ap|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
12	?	?	PUNCT	Z	_	11	punct	_	OrigDep=Ponct

~~~


