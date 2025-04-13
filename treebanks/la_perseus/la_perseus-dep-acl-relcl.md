---
layout: base
title:  'Statistics of acl:relcl in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-acl.html">acl</a></tt>.

288 nodes (1%) are attached to their parents as `acl:relcl`.

253 instances of `acl:relcl` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.95138888888889.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (132; 46% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (50; 17% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (41; 14% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (28; 10% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (12; 4% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-NUM.html">NUM</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 acl:relcl	color:blue
1	ne	ne	ADV	d--------	_	3	advmod	_	_
2	c	que	CCONJ	c--------	_	3	cc	_	LId=que1
3	magnum	magnus	ADJ	a-s---na-	Case=Acc|Gender=Neut|Number=Sing	0	root	_	LId=magnus1
4	esse	sum	AUX	v--pna---	Aspect=Imp|VerbForm=Inf	3	cop	_	LId=sum1|TraditionalMood=Infinitivus|TraditionalTense=Praesens
5	peccatum	peccatum	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	3	nsubj	_	LId=peccatum1
6	suum	suus	DET	a-s---na-	Case=Acc|Gender=Neut|Number=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	5	det	_	SpaceAfter=No|LId=suus1
7	,	,	PUNCT	u--------	_	10	punct	_	LId=comma1
8	propter	propter	ADP	r--------	_	9	case	_	LId=propter1
9	quod	qui	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	10	obl	_	LId=qui1
10	periclitaretur	periclitor	VERB	v3sisp---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	5	acl:relcl	_	LId=periclitor1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Imperfectum
11	;	;	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	Pudor	pudor	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	LId=pudor1
2	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	LId=sum1|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	qui	qui	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	0	root	_	LId=qui1
4	suadeat	suadeo	VERB	v3spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	LId=suadeo1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
5	illinc	illinc	ADV	d--------	_	4	advmod	_	SpaceAfter=No|LId=illinc1
6	,	,	PUNCT	u--------	_	8	punct	_	LId=comma1
7	hinc	hinc	ADV	d--------	AdvType=Loc	8	advmod:lmod	_	LId=hinc1
8	dissuadet	dissuadeo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LId=dissuadeo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	amor	amor	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No|LId=amor1
10	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 acl:relcl	color:blue
1	Cui	qui	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	2	obl	_	LId=qui1
2	placeas	placeo	VERB	v2spsa---	Aspect=Imp|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	LId=placeo1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
3	,	,	PUNCT	u--------	_	2	punct	_	LId=comma1
4	inquire	inquiro	VERB	v2spma---	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=inquiro1|TraditionalMood=Imperativus|TraditionalTense=Praesens
5	tamen	tamen	ADV	d--------	_	4	advmod	_	SpaceAfter=No|LId=tamen1
6	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


