---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt-dep-obl.html">obl</a></tt>.

728 nodes (0%) are attached to their parents as `obl:agent`.

724 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.30357142857143.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (445; 61% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (241; 33% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (20; 3% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:agent	color:blue
1	Fui	ser	AUX	<aux>|V|PS|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	aux:pass	_	_
2	procurado	procurar	VERB	<mv>|<pass>|V|PCP|M|S|@ICL-AUX<	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	por	por	ADP	PRP|@PASS	_	5	case	_	_
4	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	ladrões	ladrão	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	2	obl:agent	_	_
6	para	para	ADP	PRP|@<ADVL	_	7	mark	_	_
7	comprar	comprar	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	2	advcl	_	_
8	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	carga	carga	NOUN	<np-def>|N|F|S|@<ACC	Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	2	punct	_	_

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


