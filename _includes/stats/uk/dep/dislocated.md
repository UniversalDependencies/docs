

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

5 nodes (0%) are attached to their parents as `dislocated`.

3 instances of `dislocated` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2.

The following 5 pairs of parts of speech are connected with `dislocated`: [uk-pos/ADV]()-[uk-pos/NOUN]() (1; 20% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (1; 20% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (1; 20% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (1; 20% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dislocated	color:blue
1	Їх	вони	PRON	Pp-3--pgn	Case=Gen|Number=Plur|Person=3|PronType=Prs	2	obj	_	_
2	немало	немало	ADV	R	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	U	_	5	punct	_	_
4	таких	такий	DET	Pd----pga	Case=Gen|Number=Plur|PronType=Dem	5	det	_	_
5	стежечок	стежечка	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	dislocated	_	SpaceAfter=No
6	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 dislocated	color:blue
1	Хіба	хіба	PART	Q	_	5	discourse	_	_
2	це	це	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	5	nsubj	_	_
3	таке	такий	DET	Pd--n-sna	Case=Nom|Gender=Neut|PronType=Dem	5	det	_	_
4	надскладне	надскладний	ADJ	Ao-nsns	Case=Nom|Gender=Neut	5	amod	_	_
5	завдання	завдання	NOUN	Ncnsnn	Animacy=Inan|Case=Nom|Gender=Neut	0	root	_	_
6	кинути	кинути	VERB	Vmen	Aspect=Perf|VerbForm=Inf	5	dislocated	_	_
7	ваш	ваш	DET	Ppp2mnsaa	Animacy=Inan|Case=Acc|Gender=Masc|Person=2|Poss=Yes|PronType=Prs	8	det	_	_
8	пакетик	пакетик	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	6	obj	_	_
9	в	в	ADP	Spsa	Case=Acc	12	case	_	_
10	спеціально	спеціально	ADV	R	_	11	advmod	_	_
11	відведене	відведений	ADJ	Ap-nsas-ep	Aspect=Perf|Case=Acc|Gender=Neut|VerbForm=Part|Voice=Pass	12	amod	_	_
12	місце	місце	NOUN	Ncnsan	Animacy=Inan|Case=Acc|Gender=Neut	6	obl	_	SpaceAfter=No
13	?	?	PUNCT	U	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 dislocated	color:blue
1	Учасник	учасник	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc	6	dislocated	_	_
2	жорстокого	жорстокий	ADJ	Afpmsgf	Case=Gen|Degree=Pos|Gender=Masc	3	amod	_	_
3	віку	вік	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	U	_	1	punct	_	_
5	він	він	PRON	Pp-3m-snn	Case=Nom|Gender=Masc|Person=3|PronType=Prs	6	nsubj	_	_
6	носив	носити	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	і	і	CCONJ	Ccs	_	8	cc	_	_
8	фузію	фузія	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	U	_	11	punct	_	_
10	і	і	CCONJ	Ccs	_	11	cc	_	_
11	машингвера	машингвер	NOUN	Ncmsan	Animacy=Inan|Animacy[gram]=Anim|Case=Acc|Gender=Masc|Style=Odd	8	conj	_	SpaceAfter=No
12	,	,	PUNCT	U	_	14	punct	_	_
13	і	і	CCONJ	Ccs	_	14	cc	_	_
14	гвера	гвер	NOUN	Ncmsan	Animacy=Inan|Animacy[gram]=Anim|Case=Acc|Gender=Masc|Style=Odd	8	conj	_	SpaceAfter=No
15	.	.	PUNCT	U	_	6	punct	_	_

~~~


