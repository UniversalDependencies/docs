---
layout: base
title:  'Statistics of iobj in UD_Polish'
udver: '2'
---

## Treebank Statistics: UD_Polish: Relations: `iobj`

This relation is universal.

409 nodes (0%) are attached to their parents as `iobj`.

334 instances of `iobj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67481662591687.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="pl-pos-VERB.html">VERB</a></tt>-<tt><a href="pl-pos-PRON.html">PRON</a></tt> (211; 52% instances), <tt><a href="pl-pos-VERB.html">VERB</a></tt>-<tt><a href="pl-pos-NOUN.html">NOUN</a></tt> (168; 41% instances), <tt><a href="pl-pos-VERB.html">VERB</a></tt>-<tt><a href="pl-pos-PROPN.html">PROPN</a></tt> (22; 5% instances), <tt><a href="pl-pos-VERB.html">VERB</a></tt>-<tt><a href="pl-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="pl-pos-VERB.html">VERB</a></tt>-<tt><a href="pl-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Uświadomiła	uświadomić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	SpaceAfter=No
3	,	,	PUNCT	interp	_	6	punct	_	_
4	że	że	SCONJ	comp	_	6	case	_	_
5	kilkadziesiąt	kilkadziesiąt	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	6	det:numgov	_	_
6	sekund	sekunda	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	ccomp	_	_
7	to	to	AUX	pred	_	6	cop	_	_
8	całe	cały	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	_
9	wieki	wiek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Żołnierze	żołnierz	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
2	zamierzali	zamierzać	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	wywieźć	wywieźć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf	2	xcomp	_	_
4	uchodźców	uchodźca	NOUN	subst:pl:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur	3	obj	_	_
5	ciężarówkami	ciężarówka	NOUN	subst:pl:inst:f	Case=Ins|Gender=Fem|Number=Plur	3	iobj	_	SpaceAfter=No
6	.	.	PUNCT	interp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Trzeba	trzeba	VERB	pred	_	0	root	_	_
2	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	aux	_	_
3	powiedzieć	powiedzieć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf	1	xcomp	_	_
4	Johnowi	John	PROPN	subst:sg:dat:m1	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing	3	iobj	_	SpaceAfter=No
5	,	,	PUNCT	interp	_	7	punct	_	_
6	żeby	żeby	SCONJ	comp	_	7	mark	_	_
7	zainstalowali	zainstalować	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	3	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	1	punct	_	_

~~~


