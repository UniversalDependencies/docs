---
layout: base
title:  'Statistics of det in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `det`

This relation is universal.

46 nodes (6%) are attached to their parents as `det`.

46 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15217391304348.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-DET.html">DET</a></tt> (41; 89% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_dudu-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	dünyada	dünya	NOUN	Noun	Case=Loc|Number=Sing|Person=3	7	obl	_	_
2	bir	bir	DET	ANum	_	3	det	_	_
3	nefes	nefes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
4	ṣıḥḥaṭ	ṣıḥḥaṭ	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
5	gibi	gibi	ADP	PCNom	_	4	case	_	_
6	devlet	devlet	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
7	bulunmadıġı	bulun	VERB	Ptcp	Aspect=Perf|Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	8	obj	_	_
8	müsellem	müsellem	ADJ	Adj	_	10	acl	_	_
9	bir	bir	DET	ANum	_	10	det	_	_
10	ḥaḳîḳat	ḥaḳîḳat	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	tir	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	9	cop	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	dışarıda	dışarı	NOUN	_	Case=Loc|Number=Sing|Person=3	8	obl	_	_
2	vaḥşî	vaḥşî	ADJ	Adj	_	7	amod	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	soġuḳ	soġuḳ	ADJ	Adj	_	2	conj	_	_
5	bir	bir	DET	Indef	_	6	det	_	_
6	şubat	şubat	PROPN	_	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
7	gecesi	gece	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nsubj	_	_
8	var	var	NOUN	Exist	Number=Sing|Person=3|Polarity=Pos	0	root	_	_
9	dı	y	AUX	Zero	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	8	cop	_	_
10	.	.	PUNCT	Stop	_	8	punct	_	_

~~~


