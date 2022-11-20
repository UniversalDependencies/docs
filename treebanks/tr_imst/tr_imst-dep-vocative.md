---
layout: base
title:  'Statistics of vocative in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `vocative`

This relation is universal.

22 nodes (0%) are attached to their parents as `vocative`.

19 instances of `vocative` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.90909090909091.

The following 8 pairs of parts of speech are connected with `vocative`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (7; 32% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (6; 27% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (2; 9% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 vocative	color:blue
1	Hayır	hayır	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	discourse	_	_
2	oğlum	oğul	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	şimdi	şimdi	ADV	Adverb	_	5	advmod	_	_
5	olmaz	ol	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	9	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	ayıp	ayıp	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	9	punct	_	_
9	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Melek	Melek	PROPN	Prop	Case=Nom|Number=Sing|Person=3	5	vocative	_	_
2	sana	sen	PRON	Pers	Case=Dat|Number=Sing|Person=2|PronType=Prs	5	iobj	_	_
3	bir	bir	DET	ANum	_	4	det	_	_
4	döner	döner	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	5	obj	_	_
5	ısmarlayayım	ısmarla	VERB	Verb	Aspect=Perf|Mood=Opt|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	_
6	mı	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:q	_	SpaceAfter=No
7	?	?	PUNCT	Punc	_	5	punct	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Teyzecim	Teyzeci	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	5	punct	_	_
3	ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	zayıf	zayıf	ADJ	Adj	_	5	amod	_	_
5	akımcı	akımcı	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	yım	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres	5	cop	_	_
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


