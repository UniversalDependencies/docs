---
layout: base
title:  'Statistics of nsubj:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nsubj.html">nsubj</a></tt>.

897 nodes (1%) are attached to their parents as `nsubj:pass`.

892 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75139353400223.

The following 13 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (483; 54% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (288; 32% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (106; 12% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	His	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	_	Entity=(abstract-33(person-3)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	_	Entity=(abstract-13)abstract-33)
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	_	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
8	to	to	ADP	IN	_	10	case	_	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	_	Entity=(event-34
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	_	Entity=event-34)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj:pass	_	Entity=(object-106)
2	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	sold	sell	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	at	at	ADP	IN	_	7	case	_	_
5	eighth-grade	eighth-grade	NOUN	NN	Number=Sing	7	compound	_	Entity=(event-107(organization-108)
6	basketball	basketball	NOUN	NN	Number=Sing	7	compound	_	Entity=(object-109)
7	games	game	NOUN	NNS	Number=Plur	3	obl	_	_
8	on	on	ADP	IN	_	10	case	_	_
9	Friday	Friday	PROPN	NNP	Number=Sing	10	compound	_	Entity=(time-110
10	nights	night	NOUN	NNS	Number=Plur	7	nmod	_	Entity=event-107)time-110)|SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	His	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	_	Entity=(person-1)
2	Seventh	Seventh	PROPN	NNP	Number=Sing	3	amod	_	Entity=(abstract-77
3	Symphony	Symphony	PROPN	NNP	Number=Sing	5	nsubj:pass	_	Entity=abstract-77)
4	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	written	write	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
6	for	for	ADP	IN	_	7	case	_	_
7	London	London	PROPN	NNP	Number=Sing	5	obl	_	Entity=(place-67)|SpaceAfter=No
8	.	.	PUNCT	.	_	5	punct	_	_

~~~


