---
layout: base
title:  'Statistics of csubj in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `csubj`

This relation is universal.

30 nodes (0%) are attached to their parents as `csubj`.

30 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36666666666667.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (17; 57% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (7; 23% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	anuñ	o	PRON	Pers	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	oġlını	oġul	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	_
3	öldürmek	öl	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun|Voice=Cau	4	csubj	_	_
4	olmaz	ol	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	birisinüñ	biri	PRON	Quant	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	2	obl	_	_
2	açılması	aç	VERB	Vnoun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	5	csubj	_	_
3	cumʿa	cumʿa	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
4	günlerine	gün	NOUN	_	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	obl:tmod	_	_
5	maḫṣûṣ	maḫṣûṣ	ADJ	Adj	_	0	root	_	_
6	dur	y	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	5	cop	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	bu	bu	DET	Demons	Definite=Def|PronType=Art	2	det	_	_
2	ṣûretde	ṣûret	NOUN	_	Case=Loc|Gender=Fem|Number=Sing|Person=3	6	obl	_	_
3	hîç	hîç	ADJ	Adj	_	5	amod	_	_
4	bir	bir	DET	Indef	Definite=Ind|PronType=Art	5	det	_	_
5	oġlan	oġlan	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
6	gördügi	gör	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	7	csubj	_	_
7	yoḳ	yoḳ	NOUN	Exist	Case=Nom|Number=Sing|Person=3|Polarity=Neg	0	root	_	_

~~~


