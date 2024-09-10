---
layout: base
title:  'Statistics of iobj in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `iobj`

This relation is universal.

180 nodes (0%) are attached to their parents as `iobj`.

172 instances of `iobj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (177; 98% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 iobj	color:blue
1	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	euh	euh	INTJ	_	_	2	discourse	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	moi	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	14	dislocated	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
12	m'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	14	iobj	_	SpaceAfter=No
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	_
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	_
16	de	de	ADP	_	_	17	case	_	_
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 iobj	color:blue
1	mais	mais	CCONJ	_	_	9	cc	_	_
2	peut-être	peut-être	ADV	_	_	9	advmod	_	_
3	même	même	ADV	_	_	9	advmod	_	_
4	il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
5	n'	ne	ADV	_	Polarity=Neg	9	advmod	_	SpaceAfter=No
6	en	en	PRON	_	Person=3|PronType=Prs	9	iobj	_	_
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	_
9	séparable	séparable	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


