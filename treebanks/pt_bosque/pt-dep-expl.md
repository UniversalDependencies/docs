---
layout: base
title:  'Statistics of expl in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `expl`

This relation is universal.

952 nodes (0%) are attached to their parents as `expl`.

578 instances of `expl` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11239495798319.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (949; 100% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	deputado	deputado	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	4	nsubj	_	_
3	se	se	PRON	PERS|M|3S|ACC|@ACC>-PASS	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	aproximou	aproximar	VERB	<mv>|<se-passive>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 expl	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	filme	filme	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	passa	passar	VERB	<first-cjt>|<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	como	como	ADP	<com>|PRP|@<ADVL	_	5	case	_	_
5	vento	vento	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	3	obl	_	_
6	por	por	ADP	<sam->|PRP|@<ADVL	_	8	case	_	_
7	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	questões	questão	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	PU|@PU	_	20	punct	_	_
10	nada	nada	ADV	ADV|@>A	Polarity=Neg	11	advmod	_	_
11	pequenas	pequeno	ADJ	ADJ|F|P|@N<PRED	Gender=Fem|Number=Plur	8	amod	_	SpaceAfter=No
12	.	.	PUNCT	PU|@PU	_	20	punct	_	_
13	de	de	ADP	<sam->|PRP|@N<	_	15	case	_	_
14	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	tratamentos	tratamento	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	8	nmod	_	_
16	psiquiátricos	psiquiátrico	ADJ	ADJ|M|P|@N<	Gender=Masc|Number=Plur	15	amod	_	_
17	contemporâneos	contemporâneo	ADJ	ADJ|M|P|@N<	Gender=Masc|Number=Plur	15	amod	_	_
18	e	e	CCONJ	<co-sta>|KC|@CO	_	20	cc	_	_
19	se	se	PRON	PERS|M|3S|ACC|@ACC>-PASS	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	expl	_	_
20	fixa	fixo	ADJ	<mv>|<cjt>|<se-passive>|V|PR|3S|IND|@FS-STA	Number=Sing	3	conj	_	_
21	em	em	ADP	<sam->|PRP|@<PIV	_	22	case	_	_
22	o	o	PRON	<-sam>|DET|M|S|@P<	Gender=Masc|Number=Sing|PronType=Dem	20	obl	_	_
23	que	que	PRON	<rel>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Rel	24	nsubj	_	_
24	existe	existir	VERB	<mv>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl:relcl	_	_
25	de	de	ADP	PRP|@<PIV	_	27	case	_	_
26	mais	mais	ADV	<quant>|<KOMP>|ADV|@>A	_	27	advmod	_	_
27	óbvio	óbvio	ADJ	<COMP>|ADJ|M|S|@P<	Gender=Masc|Number=Sing	24	obl	_	_
28	em	em	ADP	<sam->|PRP|@<ADVL	_	30	case	_	_
29	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	história	história	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	24	obl	_	SpaceAfter=No
31	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


