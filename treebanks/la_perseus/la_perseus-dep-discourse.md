---
layout: base
title:  'Statistics of discourse in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `discourse`

This relation is universal.

242 nodes (1%) are attached to their parents as `discourse`.

210 instances of `discourse` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.51652892561984.

The following 16 pairs of parts of speech are connected with `discourse`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (147; 61% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (29; 12% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt> (24; 10% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (12; 5% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (8; 3% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt> (4; 2% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt> (3; 1% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	aquam	aqua	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	LId=aqua1
2	enim	enim	PART	c--------	_	4	discourse	_	LId=enim1
3	nemo	nemo	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	LId=nemo1
4	porrexit	porrigo	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	LId=porrigo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
5	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Ergo	ergo	ADV	d--------	_	3	discourse	_	LId=ergo1
2	alte	altus	ADV	d--------	_	3	advmod	_	LId=altus1
3	vestiga	vestigo	VERB	v2spma---	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=vestigo1|TraditionalMood=Imperativus|TraditionalTense=Praesens
4	oculis	oculus	NOUN	n-p---mb-	Case=Abl|Gender=Masc|Number=Plur	3	obl	_	SpaceAfter=No|LId=oculus1
5	,	,	PUNCT	u--------	_	9	punct	_	LId=comma1
6	et	et	CCONJ	c--------	_	9	cc	_	LId=et1
7	rite	rite	ADV	d--------	_	9	advmod	_	LId=rite1
8	repertum	reperio	VERB	v-srppna-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	9	xcomp	_	TraditionalMood=Participium|TraditionalTense=Perfectum
9	carpe	carpo	VERB	v2spma---	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	LId=carpo1|TraditionalMood=Imperativus|TraditionalTense=Praesens
10	manu	manus	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No|LId=manus1
11	;	;	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Quare	quare	INTJ	e--------	_	3	discourse	_	LId=quare1
2	tengomenas	tengomena	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	3	obj	_	LId=tengomena1
3	faciamus	facio	VERB	v1ppsa---	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=facio1|SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
4	.	.	PUNCT	u--------	_	3	punct	_	LId=punc1

~~~


