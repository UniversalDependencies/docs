---
layout: base
title:  'Statistics of advcl:abs in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `advcl:abs`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_circse-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_circse-dep-advcl-pred.html">advcl:pred</a></tt>, <tt><a href="la_circse-dep-advcl-relcl.html">advcl:relcl</a></tt>.

114 nodes (1%) are attached to their parents as `advcl:abs`.

76 instances of `advcl:abs` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.02631578947368.

The following 9 pairs of parts of speech are connected with `advcl:abs`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (93; 82% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl:abs	color:blue
1	transuectus	transueho	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	5	advcl:pred	_	LiLaflcat=v3
2	uada	uadum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	1	obj	_	LiLaflcat=n2
3	Tartari	tartarus	PROPN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	2	nmod	_	LASLAVariant=N|LiLaflcat=n2
4	pacatis	paco	VERB	B1	Aspect=Perf|Case=Abl|Degree=Pos|Gender=Masc|InflClass=LatA|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	5	advcl:abs	_	LiLaflcat=v1
5	redit	redeo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v6
6	inferis	inferi	NOUN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Plur	4	nsubj:pass	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advcl:abs	color:blue
1	auctore	auctor	NOUN	A3	Case=Abl|Gender=Masc|InflClass=IndEurX|Number=Sing	3	advcl:abs	_	LiLaflcat=n3
2	Phoebo	phoebus	PROPN	A2	Case=Abl|Gender=Masc|InflClass=IndEurO|NameType=Rel|Number=Sing	1	nsubj	_	LASLAVariant=N|LiLaflcat=n2
3	gignor	gigno	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LiLaflcat=v3
4	haud	haud	PART	P	Polarity=Neg	6	advmod:neg	_	LiLaflcat=i
5	generis	genus	NOUN	A3	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	6	obl:arg	_	LASLAVariant=1|LiLaflcat=n3
6	pudet	pudeo	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LiLaflcat=v2

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advcl:abs	color:blue
1	grauis	grauis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Sing	0	root	_	LiLaflcat=n7
2	ille	ille	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	1	nsubj	_	LiLaflcat=p
3	sociis	socius	NOUN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|Number=Plur	1	obl	_	LASLAVariant=1|LiLaflcat=n2
4	stante	sto	VERB	B1	Aspect=Imp|Case=Abl|Degree=Pos|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	1	advcl:abs	_	LiLaflcat=v1
5	adhuc	adhuc	ADV	M	Degree=Pos	4	advmod:tmod	_	LiLaflcat=i
6	Troia	troia	PROPN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	4	nsubj	_	LASLAVariant=N|LiLaflcat=n1
7	fuit	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	cop	_	LASLAVariant=1|LiLaflcat=v6
8	quid	quis	PRON	K	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Int	9	obj	_	LASLAVariant=1|LiLaflcat=p
9	rere	reor	VERB	B2	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	1	conj	_	LiLaflcat=v2
10	ad	ad	ADP	R	AdpType=Prep	11	case	_	LASLAVariant=2|LiLaflcat=i
11	animum	animus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	16	obl	_	LiLaflcat=n2
12	suapte	suus	DET	H	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs|Reflex=Yes	13	det	_	LiLaflcat=n6
13	natura	natura	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	14	obl	_	LiLaflcat=n1
14	trucem	trux	ADJ	C5	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurI|Number=Sing	11	amod	_	LiLaflcat=n7
15	Troiam	troia	PROPN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|NameType=Geo|Number=Sing	16	nsubj	_	LASLAVariant=N|LiLaflcat=n1
16	addidisse	addo	VERB	B3	Aspect=Perf|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Act	9	ccomp	_	LiLaflcat=v3

~~~


