---
layout: base
title:  'Statistics of aux in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="tr_boun-dep-aux-q.html">aux:q</a></tt>.

209 nodes (0%) are attached to their parents as `aux`.

207 instances of `aux` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1866028708134.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (88; 42% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (62; 30% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (43; 21% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (6; 3% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Yazık	yazık	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	advcl	_	_
2	ki	ki	ADP	Rel	_	1	mark	_	_
3	toplum	toplum	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	advcl	_	_
4	olarak	ol	ADP	PCNom	_	3	case	_	_
5	bunun	bu	PRON	Demons	Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	_
6	farkında	fark	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
7	değiliz	değil	AUX	Neg	Case=Nom|Number=Plur|Person=1	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Çatlak	Çatlak	ADJ	Adj	_	3	nsubj	_	_
2	pek	pek	ADV	Adverb	_	3	advmod	_	_
3	geniş	geniş	ADJ	Adj	_	0	root	_	_
4	değildi	değil	AUX	Neg	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	3	aux	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	9	punct	_	_
6	80	80	NUM	ANum	NumType=Card	9	nummod	_	SpaceAfter=No
7	-	-	PUNCT	Punc	_	8	punct	_	SpaceAfter=No
8	90	90	NUM	ANum	NumType=Card	6	flat	_	_
9	santimetre	santimetre	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	conj	_	_
10	kadardı	kadar	ADV	Verb	_	9	advmod	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	"	"	PUNCT	Punc	_	3	punct	_	SpaceAfter=No
2	Resmi	resmi	ADJ	Adj	_	3	amod	_	_
3	açıklama	açıkla	VERB	Verb	Case=Nom|Number=Sing|Person=3|Polarity=Pos	0	root	_	_
4	değil	değil	AUX	Conj	_	3	aux	_	SpaceAfter=No
5	"	"	PUNCT	Punc	_	3	punct	_	SpacesAfter=\n

~~~


