---
layout: base
title:  'Statistics of nsubj:pass in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-nsubj.html">nsubj</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:pass`.

8 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.875.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (5; 63% instances), <tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Und	und	CCONJ	_	_	6	cc	_	CSID=DE|Lang=de
2	wie	wie	ADV	_	_	6	advmod	_	CSID=DE|Lang=de
3	einfach	einfach	ADV	_	_	4	advmod	_	CSID=DE|Lang=de
4	übernatürlich	übernatürlich	ADJ	_	_	6	advmod	_	CSID=DE|Lang=de
5	Milch	Milch	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	CSID=DE|Lang=de
6	hergestellt	herstellen	VERB	_	VerbForm=Part	0	root	_	CSID=DE|Lang=de
7	wird	werden	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	aux:pass	_	CSID=DE|Lang=de|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	CSID=OTHER
9	yani	yani	ADV	_	_	12	advmod	_	CSID=TR|Lang=tr
10	o	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	obl	_	CSID=TR|Lang=tr
11	kadar	kadar	ADP	_	_	10	case	_	CSID=TR|Lang=tr
12	acıdım	acı	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Past	6	parataxis	_	CSID=TR|Lang=tr
13	ki	ki	SCONJ	_	_	12	mark	_	CSID=TR|Lang=tr
14	hayvanlara	hayvan	NOUN	_	Case=Dat|Number=Plur	12	obl	_	CSID=TR|Lang=tr|SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	Ehm	ehm	INTJ	_	_	5	discourse	_	CSID=TR|Lang=tr
2	iki	iki	NUM	_	NumType=Card	3	nummod	_	CSID=TR|Lang=tr
3	tane	tane	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	CSID=TR|Lang=tr
4	kardeş	kardeş	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	CSID=TR|Lang=tr
5	var	var	ADJ	_	_	0	root	_	CSID=TR|Lang=tr
6	und	und	CCONJ	_	_	9	cc	_	CSID=DE|Lang=de
7	der	der	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	CSID=DE|Lang=de
8	Bruder	Bruder	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj:pass	_	CSID=DE|Lang=de
9	wird	werden	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	conj	_	CSID=DE|Lang=de
10	...	...	PUNCT	_	_	5	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 nsubj:pass	color:blue
1	Und	und	CCONJ	_	_	3	cc	_	CSID=DE|Lang=de
2	dann	dann	ADV	_	_	3	advmod	_	CSID=DE|Lang=de
3	gibt	geben	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	CSID=DE|Lang=de
4	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	CSID=DE|Lang=de
5	noch	noch	ADV	_	_	3	advmod	_	CSID=DE|Lang=de
6	diese	dies	PRON	_	Case=Acc|Number=Plur|PronType=Dem	15	nmod	_	CSID=DE|Lang=de
7	ehm	ehm	INTJ	_	_	15	discourse	_	CSID=DE|Lang=de|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	CSID=OTHER
9	wie	wie	ADV	_	_	10	advmod	_	CSID=DE|Lang=de
10	heißen	heißen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	CSID=DE|Lang=de
11	die	der	PRON	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	10	nsubj	_	CSID=DE|Lang=de
12	nochmal	nochmal	ADV	_	_	10	advmod	_	CSID=DE|Lang=de|SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	CSID=OTHER
14	diese	dies	PRON	_	Case=Nom|Number=Plur|PronType=Dem	15	nmod	_	CSID=DE|Lang=de
15	Protectors	Protectors	NOUN	_	Foreign=Yes	3	obj	_	CSID=LANG3|Lang=en
16	halt	halt	ADV	_	_	15	advmod	_	CSID=DE|Lang=de
17	die	der	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	19	nsubj:pass	_	CSID=DE|Lang=de
18	dazu	dazu	PRON	_	_	19	obl	_	CSID=DE|Lang=de
19	ausgebildet	ausbilden	VERB	_	VerbForm=Part	15	acl	_	CSID=DE|Lang=de
20	wurden	werden	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	19	aux:pass	_	CSID=DE|Lang=de
21	öldürmek	öl	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun|Voice=Cau	19	advcl	_	CSID=TR|Lang=tr
22	için	için	ADP	_	_	21	mark	_	CSID=TR|Lang=tr
23	onları	o	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	21	obj	_	CSID=TR|Lang=tr|SpaceAfter=No
24	.	.	PUNCT	_	_	3	punct	_	CSID=OTHER

~~~


