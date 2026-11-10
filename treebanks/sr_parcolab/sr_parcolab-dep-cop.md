---
layout: base
title:  'Statistics of cop in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `cop`

This relation is universal.

551 nodes (1%) are attached to their parents as `cop`.

482 instances of `cop` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94736842105263.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (247; 45% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (184; 33% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (56; 10% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (38; 7% instances), <tt><a href="sr_parcolab-pos-DET.html">DET</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (16; 3% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	«	«	PUNCT	Z	_	5	punct	_	OrigDep=Ponct
2	Gospod	gospod	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
3	mi	ja	PRON	P_pers_1_sg_-_dat	Case=Dat|Number=Sing|Person=1	5	iobj	_	OrigDep=ObjIndirCas|OrigFeats=c:dat;n:sg;r:1
4	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
5	svedok	svedok	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	_	OrigDep=Ponct
7	»	»	PUNCT	Z	_	5	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Unutra	unutra	ADV	Adv_gen_pos	Degree=Pos	3	advmod	_	OrigDep=DepVAdv
2	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
3	toplo	topao	ADV	Adv_gen_pos	Degree=Pos	0	root	_	OrigDep=PredicAdv
4	i	i	CCONJ	C_coord	_	5	cc	_	OrigDep=ConjCoord
5	počinjem	počinjati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	conj	_	OrigDep=Coord|OrigFeats=n:sg;t:pres;r:1
6	da	da	SCONJ	C_sub	_	8	mark	_	OrigDep=ObjDir
7	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	8	expl	_	OrigDep=Ref|OrigFeats=c:acc
8	raskravljujem	raskravljivati	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	ccomp	_	OrigDep=PredSub|OrigFeats=n:sg;t:pres;r:1|SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	_	OrigDep=Ponct

~~~


