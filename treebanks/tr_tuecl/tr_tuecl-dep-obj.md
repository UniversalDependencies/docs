---
layout: base
title:  'Statistics of obj in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `obj`

This relation is universal.

61 nodes (7%) are attached to their parents as `obj`.

61 instances of `obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39344262295082.

The following 4 pairs of parts of speech are connected with `obj`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (54; 89% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Kız	kız	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	arkadaşına	arkadaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	mektup	mektup	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	yazdı	yaz	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	doktor	doktor	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	olacak	ol	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	bilmiş	bil	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Tense=Past|VerbForm=Part	3	parataxis	_	_
6	ol	ol	AUX	_	Mood=Imp|Number=Sing|Person=2	5	aux	_	SpaceAfter=No
7	!	!	PUNCT	_	_	5	punct	_	_

~~~


