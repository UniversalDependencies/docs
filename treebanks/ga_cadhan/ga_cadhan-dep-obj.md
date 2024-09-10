---
layout: base
title:  'Statistics of obj in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `obj`

This relation is universal.

203 nodes (4%) are attached to their parents as `obj`.

162 instances of `obj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33990147783251.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (101; 50% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (45; 22% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (27; 13% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (11; 5% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (11; 5% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (6; 3% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Nior	níor	PART	_	PartType=Vb|Polarity=Neg|Tense=Past	2	advmod	_	_
2	chualas	clois	VERB	_	Form=Len|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	0	root	_	_
3	guth	guth	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	_
4	na	an	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	cuaiche	cuach	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
6	fós	fós	ADV	_	_	2	advmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj	color:blue
1	Gach	gach	DET	_	Definite=Def	3	det	_	_
2	uile	uile	DET	_	PronType=Ind	3	det	_	_
3	dhuine	duine	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
4	ag	ag	ADP	_	_	5	case	_	_
5	cur	cur	NOUN	_	VerbForm=Vnoun	3	acl	_	_
6	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	7	nmod:poss	_	_
7	ladair	ladar	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	5	obj	_	_
8	fhéin	féin	PRON	_	Form=Len|Reflex=Yes	7	nmod	_	_
9	isteach	isteach	ADV	_	_	5	advmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
1	Inneosad	inis	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Fut	0	root	_	_
2	féin	féin	PRON	_	Reflex=Yes	1	nmod	_	_
3	sin	sin	PRON	_	PronType=Dem	1	obj	_	_
4	duit	do	ADP	_	Number=Sing|Person=2	1	obl:prep	_	SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


