

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:agent](), [nmod:pmod]().

92 nodes (1%) are attached to their parents as `nmod:tmod`.

47 instances of `nmod:tmod` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.21739130434783.

The following 13 pairs of parts of speech are connected with `nmod:tmod`: [ro-pos/VERB]()-[ro-pos/NOUN]() (43; 47% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (27; 29% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (4; 4% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (4; 4% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (4; 4% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (2; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (2; 2% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod:tmod	color:blue
1	Nu	nu	PART	Qz	Negative=Neg	2	neg	_	_
2	putură	putea	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	aux	_	_
3	ieși	ieși	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
4	din	din	ADP	Sp	AdpType=Prep	5	case	_	_
5	biserică	biserică	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	nmod	_	_
6	timp	timp	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nmod:tmod	_	_
7	de	de	ADP	Sp	AdpType=Prep	9	case	_	_
8	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	9	nummod	_	_
9	ceas	ceas	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	6	nmod	_	_
10	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nmod:tmod	color:blue
1	În	În	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	1938	1938	NUM	M	NumType=Card	6	nmod:tmod	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	România	România	PROPN	Np	_	6	nmod	_	_
6	existau	existau	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
7	1938	1938	NUM	M	NumType=Card	6	dobj	_	_
8	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 nmod:tmod	color:blue
1	Federația	Federația	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	nsubj	_	_
2	Română	Română	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	Fotbal	Fotbal	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	_
5	este	este	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	membră	membră	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
7	fondatoare	fondatoare	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	6	amod	_	_
8	a	a	ADP	Spsa	AdpType=Prep|Case=Acc	9	det	_	_
9	UEFA	UEFA	NOUN	Yn	Abbr=Yes	6	nmod	_	_
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	1938	1938	NUM	M	NumType=Card	6	nmod:tmod	_	_
12	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


