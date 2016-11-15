

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

22 nodes (1%) are attached to their parents as `discourse`.

21 instances of `discourse` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36363636363636.

The following 13 pairs of parts of speech are connected with `discourse`: [uk-pos/VERB]()-[uk-pos/PART]() (8; 36% instances), [uk-pos/PRON]()-[uk-pos/PART]() (2; 9% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (2; 9% instances), [uk-pos/ADJ]()-[uk-pos/CONJ]() (1; 5% instances), [uk-pos/ADJ]()-[uk-pos/PART]() (1; 5% instances), [uk-pos/ADV]()-[uk-pos/CONJ]() (1; 5% instances), [uk-pos/ADV]()-[uk-pos/PRON]() (1; 5% instances), [uk-pos/NOUN]()-[uk-pos/ADV]() (1; 5% instances), [uk-pos/NOUN]()-[uk-pos/INTJ]() (1; 5% instances), [uk-pos/NOUN]()-[uk-pos/PART]() (1; 5% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (1; 5% instances), [uk-pos/VERB]()-[uk-pos/CONJ]() (1; 5% instances), [uk-pos/VERB]()-[uk-pos/INTJ]() (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 discourse	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	Василю	Василь	PROPN	noun:anim:m:v_kly:prop:fname	Animacy=Anim|Case=Voc|Gender=Masc	7	vocative	_	_
2	Петровичу	Петрович	PROPN	noun:anim:m:v_kly:prop:patr	Animacy=Anim|Case=Voc|Gender=Masc	1	name	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	1	punct	_	_
4	ну	ну	PART	part	_	5	discourse	_	_
5	що	що	PRON	noun:inanim:n:v_naz:&pron:int	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Int	0	root	_	_
6	це	це	PART	part	_	5	discourse	_	_
7	Ви	ви	PRON	noun:anim:p:v_kly:&pron:pers:2	Animacy=Anim|Case=Voc|Number=Plur|Person=2|PronType=Prs	5	nsubj	_	SpaceAfter=No
8	?	?	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 discourse	color:blue
1	Чи	чи	CONJ	conj:coord	_	3	mark	_	_
2	я	я	PRON	noun:anim:s:v_naz:&pron:pers:1	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	сплю	спати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	чи	чи	CONJ	conj:coord	_	6	mark	_	_
5	то	то	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	6	discourse	_	_
6	сниться	снитися	VERB	verb:rev:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
7	мені	я	PRON	noun:anim:s:v_dav:&pron:pers:1	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	6	iobj	_	SpaceAfter=No
8	?	?	PUNCT	punct	_	3	punct	_	_

~~~


