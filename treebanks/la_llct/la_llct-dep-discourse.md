---
layout: base
title:  'Statistics of discourse in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `discourse`

This relation is universal.

437 nodes (0%) are attached to their parents as `discourse`.

358 instances of `discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.7025171624714.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (198; 45% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (190; 43% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (35; 8% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PART.html">PART</a></tt> (13; 3% instances), <tt><a href="la_llct-pos-AUX.html">AUX</a></tt>-<tt><a href="la_llct-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	nam	nam	PART	c|c|-|-|-|-|-|-|-|-	_	9	discourse	_	_
2	nos	nos	PRON	p|p|1|p|-|-|-|m|n|-	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
3	defensores	defensor	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	9	xcomp	_	_
4	ne	ne	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	6	cc	_	_
5	que	que	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	fixed	_	_
6	restauratores	restaurator	NOUN	n|n|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur	3	conj	_	_
7	esse	sum	AUX	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf	3	cop	_	_
8	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	9	advmod:neg	_	_
9	deveamus	debeo	VERB	v|v|1|p|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


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
9	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Number=Sing|Person=1|PronType=Prs	10	obl:arg	_	_
10	dare	do	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|VerbForm=Inf|Voice=Act	11	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
11	videtis	uideo	VERB	v|v|2|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 discourse	color:blue
1	illa	ille	DET	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
2	alia	alius	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Con	4	det	_	_
3	vero	uero	ADV	d|d|-|-|-|-|-|-|-|-	_	7	discourse	_	_
4	medietas	medietas	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
5	sit	sum	AUX	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	TraditionalMood=Subiunctivus|TraditionalTense=Praesens
6	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	potestate	potestas	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	0	root	_	_
8	ipsius	ipse	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
10	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	11	cc	_	_
11	nostre	noster	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


