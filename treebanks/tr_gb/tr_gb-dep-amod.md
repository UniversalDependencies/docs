---
layout: base
title:  'Statistics of amod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `amod`

This relation is universal.

304 nodes (2%) are attached to their parents as `amod`.

302 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45065789473684.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (294; 97% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 amod	color:blue
1	Bundan	bu	PRON	_	Case=Abl|Number=Sing|Polarity=Pos	3	nmod:comp	_	_
2	daha	daha	ADV	_	_	3	advmod	_	_
3	uygun	uygun	ADJ	_	_	5	amod	_	_
4	bir	bir	DET	_	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	sözcük	sözcük	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	düşünemiyorum	düşün	VERB	_	Aspect=Prog|Mood=Pot|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Bugün	bugün	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	kü	ki	ADP	_	_	1	case	_	_
3	konuğumuz	konuk	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	9	nsubj:cop	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	ülkemizin	ülke	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Plur|Person[psor]=1	7	nmod	_	_
6	genç	genç	ADJ	_	_	7	amod	_	_
7	şairlerinden	şair	NOUN	_	Case=Abl|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	nmod:part	_	_
8	Küçük	küçük	ADJ	_	_	9	amod	_	_
9	İskender	İskender	PROPN	_	Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 amod	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing	2	obj	_	_
2	kedinin	kedi	NOUN	_	Case=Gen|Number=Sing	6	nsubj	_	_
3	insana	insan	NOUN	_	Case=Dat|Number=Sing	6	obl	_	_
4	hoş	hoş	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	Definite=Ind|Number=Sing	6	det	_	_
6	sokuluşu	sokul	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	7	csubj	_	_
7	var	var	ADJ	_	_	0	root	_	_
8	dı	i	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


