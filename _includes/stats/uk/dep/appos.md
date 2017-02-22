

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

141 nodes (1%) are attached to their parents as `appos`.

141 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21985815602837.

The following 16 pairs of parts of speech are connected with `appos`: [uk-pos/NOUN]()-[uk-pos/NOUN]() (59; 42% instances), [uk-pos/NOUN]()-[uk-pos/PROPN]() (57; 40% instances), [uk-pos/PROPN]()-[uk-pos/NOUN]() (6; 4% instances), [uk-pos/NOUN]()-[uk-pos/ADJ]() (3; 2% instances), [uk-pos/PROPN]()-[uk-pos/VERB]() (3; 2% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (2; 1% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (2; 1% instances), [uk-pos/ADV]()-[uk-pos/NUM]() (1; 1% instances), [uk-pos/NOUN]()-[uk-pos/ADV]() (1; 1% instances), [uk-pos/NOUN]()-[uk-pos/DET]() (1; 1% instances), [uk-pos/NOUN]()-[uk-pos/PRON]() (1; 1% instances), [uk-pos/NUM]()-[uk-pos/NOUN]() (1; 1% instances), [uk-pos/NUM]()-[uk-pos/PROPN]() (1; 1% instances), [uk-pos/PRON]()-[uk-pos/ADJ]() (1; 1% instances), [uk-pos/PRON]()-[uk-pos/NOUN]() (1; 1% instances), [uk-pos/PRON]()-[uk-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	Ще	ще	ADV	R	_	2	advmod	_	_
2	видав	видати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	нотну	нотний	ADJ	Ao-fsas	Case=Acc|Gender=Fem	4	amod	_	_
4	збірку	збірка	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	2	obj	_	_
5	«	«	PUNCT	U	_	6	punct	_	SpaceAfter=No
6	Напівник	напівник	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Style=Odd	4	appos	_	_
7	церковний	церковний	ADJ	Ao-msnf	Case=Nom|Gender=Masc	6	amod	_	SpaceAfter=No
8	»	»	PUNCT	U	_	6	punct	_	SpaceAfter=No
9	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Сестра	сестра	NOUN	Ncfsny	Animacy=Anim|Case=Nom|Gender=Fem	6	nsubj	_	_
2	Віталія	Віталія	PROPN	Npfsny	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv	1	appos	_	_
3	була	бути	AUX	Vapis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
4	нашою	наш	DET	Ppp1f-sia	Case=Ins|Gender=Fem|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
5	далекою	далекий	ADJ	Afpfsif	Case=Ins|Degree=Pos|Gender=Fem	6	amod	_	_
6	родичкою	родичка	NOUN	Ncfsiy	Animacy=Anim|Case=Ins|Gender=Fem	0	root	_	_
7	по	по	ADP	Spsl	Case=Loc	8	case	_	_
8	лінії	лінія	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem	6	nmod	_	_
9	Ігнатія	Ігнатій	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	U	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	То	то	PART	Q	_	2	discourse	_	_
2	Ліна	Ліна	PROPN	Npfsny	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv	6	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	U	_	4	punct	_	_
4	сестра	сестра	NOUN	Ncfsny	Animacy=Anim|Case=Nom|Gender=Fem	2	appos	_	SpaceAfter=No
5	,	,	PUNCT	U	_	4	punct	_	_
6	просила	просити	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	вам	ви	PRON	Pp-2-ypdn	Animacy=Anim|Case=Dat|Number=Plur|Person=2|Polite=Form|PronType=Prs	8	obj	_	_
8	передати	передати	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	U	_	11	punct	_	_
10	я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	берегла	берегти	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	6	parataxis	_	_
12	до	до	ADP	Spsg	Case=Gen	13	case	_	_
13	Різдва	різдво	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut	11	obl	_	SpaceAfter=No
14	…	…	PUNCT	U	_	6	punct	_	_

~~~


