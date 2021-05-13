---
layout: base
title:  'Statistics of acl in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `acl`

This relation is universal.

1469 nodes (3%) are attached to their parents as `acl`.

1460 instances of `acl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.499659632403.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (974; 66% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (228; 16% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (134; 9% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (95; 6% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	Yüzüstü	yüzüst	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nmod	_	_
2	bırakınca	bırak	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv	1	compound	_	_
3	bayıldığı	bayıl	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	acl	_	_
4	avukat	avukat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	1	punct	_	_
6	yoldan	yol	NOUN	Noun	Case=Abl|Number=Sing|Person=3	0	root	_	_
7	çıkmış	çık	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	6	compound	_	_
8	kızcağız	kızcağız	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nsubj	_	SpaceAfter=No
9	...	...	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 acl	color:blue
1	Güneş	güneş	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	tepeye	tepe	NOUN	Noun	Case=Dat|Number=Sing|Person=3	3	obl	_	_
3	vardığında	var	VERB	Verb	Aspect=Perf|Case=Loc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	9	acl	_	_
4	evin	ev	NOUN	Noun	Case=Gen|Number=Sing|Person=3	5	nmod:poss	_	_
5	etrafında	etraf	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	nmod	_	_
6	ki	ki	ADP	Rel	_	5	case	_	_
7	hareket	hareket	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
8	de	de	CCONJ	Conj	_	7	advmod:emph	_	_
9	artıyor	art	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	Ve	ve	CCONJ	Conj	_	0	root	_	_
2	kendi	kendi	PRON	Reflex	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Reflex=Yes	3	nmod	_	_
3	merceklerinden	mercek	NOUN	Noun	Case=Abl|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	obl	_	_
4	bakıldığında	bak	VERB	Verb	Aspect=Perf|Case=Loc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	_	_
5	haklı	haklı	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	1	conj	_	_
6	lar	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres	5	cop	_	_
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


