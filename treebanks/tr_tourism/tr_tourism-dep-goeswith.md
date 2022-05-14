---
layout: base
title:  'Statistics of goeswith in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `goeswith`

This relation is universal.

39 nodes (0%) are attached to their parents as `goeswith`.

39 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `goeswith`: <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (25; 64% instances), <tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (9; 23% instances), <tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (3; 8% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="tr_tourism-pos-DET.html">DET</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	PARK	park	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	HOTELDE	hotel	NOUN	_	Case=Loc|Number=Sing|Person=3|Typo=Yes	4	amod	_	_
3	Kİ	_	X	_	_	2	goeswith	_	_
4	AYRICALIĞI	ayrıcalık	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	_
5	YAŞAMANIZI	yaşa	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	6	ccomp	_	_
6	İSTİYORUM	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	HEP	hep	ADV	_	PronType=Ind	5	advmod	_	_
2	ETS	ets	PROPN	_	Case=Nom|Number=Sing|Typo=Yes	5	obj	_	_
3	Yİ	_	X	_	_	2	goeswith	_	_
4	TERCİH	tercih	NOUN	_	Case=Nom|Number=Sing|Person=3	5	compound	_	_
5	EDİYORUM	et	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	BİZ	biz	PRON	_	PronType=Prs	5	nsubj	_	_
2	KENDİMİZ	kendi	PRON	_	PronType=Prs|Reflex=Yes	5	nmod	_	_
3	50	50	NUM	_	NumType=Card|Typo=Yes	5	nummod	_	_
4	YE	_	X	_	_	3	goeswith	_	_
5	GİTTİK	git	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


