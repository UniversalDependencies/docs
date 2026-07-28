---
layout: base
title:  'Statistics of acl:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-acl.html">acl</a></tt>.

253 nodes (1%) are attached to their parents as `acl:relcl`.

206 instances of `acl:relcl` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.17391304347826.

The following 19 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (136; 54% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (24; 9% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (21; 8% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (19; 8% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (18; 7% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-NUM.html">NUM</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 acl:relcl	color:blue
1	uiuis	uiuo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
2	an	an	PART	O	PartType=Int|Polarity=Neg	4	cc	_	LiLaflcat=i
3	leto	letum	NOUN	A2	Case=Dat|Gender=Neut|InflClass=IndEurO|Number=Sing	4	obl:arg	_	LiLaflcat=n2
4	dedit	do	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	LiLaflcat=v1
5	idem	idem	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	11	det	_	LiLaflcat=p
6	tuos	tui	DET	F	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	8	obj	_	LiLaflcat=n6
7	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	8	nsubj	_	LASLAVariant=1|LiLaflcat=p
8	misit	mitto	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	acl:relcl	_	LiLaflcat=v3
9	ad	ad	ADP	R	AdpType=Prep	10	case	_	LASLAVariant=2|LiLaflcat=i
10	mortem	mors	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurI|Number=Sing	8	obl	_	LiLaflcat=n3
11	furor	furor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	4	nsubj	_	LASLAVariant=1|LiLaflcat=n3

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	ueniam	uenia	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	2	obj	_	LiLaflcat=n1
2	dabit	do	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
3	sibi	sui	PRON	G	Case=Dat|InflClass=LatAnom|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	2	obl:arg	_	LASLAVariant=1|LiLaflcat=p
4	ipse	ipse	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	2	nsubj	_	LiLaflcat=p
5	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	LASLAVariant=1|LiLaflcat=p
6	nulli	nullus	DET	L	Case=Dat|Gender=Fem,Masc,Neut|InflClass=LatPron|Number=Sing|PronType=Neg	7	obl:arg	_	LiLaflcat=p
7	dedit	do	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	LiLaflcat=v1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl:relcl	color:blue
1	te	tu	PRON	E	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	4	obj	_	LiLaflcat=p
2	Creo	creon	PROPN	A3	Case=Voc|Gender=Fem,Masc,Neut|InflClass=IndEurX|NameType=Giv|Number=Sing	4	vocative	_	LASLAVariant=N|LiLaflcat=n3
3	hic	hic	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	5	det	_	LASLAVariant=1|LiLaflcat=p
4	poscit	posco	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
5	labor	labor	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Sing	4	nsubj	_	LASLAVariant=1|LiLaflcat=n3
6	ad	ad	ADP	R	AdpType=Prep	7	case	_	LASLAVariant=2|LiLaflcat=i
7	quem	qui	PRON	J	Case=Acc|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	10	obl	_	LASLAVariant=1|LiLaflcat=p
8	secundum	secundus	ADJ	D2	Case=Acc|Degree=Pos|Gender=Masc,Neut|InflClass=IndEurO|Number=Sing|NumType=Ord	10	advcl:pred	_	LASLAVariant=2|LiLaflcat=n6
9	regna	regnum	NOUN	A2	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur	10	nsubj	_	LiLaflcat=n2
10	respiciunt	respicio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	LiLaflcat=v5
11	mea	meus	DET	F	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Plur|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	9	det	_	LiLaflcat=n6

~~~


