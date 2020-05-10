---
layout: base
title:  'Statistics of root in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `root`

This relation is universal.

1000 nodes (6%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.429.

The following 8 pairs of parts of speech are connected with `root`: -<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (640; 64% instances), -<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (243; 24% instances), -<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (96; 10% instances), -<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (8; 1% instances), -<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), -<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (4; 0% instances), -<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), -<tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	Yeni	yeni	ADJ	JJ	Number=Sing	2	amod	_	_
2	bütçe	bütçe	NOUN	NN	Case=Nom|Number=Sing	7	nsubj	_	_
3	Clinton'un	Clinton	PROPN	PROPN	Case=Gen|Number=Sing	6	nmod:poss	_	Proper=True
4	kabarık	kabarık	ADJ	JJ	Number=Sing	6	amod	_	_
5	banka	banka	NOUN	NN	Number=Sing	6	nmod:poss	_	_
6	hesabından	hesab	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nmod	_	_
7	sağlanıyor	sağla	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
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
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	Yine	yine	ADV	RB	_	7	advmod	_	_
2	de	de	ADV	RB	_	1	advmod:emph	_	_
3	hâlâ	hâlâ	ADV	RB	_	4	advmod	_	_
4	cevaplanamamış	cevaplanama	ADJ	VJ	Aspect=Perf|Evident=Nfh|Mood=Pot|Number=Sing|Person=3|Polarity=Neg|Tense=Past|Voice=Pass	6	acl	_	_
5	bazı	bazı	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	6	det	_	_
6	sorular	soru	NOUN	NN	Case=Nom|Number=Plur	7	nsubj	_	_
7	var	var	ADJ	JJ	Polarity=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


