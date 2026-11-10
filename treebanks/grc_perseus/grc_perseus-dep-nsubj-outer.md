---
layout: base
title:  'Statistics of nsubj:outer in UD_Ancient_Greek-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-Perseus: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="grc_perseus-dep-nsubj.html">nsubj</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:outer`.

4 instances of `nsubj:outer` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.625.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="grc_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_perseus-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="grc_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_perseus-pos-PRON.html">PRON</a></tt> (2; 25% instances), <tt><a href="grc_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_perseus-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="grc_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="grc_perseus-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="grc_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_perseus-pos-ADJ.html">ADJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 nsubj:outer	color:blue
1	ἔστιν	εἰμί	AUX	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
2	δ̓	δέ	ADV	d--------	_	8	advmod	_	SpaceAfter=No
3	,	,	PUNCT	u--------	_	2	punct	_	_
4	ὅπου	ὅπου	ADV	d--------	_	8	advmod	_	_
5	μὲν	μέν	ADV	d--------	_	8	advmod	_	_
6	ὁ	ὁ	DET	l-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	det	_	_
7	κάλαμος	κάλαμος	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
8	πέφυχ̓	φύω	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	ὅδε	ὅδε	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	u--------	_	11	punct	_	_
11	ὀχύρωμ̓	ὀχύρωμα	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	8	nsubj:outer	_	_
12	ἄορνον	ἄορνος	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	11	nmod	_	SpaceAfter=No
13	.	.	PUNCT	u--------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 1 nsubj:outer	color:blue
1	αἳ	ὁ	PRON	p-p---fn-	Case=Nom|Gender=Fem|Number=Plur	23	nsubj:outer	_	_
2	δ̓	δε	CCONJ	c--------	_	23	cc	_	_
3	ὥστ̓	ὥστε	SCONJ	c--------	_	10	mark	_	_
4	ἢ	ἤ	CCONJ	c--------	_	5	advmod	_	_
5	ἔλαφοι	ἔλαφος	NOUN	n-p---fn-	Case=Nom|Gender=Fem|Number=Plur	10	nsubj	_	_
6	ἢ	ἤ	CCONJ	c--------	_	5	cc	_	_
7	πόρτιες	πόρτις	NOUN	n-p---fn-	Case=Nom|Gender=Fem|Number=Plur	5	conj	_	_
8	εἴαρος	ἔαρ	NOUN	n-s---ng-	Case=Gen|Gender=Neut|Number=Sing	9	nmod	_	_
9	ὥρῃ	ὥρα	NOUN	n-s---fd-	Case=Dat|Gender=Fem|Number=Sing	10	obl	_	_
10	ἅλλοντ̓	ἅλλομαι	VERB	v3ppia---	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	23	advcl	_	_
11	ἂν	ἀνά	ADP	r--------	_	12	case	_	_
12	λειμῶνα	λειμών	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	10	obl	_	_
13	κορεσσάμεναι	κορέννυμι	VERB	v-papmfn-	Case=Nom|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Mid	10	advcl	_	_
14	φρένα	φρήν	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	13	obj	_	_
15	φορβῇ	φορβή	NOUN	n-s---fd-	Case=Dat|Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
16	,	,	PUNCT	u--------	_	10	punct	_	_
17	ὣς	ὡς	ADV	d--------	_	23	advmod	_	_
18	αἳ	ὁ	PRON	p-p---fn-	Case=Nom|Gender=Fem|Number=Plur	23	nsubj	_	_
19	ἐπισχόμεναι	ἐπίσχω	VERB	v-pppefn-	Case=Nom|Gender=Fem|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Mid	23	advcl	_	_
20	ἑανῶν	ἑανός	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	21	nmod	_	_
21	πτύχας	πτύξ	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	19	obj	_	_
22	ἱμεροέντων	ἱμερόεις	ADJ	a-p---mg-	Case=Gen|Gender=Masc|Number=Plur	20	nmod	_	_
23	ἤιξαν	ἀίσσω	VERB	v3paia---	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
24	κοίλην	κοῖλος	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	26	nmod	_	_
25	κατ̓	κατα	ADP	r--------	_	26	case	_	_
26	ἀμαξιτόν	ἁμαξιτός	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	23	obl	_	SpaceAfter=No
27	·	·	PUNCT	u--------	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 nsubj:outer	color:blue
1	καὶ	καί	CCONJ	c--------	_	2	advmod	_	_
2	τἄλλα	ἄλλος	ADJ	a-p---na-	Case=Acc|Gender=Neut|Number=Plur	6	advmod	_	_
3	πόλλ̓	πολύς	ADJ	a-p---na-	Case=Acc|Gender=Neut|Number=Plur	5	obj	_	_
4	ἔτ̓	ἔτι	ADV	d--------	_	3	advmod	_	_
5	εἰκάσαι	εἰκάζω	VERB	v--ana---	Tense=Past|VerbForm=Inf|Voice=Act	6	csubj	_	_
6	δίκαιον	δίκαιος	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
7	ἦν	εἰμί	AUX	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	SpaceAfter=No
8	,	,	PUNCT	u--------	_	9	punct	_	_
9	εἰ	εἰ	SCONJ	c--------	_	6	mark	_	_
10	μὴ	μή	CCONJ	c--------	_	6	advmod	_	_
11	παρόντι	πάρειμι	VERB	v-sppamd-	Case=Dat|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	6	xcomp	_	_
12	φθόγγος	φθόγγος	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	6	nsubj:outer	_	_
13	ἦν	εἰμί	AUX	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
14	ὁ	ὁ	DET	l-s---mn-	Case=Nom|Gender=Masc|Number=Sing	12	det	_	_
15	σημανῶν	σημαίνω	VERB	v-sfpamn-	Case=Nom|Gender=Masc|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Act	12	nmod	_	SpaceAfter=No
16	.	.	PUNCT	u--------	_	6	punct	_	_

~~~


