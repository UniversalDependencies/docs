---
layout: base
title:  'Statistics of vocative in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `vocative`

This relation is universal.

230 nodes (1%) are attached to their parents as `vocative`.

139 instances of `vocative` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.98695652173913.

The following 15 pairs of parts of speech are connected with `vocative`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (141; 61% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (45; 20% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (16; 7% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (10; 4% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-ADV.html">ADV</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_circse-pos-PRON.html">PRON</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	redde	reddo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
2	iam	iam	ADV	M	Degree=Pos	1	advmod:tmod	_	LiLaflcat=i
3	Grais	grai	PROPN	A2	Case=Dat|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	1	obl:arg	_	LASLAVariant=N|LiLaflcat=n2
4	pater	pater	NOUN	A3	Case=Voc|Gender=Masc|InflClass=IndEurX|Number=Sing	1	vocative	_	LiLaflcat=n3
5	altisona	altisonus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Neut|InflClass=IndEurO|Number=Plur	7	amod	_	LiLaflcat=n6
6	quatiens	quatio	VERB	B5	Aspect=Imp|Case=Voc|Degree=Pos|Gender=Masc|InflClass=LatI2|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	4	acl	_	LiLaflcat=v5
7	regna	regnum	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	6	obj	_	LiLaflcat=n2
8	placatos	placatus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Masc|InflClass=IndEurO|Number=Plur	9	amod	_	LiLaflcat=n6
9	deos	deus	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	1	obj	_	LiLaflcat=n2

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 vocative	color:blue
1	at	at	CCONJ	S	_	3	cc	_	LASLAVariant=2|LiLaflcat=i
2	tu	tu	PRON	E	Case=Voc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	4	det	_	LiLaflcat=p
3	ede	edo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=1|LiLaflcat=v3
4	Theseu	theseus	PROPN	A7	Case=Voc|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing|Variant=Greek	3	vocative	_	LASLAVariant=N|LiLaflcat=n2,n3
5	sed	sed	CCONJ	S	_	8	cc	_	LiLaflcat=i
6	tua	tuus	DET	F	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing|Number[psor]=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	8	det	_	LiLaflcat=n6
7	Theseu	theseus	PROPN	A7	Case=Voc|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing|Variant=Greek	3	vocative	_	LASLAVariant=N|LiLaflcat=n2,n3
8	fide	fides	NOUN	A5	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Sing	3	obl	_	LASLAVariant=2|LiLaflcat=n5

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 vocative	color:blue
1	ignaua	ignauus	ADJ	C1	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Sing	2	vocative	_	LASLAVariant=2|LiLaflcat=n6
2	cessas	cesso	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
3	fortis	fortis	ADJ	C4	Case=Nom|Degree=Pos|Gender=Fem|InflClass=IndEurI|Number=Sing	2	vocative	_	LiLaflcat=n7
4	in	in	ADP	R	AdpType=Prep	5	case	_	LiLaflcat=i
5	pueros	puer	NOUN	A2	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Plur	3	obl	_	LiLaflcat=n2
6	modo	modo	ADV	M	Degree=Pos	5	advmod:emph	_	LASLAVariant=1|LiLaflcat=i
7	pauidas	pauidus	ADJ	C1	Case=Acc|Degree=Pos|Gender=Fem|InflClass=IndEurA|Number=Plur	9	amod	_	LiLaflcat=n6
8	que	que	CCONJ	S	_	9	cc	_	LiLaflcat=i
9	matres	mater	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Plur	5	conj	_	LiLaflcat=n3

~~~


