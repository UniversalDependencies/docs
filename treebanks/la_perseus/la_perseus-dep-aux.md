---
layout: base
title:  'Statistics of aux in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="la_perseus-dep-aux-pass.html">aux:pass</a></tt>.

4 nodes (0%) are attached to their parents as `aux`.

4 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (3; 75% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux	color:blue
1	mihi	ego	PRON	p-s---md-	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
2	ac	atque	CCONJ	c--------	_	3	cc	_	_
3	tibi	tu	PRON	p-s---md-	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	conj	_	_
4	providendum	provideo	VERB	v-s-g-nn-	Aspect=Prosp|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Gerundivum
5	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	LId=edo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	ne	ne	SCONJ	d--------	_	10	mark	_	LId=ne1
7	etiam	etiam	ADV	c--------	_	8	advmod	_	_
8	a	ab	ADP	r--------	_	9	case	_	_
9	bonis	bonus	ADJ	a-p---mb-	Case=Abl|Gender=Masc|Number=Plur	10	obl	_	_
10	desideretur	desidero	VERB	v3spsp---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	csubj:pass	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
11	.	.	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 aux	color:blue
1	ceterum	ceterum	ADV	d--------	_	7	advmod	_	LId=ceterum1
2	mihi	ego	PRON	p-s---md-	Case=Dat|Number=Sing|Person=1|PronType=Prs	7	obl:arg	_	LId=ego1
3	in	in	ADP	r--------	_	4	case	_	LId=in1
4	dies	dies	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	7	obl	_	LId=dies1
5	magis	magis	ADV	d--------	Degree=Cmp	7	advmod	_	LId=magis1
6	animus	animus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj:pass	_	LId=animus1
7	accenditur	accendo	VERB	v3spip---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LId=accendo2|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	,	,	PUNCT	u--------	_	10	punct	_	LId=comma1
9	quom	cum	SCONJ	---------	_	10	mark	_	_
10	considero	considero	VERB	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	LId=considero1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
12	quae	qui	PRON	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	10	obj	_	LId=qui1
13	condicio	condicio	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	LId=condicio1
14	vitae	vita	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	LId=vita1
15	futura	sum	AUX	v-sfpafn-	Aspect=Prosp|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part	12	cop	_	LId=sum1|TraditionalMood=Participium|TraditionalTense=Futurum
16	sit	sum	AUX	v3spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	LId=sum1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
17	,	,	PUNCT	u--------	_	18	punct	_	LId=comma1
18	nisi	nisi	SCONJ	c--------	_	21	mark	_	LId=nisi1
19	nosmet	nos	PRON	p-p---mn-	Case=Nom|Number=Plur|Person=1|PronType=Prs	21	nsubj	_	LId=nos1
20	ipsi	ipse	DET	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	19	det	_	LId=ipse1
21	vindicamus	vindico	VERB	v1ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	LId=vindico1|TraditionalMood=Indicativus|TraditionalTense=Praesens
22	in	in	ADP	r--------	_	23	case	_	LId=in1
23	libertatem	libertas	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	21	obl	_	SpaceAfter=No|LId=libertas1
24	.	.	PUNCT	u--------	_	7	punct	_	LId=punc1

~~~


