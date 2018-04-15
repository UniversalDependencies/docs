---
layout: base
title:  'Statistics of root in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `root`

This relation is universal.

5635 nodes (10%) are attached to their parents as `root`.

5635 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.68056787932564.

The following 12 pairs of parts of speech are connected with `root`: -<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3534; 63% instances), -<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (943; 17% instances), -<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (485; 9% instances), -<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (184; 3% instances), -<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (147; 3% instances), -<tt><a href="tr_imst-pos-PUNCT.html">PUNCT</a></tt> (127; 2% instances), -<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (85; 2% instances), -<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (70; 1% instances), -<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (30; 1% instances), -<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (18; 0% instances), -<tt><a href="tr_imst-pos-DET.html">DET</a></tt> (10; 0% instances), -<tt><a href="tr_imst-pos-X.html">X</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Herkes	herkes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
2	istediği	iste	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	advmod:emph	_	_
3	gibi	gibi	ADP	PCNom	_	2	case	_	_
4	sevişiyor	seviş	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	her	her	DET	Det	_	8	nsubj	_	_
7	şey	şey	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	compound	_	_
8	serbest	serbest	ADJ	Adj	_	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	(	(	PUNCT	Punc	_	2	punct	_	SpaceAfter=No
2	İzninizle	izin	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	neden	ne	PRON	Ques	Case=Abl|Number=Sing|Person=3	5	obl	_	_
5	olmasın	ol	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	2	conj	_	SpaceAfter=No
6	...	...	PUNCT	Punc	_	5	punct	_	_

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


