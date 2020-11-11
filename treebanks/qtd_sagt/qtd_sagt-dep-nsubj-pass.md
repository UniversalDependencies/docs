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
1	Und	und	CCONJ	_	_	6	cc	_	LangID=DE
2	wie	wie	ADV	_	_	6	advmod	_	LangID=DE
3	einfach	einfach	ADV	_	_	4	advmod	_	LangID=DE
4	übernatürlich	übernatürlich	ADJ	_	_	6	advmod	_	LangID=DE
5	Milch	Milch	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	LangID=DE
6	hergestellt	herstellen	VERB	_	VerbForm=Part	0	root	_	LangID=DE
7	wird	werden	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	LangID=DE|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	LangID=OTHER
9	yani	yani	ADV	_	_	12	advmod	_	LangID=TR
10	o	o	PRON	_	Case=Nom|Number=Sing|Person=3	12	obl	_	LangID=TR
11	kadar	kadar	ADP	_	_	10	case	_	LangID=TR
12	acıdım	acı	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Past	6	parataxis	_	LangID=TR
13	ki	ki	SCONJ	_	_	12	mark	_	LangID=TR
14	hayvanlara	hayvan	NOUN	_	Case=Dat|Number=Plur	12	obl	_	LangID=TR|SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	Ehm	ehm	INTJ	_	_	5	discourse	_	LangID=TR
2	iki	iki	NUM	_	NumType=Card	3	nummod	_	LangID=TR
3	tane	tane	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	LangID=TR
4	kardeş	kardeş	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	LangID=TR
5	var	var	ADJ	_	_	0	root	_	LangID=TR
6	und	und	CCONJ	_	_	9	cc	_	LangID=DE
7	der	der	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	LangID=DE
8	Bruder	Bruder	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj:pass	_	LangID=DE
9	wird	werden	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	conj	_	LangID=DE
10	...	...	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 nsubj:pass	color:blue
1	Und	und	CCONJ	_	_	3	cc	_	LangID=DE
2	dann	dann	ADV	_	_	3	advmod	_	LangID=DE
3	gibt	geben	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
4	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	LangID=DE
5	noch	noch	ADV	_	_	3	advmod	_	LangID=DE
6	diese	dies	PRON	_	Case=Acc|Number=Plur|PronType=Dem	15	nmod	_	LangID=DE
7	ehm	ehm	INTJ	_	_	15	discourse	_	LangID=DE|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	LangID=OTHER
9	wie	wie	ADV	_	_	10	advmod	_	LangID=DE
10	heißen	heißen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	LangID=DE
11	die	der	PRON	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	10	nsubj	_	LangID=DE
12	nochmal	nochmal	ADV	_	_	10	advmod	_	LangID=DE|SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	LangID=OTHER
14	diese	dies	PRON	_	Case=Nom|Number=Plur|PronType=Dem	15	nmod	_	LangID=DE
15	Protectors	Protectors	NOUN	_	Foreign=Yes	3	obj	_	LangID=LANG3
16	halt	halt	ADV	_	_	15	advmod	_	LangID=DE
17	die	der	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	19	nsubj:pass	_	LangID=DE
18	dazu	dazu	PRON	_	_	19	obl	_	LangID=DE
19	ausgebildet	ausbilden	VERB	_	VerbForm=Part	15	acl	_	LangID=DE
20	wurden	werden	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	19	aux:pass	_	LangID=DE
21	öldürmek	öl	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun|Voice=Cau	19	advcl	_	LangID=TR
22	için	için	ADP	_	_	21	mark	_	LangID=TR
23	onları	o	PRON	_	Case=Acc|Number=Plur|Person=3	21	obj	_	LangID=TR|SpaceAfter=No
24	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


