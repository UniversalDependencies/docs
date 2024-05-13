---
layout: base
title:  'Statistics of csubj:pass in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sk_snk-dep-csubj.html">csubj</a></tt>.

21 nodes (0%) are attached to their parents as `csubj:pass`.

21 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.57142857142857.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (15; 71% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (2; 10% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj:pass	color:blue
1	Zdalo	zdať	VERB	VLescn+	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	1	expl:pass	1:expl:pass	_
3	mu	on	PRON	PFms3	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	obl:arg	1:obl:arg:dat	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	8:punct	_
5	že	že	SCONJ	O	_	8	mark	8:mark	_
6	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	7	case	7:case	_
7	neho	on	PRON	PFis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	8	obj	8:obj	_
8	čakal	čakať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	1	csubj:pass	1:csubj:pass	_
9	celý	celý	ADJ	AAis4x	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	10	amod	10:amod	_
10	život	život	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obl	8:obl:acc	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj:pass	color:blue
1	Predpokladá	predpokladať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	1	expl:pass	1:expl:pass	SpaceAfter=No
3	,	,	PUNCT	Z	_	8	punct	8:punct	_
4	že	že	SCONJ	O	_	8	mark	8:mark	_
5	toto	toto	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	det	6:det	_
6	hélium	hélium	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	8:nsubj	_
7	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	8:cop	_
8	produktom	produkt	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	csubj:pass	1:csubj:pass	_
9	jadrového	jadrový	ADJ	AAis2x	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	amod	10:amod	_
10	rozpadu	rozpad	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	8:nmod:gen	_
11	prvkov	prvok	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	10	nmod	10:nmod:gen	_
12	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	14	case	14:case	_
13	zemskej	zemský	ADJ	AAfs6x	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	14	amod	14:amod	_
14	kôre	kôra	NOUN	SSfs6	Case=Loc|Gender=Fem|Number=Sing	11	nmod	11:nmod:v:loc	SpaceAfter=No
15	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 csubj:pass	color:blue
1	Navštívil	navštíviť	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
2	mešitu	mešita	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj|8:obl:arg:o:loc	_
3	Umajjovcov	umajjovec	PROPN	SSmp2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	2:nmod:gen	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	8:punct	_
5	o	o	ADP	Eu6	AdpType=Prep|Case=Loc	6	case	6:case	_
6	ktorej	ktorý	DET	PAfs6	Case=Loc|Gender=Fem|Number=Sing|PronType=Int,Rel	8	obl:arg	2:ref	_
7	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	8	expl:pass	8:expl:pass	_
8	predpokladá	predpokladať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	SpaceAfter=No
9	,	,	PUNCT	Z	_	14	punct	14:punct	_
10	že	že	SCONJ	O	_	14	mark	14:mark	_
11	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	cop	14:cop	_
12	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	13	case	13:case	_
13	nej	ona	PRON	PFfs6	Case=Loc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	obl	14:obl:v:loc	_
14	pochovaný	pochovaný	ADJ	Gtms1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	8	csubj:pass	8:csubj:pass	_
15	aj	aj	CCONJ	O	_	17	advmod:emph	17:advmod:emph	_
16	Ján	ján	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	17	nmod	17:nmod:nom	_
17	Krstiteľ	krstiteľ	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	14	nsubj	14:nsubj	SpaceAfter=No
18	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


