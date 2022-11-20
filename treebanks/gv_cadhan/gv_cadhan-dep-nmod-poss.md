---
layout: base
title:  'Statistics of nmod:poss in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="gv_cadhan-dep-nmod.html">nmod</a></tt>.

576 nodes (3%) are attached to their parents as `nmod:poss`.

576 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02430555555556.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-DET.html">DET</a></tt> (564; 98% instances), <tt><a href="gv_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gv_cadhan-pos-DET.html">DET</a></tt> (9; 2% instances), <tt><a href="gv_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="gv_cadhan-pos-DET.html">DET</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	T'	bee	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	ny	ny	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	nmod:poss	_	_
4	ghooinney	dooinney	NOUN	_	Form=Len	1	xcomp:pred	_	_
5	lieh-hooillagh	lieh-hooillagh	ADJ	_	_	4	amod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Glen	glen	VERB	_	Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	yn	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	mergys	mergys	NOUN	_	_	1	obj	_	_
4	jeh	jeh	ADP	_	_	6	case	_	_
5	dty	dty	DET	_	Number=Sing|Person=2|Poss=Yes	6	nmod:poss	_	_
6	Rangish	Frangish	PROPN	_	Form=Len	1	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Hayrn	tayrn	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	eh	eh	PRON	_	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	ooashley	ooashley	NOUN	_	_	1	obj	_	_
4	er	er	ADP	_	_	6	case	_	_
5	e	e	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	6	nmod:poss	_	_
6	hene	hene	PRON	_	Reflex=Yes	1	obl	_	_
7	ec	ec	ADP	_	_	9	case	_	_
8	y	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	scoill	scoill	NOUN	_	_	1	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


