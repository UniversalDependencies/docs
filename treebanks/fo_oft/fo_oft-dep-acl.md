---
layout: base
title:  'Statistics of acl in UD_Faroese-OFT'
udver: '2'
---

## Treebank Statistics: UD_Faroese-OFT: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="fo_oft-dep-acl-cleft.html">acl:cleft</a></tt>, <tt><a href="fo_oft-dep-acl-relcl.html">acl:relcl</a></tt>.

32 nodes (0%) are attached to their parents as `acl`.

30 instances of `acl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.375.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (24; 75% instances), <tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="fo_oft-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_oft-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fo_oft-pos-NUM.html">NUM</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fo_oft-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fo_oft-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Hetta	hesin	PRON	Pron	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	kom	koma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	í	í	ADP	Pr	_	4	case	_	_
4	lag	lag	NOUN	N	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	2	obl	_	_
5	við	við	ADP	Pr	_	6	case	_	_
6	kongsbrævi	kongsbræv	NOUN	N	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	dagfest	dagfesta	VERB	V	VerbForm=Sup	6	acl	_	_
9	19.	19	ADJ	A	NumType=Ord	2	amod	_	_
10	mars	mars	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	Hon	hon	PRON	Pron	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	fyrsta	fyrstur	ADJ	A	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	amod	_	_
4	kvinna	kvinna	NOUN	N	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	sum	sum	PRON	Pron	PronType=Rel	8	nsubj	_	_
7	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
8	stjórnarleiðari	stjórnleiðari	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	4	acl	_	_
9	í	í	ADP	Pr	_	10	case	_	_
10	Íslandi	Ísland	NOUN	N	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 acl	color:blue
1	Portugisar	portugisi	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	3	nsubj	_	_
2	vóru	vera	AUX	V	Mood=Ind|Number=Plur|Tense=Past	3	cop	_	_
3	fyrstir	fyrstur	ADJ	A	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	0	root	_	_
4	á	á	ADP	Pr	_	6	case	_	_
5	nýggja	nýggjur	ADJ	A	Case=Dat|Definite=Def|Gender=Masc|Number=Sing	6	amod	_	_
6	trælamarknaðinum	trælmarknaður	NOUN	N	Case=Dat|Definite=Def|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	13	punct	_	_
8	men	men	CCONJ	CC	_	13	cc	_	_
9	aðrir	annar	ADJ	A	Case=Nom|Gender=Masc|Number=Plur	10	amod	_	_
10	evropearar	evropeari	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	13	nsubj	_	_
11	vóru	vera	AUX	V	Mood=Ind|Number=Plur|Tense=Past	13	cop	_	_
12	ikki	ikki	ADV	Adv	_	13	advmod	_	_
13	seinir	seinur	ADJ	A	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	3	conj	_	_
14	at	at	PART	IM	_	15	mark	_	_
15	gera	gera	VERB	V	VerbForm=Inf	13	acl	_	_
16	sum	sum	SCONJ	CS	_	17	mark	_	_
17	teir	teir	PRON	Pron	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	15	advcl	_	SpaceAfter=No
18	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


