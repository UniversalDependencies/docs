---
layout: base
title:  'Statistics of nsubj:pass in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-nsubj.html">nsubj</a></tt>.

207 nodes (1%) are attached to their parents as `nsubj:pass`.

206 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.32367149758454.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (123; 59% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (47; 23% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (21; 10% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="de_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="de_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	Das	_	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Person=3	2	det	_	_
2	Projekt	_	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	8	nsubj:pass	_	_
3	wird	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	_
4	über	_	ADP	IN	_	5	case	_	_
5	Sponsoren	_	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	8	obl	_	_
6	und	_	CCONJ	CC	_	7	cc	_	_
7	Werbung	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	5	conj	_	_
8	finanziert	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Es	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	3	nsubj:pass	_	_
2	wird	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux	_	_
3	geprüft	_	VERB	VBN	Tense=Past	0	root	_	_
4	werden	_	AUX	VB	_	3	aux:pass	_	SpaceAfter=No
5	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Die	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Winteruniversiade	_	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nsubj:pass	_	_
3	2019	_	NUM	CD	NumType=Card	2	obl:tmod	_	Proper=True
4	wird	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux:pass	_	_
5	von	_	ADP	IN	_	6	case	_	_
6	Krasnojarsk	_	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing|Person=3	7	obl	_	_
7	ausgerichtet	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
8	.	_	PUNCT	.	_	7	punct	_	_

~~~


