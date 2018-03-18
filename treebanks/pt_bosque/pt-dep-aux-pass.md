---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt-dep-aux.html">aux</a></tt>.

1125 nodes (0%) are attached to their parents as `aux:pass`.

1125 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08177777777778.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (1110; 99% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-AUX.html">AUX</a></tt> (15; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Ele	ele	PRON	PERS|M|3S|NOM|@SUBJ>	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	é	ser	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	acusado	acusar	VERB	<pass>|<mv>|V|PCP|M|S|@ICL-AUX<	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	de	de	ADP	PRP|@<PIV	_	5	case	_	_
5	vandalismo	vandalismo	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	A	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	decoração	decoração	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	também	também	ADV	ADV|@ADVL>	_	5	advmod	_	_
4	é	ser	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	divertida	divertido	ADJ	<pass>|<mv>|V|PCP|F|S|@ICL-AUX<	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	PU|@PU	_	5	punct	_	_

~~~


