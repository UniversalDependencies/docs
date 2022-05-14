---
layout: base
title:  'Statistics of nmod:gsubj in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `nmod:gsubj`

This relation is a language-specific subtype of <tt><a href="fi_tdt-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi_tdt-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_tdt-dep-nmod-poss.html">nmod:poss</a></tt>.

553 nodes (0%) are attached to their parents as `nmod:gsubj`.

553 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47016274864376.

The following 7 pairs of parts of speech are connected with `nmod:gsubj`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (408; 74% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (90; 16% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (51; 9% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:gsubj	color:blue
1	Myös	myös	ADV	Adv	_	4	advmod	4:advmod	_
2	tapahtuman	tapahtuma	NOUN	N	Case=Gen|Number=Sing	4	nmod:gsubj	4:nmod:gsubj	_
3	pitkäaikainen	pitkä#aikainen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	4	amod	4:amod	_
4	vaikutus	vaikutus	NOUN	N	Case=Nom|Number=Sing	5	nsubj	5:nsubj	_
5	nousi	nousta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	esille	esille	ADV	Adv	_	5	advmod	5:advmod	SpaceAfter=No
7	.	.	PUNCT	Punct	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:gsubj	color:blue
1	Teollisuustuotteet	teollisuus#tuote	NOUN	N	Case=Nom|Number=Plur	2	nsubj	2:nsubj	_
2	muodostavat	muodostaa	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	suurimman	suuri	ADJ	A	Case=Gen|Degree=Sup|Number=Sing	4	amod	4:amod	_
4	osan	osa	NOUN	N	Case=Gen|Number=Sing	2	obj	2:obj	_
5	EU:	EU	PROPN	N	Abbr=Yes|Case=Gen|Number=Sing|Typo=Yes	7	nmod:gsubj	7:nmod:gsubj	_
6	n	_	X	N	_	5	goeswith	5:goeswith	_
7	viennistä	vienti	NOUN	N	Case=Ela|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
8	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:gsubj	color:blue
1	Hänen	hän	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod:gsubj	3:nmod:gsubj	_
2	rakkain	rakas	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	3	amod	3:amod	_
3	harrastuksensa	harrastus	NOUN	N	Case=Gen|Number=Sing|Person[psor]=3	5	nsubj:cop	5:nsubj:cop	_
4	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	jääkiekko	jää#kiekko	NOUN	N	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Punct	_	5	punct	5:punct	_

~~~


