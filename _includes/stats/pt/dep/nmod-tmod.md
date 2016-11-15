

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-Bosque)

This relation is a language-specific subtype of [nmod]().
There are also 1 other language-specific subtypes of `nmod`: [nmod:npmod]().

193 nodes (0%) are attached to their parents as `nmod:tmod`.

192 instances of `nmod:tmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.46113989637306.

The following 6 pairs of parts of speech are connected with `nmod:tmod`: [pt-pos/NUM]()-[pt-pos/NOUN]() (91; 47% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (90; 47% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (6; 3% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 1% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (2; 1% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:tmod	color:blue
1	Até	até	ADP	<first-cjt>|PRP|@UTT	_	2	case	_	_
2	30	30	NUM	<first-cjt>|<card>|NUM|M|S|@P<	_	0	root	_	_
3	de	de	ADP	PRP|@N<	_	4	case	_	_
4	março	março	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	2	nmod:tmod	_	_
5	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod:tmod	color:blue
1	Viagem	viagem	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	4	nsubj	_	_
2	só	só	ADV	ADV|@ADVL>	_	4	advmod	_	_
3	é	ser	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	viável	viável	ADJ	ADJ|F|S|@<SC	Gender=Fem|Number=Sing	0	root	_	_
5	entre	entre	ADP	PRP|@<ADVL	_	7	case	_	_
6	os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	meses	mês	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	4	nmod	_	_
8	de	de	ADP	PRP|@N<	_	9	case	_	_
9	fevereiro	fevereiro	NOUN	<first-cjt>|<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	7	nmod:tmod	_	_
10	e	e	CONJ	<co-prparg>|KC|@CO	_	9	cc	_	_
11	abril	abril	NOUN	<cjt>|<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	9	conj	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nmod:tmod	color:blue
1	P.	P.	NOUN	<np-idf>|N|F|S|@NPHR	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	PU|@PU	_	1	punct	_	_
3	As	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
4	suas	seu	DET	<poss>|DET|F|P|@>N	Gender=Fem|Number=Plur	5	det	_	_
5	filhas	filha	NOUN	<np-def>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	6	nsubj	_	_
6	compreendem	compreender	VERB	<mv>|V|PR|3P|IND|@FS-QUE	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	o	o	DET	DET|M|S|@>N	Gender=Masc|Number=Sing	8	det	_	MWE:o=que
8	que	que	PRON	<interr>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Int	10	nsubj	_	_
9	se	se	PRON	PERS|M/F|3S/P|ACC|@ACC>-PASS	Case=Acc|Gender=Unsp|PronType=Prs	10	dobj	_	_
10	passou	passar	VERB	<mv>|<se-passive>|V|PS|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	ccomp	_	_
11	em	em	ADP	PRP|@<OA	_	12	case	_	_
12	Maio	maio	NOUN	<prop>|<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	10	nmod:tmod	_	_
13	68	68	NUM	<card>|NUM|M|S|@N<	_	12	nummod	_	_
14	?	?	PUNCT	PU|@PU	_	1	punct	_	_

~~~


