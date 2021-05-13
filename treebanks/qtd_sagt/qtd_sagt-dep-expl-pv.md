---
layout: base
title:  'Statistics of expl:pv in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-expl.html">expl</a></tt>.

89 nodes (0%) are attached to their parents as `expl:pv`.

58 instances of `expl:pv` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38202247191011.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (85; 96% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl:pv	color:blue
1	Daha	daha	ADV	_	_	2	advmod	_	LangID=TR
2	çok	çok	DET	_	_	4	det	_	LangID=TR
3	sebze	sebze	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	LangID=TR
4	türleri	tür	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	0	root	_	LangID=TR
5	weil	weil	SCONJ	_	_	11	mark	_	LangID=DE
6	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	expl	_	LangID=DE
7	mir	ich	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	11	expl:pv	_	LangID=DE
8	auch	auch	ADV	_	_	11	advmod	_	LangID=DE
9	sehr	sehr	ADV	_	_	10	advmod	_	LangID=DE
10	sehr	sehr	ADV	_	_	11	advmod	_	LangID=DE
11	schmeckt	schmecken	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	LangID=DE|SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 expl:pv	color:blue
1	Şimdi	şimdi	NOUN	_	Case=Nom|Number=Sing	5	obl	_	LangID=TR
2	adamın	adam	NOUN	_	Case=Gen|Number=Sing	3	nmod	_	LangID=TR
3	ismi	isim	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	LangID=TR
4	aklıma	akıl	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	obl	_	LangID=TR
5	gelmedi	gel	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	LangID=TR
6	ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	LangID=DE
7	bin	sein	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	LangID=DE
8	mir	ich	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	10	expl:pv	_	LangID=DE
9	nicht	nicht	PART	_	Polarity=Neg	10	advmod	_	LangID=DE
10	sicher	sicher	ADJ	_	_	5	conj	_	LangID=DE|SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	LangID=OTHER
12	wie	wie	SCONJ	_	_	15	mark	_	LangID=DE
13	der	der	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	15	nsubj	_	LangID=DE
14	genau	genau	ADV	_	_	15	advmod	_	LangID=DE
15	heißt	heißen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	LangID=DE|SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Aber	aber	CCONJ	_	_	5	cc	_	LangID=DE
2	ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	LangID=DE
3	bin	sein	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	LangID=DE
4	mir	ich	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	5	expl:pv	_	LangID=DE
5	sicher	sicher	ADV	_	_	0	root	_	LangID=DE
6	ähm	ähm	INTJ	_	_	5	discourse	_	LangID=DE
7	em	em	INTJ	_	_	5	discourse	_	LangID=DE
8	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	parataxis	_	LangID=DE
9	muss	müssen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	LangID=DE
10	ja	ja	ADV	_	_	8	advmod	_	LangID=DE
11	nicht	nicht	PART	_	Polarity=Neg	8	advmod	_	LangID=DE
12	sein	sein	AUX	_	VerbForm=Inf	8	cop	_	LangID=DE
13	aber	aber	CCONJ	_	_	14	cc	_	LangID=DE
14	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	conj	_	LangID=DE
15	kann	können	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	aux	_	LangID=DE
16	auch	auch	ADV	_	_	14	advmod	_	LangID=DE
17	sein	sein	AUX	_	VerbForm=Inf	14	cop	_	LangID=DE
18	dass	dass	SCONJ	_	_	26	mark	_	LangID=DE
19	jetzt	jetzt	ADV	_	_	26	advmod	_	LangID=DE
20	zu	zu	ADP	_	_	22	case	_	LangID=DE
21	dem	der	DET	_	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	22	det	_	LangID=DE
22	Beispiel	Beispiel	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	26	obl	_	LangID=DE
23	alle	alle	PRON	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|PronType=Ind	26	nsubj	_	LangID=DE
24	kein	kein	DET	_	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Neg|PronType=Neg	25	det	_	LangID=DE
25	Fußball	Fußball	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	26	obj	_	LangID=DE
26	angucken	angucken	VERB	_	VerbForm=Inf	8	ccomp	_	LangID=DE
27	ama	ama	CCONJ	_	_	32	cc	_	LangID=TR
28	eh	eh	INTJ	_	_	32	discourse	_	LangID=TR
29	o	o	DET	_	Definite=Def	31	det	_	LangID=TR
30	tek	tek	ADJ	_	_	31	amod	_	LangID=TR
31	kişi	kişi	NOUN	_	Case=Nom|Number=Sing	32	nsubj	_	LangID=TR
32	bakabilir	bak	VERB	_	Aspect=Hab|Evident=Fh|Mood=GenPot|Tense=Pres	26	conj	_	LangID=TR
33	o	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	38	reparandum	_	LangID=TR
34	da	de	ADV	_	_	33	advmod:emph	_	LangID=TR
35	öyle	öyle	ADV	_	_	38	advmod	_	LangID=TR
36	olanlar	ol	VERB	_	Number=Plur|Tense=Pres|VerbForm=Part	38	csubj	_	LangID=TR
37	da	de	ADV	_	_	36	advmod:emph	_	LangID=TR
38	var	var	ADJ	_	_	26	parataxis	_	LangID=TR|SpaceAfter=No
39	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


