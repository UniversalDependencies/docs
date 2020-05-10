---
layout: base
title:  'Statistics of advmod in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="tr_pud-dep-advmod-emph.html">advmod:emph</a></tt>.

586 nodes (3%) are attached to their parents as `advmod`.

583 instances of `advmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.64675767918089.

The following 13 pairs of parts of speech are connected with `advmod`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (176; 30% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (171; 29% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (159; 27% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (52; 9% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-DET.html">DET</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advmod	color:blue
1	Bu	bu	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	8	nsubj	_	_
2	bazen	bazen	ADV	RB	_	6	advmod	_	_
3	süper	süper	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	güce	güce	NOUN	NN	Case=Dat|Number=Sing	6	obj	_	_
6	sahip	sahip	ADJ	JJ	Number=Sing	8	obj	_	_
7	olmak	ol	AUX	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	6	cop	_	ToDo=pcomp
8	gibi	gibi	ADP	IN	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Söylediği	söyle	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	4	acl	_	_
2	ve	ve	CCONJ	CCONJ	_	3	cc	_	_
3	yaptığı	yap	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	1	conj	_	_
4	şeyler	şey	NOUN	NN	Case=Nom|Number=Plur	6	nsubj	_	_
5	gerçekten	gerçekten	ADV	RB	_	6	advmod	_	_
6	inanılmaz	inan	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


