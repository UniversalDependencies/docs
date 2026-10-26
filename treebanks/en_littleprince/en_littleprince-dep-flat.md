---
layout: base
title:  'Statistics of flat in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `flat`

This relation is universal.

10 nodes (0%) are attached to their parents as `flat`.

10 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (9; 90% instances), <tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Chapter	Chapter	PROPN	NNP	Number=Sing	0	root	_	_
2	5	5	NUM	CD	NumType=Card	1	flat	_	NumForm=Digit
3	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	Everybody	everybody	PRON	NN	Number=Sing	2	nsubj	_	_
2	knows	know	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	that	that	SCONJ	IN	_	15	mark	_	_
4	when	when	SCONJ	WRB	_	7	mark	_	_
5	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	noon	noon	NOUN	NN	Number=Sing	15	advcl	_	_
8	in	in	ADP	IN	_	10	case	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
10	United	United	PROPN	NNP	_	7	obl	_	_
11	States	State	PROPN	NNPS	Number=Plur	10	flat	_	_
12	the	the	DET	DT	Definite=Def|PronType=Art	13	det	_	_
13	sun	sun	NOUN	NN	Number=Sing	15	nsubj	_	_
14	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	setting	set	VERB	VBG	Tense=Pres|VerbForm=Part	2	ccomp	_	_
16	over	over	ADP	IN	_	17	case	_	_
17	France	France	PROPN	NNP	Number=Sing	15	obl	_	_
18	.	.	PUNCT	.	_	2	punct	_	_

~~~


