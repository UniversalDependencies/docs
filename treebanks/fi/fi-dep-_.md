---
layout: base
title:  'Statistics of _ in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `_`

This relation is universal.

256 nodes (0%) are attached to their parents as `_`.

256 instances of `_` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.0453125.

The following 5 pairs of parts of speech are connected with `_`: -<tt><a href="fi-pos-VERB.html">VERB</a></tt> (249; 97% instances), -<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), -<tt><a href="fi-pos-ADV.html">ADV</a></tt> (2; 1% instances), -<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), -<tt><a href="fi-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2.1	bgColor:blue
# visual-style 2.1	fgColor:white
# visual-style _	bgColor:blue
# visual-style _	fgColor:white
# visual-style _ 2.1 _	color:blue
1	Punanen	punainen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing|Style=Coll	2	amod	_	_
2	kenttä	kenttä	NOUN	N	Case=Nom|Number=Sing	0	root	2.1:nsubj	_
2.1	tulee	tulla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	_	_	_	_
3	tonne	tonne	ADV	Adv	_	4	advmod	_	_
4	päätyyn	pääty	NOUN	N	Case=Ill|Number=Sing	2	orphan	2.1:obl	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	2.1:punct	_

~~~


~~~ conllu
# visual-style 8.1	bgColor:blue
# visual-style 8.1	fgColor:white
# visual-style _	bgColor:blue
# visual-style _	fgColor:white
# visual-style _ 8.1 _	color:blue
1	Suurimmalle	suuri	ADJ	A	Case=All|Degree=Sup|Number=Sing	2	amod	_	_
2	osalle	osa	NOUN	N	Case=All|Number=Sing	7	nmod	8.1:nmod	_
3	naisia	nainen	NOUN	N	Case=Par|Number=Plur	2	nmod	_	_
4	jopa	jopa	ADV	Adv	_	5	advmod	_	_
5	perusihmisoikeudet	perus#ihmis#oikeus	NOUN	N	Case=Nom|Derivation=Vs|Number=Plur	7	nsubj:cop	8.1:nsubj:cop	_
6	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	saavuttamattomia	saavuttamaton	ADJ	A	Case=Par|Degree=Pos|Derivation=Ton|Number=Plur	0	root	_	_
8	ja	ja	CCONJ	C	_	11	cc	8.1:cc	_
8.1	saavuttamattomia	saavuttamaton	ADJ	_	Case=Par|Degree=Pos|Derivation=Ton|Number=Plur	_	_	7:conj	_
9	vain	vain	ADV	Adv	_	11	advmod	_	_
10	siitä	se	PRON	Pron	Case=Ela|Number=Sing|PronType=Dem	11	det	_	_
11	syystä	syy	NOUN	N	Case=Ela|Number=Sing	7	conj	8.1:nmod	SpaceAfter=No
12	,	,	PUNCT	Punct	_	16	punct	_	_
13	että	että	SCONJ	C	_	16	mark	_	_
14	he	hän	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	16	nsubj	_	_
15	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	aux	_	_
16	syntyneet	syntyä	VERB	V	Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	11	ccomp	_	_
17	naisiksi	nainen	NOUN	N	Case=Tra|Number=Plur	16	obl	_	SpaceAfter=No
18	.	.	PUNCT	Punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7.1	bgColor:blue
# visual-style 7.1	fgColor:white
# visual-style _	bgColor:blue
# visual-style _	fgColor:white
# visual-style _ 7.1 _	color:blue
1	Meidän	minä	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	nsubj:cop	_	_
2	tässä	tämä	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	5	obl	7.1:obl	_
3	pitäisi	pitää	AUX	V	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	5	aux	_	_
4	olla	olla	AUX	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	5	cop	_	_
5	juovuksissa	juovuksissa	ADV	Adv	_	0	root	_	_
6	eikä	ei	VERB	V	Clitic=Ka|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	7	cc	7.1:cc	_
7	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	5	conj	7.1:nsubj:cop	SpaceAfter=No
7.1	juovuksissa	juovuksissa	ADV	_	_	_	_	5:conj	_
8	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


