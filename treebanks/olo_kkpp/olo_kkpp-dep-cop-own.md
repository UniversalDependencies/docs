---
layout: base
title:  'Statistics of cop:own in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `cop:own`

This relation is a language-specific subtype of <tt><a href="olo_kkpp-dep-cop.html">cop</a></tt>.

3 nodes (0%) are attached to their parents as `cop:own`.

2 instances of `cop:own` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `cop:own`: <tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt> (2; 67% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop:own	color:blue
1	Heil	Hyö	PRON	PRON	Case=All|Number=Plur|Person=3|PronType=Prs	0	root	_	_
2	ei	ei	AUX	AUX	Mood=Ind|Number=Sing|Person=3	1	aux:neg	_	_
3	ole	olla	AUX	AUX	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	_
4	ovvostustu	ovvostus	NOUN	NOUN	Case=Par|Number=Sing	1	nsubj:cop	_	_
5	sit	sit	PRON	PRON	Case=Par|Number=Sing	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	ken	ken	PRON	PRON	Case=Nom|Number=Sing	9	nsubj	_	PronType=Interr
8	sen	se	PRON	PRON	Case=Gen|Number=Sing|PronType=Dem	9	obj	_	_
9	kirjutti	kirjuttua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 cop:own	color:blue
1	Sit	sit	ADV	ADV	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	–	–	PUNCT	PUNCT	_	4	punct	_	_
4	sanoo	sanuo	VERB	X	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	11	punct	_	_
6	–	–	PUNCT	PUNCT	_	11	punct	_	_
7	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop:own	_	_
8	minul	minä	PRON	PRON	Case=Ade|Number=Sing|Person=1|PronType=Prs	11	nsubj:cop	_	_
9	orazen	oraine	NOUN	NOUN	Case=Gen|Number=Sing	11	obl	_	_
10	päs	piäs	ADP	X	_	9	case	_	_
11	ildaine	ildaine	NOUN	NOUN	Case=Nom|Number=Sing	4	parataxis	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	_
13	minul	minä	PRON	PRON	Case=Ade|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
14	pidää	pidiä	AUX	AUX	VerbForm=Inf	15	aux	_	_
15	lähtie	lähtie	VERB	VERB	VerbForm=Inf	11	parataxis	_	_
16	ildastu	ildaine	NOUN	NOUN	Case=Par|Number=Sing	17	obj	_	_
17	saamah	suaha	VERB	VERB	Case=Ill|VerbForm=Inf	15	ccomp	_	SpaceAfter=No|Deriv=Ma
18	"	"	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No

~~~


