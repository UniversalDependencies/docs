---
layout: base
title:  'Statistics of nummod in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `nummod`

This relation is universal.

2994 nodes (1%) are attached to their parents as `nummod`.

2907 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32331329325317.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (2720; 91% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (126; 4% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (57; 2% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (35; 1% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (25; 1% instances), <tt><a href="de_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-NUM.html">NUM</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	Für	für	ADP	APPR	_	2	case	_	_
2	mich	ich	PRON	PPER	Case=Acc|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
3	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Anwaltskanzlei	Anwaltskanzlei	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	Nummer	Nummer	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	4	nmod	_	_
6	EINS	eins	NUM	CARD	NumType=Card	5	nummod	_	_
7	in	in	ADP	APPR	_	8	case	_	_
8	Dresden	Dresden	PROPN	NE	Case=Dat|Gender=Neut|Number=Sing	6	nmod	_	SpaceAfter=No|NamedEntity=Yes
9	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Knapp	knapp	ADV	ADJD	_	2	advmod	_	_
2	20	20	NUM	CARD	NumType=Card	3	nummod	_	_
3	Euro	Euro	PROPN	NN	Case=Acc|Gender=Masc|Number=Plur	8	obj	_	NamedEntity=Yes
4	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	je	je	ADV	ADV	_	8	advmod	_	_
6	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Teil	Teil	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
8	gekostet	kosten	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Bei	bei	ADP	APPR	_	5	case	_	_
2	über	über	ADV	ADV	_	3	advmod	_	_
3	150	150	NUM	CARD	NumType=Card	4	nummod	_	_
4	T	Tausend	NUM	NN	Abbr=Yes|Case=Dat|Gender=Neut|Number=Plur|NumType=Card	5	nummod	_	_
5	€	€	SYM	NN	_	12	nmod	_	_
6	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
7	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
8	auch	auch	ADV	ADV	_	12	advmod	_	_
9	ja	ja	ADV	ADV	_	12	advmod	_	_
10	nicht	nicht	PART	PTKNEG	Polarity=Neg	12	advmod	_	_
11	so	so	ADV	ADV	_	12	advmod	_	_
12	schwer	schwer	ADJ	ADJD	_	0	root	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	12	punct	_	_

~~~


