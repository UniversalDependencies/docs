---
layout: base
title:  'Statistics of csubj in UD_Ancient_Greek-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PROIEL: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="grc_proiel-dep-csubj-pass.html">csubj:pass</a></tt>.

145 nodes (0%) are attached to their parents as `csubj`.

133 instances of `csubj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.61379310344828.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (104; 72% instances), <tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (26; 18% instances), <tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_proiel-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_proiel-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	οὐκέτι	οὐκέτι	ADV	Df	Polarity=Neg	3	advmod	_	ref=LUKE_15.19
2	εἰμὶ	εἰμί	AUX	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	ref=LUKE_15.19|LId=1
3	ἄξιος	ἄξιος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	ref=LUKE_15.19
4	κληθῆναι	καλέω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Pass	3	csubj	_	ref=LUKE_15.19
5	υἱός	υἱός	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	4	xcomp	_	ref=LUKE_15.19
6	σου	σύ	PRON	Pp	Case=Gen|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	5	det	_	ref=LUKE_15.19

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 csubj	color:blue
1	ἄνευ	ἄνευ	ADP	R-	_	4	case	_	ref=1.132.3
2	γὰρ	γάρ	ADV	Df	_	7	discourse	_	ref=1.132.3
3	δὴ	δή	ADV	Df	_	7	discourse	_	ref=1.132.3
4	Μάγου	μάγος	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	10	obl	_	ref=1.132.3
5	οὔ	οὐ	ADV	Df	Polarity=Neg	7	advmod	_	ref=1.132.3
6	σφι	σφεῖς	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	obl:arg	_	ref=1.132.3
7	νόμος	νόμος	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	0	root	_	ref=1.132.3
8	ἐστὶ	εἰμί	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	ref=1.132.3|LId=1
9	θυσίας	θυσία	NOUN	Nb	Case=Acc|Gender=Fem|Number=Plur	10	obj	_	ref=1.132.3
10	ποιέεσθαι	ποιέω	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Mid	7	csubj	_	ref=1.132.3

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	τί	τίς	PRON	Pi	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	_	ref=ACTS_23.19
2	ἐστιν	εἰμί	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	ref=ACTS_23.19|LId=1
3	ὃ	ὅς	PRON	Pr	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	_	ref=ACTS_23.19
4	ἔχεις	ἔχω	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	ref=ACTS_23.19
5	ἀπαγγεῖλαί	ἀπαγγέλλω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	4	xcomp	_	ref=ACTS_23.19
6	μοι	ἐγώ	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	5	obl:arg	_	ref=ACTS_23.19

~~~


