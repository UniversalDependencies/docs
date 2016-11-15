

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

12 nodes (1%) are attached to their parents as `acl`.

12 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75.

The following 6 pairs of parts of speech are connected with `acl`: [uk-pos/PRON]()-[uk-pos/VERB]() (4; 33% instances), [uk-pos/DET]()-[uk-pos/VERB]() (3; 25% instances), [uk-pos/NOUN]()-[uk-pos/ADV]() (2; 17% instances), [uk-pos/NOUN]()-[uk-pos/ADJ]() (1; 8% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (1; 8% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	Те	те	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	7	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	про	про	ADP	prep:rv_zna	Case=Acc	4	case	_	_
4	що	що	PRON	noun:inanim:n:v_zna:&pron:rel	Animacy=Inan|Case=Acc|Gender=Neut|PronType=Rel	5	nmod	_	_
5	розповідалося	розповідатися	VERB	verb:rev:imperf:past:n	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	1	acl	_	SpaceAfter=No
6	,	,	PUNCT	punct	_	1	punct	_	_
7	має	мати	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	сенс	сенс	NOUN	noun:inanim:m:v_zna	Animacy=Inan|Case=Acc|Gender=Masc	7	dobj	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Ті	той	DET	adj:p:v_naz:&pron:dem	Case=Nom|Number=Plur|PronType=Dem	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	4	punct	_	_
3	хто	хто	PRON	noun:anim:m:v_naz:&pron:rel	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Rel	4	nsubj	_	_
4	запізнився	запізнитися	VERB	verb:rev:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	1	acl	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	4	punct	_	_
6	мусять	мусити	VERB	verb:imperf:pres:p:3	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	чекати	чекати	VERB	verb:imperf:inf	Aspect=Imp|VerbForm=Inf	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Випадок	випадок	NOUN	noun:inanim:m:v_naz	Animacy=Inan|Case=Nom|Gender=Masc	0	root	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	_	_
3	який	який	DET	adj:m:v_naz:&pron:rel	Case=Nom|Gender=Masc|PronType=Rel	5	mark	_	_
4	треба	треба	ADV	adv	_	1	acl	_	_
5	дослідити	дослідити	VERB	verb:perf:inf	Aspect=Perf|VerbForm=Inf	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	1	punct	_	_

~~~


