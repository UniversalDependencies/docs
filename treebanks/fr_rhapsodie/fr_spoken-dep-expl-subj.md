---
layout: base
title:  'Statistics of expl:subj in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `expl:subj`

This relation is a language-specific subtype of .

366 nodes (1%) are attached to their parents as `expl:subj`.

346 instances of `expl:subj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.48087431693989.

The following 7 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (262; 72% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (37; 10% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (36; 10% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (22; 6% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl:subj	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	_
2	il	il	PRON	conj:reform	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	reparandum	_	_
3	y	y	PRON	_	Person=3|PronType=Prs	4	iobj	_	_
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	certains	certain	DET	_	Gender=Masc|Number=Plur|Person=3|PronType=Ind	6	det	_	_
6	métiers	métier	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	_
7	où	où	PRON	_	_	9	advcl	_	_
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	f~	f~	X	_	_	6	acl:relcl	_	_
10	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
11	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	reparandum	_	_
12	être	être	AUX	DoubleAux	Number=Sing|Person=3|VerbForm=Inf	13	aux	_	_
13	né	naître	VERB	ETRE	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	xcomp	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl:subj	color:blue
1	ben	ben	INTJ	_	_	4	discourse	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	expl:subj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	0	root	_	_
5	qui	qui	PRON	_	_	8	nsubj	_	_
6	les	le	PRON	_	Number=Plur|Person=3|PronType=Prs	8	obj	_	_
7	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	payés	payer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	4	advcl:cleft	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 expl:subj	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
4	est	être	AUX	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	reparandum	_	_
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	expl:subj	_	_
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	surtout	surtout	ADV	_	_	9	advmod	_	_
8	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	hôpital	hôpital	NOUN	conj:reform	Gender=Masc|Number=Sing	4	reparandum	_	_
10	public	public	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
11	qui	qui	PRON	_	_	13	nsubj	_	_
12	m'	le	PRON	_	_	13	obj	_	_
13	attire	attirer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl:cleft	_	_

~~~


