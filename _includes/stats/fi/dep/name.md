

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

2574 nodes (1%) are attached to their parents as `name`.

2574 instances of `name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5994560994561.

The following 32 pairs of parts of speech are connected with `name`: [fi-pos/PROPN]()-[fi-pos/PROPN]() (2264; 88% instances), [fi-pos/SYM]()-[fi-pos/SYM]() (72; 3% instances), [fi-pos/PROPN]()-[fi-pos/ADJ]() (56; 2% instances), [fi-pos/PROPN]()-[fi-pos/PUNCT]() (30; 1% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (24; 1% instances), [fi-pos/X]()-[fi-pos/X]() (14; 1% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (13; 1% instances), [fi-pos/SYM]()-[fi-pos/NUM]() (13; 1% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (11; 0% instances), [fi-pos/PROPN]()-[fi-pos/SYM]() (10; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (9; 0% instances), [fi-pos/ADJ]()-[fi-pos/SYM]() (8; 0% instances), [fi-pos/X]()-[fi-pos/PUNCT]() (8; 0% instances), [fi-pos/PROPN]()-[fi-pos/X]() (7; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (5; 0% instances), [fi-pos/PUNCT]()-[fi-pos/PROPN]() (5; 0% instances), [fi-pos/PUNCT]()-[fi-pos/PUNCT]() (3; 0% instances), [fi-pos/SYM]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/X]()-[fi-pos/SYM]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/PUNCT]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/PUNCT]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/SYM]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/SYM]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PUNCT]() (1; 0% instances), [fi-pos/X]()-[fi-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 name	color:blue
1	The	The	PROPN	N	_	0	root	_	_
2	Garden	Garden	PROPN	N	_	1	name	_	_
3	Collection	Collection	PROPN	N	_	1	name	_	_
4	by	by	PROPN	N	_	1	name	_	_
5	H&M	H&M	PROPN	N	Abbr=Yes|Case=Nom|Number=Sing	1	name	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 name	color:blue
1	Kuningasgambiitti	kuningas#gambiitti	NOUN	N	Case=Nom|Number=Sing	2	compound:nn	_	_
2	1.e4	1.e4	SYM	Symb	_	6	nsubj:cop	_	_
3	e5	e5	SYM	Symb	_	2	name	_	_
4	2.f4	2.f4	SYM	Symb	_	2	name	_	_
5	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	yksi	yksi	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	0	root	_	_
7	shakin	shakki	NOUN	N	Case=Gen|Number=Sing	8	nmod:poss	_	_
8	avauksista	avaus	NOUN	N	Case=Ela|Number=Plur	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 name	color:blue
1	Keisari	keisari	NOUN	N	Case=Nom|Number=Sing	2	compound:nn	_	_
2	Pedro	Pedro	PROPN	N	_	4	dobj	_	_
3	II	II	ADJ	Num	NumType=Ord	2	name	_	_
4	kukistettiin	kukistaa	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	sotilasvallankaappauksessa	sotilas#vallan#kaappaus	NOUN	N	Case=Ine|Number=Sing	4	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


