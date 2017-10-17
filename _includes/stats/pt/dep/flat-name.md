

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

5578 nodes (3%) are attached to their parents as `flat:name`.

5578 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29293653639297.

The following 11 pairs of parts of speech are connected with `flat:name`: [pt-pos/PROPN]()-[pt-pos/PROPN]() (5430; 97% instances), [pt-pos/PROPN]()-[pt-pos/CCONJ]() (67; 1% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (39; 1% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (28; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (5; 0% instances), [pt-pos/PROPN]()-[pt-pos/PUNCT]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/CCONJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	Um	um	NUM	<card>|NUM|M|S|@SUBJ>	NumType=Card	6	nsubj	_	_
2	de	de	ADP	<sam->|PRP|@N<	_	3	case	_	_
3	eles	eles	PRON	<-sam>|PERS|M|3P|NOM/PIV|@P<	Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	nmod	_	_
4	era	ser	AUX	<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	<poss>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	PU|@PU	_	8	punct	_	_
8	Sérgio	Sérgio	PROPN	_	Gender=Masc|Number=Sing	6	appos	_	MWE=Sérgio_Fioravanti|MWEPOS=PROPN
9	Fioravanti	Fioravanti	PROPN	_	Number=Sing	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Título	título	NOUN	<np-idf>|N|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PU|@PU	_	1	punct	_	_
3	Salazar	Salazar	PROPN	_	Gender=Masc|Number=Sing	1	appos	_	MWE=Salazar_e_Caetano|MWEPOS=PROPN
4	e	e	CCONJ	_	Number=Sing	3	flat:name	_	_
5	Caetano	Caetano	PROPN	_	Number=Sing	3	flat:name	_	_
6	--	--	PUNCT	PU|@PU	_	3	punct	_	_
7	Cartas	Cartas	PROPN	_	Number=Sing	3	parataxis	_	MWE=Cartas_Secretas_(1932-1968)|MWEPOS=PROPN
8	Secretas	Secretas	PROPN	_	Number=Sing	7	flat:name	_	_
9	(1932-1968)	(1932-1968)	PROPN	_	Number=Sing	7	flat:name	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	«	«	PUNCT	PU|@PU	_	2	punct	_	SpaceAfter=No
2	O	O	DET	_	Gender=Masc|Number=Sing|PronType=Art	0	root	_	MWE=O_Decálogo|MWEPOS=PROPN
3	Decálogo	Decálogo	PROPN	_	Number=Sing	2	flat:name	_	SpaceAfter=No
4	»	»	PUNCT	PU|@PU	_	2	punct	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	7	punct	_	_
6	de	de	ADP	PRP|@N<PRED	_	7	case	_	_
7	Krystof	Krystof	PROPN	_	Gender=Unsp|Number=Sing	2	nmod	_	MWE=Krystof_Kieslowski|MWEPOS=PROPN
8	Kieslowski	Kieslowski	PROPN	_	Number=Sing	7	flat:name	_	_
9	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


