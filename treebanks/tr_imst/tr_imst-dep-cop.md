---
layout: base
title:  'Statistics of cop in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `cop`

This relation is universal.

849 nodes (1%) are attached to their parents as `cop`.

848 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12014134275618.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (355; 42% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (280; 33% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (64; 8% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (61; 7% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (55; 6% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (16; 2% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Uzun	uzun	ADJ	Adj	_	2	amod	_	_
2	zaman	zaman	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obl	_	_
3	dır	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
4	mı	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	aux:q	_	_
5	gidersiniz	git	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres	0	root	_	_
6	oraya	ora	NOUN	Noun	Case=Dat|Number=Sing|Person=3	5	obl	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Hayır	hayır	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	şarklı	şarklı	ADJ	Adj	_	0	root	_	_
4	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	3	cop	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Sen	sen	PRON	Pers	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
2	?	nere	PRON	Ques	Case=Loc|Number=Sing|Person=3	5	ccomp	_	_
3	eredesin	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres	2	cop	_	_
4	diye	diye	ADP	PCNom	_	2	case	_	_
5	sordum	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


