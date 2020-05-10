---
layout: base
title:  'Statistics of det in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `det`

This relation is universal.

960 nodes (6%) are attached to their parents as `det`.

960 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10729166666667.

The following 5 pairs of parts of speech are connected with `det`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (936; 98% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (12; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|PronType=Prs	6	nsubj	_	_
2	her	her	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	zaman	zaman	NOUN	_	Case=Nom|Number=Sing	6	obl:tmod	_	_
4	yemeklerini	ye	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
5	lokantada	lokanta	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yer	ye	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Öğrencilerin	öğrenci	NOUN	_	Case=Gen|Number=Plur	3	nmod:part	_	_
2	her	her	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	birinin	biri	PRON	_	Case=Gen|Number=Sing|PronType=Ind	6	nmod	_	_
4	ayrı	ayrı	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	mazereti	mazeret	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
7	var	var	ADJ	_	_	0	root	_	_
8	dı	i	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det	color:blue
1	Çok	çok	ADV	_	_	3	advmod	_	_
2	mu	mi	AUX	_	PronType=Int	1	aux:q	_	_
3	güzel	güzel	ADJ	_	_	5	amod	_	_
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	kız	kız	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	bu	bu	DET	_	PronType=Dem	9	det	_	_
8	sözünü	söz	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	compound	_	_
9	ettiğin	et	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2|Tense=Past|VerbForm=Part	5	csubj:cop	_	SpaceAfter=No
10	?	?	PUNCT	_	_	5	punct	_	_

~~~


