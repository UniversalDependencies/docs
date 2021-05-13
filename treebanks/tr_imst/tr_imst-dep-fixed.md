---
layout: base
title:  'Statistics of fixed in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `fixed`

This relation is universal.

60 nodes (0%) are attached to their parents as `fixed`.

60 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01666666666667.

The following 2 pairs of parts of speech are connected with `fixed`: <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (40; 67% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (20; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Her	her	DET	Det	_	4	obj	_	_
2	şeyi	şey	NOUN	Noun	Case=Acc|Number=Sing|Person=3	1	fixed	_	_
3	ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	yazacak	yaz	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Fut|VerbForm=Part	5	acl	_	_
5	değilim	değil	VERB	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	0	root	_	_
6	ya	ya	CCONJ	Conj	_	5	advmod:emph	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Ama	ama	CCONJ	Conj	_	3	cc	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	dedim	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	8	punct	_	_
5	ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
6	ne	ne	CCONJ	Conj	_	8	cc	_	_
7	şiir	şiir	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	obj	_	_
8	okuyabilirim	oku	VERB	Verb	Aspect=Hab|Mood=Pot|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	1	conj	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	12	punct	_	_
10	ne	ne	CCONJ	Conj	_	12	cc	_	_
11	de	de	CCONJ	Conj	_	10	fixed	_	_
12	şarkı	şarkı	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	conj	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	12	punct	_	_

~~~


