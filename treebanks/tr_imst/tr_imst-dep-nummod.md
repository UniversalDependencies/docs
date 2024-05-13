---
layout: base
title:  'Statistics of nummod in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `nummod`

This relation is universal.

597 nodes (1%) are attached to their parents as `nummod`.

590 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80737018425461.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (430; 72% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (69; 12% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (59; 10% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (12; 2% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (11; 2% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (10; 2% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Hayır	hayır	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	6	punct	_	_
3	yalnızca	yalnızca	ADV	Adverb	_	6	advmod	_	_
4	iki	iki	NUM	ANum	NumType=Card	5	nummod	_	_
5	kez	kez	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	obl	_	_
6	gittim	git	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	onbeş	onbeş	NUM	ANum	NumType=Card	2	nummod	_	_
2	yaşında	yaş	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpaceAfter=No
3	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod	color:blue
1	Kapının	kapı	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	2	nmod:poss	_	_
2	kenarında	kenar	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	4	amod	_	_
3	ki	ki	ADP	Rel	_	2	case	_	_
4	duvara	duvar	NOUN	Noun	Case=Dat|Number=Sing|Person=3	5	obl	_	_
5	dayanıp	dayan	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv	7	advcl	_	_
6	bize	biz	PRON	Pers	Case=Dat|Number=Plur|Person=1|PronType=Prs	7	obl	_	_
7	baktı	bak	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
8	bir	bir	NUM	ANum	NumType=Card	7	nummod	_	_
9	an	an	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


