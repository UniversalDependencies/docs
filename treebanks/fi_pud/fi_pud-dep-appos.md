---
layout: base
title:  'Statistics of appos in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `appos`

This relation is universal.

106 nodes (1%) are attached to their parents as `appos`.

106 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66981132075472.

The following 13 pairs of parts of speech are connected with `appos`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (58; 55% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (24; 23% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (8; 8% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (6; 6% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-X.html">X</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	Uusia	uusi	ADJ	_	Case=Par|Degree=Pos|Number=Plur	2	amod	2:amod	_
2	jaksoja	jakso	NOUN	_	Case=Par|Number=Plur	3	obj	3:obj	_
3	seuraa	seurata	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	jälkishow	jälki#show	NOUN	_	Case=Nom|Number=Sing	3	nsubj	3:nsubj	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	6:punct	_
6	The	The	PROPN	_	Case=Nom|Number=Sing	4	appos	4:appos	_
7	Talking	Talking	PROPN	_	Case=Nom|Number=Sing	6	flat:name	6:flat:name	_
8	Dead	Dead	PROPN	_	Case=Nom|Number=Sing	6	flat:name	6:flat:name	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 appos	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	Ja	ja	CCONJ	_	_	4	cc	4:cc	_
2	totta	totta	ADV	_	_	4	advmod	4:advmod	_
3	kai	kai	ADV	_	_	2	fixed	2:fixed	_
4	on	olla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	Bob	Bob	PROPN	_	Case=Nom|Number=Sing	4	nsubj	4:nsubj	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	9:punct	_
7	viihteen	viihde	NOUN	_	Case=Gen|Number=Sing	9	nmod:poss	9:nmod:poss	_
8	loputon	loputon	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Sing	9	amod	9:amod	_
9	lähde	lähde	NOUN	_	Case=Nom|Number=Sing	5	appos	5:appos	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


