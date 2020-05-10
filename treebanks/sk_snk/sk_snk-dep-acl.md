---
layout: base
title:  'Statistics of acl in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="sk_snk-dep-acl-relcl.html">acl:relcl</a></tt>.

263 nodes (0%) are attached to their parents as `acl`.

263 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.28897338403042.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (181; 69% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (51; 19% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (10; 4% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	2:case	_
2	prípade	prípad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
3	,	,	PUNCT	ZIP	_	5	punct	5:punct	_
4	že	že	SCONJ	O	_	5	mark	5:mark	_
5	nebudú	byť	VERB	VBepc-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	2	acl	2:acl:že	_
6	ani	ani	PART	T	_	7	advmod:emph	7:advmod:emph	_
7	dedičia	dedič	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj	SpaceAfter=No
8	,	,	PUNCT	ZIP	_	5	punct	5:punct	_
9	nahradia	nahradiť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
10	ich	on	PRON	PFmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	9	obj	9:obj	_
11	univerzity	univerzita	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	9:nsubj	SpaceAfter=No
12	.	.	PUNCT	ZIP	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Vieš	vedieť	VERB	VKesb+	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
2	o	o	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	3:case	_
3	tom	to	DET	PFns6	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	1	obl:arg	1:obl:arg:o:loc	SpaceAfter=No
4	,	,	PUNCT	ZIP	_	7	punct	7:punct	_
5	že	že	SCONJ	O	_	7	mark	7:mark	_
6	Jaro	jaro	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	_
7	zomrel	zomrieť	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	3	acl	3:acl:že	SpaceAfter=No
8	?	?	PUNCT	ZIP	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
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


