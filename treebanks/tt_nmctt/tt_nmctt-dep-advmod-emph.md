---
layout: base
title:  'Statistics of advmod:emph in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="tt_nmctt-dep-advmod.html">advmod</a></tt>.

2 nodes (0%) are attached to their parents as `advmod:emph`.

2 instances of `advmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (1; 50% instances).


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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 advmod:emph	color:blue
1	Үзебезнең	үз	PRON	_	Case=Gen|Number[psor]=Plur|Person[psor]=1	2	nmod	_	LangID=TT
2	тәбигать	тәбигать	NOUN	_	Case=Nom|Number=Sing	16	nsubj	_	LangID=TT|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	LangID=OTHER
4	кешеләр	кеше	NOUN	_	Case=Nom|Number=Plur	2	conj	_	LangID=TT|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	LangID=OTHER
6	аларның	алар	PRON	_	Case=Gen|Number=Plur|PronType=Prs	8	nmod	_	LangID=TT
7	эчке	эчке	ADJ	_	_	8	amod	_	LangID=TT
8	кичерешләре	кичереш	NOUN	_	Case=Nom|Number=Plur|Person[psor]=3	2	conj	_	LangID=TT|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	LangID=OTHER
10	тарихыбыз	тарих	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	2	conj	_	LangID=TT|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	LangID=OTHER
12	йолаларыбыз	йола	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=1	2	conj	_	LangID=TT
13	-	-	PUNCT	_	_	2	punct	_	LangID=OTHER
14	барысы	бары	PRON	_	Case=Nom|Person[psor]=3|PronType=Tot	2	appos	_	LangID=TT
15	да	да	ADV	_	_	14	advmod:emph	_	LangID=TT
16	фотода	фото	NOUN	_	Case=Loc|Number=Sing	0	root	_	CSPoint=фото§да|LangID=MIXED[RU§TT]|SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	_	LangID=OTHER

~~~


