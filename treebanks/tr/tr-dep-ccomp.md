---
layout: base
title:  'Statistics of ccomp in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `ccomp`

This relation is universal.

36 nodes (0%) are attached to their parents as `ccomp`.

35 instances of `ccomp` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.27777777777778.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (12; 33% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-ADJ.html">ADJ</a></tt> (11; 31% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (6; 17% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="tr-pos-PRON.html">PRON</a></tt>-<tt><a href="tr-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 ccomp	color:blue
1	İkimiz	iki	NUM	NNum	Case=Nom|Number=Sing|Number[psor]=Plur|NumType=Card|Person=3|Person[psor]=1	4	nsubj	_	_
2	de	de	CCONJ	Conj	_	1	advmod:emph	_	_
3	aynı	aynı	ADJ	Adj	_	4	amod	_	_
4	durumda	durum	NOUN	Noun	Case=Loc|Number=Sing|Person=3	7	ccomp	_	_
5	yız	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres	4	cop	_	_
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	demişti	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	9	punct	_	_
9	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp	color:blue
1	Ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	bir	bir	NUM	ANum	NumType=Card	3	det	_	_
3	tutsak	tutsak	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	6	ccomp	_	_
4	ım	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres	3	cop	_	_
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 ccomp	color:blue
1	Yarın	yarın	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
2	o	o	DET	Det	_	3	det	_	_
3	araba	araba	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	ccomp	_	_
5	im	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres	4	cop	_	_
6	!	!	PUNCT	Punc	_	8	punct	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	8	punct	_	_
8	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	8	punct	_	_
10	biri	bir	NUM	NNum	Case=Acc|Number=Sing|NumType=Card|Person=3	8	nsubj	_	_
11	Memo'ya	Memo	PROPN	Prop	Case=Dat|Number=Sing|Person=3	12	obl	_	_
12	bakarak	bak	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv	8	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	12	punct	_	_

~~~


