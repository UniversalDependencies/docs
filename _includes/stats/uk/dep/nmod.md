

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

708 nodes (6%) are attached to their parents as `nmod`.

693 instances of `nmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.95621468926554.

The following 16 pairs of parts of speech are connected with `nmod`: [uk-pos/NOUN]()-[uk-pos/NOUN]() (609; 86% instances), [uk-pos/NOUN]()-[uk-pos/PROPN]() (55; 8% instances), [uk-pos/NOUN]()-[uk-pos/PRON]() (13; 2% instances), [uk-pos/PRON]()-[uk-pos/NOUN]() (13; 2% instances), [uk-pos/PRON]()-[uk-pos/PROPN]() (3; 0% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (2; 0% instances), [uk-pos/NOUN]()-[uk-pos/ADJ]() (2; 0% instances), [uk-pos/NUM]()-[uk-pos/NUM]() (2; 0% instances), [uk-pos/PRON]()-[uk-pos/PRON]() (2; 0% instances), [uk-pos/ADJ]()-[uk-pos/PROPN]() (1; 0% instances), [uk-pos/DET]()-[uk-pos/NOUN]() (1; 0% instances), [uk-pos/NOUN]()-[uk-pos/DET]() (1; 0% instances), [uk-pos/NOUN]()-[uk-pos/NUM]() (1; 0% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (1; 0% instances), [uk-pos/NUM]()-[uk-pos/NOUN]() (1; 0% instances), [uk-pos/PRON]()-[uk-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod	color:blue
1	За	за	ADP	Spsi	Case=Ins	2	case	_	_
2	роялем	рояль	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc	4	obl	_	_
3	нижче	нижче	ADV	Rc	Degree=Cmp	2	advmod	_	_
4	сидить	сидіти	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	трамп	Трамп	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc	4	nsubj	_	_
6	з	з	ADP	Spsi	Case=Ins	8	case	_	_
7	червоною	червоний	ADJ	Afpfsif	Case=Ins|Degree=Pos|Gender=Fem	8	amod	_	_
8	краваткою	краватка	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem	5	nmod	_	_
9	на	на	ADP	Spsl	Case=Loc	10	case	_	_
10	шиї	шия	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	U	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Омонівці	омонівець	NOUN	Ncmpny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
2	з	з	ADP	Spsg	Case=Gen	3	case	_	_
3	Одеси	Одеса	PROPN	Npfsgn	Animacy=Inan|Case=Gen|Gender=Fem	1	nmod	_	_
4	патрулювали	патрулювати	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
5	всі	весь	DET	Pg---npaa	Animacy=Inan|Case=Acc|Number=Plur|PronType=Tot	7	det	_	_
6	центральні	центральний	ADJ	Ao--pasn	Animacy=Inan|Case=Acc|Number=Plur	7	amod	_	_
7	вулиці	вулиця	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	4	obj	_	SpaceAfter=No
8	.	.	PUNCT	U	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	«	«	PUNCT	U	_	3	punct	_	SpaceAfter=No
2	Кому	хто	PRON	Pi--mysdn	Animacy=Anim|Case=Dat|Gender=Masc|PronType=Ind	3	nmod	_	_
3	страх	страх	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	0	root	_	_
4	смертний	смертний	ADJ	Ao-msnf	Case=Nom|Gender=Masc	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	U	_	7	punct	_	_
6	кому	хто	PRON	Pi--mysdn	Animacy=Anim|Case=Dat|Gender=Masc|PronType=Ind	7	nmod	_	_
7	сміх	сміх	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	3	parataxis	_	SpaceAfter=No
8	»	»	PUNCT	U	_	3	punct	_	SpaceAfter=No
9	.	.	PUNCT	U	_	3	punct	_	_

~~~


