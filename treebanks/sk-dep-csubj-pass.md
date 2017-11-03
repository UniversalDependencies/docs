---
layout: base
title:  'Statistics of csubj:pass in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sk-dep-csubj.html">csubj</a></tt>.

20 nodes (0%) are attached to their parents as `csubj:pass`.

20 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (15; 75% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj:pass	color:blue
1	Obom	oba	NUM	NNmp3	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	3	obj	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	chcelo	chcieť	VERB	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
4	spať	spať	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	csubj:pass	_	SpaceAfter=No
5	.	.	PUNCT	ZIP	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj:pass	color:blue
1	Predpokladá	predpokladať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	1	expl:pass	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	8	punct	_	_
4	že	že	SCONJ	O	_	8	mark	_	_
5	toto	toto	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	det	_	_
6	hélium	hélium	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
7	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	produktom	produkt	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	csubj:pass	_	_
9	jadrového	jadrový	ADJ	AAis2x	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	rozpadu	rozpad	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
11	prvkov	prvok	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	_
12	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	14	case	_	_
13	zemskej	zemský	ADJ	AAfs6x	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	_
14	kôre	kôra	NOUN	SSfs6	Case=Loc|Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 csubj:pass	color:blue
1	Navštívil	navštíviť	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
2	mešitu	mešita	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
3	Umajjovcov	umajjovec	PROPN	SSmp2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	o	o	ADP	Eu6	AdpType=Prep|Case=Loc	6	case	_	_
6	ktorej	ktorý	DET	PAfs6	Case=Loc|Gender=Fem|Number=Sing|PronType=Int,Rel	8	obl:arg	_	_
7	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	8	expl:pass	_	_
8	predpokladá	predpokladať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	acl	_	SpaceAfter=No
9	,	,	PUNCT	Z	_	14	punct	_	_
10	že	že	SCONJ	O	_	14	mark	_	_
11	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	cop	_	_
12	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	13	case	_	_
13	nej	ona	PRON	PFfs6	Case=Loc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	obl	_	_
14	pochovaný	pochovaný	ADJ	Gtms1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	8	csubj:pass	_	_
15	aj	aj	CCONJ	O	_	17	advmod:emph	_	_
16	Ján	ján	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	17	nmod	_	_
17	Krstiteľ	krstiteľ	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	SpaceAfter=No
18	.	.	PUNCT	Z	_	1	punct	_	_

~~~


