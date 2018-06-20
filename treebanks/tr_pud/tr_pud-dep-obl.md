---
layout: base
title:  'Statistics of obl in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="tr_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

148 nodes (1%) are attached to their parents as `obl`.

148 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.46621621621622.

The following 11 pairs of parts of speech are connected with `obl`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (90; 61% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (16; 11% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (12; 8% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (11; 7% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (7; 5% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl	color:blue
1	Trene	Trene	NOUN	NN	Case=Dat|Number=Sing	3	advmod	_	_
2	yeniden	yeniden	ADV	RB	_	3	advmod	_	_
3	binmiş	bin	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	güneye	güne	NOUN	NN	Case=Dat|Number=Sing	7	obl	_	_
6	doğru	doğru	ADP	IN	Number=Sing	5	case	_	_
7	ilerlemekteyiz	ilerlemekteyiz	VERB	VB	Aspect=Prog|Mood=Ind|Number=Plur|Person=1|Tense=Pres	3	conj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obl	color:blue
1	BBC	Bbc	PROPN	PROPN	Number=Sing	5	obl	_	Proper=True
2	için	için	ADP	IN	_	1	case	_	_
3	on	on	NUM	CD	Number=Sing	4	nummod	_	_
4	yıl	yıl	NOUN	NN	Number=Sing	5	obl:tmod	_	_
5	çalıştı	çalış	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 obl	color:blue
1	Fiyordlar	Fiyord	NOUN	NN	Number=Plur	9	obl	_	_
2	gibi	gibi	ADP	IN	_	1	case	_	SpaceAfter=No
3	,	,	PUNCT	,	_	1	punct	_	_
4	tatlı	tatlı	ADJ	JJ	Number=Sing	5	amod	_	_
5	su	su	NOUN	NN	Number=Sing	6	compound	_	_
6	gölleri	göl	NOUN	NN	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
7	de	de	ADV	RB	_	6	advmod:emph	_	_
8	genellikle	genellikle	ADV	RB	_	9	advmod	_	_
9	derin	derin	ADJ	JJ	Number=Sing	0	root	_	_
10	dir	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	9	cop	_	_
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


