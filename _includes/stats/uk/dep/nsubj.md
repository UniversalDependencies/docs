

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

940 nodes (7%) are attached to their parents as `nsubj`.

758 instances of `nsubj` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21702127659574.

The following 21 pairs of parts of speech are connected with `nsubj`: [uk-pos/VERB]()-[uk-pos/NOUN]() (371; 39% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (327; 35% instances), [uk-pos/VERB]()-[uk-pos/PROPN]() (72; 8% instances), [uk-pos/VERB]()-[uk-pos/DET]() (38; 4% instances), [uk-pos/ADJ]()-[uk-pos/NOUN]() (29; 3% instances), [uk-pos/NOUN]()-[uk-pos/PRON]() (29; 3% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (25; 3% instances), [uk-pos/ADJ]()-[uk-pos/PRON]() (13; 1% instances), [uk-pos/ADV]()-[uk-pos/PRON]() (8; 1% instances), [uk-pos/NOUN]()-[uk-pos/PROPN]() (7; 1% instances), [uk-pos/PRON]()-[uk-pos/PRON]() (7; 1% instances), [uk-pos/ADJ]()-[uk-pos/DET]() (2; 0% instances), [uk-pos/ADJ]()-[uk-pos/PROPN]() (2; 0% instances), [uk-pos/ADV]()-[uk-pos/NOUN]() (2; 0% instances), [uk-pos/PRON]()-[uk-pos/NOUN]() (2; 0% instances), [uk-pos/ADV]()-[uk-pos/DET]() (1; 0% instances), [uk-pos/NOUN]()-[uk-pos/ADJ]() (1; 0% instances), [uk-pos/NOUN]()-[uk-pos/DET]() (1; 0% instances), [uk-pos/PROPN]()-[uk-pos/NOUN]() (1; 0% instances), [uk-pos/PROPN]()-[uk-pos/PRON]() (1; 0% instances), [uk-pos/VERB]()-[uk-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj	color:blue
1	Словом	слово	NOUN	Ncnsin	Animacy=Inan|Case=Ins|Gender=Neut	0	root	_	SpaceAfter=No
2	,	,	PUNCT	U	_	4	punct	_	_
3	дупа	дупа	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem	4	nsubj	_	_
4	свербить	свербіти	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
5	.	.	PUNCT	U	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Він	він	PRON	Pp-3m-snn	Case=Nom|Gender=Masc|Person=3|PronType=Prs	2	nsubj	_	_
2	акомпанує	акомпанувати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	вечір	вечір	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc	2	obl	_	_
4	і	і	CCONJ	Ccs	_	6	cc	_	_
5	цілу	цілий	ADJ	Ao-fsas	Case=Acc|Gender=Fem	6	amod	_	_
6	ніч	ніч	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem	3	conj	_	_
7	і	і	CCONJ	Ccs	_	10	cc	_	_
8	зовсім	зовсім	ADV	R	_	10	advmod	_	_
9	не	не	PART	Q	Polarity=Neg	10	advmod	_	_
10	механічно	механічно	ADV	R	_	2	advmod	_	SpaceAfter=No
11	.	.	PUNCT	U	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Саме	саме	PART	Q	_	2	discourse	_	_
2	Тарас	Тарас	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv	3	nsubj	_	_
3	запропонував	запропонувати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	мені	я	PRON	Pp-1-ysdn	Animacy=Anim|Case=Dat|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
5	бути	бути	AUX	Vapn	Aspect=Imp|VerbForm=Inf	6	cop	_	_
6	журналістом	журналіст	NOUN	Ncmsiy	Animacy=Anim|Case=Ins|Gender=Masc	3	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	U	_	3	punct	_	_

~~~


