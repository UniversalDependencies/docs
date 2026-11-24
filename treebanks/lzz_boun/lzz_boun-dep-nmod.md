---
layout: base
title:  'Statistics of nmod in UD_Laz-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Laz-BOUN: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="lzz_boun-dep-nmod-poss.html">nmod:poss</a></tt>.

17 nodes (1%) are attached to their parents as `nmod`.

17 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76470588235294.

The following 5 pairs of parts of speech are connected with `nmod`: <tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt> (8; 47% instances), <tt><a href="lzz_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt> (6; 35% instances), <tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzz_boun-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="lzz_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="lzz_boun-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="lzz_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="lzz_boun-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	filimişi	filimi	NOUN	Noun	_	2	nmod	_	_
2	oditsinu	oditsin	NOUN	Noun	_	3	nsubj	_	_
3	oditsinoni	oditsinoni	ADJ	ADJ	_	0	root	_	_
4	ortʼu	ortʼu	AUX	_	_	3	cop	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Kʼočik	Kʼoči	NOUN	Noun	Case=Erg|Number=Sing|Person=3	3	nsubj	_	_
2	çitabi	çitabi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
3	čarums	čar	VERB	Noun	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nmod	color:blue
1	Alik	Ali	PROPN	_	Case=Erg|Number=Sing|Person=3	6	nmod	_	_
2	ar	ar	ADJ	_	Number=Sing	3	amod	_	_
3	talebes	talebes	NOUN	_	Number=Plur	6	obl	_	_
4	kʼata	kʼata	NOUN	_	_	5	amod	_	_
5	çitabi	çitabi	NOUN	_	Number=Sing	6	obj	_	_
6	uşkʼu	şk	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	SpacesAfter=\n

~~~


