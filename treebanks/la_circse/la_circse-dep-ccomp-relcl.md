---
layout: base
title:  'Statistics of ccomp:relcl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `ccomp:relcl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="la_circse-dep-ccomp-reported.html">ccomp:reported</a></tt>.

50 nodes (0%) are attached to their parents as `ccomp:relcl`.

27 instances of `ccomp:relcl` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.36.

The following 5 pairs of parts of speech are connected with `ccomp:relcl`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (45; 90% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp:relcl	color:blue
1	edissere	edissero	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=2|LiLaflcat=v3
2	agedum	agedum	INTJ	U	_	1	discourse	_	LiLaflcat=i
3	quo	quis	PRON	K	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Int	5	det	_	LASLAVariant=1|LiLaflcat=p
4	cadat	cado	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp:relcl	_	LiLaflcat=v3
5	fato	fatum	NOUN	A2	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	4	obl	_	LiLaflcat=n2
6	parens	parens	NOUN	A3	Case=Nom|Gender=Masc,Neut|InflClass=IndEurI|Number=Sing	4	nsubj	_	LASLAVariant=1|LiLaflcat=n3

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 ccomp:relcl	color:blue
1	quisquis	quisquis	DET	J	Case=Nom|Gender=Fem,Masc|InflClass=LatPron|Number=Sing|PronType=Rel	3	nsubj	_	LASLAVariant=1|LiLaflcat=p
2	in	in	ADP	R	AdpType=Prep	3	case	_	LiLaflcat=i
3	culpa	culpa	NOUN	A1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	6	csubj:relcl	_	LiLaflcat=n1
4	fuit	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	LASLAVariant=1|LiLaflcat=v6
5	dimissus	dimitto	VERB	B3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	6	advcl:pred	_	LiLaflcat=v3
6	odit	odi	VERB	B3	Aspect=Perf|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
7	omne	omnis	DET	L	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing|PronType=Tot	8	det	_	LiLaflcat=n7
8	quod	qui	PRON	J	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	9	nsubj	_	LASLAVariant=1|LiLaflcat=p
9	dubium	dubius	ADJ	C1	Case=Nom|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Sing	11	ccomp:relcl	_	LiLaflcat=n6
10	est	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	LASLAVariant=1|LiLaflcat=v6
11	cadat	cado	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 ccomp:relcl	color:blue
1	quis	quis	PRON	K	Case=Nom|Gender=Fem,Masc|InflClass=LatPron|Number=Sing|PronType=Int	3	nsubj	_	LASLAVariant=1|LiLaflcat=p
2	fuerit	sum	AUX	B6	Aspect=Perf|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	LASLAVariant=1|LiLaflcat=v6
3	ille	ille	DET	I	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Dem	9	ccomp:relcl	_	LiLaflcat=p
4	qui	qui	PRON	J	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	LASLAVariant=1|LiLaflcat=p
5	meum	meus	DET	F	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	8	det	_	LiLaflcat=n6
6	dono	donum	NOUN	A2	Case=Dat|Gender=Neut|InflClass=IndEurO|Number=Sing	7	obl	_	LiLaflcat=n2
7	dedit	do	VERB	B1	Aspect=Perf|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	LiLaflcat=v1
8	corpus	corpus	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	7	obj	_	LiLaflcat=n3
9	requiro	requiro	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3

~~~


