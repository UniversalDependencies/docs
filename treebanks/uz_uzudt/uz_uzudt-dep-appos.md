---
layout: base
title:  'Statistics of appos in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `appos`

This relation is universal.

29 nodes (0%) are attached to their parents as `appos`.

29 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (22; 76% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (4; 14% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="uz_uzudt-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="uz_uzudt-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	kapitan	kapitan	NOUN	N	_	7	nsubj	_	_
2	xarver	xarve	NOUN	N	_	1	appos	_	_
3	qomandanlik	qomandan	NOUN	N	Case=Nom	4	amod	_	_
4	supasida	supa	NOUN	N	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	5	obl	_	_
5	turib	tur	VERB	V	Aspect=Perf|VerbForm=Conv	7	advcl	_	_
6	qattiq	qattiq	ADJ	A	_	7	advmod	_	_
7	baqirdi	baq	VERB	V	_	0	root	_	_
8	:	baq	PUNCT	Y	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 appos	color:blue
1	qattiq	qattiq	ADJ	A	_	2	amod	_	_
2	to'xnashuvdan	to'xnashuv	NOUN	N	_	4	obl	_	_
3	zaxmat	zaxmat	NOUN	N	Case=Nom	4	obj	_	_
4	yegan	yegan	VERB	V	_	7	acl	_	_
5	‹	yegan	PUNCT	N	_	7	punct	_	_
6	‹	yegan	PUNCT	Y	_	7	punct	_	_
7	mari	mar	VERB	N	Mood=Imp|VerbForm=Fin	12	nsubj	_	_
8	›	mar	PUNCT	N	_	7	punct	_	_
9	›	mar	PUNCT	N	_	7	punct	_	_
10	namli	naml	ADJ	A	_	7	amod	_	_
11	paraxot	paraxot	NOUN	N	_	7	appos	_	_
12	to'xtab	to'xta	VERB	V	_	0	root	_	_
13	qoldi	qol	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	xcomp	_	_
14	.	.	PUNCT	Y	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 appos	color:blue
1	ular	ular	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	18	nsubj	_	_
2	varqirishib	varqiri	VERB	V	_	18	advcl	_	_
3	joylaridan	joy	NOUN	N	Case=Abl|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	4	obl	_	_
4	turib	tur	VERB	V	_	2	conj	_	_
5	,	tur	PUNCT	Y	_	11	punct	_	_
6	yanglishib	yangli	NOUN	N	_	7	compound:lvc	_	_
7	qolgan	qol	VERB	V	Case=Nom|Tense=Past|VerbForm=Part	10	acl	_	_
8	bobur	bobu	NOUN	N	Case=Nom	10	amod	_	_
9	ismli	isml	ADJ	A	_	8	appos	_	_
10	bolani	bola	NOUN	N	Case=Acc	11	obj	_	_
11	tutib	tut	VERB	V	Aspect=Perf|VerbForm=Inf	2	conj	_	_
12	,	tut	PUNCT	Y	_	2	punct	_	_
13	oʻyinning	oʻyin	NOUN	A	Case=Gen	14	nmod:poss	_	_
14	qoidasi	qoida	NOUN	N	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	16	obl	_	_
15	boʻyicha	boʻyich	ADP	R	_	14	case	_	_
16	jazolashga	jazola	VERB	V	_	18	obl	_	_
17	harakat	harakat	NOUN	N	Case=Acc	18	obj	_	_
18	qilishdi	qilmoq	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
19	.	qili	PUNCT	Y	_	18	punct	_	_

~~~


