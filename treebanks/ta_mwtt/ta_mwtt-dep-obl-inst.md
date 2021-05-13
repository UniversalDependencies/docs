---
layout: base
title:  'Statistics of obl:inst in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `obl:inst`

This relation is a language-specific subtype of <tt><a href="ta_mwtt-dep-obl.html">obl</a></tt>.
There are also 6 other language-specific subtypes of `obl`: <tt><a href="ta_mwtt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ta_mwtt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="ta_mwtt-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="ta_mwtt-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-pmod.html">obl:pmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-tmod.html">obl:tmod</a></tt>.

5 nodes (0%) are attached to their parents as `obl:inst`.

5 instances of `obl:inst` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 2 pairs of parts of speech are connected with `obl:inst`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:inst	color:blue
1	பையன்	பையன்	NOUN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|Polite=Form	4	nsubj	4:nsubj	Translit=paiyaṉ|LTranslit=paiyaṉ
2	சாவியால்	சாவி	NOUN	_	Case=Ins|Gender=Neut|Number=Sing|Person=3	4	obl:inst	4:obl:inst	Translit=cāviyāl|LTranslit=cāvi
3	கதவைத்	கதவு	NOUN	_	Case=Acc|Gender=Neut|Number=Sing|Person=3	4	obj	4:obj	Translit=katavait|LTranslit=katavu
4	திறந்தான்	திற	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Form|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Translit=tiṟantāṉ|LTranslit=tiṟa
5	.	.	PUNCT	_	PunctType=Peri	4	punct	4:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:inst	color:blue
1	அந்த	அந்த	DET	_	_	2	det	2:det	Translit=anta|LTranslit=anta
2	காலத்தில்	காலம்	NOUN	_	Case=Loc|Number=Sing|Person=3	5	obl:tmod	5:obl:tmod	Translit=kālattil|LTranslit=kālam
3	எல்லோரும்	எல்லோரும்	PRON	_	Case=Nom|Number=Plur	5	nsubj	5:nsubj	Translit=ellōrum|LTranslit=ellōrum
4	விறகால்	விறகு	NOUN	_	Case=Ins|Number=Sing|Person=3	5	obl:inst	5:obl:inst	Translit=viṟakāl|LTranslit=viṟaku
5	சமையல்	சமையல்	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	0:root	Translit=camaiyal|LTranslit=camaiyal
6	செய்து	செய்	VERB	_	Polarity=Pos|VerbForm=Conv	5	compound:lvc	5:compound:lvc	Translit=ceytu|LTranslit=cey
7	கொண்டு	கொள்	AUX	_	Polarity=Pos|VerbForm=Conv	6	aux	6:aux	Translit=koṇṭu|LTranslit=koḷ
8	வந்தார்கள்	வா	AUX	_	Gender=Com|Number=Plur|Person=3|Tense=Past	6	aux	6:aux	Translit=vantārkaḷ|LTranslit=vā
9	.	.	PUNCT	_	PunctType=Peri	6	punct	6:punct	Translit=.|LTranslit=.

~~~


