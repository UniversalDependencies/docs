

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

2 nodes (0%) are attached to their parents as `expl`.

1 instances of `expl` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `expl`: [uk-pos/VERB]()-[uk-pos/PART]() (1; 50% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	Мартин	Мартин	PROPN	noun:anim:m:v_naz:prop:fname:xp1	Animacy=Anim|Case=Nom|Gender=Masc	3	nsubj	_	_
2	ся	ся	PART	part:rare	_	3	expl	_	_
3	боїть	боїть	VERB	verb:rev:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	собак	собака	NOUN	noun:anim:p:m:v_rod:xp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	3	dobj	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl	color:blue
1	Хлопець	хлопець	NOUN	noun:anim:m:v_naz	Animacy=Anim|Case=Nom|Gender=Masc	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	3	punct	_	_
3	сказав	сказати	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	6	parataxis	_	_
4	Микола	Микола	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	3	punct	_	_
6	пішов	піти	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	собі	себе	PRON	noun:v_dav:&pron:refl	Case=Dat|PronType=Prs|Reflex=Yes	6	expl	_	_
8	раніше	раніше	ADV	adv:compr	Degree=Cmp	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	6	punct	_	_

~~~


