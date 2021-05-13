---
layout: base
title:  'Statistics of appos in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `appos`

This relation is universal.

51 nodes (0%) are attached to their parents as `appos`.

51 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.31372549019608.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (20; 39% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (13; 25% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (9; 18% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	Dört	dört	NUM	ANum	NumType=Card	2	nummod	_	_
2	kişi	kişi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
3	ydi	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
4	bunlar	bu	PRON	Demons	Case=Nom|Number=Plur|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
5	:	:	PUNCT	Punc	_	6	punct	_	_
6	Sav	sav	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	appos	_	_
7	ve	ve	CCONJ	Conj	_	8	cc	_	_
8	Karaosmanoğlu	Karaosmanoğlu	PROPN	Prop	Case=Nom|Number=Sing|Person=3	6	conj	_	_
9	Atila'lar	Atila	PROPN	Prop	Case=Nom|Number=Plur|Person=3	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Ağbisi	ağbi	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	_
2	Firuz	Firuz	PROPN	Prop	Case=Nom|Number=Sing|Person=3	1	appos	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	1	punct	_	_
4	savcı	savcı	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obj	_	_
5	olmuş	ol	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Karaosmanoğlu	Karaosmanoğlu	PROPN	Prop	Case=Nom|Number=Sing|Person=3	0	root	_	_
2	Başbakan	başbakan	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
3	Yardımcısı	yardımcı	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	appos	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


