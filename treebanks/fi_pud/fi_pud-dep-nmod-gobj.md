---
layout: base
title:  'Statistics of nmod:gobj in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `nmod:gobj`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_pud-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="fi_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

101 nodes (1%) are attached to their parents as `nmod:gobj`.

101 instances of `nmod:gobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31683168316832.

The following 4 pairs of parts of speech are connected with `nmod:gobj`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (91; 90% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (7; 7% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:gobj	color:blue
1	Häntä	hän	PRON	_	Case=Par|Number=Sing|Person=3|PronType=Prs	2	obj	2:obj	_
2	syytetään	syyttää	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	myös	myös	ADV	_	_	7	advmod	7:advmod	_
4	kaksivuotiaan	kaksivuotias	ADJ	_	Case=Gen|Degree=Pos|Number=Sing	5	amod	5:amod	_
5	tyttärensä	tytär	NOUN	_	Case=Gen|Number=Sing|Person[psor]=3	6	nmod:gobj	6:nmod:gobj	_
6	tapon	tappo	NOUN	_	Case=Gen|Number=Sing	7	nmod:gobj	7:nmod:gobj	_
7	yrityksestä	yritys	NOUN	_	Case=Ela|Number=Sing	2	obl	2:obl	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:gobj	color:blue
1	Heillä	hän	PRON	_	Case=Ade|Number=Plur|Person=3|PronType=Prs	0	root	0:root	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	1:cop:own	_
3	yksi	yksi	NUM	_	Case=Nom|Number=Sing|NumType=Card	4	nummod	4:nummod	_
4	yritys	yritys	NOUN	_	Case=Nom|Number=Sing	1	nsubj:cop	1:nsubj:cop	_
5	pelastua	pelastua	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	acl	4:acl	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	8:punct	_
7	Englannin	Englanti	PROPN	_	Case=Gen|Number=Sing	8	nmod:gobj	8:nmod:gobj	_
8	voittaminen	voittaminen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing	4	appos	4:appos	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 nmod:gobj	color:blue
1	Hitchcockin	Hitchcock	PROPN	_	Case=Gen|Number=Sing	3	nmod:poss	3:nmod:poss	_
2	heikentyvä	heikentyä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	terveys	terveys	NOUN	_	Case=Nom|Number=Sing	4	nsubj	4:nsubj	_
4	vähensi	vähentää	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	hänen	hän	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	6:nmod:poss	_
6	tuotteliaisuuttaan	tuotteliaisuus	NOUN	_	Case=Par|Derivation=Vs|Number=Sing|Person[psor]=3	4	obj	4:obj	_
7	hänen	hän	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	11	nmod:gobj	11:nmod:gobj	_
8	elämänsä	elämä	NOUN	_	Case=Gen|Number=Sing|Person[psor]=3	11	nmod:poss	11:nmod:poss	_
9	kahden	kaksi	NUM	_	Case=Gen|Number=Sing|NumType=Card	11	nummod	11:nummod	_
10	viimeisen	viimeinen	ADJ	_	Case=Gen|Degree=Pos|Derivation=Inen|Number=Sing	11	amod	11:amod	_
11	vuosikymmenen	vuosikymmen	NOUN	_	Case=Gen|Number=Sing	12	nmod:poss	12:nmod:poss	_
12	aikana	aika	NOUN	_	Case=Ess|Number=Sing	4	obl	4:obl	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


