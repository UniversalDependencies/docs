---
layout: base
title:  'Statistics of expl in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="fr_rhapsodie-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_rhapsodie-dep-expl-subj.html">expl:subj</a></tt>.

290 nodes (1%) are attached to their parents as `expl`.

289 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12068965517241.

The following 1 pairs of parts of speech are connected with `expl`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (290; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	reparandum	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	il	il	PRON	conj:reform	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	_
4	y	y	PRON	_	Person=3|PronType=Prs	5	expl	_	_
5	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	certains	certain	DET	_	Gender=Masc|Number=Plur|Person=3|PronType=Ind	7	det	_	_
7	métiers	métier	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	_
8	où	où	PRON	_	PronType=Rel	10	advcl	_	_
9	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	f~	f~	VERB	_	_	13	reparandum	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	expl:subj	_	_
13	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	_
14	être	être	AUX	DoubleAux	VerbForm=Inf	15	aux:tense	_	Subject=NoRaising
15	né	naître	VERB	ETRE	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	ccomp	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


