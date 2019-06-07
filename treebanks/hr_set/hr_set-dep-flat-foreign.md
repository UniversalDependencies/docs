---
layout: base
title:  'Statistics of flat:foreign in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-flat.html">flat</a></tt>.

117 nodes (0%) are attached to their parents as `flat:foreign`.

61 instances of `flat:foreign` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75213675213675.

The following 8 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="hr_set-pos-X.html">X</a></tt>-<tt><a href="hr_set-pos-X.html">X</a></tt> (90; 77% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-X.html">X</a></tt> (9; 8% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt> (6; 5% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-X.html">X</a></tt> (4; 3% instances), <tt><a href="hr_set-pos-X.html">X</a></tt>-<tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="hr_set-pos-X.html">X</a></tt>-<tt><a href="hr_set-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 flat:foreign	color:blue
1	Klape	Klape	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	pjevaju	pjevati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	u	u	ADP	Sl	Case=Loc	6	case	_	_
4	a	a	X	Xf	_	5	flat:foreign	_	_
5	capella	capella	X	Xf	_	6	flat:foreign	_	_
6	formi	forma	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	2	obl	_	_
7	bez	bez	ADP	Sg	Case=Gen	9	case	_	_
8	instrumentalne	instrumentalan	ADJ	Agpfsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	pratnje	pratnja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 flat:foreign	color:blue
1	Klape	Klape	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	pjevaju	pjevati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	u	u	ADP	Sl	Case=Loc	6	case	_	_
4	a	a	X	Xf	_	5	flat:foreign	_	_
5	capella	capella	X	Xf	_	6	flat:foreign	_	_
6	formi	forma	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	2	obl	_	_
7	bez	bez	ADP	Sg	Case=Gen	9	case	_	_
8	instrumentalne	instrumentalan	ADJ	Agpfsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	pratnje	pratnja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 flat:foreign	color:blue
1	SZO	SZO	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	nasljednica	nasljednica	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	Zdravstvene	zdravstven	ADJ	Agpfsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	compound	_	_
5	organizacije	organizacija	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	ToDo=nmod
6	(	(	PUNCT	Z	_	9	punct	_	SpaceAfter=No
7	engleski	engleski	ADV	Rgp	Degree=Pos	9	advmod	_	_
8	Health	Health	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	9	flat:foreign	_	_
9	Organisation	Organisation	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	5	appos	_	SpaceAfter=No
10	)	)	PUNCT	Z	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	Z	_	12	punct	_	_
12	agencije	agencija	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	5	appos	_	_
13	Lige	liga	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
14	naroda	narod	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	13	compound	_	SpaceAfter=No
15	.	.	PUNCT	Z	_	3	punct	_	_

~~~


