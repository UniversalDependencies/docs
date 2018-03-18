---
layout: base
title:  'Statistics of compound in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `compound`

This relation is universal.

535 nodes (0%) are attached to their parents as `compound`.

500 instances of `compound` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.50093457943925.

The following 17 pairs of parts of speech are connected with `compound`: <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (133; 25% instances), <tt><a href="pt-pos-ADP.html">ADP</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (131; 24% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (125; 23% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADP.html">ADP</a></tt> (99; 19% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (19; 4% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-SYM.html">SYM</a></tt> (3; 1% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt-pos-SYM.html">SYM</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	Fala	falar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	em	em	ADP	<sam->|PRP|@<PIV	_	5	case	_	_
3	a	o	DET	<-sam>|<artd>|ART|@>N	Definite=Def|PronType=Art	5	det	_	_
4	«	«	PUNCT	PU|@PU	_	5	punct	_	SpaceAfter=No
5	opinião	opinião	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	MWE=opinião_pública|MWEPOS=NOUN
6	pública	pública	ADJ	_	Gender=Masc|Number=Sing	5	compound	_	SpaceAfter=No
7	»	»	PUNCT	PU|@PU	_	5	punct	_	SpaceAfter=No
8	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Descida	descida	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	6	nsubj	_	_
2	de	de	ADP	PRP|@N<ARG	_	4	case	_	_
3	20	20	NUM	<card>|NUM|M|P|@>N	NumType=Card	4	nummod	_	_
4	por	por	ADP	_	Gender=Masc|Number=Sing	1	nmod	_	MWE=por_cento|MWEPOS=NOUN
5	cento	cento	NUM	_	Gender=Masc|Number=Sing|NumType=Mult	4	compound	_	_
6	registada	registar	VERB	<mv>|V|PCP|F|S|@ICL-UTT	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
7	em	em	ADP	PRP|@<ADVL	_	8	case	_	_
8	Abril	abril	NOUN	<prop>|<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	6	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	bacalhau	bacalhau	NOUN	<np-def>|N|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	_
3	como	como	ADP	<com>|PRP|@N<	_	4	case	_	_
4	pano	pano	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	MWE=pano_de_fundo|MWEPOS=NOUN
5	de	de	ADP	_	_	4	compound	_	_
6	fundo	fundo	NOUN	_	_	4	compound	_	_

~~~


