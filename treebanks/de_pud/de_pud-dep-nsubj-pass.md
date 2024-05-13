---
layout: base
title:  'Statistics of nsubj:pass in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-nsubj.html">nsubj</a></tt>.

207 nodes (1%) are attached to their parents as `nsubj:pass`.

206 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.45893719806763.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (129; 62% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (49; 24% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (24; 12% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	Das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	Projekt	Projekt	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	8	nsubj:pass	_	_
3	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	_
4	über	über	ADP	IN	_	5	case	_	_
5	Sponsoren	Sponsor	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	8	obl	_	_
6	und	und	CCONJ	CC	_	7	cc	_	_
7	Werbung	Werbung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	5	conj	_	_
8	finanziert	finanzieren	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Es	es	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux	_	_
3	geprüft	prüfen	VERB	VBN	Tense=Past	0	root	_	_
4	werden	werden	AUX	VB	_	3	aux:pass	_	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Winteruniversiade	Winteruniversiade	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
3	2019	2019	NUM	CD	NumType=Card	2	obl:tmod	_	Proper=True
4	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux:pass	_	_
5	von	von	ADP	IN	_	6	case	_	_
6	Krasnojarsk	Krasnojarsk	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing	7	obl:agent	_	_
7	ausgerichtet	ausrichten	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


