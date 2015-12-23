

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [compound]().
There are also 1 other language-specific subtypes of `compound`: [compound:nn]().

256 nodes (0%) are attached to their parents as `compound:prt`.

213 instances of `compound:prt` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4296875.

The following 5 pairs of parts of speech are connected with `compound:prt`: [fi-pos/VERB]()-[fi-pos/ADV]() (235; 92% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (11; 4% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (6; 2% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (2; 1% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound:prt	color:blue
1	Ottakaa	ottaa	VERB	V	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	minut	minä	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	dobj	_	_
3	mukaan	mukaan	ADV	Adv	_	1	compound:prt	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	niin	niin	ADV	Adv	_	6	mark	_	_
6	saatte	saada	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
7	luotettavan	luotettava	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	8	amod	_	_
8	turvamiehen	turva#mies	NOUN	N	Case=Gen|Number=Sing	6	dobj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Lompakko	lompakko	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
2	mukaan	mukaan	ADV	Adv	_	1	compound:prt	_	_
3	mikroaaltouunin	mikro#aalto#uuni	NOUN	N	Case=Gen|Number=Sing	1	nmod	_	_
4	päältä	päältä	ADP	Adp	AdpType=Post	3	case	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Moni	moni	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	2	det	_	_
2	yhtiö	yhtiö	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
3	ottikin	ottaa	VERB	V	Clitic=Kin|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	vaarin	vaari	NOUN	N	Case=Gen|Number=Sing	3	compound:prt	_	_
5	analyytikkojen	analyytikko	NOUN	N	Case=Gen|Number=Plur	6	nmod:poss	_	_
6	ohjeista	ohje	NOUN	N	Case=Ela|Number=Plur	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


