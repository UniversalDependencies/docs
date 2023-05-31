---
layout: base
title:  'Statistics of iobj in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `iobj`

This relation is universal.

238 nodes (0%) are attached to their parents as `iobj`.

146 instances of `iobj` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30252100840336.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (226; 95% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="pt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pt-pos-ADV.html">ADV</a></tt>-<tt><a href="pt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt-pos-VERB.html">VERB</a></tt>-<tt><a href="pt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	«	«	PUNCT	PU|@PU	_	3	punct	_	SpaceAfter=No
2	Me	eu	PRON	<refl>|PERS|M|1S|DAT|@DAT>	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
3	pergunto	perguntar	VERB	<mv>|V|PR|1S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	sempre	sempre	ADV	ADV|@<ADVL	_	3	advmod	_	_
5	quem	quem	PRON	<rel>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	_
6	podia	poder	AUX	<aux>|V|IMPF|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	aux	_	_
7	ter	ter	AUX	<aux>|V|INF|@ICL-AUX<	VerbForm=Inf	11	aux	_	_
8	sido	ser	AUX	<mv>|V|PCP|@ICL-AUX<	VerbForm=Part	11	cop	_	_
9	aquele	aquele	DET	<dem>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
10	jovem	jovem	ADJ	ADJ|M|S|@>N	Gender=Masc|Number=Sing	11	amod	_	_
11	alemão	alemão	NOUN	<np-def>|N|M|S|@<SC	Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	PU|@PU	_	3	punct	_	SpaceAfter=No
13	»	»	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 iobj	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	lucro	lucro	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	3	nsubj	_	_
3	cresceu	crescer	VERB	<first-cjt>|<mv>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	24	24	NUM	<card>|NUM|M|P|@>N	NumType=Card	5	nummod	_	SpaceAfter=No
5	%	%	SYM	<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	3	obj	_	_
6	para	para	ADP	PRP|@<ADVL	_	9	case	_	_
7	US$	US$	SYM	_	Gender=Masc|Number=Plur	9	compound	_	_
8	51	51	NUM	<card>|NUM|M|P|@>N	NumType=Card	9	nummod	_	_
9	milhões	milhão	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	3	iobj	_	_
10	e	e	CCONJ	<co-fcl>|KC|@CO	_	3	cc	_	_
11	as	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
12	vendas	venda	NOUN	<np-def>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	PU|@PU	_	12	punct	_	_
14	18	18	NUM	<card>|NUM|M|P|@>N	NumType=Card	15	nummod	_	SpaceAfter=No
15	%	%	SYM	<Eg>|<np-def>|N|M|P|@<ACC	Gender=Masc|Number=Plur	12	orphan	_	SpaceAfter=No
16	,	,	PUNCT	PU|@PU	_	15	punct	_	_
17	para	para	ADP	PRP|@<ADVL	_	20	case	_	_
18	US$	US$	SYM	_	Gender=Masc|Number=Plur	20	compound	_	_
19	776	776	NUM	<card>|NUM|M|P|@>N	NumType=Card	20	nummod	_	_
20	milhões	milhão	NOUN	<np-def>|N|M|P|@P<	Gender=Masc|Number=Plur	12	orphan	_	SpaceAfter=No
21	.	.	PUNCT	PU|@PU	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 20 iobj	color:blue
1	«	«	PUNCT	PU|@PU	_	23	punct	_	SpaceAfter=No
2	Um	um	DET	<arti>|ART|M|S|@>N	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	outro	outro	DET	<diff>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Ind	4	det	_	_
4	poder	poder	NOUN	<np-idf>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	23	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	PU|@PU	_	6	punct	_	_
6	aliado	aliar	VERB	<mv>|<first-cjt>|V|PCP|M|S|@ICL-N<PRED	Gender=Masc|Number=Sing|VerbForm=Part	4	acl	_	_
7	mas	mas	CCONJ	<co-pred>|KC|@CO	_	6	cc	_	_
8	diferente	diferente	ADJ	ADJ|M|S|@ICL-N<PRED	Gender=Masc|Number=Sing	6	dep	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	6	punct	_	_
10	como	como	ADV	<rel>|ADV|@ADVL>	_	14	advmod	_	_
11	pode	poder	AUX	<aux>|V|PR|3S|IND|@FS-N<PRED	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
12	vir	vir	AUX	<aux>|V|INF|@ICL-AUX<	VerbForm=Inf	14	aux	_	_
13	a	a	ADP	PRP|@PRT-AUX<	_	14	obl	_	_
14	ser	ser	VERB	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	4	acl:relcl	_	_
15	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	União	União	PROPN	_	Gender=Fem|Number=Sing	14	nsubj	_	MWE=União_Europeia|MWEPOS=PROPN
17	Europeia	Europeia	PROPN	_	Number=Sing	16	flat:name	_	SpaceAfter=No
18	,	,	PUNCT	PU|@PU	_	14	punct	_	_
19	só	só	ADV	ADV|@ADVL>	_	23	advmod	_	_
20	lhes	eles	PRON	PERS|M|3P|DAT|@DAT>	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	23	iobj	_	_
21	pode	poder	AUX	<aux>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux	_	_
22	ser	ser	AUX	<mv>|V|INF|@ICL-AUX<	VerbForm=Inf	23	cop	_	_
23	útil	útil	ADJ	ADJ|M|S|@<SC	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
24	»	»	PUNCT	PU|@PU	_	23	punct	_	SpaceAfter=No
25	.	.	PUNCT	PU|@PU	_	23	punct	_	_

~~~


