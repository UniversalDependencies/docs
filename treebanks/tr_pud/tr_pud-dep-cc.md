---
layout: base
title:  'Statistics of cc in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="tr_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

521 nodes (3%) are attached to their parents as `cc`.

520 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.20729366602687.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (256; 49% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (85; 16% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (68; 13% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (62; 12% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (17; 3% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (15; 3% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Program	program	NOUN	NN	Case=Nom|Number=Sing	8	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	sponsorluk	sponsorluk	NOUN	NN	Number=Sing	6	nmod:poss	_	_
4	ve	ve	CCONJ	CCONJ	_	5	cc	_	_
5	reklam	reklam	NOUN	NN	Number=Sing	3	conj	_	_
6	yoluyla	yol	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
7	para	para	NOUN	NN	Number=Sing	8	obj	_	_
8	kazanıyor	kazan	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Geçit	Geçit	NOUN	NN	Number=Sing	2	nmod:poss	_	_
2	töreni	tören	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
3	yok	yok	ADJ	JJ	Polarity=Neg	0	root	_	_
4	ve	ve	CCONJ	CCONJ	_	6	cc	_	_
5	hiç	hiç	ADV	RB	_	6	advmod	_	_
6	olmadı	ol	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	conj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Weiss	Weiss	PROPN	PROPN	Case=Nom|Number=Sing	11	nsubj	_	Proper=True|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	Köln	Köln	PROPN	PROPN	Number=Sing	7	obl	_	Proper=True
4	ve	ve	CCONJ	CCONJ	_	5	cc	_	_
5	Bremen	Bremen	PROPN	PROPN	Number=Sing	3	conj	_	Proper=True
6	şehirlerinden	şehir	NOUN	NN	Case=Abl|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	appos	_	_
7	gelen	gel	ADJ	VJ	Number=Sing|Polarity=Pos	9	acl	_	_
8	edebiyat	edebiyat	NOUN	NN	Number=Sing	9	nmod:poss	_	_
9	ödülleri	ödül	NOUN	NN	Number=Plur|Number[psor]=Sing|Person[psor]=3	11	obl	_	_
10	ile	ile	ADP	IN	_	9	case	_	_
11	onurlandırıldı	onurlandır	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=CauPass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


