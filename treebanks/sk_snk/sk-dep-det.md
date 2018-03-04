---
layout: base
title:  'Statistics of det in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="sk-dep-det-numgov.html">det:numgov</a></tt>.

2560 nodes (2%) are attached to their parents as `det`.

2509 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.265625.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (2476; 97% instances), <tt><a href="sk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (27; 1% instances), <tt><a href="sk-pos-DET.html">DET</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (17; 1% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (16; 1% instances), <tt><a href="sk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (14; 1% instances), <tt><a href="sk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="sk-pos-X.html">X</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="sk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sk-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Konajte	konať	VERB	VMepb+	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	svoju	svoj	DET	PFfs4	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	3	det	_	_
3	povinnosť	povinnosť	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	SpaceAfter=No
4	.	.	PUNCT	ZIP	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 det	color:blue
1	Ale	ale	CCONJ	O	_	7	cc	_	_
2	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	4	case	_	_
3	loyolskom	loyolský	ADJ	AAis6x	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	kaštieli	kaštieľ	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
5	nič	nič	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	nsubj	_	_
6	také	taký	DET	PAns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	det	_	_
7	nebolo	byť	VERB	VLescn-	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Johnovi	john	PROPN	SSms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	3	nmod	_	_
2	Lee	lee	PROPN	SFms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	3	nmod	_	_
3	Hookerovi	hooker	PROPN	SSms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	7	obj	_	_
4	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	7	expl:pv	_	_
5	toto	toto	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	det	_	_
6	všetko	všetok	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	7	nsubj	_	_
7	podarilo	podariť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	7	punct	_	_

~~~


