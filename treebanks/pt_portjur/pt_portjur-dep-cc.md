---
layout: base
title:  'Statistics of cc in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `cc`

This relation is universal.

3815 nodes (4%) are attached to their parents as `cc`.

3802 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01310615989515.

The following 21 pairs of parts of speech are connected with `cc`: <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (2112; 55% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (612; 16% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (581; 15% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (161; 4% instances), <tt><a href="pt_portjur-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (120; 3% instances), <tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (68; 2% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt> (56; 1% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (45; 1% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt> (24; 1% instances), <tt><a href="pt_portjur-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (12; 0% instances), <tt><a href="pt_portjur-pos-X.html">X</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-DET.html">DET</a></tt>-<tt><a href="pt_portjur-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	comentários	comentário	NOUN	_	Gender=Masc|Number=Plur	5	nsubj	_	_
3	ou	ou	CCONJ	_	_	4	cc	_	_
4	anotações	anotação	NOUN	_	Gender=Fem|Number=Plur	2	conj	_	_
5	poderão	poder	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
6	ser	ser	AUX	_	VerbForm=Inf	7	aux:pass	_	_
7	publicados	publicar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	5	xcomp	_	_
8	separadamente	separadamente	ADV	_	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	Ou	ou	CCONJ	_	ExtPos=CCONJ	6	cc	_	_
2	seja	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	não	não	ADV	_	_	6	advmod	_	_
5	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	configurado	configurado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	dolo	dolo	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
9	direto	direto	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 cc	color:blue
1	Recurso	recurso	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	parcialmente	parcialmente	ADV	_	_	3	advmod	_	_
3	conhecido	conhecer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	acl	_	_
4	e	e	CCONJ	_	_	11	cc	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	em	em	ADP	_	_	8	case	_	_
7	essa	esse	DET	_	Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	parte	parte	NOUN	_	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	não	não	ADV	_	_	11	advmod	_	_
11	provido	prover	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


