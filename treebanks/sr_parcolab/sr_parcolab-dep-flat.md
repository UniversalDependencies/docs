---
layout: base
title:  'Statistics of flat in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `flat`

This relation is universal.

136 nodes (0%) are attached to their parents as `flat`.

136 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13235294117647.

The following 7 pairs of parts of speech are connected with `flat`: <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (84; 62% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (22; 16% instances), <tt><a href="sr_parcolab-pos-X.html">X</a></tt>-<tt><a href="sr_parcolab-pos-X.html">X</a></tt> (18; 13% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-X.html">X</a></tt> (6; 4% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Ime	ime	NOUN	N_com_nom_sg_n	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
2	Lazar	Lazar	PROPN	N_prop_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	1	flat	_	OrigDep=Cit|OrigFeats=c:nom;g:m;n:sg
3	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
4	nasledno	nasledan	ADJ	A_qual_nom_sg_n_pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	OrigDep=PredicNom|OrigFeats=c:nom;g:n;n:sg
5	u	u	ADP	Prep	_	7	case	_	OrigDep=PredicAdv
6	našem	naš	DET	A_pos_loc_sg_m_-	Case=Loc|Gender=Masc|Number=Sing	7	det	_	OrigDep=DepNAdj|OrigFeats=c:loc;g:m;n:sg
7	rodu	rod	NOUN	N_com_loc_sg_m	Case=Loc|Gender=Masc|Number=Sing	4	obl	_	OrigDep=ComplPrep|OrigFeats=c:loc;g:m;n:sg|SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	–	–	PUNCT	Z	_	2	punct	_	OrigDep=Ponct
2	Ein	ein	X	X	_	0	root	_	OrigDep=Root
3	Halbzylinder	halbzylinder	X	X	_	2	flat	_	OrigDep=Polylex|SpaceAfter=No
4	!	!	PUNCT	Z	_	2	punct	_	OrigDep=Ponct

~~~


