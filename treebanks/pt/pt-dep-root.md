---
layout: base
title:  'Statistics of root in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `root`

This relation is universal.

9368 nodes (4%) are attached to their parents as `root`.

9368 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.89709649871904.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="pt-pos-VERB.html">VERB</a></tt> (6789; 72% instances), -<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (1393; 15% instances), -<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (554; 6% instances), -<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (336; 4% instances), -<tt><a href="pt-pos-PRON.html">PRON</a></tt> (125; 1% instances), -<tt><a href="pt-pos-ADV.html">ADV</a></tt> (69; 1% instances), -<tt><a href="pt-pos-NUM.html">NUM</a></tt> (51; 1% instances), -<tt><a href="pt-pos-SYM.html">SYM</a></tt> (23; 0% instances), -<tt><a href="pt-pos-INTJ.html">INTJ</a></tt> (12; 0% instances), -<tt><a href="pt-pos-DET.html">DET</a></tt> (11; 0% instances), -<tt><a href="pt-pos-X.html">X</a></tt> (3; 0% instances), -<tt><a href="pt-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="pt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	Audiência	audiência	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	8	nsubj	_	_
2	em	em	ADP	<sam->|PRP|@N<	_	4	case	_	_
3	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Justiça	justiça	NOUN	<prop>|<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	1	nmod	_	_
5	de	de	ADP	<sam->|PRP|@N<	_	7	case	_	_
6	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Pará	Pará	PROPN	PROP|M|S|@P<	Gender=Masc|Number=Sing	4	nmod	_	_
8	discute	discutir	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	diploma	diploma	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	8	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	De	de	ADP	<sam->|PRP|@ADVL>	_	3	case	_	_
2	os	o	DET	<-sam>|<artd>|ART|M|P|@>N	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	fumantes	fumante	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
4	,	,	PUNCT	PU|@PU	_	3	punct	_	_
5	18,1	18,1	NUM	<card>|NUM|M|P|@>N	NumType=Card	6	nummod	_	_
6	milhões	milhão	NOUN	<np-def>|N|M|P|@SUBJ>	Gender=Masc|Number=Plur	8	nsubj	_	_
7	são	ser	AUX	<first-cjt>|<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	homens	homem	NOUN	<np-idf>|N|M|P|@<SC	Gender=Masc|Number=Plur	0	root	_	_
9	e	e	CCONJ	<co-fcl>|KC|@CO	_	8	cc	_	_
10	12,5	12,5	NUM	<card>|NUM|M|P|@>N	NumType=Card	11	nummod	_	_
11	milhões	milhão	NOUN	<np-def>|N|M|P|@SUBJ>	Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	PU|@PU	_	8	punct	_	_
13	mulheres	mulher	NOUN	<np-idf>|N|F|P|@<SC	Gender=Fem|Number=Plur	8	conj	_	SpaceAfter=No
14	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
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


