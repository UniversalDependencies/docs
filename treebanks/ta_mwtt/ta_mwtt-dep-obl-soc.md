---
layout: base
title:  'Statistics of obl:soc in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `obl:soc`

This relation is a language-specific subtype of <tt><a href="ta_mwtt-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="ta_mwtt-dep-obl-abl.html">obl:abl</a></tt>, <tt><a href="ta_mwtt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ta_mwtt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="ta_mwtt-dep-obl-ben.html">obl:ben</a></tt>, <tt><a href="ta_mwtt-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="ta_mwtt-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="ta_mwtt-dep-obl-loc.html">obl:loc</a></tt>, <tt><a href="ta_mwtt-dep-obl-pmod.html">obl:pmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-tmod.html">obl:tmod</a></tt>.

2 nodes (0%) are attached to their parents as `obl:soc`.

2 instances of `obl:soc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `obl:soc`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:soc	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	4:nsubj	Translit=kumār|LTranslit=kumār
2	தன்	தான்	PRON	_	Case=Gen|Gender=Com|Number=Sing	3	nmod:poss	3:nmod:poss	Translit=taṉ|LTranslit=tāṉ
3	மனைவியோடு	மனைவி	NOUN	_	Case=Com|Number=Sing|Person=3	4	obl:soc	4:obl:soc	Translit=maṉaiviyōṭu|LTranslit=maṉaivi
4	வந்தான்	வா	VERB	_	Gender=Masc|Number=Sing|Person=3|Tense=Past	0	root	0:root	Translit=vantāṉ|LTranslit=vā
5	.	.	PUNCT	_	PunctType=Peri	4	punct	4:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:soc	color:blue
1	நீ	நீ	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2	3	nsubj	3:nsubj	Translit=nī|LTranslit=nī
2	குமாரோடு	குமார்	PROPN	_	Case=Com|Number=Sing|Person=3	3	obl:soc	3:obl:soc	Translit=kumārōṭu|LTranslit=kumār
3	பேசக்	பேசு	VERB	_	VerbForm=Inf	0	root	0:root	Translit=pēcak|LTranslit=pēcu
4	கூடாது	கூடு	AUX	_	Polarity=Neg	3	aux	3:aux	Translit=kūṭātu|LTranslit=kūṭu
5	.	.	PUNCT	_	PunctType=Peri	3	punct	3:punct	Translit=.|LTranslit=.

~~~


