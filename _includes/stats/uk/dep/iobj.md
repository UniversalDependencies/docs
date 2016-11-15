

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

17 nodes (1%) are attached to their parents as `iobj`.

11 instances of `iobj` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05882352941176.

The following 6 pairs of parts of speech are connected with `iobj`: [uk-pos/VERB]()-[uk-pos/NOUN]() (5; 29% instances), [uk-pos/ADV]()-[uk-pos/PRON]() (4; 24% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (4; 24% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (2; 12% instances), [uk-pos/ADJ]()-[uk-pos/NUM]() (1; 6% instances), [uk-pos/VERB]()-[uk-pos/NUM]() (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Квіти	квіти	NOUN	noun:inanim:p:v_naz:ns	Animacy=Inan|Case=Nom|Number=Plur	2	nsubj	_	_
2	запилюються	запилюватися	VERB	verb:rev:imperf:pres:p:3	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	бджолами	бджола	NOUN	noun:anim:p:f:v_oru	Animacy=Anim|Case=Ins|Gender=Fem|Number=Plur	2	iobj	_	SpaceAfter=No
4	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Мені	я	PRON	noun:anim:s:v_dav:&pron:pers:1	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	2	iobj	_	_
2	важливо	важливо	ADV	adv:compb	Degree=Pos	0	root	_	SpaceAfter=No
3	,	,	PUNCT	punct	_	2	punct	_	_
4	щоб	щоб	PART	part	_	6	mark	_	_
5	був	бути	VERB	verb:imperf:past:m	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	6	auxpass	_	_
6	збережений	збережений	ADJ	adj:m:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	2	ccomp	_	_
7	спокій	спокій	NOUN	noun:inanim:m:v_naz	Animacy=Inan|Case=Nom|Gender=Masc	6	nsubjpass	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	Чи	чи	CONJ	conj:coord	_	3	mark	_	_
2	я	я	PRON	noun:anim:s:v_naz:&pron:pers:1	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	сплю	спати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	чи	чи	CONJ	conj:coord	_	6	mark	_	_
5	то	то	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	6	discourse	_	_
6	сниться	снитися	VERB	verb:rev:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
7	мені	я	PRON	noun:anim:s:v_dav:&pron:pers:1	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	6	iobj	_	SpaceAfter=No
8	?	?	PUNCT	punct	_	3	punct	_	_

~~~


