---
layout: base
title:  'Statistics of csubj in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `csubj`

This relation is universal.

4 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 csubj	color:blue
1	Deniz'in	Deniz	PROPN	_	Case=Gen|Number=Sing	5	nsubj	_	_
2	iyi	iyi	ADJ	_	_	4	amod	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	okulda	okul	NOUN	_	Case=Loc|Number=Sing	5	obl	_	_
5	okumaması	oku	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Neg|VerbForm=Vnoun	7	csubj	_	_
6	annesini	anne	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	_
7	kaygılandırıyordu	kaygılan	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Cau	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	Çocuklara	çocuk	NOUN	_	Case=Dat|Number=Plur	3	obl	_	_
2	kitap	kitap	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	okumak	oku	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	6	csubj	_	_
4	gelişimleri	gelişim	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=3	6	obl	_	_
5	için	için	ADP	_	_	4	case	_	_
6	önemli	önemli	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


