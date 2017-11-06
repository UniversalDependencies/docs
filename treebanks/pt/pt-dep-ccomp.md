---
layout: base
title:  'Statistics of ccomp in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `ccomp`

This relation is universal.

1565 nodes (1%) are attached to their parents as `ccomp`.

1219 instances of `ccomp` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.77507987220447.

The following 17 pairs of parts of speech are connected with `ccomp`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1197; 76% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (142; 9% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (141; 9% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (23; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (16; 1% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 ccomp	color:blue
1	É	ser	AUX	<mv>|V|PR|3S|IND|@FS-ACC>	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	uma	um	DET	<arti>|ART|F|S|@>N	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	situação	situação	NOUN	<np-idf>|N|F|S|@<SC	Gender=Fem|Number=Sing	7	ccomp	_	_
4	absurda	absurdo	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	»	»	PUNCT	PU|@PU	_	7	punct	_	SpaceAfter=No
6	,	,	PUNCT	PU|@PU	_	3	punct	_	_
7	disse	dizer	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	Taylor	Taylor	PROPN	PROP|M|S|@<SUBJ	Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	10	punct	_	_
10	49	49	NUM	<card>|NUM|M|P|@N<PRED	NumType=Card	8	appos	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~


