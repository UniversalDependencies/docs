---
layout: base
title:  'Statistics of obl:tmod in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ta_mwtt-dep-obl.html">obl</a></tt>.
There are also 6 other language-specific subtypes of `obl`: <tt><a href="ta_mwtt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ta_mwtt-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="ta_mwtt-dep-obl-cmpr.html">obl:cmpr</a></tt>, <tt><a href="ta_mwtt-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="ta_mwtt-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="ta_mwtt-dep-obl-pmod.html">obl:pmod</a></tt>.

45 nodes (2%) are attached to their parents as `obl:tmod`.

45 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97777777777778.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (26; 58% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-ADV.html">ADV</a></tt> (13; 29% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (5; 11% instances), <tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_mwtt-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3|Polite=Form	4	nsubj	4:nsubj	Translit=kumār|LTranslit=kumār
2	ஐந்து	ஐந்து	NUM	_	Case=Nom	3	nummod	3:nummod	Translit=aintu|LTranslit=aintu
3	மணிக்கு	மணி	NOUN	_	Case=Dat|Number=Sing|Person=3	4	obl:tmod	4:obl:tmod	Translit=maṇikku|LTranslit=maṇi
4	வருவான்	வா	VERB	_	Gender=Masc|Number=Sing|Person=3|Tense=Fut	0	root	0:root	Translit=varuvāṉ|LTranslit=vā
5	.	.	PUNCT	_	PunctType=Peri	4	punct	4:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3	5	nsubj	5:nsubj	Translit=kumār|LTranslit=kumār
2	இன்று	இன்று	ADV	_	_	5	obl:tmod	5:obl:tmod	Translit=iṉṟu|LTranslit=iṉṟu
3	மட்டும்	மட்டும்	ADV	_	_	5	advmod	5:advmod	Translit=maṭṭum|LTranslit=maṭṭum
4	இங்கே	இங்கே	ADV	_	_	5	obl:pmod	5:obl:pmod	Translit=iṅkē|LTranslit=iṅkē
5	இருக்கிறான்	இரு	VERB	_	Gender=Masc|Number=Sing|Person=3|Tense=Pres	0	root	0:root	Translit=irukkiṟāṉ|LTranslit=iru
6	.	.	PUNCT	_	PunctType=Peri	5	punct	5:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:tmod	color:blue
1	காலை	காலை	NOUN	_	Case=Nom|Number=Sing|Person=3	3	obl:tmod	3:obl:tmod	Translit=kālai|LTranslit=kālai
2	முதல்	முதல்	ADP	_	AdpType=Post	1	case	1:case	Translit=mutal|LTranslit=mutal
3	மழை	மழை	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	0:root	Translit=maḻai|LTranslit=maḻai
4	பெய்கிறது	பெய்	VERB	_	Gender=Neut|Number=Sing|Person=3|Tense=Pres	3	compound:lvc	3:compound:lvc	Translit=peykiṟatu|LTranslit=pey
5	.	.	PUNCT	_	PunctType=Peri	3	punct	3:punct	Translit=.|LTranslit=.

~~~


