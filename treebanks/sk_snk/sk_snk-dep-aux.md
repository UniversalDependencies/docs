---
layout: base
title:  'Statistics of aux in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sk_snk-dep-aux-pass.html">aux:pass</a></tt>.

2037 nodes (2%) are attached to their parents as `aux`.

1165 instances of `aux` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4972999509082.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-AUX.html">AUX</a></tt> (1985; 97% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-AUX.html">AUX</a></tt> (35; 2% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-AUX.html">AUX</a></tt> (15; 1% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Väčšina	väčšina	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
2	zdrojov	zdroj	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	1:nmod:gen	_
3	však	však	PART	T	_	4	advmod	4:advmod	_
4	uvádza	uvádzať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	ZIP	_	8	punct	8:punct	_
6	že	že	SCONJ	O	_	8	mark	8:mark	_
7	by	by	AUX	Y	Mood=Cnd	8	aux	8:aux	_
8	mal	mať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	4	ccomp	4:ccomp	_
9	byť	byť	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	8	xcomp	8:xcomp	_
10	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	11	case	11:case	_
11	Šanghaji	šanghaj	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
12	.	.	PUNCT	ZIP	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Dovtedy	dovtedy	ADV	PD	PronType=Dem	4	advmod	4:advmod	_
2	bol	byť	AUX	VLesci+	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	4	aux	4:aux	_
3	príležitostne	príležitostne	ADV	Dx	Degree=Pos	4	advmod	4:advmod	_
4	použitý	použitý	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	_
5	termín	termín	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
6	čierna	čierny	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	hviezda	hviezda	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	5	nmod	5:nmod:nom	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Odjakživa	odjakživa	ADV	Dx	Degree=Pos	5	advmod	5:advmod	_
2	som	byť	AUX	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	bola	byť	AUX	VLesaf+	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	5	cop	5:cop	_
4	mamin	mamin	ADJ	AFis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	poklad	poklad	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


