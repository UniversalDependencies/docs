---
layout: base
title:  'Statistics of amod in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `amod`

This relation is universal.

15 nodes (2%) are attached to their parents as `amod`.

15 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26666666666667.

The following 3 pairs of parts of speech are connected with `amod`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (12; 80% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	İguazu	İguazu	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	büyük	büyük	ADJ	_	_	4	amod	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	ülke	ülke	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	4	aux:q	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	yoksa	yoksa	CCONJ	_	_	8	cc	_	_
8	küçük	küçük	ADJ	_	_	4	conj	_	_
9	mü	mi	AUX	_	Number=Sing|Person=3|PronType=Int	8	aux:q	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Kutsal	kutsal	ADJ	_	_	2	amod	_	_
2	kitapsız	kitap	NOUN	_	Number=Sing|Polarity=Neg	3	amod	_	_
3	dinler	din	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
4	de	de	ADV	_	_	3	advmod:emph	_	_
5	var	var	ADJ	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Soğanları	soğan	NOUN	_	Case=Acc|Number=Plur	5	obj	_	_
2	koyu	koyu	ADJ	_	_	3	amod	_	_
3	pembeleşinceye	pembeleş	VERB	_	Case=Dat|VerbForm=Conv	5	advcl	_	_
4	kadar	kadar	ADP	_	_	3	case	_	_
5	kavurun	kavur	VERB	_	Mood=Imp|Number=Plur|Person=2	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


