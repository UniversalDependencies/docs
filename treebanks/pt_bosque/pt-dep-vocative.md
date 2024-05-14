---
layout: base
title:  'Statistics of vocative in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `vocative`

This relation is universal.

14 nodes (0%) are attached to their parents as `vocative`.

7 instances of `vocative` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.07142857142857.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (7; 50% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (2; 14% instances), <tt><a href="pt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="pt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 vocative	color:blue
1	Eu	eu	PRON	PERS|M|1S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	precisava	precisar	VERB	<mv>|V|IMPF|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
3	de	de	ADP	PRP|@<PIV	_	5	case	_	_
4	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	ajuda	ajuda	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	2	obl	_	_
6	de	de	ADP	<sam->|PRP|@N<	_	8	case	_	_
7	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	senhor	senhor	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	2	punct	_	_
10	deputado	deputado	NOUN	<np-idf>|N|M|S|@VOK	Gender=Masc|Number=Sing	2	vocative	_	_
11	...	...	PUNCT	PU|@PU	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Gente	gente	NOUN	<np-idf>|N|F|S|@VOK	Gender=Fem|Number=Sing	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	PU|@PU	_	1	punct	_	_
3	é	ser	AUX	<mv>|V|PR|3S|IND|@FS-EXC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	cada	cada	DET	<quant>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Tot	5	det	_	_
5	piranhão	piranhão	NOUN	<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	!	!	PUNCT	PU|@PU	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Alec	Alec	PROPN	PROP|F|S|@VOK	Gender=Fem|Number=Sing	3	vocative	_	_
2	Eu	eu	PRON	PERS|M|1S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	quero	querer	VERB	<mv>|V|PR|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	viver	viver	VERB	<mv>|V|INF|@ICL-<ACC	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	eu	eu	PRON	PERS|M|1S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	quero	querer	VERB	<mv>|V|PR|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
8	não	não	ADV	_	Polarity=Neg	9	advmod	_	_
9	fazer	fazer	VERB	<mv>|V|INF|@ICL-<ACC	VerbForm=Inf	7	xcomp	_	_
10	nada	nada	PRON	<quant>|INDP|M|S|@<ACC	Gender=Masc|Number=Sing|PronType=Ind	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


