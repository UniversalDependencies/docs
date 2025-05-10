---
layout: base
title:  'Statistics of compound in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="fi_pud-dep-compound-nn.html">compound:nn</a></tt>, <tt><a href="fi_pud-dep-compound-prt.html">compound:prt</a></tt>.

25 nodes (0%) are attached to their parents as `compound`.

25 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.64.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (22; 88% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (3; 12% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 compound	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	_	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	2	amod	2:amod	_
2	kuningas	kuningas	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	4:nsubj:cop	_
3	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	Mojmír	Mojmír	PROPN	_	Case=Nom|Number=Sing	0	root	0:root	_
5	I	I	ADJ	_	NumType=Ord	4	flat:name	4:flat:name	_
6	(	(	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	hallitsi	hallita	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	4:parataxis	_
8	830	830	NUM	_	NumType=Card	10	compound	10:compound	SpaceAfter=No
9	-	-	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
10	846	846	NUM	_	NumType=Card	7	obl	7:obl	SpaceAfter=No
11	)	)	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 compound	color:blue
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


