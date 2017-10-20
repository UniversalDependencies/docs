---
layout: base
title:  'Statistics of expl:pv in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_fictree-dep-expl-pass.html">expl:pass</a></tt>.

4577 nodes (3%) are attached to their parents as `expl:pv`.

3040 instances of `expl:pv` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8116670308062.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (4524; 99% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (51; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl:pv	color:blue
1	Syn	syn	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	_	_
3	mě	já	PRON	PH-S2--1-------	Case=Gen|Number=Sing|Person=1|PronType=Prs|Variant=Short	5	obj	_	_
4	pevně	pevně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	5	advmod	_	_
5	držel	držet	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	_	_
7	ruku	ruka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	obl	_	_
8	,	,	PUNCT	Z:-------------	_	12	punct	_	_
9	občas	občas	ADV	Db-------------	_	12	advmod	_	_
10	ke	k	ADP	RV--3----------	AdpType=Voc|Case=Dat	11	case	_	_
11	mně	já	PRON	PP-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs	12	obl	_	_
12	vzhlédl	vzhlédnout	VERB	VpMS----R-AA--1	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	conj	_	_
13	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 expl:pv	color:blue
1	Těžké	těžký	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	_
2	,	,	PUNCT	Z:-------------	_	3	punct	_	_
3	dunivé	dunivý	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	1	conj	_	_
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	slévající	slévající	ADJ	AGIP1-----A----	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	3	orphan	_	_
6	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	_	_
7	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	_
8	zlověstného	zlověstný	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	_	_
9	dusotu	dusot	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	5	obj	_	_
10	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 expl:pv	color:blue
1	Jednoho	jeden	NUM	ClIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	2	nummod	_	_
2	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	obl	_	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	_	_
4	dozvěděl	dozvědět	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	,	,	PUNCT	Z:-------------	_	9	punct	_	_
6	že	že	SCONJ	J,-------------	_	9	mark	_	_
7	městem	město	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	9	obl	_	_
8	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux	_	_
9	projíždět	projíždět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
10	mistr	mistr	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	_	_
11	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


