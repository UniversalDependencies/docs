

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

2778 nodes (1%) are attached to their parents as `acl`.

2634 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06155507559395.

The following 17 pairs of parts of speech are connected with `acl`: [pt-pos/NOUN]()-[pt-pos/VERB]() (2323; 84% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (206; 7% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (119; 4% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (36; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (27; 1% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (20; 1% instances), [pt-pos/DET]()-[pt-pos/VERB]() (11; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (8; 0% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (7; 0% instances), [pt-pos/X]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
1	Ela	ela	PRON	PERS|F|3S|NOM|@SUBJ>	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	tem	ter	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	também	também	ADV	ADV|@<ADVL	_	2	advmod	_	_
4	textos	texto	NOUN	<np-idf>|N|M|P|@<ACC	Gender=Masc|Number=Plur	2	obj	_	_
5	com	com	ADP	PRP|@N<	_	6	case	_	_
6	explicações	explicação	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	4	nmod	_	_
7	sobre	sobre	ADP	PRP|@N<	_	9	case	_	_
8	cada	cada	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
9	item	item	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	6	nmod	_	_
10	pesquisado	pesquisar	VERB	<mv>|V|PCP|M|S|@ICL-N<	Gender=Masc|Number=Sing|VerbForm=Part	9	acl	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Em	em	ADP	<sam->|PRP|@ADVL>	_	3	case	_	_
2	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	ano	ano	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	8	obl	_	_
4	passado	passado	ADJ	<mv>|V|PCP|M|S|@ICL-N<	Gender=Masc|Number=Sing	3	acl	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	país	país	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	8	nsubj	_	_
8	colheu	colher	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	9,5	9,5	NUM	<card>|NUM|M|P|@>N	NumType=Card	10	nummod	_	_
10	milhões	milhão	NOUN	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	8	obj	_	_
11	de	de	ADP	PRP|@N<ARG	_	12	case	_	_
12	toneladas	tonelada	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	«	«	PUNCT	PU|@PU	_	2	punct	_	SpaceAfter=No
2	Mundiais	Mundial	PROPN	PROP|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
3	»	»	PUNCT	PU|@PU	_	2	punct	_	_
4	de	de	ADP	PRP|@N<	_	5	case	_	_
5	atletismo	atletismo	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	2	nmod	_	_
6	confirmados	confirmar	VERB	<mv>|V|PCP|M|P|@ICL-N<	Gender=Masc|Number=Plur|VerbForm=Part	2	acl	_	_
7	para	para	ADP	PRP|@<ADVL	_	8	case	_	_
8	Estugarda	Estugarda	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	6	obl	_	_

~~~


