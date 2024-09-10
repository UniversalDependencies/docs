---
layout: base
title:  'Statistics of nsubj:pass in UD_Gothic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Gothic-PROIEL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="got_proiel-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="got_proiel-dep-nsubj-outer.html">nsubj:outer</a></tt>.

194 nodes (0%) are attached to their parents as `nsubj:pass`.

134 instances of `nsubj:pass` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.52061855670103.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-NOUN.html">NOUN</a></tt> (80; 41% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-PRON.html">PRON</a></tt> (73; 38% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-VERB.html">VERB</a></tt> (21; 11% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-ADJ.html">ADJ</a></tt> (10; 5% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-PROPN.html">PROPN</a></tt> (6; 3% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	afletanda	af-letan	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	ref=LUKE_7.47
2	frawaurhteis	frawaurhts	NOUN	Nb	Case=Nom|Gender=Fem|Number=Plur	1	nsubj:pass	_	ref=LUKE_7.47
3	izos	is	PRON	Pp	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	det	_	ref=LUKE_7.47
4	þos	sa	DET	Pd	Case=Nom|Gender=Fem|Number=Plur	5	det	_	ref=LUKE_7.47
5	managons	manags	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Strength=Weak	2	nmod	_	ref=LUKE_7.47
6	unte	unte	SCONJ	G-	_	7	mark	_	ref=LUKE_7.47
7	frijoda	frijon	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	ref=LUKE_7.47
8	filu	filu	ADV	Df	Degree=Pos	7	advmod	_	ref=LUKE_7.47

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	jah	jah	CCONJ	C-	_	3	cc	_	ref=LUKE_7.23
2	audags	audags	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Strength=Strong	3	xcomp	_	ref=LUKE_7.23
3	ist	wisan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_7.23|LId=1
4	saƕazuh	saƕazuh	PRON	Px	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	ref=LUKE_7.23
5	saei	saei	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj:pass	_	ref=LUKE_7.23
6	ni	ni	ADV	Df	Polarity=Neg	7	advmod	_	ref=LUKE_7.23
7	gamarzjada	ga-marzjan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl	_	ref=LUKE_7.23
8	in	in	ADP	R-	_	9	case	_	ref=LUKE_7.23
9	mis	ik	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	7	obl	_	ref=LUKE_7.23

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:pass	color:blue
1	þiuþida	þiuþjan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Strength=Weak|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=LUKE_19.38
2	sa	sa	DET	Pd	Case=Nom|Gender=Masc|Number=Sing	3	det	_	ref=LUKE_19.38
3	qimanda	qiman	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Strength=Weak|Tense=Pres|VerbForm=Part|Voice=Act	1	nsubj:pass	_	ref=LUKE_19.38
4	þiudans	þiudans	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	ref=LUKE_19.38
5	in	in	ADP	R-	_	6	case	_	ref=LUKE_19.38
6	namin	namo	NOUN	Nb	Case=Dat|Gender=Neut|Number=Sing	3	obl	_	ref=LUKE_19.38
7	fraujins	frauja	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	ref=LUKE_19.38

~~~


