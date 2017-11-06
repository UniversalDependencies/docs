---
layout: base
title:  'Statistics of acl:relcl in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="et-dep-acl.html">acl</a></tt>.

839 nodes (1%) are attached to their parents as `acl:relcl`.

831 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.39213349225268.

The following 24 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (531; 63% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (107; 13% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (46; 5% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (43; 5% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (27; 3% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (20; 2% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl:relcl	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Teil	sina	PRON	P	Case=Ade|Number=Plur|Person=2|PronType=Prs	0	root	_	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	väga	väga	ADV	D	_	5	advmod	_	_
5	vedel	vedel	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	veri	veri	NOUN	S	Case=Nom|Number=Sing	2	nsubj:cop	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	2	punct	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	2	punct	_	_
9	ütles	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
10	õde	õde	NOUN	S	Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	Z	_	14	punct	_	_
12	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	14	nsubj	_	_
13	vereproovi	vere_proov	NOUN	S	Case=Par|Number=Sing	14	obj	_	_
14	võttis	võtma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	acl:relcl	_	SpaceAfter=No
15	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 acl:relcl	color:blue
1	Keda	kes	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	6	obj	_	_
2	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
3	pean	pidama	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	6	obl	_	_
5	eest	eest	ADP	K	AdpType=Post	4	case	_	_
6	kiitma	kiitma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	12	punct	_	_
8	et	et	SCONJ	J	_	12	mark	_	_
9	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
10	siia	siia	ADV	D	_	11	advmod	_	_
11	tallu	talu	NOUN	S	Case=Add|Number=Sing	12	obl	_	_
12	sündisid	sündima	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No
13	?	?	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Jah	jah	ADV	D	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	4	punct	_	_
3	sama	sama	PRON	P	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
4	Madis	Madis	PROPN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	7	punct	_	_
6	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	7	nsubj	_	_
7	elab	elama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	erakas	erakas	NOUN	S	Case=Ine|Number=Sing	7	obl	_	_
9	-	-	PUNCT	Z	_	7	punct	_	_
10	prillidega	prill	NOUN	S	Case=Com|Number=Plur	4	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	_	_
12	"	"	PUNCT	Z	_	4	punct	_	_

~~~


