---
layout: base
title:  'Statistics of dep in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `dep`

This relation is universal.

6 nodes (0%) are attached to their parents as `dep`.

6 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.16666666666667.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-DET.html">DET</a></tt> (5; 83% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dep	color:blue
1	yarın	yarın	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
2	Kansas'tan	kansas	PROPN	_	Case=Abl|Number=Sing	3	nmod	_	_
3	Newark'a	newark	PROPN	_	Case=Dat|Number=Sing	6	nmod	_	_
4	sabah	sabah	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	dep	_	_
6	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	7	obj	_	_
7	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 dep	color:blue
1	Lütfen	lütfen	ADV	_	_	11	dep	_	_
2	bana	ben	PRON	_	PronType=Prs	11	obl	_	_
3	Long	long	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
4	Beach	beach	PROPN	_	Case=Nom|Number=Sing	3	flat	_	_
5	California'dan	california	PROPN	_	Case=Abl|Number=Sing	4	flat	_	_
6	Memphis	memphis	PROPN	_	Case=Nom|Number=Sing	8	obl	_	_
7	Tennessee'ye	tennessee	PROPN	_	Case=Dat|Number=Sing	6	flat	_	_
8	olan	ol	ADJ	_	_	10	acl	_	_
9	tüm	tüm	DET	_	PronType=Art	10	det	_	_
10	uçuşları	uç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	11	obj	_	_
11	göster	göster	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


