---
layout: base
title:  'Statistics of compound in UD_Laz-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Laz-BOUN: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="lzz_boun-dep-compound-redup.html">compound:redup</a></tt>.

8 nodes (0%) are attached to their parents as `compound`.

6 instances of `compound` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.125.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="lzz_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="lzz_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="lzz_boun-pos-SCONJ.html">SCONJ</a></tt> (1; 13% instances), <tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzz_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="lzz_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="lzz_boun-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Artek	Artek	PROPN	_	_	2	amod	_	_
2	sebap'on	sebap'on	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
3	ya	ya	CCONJ	_	_	2	compound	_	_
4	iduşunams	iduşunams	NOUN	_	Case=Nom|Number=Sing|Person=3	2	compound	_	_
5	do	do	DET	_	_	6	det	_	_
6	fuk'aras	fuk'aras	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
7	para	para	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
8	niçams	niçams	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Ek'na	ek'na	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
2	amolva	amolva	NOUN	_	_	7	xcomp	_	_
3	şeni	şeni	ADP	_	_	2	case	_	_
4	nk'olakte	nk'olak	ADV	_	_	7	advmod	_	_
5	fiçiri	fiçiri	NOUN	_	_	6	compound	_	_
6	meçameri	meçameri	ADV	_	_	7	advmod	_	_
7	gontzeri	gontz	VERB	_	_	0	root	_	_
8	on	on	AUX	_	_	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Tanurak	Tanurak	PROPN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
2	Şana	Şana	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	_
3	noseri	noser	ADJ	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	flat	_	_
4	on	on	AUX	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	ya	ya	SCONJ	_	_	4	compound	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	SpacesAfter=\n

~~~


