---
layout: base
title:  'Statistics of aux:pass in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-aux.html">aux</a></tt>.

1610 nodes (1%) are attached to their parents as `aux:pass`.

1573 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20993788819876.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (1603; 100% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	2:nummod	_
2	months	month	NOUN	NNS	Number=Plur	3	obl:npmod	3:obl:npmod	_
3	later	late	ADV	RBR	Degree=Cmp	7	advmod	7:advmod	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj:pass	7:nsubj:pass	_
6	were	be	AUX	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux:pass	color:blue
1	Try	try	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
2	googling	google	VERB	VBG	VerbForm=Ger	1	xcomp	1:xcomp	_
3	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	2:obj	_
4	or	or	CCONJ	CC	_	5	cc	5:cc	_
5	type	type	VERB	VB	Mood=Imp|VerbForm=Fin	1	conj	1:conj:or	_
6	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	obj	5:obj	_
7	into	into	ADP	IN	_	8	case	8:case	_
8	youtube	youtube	PROPN	NNP	Number=Sing	5	obl	5:obl:into	_
9	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	12	nsubj:pass	12:nsubj:pass	_
10	might	might	AUX	MD	VerbForm=Fin	12	aux	12:aux	_
11	get	get	AUX	VB	VerbForm=Inf	12	aux:pass	12:aux:pass	_
12	lucky	lucky	ADJ	JJ	Degree=Pos	1	parataxis	1:parataxis	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	6:nsubj:pass	_
2	s	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	6:aux:pass	_
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	6	cop	6:cop	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	_
5	few	few	ADJ	JJ	Degree=Pos	6	amod	6:amod	_
6	years	year	NOUN	NNS	Number=Plur	0	root	0:root	_
7	since	since	SCONJ	IN	_	12	mark	12:mark	_
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	12:nsubj	_
9	have	have	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	aux	12:aux	_
10	been	be	AUX	VBN	Tense=Past|VerbForm=Part	12	cop	12:cop	_
11	to	to	ADP	IN	_	12	case	12:case	_
12	Ipanema	Ipanema	PROPN	NNP	Number=Sing	6	advcl	6:advcl:to	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


