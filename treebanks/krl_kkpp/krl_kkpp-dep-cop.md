---
layout: base
title:  'Statistics of cop in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `cop`

This relation is universal.
There are 1 language-specific subtypes of `cop`: <tt><a href="krl_kkpp-dep-cop-own.html">cop:own</a></tt>.

48 nodes (2%) are attached to their parents as `cop`.

37 instances of `cop` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (27; 56% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (14; 29% instances), <tt><a href="krl_kkpp-pos-ADV.html">ADV</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (2; 4% instances), <tt><a href="krl_kkpp-pos-NUM.html">NUM</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (2; 4% instances), <tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (2; 4% instances), <tt><a href="krl_kkpp-pos-X.html">X</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	Oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
2	kirkaš	kirkaš	ADJ	ADJ	Case=Nom|Number=Sing	3	amod	_	_
3	huomeneš	huomeneš	NOUN	NOUN	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Hyö	hyö	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	kerättih	kerätä	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ahkerašti	ahkerašti	ADV	ADV	_	2	advmod	_	_
4	ta	ta	CCONJ	CCONJ	_	5	cc	_	_
5	ruttoh	ruttoh	ADV	ADV	_	3	conj	_	_
6	aštiet	aštie	NOUN	NOUN	Case=Nom|Number=Plur	8	nsubj:cop	_	_
7	oltih	olla	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
8	täyvet	täyši	ADJ	ADJ	Case=Nom|Number=Plur	2	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 cop	color:blue
1	Venäjällä	Venäjä	PROPN	PROPN	Case=Ade|Number=Sing	5	obl	_	PropnType=Top
2	Muan	mua	NOUN	NOUN	Case=Gen|Number=Sing	3	nmod:poss	_	_
3	tunti	tunti	NOUN	NOUN	Case=Nom|Number=Sing	4	compound	_	_
4	-aktijoh	-aktijo	NOUN	NOUN	Case=Ill|Number=Sing	5	obl	_	_
5	yhty	yhtyö	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	150	150	NUM	NUM	Case=Nom|Number=Sing|NumType=Card	7	nummod	_	_
7	kaupunkie	kaupunki	NOUN	NOUN	Case=Par|Number=Sing	5	nsubj	_	_
8	ta	ta	CCONJ	CCONJ	_	9	cc	_	_
9	še	še	PRON	PRON	Case=Nom|Number=Sing|PronType=Dem	13	nsubj:cop	_	_
10	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
11	puolitoista	puolitoista	NUM	NUM	_	12	nummod	_	_
12	kertua	kerta	NOUN	NOUN	Case=Par|Number=Sing	13	obl	_	_
13	enemmän	enemmän	ADV	ADV	_	5	conj	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	17	punct	_	_
15	mitä	mi	PRON	PRON	Case=Par|Number=Sing	17	nmod	_	PronType=Interr
16	viime	viime	ADV	ADV	_	17	advmod	_	_
17	vuotena	vuoši	NOUN	NOUN	Case=Ess|Number=Sing	13	advcl	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


