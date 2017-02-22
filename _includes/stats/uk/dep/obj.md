

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

661 nodes (5%) are attached to their parents as `obj`.

499 instances of `obj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.09984871406959.

The following 12 pairs of parts of speech are connected with `obj`: [uk-pos/VERB]()-[uk-pos/NOUN]() (473; 72% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (141; 21% instances), [uk-pos/VERB]()-[uk-pos/DET]() (15; 2% instances), [uk-pos/ADV]()-[uk-pos/PRON]() (7; 1% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (7; 1% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (6; 1% instances), [uk-pos/NOUN]()-[uk-pos/PRON]() (5; 1% instances), [uk-pos/ADJ]()-[uk-pos/PRON]() (2; 0% instances), [uk-pos/VERB]()-[uk-pos/ADJ]() (2; 0% instances), [uk-pos/ADV]()-[uk-pos/NOUN]() (1; 0% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (1; 0% instances), [uk-pos/PROPN]()-[uk-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	Голова	голова	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem	2	nsubj	_	_
2	витягає	витягати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	бриту	бритий	ADJ	Ap-fsas-pp	Aspect=Imp|Case=Acc|Gender=Fem|VerbForm=Part|Voice=Pass	4	amod	_	_
4	бороду	борода	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	2	obj	_	_
5	вперед	вперед	ADV	R	_	2	advmod	_	SpaceAfter=No
6	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Їх	вони	PRON	Pp-3--pan	Case=Acc|Number=Plur|Person=3|PronType=Prs	2	obj	_	_
2	частують	частувати	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	коктейлем	коктейль	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc	2	iobj	_	SpaceAfter=No
4	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obj	color:blue
1	3	3	NUM	Mlc	NumType=Card	0	root	_	SpaceAfter=No
2	.	.	PUNCT	U	_	1	punct	_	_
3	Переклади	переклад	NOUN	Ncmpnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	1	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	U	_	8	punct	_	_
5	про	про	ADP	Spsa	Case=Acc	6	case	_	_
6	які	який	DET	Pr---npaa	Animacy=Inan|Case=Acc|Number=Plur|PronType=Rel	8	obj	_	_
7	Ви	ви	PRON	Pp-2-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=2|Polite=Form|PronType=Prs	8	nsubj	_	_
8	пишете	писати	VERB	Vmpip2p	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	acl	_	SpaceAfter=No
9	.	.	PUNCT	U	_	1	punct	_	_

~~~


