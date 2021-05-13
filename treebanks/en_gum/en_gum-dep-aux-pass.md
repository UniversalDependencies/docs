---
layout: base
title:  'Statistics of aux:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-aux.html">aux</a></tt>.

1100 nodes (1%) are attached to their parents as `aux:pass`.

1099 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23272727272727.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1084; 99% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (16; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	His	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=preparation:20->21|Entity=(abstract-34(person-3-Lord_Byron)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(abstract-35)abstract-34)
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	to	to	ADP	IN	_	10	case	10:case	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(event-36
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	7:obl:to	Entity=event-36)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Not	not	PART	RB	Polarity=Neg	4	advmod	4:advmod	Discourse=preparation:71->72
2	all	all	PRON	DT	_	4	nsubj:pass	4:nsubj:pass	_
3	were	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	pleased	pleased	ADJ	JJ	Degree=Pos	0	root	0:root	_
5	with	with	ADP	IN	_	8	case	8:case	_
6	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Entity=(abstract-78
7	final	final	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	choice	choice	NOUN	NN	Number=Sing	4	obl	4:obl:with	_
9	of	of	ADP	IN	_	10	case	10:case	_
10	locations	location	NOUN	NNS	Number=Plur	8	nmod	8:nmod:of	Entity=(place-73)abstract-78)|SpaceAfter=No
11	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


