---
layout: base
title:  'Statistics of csubj in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="sa-dep-csubj-pass.html">csubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	परिवर्तिनि	परिवर्तिन्	ADJ	_	Case=Loc|Gender=Masc|Number=Sing	2	amod	_	Translit=parivartini|LTranslit=parivartin|Gloss=turning
2	संसारे	संसार	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	Translit=saṁsāre|LTranslit=saṁsāra|Gloss=transition
3	मृतः	मृ	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Translit=mr̥taḥ|LTranslit=mr̥|Gloss=dead
4	को	किम्	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	6	nsubj	_	Translit=ko|LTranslit=kim|Gloss=who
5	न	न	PART	_	Polarity=Neg	6	advmod	_	Translit=na|LTranslit=na|Gloss=not
6	जायते	जन्	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	3	csubj	_	SpaceAfter=No|Translit=jāyate|LTranslit=jan|Gloss=is-born
7	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


