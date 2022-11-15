---
layout: base
title:  'Statistics of orphan in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `orphan`

This relation is universal.

5 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 orphan	color:blue
1	Dam	dam	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	saray	saray	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	obj	_	_
3	olmuş	ol	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	buzağılar	buzağı	NOUN	Noun	Case=Nom|Number=Plur|Person=3	3	orphan	_	_
6	ile	ile	CCONJ	Conj	_	7	cc	_	_
7	inekler	inek	NOUN	Noun	Case=Nom|Number=Plur|Person=3	5	conj	_	_
8	de	de	CCONJ	Conj	_	7	cc	_	_
9	prensin	prens	NOUN	Noun	Case=Gen|Number=Sing|Person=3	10	nmod:poss	_	_
10	adamları	adam	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	3	orphan	_	SpaceAfter=No
11	...	...	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 orphan	color:blue
1	O	o	PRON	Pers	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	mu	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	aux:q	_	_
3	seni	sen	PRON	Pers	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	obj	_	_
4	terk	terk	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	obj	_	_
5	etmiş	et	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	4	compound:lvc	_	_
6	saydın	say	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	6	punct	_	_
8	sen	sen	PRON	Pers	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	conj	_	_
9	mi	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:q	_	_
10	onu	o	PRON	Pers	Case=Acc|Number=Sing|Person=3|PronType=Prs	8	orphan	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 orphan	color:blue
1	Biri	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	3	nsubj	_	_
2	kuru	kuru	ADJ	Adj	_	3	obj	_	_
3	diyor	de	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	biri	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	3	conj	_	_
6	kavrulmuş	kavrul	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Polarity=Pos|Tense=Past|VerbForm=Part	5	orphan	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


