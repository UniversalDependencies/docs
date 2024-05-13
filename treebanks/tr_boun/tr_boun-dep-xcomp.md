---
layout: base
title:  'Statistics of xcomp in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `xcomp`

This relation is universal.

261 nodes (0%) are attached to their parents as `xcomp`.

260 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40996168582375.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (133; 51% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (59; 23% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (55; 21% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	İki	iki	NUM	ANum	NumType=Card	2	nummod	_	_
2	taraf	taraf	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
3	da	da	ADV	Emph	_	2	advmod:emph	_	_
4	sorunu	sorun	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
5	masa	masa	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
6	başında	baş	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
7	çözmek	çöz	VERB	Vnoun	Case=Nom|Polarity=Pos|VerbForm=Vnoun	8	xcomp	_	_
8	istiyor	iste	VERB	_	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	10	ccomp	_	SpaceAfter=No
9	"	"	PUNCT	Punc	_	8	punct	_	_
10	dedi	de	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Stop	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Arkada	arka	NOUN	_	Case=Loc|Number=Sing|Person=3	2	xcomp	_	_
2	kalanlar	kal	VERB	Ptcp	Case=Nom|Number=Plur|Person=3|Polarity=Pos|VerbForm=Part	0	root	_	SpaceAfter=No
3	.	.	PUNCT	Stop	_	2	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	-	-	PUNCT	Punc	_	3	punct	_	_
2	Hangisini	hangi	PRON	Ques	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Int	3	obj	_	_
3	ister	iste	VERB	Ptcp	Aspect=Hab|Polarity=Pos|Tense=Pres|VerbForm=Part	0	root	_	_
4	seniz	y	AUX	Zero	Mood=Cnd|Number=Plur|Person=2|Polarity=Pos	3	cop	_	_
5	,	,	PUNCT	Comma	_	8	punct	_	_
6	yalnız	yalnız	ADV	_	_	8	advmod	_	_
7	güzel	güzel	ADJ	Adj	_	8	xcomp	_	_
8	olsun	ol	VERB	_	Mood=Imp|Number=Sing|Person=3|Polarity=Pos	3	conj	_	SpaceAfter=No
9	.	.	PUNCT	Stop	_	8	punct	_	SpacesAfter=\n

~~~


