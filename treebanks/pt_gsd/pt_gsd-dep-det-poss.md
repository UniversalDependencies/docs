---
layout: base
title:  'Statistics of det:poss in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-det.html">det</a></tt>.

1725 nodes (1%) are attached to their parents as `det:poss`.

1634 instances of `det:poss` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13913043478261.

The following 18 pairs of parts of speech are connected with `det:poss`: <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1578; 91% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (60; 3% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (42; 2% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (20; 1% instances), <tt><a href="pt_gsd-pos-PART.html">PART</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-X.html">X</a></tt>-<tt><a href="pt_gsd-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det:poss	color:blue
1	A	o	DET	DET	_	2	det	_	_
2	ideia	ideia	NOUN	NOUN	_	0	root	_	_
3	é	ser	AUX	AUX	_	2	cop	_	_
4	de	_	ADP	ADP	_	7	mark	_	_
5	que	que	CCONJ	CONJ	_	7	mark	_	_
6	todos	_	PRON	PRON	_	7	nsubj	_	_
7	desliguem	desligar	VERB	VERB	_	2	nmod	_	_
8	seus	_	DET	DET	_	9	det:poss	_	_
9	celulares	_	NOUN	NOUN	_	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det:poss	color:blue
1	O	o	DET	DET	_	2	det	_	_
2	depoimento	depoimento	NOUN	NOUN	_	4	nsubj	_	_
3	dela	_	X	ADPPRON	_	2	det:poss	_	_
4	ficou	ficar	VERB	VERB	_	0	root	_	_
5	para	para	ADP	ADP	_	7	case	_	_
6	outro	_	DET	DET	_	7	det	_	_
7	dia	dia	NOUN	NOUN	_	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 det:poss	color:blue
1	Navarro	_	PROPN	PNOUN	_	7	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	.	_	3	punct	_	_
3	Perkins	_	PROPN	PNOUN	_	1	conj	_	_
4	e	e	CCONJ	CONJ	_	5	cc	_	_
5	Chaney	_	PROPN	PNOUN	_	1	conj	_	_
6	eram	_	AUX	AUX	_	7	cop	_	_
7	membros	membro	NOUN	NOUN	_	0	root	_	_
8	de	de	ADP	ADP	_	10	case	_	_
9	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	banda	banda	NOUN	NOUN	_	7	nmod	_	_
11	Jane	_	PROPN	PNOUN	_	10	appos	_	_
12	's	_	PROPN	PNOUN	_	11	det:poss	_	_
13	Addiction	_	PROPN	PNOUN	_	11	flat	_	SpaceAfter=No
14	;	_	PUNCT	.	_	7	punct	_	_

~~~


