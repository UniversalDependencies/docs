

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

798 nodes (6%) are attached to their parents as `nmod`.

760 instances of `nmod` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28070175438596.

The following 34 pairs of parts of speech are connected with `nmod`: [ga-pos/NOUN]()-[ga-pos/NOUN]() (560; 70% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (46; 6% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (39; 5% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (39; 5% instances), [ga-pos/NOUN]()-[ga-pos/X]() (15; 2% instances), [ga-pos/NUM]()-[ga-pos/NOUN]() (14; 2% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (9; 1% instances), [ga-pos/ADP]()-[ga-pos/PROPN]() (8; 1% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (6; 1% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (5; 1% instances), [ga-pos/CCONJ]()-[ga-pos/NOUN]() (5; 1% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (5; 1% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (4; 1% instances), [ga-pos/PROPN]()-[ga-pos/PRON]() (4; 1% instances), [ga-pos/X]()-[ga-pos/NOUN]() (4; 1% instances), [ga-pos/X]()-[ga-pos/NUM]() (4; 1% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (3; 0% instances), [ga-pos/NUM]()-[ga-pos/X]() (3; 0% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (3; 0% instances), [ga-pos/X]()-[ga-pos/X]() (3; 0% instances), [ga-pos/ADP]()-[ga-pos/X]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (2; 0% instances), [ga-pos/PUNCT]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/X]()-[ga-pos/PROPN]() (2; 0% instances), [ga-pos/CCONJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (1; 0% instances), [ga-pos/NUM]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/NUM]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/PUNCT]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	Bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	0	root	_	_
2	cop-on	cop-on	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
3	ar	ar	ADP	Simp	_	4	case	_	_
4	bith	bith	NOUN	Subst	Number=Sing	2	nmod	_	_
5	a'	ag	ADP	Simp	_	6	case	_	_
6	t	t	X	Item	_	1	compound	_	SpaceAfter=No
7	?	?	PUNCT	?	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	As	as	ADP	Simp	_	0	root	_	_
2	ucht	ucht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	_
3	Dé	dia	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	2	compound	_	_
4	oraibh	ar	ADP	Prep	Number=Plur|Person=2	6	case	_	SpaceAfter=No
5	...	...	PUNCT	Punct	_	6	punct	_	_
6	Athbheochan	athbheochan	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	nmod	_	_
7	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Gaeilge	Gaeilge	PROPN	Noun	Case=Gen|Gender=Fem|Number=Sing	6	compound	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 nmod	color:blue
1	Limistéar	limistéar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Meánmhara	muir	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	compound	_	_
4	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	ccomp	_	_
6	dúcháis	dúchas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	5	compound	_	_
7	don	do	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
8	Rós	Rós	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	_
9	Mhuire	Muire	PROPN	Noun	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


