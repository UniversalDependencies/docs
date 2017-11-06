---
layout: base
title:  'Statistics of root in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `root`

This relation is universal.

1000 nodes (6%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.11.

The following 7 pairs of parts of speech are connected with `root`: -<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (677; 68% instances), -<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (202; 20% instances), -<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (96; 10% instances), -<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (10; 1% instances), -<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), -<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (5; 1% instances), -<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	Yine	_	ADV	RB	_	7	advmod	_	_
2	de	_	ADV	RB	_	1	advmod:emph	_	_
3	hâlâ	_	ADV	RB	_	4	advmod	_	_
4	cevaplanamamış	_	ADJ	VJ	Aspect=Perf|Evident=Nfh|Mood=Abil|Number=Sing|Person=3|Polarity=Neg|Tense=Past|Voice=Pass	6	acl:relcl	_	_
5	bazı	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	6	det	_	_
6	sorular	_	NOUN	NN	Case=Nom|Number=Plur	7	nsubj	_	_
7	var	_	ADJ	JJ	Polarity=Pos	0	root	_	SpaceAfter=No
8	.	_	PUNCT	.	_	7	punct	_	_

~~~


