

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

57 nodes (0%) are attached to their parents as `iobj`.

40 instances of `iobj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80701754385965.

The following 5 pairs of parts of speech are connected with `iobj`: [uk-pos/VERB]()-[uk-pos/PRON]() (39; 68% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (13; 23% instances), [uk-pos/ADV]()-[uk-pos/PRON]() (3; 5% instances), [uk-pos/ADV]()-[uk-pos/PROPN]() (1; 2% instances), [uk-pos/NOUN]()-[uk-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Ми	ми	PRON	Pp-1-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	ставили	ставити	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
3	йому	він	PRON	Pp-3m-sdn	Case=Dat|Gender=Masc|Person=3|PronType=Prs	2	iobj	_	_
4	на	на	ADP	Spsa	Case=Acc	5	case	_	_
5	спину	спина	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	2	obl	_	_
6	якісь	якийсь	DET	Pi---npaa	Animacy=Inan|Case=Acc|Number=Plur|PronType=Ind	8	det	_	_
7	магнітні	магнітний	ADJ	Ao--pasn	Animacy=Inan|Case=Acc|Number=Plur	8	amod	_	_
8	пластини	пластина	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	obj	_	SpaceAfter=No
9	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Їх	вони	PRON	Pp-3--pan	Case=Acc|Number=Plur|Person=3|PronType=Prs	2	obj	_	_
2	частують	частувати	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	коктейлем	коктейль	NOUN	Ncmsin	Animacy=Inan|Case=Ins|Gender=Masc	2	iobj	_	SpaceAfter=No
4	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
1	Змучений	змучений	ADJ	Ap-msnf-ep	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	4	amod	_	_
2	за	за	ADP	Spsa	Case=Acc	3	case	_	_
3	день	день	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	1	obl	_	_
4	далай-лама	далай-лама	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc	5	nsubj	_	_
5	запитався	запитатися	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	—	—	PUNCT	U	_	11	punct	_	_
7	отож	отож	PART	Q	_	11	discourse	_	SpaceAfter=No
8	,	,	PUNCT	U	_	7	punct	_	_
9	чого	що	PRON	Pq--nnsgn	Animacy=Inan|Case=Gen|Gender=Neut|PronType=Int	11	obj	_	_
10	тобі	ти	PRON	Pp-2-ysdn	Animacy=Anim|Case=Dat|Number=Sing|Person=2|PronType=Prs	11	iobj	_	_
11	треба	треба	ADV	R	_	5	parataxis	_	SpaceAfter=No
12	?	?	PUNCT	U	_	5	punct	_	_

~~~


