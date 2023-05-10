---
layout: base
title:  'Statistics of cop in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `cop`

This relation is universal.

350 nodes (1%) are attached to their parents as `cop`.

247 instances of `cop` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86857142857143.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (188; 54% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (116; 33% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (25; 7% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	minor	parvus	ADJ	a-s---fnc	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	0	root	_	LId=parvus1
2	fuit	sum	AUX	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
3	ipsa	ipse	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	LId=ipse1
4	infamia	infamia	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	LId=infamia1
5	vero	verum	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	4	obl	_	SpaceAfter=No|LId=verum1
6	.	.	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	ea	is	PRON	p-p---nn-	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	LId=is1
2	prima	primus	ADJ	m-p---fn-	Case=Nom|Gender=Fem|Number=Plur|NumType=Ord	3	amod	_	_
3	piacula	piaculum	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	0	root	_	LId=piaculum1
4	sunto	sum	AUX	v3pfma---	Aspect=Imp|Mood=Imp|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	3	cop	_	LId=sum1|SpaceAfter=No|TraditionalMood=Imperativus|TraditionalTense=Futurum
5	:	:	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Sic	sic	ADV	d--------	_	3	advmod	_	LId=sic1
2	erimus	sum	AUX	v1pfia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	3	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Futurum
3	cuncti	cunctus	DET	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	0	root	_	SpaceAfter=No|LId=cunctus1
4	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
5	postquam	postquam	SCONJ	c--------	_	7	mark	_	LId=postquam1
6	nos	nos	PRON	p-p---ma-	Case=Acc|Number=Plur|Person=1|PronType=Prs	7	obj	_	LId=nos1
7	auferet	aufero	VERB	v3sfia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	advcl	_	LId=aufero1|TraditionalMood=Indicativus|TraditionalTense=Futurum
8	Orcus	Orcus	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	SpaceAfter=No|LId=Orcus1
9	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


