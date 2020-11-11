---
layout: base
title:  'Statistics of nmod:poss in UD_North_Sami-Giella'
udver: '2'
---

## Treebank Statistics: UD_North_Sami-Giella: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sme_giella-dep-nmod.html">nmod</a></tt>.

976 nodes (4%) are attached to their parents as `nmod:poss`.

969 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21926229508197.

The following 11 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt> (521; 53% instances), <tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme_giella-pos-PRON.html">PRON</a></tt> (208; 21% instances), <tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme_giella-pos-PROPN.html">PROPN</a></tt> (151; 15% instances), <tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt> (44; 5% instances), <tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme_giella-pos-PRON.html">PRON</a></tt> (19; 2% instances), <tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme_giella-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme_giella-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="sme_giella-pos-NUM.html">NUM</a></tt>-<tt><a href="sme_giella-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme_giella-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme_giella-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Iibat	ii	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	5	aux:neg	_	_
2	oppa	oppa	ADJ	A	_	3	amod	_	_
3	eatnama	eana	NOUN	N	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	duopmár	duopmár	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	_
5	dubmeše	dubmet	VERB	V	Connegative=Yes|Mood=Cnd|Tense=Pres|VerbForm=Fin	0	root	_	_
6	riekta	riekta	ADV	Adv	_	5	advmod	_	SpaceAfter=No
7	?	?	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Tubal-Kainas	Tubal-Kain	PROPN	N	Case=Loc|Number=Sing	2	obl	_	_
2	lei	leat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	oabbá	oabbá	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	8	punct	_	_
5	gean	gii	PRON	Pron	Case=Gen|Number=Sing|PronType=Rel	6	nmod:poss	_	_
6	namma	namma	NOUN	N	Case=Nom|Number=Sing	8	nsubj	_	_
7	lei	leat	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	_	_
8	Naama	Naama	PROPN	N	Case=Nom|Number=Sing	3	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Telefuvnna	telefovdna	NOUN	N	Case=Gen|Number=Sing	3	obl	_	_
2	bokte	bokte	ADP	Po	_	1	case	_	_
3	ožžon	oažžut	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
4	Álttá	Áltá	PROPN	N	Case=Gen|Number=Sing	5	nmod:poss	_	_
5	Johtolatstašuvnna	johtolatstašuvdna	NOUN	N	Case=Acc|Number=Sing	3	obj	_	_
6	ságaide	ságat	NOUN	N	Case=Ill|Number=Plur	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


