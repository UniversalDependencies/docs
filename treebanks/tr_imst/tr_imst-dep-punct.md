---
layout: base
title:  'Statistics of punct in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `punct`

This relation is universal.

10375 nodes (18%) are attached to their parents as `punct`.

7874 instances of `punct` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02930120481928.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (5519; 53% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (2654; 26% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (980; 9% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (437; 4% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (234; 2% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (224; 2% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (101; 1% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (92; 1% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (46; 0% instances), <tt><a href="tr_imst-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (45; 0% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (25; 0% instances), <tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="tr_imst-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-X.html">X</a></tt>-<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
1	Ama	ama	CCONJ	Conj	_	0	root	_	_
2	annemin	anne	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	nmod:poss	_	_
3	şartları	şart	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
4	vardı	var	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	1	conj	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	(	(	PUNCT	Punc	_	2	punct	_	SpaceAfter=No
2	İzninizle	izin	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	neden	neden	ADV	Ques	_	5	advmod	_	_
5	olmasın	ol	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	2	conj	_	SpaceAfter=No
6	...	...	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 punct	color:blue
1	Herkes	herkes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
2	istediği	iste	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	advcl	_	_
3	gibi	gibi	ADP	PCNom	_	2	case	_	_
4	sevişiyor	seviş	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	her	her	DET	Det	_	8	nsubj	_	_
7	şey	şey	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	compound	_	_
8	serbest	serbest	ADJ	Adj	_	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


