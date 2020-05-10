---
layout: base
title:  'Statistics of nsubj:pass in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sk_snk-dep-nsubj.html">nsubj</a></tt>.

221 nodes (0%) are attached to their parents as `nsubj:pass`.

143 instances of `nsubj:pass` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.91855203619909.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (102; 46% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (70; 32% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (13; 6% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (9; 4% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (8; 4% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (6; 3% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (6; 3% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Neskôr	neskôr	ADV	Dx	Degree=Pos	5	advmod	5:advmod	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	5	expl:pass	5:expl:pass	_
3	obrázok	obrázok	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
4	monoskopu	monoskop	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod:gen	_
5	snímal	snímať	VERB	VLesci+	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
6	normálnou	normálny	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	_
7	televíznou	televízny	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	_
8	kamerou	kamera	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	5	obl	5:obl:ins	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Mŕtvoly	mŕtvola	NOUN	SSfp1	Case=Nom|Gender=Fem|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
2	boli	byť	AUX	VLepcf+	Aspect=Imp|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	4	aux:pass	4:aux:pass	_
3	hromadne	hromadne	ADV	Dx	Degree=Pos	4	advmod	4:advmod	_
4	spaľované	spaľovaný	ADJ	Gtfp1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	6	case	6:case	_
6	krematóriách	krematórium	NOUN	SSnp6	Case=Loc|Gender=Neut|Number=Plur	4	obl	4:obl:v:loc	SpaceAfter=No
7	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Každý	každý	DET	PAms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	3	nsubj:pass	3:nsubj:pass	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	3	expl:pass	3:expl:pass	_
3	očistí	očistiť	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
4	.	.	PUNCT	ZIP	_	3	punct	3:punct	_

~~~


