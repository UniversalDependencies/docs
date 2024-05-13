---
layout: base
title:  'Statistics of iobj in UD_Upper_Sorbian-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Upper_Sorbian-UFAL: Relations: `iobj`

This relation is universal.

14 nodes (0%) are attached to their parents as `iobj`.

7 instances of `iobj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35714285714286.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb_ufal-pos-NOUN.html">NOUN</a></tt> (8; 57% instances), <tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb_ufal-pos-PRON.html">PRON</a></tt> (3; 21% instances), <tt><a href="hsb_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hsb_ufal-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb_ufal-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="hsb_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb_ufal-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 iobj	color:blue
1	Na	na	ADP	_	_	2	case	_	_
2	spočatku	spočatk	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	_	_
3	słužeše	słužić	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	pismo	pismo	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
5	jenož	jenož	PART	_	_	6	advmod:emph	_	_
6	knihiwjedstwu	knihiwjedstwo	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	3	iobj	_	SpaceAfter=No
7	-	-	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Pomhaj	pomhać	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	nam	ja	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	1	iobj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	9	punct	_	_
4	zo	zo	SCONJ	_	_	9	mark	_	_
5	by	być	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	9	aux	_	_
6	naša	naš	DET	_	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
7	encyklopedija	encyklopedija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
8	dale	daloko	ADV	_	Degree=Cmp	9	advmod	_	_
9	rostła	rosć	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	advcl	_	SpaceAfter=No
10	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
1	Po	po	ADP	_	_	2	case	_	_
2	tym	to	PRON	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	13	obl	_	_
3	zo	zo	SCONJ	_	_	11	mark	_	_
4	wona	wón	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
5	bě	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	cop	_	_
6	přez	přez	ADP	_	_	8	case	_	_
7	pjatnaće	pjatnaće	NUM	_	NumType=Card	8	nummod:gov	_	_
8	lětow	lěto	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	11	nmod	_	_
9	Ludowemu	ludowy	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	zwjazkej	zwjazk	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	11	iobj	_	_
11	podstajena	podstajeny	ADJ	_	Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	2	acl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	wróćiła	wróćić	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
14	w	w	ADP	_	_	15	case	_	_
15	lětu	lěto	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	13	obl	_	_
16	1935	1935	NUM	_	NumType=Card	15	nummod	_	_
17	do	do	ADP	_	_	19	case	_	_
18	Němskeho	němski	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	reicha	reich	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	13	punct	_	_

~~~


