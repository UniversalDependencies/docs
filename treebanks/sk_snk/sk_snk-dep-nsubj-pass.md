---
layout: base
title:  'Statistics of nsubj:pass in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sk_snk-dep-nsubj.html">nsubj</a></tt>.

220 nodes (0%) are attached to their parents as `nsubj:pass`.

143 instances of `nsubj:pass` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.90454545454545.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (102; 46% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (70; 32% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (13; 6% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (9; 4% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (8; 4% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (6; 3% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (6; 3% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Husľové	husľový	ADJ	AAfp1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	2:amod	_
2	struny	struna	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	5	nsubj:pass	5:nsubj:pass	_
3	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	5	expl:pass	5:expl:pass	_
4	pôvodne	pôvodne	ADV	Dx	Degree=Pos	5	advmod	5:advmod	_
5	vyrábali	vyrábať	VERB	VLepcf+	Aspect=Imp|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
6	z	z	ADP	Eu2	AdpType=Prep|Case=Gen	8	case	8:case	_
7	ovčích	ovčí	ADJ	AAnp2x	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	8	amod	8:amod	_
8	čriev	črevo	NOUN	SSnp2	Case=Gen|Gender=Neut|Number=Plur	5	obl	5:obl:z:gen	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:pass	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	2:case	_
2	zajatí	zajatie	NOUN	SSns6	Case=Loc|Gender=Neut|Number=Sing	4	obl	4:obl:v:loc	_
3	boli	byť	AUX	VLepci+	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	4	aux:pass	4:aux:pass	_
4	zaznamenané	zaznamenaný	ADJ	Gtip1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	prípady	prípad	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
6	kosatiek	kosatka	NOUN	SSfp2	Case=Gen|Gender=Fem|Number=Plur	5	nmod	5:nmod:gen	_
7	napadajúcich	napádajúci	ADJ	Gkfp2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	6	amod	6:amod	_
8	ľudí	človek	NOUN	SSmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj:pass	color:blue
1	Vždy	vždy	ADV	PD	PronType=Tot	2	advmod	2:advmod	_
2	povstali	povstať	VERB	VLdpcm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
3	noví	nový	ADJ	AAmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	6:amod	_
4	a	a	CCONJ	O	_	5	cc	5:cc	_
5	noví	nový	ADJ	AAmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	conj	3:conj|6:amod	_
6	zadubenci	zadubenec	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj|11:nsubj:pass	SpaceAfter=No
7	,	,	PUNCT	Z	_	11	punct	11:punct	_
8	ktorí	ktorý	DET	PAmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	11	nsubj:pass	6:ref	_
9	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	11	expl:pass	11:expl:pass	_
10	mu	on	PRON	PFms3	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obl:arg	11:obl:arg:dat|12:nsubj	_
11	dali	dať	VERB	VLdpcm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	6	acl:relcl	6:acl:relcl	_
12	zviesť	zviesť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	11	xcomp	11:xcomp	SpaceAfter=No
13	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


