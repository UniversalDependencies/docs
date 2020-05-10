---
layout: base
title:  'Statistics of advcl in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `advcl`

This relation is universal.

833 nodes (1%) are attached to their parents as `advcl`.

498 instances of `advcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.16206482593037.

The following 15 pairs of parts of speech are connected with `advcl`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (722; 87% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (49; 6% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (22; 3% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl	color:blue
1	Keďže	keďže	SCONJ	O	_	4	mark	4:mark	_
2	galaxie	galaxia	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubj	4:nsubj	_
3	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
4	vzďaľovali	vzďaľovať	VERB	VLepcf+	Aspect=Imp|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	6	advcl	6:advcl:keďže	SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	4:punct	_
6	naznačilo	naznačiť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
7	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	_
8	dve	dva	NUM	NNfp4	Case=Acc|Gender=Fem|Number=Plur	10	nummod	10:nummod	_
9	rôzne	rôzny	ADJ	AAfp4x	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	10	amod	10:amod	_
10	možnosti	možnosť	NOUN	SSfp4	Case=Acc|Gender=Fem|Number=Plur	6	obj	6:obj	SpaceAfter=No
11	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 advcl	color:blue
1	"	"	PUNCT	Z	_	2	punct	2:punct	SpaceAfter=No
2	Máte	mať	VERB	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	dojem	dojem	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	SpaceAfter=No
4	,	,	PUNCT	Z	_	7	punct	7:punct	_
5	že	že	SCONJ	O	_	7	mark	7:mark	_
6	ste	byť	AUX	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
7	slobodnejší	slobodný	ADJ	AAmp1y	Animacy=Anim|Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	3	acl	3:acl:že	SpaceAfter=No
8	,	,	PUNCT	Z	_	11	punct	11:punct	_
9	než	než	SCONJ	O	_	11	mark	11:mark	_
10	ste	byť	AUX	VKepb+	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
11	boli	byť	VERB	VLepbh+	Aspect=Imp|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	7	advcl	7:advcl:než	_
12	vtedy	vtedy	ADV	PD	PronType=Dem	11	advmod	11:advmod	SpaceAfter=No
13	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl	color:blue
1	Revolúcia	revolúcia	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	3:nsubj:pass	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	3	expl:pass	3:expl:pass	_
3	zavŕši	zavŕšiť	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	vtedy	vtedy	ADV	PD	PronType=Dem	3	advmod	3:advmod	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	9:punct	_
6	keď	keď	SCONJ	O	_	9	mark	9:mark	_
7	jazyk	jazyk	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj	_
8	bude	byť	AUX	VBesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	cop	9:cop	_
9	dokonalý	dokonalý	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	advcl	3:advcl:keď	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


