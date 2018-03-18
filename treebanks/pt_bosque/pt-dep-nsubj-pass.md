---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt-dep-nsubj.html">nsubj</a></tt>.

976 nodes (0%) are attached to their parents as `nsubj:pass`.

827 instances of `nsubj:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.24590163934426.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (693; 71% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (164; 17% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (75; 8% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	anúncio	anúncio	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
3	oficial	oficial	ADJ	ADJ|M|S|@N<	Gender=Masc|Number=Sing	2	amod	_	_
4	será	ser	AUX	<aux>|V|FUT|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	_
5	feito	fazer	VERB	<pass>|<mv>|V|PCP|M|S|@ICL-AUX<	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
6	após	após	ADP	PRP|@<ADVL	_	8	case	_	_
7	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	dia	dia	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	5	obl	_	_
9	20	20	NUM	<card>|NUM|M|P|@N<	NumType=Card	8	nummod	_	SpaceAfter=No
10	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Ele	ele	PRON	PERS|M|3S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	é	ser	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	acusado	acusar	VERB	<pass>|<mv>|V|PCP|M|S|@ICL-AUX<	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	de	de	ADP	PRP|@<PIV	_	5	case	_	_
5	vandalismo	vandalismo	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Conferência	Conferência	PROPN	PROP|F|S|@SUBJ>	Gender=Fem|Number=Sing	6	nsubj:pass	_	MWE=Conferência_de_Paz
2	de	de	ADP	PRP|@N<	_	3	case	_	_
3	Paz	Paz	PROPN	PROP|@P<	Number=Sing	1	nmod	_	_
4	vai	ir	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	ser	ser	AUX	<aux>|V|INF|@ICL-AUX<	VerbForm=Inf	6	aux:pass	_	_
6	reatada	reatar	VERB	<pass>|<mv>|V|PCP|F|S|@ICL-AUX<	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_

~~~


