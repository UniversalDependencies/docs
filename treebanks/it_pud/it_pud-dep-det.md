---
layout: base
title:  'Statistics of det in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="it_pud-dep-det-poss.html">det:poss</a></tt>.

3751 nodes (16%) are attached to their parents as `det`.

3751 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16022394028259.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (3028; 81% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (518; 14% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (145; 4% instances), <tt><a href="it_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (22; 1% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (18; 0% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="it_pud-pos-X.html">X</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	La	il	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	cifra	cifra	NOUN	NN	Gender=Fem|Number=Sing	7	nsubj	_	_
3	massima	massimo	ADJ	JJS	Degree=Abs|Gender=Fem|Number=Sing	2	amod	_	_
4	consentita	consentire	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|Voice=Pass	2	acl	_	_
5	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	7	cop	_	_
6	5.000	5.000	NUM	CD	_	7	nummod	_	_
7	dollari	dollaro	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
8	a	a	ADP	IN	_	9	case	_	_
9	persona	persona	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Ha	avere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	aux	_	_
2	lavorato	lavorare	VERB	VBN	Tense=Past	0	root	_	_
3	come	come	ADP	IN	_	4	case	_	_
4	dipendente	dipendente	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
5	di	di	ADP	IN	_	7	case	_	_
6	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	BBC	BBC	PROPN	NNP	Gender=Fem|Number=Sing	4	nmod	_	_
8	per	per	ADP	IN	_	10	case	_	_
9	dieci	dieci	NUM	CD	_	10	nummod	_	_
10	anni	anno	NOUN	NN	Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	L'	il	DET	DT	Gender=Fem|Number=Sing	2	det	_	SpaceAfter=No
2	Universiade	Universiade	PROPN	NN	Gender=Fem|Number=Sing	8	nsubj	_	_
3	invernale	invernale	ADJ	JJ	Gender=Fem|Number=Sing	2	amod	_	Proper=True
4	di	di	ADP	IN	_	6	case	_	_
5	il	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	2019	2019	NUM	CD	_	2	nmod	_	_
7	si	si	PRON	SE	Number=Sing|Person=3	8	expl	_	_
8	terrà	tenere	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	0	root	_	_
9	a	a	ADP	IN	_	10	case	_	_
10	Krasnojarsk	Krasnojarsk	PROPN	NNP	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


