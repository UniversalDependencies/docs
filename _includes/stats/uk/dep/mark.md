

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

57 nodes (3%) are attached to their parents as `mark`.

55 instances of `mark` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82456140350877.

The following 13 pairs of parts of speech are connected with `mark`: [uk-pos/VERB]()-[uk-pos/SCONJ]() (34; 60% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (5; 9% instances), [uk-pos/VERB]()-[uk-pos/CONJ]() (4; 7% instances), [uk-pos/ADV]()-[uk-pos/SCONJ]() (3; 5% instances), [uk-pos/ADV]()-[uk-pos/PART]() (2; 4% instances), [uk-pos/VERB]()-[uk-pos/PART]() (2; 4% instances), [uk-pos/ADJ]()-[uk-pos/PART]() (1; 2% instances), [uk-pos/DET]()-[uk-pos/PART]() (1; 2% instances), [uk-pos/NOUN]()-[uk-pos/ADV]() (1; 2% instances), [uk-pos/PART]()-[uk-pos/PART]() (1; 2% instances), [uk-pos/PRON]()-[uk-pos/PART]() (1; 2% instances), [uk-pos/PRON]()-[uk-pos/SCONJ]() (1; 2% instances), [uk-pos/VERB]()-[uk-pos/DET]() (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	Микола	Микола	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	сказав	сказати	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	2	punct	_	_
4	що	що	SCONJ	conj:subord	_	6	mark	_	_
5	Хлопець	хлопець	NOUN	noun:anim:m:v_naz	Animacy=Anim|Case=Nom|Gender=Masc	6	nsubj	_	_
6	пішов	піти	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	2	ccomp	_	_
7	раніше	раніше	ADV	adv:compr	Degree=Cmp	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Пишу	писати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	тому	тому	ADV	adv:xp2:&pron:dem	PronType=Dem	5	mark	_	_
4	що	що	SCONJ	conj:subord	_	3	compound	_	_
5	обіцяла	обіцяти	VERB	verb:imperf:past:f	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	Чи	чи	CONJ	conj:coord	_	3	mark	_	_
2	я	я	PRON	noun:anim:s:v_naz:&pron:pers:1	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	сплю	спати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	чи	чи	CONJ	conj:coord	_	6	mark	_	_
5	то	то	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	6	discourse	_	_
6	сниться	снитися	VERB	verb:rev:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
7	мені	я	PRON	noun:anim:s:v_dav:&pron:pers:1	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	6	iobj	_	SpaceAfter=No
8	?	?	PUNCT	punct	_	3	punct	_	_

~~~


