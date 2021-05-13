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

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (21; 70% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (4; 13% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (4; 13% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 xcomp	color:blue
1	Kombi	kombi	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	bozulunca	bozul	ADV	_	_	7	advcl	_	_
3	500	500	NUM	_	NumType=Card	4	nummod	_	_
4	lira	lira	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obj	_	_
5	çıkmak	çık	NOUN	_	Case=Nom|Number=Sing|Person=3	7	xcomp	_	_
6	zorunda	zorun	NOUN	_	Case=Loc|Number=Sing|Person=3	7	compound	_	_
7	kaldı	kal	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	İstihsal	istihsal	NOUN	_	Case=Nom|Number=Sing|Person=3	2	compound	_	_
2	etmek	et	NOUN	_	Case=Nom|Number=Sing|Person=3	3	xcomp	_	_
3	istediğim	iste	ADJ	_	_	5	acl	_	_
4	çok	çok	ADJ	_	_	5	amod	_	_
5	şey	şey	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
6	var	var	ADJ	_	_	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Bıçak	bıçak	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	körelmiş	körel	VERB	_	Aspect=Perf|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	5	parataxis	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	bileylemek	bileyle	NOUN	_	Case=Nom|Number=Sing|Person=3	5	xcomp	_	_
5	gerek	gerek	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


