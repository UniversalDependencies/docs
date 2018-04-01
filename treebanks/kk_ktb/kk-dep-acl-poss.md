---
layout: base
title:  'Statistics of acl:poss in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `acl:poss`

This relation is a language-specific subtype of <tt><a href="kk-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="kk-dep-acl-relcl.html">acl:relcl</a></tt>.

1 nodes (0%) are attached to their parents as `acl:poss`.

1 instances of `acl:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `acl:poss`: <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl:poss	color:blue
1	Сенат	сенат	NOUN	n	Case=Nom	2	nmod:poss	_	_
2	депутаттарын	депутат	NOUN	n	Case=Acc|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	3	obj	_	_
3	сайлау	сайла	VERB	v	Case=Nom|VerbForm=Ger	4	acl:poss	_	_
4	кезінде	кез	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	7	nmod	_	_
5	таңдаушылардың	таңдаушы	NOUN	n	Case=Gen|Number=Plur	6	nmod:poss	_	_
6	тізімдері	тізім	NOUN	n	Case=Nom|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
7	жасалады	жаса	VERB	v	Mood=Ind|Number=Plur|Person=3|Tense=Aor|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


