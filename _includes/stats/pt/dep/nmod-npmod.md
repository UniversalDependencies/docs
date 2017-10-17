

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is a language-specific subtype of [nmod]().
There are also 1 other language-specific subtypes of `nmod`: [nmod:tmod]().

447 nodes (0%) are attached to their parents as `nmod:npmod`.

398 instances of `nmod:npmod` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03355704697987.

The following 26 pairs of parts of speech are connected with `nmod:npmod`: [pt-pos/NOUN]()-[pt-pos/NOUN]() (217; 49% instances), [pt-pos/SYM]()-[pt-pos/NOUN]() (93; 21% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (24; 5% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (20; 4% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (16; 4% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (14; 3% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (9; 2% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (7; 2% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (7; 2% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (6; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (5; 1% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (4; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (4; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 1% instances), [pt-pos/NOUN]()-[pt-pos/X]() (3; 1% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:npmod	color:blue
1	Lei	lei	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	4	nsubj	_	_
2	brasileira	brasileiro	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	1	amod	_	_
3	não	não	ADV	_	Polarity=Neg	4	advmod	_	_
4	proíbe	proibir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	gravidez	gravidez	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	4	obj	_	_
7	pós-menopausa	pós-menopausa	NOUN	<np-idf>|N|F|S|@N<	Gender=Fem|Number=Sing	6	nmod:npmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:npmod	color:blue
1	As	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	agências	agência	NOUN	<np-def>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	3	nsubj	_	_
3	movimentaram	movimentar	VERB	<mv>|V|PS/MQP|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
4	cerca	cerca	ADV	ADV|@>N	_	6	advmod	_	MWE=cerca_de
5	de	de	ADP	PRP|@A<	_	4	obl	_	_
6	US$	US$	SYM	_	Gender=Masc|Number=Plur	3	obj	_	_
7	2,5	2,5	NUM	<card>|NUM|M|P|@>N	NumType=Card	8	nummod	_	_
8	bilhões	bilhão	NOUN	<np-def>|N|M|P|@N<	Gender=Masc|Number=Plur	6	nmod:npmod	_	_
9	em	em	ADP	PRP|@<ADVL	_	10	case	_	_
10	90	90	NUM	<card>|NUM|M|S|@P<	NumType=Card	3	obl	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:npmod	color:blue
1	Foi	foi	ADV	<foc>|ADV|@FOC>	_	8	mark	_	_
2	anos	ano	NOUN	<np-idf>|N|M|P|@>A	Gender=Masc|Number=Plur	3	nmod:npmod	_	_
3	mais	mais	ADV	<KOMP>|<quant>|ADV|@>A	_	4	advmod	_	_
4	tarde	tarde	ADV	ADV|@ADVL>	_	8	advmod	_	_
5	que	que	ADV	<foc>|ADV|@<FOC	_	8	mark	_	_
6	Hervé	Hervé	PROPN	_	Gender=Masc|Number=Sing	8	nsubj	_	MWE=Hervé_Guibert|MWEPOS=PROPN
7	Guibert	Guibert	PROPN	_	Number=Sing	6	flat:name	_	_
8	escreveu	escrever	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	livro	livro	NOUN	<np-def>|N|M|S|@<ACC	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


