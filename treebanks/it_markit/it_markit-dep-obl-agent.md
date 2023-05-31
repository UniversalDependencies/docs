---
layout: base
title:  'Statistics of obl:agent in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_markit-dep-obl.html">obl</a></tt>.

27 nodes (0%) are attached to their parents as `obl:agent`.

27 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.92592592592593.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (19; 70% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (7; 26% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 20 obl:agent	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	inconfutabile	inconfutabile	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	fatto	fatto	NOUN	S	Gender=Masc|Number=Sing	2	nsubj	_	_
5	che	che	SCONJ	CS	_	9	mark	_	_
6	l'	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	innovazione	innovazione	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	_	_
8	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	sottratto	sottrarre	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	acl	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	sottrarrà	sottrarre	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	conj	_	_
12	gran	grande	ADJ	A	Gender=Masc|Number=Sing	13	amod	_	_
13	parte	parte	NOUN	S	Gender=Fem|Number=Sing	11	obj	_	_
14	di	di	ADP	E	_	16	case	_	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	lavoro	lavoro	NOUN	S	Gender=Masc|Number=Sing	13	nmod	_	_
17	svolto	svolgere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	16	acl	_	_
18	da	da	ADP	E	_	20	case	_	_
19	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	20	det	_	_
20	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	17	obl:agent	_	_
21	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	"	"	PUNCT	FB	_	3	punct	_	_
3	Provvidenza	Provvidenza	PROPN	SP	_	14	nsubj	_	_
4	descritta	descrivere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
5	da	da	ADP	E	_	6	case	_	_
6	Verga	Verga	PROPN	SP	_	4	obl:agent	_	_
7	ne	ne	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	nmod	_	_
8	"	"	PUNCT	FB	_	9	punct	_	_
9	I	I	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	Malavoglia	Malavoglia	PROPN	SP	_	4	obl	_	_
11	"	"	PUNCT	FB	_	10	punct	_	_
12	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	barca	barca	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
15	che	che	PRON	PR	_	16	nsubj	_	_
16	rappresenta	rappresentare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	acl:relcl	_	_
17	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	vita	vita	NOUN	S	Gender=Fem|Number=Sing	16	obj	_	_
19	ma	ma	CCONJ	CC	_	22	cc	_	_
20	anche	anche	ADV	B	_	22	advmod	_	_
21	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	morte	morte	NOUN	S	Gender=Fem|Number=Sing	16	conj	_	_
23	quando	quando	SCONJ	CS	_	24	mark	_	_
24	naufraga	naufragare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	_	_
25	.	.	PUNCT	FS	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 obl:agent	color:blue
1	Questa	questo	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	disciplina	disciplina	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	_	7	nsubj	_	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl	_	_
7	occupa	occupare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
8	di	di	ADP	E	_	9	case	_	_
9	esperienze	esperienza	NOUN	S	Gender=Fem|Number=Plur	7	obl	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	interrogativi	interrogativo	NOUN	S	Gender=Masc|Number=Plur	9	conj	_	_
12	condivisi	condividere	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	11	acl	_	_
13	da	da	ADP	E	_	14	case	_	_
14	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|Person=3|PronType=Ind	12	obl:agent	_	_
15	,	,	PUNCT	FF	_	18	punct	_	_
16	ma	ma	CCONJ	CC	_	18	cc	_	_
17	poco	poco	ADV	B	_	18	advmod	_	_
18	esprimibili	esprimibile	ADJ	A	Gender=Masc|Number=Plur	12	conj	_	_
19	in	in	ADP	E	_	20	case	_	_
20	discorsi	discorso	NOUN	S	Gender=Masc|Number=Plur	18	obl	_	_
21	che	che	PRON	PR	_	24	nsubj	_	_
22	non	non	ADV	BN	PronType=Neg	24	advmod	_	_
23	siano	essere	AUX	V	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	_
24	superficiali	superficiale	ADJ	A	Gender=Masc|Number=Plur	20	acl:relcl	_	_
25	come	come	ADP	E	_	27	case	_	_
26	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	_
27	morte	morte	NOUN	S	Gender=Fem|Number=Sing	24	obl	_	_
28	e	e	CCONJ	CC	_	30	cc	_	_
29	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	vita	vita	NOUN	S	Gender=Fem|Number=Sing	27	conj	_	_
31	.	.	PUNCT	FS	_	4	punct	_	_

~~~


