

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

157 nodes (9%) are attached to their parents as `nsubj`.

136 instances of `nsubj` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75796178343949.

The following 17 pairs of parts of speech are connected with `nsubj`: [uk-pos/VERB]()-[uk-pos/PRON]() (68; 43% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (37; 24% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (16; 10% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (8; 5% instances), [uk-pos/NOUN]()-[uk-pos/PRON]() (8; 5% instances), [uk-pos/PRON]()-[uk-pos/PRON]() (4; 3% instances), [uk-pos/VERB]()-[uk-pos/DET]() (4; 3% instances), [uk-pos/ADJ]()-[uk-pos/PRON]() (2; 1% instances), [uk-pos/ADV]()-[uk-pos/PRON]() (2; 1% instances), [uk-pos/ADJ]()-[uk-pos/DET]() (1; 1% instances), [uk-pos/ADJ]()-[uk-pos/PROPN]() (1; 1% instances), [uk-pos/ADV]()-[uk-pos/ADJ]() (1; 1% instances), [uk-pos/ADV]()-[uk-pos/NOUN]() (1; 1% instances), [uk-pos/NOUN]()-[uk-pos/PROPN]() (1; 1% instances), [uk-pos/NUM]()-[uk-pos/NOUN]() (1; 1% instances), [uk-pos/PART]()-[uk-pos/NOUN]() (1; 1% instances), [uk-pos/PRON]()-[uk-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Чи	чи	CONJ	conj:coord	_	3	mark	_	_
2	я	я	PRON	noun:anim:s:v_naz:&pron:pers:1	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	сплю	спати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	чи	чи	CONJ	conj:coord	_	6	mark	_	_
5	то	то	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	6	discourse	_	_
6	сниться	снитися	VERB	verb:rev:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
7	мені	я	PRON	noun:anim:s:v_dav:&pron:pers:1	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	6	iobj	_	SpaceAfter=No
8	?	?	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
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


