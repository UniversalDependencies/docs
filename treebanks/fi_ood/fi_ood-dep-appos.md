---
layout: base
title:  'Statistics of appos in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `appos`

This relation is universal.

88 nodes (0%) are attached to their parents as `appos`.

88 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.72727272727273.

The following 22 pairs of parts of speech are connected with `appos`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (33; 38% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (22; 25% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (5; 6% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (3; 3% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 appos	color:blue
1	Liikuttelee	liikutella	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	hieman	hieman	ADV	_	_	1	advmod	_	_
3	raajojaan	raaja	NOUN	_	Case=Par|Number=Plur|Person[psor]=3	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	varsinkin	varsinkin	ADV	_	_	6	advmod	_	_
6	oikeaa	oikea	ADJ	_	Case=Par|Degree=Pos|Number=Sing	7	amod	_	_
7	jalkaa	jalka	NOUN	_	Case=Par|Number=Sing	3	appos	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Poika	poika	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
2	(	(	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	Tomi	Tomi	PROPN	_	Case=Nom|Number=Sing	1	appos	_	SpaceAfter=No
4	)	)	PUNCT	_	_	3	punct	_	_
5	soittanut	soittaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	SENSE=0
6	-	-	PUNCT	_	_	7	punct	_	_
7	tulee	tulla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SENSE=0
8	huomenna	huomenna	ADV	_	_	7	advmod	_	_
9	käymään	käydä	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	SENSE=0|SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 appos	color:blue
1	Suurimmaksi	suuri	ADJ	_	Case=Tra|Degree=Sup|Number=Sing	2	amod	_	_
2	osaksi	osa	NOUN	_	Case=Tra|Number=Sing	5	obl	_	_
3	elokuva	elo#kuva	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
4	kuitenkin	kuitenkin	ADV	_	_	5	advmod	_	_
5	sijoittuu	sijoittua	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	1940-luvulle	1940#luku	NOUN	_	Case=All|Number=Sing	5	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	20	punct	_	_
8	jolloin	jolloin	ADV	_	_	20	advmod	_	_
9	Noah	Noah	PROPN	_	Case=Nom|Number=Sing	20	nsubj	_	_
10	(	(	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	Ryan	Ryan	PROPN	_	Case=Nom|Number=Sing	9	appos	_	_
12	Gosling	Gosling	PROPN	_	Case=Nom|Number=Sing	11	flat:name	_	SpaceAfter=No
13	)	)	PUNCT	_	_	11	punct	_	_
14	ja	ja	CCONJ	_	_	15	cc	_	_
15	Allie	Allie	PROPN	_	Case=Nom|Number=Sing	9	conj	_	_
16	(	(	PUNCT	_	_	17	punct	_	SpaceAfter=No
17	Rachel	Rachel	PROPN	_	Case=Nom|Number=Sing	15	appos	_	_
18	McAdams	McAdams	PROPN	_	Case=Nom|Number=Sing	17	flat:name	_	SpaceAfter=No
19	)	)	PUNCT	_	_	17	punct	_	_
20	tutustuivat	tutustua	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
21	ja	ja	CCONJ	_	_	22	cc	_	_
22	rakastuivat	rakastua	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	conj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	5	punct	_	_

~~~


