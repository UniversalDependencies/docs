---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-aux.html">aux</a></tt>.

1145 nodes (1%) are attached to their parents as `aux:pass`.

1145 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08034934497817.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (1130; 99% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (15; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	acusado	acusar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	de	de	ADP	_	_	5	case	_	_
5	vandalismo	vandalismo	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	decoração	decoração	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	também	também	ADV	_	_	5	advmod	_	_
4	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	divertida	divertido	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


