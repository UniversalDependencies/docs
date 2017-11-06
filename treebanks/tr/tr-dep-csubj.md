---
layout: base
title:  'Statistics of csubj in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `csubj`

This relation is universal.

7 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.71428571428571.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-ADJ.html">ADJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	Sınıfta	sınıf	NOUN	Noun	Case=Loc|Number=Sing|Person=3	5	obl	_	_
2	bir	bir	NUM	ANum	NumType=Card	3	det	_	_
3	uğultu	uğultu	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	csubj	_	_
4	dur	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
5	gidiyor	git	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	Ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	csubj	_	_
2	se	i	AUX	Zero	Aspect=Perf|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	korkuyordum	kork	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Polite=Infm|Tense=Past	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 csubj	color:blue
1	Ecevit	Ecevit	PROPN	Prop	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	partisinin	parti	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod:poss	_	_
3	bakanlarıyla	bakan	NOUN	Noun	Case=Ins|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
4	protokolün	protokol	NOUN	Noun	Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	_
5	bir	bir	NUM	ANum	NumType=Card	6	det	_	_
6	tarafında	taraf	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
7	otururken	otur	VERB	Verb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Aor|VerbForm=Conv	14	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	7	punct	_	_
9	diğer	diğer	ADJ	Adj	_	10	amod	_	_
10	tarafta	taraf	NOUN	Noun	Case=Loc|Number=Sing|Person=3	14	nmod	_	_
11	Chp	Chp	NOUN	Abr	Abbr=Yes|Case=Nom|Number=Sing|Person=3	14	csubj	_	_
12	'li	li	ADP	With	_	11	case	_	_
13	ler	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres	11	cop	_	_
14	yer	yer	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
15	aldı	al	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	14	compound	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	14	punct	_	_

~~~


