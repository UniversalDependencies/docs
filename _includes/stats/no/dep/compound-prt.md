

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is a language-specific subtype of [compound]().

2308 nodes (1%) are attached to their parents as `compound:prt`.

2220 instances of `compound:prt` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.61915077989601.

The following 1 pairs of parts of speech are connected with `compound:prt`: [no-pos/VERB]()-[no-pos/ADP]() (2308; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	høre	høre	VERB	_	VerbForm=Inf	3	advcl	_	_
6	på	på	ADP	_	_	5	compound:prt	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	3	punct	_	SpaceAfter=No
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is a language-specific subtype of [compound]().

2585 nodes (1%) are attached to their parents as `compound:prt`.

2522 instances of `compound:prt` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62630560928433.

The following 1 pairs of parts of speech are connected with `compound:prt`: [no-pos/VERB]()-[no-pos/ADP]() (2585; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Varm	varme	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	opp	opp	ADP	_	_	1	compound:prt	_	_
3	steikepanna	steikepanne	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	1	obj	_	SpaceAfter=No
4	,	$,	PUNCT	_	_	1	punct	_	_
5	og	og	CCONJ	_	_	6	cc	_	_
6	ha	ha	VERB	_	Mood=Imp|VerbForm=Fin	1	conj	_	_
7	i	i	ADP	_	_	6	compound:prt	_	_
8	smør	smør	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	obj	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	1	punct	_	_

~~~


