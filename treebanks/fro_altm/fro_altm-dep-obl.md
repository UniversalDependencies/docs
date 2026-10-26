---
layout: base
title:  'Statistics of obl in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `obl`

This relation is universal.

1163 nodes (8%) are attached to their parents as `obl`.

894 instances of `obl` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8512467755804.

The following 11 pairs of parts of speech are connected with `obl`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (808; 69% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (326; 28% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl	color:blue
1	Item	item	ADV	_	_	6	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
2	,	,	PUNCT	_	_	1	punct	_	join=left|prpos=Fw|uppos=PON
3	uns	un	DET	_	Definite=Ind|PronType=Art	4	det	_	prpos=Dn|uppos=D
4	hons	homme	NOUN	_	Number=Sing	6	nsubj	_	prpos=Nc|uppos=NCS
5	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	6	aux:pass	_	prpos=Vuc|uppos=EJ
6	semons	semondre	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
7	a	à	ADP	_	_	9	case	_	prpos=S|uppos=P
8	les	le	DET	_	Definite=Def|PronType=Art	9	det	_	prpos=Da|uppos=D
9	erremens	errement	NOUN	_	Number=Plur	6	obl	_	prpos=Nc|uppos=NCPL
10	de	de	ADP	_	_	12	case	_	prpos=S|uppos=P
11	son	son	DET	_	Poss=Yes	12	det	_	prpos=Ds|uppos=DZ
12	pere	père	NOUN	_	Number=Sing	9	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
13	;	;	PUNCT	_	_	6	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	la	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	veüe	vue	NOUN	_	Number=Sing	4	nsubj	_	prpos=Nc|uppos=NCS
3	s'	se	PRON	_	PronType=Prs	4	expl	_	prpos=Pp|uppos=PRO
4	asist	asseoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
5	entr'	entre	ADP	_	_	6	case	_	prpos=S|uppos=P
6	els	il	PRON	_	PronType=Ind	4	obl	_	prpos=Pi|SpaceAfter=No|uppos=PRO
7	.	.	PUNCT	_	_	4	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 18 obl	color:blue
1	et	et	CCONJ	_	_	7	cc	_	prpos=Cc|uppos=CONJO
2	commune	commune	NOUN	_	Number=Sing	7	nsubj	_	prpos=Nc|uppos=NCS
3	si	si	ADV	_	_	7	advmod	_	prpos=Rg|uppos=ADV
4	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	7	cop	_	prpos=Vuc|uppos=EJ
5	un	un	DET	_	Definite=Ind|PronType=Art	7	det	_	prpos=Dn|uppos=D
6	autre	autre	ADJ	_	_	7	amod	_	prpos=Ag|uppos=ADJ
7	lieu	lieu	NOUN	_	Number=Sing	0	root	_	prpos=Nc|uppos=NCS
8	commun	commun	ADJ	_	_	7	amod	_	prpos=Ag|uppos=ADJ
9	a	à	ADP	_	_	11	case	_	prpos=S|uppos=P
10	la	le	DET	_	Definite=Def|PronType=Art	11	det	_	prpos=Da|uppos=D
11	gent	gent	NOUN	_	Number=Sing	8	nmod	_	prpos=Nc|uppos=NCS
12	de	de	ADP	_	_	14	case	_	prpos=S|uppos=P
13	le	le	DET	_	Definite=Def|PronType=Art	14	det	_	prpos=Da|uppos=D
14	païs	pays	NOUN	_	Number=Sing	11	nmod	_	prpos=Nc|uppos=NCS
15	comme	comme	ADP	_	_	18	case	_	prpos=S|uppos=P
16	d'	de	ADP	_	_	18	case	_	prpos=S|uppos=P
17	une	un	DET	_	Definite=Ind|PronType=Art	18	det	_	prpos=Dn|uppos=D
18	lieue	lieue	NOUN	_	Number=Sing	8	obl	_	prpos=Nc|uppos=NCS
19	ou	ou	CCONJ	_	_	22	cc	_	prpos=Cc|uppos=CONJO
20	de	de	ADP	_	_	22	case	_	prpos=S|uppos=P
21	demi	demi	ADJ	_	_	22	amod	_	prpos=Ag|uppos=ADJ
22	lieue	lieue	NOUN	_	Number=Sing	18	conj	_	prpos=Nc|SpaceAfter=No|uppos=NCS
23	,	,	PUNCT	_	_	7	punct	_	join=left|prpos=Fw|uppos=PON
24	qui	qui	PRON	_	PronType=Rel	26	nsubj	_	prpos=Pr|uppos=WPRO
25	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	26	aux:pass	_	prpos=Vuc|uppos=EJ
26	donnée	donner	VERB	_	Tense=Past|VerbForm=Part	2	acl:relcl	_	prpos=Ge|uppos=VPP
27	de	de	ADP	_	_	29	case	_	prpos=S|uppos=P
28	les	le	DET	_	Definite=Def|PronType=Art	29	det	_	prpos=Da|uppos=D
29	princes	prince	NOUN	_	Number=Plur	26	obl	_	prpos=Nc|uppos=NCPL
30	por	pour	ADP	_	_	31	case	_	prpos=S|uppos=P
31	Dieu	Dieu	PROPN	_	Number=Sing	26	obl	_	prpos=Np|uppos=NPRS
32	ou	ou	CCONJ	_	_	35	cc	_	prpos=Cc|uppos=CONJO
33	por	pour	ADP	_	_	35	case	_	prpos=S|uppos=P
34	aucune	aucun	DET	_	Definite=Ind	35	det	_	prpos=Di|uppos=D
35	redevance	redevance	NOUN	_	Number=Sing	31	conj	_	prpos=Nc|SpaceAfter=No|uppos=NCS
36	.	.	PUNCT	_	_	7	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


