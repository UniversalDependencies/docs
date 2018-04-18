---
layout: base
title:  'Statistics of punct in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `punct`

This relation is universal.

2210 nodes (20%) are attached to their parents as `punct`.

1573 instances of `punct` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.20316742081448.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (1209; 55% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (469; 21% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (238; 11% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (113; 5% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (75; 3% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (39; 2% instances), <tt><a href="kk-pos-ADV.html">ADV</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (27; 1% instances), <tt><a href="kk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="kk-pos-AUX.html">AUX</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (13; 1% instances), <tt><a href="kk-pos-ADP.html">ADP</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="kk-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="kk-pos-X.html">X</a></tt>-<tt><a href="kk-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 punct	color:blue
1	Бала	бала	NOUN	n	Case=Nom	2	obj	_	_
2	сұрады	сұра	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	7	punct	_	_
4	қалай	қалай	X	x	_	5	dep	_	_
5	да	да	SCONJ	cnjadv	_	7	cc	_	_
6	бала	бала	NOUN	n	Case=Nom	7	nsubj	_	_
7	болмады	бол	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	conj	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 punct	color:blue
1	Бес	бес	NUM	num	NumType=Card	2	nummod	_	_
2	жылдың	жыл	NOUN	n	Case=Gen	3	nmod:poss	_	_
3	ішінде	іш	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
4	үш	үш	NUM	num	NumType=Card	5	nummod	_	_
5	баласы	бала	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	nsubj	_	_
6	бар	бар	ADJ	adj	_	0	root	_	_
7	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	:	:	PUNCT	sent	_	6	punct	_	_
9	екеуі	екеу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	10	nsubj	_	_
10	ұл	ұл	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	10	punct	_	_
12	біреуі	біреу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	13	nsubj	_	_
13	қыз	қыз	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 punct	color:blue
1	Бес	бес	NUM	num	NumType=Card	2	nummod	_	_
2	жылдың	жыл	NOUN	n	Case=Gen	3	nmod:poss	_	_
3	ішінде	іш	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
4	үш	үш	NUM	num	NumType=Card	5	nummod	_	_
5	баласы	бала	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	nsubj	_	_
6	бар	бар	ADJ	adj	_	0	root	_	_
7	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	:	:	PUNCT	sent	_	6	punct	_	_
9	екеуі	екеу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	10	nsubj	_	_
10	ұл	ұл	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	10	punct	_	_
12	біреуі	біреу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	13	nsubj	_	_
13	қыз	қыз	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	13	punct	_	_

~~~


