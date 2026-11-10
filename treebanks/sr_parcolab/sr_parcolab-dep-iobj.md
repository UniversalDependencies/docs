---
layout: base
title:  'Statistics of iobj in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `iobj`

This relation is universal.

542 nodes (1%) are attached to their parents as `iobj`.

329 instances of `iobj` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12546125461255.

The following 11 pairs of parts of speech are connected with `iobj`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (384; 71% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (103; 19% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (23; 4% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (12; 2% instances), <tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-DET.html">DET</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 iobj	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	Sad	sad	ADV	Adv_gen_pos	Degree=Pos	2	advmod	_	OrigDep=DepVAdv
2	idemo	ići	VERB	V_main_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:pl;t:pres;r:1
3	da	da	SCONJ	C_sub	_	5	mark	_	OrigDep=Sub
4	nešto	nešto	PRON	P_indef_-_-_-_acc	Case=Acc	5	obj	_	OrigDep=ObjDir|OrigFeats=c:acc
5	pitamo	pitati	VERB	V_main_pres_1_pl_-_-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	advcl	_	OrigDep=PredSub|OrigFeats=n:pl;t:pres;r:1
6	onu	onaj	DET	A_dem_acc_sg_f_-	Case=Acc|Gender=Fem|Number=Sing	7	det	_	OrigDep=DepNAdj|OrigFeats=c:acc;g:f;n:sg
7	budalu	budala	NOUN	N_com_acc_sg_f	Case=Acc|Gender=Fem|Number=Sing	5	iobj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:f;n:sg
8	od	od	ADP	Prep	_	9	case	_	OrigDep=DepNPrep
9	kmeta	kmet	NOUN	N_com_gen_sg_m	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	OrigDep=ComplPrep|OrigFeats=c:gen;g:m;n:sg|SpaceAfter=No
10	!	!	PUNCT	Z	_	9	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
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


