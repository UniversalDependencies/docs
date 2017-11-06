---
layout: base
title:  'Statistics of flat in UD_Lithuanian'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian: Relations: `flat`

This relation is universal.

53 nodes (1%) are attached to their parents as `flat`.

53 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20754716981132.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="lt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt-pos-PROPN.html">PROPN</a></tt> (45; 85% instances), <tt><a href="lt-pos-X.html">X</a></tt>-<tt><a href="lt-pos-X.html">X</a></tt> (6; 11% instances), <tt><a href="lt-pos-ADP.html">ADP</a></tt>-<tt><a href="lt-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="lt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	MARS	MARS	PROPN	NNP	_	3	nmod	_	En=MARS
2	BM	BM	PROPN	NNP	_	1	flat	_	En=BM
3	garsą	garsas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	En=sound
4	užtikrina	užtikrinti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=provide
5	trys	trys	NUM	CD	Case=Nom|Gender=Masc	7	nummod	_	En=three
6	įtaisyti	įtaisyti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	7	amod	_	En=built-in
7	mikrofonai	mikrofonas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	En=microphone|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	4	punct	_	En=.

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 18 flat	color:blue
1	Liko	likti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	En=remain
2	Aristofanas	Aristofanas	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	En=Aristofane|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	En=,
4	nes	nes	SCONJ	UH	_	7	mark	_	En=because
5	jis	jis	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	En=he
6	gerai	gerai	ADV	RB	Degree=Pos	7	advmod	_	En=well
7	rašė	rašyti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	En=write
8	(	(	PUNCT	PUNCT	_	13	punct	_	En=(|SpaceAfter=No
9	kaip	kaip	SCONJ	UH	_	10	mark	_	En=as
10	pasakytų	pasakyti	VERB	VBC	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Reflex=No|VerbForm=Fin|Voice=Act	13	parataxis	_	En=tell
11	Audenas	Audenas	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	En=Audenas|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	10	punct	_	En=,
13	time	time	X	X	_	7	parataxis	_	En=_
14	pardoned	pardoned	X	X	_	13	flat	_	En=_
15	him	him	X	X	_	13	flat	_	En=_
16	for	for	X	X	_	13	flat	_	En=_
17	writing	writing	X	X	_	13	flat	_	En=_
18	well	well	X	X	_	13	flat	_	En=_|SpaceAfter=No
19	)	)	PUNCT	PUNCT	_	13	punct	_	En=)|SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	1	punct	_	En=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat	color:blue
1	Ne	ne	PART	UH	Polarity=Neg	2	advmod	_	En=not
2	vienas	vienas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	En=one
3	mūsų	mūsų	DET	PRP$	_	4	det	_	En=our
4	politikas	politikas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	En=politician
5	laiko	laikyti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=regard
6	lenkus	lenkas	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	En=Polish
7	ir	ir	CCONJ	CC	_	10	cc	_	En=and
8	kitas	kitas	ADJ	JJL	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	10	amod	_	En=other
9	etnines	etninis	ADJ	JJL	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	10	amod	_	En=ethnic
10	mažumas	mažumas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	6	conj	_	En=smallness
11	nelojaliomis	nelojalus	ADJ	JJL	Case=Ins|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	5	iobj	_	En=not_loyal
12	ex	ex	ADP	UH	_	5	advmod	_	En=by
13	definitione	definitione	X	X	_	12	flat	_	En=definition|SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	19	punct	_	En=,
15	o	o	CCONJ	CC	_	19	cc	_	En=and
16	jau	jau	ADV	RB	Degree=Pos	19	advmod	_	En=already
17	jų	jų	DET	PRP$	_	18	det	_	En=their
18	bendruomenių	bendruomenė	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	19	nmod	_	En=community
19	vadovus	vadovas	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	6	conj	_	En=administrator
20	–	–	PUNCT	PUNCT	_	23	punct	_	En=–
21	paprasčiausia	paprasčiausias	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	23	advmod	_	En=mere
22	penktąja	penktas	ADJ	ORD	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	23	amod	_	En=fifth
23	kolona	kolona	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	19	orphan	_	En=colon|SpaceAfter=No
24	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


