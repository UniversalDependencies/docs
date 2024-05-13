---
layout: base
title:  'Statistics of goeswith in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `goeswith`

This relation is universal.

46 nodes (0%) are attached to their parents as `goeswith`.

46 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `goeswith`: <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-X.html">X</a></tt> (15; 33% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-X.html">X</a></tt> (13; 28% instances), <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_penn-pos-X.html">X</a></tt> (13; 28% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-X.html">X</a></tt> (3; 7% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-X.html">X</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	Ama	ama	CCONJ	_	_	7	cc	_	_
2	yemeği	yemek	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
3	illa	illa	ADV	_	_	7	advmod	_	_
4	ki	ki	SCONJ	_	_	3	mark	_	_
5	Denny's	Denny's	PROPN	_	Case=Nom|Number=Sing|Typo=Yes	7	obl	_	_
6	de	_	X	_	_	5	goeswith	_	_
7	yemeyeceğiz	ye	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Fut|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Şu	şu	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	an	an	NOUN	_	Case=Nom|Number=Sing|Person=3|Typo=Yes	4	amod	_	_
3	ki	_	X	_	_	2	goeswith	_	_
4	hesap	hesap	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
5	numaralarını	numara	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	6	nmod	_	_
6	vermek	ver	NOUN	_	Case=Nom|Number=Sing|Person=3	7	xcomp	_	_
7	isteyeceğini	iste	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	ccomp	_	_
8	sanmıyorum	san	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Gelir	gelir	NOUN	_	Case=Nom|Number=Sing|Person=3	12	nsubj	_	_
2	,	,	PUNCT	_	_	12	punct	_	_
3	%	%	NUM	_	NumType=Ord|Typo=Yes	5	nummod	_	_
4	3.4	_	X	_	_	3	goeswith	_	_
5	düşüşle	düşüş	NOUN	_	Case=Ins|Number=Sing|Person=3	12	obl	_	_
6	8.7	8.7	NUM	_	NumType=Card	7	nummod	_	_
7	milyar	milyar	NUM	_	NumType=Card	8	nummod	_	_
8	$'dan	$'dan	NOUN	_	Case=Nom|Number=Sing|Person=3	11	nummod	_	_
9	8.4	8.4	NUM	_	NumType=Card	10	nummod	_	_
10	milyar	milyar	NUM	_	NumType=Card	11	nummod	_	_
11	$'a	$'a	NOUN	_	Case=Nom|Number=Sing|Person=3	12	obl	_	_
12	geriledi	gerile	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


