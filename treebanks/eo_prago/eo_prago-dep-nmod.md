---
layout: base
title:  'Statistics of nmod in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="eo_prago-dep-nmod-poss.html">nmod:poss</a></tt>.

94 nodes (11%) are attached to their parents as `nmod`.

84 instances of `nmod` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.47872340425532.

The following 12 pairs of parts of speech are connected with `nmod`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (64; 68% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-NUM.html">NUM</a></tt> (7; 7% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="eo_prago-pos-ADV.html">ADV</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="eo_prago-pos-NUM.html">NUM</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="eo_prago-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 nmod	color:blue
1	Manifesto	manifesto	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Prago	Prago	PROPN	_	Case=Nom|Number=Sing	1	nmod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	la	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	movado	movado	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
7	por	por	ADP	_	_	10	case	_	_
8	la	la	DET	_	Definite=Def|PronType=Art	10	det	_	_
9	internacia	internacia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
11	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	10	appos	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	1	1	NUM	_	_	3	nmod	_	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	_
3	DEMOKRATIO	demokratio	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 26 nmod	color:blue
1	Ni	ni	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	asertas	aserti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ke	ke	SCONJ	_	_	14	mark	_	_
4	la	la	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	anoj	ano	NOUN	_	Case=Nom|Number=Plur	14	nsubj	_	_
6	de	de	ADP	_	_	8	case	_	_
7	ĉiuj	ĉiu	DET	_	Case=Nom|Number=Plur|PronType=Tot	8	det	_	_
8	lingvoj	lingvo	NOUN	_	Case=Nom|Number=Plur	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	grandaj	granda	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	8	amod	_	_
11	kaj	kaj	CCONJ	_	_	12	cc	_	_
12	malgrandaj	malgranda	ADJ	_	Case=Nom|Number=Plur	10	amod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	devus	devi	VERB	_	Mood=Sub|VerbForm=Fin	2	ccomp	_	_
15	disponi	disponi	VERB	_	VerbForm=Inf	14	xcomp	_	_
16	pri	pri	ADP	_	_	18	case	_	_
17	reala	reala	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	18	amod	_	_
18	ŝanco	ŝanco	NOUN	_	Case=Nom|Number=Sing	15	nmod	_	_
19	por	por	ADP	_	_	20	mark	_	_
20	alproprigi	alproprigi	VERB	_	VerbForm=Inf	18	acl	_	_
21	duan	dua	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	22	amod	_	_
22	lingvon	lingvo	NOUN	_	Case=Acc|Number=Sing	20	obj	_	_
23	ĝis	ĝis	ADP	_	_	26	case	_	_
24	alta	alta	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	26	amod	_	_
25	komunika	komunika	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	26	amod	_	_
26	nivelo	nivelo	NOUN	_	Case=Nom|Number=Sing	20	nmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	2	punct	_	_

~~~


