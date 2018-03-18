---
layout: base
title:  'Statistics of dislocated in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `dislocated`

This relation is universal.

9 nodes (0%) are attached to their parents as `dislocated`.

8 instances of `dislocated` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 5 pairs of parts of speech are connected with `dislocated`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-DET.html">DET</a></tt> (1; 11% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-DET.html">DET</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dislocated	color:blue
1	Os	o	DET	<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	automobilistas	automobilista	NOUN	<np-def>|N|M|P|@TOP	Gender=Masc|Number=Plur	6	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	esses	esse	PRON	<dem>|DET|M|P|@SUBJ>	Gender=Masc|Number=Plur|PronType=Dem	6	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	continuam	continuar	VERB	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	a	a	ADP	<sam->|PRP|@<ADVL	_	9	case	_	_
8	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	espera	espera	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	6	obl	_	_
10	...	...	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dislocated	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	PCP	PCP	PROPN	PROP|M|S|@SUBJ>	Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	PU|@PU	_	2	punct	_	_
4	esse	esse	DET	<dem>|DET|M|S|@TOP	Gender=Masc|Number=Sing|PronType=Dem	8	dislocated	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	está	estar	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	sempre	sempre	ADV	ADV|@>A	_	8	advmod	_	_
8	bem	bem	ADV	<first-cjt>|<quant>|ADV|@<SC	_	0	root	_	_
9	e	e	CCONJ	<co-sc>|KC|@CO	_	12	cc	_	_
10	com	com	ADP	<cjt>|PRP|@<SC	_	12	case	_	_
11	pouco	pouco	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
12	trabalho	trabalho	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	8	conj	_	_
13	por	por	ADP	<sam->|PRP|@N<	_	15	case	_	_
14	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	frente	frente	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dislocated	color:blue
1	mas	mas	CCONJ	KC|@CO	_	8	cc	_	_
2	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	coluna	coluna	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	8	nsubj	_	_
4	é	ser	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
5	ela	ele	PRON	PERS|F|3S|NOM|@TOP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	dislocated	_	_
6	própria	próprio	DET	<ident>|DET|F|S|@N<	Gender=Fem|Number=Sing|PronType=Emp	5	det	_	_
7	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	metáfora	metáfora	NOUN	<np-idf>|N|F|S|@<SC	Gender=Fem|Number=Sing	0	root	_	_
9	de	de	ADP	<first-cjt>|<sam->|PRP|@N<	_	11	case	_	_
10	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	corpo	corpo	NOUN	<first-cjt>|<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	8	nmod	_	_
12	que	que	PRON	<rel>|INDP|M|S|@ACC>	Gender=Masc|Number=Sing|PronType=Rel	13	obj	_	_
13	sustenta	sustentar	VERB	<mv>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
14	,	,	PUNCT	PU|@PU	_	17	punct	_	_
15	de	de	ADP	<cjt>|<sam->|PRP|@N<	_	17	case	_	_
16	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	força	força	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	11	conj	_	_
18	que	que	PRON	<rel>|INDP|F|S|@ACC>	Gender=Fem|Number=Sing|PronType=Rel	20	obj	_	_
19	tudo	tudo	PRON	<quant>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Ind	20	nsubj	_	_
20	suporta	suportar	VERB	<mv>|V|PR|3S|IND|@FS-N<	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	acl:relcl	_	SpaceAfter=No
21	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


