---
layout: base
title:  'Statistics of aux:pass in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsklia-dep-aux.html">aux</a></tt>.

36 nodes (0%) are attached to their parents as `aux:pass`.

36 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (36; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux:pass	color:blue
1	seien	sei	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
2	den	den	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	_	_
3	blir	bli	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	em	em	X	_	_	6	discourse:filler	_	_
5	#	#	PUNCT	_	_	4	punct	_	_
6	levert	levere	VERB	_	VerbForm=Part	0	root	_	_
7	til	til	ADP	_	_	10	case	_	_
8	e	e	X	_	_	10	discourse:filler	_	_
9	#	#	PUNCT	_	_	8	punct	_	_
10	fisketilverkarar	fisketilverkar	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	6	obl	_	_
11	.	$.	PUNCT	_	_	6	punct	_	_

~~~


