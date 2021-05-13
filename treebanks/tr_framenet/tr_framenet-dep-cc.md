---
layout: base
title:  'Statistics of cc in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `cc`

This relation is universal.

118 nodes (1%) are attached to their parents as `cc`.

115 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.08474576271186.

The following 7 pairs of parts of speech are connected with `cc`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (76; 64% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (27; 23% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-ADP.html">ADP</a></tt> (5; 4% instances), <tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (5; 4% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (3; 3% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	İnsanların	insan	NOUN	_	Case=Gen|Number=Plur|Person=3	2	nmod	_	_
2	arkasından	arka	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	compound	_	_
3	konuşur	konuş	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ama	ama	CCONJ	_	_	6	cc	_	_
5	yüzüne	yüz	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	compound	_	_
6	güler	gül	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	conj	_	_

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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Balta	balta	NOUN	_	Case=Nom|Number=Sing|Person=3	6	obl	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	küskü	küskü	NOUN	_	Case=Nom|Number=Sing|Person=3	1	conj	_	_
4	ile	ile	ADP	_	_	3	cc	_	_
5	onu	o	PRON	_	PronType=Prs	6	obj	_	_
6	kaldırır	kaldır	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	aşağıya	aşağı	NOUN	_	Case=Dat|Number=Sing|Person=3	9	obl	_	_
9	yuvarlarız	yuvarla	VERB	_	Aspect=Hab|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


