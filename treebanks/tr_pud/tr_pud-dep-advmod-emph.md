---
layout: base
title:  'Statistics of advmod:emph in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-advmod.html">advmod</a></tt>.

120 nodes (1%) are attached to their parents as `advmod:emph`.

117 instances of `advmod:emph` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23333333333333.

The following 6 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (63; 53% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (21; 18% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (15; 13% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (10; 8% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (7; 6% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (4; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 advmod:emph	color:blue
1	Oyun	oyun	NOUN	NN	Number=Sing	2	nmod:poss	_	_
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Belki	belki	ADV	RB	_	6	advmod	_	_
2	de	de	ADV	RB	_	1	advmod:emph	_	_
3	kıyafet	kıyafet	NOUN	NN	Number=Sing	4	nmod:poss	_	_
4	yönetmeliği	yönetmelik	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
5	çok	çok	ADV	RB	_	6	advmod	_	_
6	sıkıcı	sıkıcı	NOUN	VN	Number=Sing	0	root	_	_
7	ydı	i	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:emph	color:blue
1	Bizi	biz	PRON	PRP	Case=Acc|Number=Sing|Person=1|Polarity=Pos	3	obj	_	_
2	onlara	o	PRON	PRP	Case=Dat|Number=Plur|Person=3|Polarity=Pos	3	iobj	_	_
3	bağlayan	bağla	ADJ	VJ	Number=Sing|Polarity=Pos	4	acl	_	_
4	şey	şey	PRON	PRI	Case=Nom|Number=Sing	6	nsubj	_	_
5	de	de	ADV	RB	_	4	advmod:emph	_	_
6	bu	bu	PRON	PRD	Definite=Def|Number=Sing|Polarity=Pos	0	root	_	_
7	dur	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


