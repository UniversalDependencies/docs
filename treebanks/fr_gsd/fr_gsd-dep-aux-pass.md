---
layout: base
title:  'Statistics of aux:pass in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `aux:pass`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_gsd-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_gsd-dep-aux-tense.html">aux:tense</a></tt>.

2894 nodes (1%) are attached to their parents as `aux:pass`.

2892 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24879060124395.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (2892; 100% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	wordform=il
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	22	22	NUM	_	Number=Sing	3	obl:mod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 aux:pass	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	Lettonie	Lettonie	PROPN	_	Gender=Fem|Number=Sing	7	nsubj:pass	_	_
3	et	et	CCONJ	_	_	5	cc	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Lituanie	Lituanie	PROPN	_	Gender=Fem|Number=Sing	2	conj	_	_
6	seront	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	7	aux:pass	_	_
7	représentées	représenter	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
8	par	par	ADP	_	_	10	case	_	_
9	leur	son	DET	_	Number=Sing|PossNumber=Plur|PossPerson=3|PronType=Prs	10	det	_	_
10	président	président	NOUN	_	Gender=Masc|Number=Sing	7	obl:agent	_	_
11	et	et	CCONJ	_	_	14	cc	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Suède	Suède	PROPN	_	Gender=Fem|Number=Sing	14	nsubj:pass	_	_
14	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	conj	_	_
15	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	14	aux:pass	_	_
16	plus	plus	ADV	_	_	17	advmod	_	_
17	symboliquement	symboliquement	ADV	_	_	14	advmod	_	_
18	par	par	ADP	_	_	20	case	_	_
19	son	son	DET	_	Number=Sing|PossNumber=Sing|PossPerson=3|PronType=Prs	20	det	_	_
20	roi	roi	NOUN	_	Gender=Masc|Number=Sing	14	nmod	_	_
21	Carl	Carl	PROPN	_	_	20	appos	_	_
22	XVI	XVI	PROPN	_	_	21	flat:name	_	_
23	Gustaf	Gustaf	PROPN	_	_	22	flat:name	_	SpaceAfter=No
24	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	compagnie	compagnie	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:pass	_	_
5	publicly-traded	publicly-traded	X	_	_	0	root	_	ExtPos=ADJ
6	depuis	depuis	ADP	_	_	7	case	_	_
7	1992	1992	NUM	_	Number=Plur	5	obl:mod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


