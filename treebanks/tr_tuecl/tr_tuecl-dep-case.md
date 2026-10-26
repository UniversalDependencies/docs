---
layout: base
title:  'Statistics of case in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `case`

This relation is universal.

4 nodes (0%) are attached to their parents as `case`.

4 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `case`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (1; 25% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADP.html">ADP</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Çocuklara	çocuk	NOUN	_	Case=Dat|Number=Plur	3	obl	_	_
2	kitap	kitap	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	okumak	oku	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	6	csubj	_	_
4	gelişimleri	gelişim	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=3	6	obl	_	_
5	için	için	ADP	_	_	4	case	_	_
6	önemli	önemli	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 case	color:blue
1	Peter	Peter	PROPN	_	Case=Nom|Number=Sing	5	nsubj	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	Mary	Mary	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
4	birbirlerini	birbiri	PRON	_	Case=Acc|Number=Plur|Number[psor]=Plur|Person[psor]=3|PronType=Rcp	5	obj	_	_
5	kucakladılar	kucakla	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
6	ve	ve	CCONJ	_	_	10	cc	_	_
7	ondan	o	PRON	_	Case=Abl|Number=Sing|Person=3|PronType=Dem	10	obl	_	_
8	sonra	sonra	ADV	_	_	7	case	_	_
9	odadan	oda	NOUN	_	Case=Abl|Number=Sing	10	obl	_	_
10	çıktılar	çık	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Tense=Past	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Hediye	hediye	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
3	için	için	ADP	_	_	2	case	_	_
4	di	i	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


