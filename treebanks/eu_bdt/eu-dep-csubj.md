---
layout: base
title:  'Statistics of csubj in UD_Basque'
udver: '2'
---

## Treebank Statistics: UD_Basque: Relations: `csubj`

This relation is universal.

305 nodes (0%) are attached to their parents as `csubj`.

162 instances of `csubj` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.09180327868852.

The following 20 pairs of parts of speech are connected with `csubj`: <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (124; 41% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (90; 30% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (42; 14% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (10; 3% instances), <tt><a href="eu-pos-ADV.html">ADV</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="eu-pos-DET.html">DET</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="eu-pos-ADV.html">ADV</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="eu-pos-AUX.html">AUX</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="eu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="eu-pos-X.html">X</a></tt>-<tt><a href="eu-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="eu-pos-X.html">X</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="eu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="eu-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Debekatua	debekatu	VERB	_	Case=Abs|Definite=Def|Number=Sing|VerbForm=Part	0	root	_	_
2	dago	egon	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	1	cop	_	_
3	haurrak	haur	NOUN	_	Case=Abs|Definite=Def|Number=Plur	5	obj	_	_
4	lanerako	lan	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	5	obl	_	_
5	kontratatzea	kontratatu	VERB	_	Case=Abs	1	csubj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Ondorioz	ondorio	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind	6	obl	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	hori	hori	DET	_	Case=Abs|Definite=Def|Number=Sing	4	obj	_	_
4	leporatzea	leporatu	VERB	_	Case=Abs	5	csubj	_	_
5	gogorra	gogor	ADJ	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
6	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj	color:blue
1	helburuak	helburu	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	3	obj	_	_
2	ez	ez	PART	_	Polarity=Neg	3	advmod	_	_
3	lortzea	lortu	VERB	_	Case=Abs	10	csubj	_	_
4	edo	edo	CCONJ	_	_	7	cc	_	_
5	ametsak	amets	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	7	obj	_	_
6	ez	ez	PART	_	Polarity=Neg	7	advmod	_	_
7	betetzea	bete	VERB	_	Case=Abs	3	conj	_	_
8	ez	ez	PART	_	Polarity=Neg	9	advmod	_	_
9	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	10	cop	_	_
10	trajedia	tragedia	NOUN	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


