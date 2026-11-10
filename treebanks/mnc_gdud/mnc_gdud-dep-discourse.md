---
layout: base
title:  'Statistics of discourse in UD_Manchu-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Manchu-GDUD: Relations: `discourse`

This relation is universal.

8 nodes (2%) are attached to their parents as `discourse`.

6 instances of `discourse` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mnc_gdud-pos-PART.html">PART</a></tt> (6; 75% instances), <tt><a href="mnc_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="mnc_gdud-pos-PART.html">PART</a></tt> (1; 13% instances), <tt><a href="mnc_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mnc_gdud-pos-PART.html">PART</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	ajige	ajige	ADJ	_	Degree=Pos	2	amod	_	_
2	orho	orho	NOUN	_	_	4	nmod:poss	_	_
3	i	i	PART	_	Case=Gen	2	case	_	_
4	eme	eme	NOUN	_	_	6	nsubj	_	_
5	oci	oci	PART	_	_	4	discourse	_	_
6	amba	amba	ADJ	_	Degree=Pos	7	amod	_	_
7	na	na	NOUN	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	be	be	PRON	_	Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
2	oci	oci	PART	_	_	1	discourse	_	_
3	mafa	mafa	NOUN	_	_	4	nmod:poss	_	_
4	gurun	gurun	NOUN	_	Case=Gen	5	nmod:poss	_	_
5	ilha	ilha	NOUN	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	gucu	gucu	NOUN	_	_	5	vocative	_	_
2	te	te	PART	_	_	5	discourse	_	_
3	udu	udu	PRON	_	PronType=Int	4	det	_	_
4	erin	erin	NOUN	_	_	5	nsubj	_	_
5	oho	oho	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


