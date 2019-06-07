---
layout: base
title:  'Statistics of csubj in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fi_pud-dep-csubj-cop.html">csubj:cop</a></tt>.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5.

The following 1 pairs of parts of speech are connected with `csubj`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	Valaan	vala	NOUN	_	Case=Ill|Number=Sing	2	obl	2:obl	_
2	kuuluu	kuulua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	6:punct	_
4	että	että	SCONJ	_	_	6	mark	6:mark	_
5	lainsäätäjät	lain#säätäjä	NOUN	_	Case=Nom|Derivation=Ja|Number=Plur	6	nsubj	6:nsubj	_
6	vannovat	vannoa	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	2:csubj	_
7	uskollisuutta	uskollisuus	NOUN	_	Case=Par|Derivation=Inen,Vs|Number=Sing	6	obj	6:obj	_
8	Hong	Hong	PROPN	_	Case=Nom|Number=Sing	7	nmod	7:nmod	_
9	Kongille	Kong	PROPN	_	Case=All|Number=Sing	8	flat:name	8:flat:name	_
10	osana	osa	NOUN	_	Case=Ess|Number=Sing	8	nmod	8:nmod	_
11	Kiinan	Kiina	PROPN	_	Case=Gen|Number=Sing	12	nmod:poss	12:nmod:poss	_
12	kansantasavaltaa	kansan#tasa#valta	NOUN	_	Case=Par|Number=Sing	10	nmod	10:nmod	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


