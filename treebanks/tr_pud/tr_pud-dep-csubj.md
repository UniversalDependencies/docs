---
layout: base
title:  'Statistics of csubj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `csubj`

This relation is universal.

115 nodes (1%) are attached to their parents as `csubj`.

115 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.31304347826087.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (51; 44% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (31; 27% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (23; 20% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Son	son	ADJ	JJ	Number=Sing	3	amod	_	_
2	Olimpiyat	Olimpiyat	NOUN	NN	Number=Sing	3	compound	_	Proper=True
3	Oyunlarının	Oyun	NOUN	NN	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	nmod:poss	_	Proper=True
4	393'te	393	NOUN	NN	Case=Loc|Number=Sing	5	obl:tmod	_	_
5	yapıldığı	yap	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	6	csubj	_	_
6	düşünülüyor	düşün	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 csubj	color:blue
1	Belki	belki	ADV	RB	_	6	advmod	_	_
2	de	de	ADV	RB	_	1	advmod:emph	_	_
3	kıyafet	kıyafet	NOUN	NN	Number=Sing	4	compound	_	_
4	yönetmeliği	yönetmelik	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	csubj	_	_
5	çok	çok	ADV	RB	_	6	advmod	_	_
6	sıkıcı	sıkıcı	NOUN	VN	Number=Sing	0	root	_	_
7	ydı	i	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 csubj	color:blue
1	Oyun	oyun	NOUN	NN	Number=Sing	2	compound	_	_
2	tarzında	tarz	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl	_	_
3	sert	sert	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	yan	yan	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
6	olsa	ol	VERB	VB	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	12	advcl	_	_
7	da	da	ADV	RB	_	6	advmod:emph	_	_
8	yumuşak	yumuşak	ADJ	JJ	Number=Sing	10	amod	_	_
9	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	10	det	_	_
10	tutuşu	tutuş	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	12	csubj	_	_
11	da	da	ADV	RB	_	10	advmod:emph	_	_
12	var	var	ADJ	JJ	Polarity=Pos	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


