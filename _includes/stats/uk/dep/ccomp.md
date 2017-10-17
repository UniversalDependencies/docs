

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

76 nodes (1%) are attached to their parents as `ccomp`.

75 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.40789473684211.

The following 8 pairs of parts of speech are connected with `ccomp`: [uk-pos/VERB]()-[uk-pos/VERB]() (47; 62% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (12; 16% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (6; 8% instances), [uk-pos/VERB]()-[uk-pos/ADJ]() (5; 7% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (3; 4% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (1; 1% instances), [uk-pos/PRON]()-[uk-pos/INTJ]() (1; 1% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	уявляв	уявляти	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	собі	себе	PRON	Px-----dn	Case=Dat|PronType=Prs|Reflex=Yes	2	expl	_	SpaceAfter=No
4	,	,	PUNCT	U	_	6	punct	_	_
5	що	що	PRON	Pr--nnsan	Animacy=Inan|Case=Acc|Gender=Neut|PronType=Rel	6	obj	_	_
6	переживають	переживати	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	померлі	померлий	NOUN	Ap--pns-ea	Animacy=Anim|Aspect=Perf|Case=Nom|Number=Ptan|Voice=Act	6	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	U	_	9	punct	_	_
9	чекаючи	чекаючи	VERB	Vmpgp	Aspect=Imp|Tense=Pres|VerbForm=Conv	6	advcl	_	_
10	на	на	ADP	Spsa	Case=Acc	11	case	_	_
11	нас	ми	PRON	Pp-1-ypan	Animacy=Anim|Case=Acc|Number=Plur|Person=1|PronType=Prs	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Саме	саме	PART	Q	_	2	discourse	_	_
2	Тарас	Тарас	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv	3	nsubj	_	_
3	запропонував	запропонувати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	мені	я	PRON	Pp-1-ysdn	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
5	бути	бути	AUX	Vapn	Aspect=Imp|VerbForm=Inf	6	cop	_	_
6	журналістом	журналіст	NOUN	Ncmsiy	Animacy=Anim|Case=Ins|Gender=Masc	3	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	U	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	І	і	PART	Q	_	4	discourse	_	_
2	раптом	раптом	ADV	R	_	4	advmod	_	_
3	Адріян	Адріян	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv	4	nsubj	_	_
4	зрозумів	зрозуміти	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	U	_	8	punct	_	_
6	навіщо	навіщо	ADV	Pr------r	PronType=Rel	8	advmod	_	_
7	вона	вона	PRON	Pp-3f-snn	Case=Nom|Gender=Fem|Person=3|PronType=Prs	8	nsubj	_	_
8	тут	тут	ADV	Pd------r	PronType=Dem	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	U	_	4	punct	_	_

~~~


