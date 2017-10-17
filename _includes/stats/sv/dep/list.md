

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

5 nodes (0%) are attached to their parents as `list`.

5 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 3 pairs of parts of speech are connected with `list`: [sv-pos/NOUN]()-[sv-pos/NUM]() (3; 60% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1; 20% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 list	color:blue
1	Polygyni	polygyni	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
2	...	...	PUNCT	MID	_	1	punct	_	_
3	193	193	NUM	RG|NOM	Case=Nom|NumType=Card	1	list	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 list	color:blue
1	Säkra	säker	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	uppgifter	uppgift	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj:pass	_	_
3	saknas	sakna	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	...	...	PUNCT	MID	_	3	punct	_	_
5	12	12	NUM	RG|NOM	Case=Nom|NumType=Card	3	list	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 list	color:blue
1	Monogami	monogami	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
2	...	...	PUNCT	MID	_	1	punct	_	_
3	43	43	NUM	RG|NOM	Case=Nom|NumType=Card	4	nummod	_	_
4	samhällen	samhälle	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	1	list	_	_

~~~


