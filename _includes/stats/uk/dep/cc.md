

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

14 nodes (1%) are attached to their parents as `cc`.

14 instances of `cc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57142857142857.

The following 3 pairs of parts of speech are connected with `cc`: [uk-pos/VERB]()-[uk-pos/CONJ]() (8; 57% instances), [uk-pos/NOUN]()-[uk-pos/CONJ]() (4; 29% instances), [uk-pos/ADJ]()-[uk-pos/CONJ]() (2; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 cc	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 cc	color:blue
1	Маємо	мати	VERB	verb:imperf:pres:p:1	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	яблука	яблуко	NOUN	noun:inanim:p:n:v_zna	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	1	dobj	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	2	punct	_	_
4	груші	груша	NOUN	noun:inanim:p:f:v_zna	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	conj	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	2	punct	_	_
6	сливи	слива	NOUN	noun:inanim:p:f:v_zna	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	conj	_	_
7	і	і	CONJ	conj:coord	_	2	cc	_	_
8	малину	малина	NOUN	noun:inanim:f:v_zna	Animacy=Inan|Case=Acc|Gender=Fem	2	conj	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cc	color:blue
1	Павло	Павло	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	високий	високий	ADJ	adj:m:v_naz:compb	Case=Nom|Degree=Pos|Gender=Masc	0	root	_	_
3	і	і	CONJ	conj:coord	_	2	cc	_	_
4	чесний	чесний	ADJ	adj:m:v_naz:compb	Case=Nom|Degree=Pos|Gender=Masc	2	conj	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	2	punct	_	_

~~~


