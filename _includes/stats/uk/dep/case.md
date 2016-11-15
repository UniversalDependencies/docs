

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

84 nodes (5%) are attached to their parents as `case`.

83 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38095238095238.

The following 8 pairs of parts of speech are connected with `case`: [uk-pos/NOUN]()-[uk-pos/ADP]() (54; 64% instances), [uk-pos/PRON]()-[uk-pos/ADP]() (15; 18% instances), [uk-pos/ADJ]()-[uk-pos/ADP]() (6; 7% instances), [uk-pos/ADV]()-[uk-pos/ADP]() (2; 2% instances), [uk-pos/DET]()-[uk-pos/ADP]() (2; 2% instances), [uk-pos/PROPN]()-[uk-pos/ADP]() (2; 2% instances), [uk-pos/VERB]()-[uk-pos/ADP]() (2; 2% instances), [uk-pos/NUM]()-[uk-pos/ADP]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	Богдан	Богдан	PROPN	noun:anim:m:v_naz:prop:fname:xp1	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	живе	жити	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	у	у	ADP	prep:rv_mis:v-u	Case=Loc	4	case	_	_
4	Києві	Київ	PROPN	noun:inanim:m:v_mis:prop	Animacy=Inan|Case=Loc|Gender=Masc	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	2	punct	_	_
6	а	а	CONJ	conj:coord	_	2	cc	_	_
7	Ніна	Ніна	PROPN	noun:anim:f:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Fem	1	remnant	_	_
8	у	у	ADP	prep:rv_mis:v-u	Case=Loc	9	case	_	_
9	Сумах	сума	NOUN	noun:inanim:p:f:v_mis	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	4	remnant	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	За	за	ADP	prep:rv_oru	Case=Ins	2	case	_	_
2	старим	старий	ADJ	adj:m:v_oru:compb	Case=Ins|Degree=Pos|Gender=Masc	3	nmod	_	_
3	стояла	стояти	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	Христина	Христина	PROPN	noun:anim:f:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Fem	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	4	punct	_	_
6	його	його	DET	adj:f:v_naz:poss:nv:&pron:pers:3	Case=Nom|Gender=Fem|Person=3|Poss=Yes|PronType=Prs	8	det	_	_
7	гарна	гарний	ADJ	adj:f:v_naz:compb	Case=Nom|Degree=Pos|Gender=Fem	8	amod	_	_
8	онука	онука	NOUN	noun:anim:f:v_naz	Animacy=Anim|Case=Nom|Gender=Fem	4	appos	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	3	punct	_	_

~~~


