---
layout: base
title:  'Statistics of advcl in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `advcl`

This relation is universal.

833 nodes (1%) are attached to their parents as `advcl`.

498 instances of `advcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.16206482593037.

The following 15 pairs of parts of speech are connected with `advcl`: <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (722; 87% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (49; 6% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-ADJ.html">ADJ</a></tt> (22; 3% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="sk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sk-pos-DET.html">DET</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl	color:blue
1	Keďže	keďže	SCONJ	O	_	4	mark	_	_
2	galaxie	galaxia	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	_
3	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	4	expl:pv	_	_
4	vzďaľovali	vzďaľovať	VERB	VLepcf+	Aspect=Imp|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	6	advcl	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	_
6	naznačilo	naznačiť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
7	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
8	dve	dva	NUM	NNfp4	Case=Acc|Gender=Fem|Number=Plur	10	nummod	_	_
9	rôzne	rôzny	ADJ	AAfp4x	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	10	amod	_	_
10	možnosti	možnosť	NOUN	SSfp4	Case=Acc|Gender=Fem|Number=Plur	6	obj	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 advcl	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Máte	mať	VERB	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dojem	dojem	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	7	punct	_	_
5	že	že	SCONJ	O	_	7	mark	_	_
6	ste	byť	AUX	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	slobodnejší	slobodný	ADJ	AAmp1y	Animacy=Anim|Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	3	acl	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	11	punct	_	_
9	než	než	SCONJ	O	_	11	mark	_	_
10	ste	byť	AUX	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	boli	byť	VERB	VLepbh+	Aspect=Imp|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	7	advcl	_	_
12	vtedy	vtedy	ADV	PD	PronType=Dem	11	advmod	_	SpaceAfter=No
13	?	?	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl	color:blue
1	Revolúcia	revolúcia	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	zavŕši	zavŕšiť	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vtedy	vtedy	ADV	PD	PronType=Dem	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	_	_
6	keď	keď	SCONJ	O	_	9	mark	_	_
7	jazyk	jazyk	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
8	bude	byť	AUX	VBesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	cop	_	_
9	dokonalý	dokonalý	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	advcl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	_	_

~~~


