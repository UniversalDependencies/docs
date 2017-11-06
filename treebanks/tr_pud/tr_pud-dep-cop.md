---
layout: base
title:  'Statistics of cop in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `cop`

This relation is universal.

517 nodes (3%) are attached to their parents as `cop`.

517 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20116054158607.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (279; 54% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (202; 39% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (14; 3% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (13; 3% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
1	Bu	_	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	8	nsubj	_	_
2	bazen	_	ADV	RB	_	6	advmod	_	_
3	süper	_	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	güce	_	NOUN	NN	Case=Dat|Number=Sing	6	nmod:arg	_	_
6	sahip	_	ADJ	JJ	Number=Sing	8	obj	_	_
7	olmak	_	AUX	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	6	cop	_	ToDo=pcomp
8	gibi	_	ADP	IN	_	0	root	_	SpaceAfter=No
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 cop	color:blue
1	İlk	_	ADJ	JJ	Number=Sing	2	amod	_	_
2	kralları	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=3	3	nsubj	_	_
3	Mojmír	_	PROPN	PROPN	Number=Sing	0	root	_	Proper=True
4	I	_	NUM	CD	_	3	compound	_	Proper=True
5	(	_	PUNCT	(	_	10	punct	_	SpaceAfter=No
6	830	_	NUM	CD	Number=Sing	9	compound	_	SpaceAfter=No
7	-	_	PUNCT	-	_	8	punct	_	SpaceAfter=No
8	846	_	NUM	CD	Number=Sing	6	conj	_	_
9	arasında	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	compound	_	_
10	hükümdar	_	NOUN	NN	Number=Sing	3	appos	_	SpaceAfter=No
11	)	_	PUNCT	)	_	10	punct	_	_
12	olmuştur	_	AUX	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	3	cop	_	SpaceAfter=No
13	.	_	PUNCT	.	_	3	punct	_	_

~~~


