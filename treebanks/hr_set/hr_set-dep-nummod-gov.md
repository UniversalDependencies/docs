---
layout: base
title:  'Statistics of nummod:gov in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-nummod.html">nummod</a></tt>.

29 nodes (0%) are attached to their parents as `nummod:gov`.

29 instances of `nummod:gov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31034482758621.

The following 2 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-NUM.html">NUM</a></tt> (26; 90% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-NUM.html">NUM</a></tt> (3; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nummod:gov	color:blue
1	Skica	skica	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	pokazuje	pokazivati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	jednu	jedan	NUM	Mlcfsa	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	5	nummod:gov	_	_
4	od	od	ADP	Sg	Case=Gen	5	case	_	_
5	galerija	galerija	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	2	obj	_	_
6	novog	nov	ADJ	Agpmsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	muzeja	muzej	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod:gov	color:blue
1	Oko	oko	ADV	Rgp	Degree=Pos	2	advmod	_	_
2	17	17	NUM	Mdc	NumType=Card	3	nummod:gov	_	_
3	posto	posto	ADV	Rgp	Degree=Pos	9	nsubj	_	_
4	srpskih	srpski	ADJ	Agpfpgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	_
5	tvrtki	tvrtka	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	3	nmod	_	_
6	trenutačno	trenutačno	ADV	Rgp	Degree=Pos	9	advmod	_	_
7	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	u	u	ADP	Sl	Case=Loc	9	case	_	_
9	vlasništvu	vlasništvo	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	0	root	_	_
10	žena	žena	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	9	nmod	_	_
11	ili	ili	CCONJ	Cc	_	14	cc	_	_
12	ih	oni	PRON	Pp3-pa	Case=Acc|Number=Plur|Person=3|PronType=Prs	14	obj	_	_
13	one	onaj	PRON	Pp3fpn	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	_
14	vode	voditi	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	conj	_	SpaceAfter=No
15	.	.	PUNCT	Z	_	9	punct	_	_

~~~


