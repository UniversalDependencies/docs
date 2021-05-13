---
layout: base
title:  'Statistics of amod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `amod`

This relation is universal.

307 nodes (2%) are attached to their parents as `amod`.

305 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46254071661238.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (302; 98% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 amod	color:blue
1	Bundan	bu	PRON	_	Case=Abl|Number=Sing|Polarity=Pos|PronType=Dem	3	nmod:comp	_	_
2	daha	daha	ADV	_	_	3	advmod	_	_
3	uygun	uygun	ADJ	_	_	5	amod	_	_
4	bir	bir	DET	_	Definite=Ind|Polarity=Pos|PronType=Art	5	det	_	_
5	sözcük	sözcük	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	düşünemiyorum	düşün	VERB	_	Aspect=Prog|Mood=Pot|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 amod	color:blue
1	O	o	DET	_	PronType=Dem	2	det	_	_
2	kedinin	kedi	NOUN	_	Case=Gen|Number=Sing	6	nsubj	_	_
3	insana	insan	NOUN	_	Case=Dat|Number=Sing	6	obl	_	_
4	hoş	hoş	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	sokuluşu	sokul	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	7	csubj	_	_
7	var	var	ADJ	_	_	0	root	_	_
8	dı	i	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Kime	kim	PRON	_	Case=Dat|Number=Sing|PronType=Int	2	obl	_	_
2	sorduksa	sor	VERB	_	Aspect=Perf|Mood=Cnd|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	6	advcl	_	_
3	hepsinden	hepsi	PRON	_	Case=Abl|Number=Sing|PronType=Ind	6	obl	_	_
4	aynı	aynı	DET	_	Definite=Def|PronType=Art	5	amod	_	_
5	cevabı	cevap	NOUN	_	Case=Acc|Number=Sing	6	obj	_	_
6	aldık	al	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


