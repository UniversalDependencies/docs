

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

15 nodes (1%) are attached to their parents as `conj`.

15 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.6.

The following 5 pairs of parts of speech are connected with `conj`: [uk-pos/NOUN]()-[uk-pos/NOUN]() (6; 40% instances), [uk-pos/VERB]()-[uk-pos/VERB]() (5; 33% instances), [uk-pos/ADJ]()-[uk-pos/ADJ]() (2; 13% instances), [uk-pos/CONJ]()-[uk-pos/NOUN]() (1; 7% instances), [uk-pos/CONJ]()-[uk-pos/VERB]() (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 conj	color:blue
1	Сиджу	сидіти	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	на	на	ADP	prep:rv_mis	Case=Loc	3	case	_	_
3	парах	пара	NOUN	noun:inanim:p:f:v_mis	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	1	nmod	_	_
4	і	і	CONJ	conj:coord	_	1	cc	_	_
5	не	не	PART	part	_	6	neg	_	_
6	знаю	знати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	conj	_	SpaceAfter=No
7	,	,	PUNCT	punct	_	6	punct	_	_
8	чи	чи	CONJ	conj:coord	_	11	mark	_	_
9	то	то	PART	part	_	11	discourse	_	_
10	я	я	PRON	noun:anim:s:v_naz:&pron:pers:1	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	сплю	спати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	ccomp	_	SpaceAfter=No
12	,	,	PUNCT	punct	_	11	punct	_	_
13	чи	чи	CONJ	conj:coord	_	15	mark	_	_
14	то	то	PART	part	_	15	discourse	_	_
15	дрімаю	дрімати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	parataxis	_	SpaceAfter=No
16	…	…	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	Павло	Павло	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	високий	високий	ADJ	adj:m:v_naz:compb	Case=Nom|Degree=Pos|Gender=Masc	0	root	_	_
3	і	і	CONJ	conj:coord	_	2	cc	_	_
4	чесний	чесний	ADJ	adj:m:v_naz:compb	Case=Nom|Degree=Pos|Gender=Masc	2	conj	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	2	punct	_	_

~~~


