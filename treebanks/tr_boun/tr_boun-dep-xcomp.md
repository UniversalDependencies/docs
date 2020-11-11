---
layout: base
title:  'Statistics of xcomp in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `xcomp`

This relation is universal.

127 nodes (0%) are attached to their parents as `xcomp`.

127 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54330708661417.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (94; 74% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (11; 9% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (7; 6% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	İki	iki	NUM	ANum	NumType=Card	2	nummod	_	_
2	taraf	taraf	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
3	da	da	CCONJ	Conj	_	2	advmod:emph	_	_
4	sorunu	sorun	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
5	masa	masa	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
6	başında	baş	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
7	çözmek	çöz	VERB	Verb	Case=Nom|Polarity=Pos	8	xcomp	_	_
8	istiyor	iste	VERB	Verb	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	10	ccomp	_	SpaceAfter=No
9	"	"	PUNCT	Punc	_	8	punct	_	_
10	dedi	de	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	Bir	bir	DET	ANum	NumType=Card	2	det	_	_
2	heves	heves	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	xcomp	_	_
3	başladım	başla	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Etraftan	etraf	NOUN	Noun	Case=Abl|Number=Sing|Person=3	4	obl	_	_
2	benimle	ben	PRON	Pers	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	obl	_	_
3	evlenmek	evlen	VERB	Verb	Case=Nom|Polarity=Pos	4	xcomp	_	_
4	isteyenler	iste	NOUN	Noun	Case=Nom|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	5	nsubj	_	_
5	vardı	var	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	ve	ve	CCONJ	Conj	_	9	cc	_	_
7	ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1	9	nsubj	_	_
8	hayır	hayır	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	obj	_	_
9	diyordum	de	VERB	Verb	Aspect=Prog|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	5	conj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	SpacesAfter=\n

~~~


