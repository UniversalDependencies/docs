---
layout: base
title:  'Statistics of aux:pass in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fr-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="fr-dep-aux-caus.html">aux:caus</a></tt>.

2858 nodes (1%) are attached to their parents as `aux:pass`.

2856 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24492652204339.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (2854; 100% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	22	22	NUM	_	_	6	nummod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	compagnie	compagnie	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:pass	_	_
5	publicly-traded	publicly-traded	ADJ	_	_	0	root	_	_
6	depuis	depuis	ADP	_	_	7	case	_	_
7	1992	1992	NUM	_	_	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 aux:pass	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Lettonie	Lettonie	PROPN	_	_	7	nsubj:pass	_	_
3	et	et	CCONJ	_	_	5	cc	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Lituanie	Lituanie	PROPN	_	_	2	conj	_	_
6	seront	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	7	aux:pass	_	_
7	représentées	représenter	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
8	par	par	ADP	_	_	10	case	_	_
9	leur	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	10	det	_	_
10	président	président	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	_
11	et	et	CCONJ	_	_	14	cc	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Suède	Suède	PROPN	_	_	14	nsubj:pass	_	_
14	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	conj	_	_
15	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	14	aux:pass	_	_
16	plus	plus	ADV	_	_	17	advmod	_	_
17	symboliquement	symboliquement	ADV	_	_	14	advmod	_	_
18	par	par	ADP	_	_	20	case	_	_
19	son	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	20	det	_	_
20	roi	roi	NOUN	_	Gender=Masc|Number=Sing	14	nmod	_	_
21	Carl	Carl	PROPN	_	_	20	appos	_	_
22	XVI	XVI	PROPN	_	_	21	flat:name	_	_
23	Gustaf	Gustaf	PROPN	_	_	21	flat:name	_	SpaceAfter=No
24	.	.	PUNCT	_	_	7	punct	_	_

~~~


