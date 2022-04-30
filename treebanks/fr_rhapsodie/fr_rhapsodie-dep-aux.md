---
layout: base
title:  'Statistics of aux in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="fr_rhapsodie-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-pass.html">aux:pass</a></tt>.

505 nodes (1%) are attached to their parents as `aux`.

502 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46732673267327.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (481; 95% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	vois	voir	VERB	DISCOURSE	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	euh	euh	INTJ	_	_	2	discourse	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	14	dislocated	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
12	m'	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	14	iobj	_	SpaceAfter=No
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	_
16	de	de	ADP	_	_	17	case	_	_
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 aux	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
3	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	cop	_	_
4	vraiment	vraiment	ADV	_	_	10	advmod	_	_
5	pour	pour	ADP	_	_	6	case	_	_
6	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obl:mod	_	_
7	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	une	un	DET	conj:reform	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	reparandum	_	_
10	révélation	révélation	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 aux	color:blue
1	et	et	CCONJ	_	_	6	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	_
3	euh	euh	INTJ	_	_	6	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	que	que	SCONJ	_	_	12	mark	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	Overlap=Rhap_D0006-16
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	Overlap=Rhap_D0006-16
10	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	cop	_	Overlap=Rhap_D0006-16
11	très	très	ADV	_	_	12	advmod	_	Overlap=Rhap_D0006-16
12	bénéfique	bénéfique	ADJ	_	Number=Sing	6	ccomp	_	Overlap=Rhap_D0006-16|SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	Overlap=Rhap_D0006-16

~~~


