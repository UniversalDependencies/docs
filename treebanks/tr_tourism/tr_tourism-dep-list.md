---
layout: base
title:  'Statistics of list in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `list`

This relation is universal.

24 nodes (0%) are attached to their parents as `list`.

20 instances of `list` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.29166666666667.

The following 4 pairs of parts of speech are connected with `list`: <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (21; 88% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 list	color:blue
1	Personeli	personel	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
2	temizliği	temizlik	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	list	_	_
3	konumu	konum	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	list	_	_
4	çok	çok	ADV	_	_	5	advmod	_	_
5	iyiydi	iyi	ADJ	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 list	color:blue
1	Havuzlar	havuz	NOUN	_	Case=Nom|Number=Plur	3	nsubj	_	_
2	çok	çok	ADV	_	_	3	advmod	_	_
3	temiz	temiz	ADJ	_	_	0	root	_	_
4	ve	ve	CCONJ	_	_	5	cc	_	_
5	hijyen	hijyen	NOUN	_	Case=Nom|Number=Sing	3	list	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 list	color:blue
1	Bunun	bu	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Dem	2	nmod	_	_
2	dışında	dış	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	discourse	_	_
3	da	da	CCONJ	_	_	2	advmod	_	_
4	Tv	tv	PROPN	_	Case=Nom|Number=Sing	5	nmod	_	_
5	eksikliği	eksiklik	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	obl	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	çay	çay	NOUN	_	Case=Nom|Number=Sing	5	conj	_	_
8	vs	vs	CCONJ	_	_	7	list	_	_
9	için	için	ADP	_	_	8	case	_	_
10	küçük	küçük	ADJ	_	_	13	amod	_	_
11	bir	bir	DET	_	Definite=Ind|PronType=Art	13	det	_	_
12	su	su	NOUN	_	Case=Nom|Number=Sing	13	nmod	_	_
13	ısıtıcısı	ısıtıcı	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	nsubj	_	_
14	olmalıydı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Nec|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


