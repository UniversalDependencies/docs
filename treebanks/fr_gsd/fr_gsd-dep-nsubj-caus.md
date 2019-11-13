---
layout: base
title:  'Statistics of nsubj:caus in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_gsd-dep-nsubj-pass.html">nsubj:pass</a></tt>.

149 nodes (0%) are attached to their parents as `nsubj:caus`.

148 instances of `nsubj:caus` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.87248322147651.

The following 4 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (65; 44% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (53; 36% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (28; 19% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:caus	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj:caus	_	_
2	s'	se	PRON	_	Person=3|PronType=Prs	5	iobj	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:caus	_	_
5	poser	poser	VERB	_	VerbForm=Inf	0	root	_	_
6	des	un	DET	_	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	points	point	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	_
8	de	de	ADP	_	_	9	case	_	_
9	suture	suture	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:caus	color:blue
1	Son	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	2	det	_	_
2	entourage	entourage	NOUN	_	Gender=Masc|Number=Sing	9	nsubj:caus	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	ses	son	DET	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	5	det	_	_
5	enfants	enfant	NOUN	_	Gender=Masc|Number=Plur	2	conj	_	_
6	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
7	lui	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	9	iobj:agent	_	_
8	font	faire	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux:caus	_	_
9	remarquer	remarquer	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:caus	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	Metelli	Metelli	PROPN	_	_	5	nsubj:caus	_	_
3	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
4	font	faire	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:caus	_	_
5	emprisonner	emprisonner	VERB	_	VerbForm=Inf	0	root	_	_
6	en	en	ADP	_	_	7	case	_	_
7	205	205	NUM	_	_	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


