---
layout: base
title:  'Statistics of amod in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `amod`

This relation is universal.

60 nodes (7%) are attached to their parents as `amod`.

53 instances of `amod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53333333333333.

The following 14 pairs of parts of speech are connected with `amod`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (33; 55% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (7; 12% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (6; 10% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt> (3; 5% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	bu	bu	PRON	_	PronType=Dem	3	nsubj	_	_
2	ne	ne	ADJ	_	_	3	amod	_	_
3	söz	söz	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
4	dür	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	3	cop	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 amod	color:blue
1	birḳaç	birḳaç	DET	_	Definite=Ind|PronType=Art	2	det	_	_
2	yıldan	yıl	NOUN	_	Case=Abl|Number=Sing|Person=3	8	obl	_	_
3	ṣoñra	ṣoñra	ADV	_	_	2	case	_	_
4	ḳapucı	ḳapıcı	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
5	miskîn	miskîn	ADJ	_	_	8	amod	_	_
6	mevt	mevt	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nmod	_	_
7	döşegine	döşek	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obl	_	_
8	düşdi	düş	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	ol	ol	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	ḳırḳ	ḳırḳ	NUM	_	NumType=Card	3	nummod	_	_
3	nâmerdüñ	nâmerd	NOUN	_	Case=Gen|Number=Sing|Person=3	5	nmod	_	DerivedFrom=merd
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	ḳaçı	ḳaçı	NOUN	_	Case=Nom|Number=Sing|Person=3	6	amod	_	_
6	oġlanuñ	oġlan	NOUN	_	Case=Gen|Number=Sing|Person=3	7	nmod	_	_
7	yanına	yan	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obl	_	_
8	geldi	gel	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	9	ccomp	_	_
9	eydür	ey	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_

~~~


