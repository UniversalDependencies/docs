

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is a language-specific subtype of [obl]().

696 nodes (0%) are attached to their parents as `obl:agent`.

692 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.32327586206897.

The following 8 pairs of parts of speech are connected with `obl:agent`: [pt-pos/VERB]()-[pt-pos/NOUN]() (425; 61% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (232; 33% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (19; 3% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (10; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (6; 1% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:agent	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	PS	PS	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	foi	ir	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	primeiro	primeiro	ADJ	<NUM-ord>|<n>|<np-def>|ADJ|M|S|@<SC	Gender=Masc|Number=Sing|NumType=Ord	3	xcomp	_	_
6	atingido	atingir	VERB	<mv>|V|PCP|M|S|@ICL-A<	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	5	advcl	_	_
7	por	por	ADP	PRP|@PASS	_	9	case	_	_
8	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	caso	caso	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	6	obl:agent	_	SpaceAfter=No
10	:	:	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Menores	menor	NOUN	<np-idf>|N|M/F|P|@NPHR	Gender=Unsp|Number=Plur	0	root	_	_
2	em	em	ADP	PRP|@N<	_	3	case	_	_
3	bordel	bordel	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	1	nmod	_	_
4	encerrado	encerrar	VERB	<mv>|V|PCP|M|S|@ICL-N<	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	acl	_	_
5	por	por	ADP	PRP|@PASS	_	7	case	_	_
6	a	o	DET	<-sam>|<artd>|ART|@>N	Definite=Def|PronType=Art	7	det	_	_
7	PJ	PJ	PROPN	PROP|F|S|@P<	Gender=Fem|Number=Sing	4	obl:agent	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Mas	mas	CCONJ	KC|@CO	_	5	cc	_	_
2	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Presidente	presidente	NOUN	<prop>|<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
4	está	estar	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	cercado	cercado	ADJ	<mv>|V|PCP|M|S|@ICL-<SC	Gender=Masc|Number=Sing	0	root	_	_
6	por	por	ADP	PRP|@PASS	_	7	case	_	_
7	pedidos	pedido	NOUN	<np-idf>|N|M|P|@P<	Gender=Masc|Number=Plur	5	obl:agent	_	_
8	de	de	ADP	PRP|@N<	_	9	case	_	_
9	renúncia	renúncia	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~


