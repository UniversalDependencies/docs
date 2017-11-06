---
layout: base
title:  'Statistics of acl in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="sme-dep-acl-relcl.html">acl:relcl</a></tt>.

60 nodes (1%) are attached to their parents as `acl`.

39 instances of `acl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (56; 93% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sme-pos-PRON.html">PRON</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sme-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl	color:blue
1	Leahkki	leat	VERB	V	Tense=Pres|VerbForm=Part	2	acl	_	_
2	vuoigatvuođat	vuoigatvuohta	NOUN	N	Case=Nom|Number=Plur	4	nsubj	_	_
3	eai	ii	VERB	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin	4	aux:neg	_	_
4	lihkahallojuvvo	lihkahallat	VERB	V*	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	Tommi	Tommi	PROPN	N	Case=Nom|Number=Sing	5	nsubj	_	_
2	ii	ii	VERB	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	5	aux:neg	_	_
3	lean	leat	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin	5	aux	_	_
4	goassege	goassege	ADV	Adv	_	5	advmod	_	_
5	oaidnán	oaidnit	VERB	V	Aspect=Perf|VerbForm=Part	0	root	_	_
6	nieiddaža	nieiddaš	NOUN	N	Case=Acc|Number=Sing	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	5	punct	_	_
8	gii_nu	gii_nu	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	9	nsubj	_	_
9	imaš	imaš	NOUN	N	Case=Nom|Number=Sing	6	acl	_	_
10	lea	leat	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Buot	buot	PRON	Pron	Case=Nom|PronType=Ind	7	obj	_	_
2	maid	mii	PRON	Pron	Case=Acc|Number=Sing|PronType=Rel	1	appos	_	_
3	dii	don	PRON	Pron	Case=Nom|Number=Plur|Person=2|PronType=Prs	4	nsubj	_	_
4	dahkabehtet	dahkat	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	acl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	lea	leat	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	buorre	buorre	ADJ	A	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


