---
layout: base
title:  'Statistics of nsubj:pass in UD_Gothic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Gothic-PROIEL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="got_proiel-dep-nsubj.html">nsubj</a></tt>.

330 nodes (1%) are attached to their parents as `nsubj:pass`.

233 instances of `nsubj:pass` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.61818181818182.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-NOUN.html">NOUN</a></tt> (131; 40% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-PRON.html">PRON</a></tt> (91; 28% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-ADJ.html">ADJ</a></tt> (58; 18% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-VERB.html">VERB</a></tt> (26; 8% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-PROPN.html">PROPN</a></tt> (17; 5% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	afletanda	af-letan	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Ref=LUKE_7.47
2	frawaurhteis	frawaurhts	NOUN	Nb	Case=Nom|Gender=Fem|Number=Plur	1	nsubj:pass	_	Ref=LUKE_7.47
3	izos	is	PRON	Pp	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	det	_	Ref=LUKE_7.47
4	þos	sa	DET	Pd	Case=Nom|Gender=Fem|Number=Plur	5	det	_	Ref=LUKE_7.47
5	managons	manags	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Strength=Weak	2	nmod	_	Ref=LUKE_7.47
6	unte	unte	SCONJ	G-	_	7	mark	_	Ref=LUKE_7.47
7	frijoda	frijon	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	Ref=LUKE_7.47
8	filu	filu	ADV	Df	Degree=Pos	7	advmod	_	Ref=LUKE_7.47

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	taleiþa	taleiþa	X	F-	_	5	vocative	_	Ref=MARK_5.41
2	kumei	kumei	X	F-	_	5	vocative	_	Ref=MARK_5.41
3	þatei	saei	PRON	Pr	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	5	nsubj:pass	_	Ref=MARK_5.41
4	ist	wisan	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	LId=1|Ref=MARK_5.41
5	gaskeiriþ	ga-skeirjan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Ref=MARK_5.41

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	sa	sa	ADJ	Pd	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	Ref=LUKE_7.27
2	ist	wisan	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	LId=1|Ref=LUKE_7.27
3	bi	bi	ADP	R-	_	4	case	_	Ref=LUKE_7.27
4	þanei	saei	PRON	Pr	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	5	obl	_	Ref=LUKE_7.27
5	gamelid	ga-meljan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Ref=LUKE_7.27
6	ist	wisan	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	LId=1|Ref=LUKE_7.27

~~~


