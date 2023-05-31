---
layout: base
title:  'Statistics of orphan in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

3 instances of `orphan` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 orphan	color:blue
1	Durán	Durán	PROPN	_	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	toimii	toimia	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	edustajana	edustaja	NOUN	_	Case=Ess|Derivation=Ja|Number=Sing	2	obl	2:obl	_
4	ja	ja	CCONJ	_	_	5	cc	5:cc|6.1:cc	_
5	Ángel	Ángel	PROPN	_	Case=Nom|Number=Sing	2	conj	2:conj|6.1:nsubj	_
6	Pintado	Pintado	PROPN	_	Case=Nom|Number=Sing	5	flat:name	5:flat:name	_
7	taloudenhoitajana	talouden#hoitaja	NOUN	_	Case=Ess|Derivation=Ja|Number=Sing	5	orphan	6.1:obl	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 orphan	color:blue
1	Kaukasian	Kaukasia	PROPN	_	Case=Gen|Number=Sing	2	nmod:poss	2:nmod:poss	_
2	pohjoisosa	pohjois#osa	NOUN	_	Case=Nom|Number=Sing	3	obj	3:obj	_
3	tunnetaan	tuntea	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	Pohjois-Kaukasiana	Pohjois-Kaukasia	PROPN	_	Case=Ess|Number=Sing	3	obl	3:obl	_
5	ja	ja	CCONJ	_	_	6	cc	6:cc|6.1:cc	_
6	eteläosa	etelä#osa	NOUN	_	Case=Nom|Number=Sing	3	conj	3:conj|6.1:obj	_
7	Etelä-Kaukasiana	Etelä-Kaukasia	PROPN	_	Case=Ess|Number=Sing	6	orphan	6.1:obl	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 orphan	color:blue
1	Ensin	ensin	ADV	_	_	4	advmod	4:advmod	_
2	yksi	yksi	PRON	_	Case=Nom|Number=Sing|PronType=Ind	4	nsubj	4:nsubj	_
3	jesidinaisista	jesidi#nainen	NOUN	_	Case=Ela|Number=Plur	2	nmod	2:nmod	_
4	alkoi	alkaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	itkeä	itkeä	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	xcomp	4:xcomp	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	9:punct|11.1:punct	_
7	sen	se	PRON	_	Case=Gen|Number=Sing|PronType=Dem	9	orphan	11.1:obl	_
8	jälkeen	jälkeen	ADP	_	AdpType=Post	7	case	7:case	_
9	yksi	yksi	NUM	_	Case=Nom|Number=Sing|NumType=Card	4	conj	4:conj|11.1:nsubj	_
10	hänen	hän	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	11	nmod:poss	11:nmod:poss	_
11	ystävistään	ystävä	NOUN	_	Case=Ela|Number=Plur|Person[psor]=3	9	nmod	9:nmod	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


