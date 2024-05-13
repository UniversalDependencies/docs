---
layout: base
title:  'Statistics of aux:q in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_imst-dep-aux.html">aux</a></tt>.

218 nodes (0%) are attached to their parents as `aux:q`.

218 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19266055045872.

The following 10 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (105; 48% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (46; 21% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (35; 16% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (11; 5% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (11; 5% instances), <tt><a href="tr_imst-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:q	color:blue
1	Yoksa	yok	ADP	NAdj	Case=Nom|Number=Sing|Person=3	2	cc	_	_
2	biliyor	bil	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	8	ccomp	_	_
3	musunuz	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres	2	aux:q	_	_
4	orayı	ora	NOUN	Noun	Case=Acc|Number=Sing|Person=3	2	conj	_	SpaceAfter=No
5	?	?	PUNCT	Punc	_	4	punct	_	_
6	diye	diye	ADP	PCNom	_	2	case	_	_
7	hayretle	hayret	NOUN	Noun	Case=Ins|Number=Sing|Person=3	8	obl	_	_
8	sordu	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 aux:q	color:blue
1	Ömür	ömür	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	ccomp	_	_
2	Uzatma	uza	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun|Voice=Cau	1	flat	_	_
3	Kıraathanesi	kıraathane	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	flat	_	_
4	mi	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	aux:q	_	SpaceAfter=No
5	?	?	PUNCT	Punc	_	4	punct	_	_
6	diye	diye	ADP	PCNom	_	1	case	_	_
7	sordu	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:q	color:blue
1	Bir	bir	DET	ANum	_	2	det	_	_
2	bardak	bardak	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	clf	_	_
3	su	su	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
4	var	var	ADJ	Adj	_	8	ccomp	_	_
5	mı	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux:q	_	SpaceAfter=No
6	?	?	PUNCT	Punc	_	5	punct	_	_
7	diye	diye	ADP	PCNom	_	4	case	_	_
8	sordu	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


