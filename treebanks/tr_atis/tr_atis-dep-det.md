---
layout: base
title:  'Statistics of det in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `det`

This relation is universal.

1303 nodes (3%) are attached to their parents as `det`.

1303 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30698388334612.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-DET.html">DET</a></tt> (1276; 98% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-DET.html">DET</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det	color:blue
1	Bana	ben	PRON	_	PronType=Prs	7	obl	_	_
2	Washington	washington	PROPN	_	Case=Nom|Number=Sing	6	amod	_	_
3	DC'deki	dc	PROPN	_	_	2	flat	_	_
4	tüm	tüm	DET	_	PronType=Art	6	det	_	_
5	kara	kara	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
6	ulaşımını	ulaşım	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
7	gösterin	göster	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	bir	bir	DET	_	Definite=Ind|PronType=Art	2	det	_	_
2	Boeing	boeing	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
3	737	737	NUM	_	NumType=Card	2	flat	_	_
4	kaç	kaç	ADJ	_	NumType=Card	5	amod	_	_
5	yolcu	yolcu	NOUN	_	Case=Nom|Number=Sing|Person=3	6	obj	_	_
6	alabilir	al	VERB	_	Aspect=Hab|Mood=GenPot|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	bu	bu	PRON	_	PronType=Dem	2	det	_	_
2	yıl	yıl	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
3	23	23	NUM	_	NumType=Card	4	nummod	_	_
4	Kasım'da	kasım	PROPN	_	Case=Loc|Number=Sing	9	obl	_	_
5	Atlanta'dan	atlanta	PROPN	_	Case=Abl|Number=Sing	6	nmod	_	_
6	Denver'e	denver	PROPN	_	Case=Dat|Number=Sing	9	obl	_	_
7	Delta	delta	PROPN	_	Case=Nom|Number=Sing	9	obl	_	_
8	ile	ile	ADP	_	_	7	case	_	_
9	uçmak	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	10	xcomp	_	_
10	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


