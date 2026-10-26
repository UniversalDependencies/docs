---
layout: base
title:  'Statistics of flat:foreign in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fi_pud-dep-flat-name.html">flat:name</a></tt>.

2 nodes (0%) are attached to their parents as `flat:foreign`.

2 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fi_pud-pos-X.html">X</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:foreign	color:blue
1	Maasota	maa#sota	NOUN	_	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	muuttui	muuttua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	ensimmäisen	ensimmäinen	ADJ	_	Case=Gen|Derivation=Inen|Number=Sing|NumType=Ord	4	amod	4:amod	_
4	maailmansodan	maailman#sota	NOUN	_	Case=Gen|Number=Sing	6	nmod:poss	6:nmod:poss	_
5	liikkumattomista	liikkumaton	ADJ	_	Case=Ela|Degree=Pos|Derivation=Ton|Number=Plur	6	amod	6:amod	_
6	etulinjoista	etu#linja	NOUN	_	Case=Ela|Number=Plur	2	obl	2:obl	_
7	lisääntyneeseen	lisääntyä	VERB	_	Case=Ill|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	8	acl	8:acl	_
8	liikkuvuuteen	liikkuvuus	NOUN	_	Case=Ill|Derivation=Vs|Number=Sing	2	obl	2:obl	_
9	ja	ja	CCONJ	_	_	12	cc	12:cc	_
10	combined	combined	X	_	Foreign=Yes	12	compound	12:compound	OrigLang=en
11	arms	arms	X	_	Foreign=Yes	10	flat:foreign	10:flat:foreign	OrigLang=en
12	-taktiikkaan	taktiikka	NOUN	_	Case=Ill|Number=Sing	8	conj	8:conj	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


