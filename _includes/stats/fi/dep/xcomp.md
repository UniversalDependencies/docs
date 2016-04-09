

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: [xcomp:ds]().

2307 nodes (1%) are attached to their parents as `xcomp`.

2199 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.60988296488947.

The following 9 pairs of parts of speech are connected with `xcomp`: [fi-pos/VERB]()-[fi-pos/VERB]() (1729; 75% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (396; 17% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (136; 6% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (19; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (8; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (8; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (7; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Lopulta	lopulta	ADV	Adv	_	2	advmod	_	_
2	saatiin	saada	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	halikuva	hali#kuva	NOUN	N	Case=Nom|Number=Sing	4	dobj	_	_
4	otettua	ottaa	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Meillä	minä	PRON	Pron	Case=Ade|Number=Plur|Person=1|PronType=Prs	2	nmod	_	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	aika	aika	ADV	Adv	_	4	advmod	_	_
4	kesäistä	kesäinen	ADJ	A	Case=Par|Degree=Pos|Number=Sing	2	xcomp	_	_
5	:)	:)	SYM	Symb	_	2	discourse	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Joten	joten	ADV	Adv	_	4	advmod	_	_
2	tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	6:nsubj:cop	_
3	ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	neg	_	_
4	tule	tulla	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	olemaan	olla	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	6	cop	_	_
6	kynnys	kynnys	NOUN	N	Case=Nom|Number=Sing	4	xcomp	_	_
7	tiellä	tie	NOUN	N	Case=Ade|Number=Sing	6	nmod	_	_
8	makkaranvalmistukseen	makkara#valmistus	NOUN	N	Case=Ill|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


