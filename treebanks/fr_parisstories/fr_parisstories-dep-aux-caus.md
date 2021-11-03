---
layout: base
title:  'Statistics of aux:caus in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `aux:caus`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_parisstories-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_parisstories-dep-aux-tense.html">aux:tense</a></tt>.

6 nodes (0%) are attached to their parents as `aux:caus`.

6 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (6; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:caus	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
3	s'	se	PRON	_	Person=3|PronType=Prs	6	dep:comp	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
5	fait	faire	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Part	6	aux:caus	_	_
6	tuer	tuer	VERB	_	VerbForm=Inf	0	root	_	_
7	par	par	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	requin	requin	NOUN	_	Gender=Masc|Number=Sing	6	obl:arg	_	_
10	sous	sous	ADP	_	_	12	case	_	_
11	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	12	det	_	_
12	yeux	œil	NOUN	_	Gender=Masc|Number=Plur	9	nmod	_	_
13	de	de	ADP	_	_	12	dep	_	_
14	euh	euh	INTJ	_	_	18	discourse	_	SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	_	_
16	de	de	ADP	_	_	18	case	_	_
17	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	18	det	_	_
18	femme	femme	NOUN	_	Gender=Fem|Number=Sing	13	reparandum	_	_
19	apparemment	apparemment	ADV	_	_	12	advmod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	6	punct	_	_

~~~


