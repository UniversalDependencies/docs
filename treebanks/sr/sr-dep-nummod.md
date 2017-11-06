---
layout: base
title:  'Statistics of nummod in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="sr-dep-nummod-gov.html">nummod:gov</a></tt>.

1187 nodes (1%) are attached to their parents as `nummod`.

1129 instances of `nummod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3167649536647.

The following 15 pairs of parts of speech are connected with `nummod`: <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1105; 93% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (42; 4% instances), <tt><a href="sr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="sr-pos-NUM.html">NUM</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sr-pos-ADP.html">ADP</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	Esat	Esat	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	Beriša	Beriša	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	cop	_	_
4	jedan	jedan	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	6	nummod	_	_
5	takav	takav	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	primer	primer	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Trenutno	trenutno	ADV	_	Degree=Pos	4	advmod	_	_
2	putnički	putnički	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	_
3	vozovi	voz	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
4	saobraćaju	saobraćati	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
5	dva	dva	NUM	_	NumType=Card	6	nummod	_	_
6	puta	put	ADV	_	Degree=Pos	4	obl	_	_
7	dnevno	dnevno	ADV	_	Degree=Pos	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nummod	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Izvršenje	izvršenje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
3	smrtne	smrtan	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	kazne	kazna	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
5	"	"	PUNCT	_	_	2	punct	_	_
6	izbačeno	izbaciti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	_
7	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	aux	_	_
8	iz	iz	ADP	_	Case=Gen	9	case	_	_
9	Člana	Član	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	6	obl	_	_
10	15.	15.	NUM	_	NumType=Ord	9	nummod	_	_

~~~


