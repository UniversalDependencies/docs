---
layout: base
title:  'Statistics of list in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `list`

This relation is universal.

29 nodes (0%) are attached to their parents as `list`.

25 instances of `list` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58620689655172.

The following 3 pairs of parts of speech are connected with `list`: <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (24; 83% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (4; 14% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 list	color:blue
1	PERSONELİ	personel	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	_
2	TEMİZLİĞİ	temizlik	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	list	_	_
3	KONUMU	konum	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	list	_	_
4	ÇOK	çok	ADV	_	_	5	advmod	_	_
5	İYİYDİ	iyi	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 list	color:blue
1	KONUM	konum	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	OLARAK	ol	ADV	_	_	3	advcl	_	_
3	MUHTEŞEM	muhteşem	ADJ	_	_	0	root	_	_
4	DENİZ	deniz	NOUN	_	Case=Nom|Number=Sing|Person=3	3	list	_	_
5	KOY	koy	NOUN	_	Case=Nom|Number=Sing|Person=3	3	list	_	_
6	HAVUZ	havuz	NOUN	_	Case=Nom|Number=Sing|Person=3	3	list	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 list	color:blue
1	BUNUN	bu	PRON	_	PronType=Dem	2	nmod	_	_
2	DIŞINDA	dış	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	discourse	_	_
3	DA	da	CCONJ	_	_	2	advmod	_	_
4	TV	tv	PROPN	_	Case=Nom|Number=Sing	5	nmod	_	_
5	EKSİKLİĞİ	eksiklik	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	obl	_	_
6	VE	ve	CCONJ	_	_	7	cc	_	_
7	ÇAY	çay	NOUN	_	Case=Nom|Number=Sing|Person=3	5	conj	_	_
8	VS	vs	CCONJ	_	_	7	list	_	_
9	İÇİN	için	ADP	_	_	8	case	_	_
10	KÜÇÜK	küçük	ADJ	_	_	13	amod	_	_
11	BİR	bir	DET	_	Definite=Ind|PronType=Art	13	det	_	_
12	SU	su	NOUN	_	Case=Nom|Number=Sing|Person=3	13	nmod	_	_
13	ISITICISI	ısıtıcı	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	nsubj	_	_
14	OLMALIYDI	ol	VERB	_	Aspect=Perf|Mood=Nec|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


