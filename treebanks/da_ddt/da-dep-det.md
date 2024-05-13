---
layout: base
title:  'Statistics of det in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Relations: `det`

This relation is universal.

5476 nodes (5%) are attached to their parents as `det`.

5465 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75073046018992.

The following 3 pairs of parts of speech are connected with `det`: <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-DET.html">DET</a></tt> (4977; 91% instances), <tt><a href="da-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da-pos-DET.html">DET</a></tt> (341; 6% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-DET.html">DET</a></tt> (158; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 det	color:blue
1	H.L.	H.L.	PROPN	_	_	8	nsubj	_	_
2	Hansen	Hansen	PROPN	_	_	1	flat	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
4	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
5	udsædvanlig	udsædvanlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	frodig	frodig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	conj	_	_
8	personlighed	personlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	2	det	_	_
2	nuværende	nuværende	ADJ	_	Degree=Pos	3	nsubj	_	_
3	sluttede	slutte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	allerede	allerede	ADV	_	_	6	advmod	_	_
5	i	i	ADP	_	AdpType=Prep	4	case	_	_
6	august	august	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	3	obl	_	_
7	1991	1991	NUM	_	NumType=Card	6	nmod	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	-	-	PUNCT	_	_	6	punct	_	_
2	og	og	CCONJ	_	_	6	cc	_	_
3	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	5	det	_	_
4	hele	hel	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	5	amod	_	_
5	Camel	Camel	PROPN	_	_	6	nsubj	_	_
6	koster	koste	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	ikke	ikke	ADV	_	_	6	advmod	_	_
8	ekstra	ekstra	ADV	_	Degree=Pos	6	obj	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


