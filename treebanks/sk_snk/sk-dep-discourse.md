---
layout: base
title:  'Statistics of discourse in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `discourse`

This relation is universal.

45 nodes (0%) are attached to their parents as `discourse`.

37 instances of `discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86666666666667.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (23; 51% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (14; 31% instances), <tt><a href="sk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	A	a	CCONJ	O	_	4	cc	_	_
2	určite	určite	PART	T	_	4	advmod	_	_
3	si	si	PRON	R	PronType=Prs|Reflex=Yes	4	discourse	_	_
4	vyskúšajte	vyskúšať	VERB	VMdpb+	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
5	tento	tento	DET	PFis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	recept	recept	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
7	:	:	PUNCT	ZIP	_	4	punct	_	_
8	-	-	PUNCT	ZIP	_	4	punct	_	SpaceAfter=No
9	)	)	PUNCT	ZIP	_	4	punct	_	SpaceAfter=No
10	.	.	PUNCT	ZIP	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 discourse	color:blue
1	A	a	PART	T	_	6	advmod	_	_
2	čo	čo	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	6	nsubj	_	_
3	hnusné	hnusný	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	_
4	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	discourse	_	_
5	tu	tu	ADV	Dx	Degree=Pos	6	advmod	_	_
6	rastie	rásť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	?	?	PUNCT	ZIP	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse	color:blue
1	“	“	PUNCT	Z	_	2	punct	_	_
2	Kto	kto	PRON	PFms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	8	ccomp	_	_
3	sú	byť	AUX	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	discourse	_	_
5	ľudia	človek	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	SpaceAfter=No
6	?	?	PUNCT	Z	_	2	punct	_	SpaceAfter=No
7	“	“	PUNCT	Z	_	2	punct	_	_
8	vypytovala	vypytovať	VERB	VLescf+	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
9	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	8	expl:pv	_	_
10	zvedavo	zvedavo	ADV	Dx	Degree=Pos	8	advmod	_	_
11	Maja	maja	PROPN	SSfs1:r	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	8	punct	_	_

~~~


