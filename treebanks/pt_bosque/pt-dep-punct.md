---
layout: base
title:  'Statistics of punct in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `punct`

This relation is universal.

30029 nodes (13%) are attached to their parents as `punct`.

20369 instances of `punct` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.23327450131539.

The following 21 pairs of parts of speech are connected with `punct`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (14471; 48% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (7586; 25% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (3695; 12% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (1881; 6% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (864; 3% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (510; 2% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (405; 1% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (147; 0% instances), <tt><a href="pt-pos-SYM.html">SYM</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (130; 0% instances), <tt><a href="pt-pos-X.html">X</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (103; 0% instances), <tt><a href="pt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (91; 0% instances), <tt><a href="pt-pos-ADP.html">ADP</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (58; 0% instances), <tt><a href="pt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (35; 0% instances), <tt><a href="pt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (35; 0% instances), <tt><a href="pt-pos-AUX.html">AUX</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="pt-pos-PART.html">PART</a></tt>-<tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="pt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 punct	color:blue
1	Ela	ela	PRON	PERS|F|3S|NOM|@SUBJ>	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	tem	ter	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	também	também	ADV	ADV|@<ADVL	_	2	advmod	_	_
4	textos	texto	NOUN	<np-idf>|N|M|P|@<ACC	Gender=Masc|Number=Plur	2	obj	_	_
5	com	com	ADP	PRP|@N<	_	6	case	_	_
6	explicações	explicação	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	4	nmod	_	_
7	sobre	sobre	ADP	PRP|@N<	_	9	case	_	_
8	cada	cada	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
9	item	item	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	6	nmod	_	_
10	pesquisado	pesquisar	VERB	<mv>|V|PCP|M|S|@ICL-N<	Gender=Masc|Number=Sing|VerbForm=Part	9	acl	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 punct	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 punct	color:blue
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


