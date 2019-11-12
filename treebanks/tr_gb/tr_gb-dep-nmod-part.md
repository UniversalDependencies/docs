---
layout: base
title:  'Statistics of nmod:part in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nmod:part`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="tr_gb-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="tr_gb-dep-nmod-tmod.html">nmod:tmod</a></tt>.

61 nodes (0%) are attached to their parents as `nmod:part`.

61 instances of `nmod:part` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62295081967213.

The following 11 pairs of parts of speech are connected with `nmod:part`: <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (25; 41% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (17; 28% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (3; 5% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="tr_gb-pos-DET.html">DET</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:part	color:blue
1	Oyuncuların	oyuncu	NOUN	_	Case=Gen|Number=Plur	2	nmod:part	_	_
2	hepsi	hepsi	PRON	_	Case=Nom|Number=Sing	5	nsubj	_	_
3	yeni	yeni	ADJ	_	_	4	amod	_	_
4	kostümler	kostüm	NOUN	_	Case=Nom|Number=Plur	5	obj	_	_
5	istiyorlar	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod:part	color:blue
1	Çikolata	çikolata	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	lı	-li	ADP	_	_	1	case	_	_
3	pastadan	pasta	NOUN	_	Case=Abl|Number=Sing	5	nmod:part	_	_
4	iki	iki	NUM	_	NumType=Card	5	nummod	_	_
5	dilim	dilim	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	yedi	ye	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:part	color:blue
1	Osman	Osman	PROPN	_	Number=Sing	4	nsubj	_	_
2	yakın	yakın	ADJ	_	_	3	amod	_	_
3	arkadaşlarımdan	arkadaş	NOUN	_	Case=Abl|Number=Plur|Number[psor]=Sing|Person[psor]=1	4	nmod:part	_	_
4	biri	bir	NUM	_	Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
5	değildir	değil	AUX	_	Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


