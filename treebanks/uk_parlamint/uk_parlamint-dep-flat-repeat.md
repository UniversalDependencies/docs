---
layout: base
title:  'Statistics of flat:repeat in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `flat:repeat`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-flat.html">flat</a></tt>.
There are also 4 other language-specific subtypes of `flat`: <tt><a href="uk_parlamint-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk_parlamint-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>, <tt><a href="uk_parlamint-dep-flat-title.html">flat:title</a></tt>.

1 nodes (0%) are attached to their parents as `flat:repeat`.

1 instances of `flat:repeat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.

The following 1 pairs of parts of speech are connected with `flat:repeat`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 flat:repeat	color:blue
1	Будь	бути	VERB	VERB	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	ласка	ласка	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	Давид	Давид	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	1	vocative	_	_
5	Арахамія	Арахамія	PROPN	PROPN	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	4	flat:name	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	"	"	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
8	Слуга	слуга	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Fem,Masc|Number=Sing	4	nmod	_	_
9	народу	народ	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
10	"	"	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	12	punct	_	_
12	будь	бути	VERB	VERB	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	1	flat:repeat	_	_
13	ласка	ласка	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	12	fixed	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


