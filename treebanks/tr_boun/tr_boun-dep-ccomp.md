---
layout: base
title:  'Statistics of ccomp in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `ccomp`

This relation is universal.

1520 nodes (1%) are attached to their parents as `ccomp`.

1487 instances of `ccomp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53355263157895.

The following 21 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (927; 61% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (240; 16% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (135; 9% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (94; 6% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (31; 2% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (26; 2% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (13; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 ccomp	color:blue
1	Yemek	yemek	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	obj	_	_
2	yemiş	yemiş	VERB	Verb	Case=Nom|Number=Sing|Person=3	0	root	_	_
3	çıkmıştım	çık	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	2	conj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	9	punct	_	_
5	daha	daha	ADV	Adverb	_	6	advmod	_	_
6	acıkmamışım	acık	VERB	Verb	Evident=Nfh|Number=Sing|Person=1|Polarity=Neg|Tense=Past	7	ccomp	_	_
7	diyerek	de	VERB	Verb	Mood=Imp|Polarity=Pos|VerbForm=Conv	9	advcl	_	_
8	masadan	masa	NOUN	Noun	Case=Abl|Number=Sing|Person=3	9	obl	_	_
9	kalktım	kalk	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	2	conj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 ccomp	color:blue
1	Ve	ve	CCONJ	Conj	_	3	cc	_	_
2	gitti	git	NOUN	Noun	_	3	ccomp	_	_
3	diyelim	de	VERB	Verb	Mood=Opt|Number=Plur|Person=1|Polarity=Pos	0	root	_	_
4	Ulusoy	Ulusoy	PROPN	Prop	Case=Nom|Number=Sing|Person=3	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 ccomp	color:blue
1	Bir	bir	ADV	Adverb	_	10	advmod	_	_
2	de	de	CCONJ	Conj	_	1	advmod:emph	_	_
3	"	"	PUNCT	Punc	_	8	punct	_	SpaceAfter=No
4	Çengeli	çengel	ADJ	Adj	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	compound	_	_
5	iğne	iğne	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	8	punct	_	_
7	nazar	nazar	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	obj	_	_
8	bozar	boz	VERB	Verb	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	10	ccomp	_	SpaceAfter=No
9	"	"	PUNCT	Punc	_	8	punct	_	_
10	derler	de	NOUN	Noun	_	0	root	_	SpacesAfter=\n

~~~


