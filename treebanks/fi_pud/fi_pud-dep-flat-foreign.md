---
layout: base
title:  'Statistics of flat:foreign in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fi_pud-dep-flat-name.html">flat:name</a></tt>.

3 nodes (0%) are attached to their parents as `flat:foreign`.

3 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fi_pud-pos-X.html">X</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (2; 67% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 33% instances).


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
10	combined	combined	X	_	Foreign=Yes	12	compound:nn	12:compound:nn	_
11	arms	arms	X	_	Foreign=Yes	10	flat:foreign	10:flat:foreign	_
12	-taktiikkaan	taktiikka	NOUN	_	Case=Ill|Number=Sing	8	conj	8:conj	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:foreign	color:blue
1	Really	Really	PROPN	_	Case=Nom|Number=Sing	5	obj	5:obj	_
2	Really	Really	PROPN	_	Case=Nom|Number=Sing	1	flat:name	1:flat:name	_
3	Love	Love	PROPN	_	Case=Nom|Number=Sing	1	flat:name	1:flat:name	_
4	You	You	PROPN	_	Case=Nom|Number=Sing	1	flat:name	1:flat:name	_
5	julkaistiin	julkaista	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
6	elokuussa	elokuu	NOUN	_	Case=Ine|Number=Sing	5	obl	5:obl	_
7	ja	ja	CCONJ	_	_	9	cc	9:cc	_
8	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	9	nsubj	9:nsubj	_
9	pääsi	päästä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	5:conj	_
10	top	top	NOUN	_	Case=Nom|Number=Sing	9	obl	9:obl	_
11	50:een	50	NUM	_	Case=Ill|Number=Sing|NumType=Card	10	flat:foreign	10:flat:foreign	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	5:punct	_
13	Siihen	se	PRON	_	Case=Ill|Number=Sing|PronType=Dem	14	obl	14:obl	_
14	kuuluva	kuulua	VERB	_	Case=Nom|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	15	acl	15:acl	_
15	single	single	NOUN	_	Case=Nom|Number=Sing	20	obj	20:obj	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	17:punct	_
17	Shaky	Shaky	PROPN	_	Case=Nom|Number=Sing	15	appos	15:appos	_
18	Ground	Ground	PROPN	_	Case=Nom|Number=Sing	17	flat:name	17:flat:name	SpaceAfter=No
19	,	,	PUNCT	_	_	17	punct	17:punct	_
20	julkaistiin	julkaista	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	5	parataxis	5:parataxis	_
21	syyskuussa	syyskuu	NOUN	_	Case=Ine|Number=Sing	20	obl	20:obl	SpaceAfter=No
22	,	,	PUNCT	_	_	27	punct	27:punct	_
23	mutta	mutta	CCONJ	_	_	27	cc	27:cc	_
24	Geyer	Geyer	PROPN	_	Case=Nom|Number=Sing	27	nsubj:cop	27:nsubj:cop	_
25	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	27	cop	27:cop	_
26	jo	jo	ADV	_	_	27	advmod	27:advmod	_
27	Yhdysvalloissa	Yhdysvallat	PROPN	_	Case=Ine|Number=Plur	20	conj	20:conj	SpaceAfter=No
28	.	.	PUNCT	_	_	20	punct	20:punct	_

~~~


