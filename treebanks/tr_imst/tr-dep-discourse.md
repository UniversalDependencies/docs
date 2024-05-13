---
layout: base
title:  'Statistics of discourse in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `discourse`

This relation is universal.

154 nodes (0%) are attached to their parents as `discourse`.

88 instances of `discourse` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.22077922077922.

The following 17 pairs of parts of speech are connected with `discourse`: <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (69; 45% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt> (30; 19% instances), <tt><a href="tr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt> (12; 8% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (9; 6% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (8; 5% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt> (6; 4% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt> (4; 3% instances), <tt><a href="tr-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (3; 2% instances), <tt><a href="tr-pos-ADV.html">ADV</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="tr-pos-PRON.html">PRON</a></tt>-<tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="tr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="tr-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="tr-pos-DET.html">DET</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="tr-pos-PRON.html">PRON</a></tt>-<tt><a href="tr-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	O	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	_
2	son	son	ADJ	Adj	_	5	amod	_	_
3	a	a	INTJ	Interj	_	5	discourse	_	_
4	Hülya'yı	Hülya	PROPN	Prop	Case=Acc|Number=Sing|Person=3	5	obj	_	_
5	oturtup	otur	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv|Voice=Cau	9	nmod	_	_
6	kaç	kaç	ADJ	Adj	_	7	amod	_	_
7	gece	gece	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	obl	_	_
8	uykumdan	uyku	NOUN	Noun	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	9	obl	_	_
9	fırlamıştım	fırla	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Alışveriş	alışveriş	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
2	ise	ise	CCONJ	Conj	_	1	discourse	_	_
3	hayatın	hayat	NOUN	Noun	Case=Gen|Number=Sing|Person=3	4	nmod:poss	_	_
4	temelinde	temel	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	amod	_	_
5	yatar	yat	VERB	Verb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Aor	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Tibet	Tibet	PROPN	Prop	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
2	ise	ise	CCONJ	Conj	_	1	discourse	_	_
3	içine	iç	ADJ	NAdj	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	amod	_	_
4	kapanık	kapanık	ADJ	Adj	_	3	compound	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	6	punct	_	_
6	ses	ses	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	conj	_	_
7	siz	siz	ADP	Without	_	6	case	_	_
8	bir	bir	NUM	ANum	NumType=Card	9	det	_	_
9	çocuk	çocuk	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


