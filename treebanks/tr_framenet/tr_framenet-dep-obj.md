---
layout: base
title:  'Statistics of obj in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `obj`

This relation is universal.

1533 nodes (8%) are attached to their parents as `obj`.

1523 instances of `obj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.91650358773646.

The following 20 pairs of parts of speech are connected with `obj`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (1059; 69% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (139; 9% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (113; 7% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (91; 6% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (46; 3% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (18; 1% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt> (18; 1% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
1	Beni	ben	PRON	_	PronType=Prs	2	obj	_	_
2	görünce	gör	ADV	_	_	5	advcl	_	_
3	artık	artık	ADV	_	_	5	advmod	_	_
4	yolunu	yol	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obj	_	_
5	değiştiriyor	değiştir	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obj	color:blue
1	Köyü	köy	NOUN	_	Case=Acc|Number=Sing|Person=3	5	obj	_	_
2	sular	su	NOUN	_	Case=Nom|Number=Plur|Person=3	3	nmod	_	_
3	altında	alt	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	obl	_	_
4	kalmaktan	kal	NOUN	_	Case=Abl|Number=Sing|Person=3	5	obl	_	_
5	kurtarmak	kurtar	NOUN	_	Case=Nom|Number=Sing|Person=3	8	obl	_	_
6	için	için	ADP	_	_	5	case	_	_
7	nehri	nehir	NOUN	_	Case=Acc|Number=Sing|Person=3	8	obj	_	_
8	aktaracağız	aktar	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obj	color:blue
1	Kalbini	kalp	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	compound	_	_
2	kazanmıştım	kazan	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	7	parataxis	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	bu	bu	DET	_	Definite=Def	5	det	_	_
5	beni	ben	PRON	_	PronType=Prs	7	obj	_	_
6	mutlu	mutlu	ADJ	_	_	7	compound	_	_
7	ediyordu	et	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


