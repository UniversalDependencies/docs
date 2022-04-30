---
layout: base
title:  'Statistics of expl:subj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `expl:subj`

This relation is a language-specific subtype of .

367 nodes (1%) are attached to their parents as `expl:subj`.

347 instances of `expl:subj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49591280653951.

The following 7 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (263; 72% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (37; 10% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (36; 10% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (22; 6% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl:subj	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	il	il	PRON	conj:reform	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	reparandum	_	_
4	y	y	PRON	_	Person=3|PronType=Prs	5	iobj	_	_
5	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	certains	certain	DET	_	Gender=Masc|Number=Plur|Person=3|PronType=Ind	7	det	_	_
7	métiers	métier	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	_
8	où	où	PRON	_	PronType=Rel	10	advcl	_	_
9	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	f~	f~	VERB	_	_	7	acl:relcl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
13	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	reparandum	_	_
14	être	être	AUX	DoubleAux	VerbForm=Inf	15	aux	_	_
15	né	naître	VERB	ETRE	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	xcomp	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl:subj	color:blue
1	ben	ben	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	0	root	_	_
6	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	_
7	les	le	PRON	_	Number=Plur|Person=3|PronType=Prs	9	obj	_	_
8	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	payés	payer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	5	advcl:cleft	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl:subj	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
5	est	être	AUX	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	reparandum	_	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	_
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	expl:subj	_	SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
9	surtout	surtout	ADV	_	_	11	advmod	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	hôpital	hôpital	NOUN	conj:reform	Gender=Masc|Number=Sing	5	reparandum	_	_
12	public	public	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	_
13	qui	qui	PRON	_	PronType=Rel	15	nsubj	_	_
14	m'	le	PRON	_	Number=Sing|Person=1|PronType=Prs	15	obj	_	SpaceAfter=No
15	attire	attirer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl:cleft	_	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	_	_

~~~


