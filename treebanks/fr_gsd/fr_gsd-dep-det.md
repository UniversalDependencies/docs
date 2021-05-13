---
layout: base
title:  'Statistics of det in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `det`

This relation is universal.

60530 nodes (15%) are attached to their parents as `det`.

60530 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10256071369569.

The following 15 pairs of parts of speech are connected with `det`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (53070; 88% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (5290; 9% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1091; 2% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (381; 1% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (335; 1% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (221; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (73; 0% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (20; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (20; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Aviator	Aviator	PROPN	_	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	film	film	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	_
5	sur	sur	ADP	_	_	7	case	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	vie	vie	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	Hughes	Hughes	PROPN	_	_	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Mais	mais	CCONJ	_	_	9	cc	_	SpaceAfter=No|wordform=mais
2	,	,	PUNCT	_	_	1	punct	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	SMIC	SMIC	PROPN	_	Gender=Masc|Number=Sing	9	nsubj	_	_
5	n'	ne	ADV	_	Polarity=Neg	9	advmod	_	SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	outil	outil	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
10	de	de	ADP	_	_	11	case	_	_
11	référence	référence	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	wordform=il
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	22	22	NUM	_	Number=Sing	3	obl:mod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


