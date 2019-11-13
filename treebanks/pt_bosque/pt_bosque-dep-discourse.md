---
layout: base
title:  'Statistics of discourse in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `discourse`

This relation is universal.

63 nodes (0%) are attached to their parents as `discourse`.

56 instances of `discourse` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.3968253968254.

The following 17 pairs of parts of speech are connected with `discourse`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (28; 44% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-INTJ.html">INTJ</a></tt> (10; 16% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt> (6; 10% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (5; 8% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pt_bosque-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 discourse	color:blue
1	Compreendem	compreender	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	3	obj	_	_
3	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Int	7	obj	_	_
4	é	ser	AUX	_	_	7	discourse	_	MWE=é_que|MWEPOS=INTJ
5	que	que	SCONJ	_	_	4	fixed	_	_
6	vocês	você	PRON	_	Case=Nom|Gender=Unsp|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
7	queriam	querer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
8	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 discourse	color:blue
1	«	«	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Chegamos	chegar	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	até	até	ADP	_	_	4	case	_	_
4	aqui	aqui	ADV	_	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	claro	claro	INTJ	_	_	2	discourse	_	SpaceAfter=No
7	,	,	PUNCT	_	_	2	punct	_	_
8	também	também	ADV	_	_	2	advmod	_	_
9	graças	graças	ADV	_	_	11	case	_	MWE=graças_a|MWEPOS=ADP
10	a	a	ADP	_	_	9	fixed	_	_
11	Cruyff	Cruyff	PROPN	_	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
12	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 discourse	color:blue
1	R.	r.	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	_	_	1	punct	_	_
3	Não	não	ADV	_	Polarity=Neg	6	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	não	não	ADV	_	Polarity=Neg	6	advmod	_	_
6	acredito	acreditar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


