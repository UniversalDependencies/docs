

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is a language-specific subtype of [nmod]().
There are also 1 other language-specific subtypes of `nmod`: [nmod:agent]().

1732 nodes (2%) are attached to their parents as `nmod:poss`.

1725 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27424942263279.

The following 9 pairs of parts of speech are connected with `nmod:poss`: [sv-pos/NOUN]()-[sv-pos/NOUN]() (913; 53% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (668; 39% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (132; 8% instances), [sv-pos/ADJ]()-[sv-pos/DET]() (7; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (4; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Men	men	CONJ	KN	_	5	cc	_	_
2	för	för	ADP	PP	_	4	case	_	_
3	barnens	barn	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	4	nmod:poss	_	_
4	del	del	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	_	_
5	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
7	annorlunda	annorlunda	ADV	AB	_	5	advmod	_	_
8	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	'	'	PUNCT	PAD	_	4	punct	_	_
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj	_	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	din	du	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	6	nmod:poss	_	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	dobj	_	_
7	.	.	PUNCT	MAD	_	4	punct	_	_
8	'	'	PUNCT	PAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Eko-pocket	Eko-pocket	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	0	root	_	_
2	Sveriges	Sverige	PROPN	PM|GEN	Case=Gen	3	nmod:poss	_	_
3	Radios	radio	NOUN	NN|UTR|SIN|IND|GEN	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	4	nmod:poss	_	_
4	förlag	förlag	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nmod	_	_
5	.	.	PUNCT	MAD	_	1	punct	_	_
6	)	)	PUNCT	PAD	_	1	punct	_	_

~~~


