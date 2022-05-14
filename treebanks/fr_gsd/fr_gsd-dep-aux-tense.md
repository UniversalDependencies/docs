---
layout: base
title:  'Statistics of aux:tense in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `aux:tense`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_gsd-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_gsd-dep-aux-pass.html">aux:pass</a></tt>.

3828 nodes (1%) are attached to their parents as `aux:tense`.

3821 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50705329153605.

The following 10 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (3682; 96% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (80; 2% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (49; 1% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:tense	color:blue
1	Vraiment	vraiment	ADV	_	_	6	advmod	_	SpaceAfter=No|wordform=vraiment
2	,	,	PUNCT	_	_	1	punct	_	_
3	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	SpaceAfter=No
4	y	y	PRON	_	Person=3|PronType=Prs	6	obl:mod	_	_
5	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
6	passé	passer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	du	du	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	bon	bon	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
9	temps	temps	NOUN	_	Gender=Masc|Number=Sing	6	obj	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	conj	_	_
12	y	y	PRON	_	Person=3|PronType=Prs	13	iobj	_	_
13	retourner	retourner	VERB	_	VerbForm=Inf	11	xcomp	_	_
14	!	!	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux:tense	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	wordform=il
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
3	également	également	ADV	_	_	5	advmod	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	capitaine	capitaine	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	de	de	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	équipe	équipe	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
9	bruxelloise	bruxellois	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:tense	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	pose	pose	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	était	être	AUX	_	Number=Sing|Person=3|Tense=Past|Typo=Yes|VerbForm=Fin	5	cop	_	CorrectForm=été|CorrectVerbForm=Part
5	parfaite	parfait	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
6	!	!	PUNCT	_	_	5	punct	_	_

~~~


