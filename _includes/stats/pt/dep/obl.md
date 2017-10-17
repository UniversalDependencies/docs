

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.
There are 1 language-specific subtypes of `obl`: [obl:agent]().

12237 nodes (6%) are attached to their parents as `obl`.

9461 instances of `obl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92776007191305.

The following 29 pairs of parts of speech are connected with `obl`: [pt-pos/VERB]()-[pt-pos/NOUN]() (7549; 62% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1295; 11% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (777; 6% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (622; 5% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (518; 4% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (478; 4% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (307; 3% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (157; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (105; 1% instances), [pt-pos/ADV]()-[pt-pos/PROPN]() (91; 1% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (86; 1% instances), [pt-pos/VERB]()-[pt-pos/SYM]() (55; 0% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (45; 0% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (41; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (27; 0% instances), [pt-pos/ADJ]()-[pt-pos/NUM]() (21; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (17; 0% instances), [pt-pos/ADV]()-[pt-pos/ADJ]() (11; 0% instances), [pt-pos/ADJ]()-[pt-pos/SYM]() (7; 0% instances), [pt-pos/ADV]()-[pt-pos/NUM]() (7; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (7; 0% instances), [pt-pos/ADV]()-[pt-pos/SYM]() (5; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/X]() (1; 0% instances), [pt-pos/AUX]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl	color:blue
1	Dallari	Dallari	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	2	nsubj	_	_
2	orientou	orientar	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
4	produtores	produtor	NOUN	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	2	obj	_	_
5	a	a	ADP	PRP|@<ADVL	_	6	mark	_	_
6	negociarem	negociar	VERB	<mv>|V|INF|3P|@ICL-P<	Number=Plur|Person=3|VerbForm=Inf	2	advcl	_	_
7	com	com	ADP	PRP|@<ADVL	_	9	case	_	_
8	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	indústria	indústria	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl	color:blue
1	Técnico	técnico	NOUN	<np-idf>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Pepe	Pepe	PROPN	PROP|M|S|@N<	Gender=Masc|Number=Sing	1	appos	_	_
3	diz	dizer	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	KS|@SUB	_	5	mark	_	_
5	falta	faltar	VERB	<mv>|V|PR|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	talento	talento	NOUN	<np-idf>|N|M|S|@<SUBJ	Gender=Masc|Number=Sing	5	nsubj	_	_
7	a	a	ADP	<sam->|PRP|@<PIV	_	9	case	_	_
8	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Santos	Santos	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	5	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl	color:blue
1	Ele	ele	PRON	PERS|M|3S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	estava	estar	AUX	<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	acompanhados	acompanhado	ADJ	<mv>|V|PCP|M|P|@ICL-<SC	Gender=Masc|Number=Plur	0	root	_	_
4	de	de	ADP	PRP|@<PIV	_	6	case	_	_
5	três	três	NUM	<card>|NUM|M|P|@>N	NumType=Card	6	nummod	_	_
6	agentes	agente	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	3	obl	_	_
7	de	de	ADP	<sam->|PRP|@N<	_	9	case	_	_
8	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	PF	PF	PROPN	PROP|F|S|@P<	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


