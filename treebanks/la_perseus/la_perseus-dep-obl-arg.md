---
layout: base
title:  'Statistics of obl:arg in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-obl.html">obl</a></tt>.

309 nodes (1%) are attached to their parents as `obl:arg`.

195 instances of `obl:arg` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.64401294498382.

The following 12 pairs of parts of speech are connected with `obl:arg`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (119; 39% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (117; 38% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (23; 7% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (16; 5% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (11; 4% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:arg	color:blue
1	Sedibus	sedes	NOUN	n-p---fd-	Case=Dat|Gender=Fem|Number=Plur	3	obl:arg	_	LId=sedes1
2	hunc	hic	DET	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	3	obj	_	LId=hic1
3	refer	refero	VERB	v2spma---	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=refero1|TraditionalMood=Imperativus|TraditionalTense=Praesens
4	ante	ante	ADV	d--------	AdvType=Tim	3	advmod:tmod	_	LId=ante1
5	suis	suus	DET	p-p---fd-	Case=Dat|Gender=Fem|Number=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	1	det	_	_
6	et	et	CCONJ	c--------	_	7	cc	_	LId=et1
7	conde	condo	VERB	v2spma---	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LId=condo1|TraditionalMood=Imperativus|TraditionalTense=Praesens
8	sepulchro	sepulcrum	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No|LId=sepulcrum1
9	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 obl:arg	color:blue
1	Non	non	PART	d--------	_	11	advmod:neg	_	LId=non1
2	Simois	Simois	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	LId=Simois1
3	tibi	tu	PRON	p-s---md-	Case=Dat|Number=Sing|Person=2|PronType=Prs	11	obl:arg	_	SpaceAfter=No|LId=tu1
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	nec	neque	CCONJ	c--------	_	6	cc	_	_
6	Xanthus	Xanthus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	SpaceAfter=No|LId=Xanthus1
7	,	,	PUNCT	u--------	_	8	punct	_	LId=comma1
8	nec	neque	CCONJ	c--------	_	10	cc	_	_
9	Dorica	Doricus	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	10	amod	_	LId=Doricus1
10	castra	castrum	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	2	conj	_	LId=castrum1
11	defuerint	desum	VERB	v3ptia---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Futurum
12	;	;	PUNCT	u--------	_	11	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:arg	color:blue
1	huic	hic	DET	p-s---fd-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	3	obl:arg	_	_
2	rostrum	rostrum	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	_
3	inserens	insero	VERB	v-spp-fn-	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	4	advcl	_	LId=insero2|TraditionalMood=Participium|TraditionalTense=Praesens
4	Satiatur	satio	VERB	v3spip---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LId=satio1|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	ipsa	ipse	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	nsubj:pass	_	_
6	et	et	CCONJ	c--------	_	7	cc	_	_
7	torquet	torqueo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
8	convivam	conviva	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
9	fame	fames	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	u--------	_	4	punct	_	_

~~~


