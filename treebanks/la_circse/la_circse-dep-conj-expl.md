---
layout: base
title:  'Statistics of conj:expl in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `conj:expl`

This relation is a language-specific subtype of <tt><a href="la_circse-dep-conj.html">conj</a></tt>.

37 nodes (0%) are attached to their parents as `conj:expl`.

37 instances of `conj:expl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.51351351351351.

The following 11 pairs of parts of speech are connected with `conj:expl`: <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (9; 24% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (8; 22% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (5; 14% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-DET.html">DET</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 conj:expl	color:blue
1	ipsam	ipse	DET	I	Case=Acc|Form=Emp|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Dem	3	det	_	LiLaflcat=p
2	Rheni	rhenus	PROPN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Geo|Number=Sing	3	nmod	_	LASLAVariant=N|LiLaflcat=n2
3	ripam	ripa	NOUN	A1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	8	obj	_	LiLaflcat=n1
4	haud	haud	PART	P	Polarity=Neg	5	advmod:neg	_	LiLaflcat=i
5	dubie	dubie	ADV	M	_	8	advmod	_	LiLaflcat=i
6	Germanorum	germanus	ADJ	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	7	nmod	_	LASLAVariant=N|LiLaflcat=n2
7	populi	populus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	8	nsubj	_	LASLAVariant=1|LiLaflcat=n2
8	colunt	colo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LASLAVariant=2|LiLaflcat=v3|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	Uangiones	uangiones	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurX|NameType=Nat|Number=Plur	7	conj:expl	_	LASLAVariant=N|LiLaflcat=n3
10	Triboci	triboci	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	9	conj	_	LASLAVariant=N|LiLaflcat=n2
11	Nemetes	nemetes	NOUN	A3	Case=Nom|Gender=Masc|InflClass=IndEurI|NameType=Nat|Number=Plur	9	conj	_	LASLAVariant=N|LiLaflcat=n3

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 conj:expl	color:blue
1	adicit	adicio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v5|TraditionalMood=Indicativus|TraditionalTense=Praesens
2	auctoritatem	auctoritas	NOUN	A3	Case=Acc|Gender=Fem|InflClass=IndEurX|Number=Sing	1	obj	_	LiLaflcat=n3
3	fortuna	fortuna	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	1	nsubj	_	LiLaflcat=n1
4	Semnonum	semnones	NOUN	A3	Case=Gen|Gender=Masc|InflClass=IndEurX|NameType=Nat|Number=Plur	3	nmod	_	LASLAVariant=N|LiLaflcat=n3
5	centum	centum	NUM	D1	NumForm=Word|NumType=Card	6	nummod	_	LiLaflcat=n
6	pagi	pagus	NOUN	A2	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Plur	8	nsubj:pass	_	LiLaflcat=n2
7	iis	is	PRON	I	Case=Dat|Gender=Masc|InflClass=LatPron|Number=Plur|Person=3|PronType=Prs	8	obl:agent	_	LiLaflcat=p
8	habitantur	habito	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	conj:expl	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	magno	magnus	ADJ	C1	Case=Abl|Gender=Neut|InflClass=IndEurO|Number=Sing	11	amod	_	LiLaflcat=n6
10	que	que	CCONJ	S	_	12	cc	_	LiLaflcat=i
11	corpore	corpus	NOUN	A3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	12	obl	_	LiLaflcat=n3
12	efficitur	efficio	VERB	B5	Aspect=Imp|InflClass=LatI2|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	conj	_	LiLaflcat=v5|TraditionalMood=Indicativus|TraditionalTense=Praesens
13	ut	ut	SCONJ	T	PronType=Rel	17	mark	_	LASLAVariant=4|LiLaflcat=i
14	se	sui	PRON	G	Case=Acc|InflClass=LatAnom|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	17	obj	_	LASLAVariant=1|LiLaflcat=p
15	Sueborum	suebi	NOUN	A2	Case=Gen|Gender=Masc|InflClass=IndEurO|NameType=Nat|Number=Plur	16	nmod	_	LASLAVariant=N|LiLaflcat=n2
16	caput	caput	NOUN	A3	Case=Acc|Gender=Neut|InflClass=IndEurX|Number=Sing	17	xcomp	_	LiLaflcat=n3
17	credant	credo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	csubj:pass	_	LiLaflcat=v3|TraditionalMood=Subiunctivus|TraditionalTense=Praesens

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 conj:expl	color:blue
1	cetera	ceterus	DET	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur|PronType=Con	2	obl	_	LASLAVariant=1|LiLaflcat=n2
2	similes	similis	ADJ	C4	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur	4	advcl:pred	_	LiLaflcat=n7
3	uno	unus	DET	A2	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|NumForm=Word|NumType=Card|NumValue=1|PronType=Ind	4	obl	_	LiLaflcat=n2
4	differunt	differo	VERB	B6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v6|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	quod	quod	SCONJ	T	PronType=Rel	7	mark	_	LASLAVariant=2|LiLaflcat=i
6	femina	femina	NOUN	A1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	7	nsubj	_	LiLaflcat=n1
7	dominatur	dominor	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	conj:expl	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	in	in	ADP	R	_	9	case	_	LiLaflcat=i
9	tantum	tantum	DET	I	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Card|PronType=Dem	18	obl	_	LASLAVariant=1|LiLaflcat=n6
10	non	non	PART	P	Polarity=Neg	13	advmod:neg	_	LiLaflcat=i
11	modo	modo	ADV	M	_	13	advmod:emph	_	LASLAVariant=1|LiLaflcat=i
12	a	ab	ADP	R	_	13	case	_	LiLaflcat=i
13	libertate	libertas	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	18	obl	_	LiLaflcat=n3
14	sed	sed	CCONJ	S	_	17	cc	_	LiLaflcat=i
15	etiam	etiam	ADV	M	Compound=Yes	17	advmod:emph	_	LiLaflcat=i
16	a	ab	ADP	R	_	17	case	_	LiLaflcat=i
17	seruitute	seruitus	NOUN	A3	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	13	conj	_	LiLaflcat=n3
18	degenerant	degenero	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	LiLaflcat=v1|TraditionalMood=Indicativus|TraditionalTense=Praesens

~~~


