---
layout: base
title:  'Statistics of advmod in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `advmod`

This relation is universal.

10359 nodes (4%) are attached to their parents as `advmod`.

8243 instances of `advmod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23467516169514.

The following 19 pairs of parts of speech are connected with `advmod`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (6032; 58% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (1675; 16% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (1661; 16% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (349; 3% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (222; 2% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (156; 2% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (141; 1% instances), <tt><a href="it-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (79; 1% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (10; 0% instances), <tt><a href="it-pos-SYM.html">SYM</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (10; 0% instances), <tt><a href="it-pos-DET.html">DET</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-SCONJ.html">SCONJ</a></tt> (7; 0% instances), <tt><a href="it-pos-ADP.html">ADP</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 advmod	color:blue
1	Stia	stare	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	a	a	ADP	E	_	3	case	_	_
3	casa	casa	NOUN	S	Gender=Fem|Number=Sing	1	obl	_	_
4	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	stesso	stesso	ADV	B	_	1	advmod	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Ecco	ecco	ADV	B	_	3	advmod	_	_
2	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	arringa	arringa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	di	di	ADP	E	_	5	case	_	_
5	Tiziana	Tiziana	PROPN	SP	_	3	nmod	_	_
6	Maiolo	Maiolo	PROPN	SP	_	5	flat:name	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod	color:blue
1	Le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	chiavi	chiave	NOUN	S	Gender=Fem|Number=Plur	10	nsubj	_	_
3	di	di	ADP	E	_	6	case	_	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
5	suoi	suo	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	film	film	NOUN	S	Gender=Masc	2	nmod	_	_
7	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
8	fin	fino	ADV	B	_	9	advmod	_	_
9	troppo	troppo	ADV	B	_	10	advmod	_	_
10	leggibili	leggibile	ADJ	A	Number=Plur	0	root	_	_
11	e	e	CCONJ	CC	_	12	cc	_	_
12	giuste	giusto	ADJ	A	Gender=Fem|Number=Plur	10	conj	_	SpaceAfter=No
13	"	"	PUNCT	FB	_	12	punct	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	10	punct	_	_

~~~


