---
layout: base
title:  'Statistics of aux in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sk-dep-aux-pass.html">aux:pass</a></tt>.

2038 nodes (2%) are attached to their parents as `aux`.

1166 instances of `aux` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49656526005888.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (1972; 97% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (35; 2% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="sk-pos-DET.html">DET</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Väčšina	väčšina	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	zdrojov	zdroj	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	_	_
3	však	však	PART	T	_	4	advmod	_	_
4	uvádza	uvádzať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	ZIP	_	8	punct	_	_
6	že	že	SCONJ	O	_	8	mark	_	_
7	by	by	AUX	Y	Mood=Cnd	8	aux	_	_
8	mal	mať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	4	ccomp	_	_
9	byť	byť	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	8	xcomp	_	_
10	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	11	case	_	_
11	Šanghaji	šanghaj	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	ZIP	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Dovtedy	dovtedy	ADV	PD	PronType=Dem	4	advmod	_	_
2	bol	byť	AUX	VLesci+	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	4	aux	_	_
3	príležitostne	príležitostne	ADV	Dx	Degree=Pos	4	advmod	_	_
4	použitý	použitý	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	termín	termín	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
6	čierna	čierny	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	hviezda	hviezda	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Odjakživa	odjakživa	ADV	Dx	Degree=Pos	5	advmod	_	_
2	som	byť	AUX	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	bola	byť	AUX	VLesaf+	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	5	cop	_	_
4	mamin	mamin	ADJ	AFis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	poklad	poklad	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	_	_

~~~


