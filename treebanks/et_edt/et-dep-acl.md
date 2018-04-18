---
layout: base
title:  'Statistics of acl in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="et-dep-acl-relcl.html">acl:relcl</a></tt>.

1341 nodes (1%) are attached to their parents as `acl`.

1120 instances of `acl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8441461595824.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (1054; 79% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (122; 9% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (58; 4% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (47; 4% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (36; 3% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl	color:blue
1	Huvitaval	huvitav	ADJ	A	Case=Ade|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	2	acl	_	_
2	kombel	komme	NOUN	S	Case=Ade|Number=Sing	3	obl	_	_
3	läbisid	läbima	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	mõlemad	mõlema	PRON	P	Case=Nom|Number=Plur|PronType=Tot	3	nsubj	_	_
5	naistekliinikut	naiste_kliinik	NOUN	S	Case=Par|Number=Sing	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Esimeseks	esimene	ADJ	N	Case=Tra|Number=Sing|NumForm=Letter|NumType=Ord	2	amod	_	_
2	impulsiks	impulss	NOUN	S	Case=Tra|Number=Sing	0	root	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
4	soov	soov	NOUN	S	Case=Nom|Number=Sing	2	nsubj:cop	_	_
5	koju	kodu	NOUN	S	Case=Add|Number=Sing	6	obl	_	_
6	tormata	tormama	VERB	V	VerbForm=Inf	4	acl	_	_
7	ja	ja	CCONJ	J	_	9	cc	_	_
8	skandaal	skandaal	NOUN	S	Case=Nom|Number=Sing	9	obj	_	_
9	korraldada	korraldama	VERB	V	VerbForm=Inf	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	Vaene	vaene	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	mina	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	_	_
4	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	proovisin	proovima	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	acl	_	_
6	esimest	esimene	ADJ	N	Case=Par|Number=Sing|NumForm=Letter|NumType=Ord	7	amod	_	_
7	korda	kord	NOUN	S	Case=Par|Number=Sing	5	obl	_	_
8	päikest	päike	NOUN	S	Case=Par|Number=Sing	9	obj	_	_
9	võtta	võtma	VERB	V	VerbForm=Inf	5	xcomp	_	SpaceAfter=No
10	!	!	PUNCT	Z	_	2	punct	_	_
11	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No

~~~


