---
layout: base
title:  'Statistics of flat:foreign in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `flat:foreign`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="no_bokmaal-dep-flat-name.html">flat:name</a></tt>.

481 nodes (0%) are attached to their parents as `flat:foreign`.

481 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.12474012474012.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="no_bokmaal-pos-X.html">X</a></tt>-<tt><a href="no_bokmaal-pos-X.html">X</a></tt> (478; 99% instances), <tt><a href="no_bokmaal-pos-X.html">X</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	«	$"	PUNCT	_	_	3	punct	_	_
2	...	$...	PUNCT	_	_	3	punct	_	_
3	where	where	X	_	_	0	root	_	_
4	do	do	X	_	_	3	flat:foreign	_	_
5	we	we	X	_	_	3	flat:foreign	_	_
6	go	go	X	_	_	3	flat:foreign	_	_
7	when	when	X	_	_	3	flat:foreign	_	_
8	we	we	X	_	_	3	flat:foreign	_	_
9	die	die	X	_	_	3	flat:foreign	_	_
10	?	$?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 flat:foreign	color:blue
1	TV-kanalen	TV-kanal	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
2	melder	melde	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	samtidig	samtidig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	2	advmod	_	_
4	at	at	SCONJ	_	_	7	mark	_	_
5	Mitt	Mitt	PROPN	_	_	7	nsubj	_	_
6	Romney	Romney	PROPN	_	_	5	flat:name	_	_
7	ligger	ligge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
8	an	an	ADV	_	_	7	advmod	_	_
9	til	til	SCONJ	_	_	11	mark	_	_
10	å	å	PART	_	_	11	mark	_	_
11	vinne	vinne	VERB	_	VerbForm=Inf	7	advcl	_	_
12	de	de	DET	_	Number=Plur|PronType=Dem	14	det	_	_
13	11	11	NUM	_	Number=Plur|NumType=Card	14	nummod	_	_
14	valgmannstemmene	valgmannstemme	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	11	obj	_	_
15	i	i	ADP	_	_	16	case	_	_
16	Arizona	Arizona	PROPN	_	_	14	nmod	_	_
17	,	$,	PUNCT	_	_	18	punct	_	_
18	the	the	X	_	_	16	appos	_	_
19	Grand	Grand	PROPN	_	_	18	flat:foreign	_	_
20	Canyon	Canyon	PROPN	_	_	18	flat:foreign	_	_
21	state	state	X	_	_	18	flat:foreign	_	_
22	.	$.	PUNCT	_	_	2	punct	_	_

~~~


