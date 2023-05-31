---
layout: base
title:  'Statistics of appos in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `appos`

This relation is universal.

19 nodes (1%) are attached to their parents as `appos`.

19 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.26315789473684.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (6; 32% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (5; 26% instances), <tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	Pelin	peli	NOUN	NOUN	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	vetäjänä	vetäjä	NOUN	NOUN	Case=Ess|Number=Sing	3	nmod	_	_
3	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	Kalevala	Kalevala	PROPN	PROPN	Case=Nom|Number=Sing	7	nmod:poss	_	PropnType=Al
5	Open	open	X	X	_	4	flat:name	_	_
6	-projektin	-projektu	NOUN	NOUN	Case=Gen|Number=Sing	4	flat:name	_	_
7	johtaja	johtaja	NOUN	NOUN	Case=Nom|Number=Sing	3	nsubj	_	_
8	Irina	Irina	PROPN	PROPN	Case=Nom|Number=Sing	7	appos	_	PropnType=Ant|Gender=Female
9	Rinkevič	Rinkevič	PROPN	PROPN	Case=Nom|Number=Sing	8	flat:name	_	PropnType=Cog|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 appos	color:blue
1	Muan	mua	NOUN	NOUN	Case=Gen|Number=Sing	0	root	_	_
2	tunti	tunti	NOUN	NOUN	Case=Nom|Number=Sing	1	flat:name	_	_
3	-aktijolla	-aktijo	NOUN	NOUN	Case=Ade|Number=Sing	1	compound	_	_
4	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	_
5	virallini	virallini	ADJ	ADJ	Case=Nom|Number=Sing	6	amod	_	_
6	saitti	saitti	NOUN	NOUN	Case=Nom|Number=Sing	3	nsubj:cop	_	_
7	60.wwf.ru/	60.wwf.ru/	NOUN	NOUN	Case=Nom|Number=Sing	6	appos	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	mistä	mi	PRON	PRON	Case=Ine|Number=Sing	12	nmod	_	PronType=Interr
10	voit	voija	AUX	AUX	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
11	tarkemmin	tarkemmin	ADV	ADV	_	12	advmod	_	_
12	lukie	lukie	VERB	VERB	VerbForm=Inf	10	xcomp	_	_
13	šiitä	še	PRON	PRON	Case=Ela|Number=Sing|PronType=Dem	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 appos	color:blue
1	Yheššä	yksi	NUM	NUM	Case=Ine|Number=Sing	2	nummod	_	_
2	projektissa	projekta	NOUN	NOUN	Case=Ine|Number=Plur	3	obl	_	_
3	meilä	myö	PRON	PRON	Case=Ade|Number=Plur|Person=1|PronType=Prs	0	root	_	_
4	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop:own	_	_
5	šemmosie	semmoni	ADJ	ADJ	Case=Par|Number=Plur	6	amod	_	_
6	lahjoja	lahja	NOUN	NOUN	Case=Par|Number=Plur	3	nsubj:cop	_	_
7	ihmisillä	ihmini	NOUN	NOUN	Case=Ade|Number=Plur	3	appos	_	_
8	–	–	PUNCT	PUNCT	_	11	punct	_	_
9	matat	matka	NOUN	NOUN	Case=Nom|Number=Plur	11	nmod	_	_
10	Kižin	Kiži	PROPN	PROPN	Case=Gen|Number=Sing	11	nmod:poss	_	PropnType=Top
11	šuarella	šuari	NOUN	NOUN	Case=Ade|Number=Sing	3	parataxis	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No

~~~


