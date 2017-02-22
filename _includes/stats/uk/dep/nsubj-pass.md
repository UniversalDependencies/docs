

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


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nsubj:pass	color:blue
1	Йшлося	йтися	VERB	Vmpis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	ще	ще	PART	Q	_	6	discourse	_	_
3	й	й	PART	Q	_	6	discourse	_	_
4	через	через	ADP	Spsa	Case=Acc	6	case	_	_
5	горіхові	горіховий	ADJ	Ao--pasn	Animacy=Inan|Case=Acc|Number=Plur	6	amod	_	_
6	ліси	ліс	NOUN	Ncmpan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	1	obl	_	SpaceAfter=No
7	,	,	PUNCT	U	_	12	punct	_	_
8	де	де	ADV	Pr------r	PronType=Rel	12	advmod	_	_
9	під	під	ADP	Spsi	Case=Ins	10	case	_	_
10	ногами	нога	NOUN	Ncfpin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	12	obl	_	_
11	горіхи	горіх	NOUN	Ncmpnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	12	nsubj:pass	_	_
12	укладалися	укладатися	VERB	Vmpis-p	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	6	acl	_	_
13	у	у	ADP	Spsa	Case=Acc	15	case	_	_
14	багаторічні	багаторічний	ADJ	Ao--pasn	Animacy=Inan|Case=Acc|Number=Plur	15	amod	_	_
15	шари	шар	NOUN	Ncmpan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	12	obl	_	SpaceAfter=No
16	.	.	PUNCT	U	_	1	punct	_	_

~~~


