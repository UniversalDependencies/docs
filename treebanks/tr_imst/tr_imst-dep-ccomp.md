---
layout: base
title:  'Statistics of ccomp in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `ccomp`

This relation is universal.

56 nodes (0%) are attached to their parents as `ccomp`.

55 instances of `ccomp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (20; 36% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (12; 21% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (11; 20% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (6; 11% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp	color:blue
1	Biraz	biraz	ADV	Adverb	_	2	advmod	_	_
2	gülüşerek	gülüş	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv	4	nmod	_	_
3	olanları	ol	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	4	ccomp	_	_
4	anlattık	anlat	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 ccomp	color:blue
1	İkimiz	iki	NUM	NNum	Case=Nom|Number=Sing|Number[psor]=Plur|NumType=Card|Person=3|Person[psor]=1	4	nsubj	_	_
2	de	de	CCONJ	Conj	_	1	advmod:emph	_	_
3	aynı	aynı	ADJ	Adj	_	4	amod	_	_
4	durumda	durum	NOUN	Noun	Case=Loc|Number=Sing|Person=3	7	ccomp	_	_
5	yız	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres	4	cop	_	_
6	,	,	PUNCT	Punc	_	4	punct	_	_
7	demişti	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	9	punct	_	_
9	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 ccomp	color:blue
1	Ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	bir	bir	DET	ANum	Definite=Ind|PronType=Art	3	det	_	_
3	tutsak	tutsak	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	6	ccomp	_	_
4	ım	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres	3	cop	_	_
5	,	,	PUNCT	Punc	_	3	punct	_	_
6	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


