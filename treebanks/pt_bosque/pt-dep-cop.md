---
layout: base
title:  'Statistics of cop in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `cop`

This relation is universal.

2745 nodes (1%) are attached to their parents as `cop`.

2661 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83606557377049.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (1132; 41% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (1059; 39% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (179; 7% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (138; 5% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (86; 3% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (58; 2% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (56; 2% instances), <tt><a href="pt-pos-SYM.html">SYM</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (28; 1% instances), <tt><a href="pt-pos-ADP.html">ADP</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pt-pos-X.html">X</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pt-pos-AUX.html">AUX</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Um	um	NUM	<card>|NUM|M|S|@SUBJ>	NumType=Card	6	nsubj	_	_
2	de	de	ADP	<sam->|PRP|@N<	_	3	case	_	_
3	eles	eles	PRON	<-sam>|PERS|M|3P|NOM/PIV|@P<	Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	nmod	_	_
4	era	ser	AUX	<mv>|V|IMPF|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	seu	seu	DET	<poss>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Prs	6	det	_	_
6	filho	filho	NOUN	<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	PU|@PU	_	8	punct	_	_
8	Sérgio	Sérgio	PROPN	_	Gender=Masc|Number=Sing	6	appos	_	MWE=Sérgio_Fioravanti|MWEPOS=PROPN
9	Fioravanti	Fioravanti	PROPN	_	Number=Sing	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Saiba	saber	VERB	<mv>|V|PR|2S|SUBJ|@FS-STA	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	quem	quem	PRON	<interr>|INDP|M|S|@SC>	Gender=Masc|Number=Sing|PronType=Int	1	ccomp	_	_
3	é	ser	AUX	<mv>|V|PR|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	Barrichello	Barrichello	PROPN	PROP|M|S|@<sUBJ	Gender=Masc|Number=Sing	2	nsubj	_	_

~~~


