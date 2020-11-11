---
layout: base
title:  'Statistics of obl:tmod in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ta_mwtt-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="ta_mwtt-dep-obl-abl.html">obl:abl</a></tt>, <tt><a href="ta_mwtt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ta_mwtt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="ta_mwtt-dep-obl-ben.html">obl:ben</a></tt>, <tt><a href="ta_mwtt-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="ta_mwtt-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="ta_mwtt-dep-obl-loc.html">obl:loc</a></tt>, <tt><a href="ta_mwtt-dep-obl-pmod.html">obl:pmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-soc.html">obl:soc</a></tt>.

81 nodes (3%) are attached to their parents as `obl:tmod`.

81 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90123456790123.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (50; 62% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-ADV.html">ADV</a></tt> (26; 32% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	4:nsubj	Translit=kumār|LTranslit=kumār
2	ஐந்து	ஐந்து	NUM	_	Case=Nom	3	nummod	3:nummod	Translit=aintu|LTranslit=aintu
3	மணிக்கு	மணி	NOUN	_	Case=Dat|Number=Sing|Person=3	4	obl:tmod	4:obl:tmod	Translit=maṇikku|LTranslit=maṇi
4	வருவான்	வா	VERB	_	Gender=Masc|Number=Sing|Person=3|Tense=Fut	0	root	0:root	Translit=varuvāṉ|LTranslit=vā
5	.	.	PUNCT	_	PunctType=Peri	4	punct	4:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:tmod	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	3:nsubj	Translit=kumār|LTranslit=kumār
2	இன்றைக்கு	இன்று	ADV	_	Case=Dat|Number=Sing	3	obl:tmod	3:obl:tmod	Translit=iṉṟaikku|LTranslit=iṉṟu
3	வருகிறான்	வா	VERB	_	Gender=Masc|Number=Sing|Person=3|Tense=Pres	0	root	0:root	Translit=varukiṟāṉ|LTranslit=vā
4	.	.	PUNCT	_	PunctType=Peri	3	punct	3:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:tmod	color:blue
1	நான்	நான்	PRON	_	Number=Sing|Person=1	3	nsubj	3:nsubj	Translit=nāṉ|LTranslit=nāṉ
2	நாளை	நாளை	ADV	_	_	3	obl:tmod	3:obl:tmod	Translit=nāḷai|LTranslit=nāḷai
3	வரவா	வரவு	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	0:root	Translit=varavā|LTranslit=varavu
4	?	?	PUNCT	_	_	3	punct	3:punct	Translit=?|LTranslit=?

~~~


