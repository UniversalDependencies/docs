---
layout: base
title:  'Statistics of ccomp in UD_Latin-CIRCSE'
udver: '2'
---

## Treebank Statistics: UD_Latin-CIRCSE: Relations: `ccomp`

This relation is universal.
There are 2 language-specific subtypes of `ccomp`: <tt><a href="la_circse-dep-ccomp-relcl.html">ccomp:relcl</a></tt>, <tt><a href="la_circse-dep-ccomp-reported.html">ccomp:reported</a></tt>.

100 nodes (0%) are attached to their parents as `ccomp`.

59 instances of `ccomp` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.09.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (80; 80% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt> (8; 8% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADJ.html">ADJ</a></tt> (6; 6% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="la_circse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_circse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="la_circse-pos-VERB.html">VERB</a></tt>-<tt><a href="la_circse-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	arma	arma	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	8	nsubj:pass	_	LiLaflcat=n2
2	arma	arma	NOUN	A2	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur	1	flat:redup	_	LiLaflcat=n2
3	Theseu	theseus	PROPN	A7	Case=Voc|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing|Variant=Greek	4	vocative	_	LASLAVariant=N|LiLaflcat=n2,n3
4	flagito	flagito	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1
5	propere	propere	ADV	M	Degree=Pos	8	advmod:tmod	_	LiLaflcat=i
6	mihi	ego	PRON	E	Case=Dat|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	8	obl:arg	_	LiLaflcat=p
7	subtracta	subtraho	VERB	B3	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Plur|VerbForm=Part|Voice=Pass	1	acl	_	LiLaflcat=v3
8	reddi	reddo	VERB	B3	Aspect=Imp|InflClass=LatX|InflClass[nominal]=Ind|VerbForm=Inf|Voice=Pass	4	ccomp	_	LiLaflcat=v3

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 ccomp	color:blue
1	quis	quis	PRON	K	Case=Nom|Gender=Fem,Masc|InflClass=LatPron|Number=Sing|PronType=Int	3	nsubj	_	LASLAVariant=1|LiLaflcat=p
2	esse	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	4	cop	_	LASLAVariant=1|LiLaflcat=v6
3	credat	credo	VERB	B3	Aspect=Imp|InflClass=LatX|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v3
4	uirginem	uirgo	NOUN	A3	Case=Acc|Gender=Fem,Masc|InflClass=IndEurX|Number=Sing	3	ccomp	_	LiLaflcat=n3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 ccomp	color:blue
1	et	et	CCONJ	S	_	7	cc	_	LASLAVariant=2|LiLaflcat=i
2	esse	sum	AUX	B6	Aspect=Imp|InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	5	cop	_	LASLAVariant=1|LiLaflcat=v6
3	demens	demens	ADJ	C5	Case=Nom|Degree=Pos|Gender=Fem,Masc,Neut|InflClass=IndEurI|Number=Sing	7	nsubj	_	LiLaflcat=n7
4	te	tu	PRON	E	Case=Acc|InflClass=LatAnom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	LiLaflcat=p
5	parem	par	ADJ	C5	Case=Acc|Degree=Pos|Gender=Fem,Masc|InflClass=IndEurI|Number=Sing	7	ccomp	_	LASLAVariant=2|LiLaflcat=n7
6	nobis	nos	PRON	E	Case=Dat|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	5	obl:arg	_	LiLaflcat=p
7	putas	puto	VERB	B1	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LiLaflcat=v1

~~~


