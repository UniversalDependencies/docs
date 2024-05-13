---
layout: base
title:  'Statistics of advmod in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `advmod`

This relation is universal.

777 nodes (3%) are attached to their parents as `advmod`.

617 instances of `advmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.15315315315315.

The following 15 pairs of parts of speech are connected with `advmod`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (392; 50% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (169; 22% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (122; 16% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (34; 4% instances), <tt><a href="it_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (14; 2% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (13; 2% instances), <tt><a href="it_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="it_pud-pos-DET.html">DET</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="it_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 advmod	color:blue
1	Non	non	ADV	RB	Polarity=Neg	2	advmod	_	_
2	tutti	tutto	NOUN	NN	Gender=Masc|Number=Plur	3	nsubj	_	_
3	riescono	riuscire	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	ad	ad	ADP	IN	_	5	mark	_	_
5	andare	andare	VERB	VB	Voice=Act	3	xcomp	_	_
6	oltre	oltre	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 advmod	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 advmod	color:blue
1	Forse	forse	ADV	RB	_	10	advmod	_	_
2	l'	il	DET	DT	Gender=Masc|Number=Sing	3	det	_	SpaceAfter=No
3	abbigliamento	abbigliamento	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
4	richiesto	richiedere	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|Voice=Pass	3	acl	_	_
5	era	essere	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	10	cop	_	_
6	un	uno	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	po'	poco	ADV	B	_	10	advmod	_	_
8	a	a	ADP	IN	_	10	case	_	_
9	l'	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	antica	antico	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


