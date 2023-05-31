---
layout: base
title:  'Statistics of acl in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pt-dep-acl-relcl.html">acl:relcl</a></tt>.

2918 nodes (1%) are attached to their parents as `acl`.

2773 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06408498971899.

The following 17 pairs of parts of speech are connected with `acl`: <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (2427; 83% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (227; 8% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (129; 4% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (38; 1% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (27; 1% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (22; 1% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (11; 0% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="pt-pos-SYM.html">SYM</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="pt-pos-X.html">X</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt-pos-PRON.html">PRON</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pt-pos-ADP.html">ADP</a></tt>-<tt><a href="pt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt-pos-DET.html">DET</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt-pos-SYM.html">SYM</a></tt>-<tt><a href="pt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Em	em	ADP	<sam->|PRP|@ADVL>	_	3	case	_	_
2	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	ano	ano	NOUN	<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	8	obl	_	_
4	passado	passado	ADJ	<mv>|V|PCP|M|S|@ICL-N<	Gender=Masc|Number=Sing	3	acl	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	4	punct	_	_
6	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	país	país	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	8	nsubj	_	_
8	colheu	colher	VERB	<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	9,5	9,5	NUM	<card>|NUM|M|P|@>N	NumType=Card	10	nummod	_	_
10	milhões	milhão	NOUN	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	8	obj	_	_
11	de	de	ADP	PRP|@N<ARG	_	12	case	_	_
12	toneladas	tonelada	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PU|@PU	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl	color:blue
1	Elden	Elden	PROPN	_	Gender=Masc|Number=Sing	0	root	_	MWE=Elden_Paulo_Durante|MWEPOS=PROPN
2	Paulo	Paulo	PROPN	_	Number=Sing	1	flat:name	_	_
3	Durante	Durante	PROPN	_	Number=Sing	1	flat:name	_	SpaceAfter=No
4	,	,	PUNCT	PU|@PU	_	5	punct	_	_
5	27	27	NUM	<card>|NUM|M|P|@N<PRED	NumType=Card	1	appos	_	SpaceAfter=No
6	,	,	PUNCT	PU|@PU	_	5	punct	_	_
7	formado	formar	VERB	<mv>|V|PCP|M|S|@ICL-N<PRED	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	_
8	em	em	ADP	PRP|@<PIV	_	9	case	_	_
9	direito	direito	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	PU|@PU	_	11	punct	_	_
11	pecuarista	pecuarista	ADJ	ADJ|M|S|@N<PRED	Gender=Masc|Number=Sing	1	amod	_	SpaceAfter=No
12	:	:	PUNCT	PU|@PU	_	1	punct	_	_

~~~


