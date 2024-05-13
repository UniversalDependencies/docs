---
layout: base
title:  'Statistics of xcomp in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `xcomp`

This relation is universal.

12 nodes (1%) are attached to their parents as `xcomp`.

10 instances of `xcomp` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (8; 67% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-ADJ.html">ADJ</a></tt> (2; 17% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-VERB.html">VERB</a></tt> (2; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	तत्	तद्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	Translit=tat|LTranslit=tad|Gloss=it
2	एषा	एतद्	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	nsubj	_	Translit=eṣā|LTranslit=etad|Gloss=this
3	कदाचिद्	कदाचिद्	ADV	_	PronType=Int	5	advmod	_	Translit=kadācid|LTranslit=kadācid|Gloss=perhaps
4	वैश्यासुता	वैश्यासुत	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	xcomp	_	Translit=vaiśyāsutā|LTranslit=vaiśyāsuta|Gloss=daughter-of-caste-of-workers
5	भविष्यति	भू	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=bhaviṣyati|LTranslit=bhū|Gloss=will-be
6	।	।	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	अपृष्टः	अ-पृष्ट	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Translit=apr̥ṣṭaḥ|LTranslit=a-pr̥ṣṭa|Gloss=unoffended
2	अत्र	अत्र	ADV	_	PronType=Dem	1	advmod	_	Translit=atra|LTranslit=atra|Gloss=here
3	अप्रधानः	अप्रधान	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Translit=apradhānaḥ|LTranslit=apradhāna|Gloss=unimportant
4	यः	यद्	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	Translit=yaḥ|LTranslit=yad|Gloss=who
5	ब्रूते	ब्रू	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	1	csubj	_	Translit=brūte|LTranslit=brū|Gloss=says
6	राज्ञः	राजन्	NOUN	_	Case=Abl|Gender=Masc|Number=Sing	5	obl:arg	_	Translit=rājñaḥ|LTranslit=rājan|Gloss=about-king
7	पुरः	पुरस्	ADV	_	_	8	advmod	_	Translit=puraḥ|LTranslit=puras|Gloss=ahead
8	कुधीः	कुधी	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	5	xcomp	_	SpaceAfter=No|Translit=kudhīḥ|LTranslit=kudhī|Gloss=stupid
9	।	।	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	एतस्मिन्	एतद्	DET	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	Translit=etasmin|LTranslit=etad|Gloss=this
2	अन्तरे	अन्तर	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	8	obl	_	Translit=antare|LTranslit=antara|Gloss=interior
3	ते	तद्	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	4	det	_	Translit=te|LTranslit=tad|Gloss=the
4	वानराः	वानर	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	Translit=vānarāḥ|LTranslit=vānara|Gloss=monkeys
5	यथा	यथा	ADV	_	PronType=Rel	6	case	_	Translit=yathā|LTranslit=yathā|Gloss=as
6	इच्छया	इच्छा	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	8	obl	_	Translit=icchayā|LTranslit=icchā|Gloss=by-desire
7	क्रीडितुम्	क्रीड्	VERB	_	VerbForm=Inf	8	xcomp	_	Translit=krīḍitum|LTranslit=krīḍ|Gloss=play
8	आरब्धम्	आ-रब्ध्	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No|Translit=ārabdham|LTranslit=ā-rabdh|Gloss=took
9	।	।	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


