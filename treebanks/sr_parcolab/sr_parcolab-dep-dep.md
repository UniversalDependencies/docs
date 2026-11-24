---
layout: base
title:  'Statistics of dep in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `dep`

This relation is universal.

1 nodes (0%) are attached to their parents as `dep`.

1 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dep`: <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-CCONJ.html">CCONJ</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dep	color:blue
1	Njegova	njegov	DET	A_pos_nom_sg_f_-	Case=Nom|Gender=Fem|Number=Sing	2	det	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
2	ozbiljnost	ozbiljnost	NOUN	N_com_nom_sg_f	Case=Nom|Gender=Fem|Number=Sing	0	root	_	OrigDep=Root|OrigFeats=c:nom;g:f;n:sg
3	(	(	PUNCT	Z	_	2	punct	_	OrigDep=Ponct|SpaceAfter=No
4	nimalo	nimalo	ADV	Adv_gen_pos	Degree=Pos	5	advmod	_	OrigDep=DepAdjAdv
5	tužna	tužan	ADJ	A_qual_nom_sg_f_pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	OrigDep=DepNAdj|OrigFeats=c:nom;g:f;n:sg
6	ili	ili	CCONJ	C_coord	_	5	dep	_	OrigDep=ConjCoord|SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	OrigDep=Ponct

~~~


