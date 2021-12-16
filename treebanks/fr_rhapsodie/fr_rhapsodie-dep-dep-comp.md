---
layout: base
title:  'Statistics of dep:comp in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-dep.html">dep</a></tt>.

240 nodes (1%) are attached to their parents as `dep:comp`.

213 instances of `dep:comp` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3625.

The following 17 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (183; 76% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (18; 8% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (8; 3% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (5; 2% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (4; 2% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (4; 2% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep:comp	color:blue
1	Nice	Nice	PROPN	_	_	3	nsubj	_	_
2	s'	se	PRON	_	Person=3|PronType=Prs	3	dep:comp	_	SpaceAfter=No
3	impose	imposer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	à	à	ADP	_	_	5	case	_	_
5	Nancy	Nancy	PROPN	_	_	3	obl:arg	_	_
6	deux	deux	NUM	_	Number=Plur	3	obl:mod	_	_
7	à	à	ADP	_	_	8	cc	_	_
8	un	un	NUM	_	Number=Sing	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep:comp	color:blue
1	euh	euh	INTJ	_	_	15	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	mais	mais	CCONJ	_	_	15	cc	_	_
4	à	à	ADP	à	_	5	dep:comp	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	dep	_	_
6	,	,	PUNCT	_	_	10	punct	_	_
7	à	à	ADP	conj:reform	_	10	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	prochain	prochain	ADJ	_	Gender=Masc|Number=Sing	10	amod	_	_
10	arrêt	arrêt	NOUN	_	Gender=Masc|Number=Sing	5	reparandum	_	SpaceAfter=No
11	,	,	PUNCT	_	_	5	punct	_	_
12	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	15	nsubj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	je	il	PRON	conj:reform	Number=Sing|Person=1|PronType=Prs	12	reparandum	_	_
15	continue	continuer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
16	?	?	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 dep:comp	color:blue
1	en	en	ADP	_	_	2	case	_	_
2	mille	mille	NUM	_	Number=Plur	9	obl:mod	_	_
3	neuf	neuf	NUM	_	Number=Plur	2	flat	_	_
4	cent	cent	NUM	_	Number=Plur	2	flat	_	_
5	dix-huit	dix-huit	NUM	_	Number=Plur	2	flat	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	expl:subj	_	_
8	y	y	PRON	_	Person=3|PronType=Prs	9	iobj	_	_
9	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
10	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	_
11	de	un	DET	_	Definite=Ind|PronType=Art	9	dep:comp	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	de	un	DET	conj:reform	Definite=Ind|PronType=Art	11	reparandum	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	de	un	DET	conj:reform	Definite=Ind|PronType=Art	13	reparandum	_	SpaceAfter=No
16	…	…	PUNCT	_	_	9	punct	_	_

~~~


