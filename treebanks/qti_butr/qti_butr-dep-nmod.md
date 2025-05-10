---
layout: base
title:  'Statistics of nmod in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `nmod`

This relation is universal.

10 nodes (3%) are attached to their parents as `nmod`.

9 instances of `nmod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 4 pairs of parts of speech are connected with `nmod`: <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (5; 50% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (2; 20% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Okulun	okul	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	Lang=tr
2	sitesini	site	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
3	navigate	navigate	NOUN	_	_	4	compound	_	Lang=en
4	etmek	et	VERB	_	Case=Nom|Polarity=Pos	5	nsubj	_	Lang=tr
5	kolay	kolay	ADJ	_	_	0	root	_	Lang=tr
6	değil	değil	AUX	_	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod	color:blue
1	Kafamda	kafa	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	4	obl	_	Lang=tr|LoanTrans=en:in_my_head
2	kira	kira	NOUN	_	Case=Nom|Number=Sing|Person=3	3	compound	_	Lang=tr
3	vermeden	ver	VERB	_	Case=Abl|Polarity=Neg|VerbForm=Conv	4	advcl	_	Lang=tr|LoanTrans=en:without_paying_rent
4	yaşayan	yaşa	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	9	acl	_	Lang=tr|LoanTrans=en:living_rent_free
5	bir	bir	NUM	_	NumType=Card	6	nummod	_	Lang=tr
6	numaralı	numara	NOUN	_	Case=Nom|Number=Sing|Person=3	9	amod	_	Lang=tr
7	Kazım	Kazım	PROPN	_	Case=Nom|Number=Sing|Person=3	9	nmod	_	Lang=tr
8	Koyuncu	Koyuncu	PROPN	_	Case=Nom|Number=Sing|Person=3	7	flat	_	Lang=tr
9	şarkısı	şarkı	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	Lang=tr|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Çok	çok	ADV	_	_	2	advmod	_	Lang=tr
2	kalabalık	kalabalık	ADJ	_	_	3	amod	_	Lang=tr
3	olacağı	ol	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Part	4	nmod	_	Lang=tr
4	gerçeği	gerçek	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nsubj	_	Lang=tr|LoanTrans=en:the_fact_that
5	beni	ben	PRON	_	Case=Acc|Number=Sing|Person=1	6	obj	_	Lang=tr
6	turn-offluyor	turn-off	VERB	_	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|CSID=MIXED|CSPoint=turn-off§luyor|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


