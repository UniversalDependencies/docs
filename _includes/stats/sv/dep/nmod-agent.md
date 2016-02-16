

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is a language-specific subtype of [nmod]().
There are also 1 other language-specific subtypes of `nmod`: [nmod:poss]().

181 nodes (0%) are attached to their parents as `nmod:agent`.

166 instances of `nmod:agent` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.39779005524862.

The following 9 pairs of parts of speech are connected with `nmod:agent`: [sv-pos/VERB]()-[sv-pos/NOUN]() (123; 68% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (26; 14% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (9; 5% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (9; 5% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (5; 3% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (3; 2% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (3; 2% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 nmod:agent	color:blue
1	Börjar	börja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	hennes	hon	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	3	nmod:poss	_	_
3	jobb	jobb	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nsubj	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	delas	dela	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	1	xcomp	_	_
6	av	av	ADP	PP	_	9	case	_	_
7	den	en	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	9	det	_	_
8	moderne	modern	ADJ	JJ|POS|MAS|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	mannen	man	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	nmod:agent	_	_
10	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:agent	color:blue
1	Han	han	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	anför	anföra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	en	man	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	8	det	_	_
4	av	av	ADP	PP	_	5	case	_	_
5	regeringen	regering	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nmod:agent	_	_
6	särskilt	särskilt	ADV	AB	_	7	advmod	_	_
7	utsedd	utse	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	8	amod	_	_
8	innertrio	innertrio	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	dobj	_	_
9	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:agent	color:blue
1	Äktenskapet	äktenskap	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	av	av	ADP	PP	_	4	case	_	_
4	Gud	Gud	PROPN	PM|NOM	Case=Nom	5	nmod:agent	_	_
5	stiftat	stifta	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	till	till	ADP	PP	_	9	case	_	_
7	'	'	PUNCT	PAD	_	9	punct	_	_
8	samhällets	samhälle	NOUN	NN|NEU|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Sing	9	nmod:poss	_	_
9	bestånd	bestånd	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	5	nmod	_	_
10	'	'	PUNCT	PAD	_	9	punct	_	_
11	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


