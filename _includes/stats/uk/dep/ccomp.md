

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

33 nodes (2%) are attached to their parents as `ccomp`.

33 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96969696969697.

The following 6 pairs of parts of speech are connected with `ccomp`: [uk-pos/VERB]()-[uk-pos/VERB]() (27; 82% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (2; 6% instances), [uk-pos/ADV]()-[uk-pos/ADJ]() (1; 3% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (1; 3% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (1; 3% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Микола	Микола	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	сказав	сказати	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	:	:	PUNCT	punct	_	2	punct	_	_
4	“	“	PUNCT	punct	_	6	punct	_	SpaceAfter=No
5	Хлопець	хлопець	NOUN	noun:anim:m:v_naz	Animacy=Anim|Case=Nom|Gender=Masc	6	nsubj	_	_
6	пішов	піти	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	2	ccomp	_	_
7	раніше	раніше	ADV	adv:compr	Degree=Cmp	6	advmod	_	SpaceAfter=No
8	”	”	PUNCT	punct	_	6	punct	_	_
9	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 ccomp	color:blue
1	Проблема	проблема	NOUN	noun:inanim:f:v_naz	Animacy=Inan|Case=Nom|Gender=Fem	3	nsubj	_	_
2	у	у	ADP	prep:rv_mis:v-u	Case=Loc	3	case	_	_
3	тому	те	PRON	noun:inanim:n:v_mis:&pron:dem	Animacy=Inan|Case=Loc|Gender=Neut|PronType=Dem	0	root	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	_	_
5	що	що	SCONJ	conj:subord	_	10	mark	_	_
6	цього	це	PRON	noun:inanim:n:v_rod:&pron:dem	Animacy=Inan|Case=Gen|Gender=Neut|PronType=Dem	10	dobj	_	_
7	ніхто	ніхто	PRON	noun:anim:v_naz:&pron:neg	Animacy=Anim|Case=Nom|PronType=Neg	10	nsubj	_	_
8	навіть	навіть	PART	part	_	9	mark	_	_
9	не	не	PART	part	_	10	neg	_	_
10	пробував	пробувати	VERB	verb:imperf:past:m:xp1	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	1	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Мені	я	PRON	noun:anim:s:v_dav:&pron:pers:1	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	2	iobj	_	_
2	важливо	важливо	ADV	adv:compb	Degree=Pos	0	root	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	2	punct	_	_
4	щоб	щоб	PART	part	_	6	mark	_	_
5	був	бути	VERB	verb:imperf:past:m	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	6	auxpass	_	_
6	збережений	збережений	ADJ	adj:m:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	2	ccomp	_	_
7	спокій	спокій	NOUN	noun:inanim:m:v_naz	Animacy=Inan|Case=Nom|Gender=Masc	6	nsubjpass	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	_

~~~


