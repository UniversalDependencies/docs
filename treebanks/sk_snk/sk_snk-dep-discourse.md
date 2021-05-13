---
layout: base
title:  'Statistics of discourse in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `discourse`

This relation is universal.

46 nodes (0%) are attached to their parents as `discourse`.

38 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.91304347826087.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (23; 50% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (14; 30% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	A	a	CCONJ	O	_	4	cc	4:cc	_
2	určite	určite	PART	T	_	4	advmod	4:advmod	_
3	si	si	PRON	R	PronType=Prs|Reflex=Yes	4	discourse	4:discourse	_
4	vyskúšajte	vyskúšať	VERB	VMdpb+	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	0:root	_
5	tento	tento	DET	PFis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	6	det	6:det	_
6	recept	recept	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	:	:	PUNCT	ZIP	_	4	punct	4:punct	_
8	-	-	PUNCT	ZIP	_	4	punct	4:punct	SpaceAfter=No
9	)	)	PUNCT	ZIP	_	4	punct	4:punct	SpaceAfter=No
10	.	.	PUNCT	ZIP	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 discourse	color:blue
1	A	a	PART	T	_	6	advmod	6:advmod	_
2	čo	čo	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	6	nsubj	6:nsubj	_
3	hnusné	hnusný	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	2:amod	_
4	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	discourse	6:discourse	_
5	tu	tu	ADV	Dx	Degree=Pos	6	advmod	6:advmod	_
6	rastie	rásť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
7	?	?	PUNCT	ZIP	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse	color:blue
1	“	“	PUNCT	Z	_	2	punct	2:punct	_
2	Kto	kto	PRON	PFms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	8	ccomp	8:ccomp	_
3	sú	byť	AUX	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
4	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	discourse	2:discourse	_
5	ľudia	človek	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj	SpaceAfter=No
6	?	?	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
7	“	“	PUNCT	Z	_	2	punct	2:punct	_
8	vypytovala	vypytovať	VERB	VLescf+	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
9	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
10	zvedavo	zvedavo	ADV	Dx	Degree=Pos	8	advmod	8:advmod	_
11	Maja	maja	PROPN	SSfs1:r	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	SpaceAfter=No
12	.	.	PUNCT	Z	_	8	punct	8:punct	_

~~~


