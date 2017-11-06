---
layout: base
title:  'Statistics of punct in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `punct`

This relation is universal.

2150 nodes (13%) are attached to their parents as `punct`.

1873 instances of `punct` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66279069767442.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (837; 39% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (765; 36% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (225; 10% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (164; 8% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (53; 2% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (48; 2% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (27; 1% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (18; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="tr_pud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 punct	color:blue
1	Yeni	_	ADJ	JJ	Number=Sing	2	amod	_	_
2	bütçe	_	NOUN	NN	Case=Nom|Number=Sing	7	nsubj	_	_
3	Clinton'un	_	PROPN	PROPN	Case=Gen|Number=Sing	6	nmod:poss	_	Proper=True
4	kabarık	_	ADJ	JJ	Number=Sing	6	amod	_	_
5	banka	_	NOUN	NN	Number=Sing	6	compound	_	_
6	hesabından	_	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	advmod	_	_
7	sağlanıyor	_	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
8	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 punct	color:blue
1	Maksimum	_	ADJ	JJ	Number=Sing	2	amod	_	_
2	miktar	_	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
3	kişi	_	NOUN	NN	Number=Sing	4	compound	_	_
4	başı	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	6	compound	_	_
5	5.000	_	NUM	CD	Number=Sing	6	nummod	_	_
6	dolar	_	NOUN	NN	Number=Sing	0	root	_	_
7	dır	_	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	Eşi	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	2	compound	_	_
2	Alice	_	PROPN	PROPN	_	12	nsubj	_	Proper=True|SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	"	_	PUNCT	``	_	8	punct	_	SpaceAfter=No
5	Kendi	_	PRON	PRR	Number=Sing|Reflex=Yes	6	amod	_	_
6	sağlığını	_	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
7	tamamen	_	ADV	RB	_	8	advmod	_	_
8	ihmal	_	NOUN	NN	Number=Sing	12	xcomp	_	_
9	etmesi	_	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	8	fixed	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	SpaceAfter=No
11	"	_	PUNCT	''	_	8	punct	_	_
12	dedi	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


