---
layout: base
title:  'Statistics of root in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `root`

This relation is universal.

5635 nodes (10%) are attached to their parents as `root`.

5635 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.39929015084295.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3789; 67% instances), -<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1005; 18% instances), -<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (523; 9% instances), -<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (82; 1% instances), -<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (72; 1% instances), -<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (67; 1% instances), -<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (24; 0% instances), -<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (22; 0% instances), -<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (16; 0% instances), -<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (15; 0% instances), -<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (14; 0% instances), -<tt><a href="tr_imst-pos-DET.html">DET</a></tt> (3; 0% instances), -<tt><a href="tr_imst-pos-X.html">X</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Ama	ama	CCONJ	Conj	_	4	cc	_	_
2	annemin	anne	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	nmod:poss	_	_
3	şartları	şart	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
4	vardı	var	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Kazada	kaza	NOUN	Noun	Case=Loc|Number=Sing|Person=3	4	obl	_	_
2	dört	dört	NUM	ANum	NumType=Card	3	nummod	_	_
3	pilot	pilot	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
4	şehit	şehit	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	düştü	düş	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	4	compound	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	amod	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


