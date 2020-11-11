---
layout: base
title:  'Statistics of nmod:gsubj in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `nmod:gsubj`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_ood-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_ood-dep-nmod-poss.html">nmod:poss</a></tt>.

26 nodes (0%) are attached to their parents as `nmod:gsubj`.

26 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15384615384615.

The following 3 pairs of parts of speech are connected with `nmod:gsubj`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (20; 77% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (4; 15% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gsubj	color:blue
1	Kertoivat	kertoa	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	_
3	että	että	SCONJ	_	_	7	mark	_	_
4	jalkojen	jalka	NOUN	_	Case=Gen|Number=Plur	5	nmod:gsubj	_	_
5	liikkuminen	liikkuminen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing	7	nsubj:cop	_	_
6	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	tahatonta	tahaton	ADJ	_	Case=Par|Degree=Pos|Number=Sing	1	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gsubj	color:blue
1	Valavuori	Valavuori	PROPN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	purkanut	purkaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	tuntojaan	tunto	NOUN	_	Case=Par|Number=Plur|Person[psor]=3	2	obj	_	_
4	#HCTPS:n	#HCTPS	PROPN	_	Case=Gen|Number=Sing	5	nmod:gsubj	_	Note=embedded
5	putoamisesta	putoaminen	NOUN	_	Case=Ela|Derivation=Minen|Number=Sing	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:gsubj	color:blue
1	Rehtorille	rehtori	NOUN	_	Case=All|Number=Sing	4	obl	_	_
2	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	4	aux	_	_
3	helppo	helppo	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	paikka	paikka	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	mutta	mutta	CCONJ	_	_	10	cc	_	_
7	erityisesti	erityisesti	ADV	_	Derivation=Sti	10	advmod	_	_
8	heidän	hän	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	9	nmod:gsubj	_	_
9	toiminta	toiminta	NOUN	_	Case=Nom|Number=Sing	10	nsubj	_	_
10	kiinnostaisi	kiinnostaa	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_
12	#esimerkki	#esimerkki	NOUN	_	Case=Nom|Number=Sing	4	discourse	_	_
13	#vastuu	#vastuu	NOUN	_	Case=Nom|Number=Sing	4	discourse	_	SpacesAfter=\n\n

~~~


