---
layout: base
title:  'Statistics of dep:comp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-dep.html">dep</a></tt>.

56 nodes (0%) are attached to their parents as `dep:comp`.

39 instances of `dep:comp` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80357142857143.

The following 14 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (16; 29% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (14; 25% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (5; 9% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (4; 7% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 5% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 5% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (2; 4% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dep:comp	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
3	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	5	dep:comp	_	_
4	sommes	être	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
5	installés	installer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
6	dans	dans	ADP	_	_	9	case	_	_
7	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
8	petit	petit	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	appartement	appartement	NOUN	_	Gender=Masc|Number=Sing	5	obl:arg	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	2	nsubj	_	_
2	retombez	retomber	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sur	sur	ADP	_	_	4	dep:comp	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	reparandum	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	sur	sur	ADP	_	_	8	case	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	place	place	NOUN	_	Gender=Fem|Number=Sing	2	obl:arg	_	_
9	Grenette	Grenette	PROPN	_	_	8	nmod:appos	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 dep:comp	color:blue
1	en	en	ADP	_	_	2	case	_	_
2	mille	mille	NUM	_	Number=Plur	9	obl:mod	_	_
3	neuf	neuf	NUM	_	Number=Plur	2	flat	_	_
4	cent	cent	NUM	_	Number=Plur	2	flat	_	_
5	dix-huit	dix-huit	NUM	_	Number=Plur	2	flat	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	expl:subj	_	_
8	y	y	PRON	_	Person=3|PronType=Prs	9	expl:comp	_	_
9	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
10	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	_
11	de	un	DET	_	Definite=Ind|PronType=Art	15	reparandum	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	de	un	DET	_	Definite=Ind|PronType=Art	15	reparandum	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	de	un	DET	_	Definite=Ind|PronType=Art	9	dep:comp	_	SpaceAfter=No
16	…	…	PUNCT	_	_	9	punct	_	_

~~~


