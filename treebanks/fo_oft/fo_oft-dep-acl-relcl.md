---
layout: base
title:  'Statistics of acl:relcl in UD_Faroese-OFT'
udver: '2'
---

## Treebank Statistics: UD_Faroese-OFT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fo_oft-dep-acl.html">acl</a></tt>.

15 nodes (0%) are attached to their parents as `acl:relcl`.

15 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.26666666666667.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (12; 80% instances), <tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_oft-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="fo_oft-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Í	í	ADP	Pr	_	2	case	_	_
2	dag	dagur	NOUN	N	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	_
3	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
4	fótbóltsvøllur	fótbóltsvøllur	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	har	har	ADV	Adv	_	8	advmod	_	_
7	Holið	hol	NOUN	N	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	8	nsubj	_	_
8	var	vera	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Hetta	hesin	PRON	Pron	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	_
2	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	eitt	ein	DET	Det	Case=Nom|Gender=Neut|Number=Sing	4	det	_	_
4	tiltak	tiltak	NOUN	N	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	ið	ið	PRON	Pron	PronType=Rel	8	nsubj	_	_
7	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
8	málrættað	málrættaður	ADV	A	_	4	acl:relcl	_	_
9	ferðavinnuni	ferðavinna	NOUN	N	Case=Dat|Definite=Def|Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl:relcl	color:blue
1	Har	har	ADV	Adv	_	0	root	_	_
2	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	nógvur	nógvur	ADJ	A	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	7	amod	_	_
4	og	og	CCONJ	CC	_	5	cc	_	_
5	góður	góður	ADJ	A	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	conj	_	_
6	slættur	slættur	ADJ	A	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	7	amod	_	_
7	bøur	bøur	NOUN	N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	1	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	12	punct	_	_
9	ið	ið	PRON	Pron	PronType=Rel	12	nsubj	_	_
10	hevur	hava	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	aux	_	_
11	verið	vera	AUX	V	VerbForm=Sup	12	cop	_	_
12	grundarlagið	grundarlag	NOUN	N	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	acl:relcl	_	_
13	undir	undir	ADP	Pr	_	15	case	_	_
14	góðum	góður	ADJ	A	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing	15	amod	_	_
15	landbúnaði	landbúnaður	NOUN	N	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing	12	obl	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


