---
layout: base
title:  'Statistics of nmod:part in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nmod:part`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_gb-dep-nmod-comp.html">nmod:comp</a></tt>.

62 nodes (0%) are attached to their parents as `nmod:part`.

62 instances of `nmod:part` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.59677419354839.

The following 7 pairs of parts of speech are connected with `nmod:part`: <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (29; 47% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (20; 32% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (6; 10% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:part	color:blue
1	Halk	halk	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	politikacıların	politikacı	NOUN	_	Case=Gen|Number=Plur	3	nmod:part	_	_
3	çoğuna	çok	PRON	_	Case=Dat|Number=Sing|PronType=Ind	4	obl	_	_
4	güvenmiyor	güven	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

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
4	biri	bir	NUM	_	Number=Sing|Number[psor]=Sing|NumType=Card|Person[psor]=3	0	root	_	_
5	değildir	değil	AUX	_	Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


