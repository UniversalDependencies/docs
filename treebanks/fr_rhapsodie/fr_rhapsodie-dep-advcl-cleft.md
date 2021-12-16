---
layout: base
title:  'Statistics of advcl:cleft in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-advcl.html">advcl</a></tt>.

78 nodes (0%) are attached to their parents as `advcl:cleft`.

78 instances of `advcl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.16666666666667.

The following 10 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (31; 40% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (30; 38% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 advcl:cleft	color:blue
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl:cleft	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl:cleft	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	qui	qui	PRON	_	PronType=Rel	6	nsubj	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	terrible	terrible	ADJ	_	Number=Sing	3	advcl:cleft	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


