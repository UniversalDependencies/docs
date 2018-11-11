---
layout: base
title:  'Statistics of advcl in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `advcl`

This relation is universal.

10 nodes (0%) are attached to their parents as `advcl`.

10 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 5 pairs of parts of speech are connected with `advcl`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (6; 60% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advcl	color:blue
1	Araba	araba	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	obj	_	_
2	beğenmeyene	beğen	VERB	Verb	Aspect=Perf|Case=Dat|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Part	3	advcl	_	_
3	bakın	bak	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 9 advcl	color:blue
1	CHP'nin	Chp	NOUN	Abr	Abbr=Yes|Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	_
2	Doğu	doğu	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	6	amod	_	_
3	ve	ve	CCONJ	Conj	_	4	cc	_	_
4	Güneydoğu	güneydoğu	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	2	conj	_	_
5	için	için	ADP	PCNom	_	2	case	_	_
6	hazırladığı	hazırla	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	8	acl	_	_
7	demokratikleşme	demokratikleş	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	8	nmod:poss	_	_
8	paketinde	paket	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	25	nmod	_	_
9	isteyenlere	iste	VERB	Verb	Aspect=Perf|Case=Dat|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	25	advcl	_	_
10	ana	ana	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	18	obj	_	_
11	dillerini	dil	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=3	10	compound	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	18	punct	_	_
13	devlet	devlet	NOUN	Noun	Case=Nom|Number=Sing|Person=3	14	nmod:poss	_	_
14	denetiminde	denetim	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	17	nmod	_	_
15	ki	ki	ADP	Rel	_	14	case	_	_
16	özel	özel	ADJ	Adj	_	17	amod	_	_
17	kurslarda	kurs	NOUN	Noun	Case=Loc|Number=Plur|Person=3	20	obl	_	_
18	öğrenme	öğren	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	19	nmod:poss	_	_
19	olanağı	olanak	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	20	nsubj	_	_
20	sağlanacağı	sağla	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Part|Voice=Pass	25	nmod:poss	_	_
21	ve	ve	CCONJ	Conj	_	24	cc	_	_
22	üniversitelerde	üniversite	NOUN	Noun	Case=Loc|Number=Plur|Person=3	24	obl	_	_
23	enstitü	enstitü	NOUN	Noun	Case=Nom|Number=Sing|Person=3	24	nsubj	_	_
24	kurulacağı	kur	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Part|Voice=Pass	20	conj	_	_
25	vaadinde	vaat	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
26	bulunuldu	bulun	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	25	compound:lvc	_	SpaceAfter=No
27	.	.	PUNCT	Punc	_	25	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advcl	color:blue
1	Yalnızca	yalnızca	ADV	Adverb	_	0	root	_	_
2	yararlı	yararlı	ADJ	Adj	_	3	obj	_	_
3	olandan	ol	VERB	Verb	Aspect=Perf|Case=Abl|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	5	advcl	_	_
4	tiksiniyoruz	tiksin	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Polite=Infm|Tense=Pres	1	conj	_	SpaceAfter=No
5	...	...	PUNCT	Punc	_	4	punct	_	_

~~~


