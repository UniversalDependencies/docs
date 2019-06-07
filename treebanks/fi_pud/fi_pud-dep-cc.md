---
layout: base
title:  'Statistics of cc in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="fi_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

585 nodes (4%) are attached to their parents as `cc`.

584 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09401709401709.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (231; 39% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (217; 37% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (72; 12% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (33; 6% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (12; 2% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (10; 2% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Suunnitelma	suunnitelma	NOUN	_	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	tuottaa	tuottaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	rahaa	raha	NOUN	_	Case=Par|Number=Sing	2	obj	2:obj	_
4	sponsoroinnin	sponsorointi	NOUN	_	Case=Gen|Number=Sing	2	obl	2:obl	_
5	ja	ja	CCONJ	_	_	6	cc	6:cc	_
6	mainonnan	mainonta	NOUN	_	Case=Gen|Number=Sing	4	conj	4:conj	_
7	kautta	kautta	ADP	_	AdpType=Post	4	case	4:case	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Durán	Durán	PROPN	_	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	toimii	toimia	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	edustajana	edustaja	NOUN	_	Case=Ess|Derivation=Ja|Number=Sing	2	obl	2:obl	_
4	ja	ja	CCONJ	_	_	5	cc	5:cc|6.1:cc	_
5	Ángel	Ángel	PROPN	_	Case=Nom|Number=Sing	2	conj	2:conj|6.1:nsubj	_
6	Pintado	Pintado	PROPN	_	Case=Nom|Number=Sing	5	flat:name	5:flat:name	_
7	taloudenhoitajana	talouden#hoitaja	NOUN	_	Case=Ess|Derivation=Ja|Number=Sing	5	orphan	6.1:obl	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


