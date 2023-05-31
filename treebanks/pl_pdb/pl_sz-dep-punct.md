---
layout: base
title:  'Statistics of punct in UD_Polish-SZ'
udver: '2'
---

## Treebank Statistics: UD_Polish-SZ: Relations: `punct`

This relation is universal.

13485 nodes (16%) are attached to their parents as `punct`.

9469 instances of `punct` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.20867630700779.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (10485; 78% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (1274; 9% instances), <tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (1135; 8% instances), <tt><a href="pl_sz-pos-X.html">X</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (188; 1% instances), <tt><a href="pl_sz-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (157; 1% instances), <tt><a href="pl_sz-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (57; 0% instances), <tt><a href="pl_sz-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (50; 0% instances), <tt><a href="pl_sz-pos-PART.html">PART</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (41; 0% instances), <tt><a href="pl_sz-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (40; 0% instances), <tt><a href="pl_sz-pos-DET.html">DET</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (27; 0% instances), <tt><a href="pl_sz-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (19; 0% instances), <tt><a href="pl_sz-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="pl_sz-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="pl_sz-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_sz-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	Zawahała	zawahać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	się	się	PRON	qub	PronType=Prs|Reflex=Yes	1	expl:pv	_	SpaceAfter=No
3	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 punct	color:blue
1	-	-	PUNCT	interp	_	4	punct	_	_
2	Jesteśmy	być	AUX	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
3	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	4	obj	_	_
4	pisani	pisany	ADJ	ppas:pl:nom:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 punct	color:blue
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


