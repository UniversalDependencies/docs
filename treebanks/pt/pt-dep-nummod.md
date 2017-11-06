---
layout: base
title:  'Statistics of nummod in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `nummod`

This relation is universal.

2856 nodes (1%) are attached to their parents as `nummod`.

2489 instances of `nummod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1313025210084.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (2265; 79% instances), <tt><a href="pt-pos-SYM.html">SYM</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (312; 11% instances), <tt><a href="pt-pos-ADP.html">ADP</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (133; 5% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (54; 2% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (43; 2% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (32; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="pt-pos-X.html">X</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	E	e	CCONJ	KC|@CO	_	4	cc	_	_
2	alguns	algum	PRON	<quant>|DET|M|P|@SUBJ>	Gender=Masc|Number=Plur|PronType=Ind	4	nsubj	_	_
3	vão	ir	AUX	<aux>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	ter	ter	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	0	root	_	_
5	de	de	ADP	PRP|@<ACC	_	7	case	_	_
6	30	30	NUM	<card>|NUM|M|P|@>N	NumType=Card	7	nummod	_	SpaceAfter=No
7	%	%	SYM	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	4	obl	_	SpaceAfter=No
8	»	»	PUNCT	PU|@PU	_	4	punct	_	SpaceAfter=No
9	.	.	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Descida	descida	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	6	nsubj	_	_
2	de	de	ADP	PRP|@N<ARG	_	4	case	_	_
3	20	20	NUM	<card>|NUM|M|P|@>N	NumType=Card	4	nummod	_	_
4	por	por	ADP	_	Gender=Masc|Number=Sing	1	nmod	_	MWE=por_cento|MWEPOS=NOUN
5	cento	cento	NUM	_	Gender=Masc|Number=Sing|NumType=Mult	4	compound	_	_
6	registada	registar	VERB	<mv>|V|PCP|F|S|@ICL-UTT	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
7	em	em	ADP	PRP|@<ADVL	_	8	case	_	_
8	Abril	abril	NOUN	<prop>|<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	6	obl	_	_

~~~


