

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.
There are 1 language-specific subtypes of `det`: [det:numgov]().

25 nodes (1%) are attached to their parents as `det`.

24 instances of `det` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12.

The following 4 pairs of parts of speech are connected with `det`: [uk-pos/NOUN]()-[uk-pos/DET]() (19; 76% instances), [uk-pos/ADJ]()-[uk-pos/DET]() (3; 12% instances), [uk-pos/PROPN]()-[uk-pos/DET]() (2; 8% instances), [uk-pos/NOUN]()-[uk-pos/NUM]() (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Маріє	Марія	PROPN	noun:anim:f:v_kly:prop:fname	Animacy=Anim|Case=Voc|Gender=Fem	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	як	як	ADV	adv:&pron:int	PronType=Int	5	advmod	_	_
4	Ваші	ваш	DET	adj:p:v_naz:poss:&pron:pers:2	Case=Nom|Number=Plur|Person=2|Poss=Yes|PronType=Prs	5	det	_	_
5	справи	справа	NOUN	noun:inanim:p:f:v_naz	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
6	?	?	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Його	його	DET	adj:f:v_naz:poss:nv:&pron:pers:3	Case=Nom|Gender=Fem|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	мила	милий	ADJ	adj:f:v_naz:compb	Case=Nom|Degree=Pos|Gender=Fem	3	nsubj	_	_
3	вдома	вдома	ADV	adv:v-u	_	0	root	_	SpaceAfter=No
4	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	С’юзі	С’юзі	PROPN	noun:anim:f:v_kly:prop:fname	Animacy=Anim|Case=Voc|Gender=Fem	8	vocative	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	мила	милий	ADJ	adj:f:v_kly:compb	Case=Voc|Degree=Pos|Gender=Fem	5	amod	_	_
4	моя	мій	DET	adj:f:v_kly:poss:&pron:pers:1	Case=Voc|Gender=Fem|Person=1|Poss=Yes|PronType=Prs	5	det	_	_
5	С’юзі	С’юзі	PROPN	noun:anim:f:v_kly:prop:fname	Animacy=Anim|Case=Voc|Gender=Fem	1	appos	_	SpaceAfter=No
6	,	,	PUNCT	punct	_	5	punct	_	_
7	не	не	PART	part	_	8	neg	_	_
8	втікай	втікати	VERB	verb:imperf:impr:s:2:v-u	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
9	від	від	ADP	prep:rv_rod	Case=Gen	10	case	_	_
10	мене	я	PRON	noun:anim:s:v_rod:&pron:pers:1	Animacy=Anim|Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nmod	_	_
11	в	в	ADP	prep:rv_zna:v-u	Case=Acc	12	case	_	_
12	світ	світ	NOUN	noun:inanim:m:v_zna	Animacy=Inan|Case=Acc|Gender=Masc	8	nmod	_	_
13	своїх	свій	DET	adj:p:v_rod:poss:&pron:refl	Case=Gen|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	14	det	_	_
14	ілюзій	ілюзія	NOUN	noun:inanim:p:f:v_rod	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	8	punct	_	_

~~~


