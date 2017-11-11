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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Druga	drugi	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	2	nummod	_	_
2	dvojica	dvojica	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	4	aux	_	_
4	rekli	reći	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
5	da	da	SCONJ	_	_	7	mark	_	_
6	neće	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
7	prisustvovati	prisustvovati	VERB	_	VerbForm=Inf	4	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Trenutna	trenutan	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	stopa	stopa	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	nezaposlenosti	nezaposlenost	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	iznosi	iznositi	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	12,4	12,4	NUM	_	NumType=Card	6	nummod	_	_
6	odsto	odsto	ADV	_	Degree=Pos	4	advmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

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


