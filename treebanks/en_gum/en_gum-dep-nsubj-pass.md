---
layout: base
title:  'Statistics of nsubj:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>.

619 nodes (1%) are attached to their parents as `nsubj:pass`.

615 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.69466882067851.

The following 14 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (319; 52% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (209; 34% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (74; 12% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	history	history	NOUN	NN	Number=Sing	4	nsubj:pass	_	_
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	written	write	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
5	with	with	ADP	IN	_	7	case	_	_
6	red	red	ADJ	JJ	Degree=Pos	7	amod	_	_
7	ink	ink	NOUN	NN	Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	sold	sell	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	at	at	ADP	IN	_	7	case	_	_
5	eighth-grade	eighth-grade	NOUN	NN	Number=Sing	7	compound	_	_
6	basketball	basketball	NOUN	NN	Number=Sing	7	compound	_	_
7	games	game	NOUN	NNS	Number=Plur	3	obl	_	_
8	on	on	ADP	IN	_	10	case	_	_
9	Friday	Friday	PROPN	NNP	Number=Sing	10	compound	_	_
10	nights	night	NOUN	NNS	Number=Plur	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Otto	Otto	PROPN	NNP	Number=Sing	4	nsubj:pass	_	_
2	Jespersen	Jespersen	PROPN	NNP	Number=Sing	1	flat	_	_
3	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	born	bear	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
5	in	in	ADP	IN	_	6	case	_	_
6	Randers	Randers	PROPN	NNP	Number=Sing	4	obl	_	_
7	in	in	ADP	IN	_	8	case	_	_
8	Jutland	Jutland	PROPN	NNP	Number=Sing	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	_	_

~~~


