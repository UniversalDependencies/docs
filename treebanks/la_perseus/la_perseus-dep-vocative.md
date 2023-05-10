---
layout: base
title:  'Statistics of vocative in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `vocative`

This relation is universal.

91 nodes (0%) are attached to their parents as `vocative`.

50 instances of `vocative` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.51648351648352.

The following 9 pairs of parts of speech are connected with `vocative`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (36; 40% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (33; 36% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (14; 15% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 vocative	color:blue
1	Ultimus	ulter	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	3	xcomp	_	LId=ulter1
2	inmenso	immensus	ADJ	a-s---md-	Case=Dat|Gender=Masc|Number=Sing	7	amod	_	LId=immensus1
3	restabas	resto	VERB	v2siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=resto1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
4	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
5	Nile	Nilus	PROPN	n-s---mv-	Case=Voc|Gender=Masc|Number=Sing	3	vocative	_	SpaceAfter=No|LId=Nilus1
6	,	,	PUNCT	u--------	_	5	punct	_	LId=comma1
7	labori	labor	NOUN	n-s---md-	Case=Dat|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No|LId=labor2
8	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	nympha	nympha	NOUN	n-s---fv-	Case=Voc|Gender=Fem|Number=Sing	3	vocative	_	SpaceAfter=No|LId=nympha1
2	,	,	PUNCT	u--------	_	1	punct	_	LId=comma1
3	mane	maneo	VERB	v2spma---	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=maneo1|SpaceAfter=No|TraditionalMood=Imperativus|TraditionalTense=Praesens
4	!	!	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Nescis	nescio	VERB	v2spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=nescio1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
2	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
3	temeraria	temerarius	ADJ	a-s---fv-	Case=Voc|Gender=Fem|Number=Sing	1	vocative	_	SpaceAfter=No|LId=temerarius1
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	nescis	nescio	VERB	v2spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LId=nescio1|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	quem	qui	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	7	obj	_	LId=qui1
7	fugias	fugio	VERB	v2spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	LId=fugio1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
8	,	,	PUNCT	u--------	_	11	punct	_	LId=comma1
9	que	que	CCONJ	c--------	_	11	cc	_	LId=que1
10	ideo	ideo	ADV	d--------	_	11	advmod	_	LId=ideo1
11	fugis	fugio	VERB	v2spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	LId=fugio1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	.	.	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


