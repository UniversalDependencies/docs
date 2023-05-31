---
layout: base
title:  'Statistics of expl:subj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `expl:subj`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `expl`: <tt><a href="fr_rhapsodie-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_rhapsodie-dep-expl-pass.html">expl:pass</a></tt>.

425 nodes (1%) are attached to their parents as `expl:subj`.

403 instances of `expl:subj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27529411764706.

The following 7 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (320; 75% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (37; 9% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (36; 8% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (22; 5% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:subj	color:blue
1	vraiment	vraiment	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	psychiatrie	psychiatrie	NOUN	_	Gender=Fem|Number=Sing	7	dislocated	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	_
7	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	_
8	ê~	ê~	VERB	CCOMP	_	7	ccomp	_	Scrap=Yes|SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	expl:subj	_	_
11	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	être	être	AUX	conj:reform	VerbForm=Inf	11	ccomp	_	SpaceAfter=No|Subject=NoRaising
13	…	…	PUNCT	_	_	11	punct	_	_

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
8	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux:tense	_	_
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
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
5	est	être	AUX	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	_
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	expl:subj	_	SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
9	surtout	surtout	ADV	_	_	11	advmod	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	hôpital	hôpital	NOUN	conj:reform	Gender=Masc|Number=Sing	0	root	_	_
12	public	public	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	_
13	qui	qui	PRON	_	PronType=Rel	15	nsubj	_	_
14	m'	le	PRON	_	Number=Sing|Person=1|PronType=Prs	15	obj	_	SpaceAfter=No
15	attire	attirer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl:cleft	_	SpaceAfter=No
16	.	.	PUNCT	_	_	11	punct	_	_

~~~


