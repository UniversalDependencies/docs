

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

26 nodes (2%) are attached to their parents as `appos`.

26 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.73076923076923.

The following 9 pairs of parts of speech are connected with `appos`: [uk-pos/NOUN]()-[uk-pos/PROPN]() (8; 31% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (7; 27% instances), [uk-pos/PROPN]()-[uk-pos/NOUN]() (4; 15% instances), [uk-pos/NOUN]()-[uk-pos/SYM]() (2; 8% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (1; 4% instances), [uk-pos/DET]()-[uk-pos/NOUN]() (1; 4% instances), [uk-pos/PRON]()-[uk-pos/ADJ]() (1; 4% instances), [uk-pos/PRON]()-[uk-pos/NOUN]() (1; 4% instances), [uk-pos/PROPN]()-[uk-pos/PROPN]() (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Село	село	NOUN	noun:inanim:n:v_naz	Animacy=Inan|Case=Nom|Gender=Neut	4	nsubjpass	_	_
2	Крушельниця	Крушельниця	PROPN	noun:inanim:f:v_naz:prop	Animacy=Inan|Case=Nom|Gender=Fem	1	appos	_	_
3	є	бути	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	розташоване	розташований	ADJ	adj:n:v_naz:&adjp:perf:pasv	Aspect=Perf|Case=Nom|Gender=Neut|VerbForm=Part|Voice=Pass	0	root	_	_
5	над	над	ADP	prep:rv_oru	Case=Ins	6	case	_	_
6	річкою	річка	NOUN	noun:inanim:f:v_oru	Animacy=Inan|Case=Ins|Gender=Fem	4	nmod	_	_
7	Стрий	Стрий	PROPN	noun:inanim:m:v_naz:prop:xp2	Animacy=Inan|Case=Nom|Gender=Masc	6	appos	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Що	що	PRON	noun:inanim:n:v_naz:&pron:int	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Int	4	nsubj	_	_
2	то	то	PART	part	_	1	mark	_	_
3	за	за	PART	part	_	4	discourse	_	_
4	звір	звір	NOUN	noun:anim:m:v_naz:xp1	Animacy=Anim|Case=Nom|Gender=Masc	0	root	_	_
5	такий	такий	DET	adj:m:v_naz:&pron:dem	Case=Nom|Gender=Masc|PronType=Dem	4	det	_	SpaceAfter=No
6	,	,	PUNCT	punct	_	4	punct	_	_
7	теорема	теорема	NOUN	noun:inanim:f:v_naz	Animacy=Inan|Case=Nom|Gender=Fem	4	appos	_	_
8	Піфагора	Піфагор	PROPN	noun:anim:m:v_rod:prop:fname	Animacy=Anim|Case=Gen|Gender=Masc	7	nmod	_	SpaceAfter=No
9	?	?	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 appos	color:blue
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


