---
layout: base
title:  'Statistics of nmod:poss in UD_Kalmyk-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Kalmyk-GDUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="xal_gdud-dep-nmod.html">nmod</a></tt>.

6 nodes (1%) are attached to their parents as `nmod:poss`.

6 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xal_gdud-pos-PRON.html">PRON</a></tt> (4; 67% instances), <tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xal_gdud-pos-PROPN.html">PROPN</a></tt> (1; 17% instances), <tt><a href="xal_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="xal_gdud-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	öngr-äd	öngr	VERB	_	VerbForm=Conv	2	advcl	_	ConvType=Ant
2	bää-žə	bää	VERB	_	Mood=Ind|VerbForm=Fin	0	root	_	_
3	mini	mini	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	eckə	eckə	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Ajsa-n	Ajsa	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	mal-mud	mal	NOUN	_	Case=Nom|Number=Plur	6	nsubj	_	_
3	üvl-är	üvl	NOUN	_	Case=Ins|Number=Sing	4	obl	_	_
4	ük-äd	ük	VERB	_	VerbForm=Conv	5	advcl	_	ConvType=Ant
5	kevt-sən	kevt	VERB	_	Tense=Past|VerbForm=Part	6	xcomp	_	Aspect=Compl
6	uga	uga	VERB	_	Mood=Ind|Polarity=Neg|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod:poss	color:blue
1	äm-d-än	äm	NOUN	_	Case=Dat|Number=Plur|Reflex=Yes	5	obl	_	_
2	mini	mini	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	nmod:poss	_	_
3	ekə	ekə	NOUN	_	_	5	nsubj	_	_
4	oda	oda	ADV	_	_	5	advmod	_	_
5	uga	uga	VERB	_	Polarity=Neg	0	root	_	_

~~~


