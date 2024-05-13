---
layout: base
title:  'Statistics of iobj in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `iobj`

This relation is universal.

88 nodes (0%) are attached to their parents as `iobj`.

54 instances of `iobj` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.52272727272727.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (73; 83% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (8; 9% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (7; 8% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
1	Stále	stále	ADV	Dx	Degree=Pos	5	advmod	5:advmod	_
2	som	byť	AUX	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	4	case	4:case	_
4	duchu	duch	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl:v:loc	_
5	myslela	myslieť	VERB	VLesaf+	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
6	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	7	case	7:case	_
7	to	to	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obl:arg	5:obl:arg:na:acc	SpaceAfter=No
8	,	,	PUNCT	Z	_	11	punct	11:punct	_
9	že	že	SCONJ	O	_	11	mark	11:mark	_
10	si	si	PRON	R	PronType=Prs|Reflex=Yes	11	iobj	11:iobj	_
11	udriem	udrieť	VERB	VKdsa+	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	acl	7:acl:že	_
12	päty	päta	NOUN	SSfp4	Case=Acc|Gender=Fem|Number=Plur	11	obj	11:obj	SpaceAfter=No
13	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Varoval	varovať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
2	Sýriu	sýria	PROPN	SSfs4:r	Case=Acc|Gender=Fem|Number=Sing	1	iobj	1:iobj	SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	5:punct	_
4	aby	aby	SCONJ	OY	Mood=Cnd	5	mark	5:mark	_
5	prestala	prestať	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	1	ccomp	1:ccomp	_
6	podporovať	podporovať	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	_
7	teroristov	terorista	NOUN	SSmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Strana	strana	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	vyzýva	vyzývať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	jedinca	jedinec	NOUN	SSms4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	2	iobj	2:iobj	SpaceAfter=No
4	,	,	PUNCT	ZIP	_	6	punct	6:punct	_
5	aby	aby	SCONJ	OY	Mood=Cnd	6	mark	6:mark	_
6	poprel	poprieť	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	2	ccomp	2:ccomp	_
7	svedectvo	svedectvo	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	6	obj	6:obj	_
8	vlastných	vlastný	ADJ	AAnp2x	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	9	amod	9:amod|11:amod	_
9	očí	oko	NOUN	SSnp2	Case=Gen|Gender=Neut|Number=Plur	7	nmod	7:nmod:gen	_
10	a	a	CCONJ	O	_	11	cc	11:cc	_
11	uší	ucho	NOUN	SSnp2	Case=Gen|Gender=Neut|Number=Plur	9	conj	7:nmod:gen|9:conj	SpaceAfter=No
12	.	.	PUNCT	ZIP	_	2	punct	2:punct	_

~~~


