

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is a language-specific subtype of [nsubj]().

13 nodes (0%) are attached to their parents as `nsubj:pass`.

8 instances of `nsubj:pass` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84615384615385.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: [uk-pos/ADJ]()-[uk-pos/NOUN]() (10; 77% instances), [uk-pos/ADJ]()-[uk-pos/PRON]() (1; 8% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (1; 8% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Дах	дах	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc	3	nsubj:pass	_	_
2	був	бути	AUX	Vapis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	сконструйований	сконструйований	ADJ	Ap-msnf-ep	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	0	root	_	_
4	так	так	ADV	Pd------r	PronType=Dem	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	U	_	10	punct	_	_
6	що	що	SCONJ	Css	_	10	mark	_	_
7	його	він	PRON	Pp-3m-san	Case=Acc|Gender=Masc|Person=3|PronType=Prs	10	obj	_	_
8	можна	можна	ADV	R	_	10	advmod	_	_
9	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	8	cop	_	_
10	розсувати	розсувати	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	4	advcl	_	SpaceAfter=No
11	.	.	PUNCT	U	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nsubj:pass	color:blue
1	Дівчата	дівча	NOUN	Ncnpny	Animacy=Anim|Case=Nom|Gender=Neut|Number=Plur	2	nsubj	_	_
2	бігають	бігати	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	повільніше	повільніше	ADV	Rc	Degree=Cmp	2	advmod	_	_
4	ніж	ніж	SCONJ	Css	_	5	mark	_	_
5	хлопці	хлопець	NOUN	Ncmpny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	advcl	_	_
6	через	через	ADP	Spsa	Case=Acc	7	case	_	_
7	особливості	особливість	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	obl	_	_
8	будови	будова	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem	7	nmod	_	_
9	тазу	таз	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Style=Odd	8	nmod	_	SpaceAfter=No
10	,	,	PUNCT	U	_	13	punct	_	_
11	чи	чи	CCONJ	Ccs	_	13	cc	_	_
12	це	це	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	13	nsubj:pass	_	_
13	зумовлено	зумовити	VERB	Vmeo	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	2	conj	_	_
14	гормональними	гормональний	ADJ	Ao--pif	Case=Ins|Number=Plur	15	amod	_	_
15	причинами	причина	NOUN	Ncfpin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	13	obl	_	SpaceAfter=No
16	?	?	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Він	він	PRON	Pp-3m-snn	Case=Nom|Gender=Masc|Person=3|PronType=Prs	2	nsubj:pass	_	_
2	створений	створений	ADJ	Ap-msnf-ep	Aspect=Perf|Case=Nom|Gender=Masc|VerbForm=Part|Voice=Pass	0	root	_	_
3	не	не	PART	Q	Polarity=Neg	4	advmod	_	_
4	уявою	уява	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem	2	obl	_	_
5	автора	автор	NOUN	Ncmsgy	Animacy=Anim|Case=Gen|Gender=Masc	4	nmod	_	SpaceAfter=No
6	.	.	PUNCT	U	_	2	punct	_	_

~~~


