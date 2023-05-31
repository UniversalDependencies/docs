---
layout: base
title:  'Statistics of acl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="la_llct-dep-acl-relcl.html">acl:relcl</a></tt>.

4759 nodes (2%) are attached to their parents as `acl`.

4211 instances of `acl` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.0203824332843.

The following 19 pairs of parts of speech are connected with `acl`: <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2535; 53% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1896; 40% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (101; 2% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (99; 2% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (67; 1% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (15; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (12; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-ADV.html">ADV</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_llct-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	2	det	_	_
2	Cunimundus	Cunimundus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
3	clericus	clericus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	_
4	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
5	ac	hic	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	comotatione	commutatio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	10	obl	_	_
7	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	8	case	_	_
8	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	9	obl:arg	_	_
9	facta	facio	VERB	t|t|-|s|r|p|p|f|a|-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	6	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
10	suscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	[Propn]	_	PROPN	Punc	_	9	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	rogatu	rogo	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
4	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
5	Leuprando	Leoprandus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	3	obl:arg	_	_
6	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	7	cc	_	_
7	Iohanne	Johannes	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	1	punct	_	_
9	subscripsi	subscribo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 acl	color:blue
1	tali	talis	DET	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	ordine	ordo	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	0	root	_	_
3	ud	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	9	mark	_	_
4	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	6	case	_	_
5	presenti	praesens	ADJ	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	6	amod	_	_
6	die	dies	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	9	obl	_	_
7	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
8	mea	meus	DET	a|a|1|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	10	det	_	_
9	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
10	potestatem	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	9	obl	_	_
11	abendum	habeo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	10	acl	_	SpaceAfter=No|TraditionalMood=Gerundium
12	,	,	PUNCT	Punc	_	13	punct	_	_
13	inperandum	impero	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	11	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
14	,	,	PUNCT	Punc	_	15	punct	_	_
15	lavorandum	laboro	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	11	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
16	,	,	PUNCT	Punc	_	17	punct	_	_
17	meliorandum	melioro	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	11	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
18	,	,	PUNCT	Punc	_	21	punct	_	_
19	privato	priuo	VERB	t|t|-|s|r|p|p|n|b|-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	20	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
20	nomine	nomen	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	21	obl	_	_
21	usufructuandum	usufructuo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Prosp|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	11	conj	_	SpaceAfter=No|TraditionalMood=Gerundium
22	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


