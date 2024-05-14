---
layout: base
title:  'Statistics of advmod:tmod in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_llct-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_llct-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_llct-dep-advmod-neg.html">advmod:neg</a></tt>.

412 nodes (0%) are attached to their parents as `advmod:tmod`.

272 instances of `advmod:tmod` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.91504854368932.

The following 6 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (244; 59% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (104; 25% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (30; 7% instances), <tt><a href="la_llct-pos-PRON.html">PRON</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (19; 5% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (14; 3% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:tmod	color:blue
1	tunc	tunc	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	4	advmod:tmod	_	_
2	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Eriteo	Eriteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	nsubj	_	_
4	cepit	capio	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	dicere	dico	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
6	:	:	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 16 advmod:tmod	color:blue
1	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	0	root	_	_
2	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
3	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	omnibus	omnis	DET	a|a|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Tot	1	conj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	8	mark	_	_
7	meae	meus	DET	a|a|1|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	9	det	_	_
8	pertenuit	pertineo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl:cmp	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
9	potestati	potestas	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	8	obl:arg	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	8	punct	_	_
11	ita	ita	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	1	advmod	_	_
12	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	13	case	_	_
13	prefinito	praefinitus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	1	obl	_	_
14	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	18	case	_	_
15	tua	tuus	DET	a|a|2|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	18	det	_	_
16	semper	semper	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	1	advmod:tmod	_	_
17	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
18	defensione	defensio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	1	obl	_	_
19	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	20	cc	_	_
20	ordinatione	ordinatio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	18	conj	_	SpaceAfter=No
21	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 26 advmod:tmod	color:blue
1	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
2	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	3	case	_	_
3	res	res	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	10	obl	_	_
4	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
5	istorum	iste	DET	p|p|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	6	det	_	_
6	Drachi	Draco	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
7	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	8	cc	_	_
8	Vualperti	Walpertus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	6	conj	_	_
9	autorem	auctor	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	10	xcomp	_	_
10	existo	exsisto	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	13	case	_	_
13	eo	is	PRON	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obl	_	_
14	quod	quod	SCONJ	c|c|-|-|-|-|-|-|-|-	_	31	mark	_	_
15	antedicto	antedico	VERB	t|t|-|s|r|p|p|m|a|-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	16	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
16	Flaiperto	Flaipertus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	31	nsubj	_	_
17	genitor	genitor	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	16	appos	_	_
18	meus	meus	DET	a|a|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	17	det	_	SpaceAfter=No
19	,	,	PUNCT	Punc	_	24	punct	_	_
20	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	24	nsubj	_	_
21	eas	is	PRON	p|p|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	24	obj	_	_
22	istorum	iste	DET	p|p|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	23	det	_	_
23	germanorum	germanus	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	24	obl:arg	_	_
24	venderat	uendo	VERB	v|v|3|s|l|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	16	acl:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Plusquamperfectum
25	,	,	PUNCT	Punc	_	16	punct	_	_
26	nunc	nunc	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Tim	29	advmod:tmod	_	_
27	sunt	sum	AUX	v|v|3|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	29	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
28	amplius	amplius	ADV	d|d|-|-|-|-|-|-|-|-	_	29	advmod	_	_
29	annorum	annus	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	31	parataxis	_	_
30	triginta	triginta	NUM	m|m|-|-|-|-|-|-|-|-	NumForm=Word|NumType=Card	29	nummod	_	_
31	abuit	habeo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	advcl	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
32	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	34	case	_	_
33	suum	suus	DET	a|a|3|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	34	det	_	_
34	proprietario	proprietarius	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	31	obl	_	SpaceAfter=No
35	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


