---
layout: base
title:  'Statistics of csubj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `csubj`

This relation is universal.

115 nodes (1%) are attached to their parents as `csubj`.

115 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.32173913043478.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (52; 45% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (32; 28% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (25; 22% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Son	_	ADJ	JJ	Number=Sing	3	amod	_	_
2	Olimpiyat	_	NOUN	NN	Number=Sing	3	compound	_	Proper=True
3	Oyunlarının	_	NOUN	NN	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	nmod:poss	_	Proper=True
4	393'te	_	NOUN	NN	Case=Loc|Number=Sing	5	obl:tmod	_	_
5	yapıldığı	_	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	6	csubj	_	_
6	düşünülüyor	_	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
7	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 csubj	color:blue
1	Belki	_	ADV	RB	_	6	advmod	_	_
2	de	_	ADV	RB	_	1	advmod:emph	_	_
3	kıyafet	_	NOUN	NN	Number=Sing	4	compound	_	_
4	yönetmeliği	_	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	csubj	_	_
5	çok	_	ADV	RB	_	6	advmod	_	_
6	sıkıcı	_	NOUN	VN	Number=Sing	0	root	_	_
7	ydı	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 csubj	color:blue
1	Oyun	_	NOUN	NN	Number=Sing	2	compound	_	_
2	tarzında	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	advmod	_	_
3	sert	_	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	yan	_	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
6	olsa	_	VERB	VB	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	12	advcl	_	_
7	da	_	ADV	RB	_	6	advmod:emph	_	_
8	yumuşak	_	ADJ	JJ	Number=Sing	10	amod	_	_
9	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	10	det	_	_
10	tutuşu	_	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	12	csubj	_	_
11	da	_	ADV	RB	_	10	advmod:emph	_	_
12	var	_	ADJ	JJ	Polarity=Pos	0	root	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


