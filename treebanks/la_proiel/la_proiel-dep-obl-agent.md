---
layout: base
title:  'Statistics of obl:agent in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="la_proiel-dep-obl.html">obl</a></tt>.

522 nodes (0%) are attached to their parents as `obl:agent`.

312 instances of `obl:agent` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.59195402298851.

The following 11 pairs of parts of speech are connected with `obl:agent`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt> (197; 38% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (190; 36% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (63; 12% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (61; 12% instances), <tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_proiel-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="la_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="la_proiel-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	_	ref=REV_2.11
2	vicerit	vinco	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	4	nsubj:pass	_	ref=REV_2.11
3	non	non	ADV	Df	Polarity=Neg	4	advmod	_	ref=REV_2.11
4	laedetur	laedo	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	ref=REV_2.11
5	a	ab	ADP	R-	_	6	case	_	ref=REV_2.11
6	morte	mors	NOUN	Nb	Case=Abl|Gender=Fem|Number=Sing	4	obl:agent	_	ref=REV_2.11
7	secunda	secundus	ADJ	Mo	Case=Abl|Gender=Fem|Number=Sing	6	nmod	_	ref=REV_2.11

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	urgebar	urgeo	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=4.5.1
2	ab	ab	ADP	R-	_	3	case	_	ref=4.5.1
3	eo	is	PRON	Pp	Case=Abl|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	obl:agent	_	ref=4.5.1
4	ad	ad	ADP	R-	_	5	case	_	ref=4.5.1
5	quem	qui	PRON	Pr	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	6	obl	_	ref=4.5.1
6	misi	mitto	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	acl	_	ref=4.5.1
7	et	et	CCONJ	C-	_	1	cc	_	ref=4.5.1
8	non	non	ADV	Df	Polarity=Neg	9	advmod	_	ref=4.5.1
9	habebam	habeo	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	ref=4.5.1
10	exemplar	exemplar	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	9	obj:dir	_	ref=4.5.1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl:agent	color:blue
1	me	ego	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	ref=4.5.1
2	existimas	existimo	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=4.5.1
3	ab	ab	ADP	R-	_	4	case	_	ref=4.5.1
4	ullo	ullus	ADJ	Px	Case=Abl|Gender=Masc|Number=Sing	7	obl:agent	_	ref=4.5.1
5	malle	malo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	2	ccomp	_	ref=4.5.1
6	mea	meus	ADJ	Ps	Case=Acc|Gender=Neut|Number=Plur|Person=1|Poss=Yes	7	nsubj:pass	_	ref=4.5.1
7	legi	lego	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	5	ccomp	_	ref=4.5.1
8	probari	probo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	7	conj	_	ref=4.5.1
9	que	que	CCONJ	C-	_	7	cc	_	ref=4.5.1
10	quam	quam#1	ADV	Df	_	5	advmod	_	ref=4.5.1
11	a	ab	ADP	R-	_	12	case	_	ref=4.5.1
12	te	tu	PRON	Pp	Case=Abl|Gender=Masc|Number=Sing|Person=2|PronType=Prs	10	obl:agent	_	ref=4.5.1

~~~


