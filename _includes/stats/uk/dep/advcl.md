

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

221 nodes (2%) are attached to their parents as `advcl`.

164 instances of `advcl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.60633484162896.

The following 17 pairs of parts of speech are connected with `advcl`: [uk-pos/VERB]()-[uk-pos/VERB]() (133; 60% instances), [uk-pos/VERB]()-[uk-pos/NOUN]() (24; 11% instances), [uk-pos/ADV]()-[uk-pos/VERB]() (19; 9% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (10; 5% instances), [uk-pos/VERB]()-[uk-pos/ADJ]() (9; 4% instances), [uk-pos/ADJ]()-[uk-pos/VERB]() (4; 2% instances), [uk-pos/NOUN]()-[uk-pos/VERB]() (4; 2% instances), [uk-pos/ADJ]()-[uk-pos/ADJ]() (3; 1% instances), [uk-pos/ADV]()-[uk-pos/NOUN]() (3; 1% instances), [uk-pos/ADV]()-[uk-pos/ADV]() (2; 1% instances), [uk-pos/ADV]()-[uk-pos/PROPN]() (2; 1% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (2; 1% instances), [uk-pos/VERB]()-[uk-pos/ADV]() (2; 1% instances), [uk-pos/ADJ]()-[uk-pos/ADV]() (1; 0% instances), [uk-pos/ADJ]()-[uk-pos/PROPN]() (1; 0% instances), [uk-pos/NOUN]()-[uk-pos/ADJ]() (1; 0% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advcl	color:blue
1	Коли	коли	ADV	Pr------r	PronType=Rel	3	obl	_	_
2	вона	вона	PRON	Pp-3f-snn	Case=Nom|Gender=Fem|Person=3|PronType=Prs	3	nsubj	_	_
3	хворіла	хворіти	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	6	advcl	_	SpaceAfter=No
4	,	,	PUNCT	U	_	6	punct	_	_
5	я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	залишався	залишатися	VERB	Vmpis-sm	Aspect=Imp|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	там	там	ADV	Pd------r	PronType=Dem	6	advmod	_	_
8	на	на	ADP	Spsa	Case=Acc	9	case	_	_
9	ніч	ніч	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	U	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl	color:blue
1	Наталья	Наталья	PROPN	Npfsny	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv	2	nsubj	_	_
2	плакала	плакати	VERB	Vmpis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	U	_	7	punct	_	_
4	бо	бо	SCONJ	Css	_	7	mark	_	_
5	це	це	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	7	nsubj	_	_
6	було	бути	AUX	Vapis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	7	cop	_	_
7	втручанням	втручання	NOUN	Ncnsin	Animacy=Inan|Case=Ins|Gender=Neut	2	advcl	_	_
8	у	у	ADP	Spsa	Case=Acc	9	case	_	_
9	біоценоз	біоценоз	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 advcl	color:blue
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


