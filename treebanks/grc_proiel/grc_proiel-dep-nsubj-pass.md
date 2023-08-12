---
layout: base
title:  'Statistics of nsubj:pass in UD_Ancient_Greek-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PROIEL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="grc_proiel-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="grc_proiel-dep-nsubj-outer.html">nsubj:outer</a></tt>.

1944 nodes (1%) are attached to their parents as `nsubj:pass`.

1124 instances of `nsubj:pass` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.85905349794239.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (949; 49% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (505; 26% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PROPN.html">PROPN</a></tt> (214; 11% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (144; 7% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (110; 6% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NUM.html">NUM</a></tt> (18; 1% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	ἁφθεὶς	ἅπτω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	advcl	_	ref=1.19.1
2	δὲ	δέ	ADV	Df	_	5	discourse	_	ref=1.19.1
3	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	ref=1.19.1
4	νηὸς	ναός	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	ref=1.19.1
5	κατεκαύθη	κατακαίω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=1.19.1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:pass	color:blue
1	ἐπορᾶν	ἐφοράω	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	4	xcomp	_	ref=1.110.3
2	δὲ	δέ	ADV	Df	_	4	discourse	_	ref=1.110.3
3	ἐκκείμενον	ἔκκειμαι	VERB	V-	Aspect=Perf|Case=Acc|Gender=Masc,Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Mid	1	xcomp	_	ref=1.110.3
4	τέταγμαι	τάσσω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=1.110.3
5	ἐγώ	ἐγώ	PRON	Pp	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	nsubj:pass	_	ref=1.110.3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nsubj:pass	color:blue
1	ἀπεκρίθη	ἀποκρίνω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=ACTS_5.8
2	δὲ	δέ	ADV	Df	_	1	discourse	_	ref=ACTS_5.8
3	πρὸς	πρός	ADP	R-	_	4	case	_	ref=ACTS_5.8
4	αὐτὴν	αὐτός	PRON	Pp	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	obl	_	ref=ACTS_5.8
5	Πέτρος	Πέτρος	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	1	nsubj:pass	_	ref=ACTS_5.8

~~~


