---
layout: base
title:  'Statistics of aux in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_pud-dep-aux-pass.html">aux:pass</a></tt>.

462 nodes (2%) are attached to their parents as `aux`.

461 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31818181818182.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (431; 93% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (14; 3% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (12; 3% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-DET.html">DET</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	In	in	ADP	IN	_	2	case	_	_
2	precedenza	precedenza	NOUN	NN	Gender=Fem|Number=Sing	7	obl	_	_
3	solo	solo	ADV	RB	_	5	advmod	_	_
4	i	il	DET	DT	Gender=Masc|Number=Plur	5	det	_	_
5	blogger	blogger	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj	_	_
6	avevano	avere	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	7	aux	_	_
7	visto	vedere	VERB	VBN	Tense=Past	0	root	_	_
8	i	il	DET	DT	Gender=Masc|Number=Plur	9	det	_	_
9	jet	jet	NOUN	NN	Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 aux	color:blue
1	Da	da	ADP	IN	Gender=Masc|Number=Plur	3	case	_	_
2	gli	il	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
3	anni	anno	NOUN	NN	Gender=Masc|Number=Plur	15	obl	_	_
4	'60	'60	NUM	CD	_	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	l'	il	DET	DT	Gender=Fem|Number=Sing	7	det	_	SpaceAfter=No
7	economia	economia	NOUN	NN	Gender=Fem|Number=Sing	15	nsubj	_	_
8	di	di	ADP	IN	_	10	case	_	_
9	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	città	città	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	_
11	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	15	aux	_	_
12	stata	essere	AUX	VBN	Gender=Fem|Number=Sing|Tense=Past	15	cop	_	_
13	in	in	ADP	IN	_	15	case	_	_
14	netto	netto	ADJ	JJ	Gender=Masc|Number=Sing	15	amod	_	_
15	declino	declino	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
16	.	.	PUNCT	.	_	15	punct	_	_

~~~


