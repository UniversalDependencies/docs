---
layout: base
title:  'Statistics of aux in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_pud-dep-aux-pass.html">aux:pass</a></tt>.

463 nodes (2%) are attached to their parents as `aux`.

463 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30669546436285.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (426; 92% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (14; 3% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="it_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-DET.html">DET</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 aux	color:blue
1	Dagli	da	DET	DT	Gender=Masc|Number=Plur	2	case	_	_
2	anni	anno	NOUN	NN	Gender=Masc|Number=Plur	14	obl	_	_
3	'60	'60	NUM	CD	_	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	2	punct	_	_
5	l'	il	DET	DT	Gender=Fem|Number=Sing	6	det	_	SpaceAfter=No
6	economia	economia	NOUN	NN	Gender=Fem|Number=Sing	14	nsubj	_	_
7	di	di	ADP	IN	_	9	case	_	_
8	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	città	città	NOUN	NN	Gender=Fem|Number=Sing	6	nmod	_	_
10	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	14	aux	_	_
11	stata	essere	AUX	VBN	Gender=Fem|Number=Sing|Tense=Past	14	cop	_	_
12	in	in	ADP	IN	_	14	case	_	_
13	netto	netto	ADJ	JJ	Gender=Masc|Number=Sing	14	amod	_	_
14	declino	declino	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


