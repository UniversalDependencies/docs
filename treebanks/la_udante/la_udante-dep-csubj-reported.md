---
layout: base
title:  'Statistics of csubj:reported in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `csubj:reported`

This relation is a language-specific subtype of <tt><a href="la_udante-dep-csubj.html">csubj</a></tt>.
There are also 4 other language-specific subtypes of `csubj`: <tt><a href="la_udante-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="la_udante-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="la_udante-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_udante-dep-csubj-relcl.html">csubj:relcl</a></tt>.

20 nodes (0%) are attached to their parents as `csubj:reported`.

20 instances of `csubj:reported` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.45.

The following 4 pairs of parts of speech are connected with `csubj:reported`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (12; 60% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (4; 20% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (3; 15% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:reported	color:blue
1	Et	et	CCONJ	co	_	4	cc	_	_
2	in	in	ADP	e	_	3	case	_	_
3	Ezechiele	ezechiel	PROPN	Sms3b	Case=Abl|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing	4	obl	_	_
4	scribitur	scribo	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	:	:	PUNCT	Pu	_	7	punct	_	_
6	«	«	PUNCT	Pu	_	7	punct	_	SpaceAfter=No
7	Vidi	uideo	VERB	va2irs1	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj:reported	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
8	,	,	PUNCT	Pu	_	10	punct	_	_
9	et	et	CCONJ	co	_	10	cc	_	_
10	cecidi	cado	VERB	va3irs1	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
11	in	in	ADP	e	_	12	case	_	_
12	faciem	facies	NOUN	sfs5a	Case=Acc|Gender=Fem|InflClass=IndEurE|Number=Sing	10	obl	_	_
13	meam	meus	DET	dsfsa	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	12	det	_	SpaceAfter=No
14	»	»	PUNCT	Pu	_	7	punct	_	SpaceAfter=No
15	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 17 csubj:reported	color:blue
1	Sed	sed	CCONJ	co	_	3	cc	_	_
2	tunc	tunc	ADV	r	AdvType=Tim|PronType=Dem	3	advmod:tmod	_	_
3	arguetur	arguo	VERB	vp3ifs3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
4	magis	magis	ADV	rc	Degree=Cmp	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Pu	_	7	punct	_	_
6	et	et	CCONJ	co	_	7	cc	_	_
7	queretur	quaero	VERB	vp3*ifs3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	3	conj	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
8	:	:	PUNCT	Pu	_	17	punct	_	_
9	Qua	qui	PRON	r	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	10	det	_	_
10	re	res	NOUN	r	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	17	obl	_	_
11	potius	potius	ADV	r+	Degree=Cmp	17	advmod	_	_
12	elevatio	eleuatio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	17	nsubj	_	_
13	emisperialis	emisperialis	ADJ	afs2n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	12	amod	_	_
14	fuit	sum	AUX	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
15	ab	ab	ADP	e	_	17	case	_	_
16	ista	iste	DET	dpfsb	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	17	det	_	_
17	parte	pars	NOUN	sfs3b	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	3	csubj:reported	_	_
18	quam	quam	SCONJ	c	PronType=Rel	20	mark	_	_
19	ab	ab	ADP	e	_	20	case	_	_
20	alia	alius	DET	dpfs1b	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Con	17	advcl:cmp	_	SpaceAfter=No
21	?	?	PUNCT	Pu	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 18 csubj:reported	color:blue
1	Sed	sed	CCONJ	co	_	3	cc	_	_
2	nunc	nunc	ADV	r	AdvType=Tim	3	advmod:tmod	_	_
3	queritur	quaero	VERB	vp3*ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
4	:	:	PUNCT	Pu	_	10	punct	_	_
5	Cum	cum	SCONJ	cs	PronType=Rel	10	mark	_	_
6	illa	ille	DET	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	7	det	_	_
7	regio	regio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	10	nsubj	_	_
8	celi	caelum	NOUN	sns2g	Case=Gen|Gender=Neut|InflClass=IndEurO|Number=Sing	7	nmod	_	_
9	circulariter	circulariter	ADV	r	_	10	advmod	_	_
10	feratur	fero	VERB	vp3cps3	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	18	advcl	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
11	,	,	PUNCT	Pu	_	10	punct	_	_
12	qua	qui	PRON	r	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	13	det	_	_
13	re	res	NOUN	r	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	18	obl	_	_
14	illa	ille	DET	dpfsn	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	15	det	_	_
15	elevatio	eleuatio	NOUN	sfs3n	Case=Nom|Gender=Fem|InflClass=IndEurX|Number=Sing	18	nsubj	_	_
16	non	non	PART	r	Polarity=Neg	18	advmod:neg	_	_
17	fuit	sum	AUX	va5irs3	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
18	circularis	circularis	ADJ	afs2n	Case=Nom|Gender=Fem|InflClass=IndEurI|Number=Sing	3	csubj:reported	_	SpaceAfter=No
19	?	?	PUNCT	Pu	_	3	punct	_	_

~~~


