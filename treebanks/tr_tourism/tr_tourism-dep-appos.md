---
layout: base
title:  'Statistics of appos in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `appos`

This relation is universal.

40 nodes (0%) are attached to their parents as `appos`.

40 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (29; 73% instances), <tt><a href="tr_tourism-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	MİSAFİRİMİZ	misafir	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	5	obj	_	_
2	BURAK	burak	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
3	BEY	bey	NOUN	_	Case=Nom|Number=Sing|Person=3	1	appos	_	_
4	İLE	ile	ADP	_	_	3	case	_	_
5	GÖRÜŞÜLDÜ	görüş	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	BİZ	biz	PRON	_	PronType=Prs	8	nsubj	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	4	4	NUM	_	NumType=Card	4	nummod	_	_
4	AİLE	aile	NOUN	_	Case=Nom|Number=Sing|Person=3	1	appos	_	_
5	,	,	PUNCT	_	_	8	punct	_	_
6	3.	3	NUM	_	NumType=Ord	7	nummod	_	_
7	KEZ	kez	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
8	SEÇTİK	seç	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	GÜZEL	güzel	ADJ	_	_	3	amod	_	_
2	BİR	bir	DET	_	Definite=Ind	3	det	_	_
3	ODAYDI	oda	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	parataxis	_	_
4	TEK	tek	ADJ	_	_	5	amod	_	_
5	PROBLEM	problem	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	BİRAZ	biraz	ADV	_	_	7	advmod	_	_
7	SOĞUKTU	soğuk	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	appos	_	_
8	ODA	oda	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


