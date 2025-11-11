---
layout: base
title:  'Statistics of iobj in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `iobj`

This relation is universal.

95 nodes (0%) are attached to their parents as `iobj`.

59 instances of `iobj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.56842105263158.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (78; 82% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (8; 8% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (8; 8% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (1; 1% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 iobj	color:blue
1	Kým	kým	SCONJ	O	_	3	mark	3:mark	_
2	svetlo	svetlo	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	3:nsubj|4:nsubj:xsubj	_
3	stihlo	stihnúť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	6	advcl	6:advcl:kým	_
4	zmiznúť	zmiznúť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	SpaceAfter=No
5	,	,	PUNCT	Z	_	3	punct	3:punct	_
6	upozornil	upozorniť	VERB	VLdsam+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
7	som	byť	AUX	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	6:aux	_
8	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	9	case	9:case	_
9	neho	ono	PRON	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	6	obj	6:obj	_
10	taxikára	taxikár	NOUN	SSms4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	iobj	6:iobj	SpaceAfter=No
11	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Varoval	varovať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
2	Sýriu	sýria	PROPN	SSfs4:r	Case=Acc|Gender=Fem|Number=Sing	1	iobj	1:iobj	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	6:punct	_
4	aby	aby	SCONJ	O	_	6	mark	6:mark	_
5	by	by	AUX	Y	Mood=Cnd|VerbForm=Fin	6	aux	6:aux	_
6	prestala	prestať	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	1	ccomp	1:ccomp	_
7	podporovať	podporovať	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	_
8	teroristov	terorista	NOUN	SSmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


