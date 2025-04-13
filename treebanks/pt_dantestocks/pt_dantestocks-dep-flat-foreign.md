---
layout: base
title:  'Statistics of flat:foreign in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pt_dantestocks-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_dantestocks-dep-flat-name.html">flat:name</a></tt>.

34 nodes (0%) are attached to their parents as `flat:foreign`.

34 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17647058823529.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pt_dantestocks-pos-X.html">X</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (34; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:foreign	color:blue
1	RT	RT	X	_	_	4	parataxis	_	_
2	@BrazilFinance	@BrazilFinance	PROPN	_	_	1	nmod	_	SpaceAfter=No
3	:	:	PUNCT	_	_	1	punct	_	_
4	PETR4	PETR4	PROPN	_	_	0	root	_	_
5	flying	flying	X	_	Foreign=Yes	4	nmod	_	_
6	like	like	X	_	Foreign=Yes	5	flat:foreign	_	_
7	an	an	X	_	Foreign=Yes	5	flat:foreign	_	_
8	eagle	eagle	X	_	Foreign=Yes	5	flat:foreign	_	SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	_
10	p	por	ADP	_	_	11	case	_	FullForm=por|SpaceAfter=No
11	q	que	PRON	_	PronType=Int	12	obl	_	FullForm=que
12	será	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	parataxis	_	_
13	não	não	ADV	_	_	14	advmod	_	_
14	é	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	discourse	_	_
15	?	?	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


