---
layout: base
title:  'Statistics of nummod:gov in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="sr-dep-nummod.html">nummod</a></tt>.

611 nodes (1%) are attached to their parents as `nummod:gov`.

608 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71358428805237.

The following 10 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (574; 94% instances), <tt><a href="sr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (10; 2% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="sr-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sr-pos-NUM.html">NUM</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nummod:gov	color:blue
1	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
2	Jedna	jedan	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	6	nummod:gov	_	_
3	od	od	ADP	_	Case=Gen	6	case	_	_
4	najvažnijih	važan	ADJ	_	Case=Gen|Definite=Def|Degree=Sup|Gender=Fem|Number=Plur	6	amod	_	_
5	državnih	državni	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	_
6	institucija	institucija	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	8	nsubj	_	_
7	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	8	cop	_	_
8	paralisana	paralisati	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nummod:gov	color:blue
1	U	u	ADP	_	Case=Loc	3	case	_	_
2	grčko-rimskom	grčko-rimski	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	3	amod	_	_
3	rvanju	rvanje	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Teodoros	Teodoros	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
6	Tunusides	Tunusides	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	flat	_	_
7	izgubio	izgubiti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
8	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
9	od	od	ADP	_	Case=Gen	10	case	_	_
10	Gruzijca	Gruzijac	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	7	obl	_	_
11	Ramaza	Ramazo	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	10	flat	_	_
12	Nozadzea	Nozadze	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	11	flat	_	_
13	u	u	ADP	_	Case=Loc	14	case	_	_
14	kategoriji	kategorija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	7	obl	_	_
15	do	do	ADP	_	Case=Gen	17	case	_	_
16	96	96	NUM	_	NumType=Card	17	nummod:gov	_	_
17	kg	kg	PROPN	_	Case=Gen|Gender=Masc|Number=Plur	14	nmod	_	SpaceAfter=No
18	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod:gov	color:blue
1	Samo	samo	ADV	_	Degree=Pos	3	advmod	_	_
2	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	5	compound	_	_
3	25	25	NUM	_	NumType=Card	4	nummod:gov	_	_
4	odsto	odsto	ADV	_	Degree=Pos	5	nsubj	_	_
5	izjasnilo	izjasniti	VERB	_	Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	_
6	u	u	ADP	_	Case=Acc	8	case	_	_
7	njegovu	njegov	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|Poss=Yes	8	det	_	_
8	korist	korist	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


