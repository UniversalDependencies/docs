---
layout: base
title:  'Statistics of discourse in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `discourse`

This relation is universal.

413 nodes (0%) are attached to their parents as `discourse`.

335 instances of `discourse` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 13.409200968523.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (190; 46% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (174; 42% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (28; 7% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (8; 2% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (7; 2% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 discourse	color:blue
1	vos	uos	PRON	p|p|2|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=2|PronType=Prs	11	nsubj	_	_
2	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	11	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	meam	meus	DET	a|a|1|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	6	det	_	_
5	audientes	audio	VERB	t|t|-|p|p|p|a|m|n|-	Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	11	xcomp	_	TraditionalMood=Participium|TraditionalTense=Praesens
6	petitionem	petitio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	5	punct	_	_
8	ita	ita	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	10	advmod	_	_
9	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	obl:arg	_	_
10	dare	do	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	11	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
11	videtis	uideo	VERB	v|v|2|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	nam	nam	PART	c|c|-|-|-|-|-|-|-|-	_	9	discourse	_	_
2	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
3	defensores	defensor	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	9	xcomp	_	_
4	ne	ne	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	6	cc	_	_
5	que	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	fixed	_	_
6	restauratores	restaurator	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	3	conj	_	_
7	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	VerbForm=Inf	3	cop	_	_
8	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	9	advmod:neg	_	_
9	deveamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	tali	talis	DET	a|a|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
2	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	3	discourse	_	_
3	ordine	ordo	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	0	root	_	_
4	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	PronType=Rel	17	mark	_	_
5	ego	ego	PRON	p|p|1|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
6	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	7	cc	_	_
7	heredes	heres	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	5	conj	_	_
8	meus	meus	DET	a|a|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	_
9	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	11	case	_	_
10	ipsa	ipse	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	11	det	_	_
11	casa	casa	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	17	obl	_	_
12	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
13	res	res	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	11	conj	_	_
14	residere	resideo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	11	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
15	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
16	avitare	habito	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	11	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
17	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
18	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	29	cc	_	_
19	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	20	det	_	_
20	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	24	obj	_	_
21	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	22	cc	_	_
22	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	20	conj	_	_
23	bene	bene	ADV	d|d|-|-|-|-|-|-|-|-	_	24	advmod	_	_
24	lavorare	laboro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	29	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
25	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	26	cc	_	_
26	gubernare	guberno	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	24	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
27	seo	seu	CCONJ	c|c|-|-|-|-|-|-|-|-	_	28	cc	_	_
28	meliorare	melioro	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	24	conj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
29	debeamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
30	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


