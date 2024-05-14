---
layout: base
title:  'Statistics of compound in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="ota_dudu-dep-compound-lvc.html">compound:lvc</a></tt>.

15 nodes (2%) are attached to their parents as `compound`.

13 instances of `compound` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (6; 40% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (3; 20% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (3; 20% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (1; 7% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound	color:blue
1	eger	eger	SCONJ	_	_	15	mark	_	_
2	diler	dile	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	advcl	_	_
3	señ	y	AUX	Zero	Number=Sing|Polarity=Pos	2	cop	_	_
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	kimseyi	kimse	NOUN	_	Case=Acc|Number=Sing|Person=3	7	obj	_	_
6	tesḫîr	tesḫîr	ADJ	_	_	7	advmod	_	_
7	idesin	et	VERB	_	Aspect=Hab|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	advcl	_	_
8	evvel	evvel	ADV	_	_	7	advmod	_	_
9	kendi	kendi	PRON	_	PronType=Prs|Reflex=Yes	10	nmod:poss	_	_
10	adın	ad	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	15	obj	_	_
11	ve	ve	CCONJ	_	_	13	cc	_	_
12	anası	ana	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	nmod:poss	_	_
13	adın	ad	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	conj	_	_
14	ḥisâb	ḥisâb	NOUN	_	Case=Nom|Number=Sing|Person=3	15	compound	_	_
15	idesin	et	VERB	_	Aspect=Hab|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	begler	beg	NOUN	Noun	Case=Nom|Number=Plur|Person=3	4	nsubj	_	_
2	ḫoş	ḫoş	ADJ	Adj	_	3	compound	_	_
3	kaluñ	kal	VERB	VERB	_	4	ccomp	_	_
4	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	yerse	yer	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	compound	_	_
2	yesün	ye	VERB	_	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	advcl	_	_
3	yemezse	ye	VERB	_	Aspect=Hab|Mood=Cnd|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	advcl	_	_
4	ṭursun	ṭur	VERB	_	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	compound	_	_
5	getsün	get	VERB	_	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


