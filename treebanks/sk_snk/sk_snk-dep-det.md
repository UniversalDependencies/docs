---
layout: base
title:  'Statistics of det in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="sk_snk-dep-det-numgov.html">det:numgov</a></tt>.

2560 nodes (2%) are attached to their parents as `det`.

2509 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.265625.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (2476; 97% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (27; 1% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (17; 1% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (16; 1% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (14; 1% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Konajte	konať	VERB	VMepb+	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	0:root	_
2	svoju	svoj	DET	PFfs4	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	3	det	3:det	_
3	povinnosť	povinnosť	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	SpaceAfter=No
4	.	.	PUNCT	ZIP	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 det	color:blue
1	Ale	ale	CCONJ	O	_	7	cc	7:cc	_
2	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	4	case	4:case	_
3	loyolskom	loyolský	ADJ	AAis6x	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	kaštieli	kaštieľ	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	7:obl:v:loc	_
5	nič	nič	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	nsubj	7:nsubj	_
6	také	taký	DET	PAns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	det	5:det	_
7	nebolo	byť	VERB	VLescn-	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Johnovi	john	PROPN	SSms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	3	nmod	3:nmod:dat	_
2	Lee	lee	PROPN	SFms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	3	nmod	3:nmod:dat	_
3	Hookerovi	hooker	PROPN	SSms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	7	obl:arg	7:obl:arg:dat	_
4	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	7	expl:pv	7:expl:pv	_
5	toto	toto	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	det	6:det	_
6	všetko	všetok	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	7	nsubj	7:nsubj	_
7	podarilo	podariť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	7	punct	7:punct	_

~~~


