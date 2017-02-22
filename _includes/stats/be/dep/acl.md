

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Belarusian)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

43 nodes (1%) are attached to their parents as `acl`.

33 instances of `acl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.81395348837209.

The following 7 pairs of parts of speech are connected with `acl`: [be-pos/NOUN]()-[be-pos/VERB]() (26; 60% instances), [be-pos/PRON]()-[be-pos/VERB]() (6; 14% instances), [be-pos/ADJ]()-[be-pos/VERB]() (3; 7% instances), [be-pos/PRON]()-[be-pos/ADJ]() (3; 7% instances), [be-pos/NOUN]()-[be-pos/ADJ]() (2; 5% instances), [be-pos/VERB]()-[be-pos/VERB]() (2; 5% instances), [be-pos/PROPN]()-[be-pos/VERB]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Расказвалі	расказваць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	таксама	таксама	ADV	RB	Degree=Pos	1	advmod	_	_
3	пра	пра	ADP	IN	_	4	case	_	_
4	крыўды	крыўда	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	6	punct	_	_
6	выкліканыя	выклікаць	VERB	VBNL	Animacy=Inan|Aspect=Perf|Case=Acc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
7	рускімі	рускі	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	6	obl:agent	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl	color:blue
1	У	у	ADP	IN	_	2	case	_	_
2	нас	мы	PRON	PRP	Case=Gen|Number=Plur|Person=1	3	obl	_	_
3	ёсць	быць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	ccomp	_	_
4	магчымасць	магчымасць	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
5	зарабіць	зарабіць	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	4	xcomp	_	_
6	нармальныя	нармальны	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	7	amod	_	_
7	грошы	грошы	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	obj	_	_
8	для	для	ADP	IN	_	9	case	_	_
9	таго	тое	PRON	DT	Case=Gen|Gender=Neut|Number=Sing	3	obl	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	13	punct	_	_
11	каб	каб	SCONJ	IN	_	13	mark	_	_
12	людзі	чалавек	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	13	nsubj	_	_
13	адчулі	адчуць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	9	acl	_	_
14	паляпшэнне	паляпшэнне	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	13	obj	_	_
15	жыцця	жыццё	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	14	nmod	_	SpaceAfter=No
16	"	"	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	3	punct	_	_
18	--	--	PUNCT	PUNCT	_	3	punct	_	_
19	упэўнены	упэўнены	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
20	беларускі	беларускі	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	21	amod	_	_
21	лідар	лідар	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	19	nsubj	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Другое	другі	ADJ	ORD	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	6	punct	_	_
3	чым	што	PRON	WP	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	6	iobj	_	_
4	яна	яна	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nsubj	_	_
5	мяне	я	PRON	PRP	Case=Acc|Number=Sing|Person=1	6	obj	_	_
6	зацікавіла	зацікавіць	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	acl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	было	быць	VERB	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	тое	тое	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	13	punct	_	_
11	што	што	SCONJ	IN	_	13	mark	_	_
12	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	13	nsubj	_	_
13	магла	магчы	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	acl	_	_
14	адразу	адразу	ADV	RB	Degree=Pos	16	advmod	_	_
15	ўсё	усё	PRON	DT	Case=Acc|Number=Plur	16	obj	_	_
16	разумець	разумець	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	13	xcomp	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


