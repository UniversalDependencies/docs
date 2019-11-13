---
layout: base
title:  'Statistics of nmod:tmod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="tr_gb-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="tr_gb-dep-nmod-part.html">nmod:part</a></tt>.

9 nodes (0%) are attached to their parents as `nmod:tmod`.

9 instances of `nmod:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11111111111111.

The following 5 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (3; 33% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 11% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:tmod	color:blue
1	8	8	NUM	_	NumType=Card	2	nummod	_	_
2	Kasım	kasım	NOUN	_	Case=Nom|Number=Sing	3	nmod:tmod	_	_
3	1984’te	1984	NUM	_	Case=Loc|Number=Sing|NumType=Card	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod:tmod	color:blue
1	Beş	beş	NUM	_	NumType=Card	2	nummod	_	_
2	gün	gün	NOUN	_	Case=Nom|Number=Sing	5	nmod:tmod	_	_
3	sonra	sonra	ADP	_	_	2	case	_	_
4	sınavım	sınav	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nsubj	_	_
5	var	var	ADJ	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:tmod	color:blue
1	Her	her	DET	_	Definite=Def|Number=Sing	2	det	_	_
2	gün	gün	NOUN	_	Case=Nom|Number=Sing	3	nmod:tmod	_	_
3	işte	iş	NOUN	_	Case=Loc|Number=Sing	0	root	_	_
4	oluyorum	ol	AUX	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


