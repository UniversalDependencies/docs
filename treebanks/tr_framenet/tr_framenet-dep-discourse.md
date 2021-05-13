---
layout: base
title:  'Statistics of discourse in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `discourse`

This relation is universal.

44 nodes (0%) are attached to their parents as `discourse`.

36 instances of `discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18181818181818.

The following 17 pairs of parts of speech are connected with `discourse`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (6; 14% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (5; 11% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-INTJ.html">INTJ</a></tt> (5; 11% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (5; 11% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (5; 11% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-INTJ.html">INTJ</a></tt> (2; 5% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 discourse	color:blue
1	Bütün	bütün	ADJ	_	_	3	amod	_	_
2	bu	bu	DET	_	Definite=Def	3	det	_	_
3	projeler	proje	NOUN	_	Case=Nom|Number=Plur|Person=3	4	nmod	_	_
4	süresince	süresince	ADV	_	_	6	advcl	_	_
5	israfa	israf	NOUN	_	Case=Dat|Number=Sing|Person=3	6	compound	_	_
6	kaçma	kaç	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|Tense=Pres	0	root	_	_
7	lütfen	lütfen	ADV	_	_	6	discourse	_	_
8	mümkünse	mümkün	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	6	advcl	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Hele	hele	CCONJ	_	_	2	discourse	_	_
2	dur	dur	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	4	parataxis	_	_
3	öfkemi	öfke	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	4	obj	_	_
4	tekmilleyeyim	tekmille	VERB	_	Mood=Opt|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	_
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Sakın	sakın	INTJ	_	_	4	discourse	_	_
2	o	o	DET	_	Definite=Def	3	det	_	_
3	silahı	silah	NOUN	_	Case=Acc|Number=Sing|Person=3	4	obj	_	_
4	ateşleyeyim	ateşle	VERB	_	Mood=Opt|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	5	compound	_	_
5	deme	de	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	!	!	PUNCT	_	_	5	punct	_	_

~~~


