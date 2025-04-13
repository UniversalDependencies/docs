---
layout: base
title:  'Statistics of cop in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `cop`

This relation is universal.

299 nodes (1%) are attached to their parents as `cop`.

288 instances of `cop` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90301003344482.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (132; 44% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (130; 43% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (12; 4% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (9; 3% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="it_pud-pos-DET.html">DET</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Il	il	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
2	suo	suo	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	3	det:poss	_	_
3	gioco	gioco	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
4	può	potere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	aux	_	_
5	essere	essere	AUX	VB	Voice=Act	6	cop	_	_
6	duro	duro	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
7	ma	ma	CCONJ	CC	_	11	cc	_	_
8	sa	sapere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	aux	_	_
9	anche	anche	ADV	RB	_	11	advmod	_	_
10	essere	essere	AUX	VB	Voice=Act	11	cop	_	_
11	delicato	delicato	ADJ	JJ	Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 cop	color:blue
1	Il	il	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
2	terzo	terzo	ADJ	JJ	Gender=Masc|Number=Sing	3	amod	_	_
3	giorno	giorno	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	ero	essere	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Act	10	cop	_	_
6	di	di	ADP	IN	_	7	case	_	_
7	nuovo	nuovo	ADJ	JJ	Gender=Masc|Number=Sing	10	obl	_	_
8	su	su	ADP	IN	_	10	case	_	_
9	l'	il	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	EMIcro	EMIcro	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


