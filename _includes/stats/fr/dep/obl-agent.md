

--------------------------------------------------------------------------------

## Treebank Statistics (UD_French-ParTUT)

This relation is a language-specific subtype of [obl]().

46 nodes (0%) are attached to their parents as `obl:agent`.

45 instances of `obl:agent` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.56521739130435.

The following 1 pairs of parts of speech are connected with `obl:agent`: [fr-pos/VERB]()-[fr-pos/NOUN]() (46; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	À	à	ADP	E	_	3	case	_	_
2	cet	ce	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	effet	effet	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	la	le	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	commission	commission	NOUN	S	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
7	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	assistée	assistée	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	par	par	ADP	E	_	11	case	_	_
10	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	comité	comité	NOUN	S	Gender=Masc|Number=Sing	8	obl:agent	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	8	punct	_	_

~~~


