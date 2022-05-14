---
layout: base
title:  'Statistics of csubj:pass in UD_Ancient_Greek-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PROIEL: Relations: `csubj:pass`

This relation is a language-specific subtype of .

137 nodes (0%) are attached to their parents as `csubj:pass`.

131 instances of `csubj:pass` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.36496350364964.

The following 7 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (103; 75% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (13; 9% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-SCONJ.html">SCONJ</a></tt> (9; 7% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	τί	τίς	PRON	Pi	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	0	root	_	Ref=ACTS_5.9
2	ὅτι	ὅτι	SCONJ	G-	_	3	mark	_	Ref=ACTS_5.9
3	συνεφωνήθη	συμφωνέω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	1	ccomp	_	Ref=ACTS_5.9
4	ὑμῖν	ὑμεῖς	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	obl:agent	_	Ref=ACTS_5.9
5	πειράσαι	πειράζω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	3	csubj:pass	_	Ref=ACTS_5.9
6	τὸ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	Ref=ACTS_5.9
7	πνεῦμα	πνεῦμα	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	Ref=ACTS_5.9
8	κυρίου	κύριος	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	Ref=ACTS_5.9

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj:pass	color:blue
1	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	3	det	_	Ref=5.113.1
2	δὲ	δέ	ADV	Df	_	5	discourse	_	Ref=5.113.1
3	Κουριέες	Κουριεύς	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	Ref=5.113.1
4	οὗτοι	οὗτος	DET	Pd	Case=Nom|Gender=Masc|Number=Plur	3	det	_	Ref=5.113.1
5	λέγονται	λέγω	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Ref=5.113.1
6	εἶναι	εἰμί	AUX	V-	Tense=Pres|VerbForm=Inf|Voice=Act	8	cop	_	LId=1|Ref=5.113.1
7	Ἀργείων	Ἀργεῖος	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	8	iobj	_	Ref=5.113.1
8	ἄποικοι	ἄποικος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	5	csubj:pass	_	Ref=5.113.1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	γέγραπται	γράφω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Ref=MATT_4.6
2	γὰρ	γάρ	ADV	Df	_	1	discourse	_	Ref=MATT_4.6
3	ὅτι	ὅτι	SCONJ	G-	_	1	csubj:pass	_	Ref=MATT_4.6

~~~


