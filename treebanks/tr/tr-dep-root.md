---
layout: base
title:  'Statistics of root in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `root`

This relation is universal.

5635 nodes (10%) are attached to their parents as `root`.

5635 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.46761313220941.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="tr-pos-VERB.html">VERB</a></tt> (3842; 68% instances), -<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (971; 17% instances), -<tt><a href="tr-pos-ADJ.html">ADJ</a></tt> (508; 9% instances), -<tt><a href="tr-pos-PRON.html">PRON</a></tt> (80; 1% instances), -<tt><a href="tr-pos-PROPN.html">PROPN</a></tt> (64; 1% instances), -<tt><a href="tr-pos-ADV.html">ADV</a></tt> (57; 1% instances), -<tt><a href="tr-pos-PUNCT.html">PUNCT</a></tt> (41; 1% instances), -<tt><a href="tr-pos-NUM.html">NUM</a></tt> (29; 1% instances), -<tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt> (20; 0% instances), -<tt><a href="tr-pos-ADP.html">ADP</a></tt> (17; 0% instances), -<tt><a href="tr-pos-DET.html">DET</a></tt> (3; 0% instances), -<tt><a href="tr-pos-X.html">X</a></tt> (2; 0% instances), -<tt><a href="tr-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Ama	ama	CCONJ	Conj	_	4	conj	_	_
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
1	Kazada	kaza	NOUN	Noun	Case=Loc|Number=Sing|Person=3	4	nmod	_	_
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
1	Orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


