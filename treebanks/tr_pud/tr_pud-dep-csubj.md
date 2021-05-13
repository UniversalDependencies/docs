---
layout: base
title:  'Statistics of csubj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `csubj`

This relation is universal.

93 nodes (1%) are attached to their parents as `csubj`.

93 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.55913978494624.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (21; 23% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (19; 20% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (16; 17% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (15; 16% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (10; 11% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (9; 10% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 csubj	color:blue
1	Sağlığın	Sağlık	NOUN	NN	Case=Gen|Number=Sing	2	nsubj	_	_
2	bozulması	boz	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Vnoun|Voice=Pass	9	csubj	_	_
3	Hitchcock	Hitchcock	PROPN	PROPN	Number=Sing	4	nmod:poss	_	Proper=True
4	hayatının	hayat	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nmod:poss	_	_
5	son	son	ADJ	JJ	Number=Sing	7	amod	_	_
6	yirmi	yirmi	NUM	CD	Number=Sing	7	nummod	_	_
7	yılında	yıl	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obl	_	_
8	üretimini	üretim	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	azalttı	azal	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Cau	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Son	son	ADJ	JJ	Number=Sing	3	amod	_	_
2	Olimpiyat	Olimpiyat	NOUN	NN	Number=Sing	3	nmod:poss	_	Proper=True
3	Oyunlarının	Oyun	NOUN	NN	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	Proper=True
4	393'te	393	NOUN	NN	Case=Loc|Number=Sing	5	obl	_	_
5	yapıldığı	yap	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	6	csubj	_	_
6	düşünülüyor	düşün	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 csubj	color:blue
1	İmparatorluk	imparatorluk	NOUN	NN	Number=Sing	2	nmod:poss	_	_
2	ailesinde	aile	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	advcl	_	_
3	ise	i	AUX	VB	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos	2	cop	_	_
4	göbek	göbek	NOUN	NN	Number=Sing	5	nmod:poss	_	_
5	adının	ad	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	kullanılması	kullan	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Vnoun|Voice=Pass	10	csubj	_	_
7	son	son	ADJ	JJ	Number=Sing	8	amod	_	_
8	derece	derece	NOUN	NN	Number=Sing	9	obl	_	_
9	uygunsuz	uygunsuz	ADJ	JJ	Number=Sing	10	xcomp	_	_
10	kabul	kabul	NOUN	NN	Number=Sing	0	root	_	_
11	edilir	ed	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres|Voice=Pass	10	compound:lvc	_	SpaceAfter=No
12	.	.	PUNCT	.	_	10	punct	_	_

~~~


