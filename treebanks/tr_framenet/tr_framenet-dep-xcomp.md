---
layout: base
title:  'Statistics of xcomp in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `xcomp`

This relation is universal.

30 nodes (0%) are attached to their parents as `xcomp`.

30 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46666666666667.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (22; 73% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (4; 13% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="tr_framenet-pos-X.html">X</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 xcomp	color:blue
1	Kombi	kombi	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	bozulunca	bozul	VERB	_	Polarity=Pos|VerbForm=Conv	7	advcl	_	_
3	500	500	NUM	_	NumType=Card	4	nummod	_	_
4	lira	lira	NOUN	_	Case=Nom|Number=Sing	5	obj	_	_
5	çıkmak	çık	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	xcomp	_	_
6	zorunda	zorun	NOUN	_	Case=Loc|Number=Sing	7	compound	_	_
7	kaldı	kal	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 xcomp	color:blue
1	Böyle	böyle	ADJ	_	_	2	amod	_	_
2	insanlar	insan	NOUN	_	Case=Nom|Number=Plur	3	nsubj	_	_
3	etrafımdayken	etraf	NOUN	_	_	5	advcl	_	_
4	yardım	yardım	NOUN	_	Case=Nom|Number=Sing	5	compound	_	_
5	görmek	gör	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	xcomp	_	_
6	ne	ne	ADV	_	_	7	advmod	_	_
7	mümkündü	mümkün	ADJ	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Bıçak	bıçak	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	körelmiş	körel	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	parataxis	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	bileylemek	bileyle	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	5	xcomp	_	_
5	gerek	gerek	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


