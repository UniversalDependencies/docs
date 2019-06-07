---
layout: base
title:  'Statistics of parataxis in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `parataxis`

This relation is universal.

79 nodes (1%) are attached to their parents as `parataxis`.

69 instances of `parataxis` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.45569620253165.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (40; 51% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (12; 15% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-X.html">X</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-X.html">X</a></tt>-<tt><a href="orv_rnc-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 parataxis	color:blue
1	А	а	CCONJ	_	_	3	cc	_	_
2	судие	судия	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	_
3	слати	слати	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
4	тобѣ	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	3	iobj	_	_
5	свое	свой	DET	_	Case=Acc|Gender=Masc|Number=Plur|Poss=Yes	2	det	_	_
6	на	на	ADP	_	_	8	case	_	_
7	Петровъ	петровъ	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	8	amod	_	_
8	день	день	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	тако	тако	ADV	_	Degree=Pos	11	advmod	_	_
11	пошло	пойти	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes	3	parataxis	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis	color:blue
1	{	{	PUNCT	OOV	_	2	punct	_	SpaceAfter=No
2	л.	_	X	_	_	5	parataxis	_	_
3	3	_	X	_	_	2	dep	_	SpaceAfter=No
4	}	}	PUNCT	OOV	_	2	punct	_	_
5	Написано	написати	VERB	OOV|Transit=Tran	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	в	въ	ADP	_	_	7	case	_	_
7	доклад	докладъ	NOUN	OOV|Animacy[lex]=Inan	Case=Acc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	а	а	CCONJ	_	_	4	cc	_	_
2	при	при	ADP	_	_	3	case	_	_
3	тѡм	тотъ	DET	_	Case=Loc|Gender=Neut|Number=Sing	4	obl	_	_
4	далъ	дати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	0	root	_	_
5	Арахипꙋ	Арахипъ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	4	nsubj	_	_
6	припись	припись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	parataxis	_	_
7	моя	мой	DET	_	Case=Nom|Gender=Fem|Number=Sing|Poss=Yes	8	det	_	_
8	рꙋка	рука	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	parataxis	_	_

~~~


