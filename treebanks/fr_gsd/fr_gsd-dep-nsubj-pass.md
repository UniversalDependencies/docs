---
layout: base
title:  'Statistics of nsubj:pass in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_gsd-dep-nsubj-caus.html">nsubj:caus</a></tt>.

2596 nodes (1%) are attached to their parents as `nsubj:pass`.

2564 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.47534668721109.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1604; 62% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (731; 28% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (217; 8% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (15; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (8; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	autel	autel	NOUN	_	Gender=Masc|Number=Sing	6	nsubj:pass	_	_
3	à	à	ADP	_	_	4	case	_	_
4	Jupiter	Jupiter	PROPN	_	_	2	nmod	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
6	érigé	ériger	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	à	à	ADP	_	_	9	case	_	_
8	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	emplacement	emplacement	NOUN	_	Gender=Masc|Number=Sing	6	obl:mod	_	_
10	de	de	ADP	_	_	12	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Temple	temple	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	22	22	NUM	_	_	3	obl	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Lorgue	Lorgue	PROPN	_	_	7	nsubj:pass	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Barbarie	Barbarie	PROPN	_	_	1	nmod	_	_
4	portatif	portatif	ADJ	_	Gender=Masc|Number=Sing	1	amod	_	_
5	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	_
6	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	aux:pass	_	_
7	créé	créer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	en	en	ADP	_	_	9	case	_	_
9	1890	1890	NUM	_	_	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


