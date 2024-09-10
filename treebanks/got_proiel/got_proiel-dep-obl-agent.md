---
layout: base
title:  'Statistics of obl:agent in UD_Gothic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Gothic-PROIEL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="got_proiel-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="got_proiel-dep-obl-arg.html">obl:arg</a></tt>.

67 nodes (0%) are attached to their parents as `obl:agent`.

53 instances of `obl:agent` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55223880597015.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-NOUN.html">NOUN</a></tt> (35; 52% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-PRON.html">PRON</a></tt> (21; 31% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-PROPN.html">PROPN</a></tt> (6; 9% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	raus	raus	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	ref=LUKE_7.24
2	fram	fram	ADP	R-	_	3	case	_	ref=LUKE_7.24
3	winda	winds	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	4	obl:agent	_	ref=LUKE_7.24
4	wagid	wagjan	VERB	V-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=LUKE_7.24

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obl:agent	color:blue
1	Atsaiƕiþ	at-saiƕan	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_6.1
2	armaion	armaio	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	ref=MATT_6.1
3	izwara	jūs	PRON	Pp	Case=Gen|Gender=Fem|Number=Plur|Person=2|PronType=Prs	2	det	_	ref=MATT_6.1
4	ni	ni	ADV	Df	Polarity=Neg	5	advmod	_	ref=MATT_6.1
5	taujan	taujan	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	1	xcomp	_	ref=MATT_6.1
6	in	in	ADP	R-	_	7	case	_	ref=MATT_6.1
7	andwairþja	andwairþi	NOUN	Nb	Case=Dat|Gender=Neut|Number=Sing	5	obl	_	ref=MATT_6.1
8	manne	manna	NOUN	Nb	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	ref=MATT_6.1|LId=2
9	du	du	ADP	R-	_	10	mark	_	ref=MATT_6.1
10	saiƕan	saiƕan	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	5	advcl	_	ref=MATT_6.1
11	im	is	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	obl:agent	_	ref=MATT_6.1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	þanuh	þanuh	ADV	Df	_	2	advmod	_	ref=MATT_27.9
2	usfullnoda	us-fullnan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_27.9
3	þata	sa	DET	Pd	Case=Nom|Gender=Neut|Number=Sing	4	det	_	ref=MATT_27.9
4	qiþano	qiþan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Strength=Weak|Tense=Past|VerbForm=Part|Voice=Pass	2	nsubj	_	ref=MATT_27.9
5	þairh	þairh	ADP	R-	_	6	case	_	ref=MATT_27.9
6	Iairaimian	Iairaimias*	PROPN	Ne	Case=Acc|Gender=Masc|Number=Sing	4	obl:agent	_	ref=MATT_27.9
7	praufetu	praufetes	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	6	appos	_	ref=MATT_27.9
8	qiþandan	qiþan	VERB	V-	Case=Acc|Gender=Masc|Number=Sing|Strength=Weak|Tense=Pres|VerbForm=Part|Voice=Act	4	advcl	_	ref=MATT_27.9

~~~


