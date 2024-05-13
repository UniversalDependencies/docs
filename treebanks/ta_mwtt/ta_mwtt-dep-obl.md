---
layout: base
title:  'Statistics of obl in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `obl`

This relation is universal.
There are 7 language-specific subtypes of `obl`: <tt><a href="ta_mwtt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ta_mwtt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="ta_mwtt-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="ta_mwtt-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="ta_mwtt-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-pmod.html">obl:pmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-tmod.html">obl:tmod</a></tt>.

128 nodes (5%) are attached to their parents as `obl`.

127 instances of `obl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09375.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (106; 83% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-PROPN.html">PROPN</a></tt> (8; 6% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ta_mwtt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ta_mwtt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ta_mwtt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3|Polite=Form	3	nsubj	_	Translit=kumār|LTranslit=kumār
2	ஊருக்குப்	ஊர்	NOUN	_	Case=Dat|Gender=Neut|Number=Sing|Person=3	3	obl	_	Translit=ūrukkup|LTranslit=ūr
3	போனான்	போ	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Form|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=pōṉāṉ|LTranslit=pō
4	.	.	PUNCT	_	PunctType=Peri	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl	color:blue
1	குமாருக்கு	குமார்	PROPN	_	Case=Dat|Number=Sing|Person=3	4	obl	_	Translit=kumārukku|LTranslit=kumār
2	ஒரு	ஒன்று	NUM	_	_	3	nummod	_	Translit=oru|LTranslit=oṉṟu
3	புத்தகம்	புத்தகம்	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	Translit=puttakam|LTranslit=puttakam
4	இருக்கிறது	இரு	VERB	_	Gender=Neut|Number=Sing|Person=3|Tense=Pres	0	root	_	Translit=irukkiṟatu|LTranslit=iru
5	.	.	PUNCT	_	PunctType=Peri	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl	color:blue
1	நானாக	நான்	PRON	_	Gender=Com|Number=Sing|Person=1	4	obl	_	Translit=nāṉāka|LTranslit=nāṉ
2	இந்த	இந்த	DET	_	_	3	det	_	Translit=inta|LTranslit=inta
3	கடிதத்தை	கடிதம்	NOUN	_	Case=Acc|Number=Sing|Person=3	4	obj	_	Translit=kaṭitattai|LTranslit=kaṭitam
4	எழுதினேன்	எழுது	VERB	_	Gender=Com|Number=Sing|Person=1|Tense=Past	0	root	_	Translit=eḻutiṉēṉ|LTranslit=eḻutu
5	.	.	PUNCT	_	PunctType=Peri	4	punct	_	Translit=.|LTranslit=.

~~~


