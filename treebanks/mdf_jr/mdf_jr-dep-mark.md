---
layout: base
title:  'Statistics of mark in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `mark`

This relation is universal.

24 nodes (1%) are attached to their parents as `mark`.

24 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.875.

The following 7 pairs of parts of speech are connected with `mark`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (9; 38% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt> (8; 33% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt> (3; 13% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Афи	афи	AUX	Aux	Polarity=Neg	2	aux:neg	_	_
2	шарьхкодень	шарьхкодемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=2	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	кода	кода	ADV	Adv	_	5	mark	_	_
5	лаподень	лаподемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=2	2	advcl	_	_
6	карденя	карда	NOUN	N	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Sing|Typo=Yes	7	nmod	_	_
7	пряста	пря	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	5	obl:lfrom	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	_
2	мезе	мезе	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	0	root	_	_
3	кда	кда	SCONJ	CS	_	4	mark	_	_
4	рамась	рамамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	advcl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	аньцек	аньцек	ADV	Adv	_	7	advmod:foc	_	_
7	налхксемс	налхксемс	VERB	V	Valency=1|VerbForm=Inf	2	advcl	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	а	а	CCONJ	CC	_	11	cc	_	_
10	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	ёран	ёрамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	2	conj	_	_
12	лиендемс	лиендемс	VERB	V	Valency=1|VerbForm=Inf	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	Сясы	сясы	SCONJ	CS	_	5	mark	_	_
2	синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
3	сембе	сембе	ADV	Adv	_	2	advmod	_	_
4	и	и	CCONJ	CC	_	5	cc:preconj	_	_
5	лётчикт	лётчик	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	космонавтт	космонавт	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


