---
layout: base
title:  'Statistics of obl:arg in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="sa-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="sa-dep-obl-agent.html">obl:agent</a></tt>.

2 nodes (0%) are attached to their parents as `obl:arg`.

1 instances of `obl:arg` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `obl:arg`: <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl:arg	color:blue
1	किम्	किम्	PART	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	nsubj	_	Translit=kim|LTranslit=kim|Gloss=whether
2	न	न	PART	_	Polarity=Neg	3	advmod	_	Translit=na|LTranslit=na|Gloss=not
3	पश्यसि	पश्	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=paśyasi|LTranslit=paś|Gloss=see
4	पीड्यमानानि	पीड्यमान	ADJ	_	Case=Acc|Gender=Neut|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	5	amod	_	Translit=pīḍyamānāni|LTranslit=pīḍyamāna|Gloss=starving
5	अपत्यानि	अपत्य	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	3	obj	_	Translit=apatyāni|LTranslit=apatya|Gloss=children
6	येन	यद्	DET	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Rel	7	det	_	LId=यद्-१|Translit=yena|LTranslit=yad|Gloss=which
7	क्षुधया	क्षुधा	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	8	obl:arg	_	Translit=kṣudhayā|LTranslit=kṣudhā|Gloss=hunger
8	निश्चिन्तः	निश्चिन्त	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	9	advcl	_	Translit=niścintaḥ|LTranslit=niścinta|Gloss=carefree
9	तिष्ठसि	स्था	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	SpaceAfter=No|Translit=tiṣṭhasi|LTranslit=sthā|Gloss=stand
10	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:arg	color:blue
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


