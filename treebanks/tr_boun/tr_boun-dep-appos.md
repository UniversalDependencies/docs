---
layout: base
title:  'Statistics of appos in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `appos`

This relation is universal.

118 nodes (0%) are attached to their parents as `appos`.

118 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.17796610169492.

The following 18 pairs of parts of speech are connected with `appos`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (52; 44% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (18; 15% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (10; 8% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Boruçiçeği	Boruçiçek	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
2	(	(	PUNCT	Punc	_	3	punct	_	SpaceAfter=No
3	çançiçeği	çançiçek	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	appos	_	SpaceAfter=No
4	)	)	PUNCT	Punc	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Uluslararası	Uluslararası	ADJ	Adj	_	3	amod	_	_
2	İş	iş	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
3	Forumu	forum	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
4	(	(	PUNCT	Punc	_	5	punct	_	SpaceAfter=No
5	IBF	IBF	PROPN	Prop	Case=Nom|Number=Sing|Person=3	3	appos	_	SpaceAfter=No
6	)	)	PUNCT	Punc	_	5	punct	_	_
7	ve	ve	CCONJ	Conj	_	8	cc	_	_
8	MÜSİAD	MÜSİAD	PROPN	Prop	Case=Nom|Number=Sing|Person=3	3	conj	_	_
9	11	11	NUM	ANum	NumType=Card	3	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	CAN	can	PROPN	Prop	Case=Nom|Number=Sing|Person=3	0	root	_	_
2	KOZANOĞLU	Kozanoğlu	PROPN	Prop	Case=Nom|Number=Sing|Person=3	1	flat	_	_
3	(	(	PUNCT	Punc	_	4	punct	_	SpaceAfter=No
4	Sosyolog	sosyolog	PROPN	Prop	Case=Nom|Number=Sing|Person=3	1	appos	_	_
5	yazar	yazar	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	conj	_	SpaceAfter=No
6	)	)	PUNCT	Punc	_	4	punct	_	SpacesAfter=\n

~~~


