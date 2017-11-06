---
layout: base
title:  'Statistics of csubj in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `csubj`

This relation is universal.

376 nodes (0%) are attached to their parents as `csubj`.

272 instances of `csubj` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.85372340425532.

The following 18 pairs of parts of speech are connected with `csubj`: <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (142; 38% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (127; 34% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (46; 12% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (22; 6% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (19; 5% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Mais	mais	ADV	<quant>|ADV|@>A	_	2	advmod	_	_
2	inesperado	inesperado	ADJ	ADJ|M|S|@SC>	Gender=Masc|Number=Sing	0	root	_	_
3	ainda	ainda	ADV	ADV|@A<	_	2	advmod	_	_
4	é	ser	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
5	encontrar	encontrar	VERB	<mv>|V|INF|@ICL-<SUBJ	VerbForm=Inf	2	csubj	_	_
6	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	criança	criança	NOUN	<np-idf>|N|F|S|@<ACC	Gender=Fem|Number=Sing	5	obj	_	_
8	assassina	assassino	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	Quem	quem	PRON	<rel>|INDP|M/F|S|@SUBJ>	Gender=Unsp|Number=Sing|PronType=Rel	2	nsubj	_	_
2	quiser	querer	VERB	<mv>|V|FUT|3S|SUBJ|@FS-SUBJ>	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	csubj	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	vai	ir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	em	em	ADP	PRP|@<PIV	_	6	case	_	_
6	excursão	excursão	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	4	obl	_	_
7	até	até	ADP	PRP|@<ADVL	_	9	case	_	_
8	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	resort	resort	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	4	obl	_	_
10	local	local	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	,	,	PUNCT	PU|@PU	_	12	punct	_	_
12	Casa	Casa	PROPN	PROP|M|S|@APP	Gender=Masc|Number=Sing	9	appos	_	MWE=Casa_de_Campo
13	de	de	ADP	PRP|@N<	_	14	case	_	_
14	Campo	Campo	PROPN	PROP|@P<	Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Pena	pena	NOUN	<first-cjt>|<np-idf>|N|F|S|@NPHR	Gender=Fem|Number=Sing	0	root	_	_
2	não	não	ADV	_	Polarity=Neg	3	advmod	_	_
3	ter	ter	VERB	<mv>|V|INF|3S|@ICL-<SUBJ	Number=Sing|Person=3|VerbForm=Inf	1	csubj	_	_
4	mais	muito	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	tempo	tempo	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	3	obj	_	_
6	para	para	ADP	PRP|@N<	_	7	mark	_	_
7	ir	ir	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	5	acl	_	_
8	a	a	ADP	<sam->|PRP|@<SA	_	10	case	_	_
9	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	teatro	teatro	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	7	obl	_	_

~~~


