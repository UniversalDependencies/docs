---
layout: base
title:  'Statistics of mark in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `mark`

This relation is universal.

82 nodes (0%) are attached to their parents as `mark`.

80 instances of `mark` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26829268292683.

The following 7 pairs of parts of speech are connected with `mark`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (36; 44% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (18; 22% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (13; 16% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (7; 9% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (6; 7% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	Enişten	enişte	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	2	nsubj	_	_
2	gelsin	gel	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
3	de	de	CCONJ	Conj	_	2	mark	_	SpaceAfter=No
4	...	...	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	Dün	dün	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	obl	_	_
2	de	de	CCONJ	Conj	_	1	mark	_	_
3	bir	bir	DET	ANum	_	4	det	_	_
4	kamyon	kamyon	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	kutuları	kutu	NOUN	Noun	Case=Acc|Number=Plur|Person=3	8	obj	_	_
7	bana	ben	PRON	Pers	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	obl	_	_
8	geri	geri	ADV	Adverb	_	0	root	_	_
9	getirdi	getir	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mark	color:blue
1	Her	her	DET	Det	_	2	det	_	_
2	gün	gün	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	obl	_	_
3	tekrarlanan	tekrarla	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	5	acl	_	_
4	bu	bu	DET	Det	_	5	det	_	_
5	rutine	rutin	ADJ	NAdj	Case=Dat|Number=Sing|Person=3	10	nmod	_	_
6	belli	belli	ADJ	Adj	_	10	amod	_	_
7	ki	ki	CCONJ	Conj	_	6	mark	_	_
8	onlar	o	PRON	Pers	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
9	da	da	CCONJ	Conj	_	8	advmod:emph	_	_
10	alışık	alışık	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	tı	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	10	cop	_	_
12	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


