---
layout: base
title:  'Statistics of det:poss in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-det.html">det</a></tt>.

1730 nodes (1%) are attached to their parents as `det:poss`.

1637 instances of `det:poss` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13872832369942.

The following 18 pairs of parts of speech are connected with `det:poss`: <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1578; 91% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (60; 3% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (47; 3% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (20; 1% instances), <tt><a href="pt_gsd-pos-PART.html">PART</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-X.html">X</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:poss	color:blue
1	A	_	DET	DET	_	2	det	_	_
2	ideia	ideia	NOUN	NOUN	_	0	root	_	_
3	é	ser	AUX	AUX	_	2	cop	_	_
4	de	_	ADP	ADP	_	7	mark	_	_
5	que	_	CCONJ	CONJ	_	7	mark	_	_
6	todos	_	PRON	PRON	_	7	nsubj	_	_
7	desliguem	desligar	VERB	VERB	_	2	nmod	_	_
8	seus	_	DET	DET	_	9	det:poss	_	_
9	celulares	_	NOUN	NOUN	_	7	obj	_	SpaceAfter=No
10	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det:poss	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	depoimento	depoimento	NOUN	NOUN	_	4	nsubj	_	_
3	dela	_	X	ADPPRON	_	2	det:poss	_	_
4	ficou	ficar	VERB	VERB	_	0	root	_	_
5	para	_	ADP	ADP	_	7	case	_	_
6	outro	_	DET	DET	_	7	det	_	_
7	dia	dia	NOUN	NOUN	_	4	nmod	_	SpaceAfter=No
8	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Festas	_	PROPN	PNOUN	_	0	root	_	_
2	e	_	CCONJ	CONJ	_	3	cc	_	_
3	Romarias	_	PROPN	PNOUN	_	1	conj	_	_
4	--	_	PUNCT	.	_	6	punct	_	_
5	Nossa	_	PROPN	PNOUN	_	6	det:poss	_	_
6	Senhora	_	PROPN	PNOUN	_	1	appos	_	_
7	de	de	ADP	ADP	_	9	case	_	_
8	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Graça	_	PROPN	PNOUN	_	6	nmod	_	_
10	--	_	PUNCT	.	_	6	punct	_	_
11	08	_	NUM	NUM	NumType=Card	6	nmod	_	_
12	de	_	ADP	ADP	_	13	case	_	_
13	Setembro	_	PROPN	PNOUN	_	11	nmod	_	SpaceAfter=No
14	;	_	PUNCT	.	_	1	punct	_	_

~~~


