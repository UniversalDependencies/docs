---
layout: base
title:  'Statistics of cc in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `cc`

This relation is universal.

115 nodes (1%) are attached to their parents as `cc`.

115 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13913043478261.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (76; 66% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (29; 25% instances), <tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (5; 4% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (3; 3% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	İnsanların	insan	NOUN	_	Case=Gen|Number=Plur|Person=3	2	nmod	_	_
2	arkasından	arka	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	compound	_	_
3	konuşur	konuş	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ama	ama	CCONJ	_	_	6	cc	_	_
5	yüzüne	yüz	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	compound	_	_
6	güler	gül	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	conj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	Silahını	silah	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obj	_	_
2	hatta	hatta	CCONJ	_	_	4	cc	_	_
3	başındaki	baş	ADJ	_	_	4	amod	_	_
4	şapkasını	şapka	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	conj	_	_
5	bırakıp	bırak	ADV	_	_	6	advcl	_	_
6	kaçtı	kaç	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	1923'te	1923	NOUN	_	Case=Loc|Number=Sing|Person=3	7	nmod	_	_
2	Türkiye	türkiye	PROPN	_	Case=Nom|Number=Sing	7	nsubj	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	Yunanistan	yunanistan	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
5	,	,	PUNCT	_	_	7	punct	_	_
6	mübadele	mübadele	NOUN	_	Case=Nom|Number=Sing|Person=3	7	compound	_	_
7	etti	et	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


