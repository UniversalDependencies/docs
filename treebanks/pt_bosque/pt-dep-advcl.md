---
layout: base
title:  'Statistics of advcl in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `advcl`

This relation is universal.

2443 nodes (1%) are attached to their parents as `advcl`.

1919 instances of `advcl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.85468686041752.

The following 24 pairs of parts of speech are connected with `advcl`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1819; 74% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (226; 9% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (141; 6% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (105; 4% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (37; 2% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (34; 1% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (22; 1% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (12; 0% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pt-pos-SYM.html">SYM</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	PF	PF	PROPN	PROP|F|S|@SUBJ>	Gender=Fem|Number=Sing	2	nsubj	_	_
2	prende	prender	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dois	dois	NUM	<card>|NUM|M|P|@<ACC	NumType=Card	2	obj	_	_
4	por	por	ADP	PRP|@<ADVL	_	5	mark	_	_
5	cobrar	cobrar	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	2	advcl	_	_
6	ágio	ágio	NOUN	<np-idf>|N|M|S|@<ACC	Gender=Masc|Number=Sing	5	obj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advcl	color:blue
1	Se	se	SCONJ	KS|@SUB	_	2	mark	_	_
2	reagir	reagir	VERB	<mv>|V|FUT|3S|SUBJ|@FS-ADVL>	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	advcl	_	_
3	é	ser	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	interessante	interessante	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	_
5	porque	porque	SCONJ	KS|@SUB	_	6	mark	_	_
6	mostrará	mostrar	VERB	<mv>|V|FUT|3S|IND|@FS-<ADVL	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	advcl	_	_
7	que	que	SCONJ	KS|@SUB	_	9	mark	_	_
8	está	estar	AUX	<mv>|V|PR|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	vivo	vivo	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	6	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	4	punct	_	SpaceAfter=No
11	»	»	PUNCT	PU|@PU	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 advcl	color:blue
1	É	ser	AUX	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	assim	assim	ADV	<kc>|ADV|@<SC	_	0	root	_	_
3	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	transparência	transparência	NOUN	<np-def>|N|F|S|@<SUBJ	Gender=Fem|Number=Sing	2	nsubj	_	_
5	de	de	ADP	<sam->|PRP|@N<	_	7	case	_	_
6	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Partido	Partido	PROPN	_	Gender=Masc|Number=Sing	4	nmod	_	MWE=Partido_Popular|MWEPOS=PROPN
8	Popular	Popular	PROPN	_	Number=Sing	7	flat:name	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	10	punct	_	_
10	feita	fazer	VERB	<mv>|V|PCP|F|S|@ICL-A<	Gender=Fem|Number=Sing|VerbForm=Part	2	advcl	_	_
11	de	de	ADP	PRP|@<PIV	_	12	case	_	_
12	recados	recado	NOUN	<np-idf>|N|M|P|@P<	Gender=Masc|Number=Plur	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


