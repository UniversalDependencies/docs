

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is a language-specific subtype of [nmod]().
There are also 1 other language-specific subtypes of `nmod`: [nmod:tmod]().

532 nodes (0%) are attached to their parents as `nmod:npmod`.

476 instances of `nmod:npmod` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41729323308271.

The following 21 pairs of parts of speech are connected with `nmod:npmod`: [pt-pos/NOUN]()-[pt-pos/NOUN]() (340; 64% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (74; 14% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (26; 5% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (17; 3% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (16; 3% instances), [pt-pos/ADJ]()-[pt-pos/PROPN]() (10; 2% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (7; 1% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (7; 1% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (7; 1% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (5; 1% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (4; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (4; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (4; 1% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (3; 1% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:npmod	color:blue
1	3	3	NUM	<card>|NUM|M|P|@>N	_	2	nummod	_	_
2	milhões	milhão	NOUN	<np-def>|N|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	_
3	de	de	ADP	PRP|@N<ARG	_	2	nmod	_	_
4	contos	conto	NOUN	<np-idf>|N|M|P|@N<	Gender=Masc|Number=Plur	2	nmod:npmod	_	_
5	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:npmod	color:blue
1	Ex-jogadores	ex-jogador	NOUN	<np-idf>|N|M|P|@SUBJ>	Gender=Masc|Number=Plur	2	nsubj	_	_
2	elogiam	elogiar	VERB	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
4	colunistas	colunista	NOUN	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	2	dobj	_	_
5	Telê	Telê	PROPN	<first-cjt>|PROP|M|S|@N<	Gender=Masc|Number=Sing	4	appos	_	_
6	e	e	CONJ	<co-postnom>|KC|@CO	_	5	cc	_	_
7	Cruyff	Cruyff	PROPN	PROP|M|S|@N<	Gender=Masc|Number=Sing	5	nmod:npmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:npmod	color:blue
1	Um	um	NUM	<card>|NUM|M|S|@>N	_	2	nummod	_	_
2	ano	ano	NOUN	<np-def>|N|M|S|@>A	Gender=Masc|Number=Sing	3	nmod:npmod	_	_
3	depois	depois	ADV	ADV|@ADVL>	_	10	advmod	_	_
4	,	,	PUNCT	PU|@PU	_	3	punct	_	_
5	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	capital	capital	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	10	nsubj	_	_
7	passa	passar	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
8	a	a	ADP	PRP|@PRT-AUX<	_	10	nmod	_	_
9	ser	ser	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	10	cop	_	_
10	Tóquio	Tóquio	PROPN	PROP|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
11	.	.	PUNCT	PU|@PU	_	10	punct	_	_

~~~


