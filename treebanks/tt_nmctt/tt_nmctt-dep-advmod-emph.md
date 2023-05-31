---
layout: base
title:  'Statistics of advmod:emph in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="tt_nmctt-dep-advmod.html">advmod</a></tt>.

7 nodes (0%) are attached to their parents as `advmod:emph`.

7 instances of `advmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 3 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (4; 57% instances), <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (2; 29% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 advmod:emph	color:blue
1	Шулай	шулай	ADV	_	_	7	advmod	_	LangID=TT
2	ук	ук	ADV	_	_	1	fixed	_	LangID=TT
3	кыска	кыска	ADJ	_	_	4	amod	_	LangID=TT
4	вакытлы	вакытлы	ADJ	_	_	5	amod	_	LangID=TT
5	яңгырлар	яңгыр	NOUN	_	Case=Nom|Number=Plur	7	nsubj	_	LangID=TT
6	да	да	ADV	_	_	5	advmod:emph	_	LangID=TT
7	булырга	бул	VERB	_	VerbForm=Inf	0	root	_	LangID=TT
8	мөмкин	мөмкин	AUX	_	_	7	aux	_	LangID=TT|SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Беркем	беркем	PRON	_	PronType=Neg	4	nsubj	_	LangID=TT
2	дә	дә	ADV	_	_	1	advmod:emph	_	LangID=TT
3	каршы	каршы	ADV	_	_	4	advmod	_	LangID=TT
4	килми	кил	VERB	_	Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod:emph	color:blue
1	Бәлки	бәлки	ADV	_	_	10	advmod	_	LangID=TT|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	LangID=OTHER
3	ике	ике	NUM	_	NumType=Card	4	nummod	_	LangID=TT
4	төрлесен	төрле	ADJ	_	Case=Acc|Number=Sing|Person[psor]=3	6	obj	_	LangID=TT
5	дә	дә	ADV	_	_	4	advmod:emph	_	LangID=TT
6	күрсәтеп	күрсәт	VERB	_	VerbForm=Conv	9	advcl	_	LangID=TT|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	LangID=OTHER
8	комбинация	комбинация	NOUN	_	Case=Nom|Number=Sing	9	obj	_	LangID=RU
9	ясау	яса	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	10	nsubj	_	LangID=TT
10	кирәктер	кирәк	ADJ	_	Mood=Irr	0	root	_	LangID=TT|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


