---
layout: base
title:  'Statistics of fixed in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `fixed`

This relation is universal.

50 nodes (0%) are attached to their parents as `fixed`.

50 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 5 pairs of parts of speech are connected with `fixed`: <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (43; 86% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (3; 6% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (2; 4% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Ya	ya	CCONJ	Conj	_	5	cc	_	_
2	da	da	CCONJ	Conj	_	1	fixed	_	_
3	bir	bir	DET	ANum	_	5	det	_	_
4	dağ	dağ	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	evi	ev	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpaceAfter=No
6	;	;	PUNCT	Punc	_	8	punct	_	_
7	kır	kır	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	nmod:poss	_	_
8	kahvesi	kahve	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	conj	_	SpaceAfter=No
9	...	...	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 fixed	color:blue
1	Ev	ev	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	nmod	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	ya	ya	CCONJ	Conj	_	1	compound	_	_
4	da	da	CCONJ	Conj	_	1	fixed	_	_
5	ev	ev	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	obj	_	_
6	yapmak	yap	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	1	conj	_	_
7	adına	ad	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	13	punct	_	_
9	ülkemizde	ülke	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	12	amod	_	_
10	ki	ki	ADP	Rel	_	9	case	_	_
11	gecekondu	gecekondu	NOUN	Noun	Case=Nom|Number=Sing|Person=3	12	nmod:poss	_	_
12	uygulamalarından	uygulama	NOUN	Noun	Case=Abl|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	13	obl	_	_
13	öğrenecek	öğren	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Fut|VerbForm=Part	15	acl	_	_
14	epey	epey	ADV	Adverb	_	15	advmod	_	_
15	şeyimiz	şey	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	16	nsubj	_	_
16	olduğunu	ol	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	17	obj	_	_
17	düşünüyorum	düşün	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
18	.	.	PUNCT	Punc	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 fixed	color:blue
1	Günü	gün	ADV	Noun	_	3	advmod	_	_
2	birlik	birlik	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	compound	_	_
3	yaşıyor	yaşa	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	14	punct	_	_
5	her	her	DET	Det	_	6	det	_	_
6	konjonktürden	konjonktür	NOUN	Noun	Case=Abl|Number=Sing|Person=3	14	obj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	13	punct	_	_
8	yasal	yasal	ADJ	Adj	_	13	amod	_	_
9	ya	ya	CCONJ	Conj	_	8	compound	_	_
10	da	da	CCONJ	Conj	_	8	fixed	_	_
11	yasa	yasa	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	conj	_	_
12	dışı	dış	ADJ	NAdj	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	compound	_	_
13	imkandan	imkan	NOUN	Noun	Case=Abl|Number=Sing|Person=3	6	conj	_	_
14	yararlanıyorlar	yararlan	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	3	conj	_	SpaceAfter=No
15	.	.	PUNCT	Punc	_	14	punct	_	_

~~~


