---
layout: base
title:  'Statistics of advcl:cmp in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `advcl:cmp`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="la_perseus-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_perseus-dep-advcl-pred.html">advcl:pred</a></tt>.

63 nodes (0%) are attached to their parents as `advcl:cmp`.

51 instances of `advcl:cmp` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.6031746031746.

The following 15 pairs of parts of speech are connected with `advcl:cmp`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (16; 25% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (13; 21% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (12; 19% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advcl:cmp	color:blue
1	Haec	hic	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	LId=hic1
2	colonia	colonia	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	LId=colonia1
3	retroversus	retroversus	ADV	d--------	_	4	advmod	_	LId=retroversus1
4	crescit	cresco	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=cresco1|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	tanquam	tamquam	SCONJ	d--------	_	6	mark	_	LId=tamquam1
6	coda	cauda	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	4	advcl:cmp	_	LId=cauda1
7	vituli	vitulus	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No|LId=vitulus1
8	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 advcl:cmp	color:blue
1	sicut	sicut	SCONJ	c--------	_	4	mark	_	LId=sicut1
2	et	et	ADV	d--------	_	4	cc	_	LId=et1
3	ego	ego	PRON	p-s---mn-	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	LId=ego1
4	accepi	accipio	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl:cmp	_	LId=accipio1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	a	ab	ADP	r--------	_	6	case	_	LId=ab1
6	Patre	pater	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	4	obl	_	LId=pater1
7	meo	meus	DET	a-s---mb-	Case=Abl|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	6	det	_	LId=meus1
8	et	et	CCONJ	c--------	_	9	cc	_	LId=et1
9	dabo	do	VERB	v1sfia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LId=do1|TraditionalMood=Indicativus|TraditionalTense=Futurum
10	illi	ille	DET	p-s---md-	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	9	obl:arg	_	LId=ille1
11	stellam	stella	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	9	obj	_	LId=stella1
12	matutinam	matutinus	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	11	amod	_	SpaceAfter=No|LId=matutinus1
13	.	.	PUNCT	u--------	_	9	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 advcl:cmp	color:blue
1	Magis	magis	ADV	n-s---fn-	Degree=Cmp	4	advmod	_	LId=magis2
2	illa	ille	DET	p-s---fn-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	LId=ille1
3	matella	matella	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	LId=matella1
4	digna	dignus	ADJ	a-s---fn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	LId=dignus1
5	fuit	sum	AUX	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
6	quam	quam	SCONJ	c--------	PronType=Rel	8	mark	_	LId=quam1
7	taurus	taurus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	LId=taurus1
8	iactaret	iacto	VERB	v3sisa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl:cmp	_	LId=jacto1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
9	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


