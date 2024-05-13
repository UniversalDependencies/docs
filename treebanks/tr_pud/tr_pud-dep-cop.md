---
layout: base
title:  'Statistics of cop in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `cop`

This relation is universal.

456 nodes (3%) are attached to their parents as `cop`.

456 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24342105263158.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (257; 56% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (136; 30% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (27; 6% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (17; 4% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (12; 3% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
1	Maksimum	Maksimum	ADJ	JJ	Number=Sing	2	amod	_	_
2	miktar	miktar	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
3	kişi	kişi	NOUN	NN	Number=Sing	4	nmod:poss	_	_
4	başı	baş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	6	amod	_	_
5	5.000	5.000	NUM	CD	Number=Sing	6	nummod	_	_
6	dolar	do	NOUN	NN	Number=Sing	0	root	_	_
7	dır	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
1	Bu	bu	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	8	nsubj	_	_
2	bazen	bazen	ADV	RB	_	6	advmod	_	_
3	süper	süper	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	5	det	_	_
5	güce	güce	NOUN	NN	Case=Dat|Number=Sing	6	obj	_	_
6	sahip	sahip	ADJ	JJ	Number=Sing	8	obj	_	_
7	olmak	ol	AUX	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Vnoun	6	cop	_	ToDo=pcomp
8	gibi	gibi	ADP	IN	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Barroso	Barroso	PROPN	PROPN	Number=Sing	4	nmod	_	Proper=True
2	için	için	ADP	IN	_	1	case	_	_
3	konu	konu	NOUN	NN	Case=Nom|Number=Sing	4	nsubj	_	_
4	kapanmış	kapa	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	olmayabilir	ol	AUX	VB	Aspect=Hab|Mood=GenPot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	4	cop	_	SpaceAfter=No
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


