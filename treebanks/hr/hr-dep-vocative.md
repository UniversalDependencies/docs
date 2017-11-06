---
layout: base
title:  'Statistics of vocative in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `vocative`

This relation is universal.

23 nodes (0%) are attached to their parents as `vocative`.

13 instances of `vocative` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.47826086956522.

The following 9 pairs of parts of speech are connected with `vocative`: <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (9; 39% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (3; 13% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="hr-pos-PRON.html">PRON</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 vocative	color:blue
1	U	u	ADP	_	Case=Loc	3	case	_	_
2	tom	taj	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	smislu	smisao	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	6	obl	_	_
4	ove	ovaj	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	ređenike	ređenik	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	6	obj	_	_
6	preporučujem	preporučivati	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	i	i	CCONJ	_	_	8	discourse	_	_
8	vama	vi	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	6	iobj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	dragi	drag	ADJ	_	Case=Voc|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	_
11	vjernici	vjernik	NOUN	_	Case=Voc|Gender=Masc|Number=Plur	6	vocative	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 vocative	color:blue
1	Southeast	Southeast	X	_	_	3	compound	_	_
2	European	European	X	_	_	3	compound	_	_
3	Times	Times	X	_	_	8	parataxis	_	SpaceAfter=No
4	:	:	PUNCT	_	_	3	punct	_	_
5	G.	G.	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	6	vocative	_	_
6	predsjedniče	predsjednik	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	8	vocative	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	očekujete	očekivati	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
9	li	li	PART	_	_	8	mark	_	_
10	turbulentno	turbulentan	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	11	amod	_	_
11	razdoblje	razdoblje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	_
12	u	u	ADP	_	Case=Loc	13	case	_	_
13	regiji	regija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	11	nmod	_	_
14	nakon	nakon	ADP	_	Case=Gen	15	case	_	_
15	proglašenja	proglašenje	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	8	obl	_	_
16	neovisnosti	neovisnost	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	_
17	Kosova	Kosovo	PROPN	_	Case=Gen|Gender=Neut|Number=Sing	16	nmod	_	SpaceAfter=No
18	?	?	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	Najdraži	drag	ADJ	_	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Plur	2	amod	_	_
2	moji	moj	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur|Poss=Yes	7	vocative	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	danas	danas	ADV	_	Degree=Pos	7	advmod	_	_
5	mi	ja	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
6	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	7	obj	_	_
7	javila	javiti	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	čitateljica	čitateljica	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
9	iz	iz	ADP	_	Case=Gen	10	case	_	_
10	Melburnea	Melburne	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


