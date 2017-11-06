---
layout: base
title:  'Statistics of aux in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt-dep-aux-pass.html">aux:pass</a></tt>.

2445 nodes (1%) are attached to their parents as `aux`.

2428 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86707566462168.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (2250; 92% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (87; 4% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (82; 3% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (13; 1% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pt-pos-ADP.html">ADP</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pt-pos-AUX.html">AUX</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	bombeiro	bombeiro	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	suspeita	suspeitar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	KS|@SUB	_	8	mark	_	_
5	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	golfinho	golfinho	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	8	nsubj	_	_
7	tenha	ter	AUX	<aux>|V|PR|3S|SUBJ|@FS-<ACC	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	morrido	morrer	VERB	<mv>|<pc-subj>|V|PCP|@ICL-AUX<	VerbForm=Part	3	ccomp	_	_
9	afogado	afogar	VERB	<mv>|V|PCP|M|S|@ICL-<ADVL	Gender=Masc|Number=Sing|VerbForm=Part	8	advcl	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	É	ser	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	de	de	ADP	PRP|@<SC	_	3	mark	_	_
3	crer	crer	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	1	xcomp	_	_
4	que	que	SCONJ	KS|@SUB	_	8	mark	_	_
5	estivesse	estar	AUX	<aux>|V|IMPF|3S|SUBJ|@FS-<ACC	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
6	a	a	ADP	PRP|@PRT-AUX<	_	8	obl	_	_
7	ser	ser	AUX	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	8	cop	_	_
8	sincero	sincero	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	3	dep	_	SpaceAfter=No
9	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	«	«	PUNCT	PU|@PU	_	6	punct	_	SpaceAfter=No
2	Senão	senão	ADV	ADV|@ADVL>	_	6	advmod	_	_
3	ele	ele	PRON	PERS|M|3S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
4	vai	ir	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	ser	ser	AUX	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	6	cop	_	_
6	alvo	alvo	NOUN	<np-idf>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
7	fácil	fácil	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	6	amod	_	_
8	de	de	ADP	<sam->|PRP|@N<	_	10	case	_	_
9	as	o	DET	<-sam>|<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	críticas	crítica	NOUN	<np-def>|N|F|P|@P<	Gender=Fem|Number=Plur	6	nmod	_	_
11	se	se	SCONJ	KS|@SUB	_	14	mark	_	_
12	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	time	time	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	14	nsubj	_	_
14	perder	perder	VERB	<mv>|V|FUT|3S|SUBJ|@FS-<ADVL	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	advcl	_	SpaceAfter=No
15	.	.	PUNCT	PU|@PU	_	6	punct	_	SpaceAfter=No
16	»	»	PUNCT	PU|@PU	_	6	punct	_	_

~~~


