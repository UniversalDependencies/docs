---
layout: base
title:  'Statistics of discourse in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `discourse`

This relation is universal.

85 nodes (1%) are attached to their parents as `discourse`.

74 instances of `discourse` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.07058823529412.

The following 19 pairs of parts of speech are connected with `discourse`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (27; 32% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (13; 15% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (9; 11% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (6; 7% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (6; 7% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (3; 4% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gumreddit-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	_	_	INTJ	UH	_	6	discourse	6:discourse	Discourse=topic-question:90->92:0:lex-indwd-561+syn-sbinv-562+grf-qst-567|Lem=*LOWER*|Len=4
2	_	_	PRON	WP	PronType=Int	6	obj	6:obj	CxnElt=6:Interrogative-WHInfo-Direct.WHWord|Lem=_|Len=4
3	_	_	AUX	MD	VerbForm=Fin	6	aux	6:aux	Lem=_|Len=5
4	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj	Entity=(23-organization-giv:act-cf1*-1-ana)|Lem=_|Len=4
5	_	_	AUX	VB	VerbForm=Inf	6	aux	6:aux	Lem=_|Len=2
6	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Cxn=Interrogative-WHInfo-Direct|CxnElt=6:Interrogative-WHInfo-Direct.Clause|Lem=pay|Len=6|MSeg=pay-ing
7	_	_	ADP	RP	_	6	compound:prt	6:compound:prt	Lem=_|Len=4|SpaceAfter=No
8	_	_	PUNCT	.	_	6	punct	6:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	_	_	INTJ	UH	_	5	discourse	5:discourse	Discourse=evaluation-comment:35->34:0:_|Lem=*LOWER*|Len=2
2	_	_	DET	WDT	PronType=Int	5	det:predet	5:det:predet	CxnElt=5:Exclamative-What.Wh|Entity=(37-person-giv:act-cf1*-4-coref|Lem=_|Len=4
3	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	5	compound	5:compound	Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	0	root	0:root	Cxn=Exclamative-What|CxnElt=5:Exclamative-What.N|Entity=37)|Lem=_|Len=4

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	5:nsubj	Discourse=joint-other_m:63->59:2:lex-indwd-383|Entity=(2-person-giv:inact-cf1-1-ana)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	cop	5:cop	Lem=be|Len=3
3	_	_	ADV	RB	Degree=Pos	5	advmod	5:advmod	Lem=_|Len=3
4	_	_	INTJ	UH	_	5	discourse	5:discourse	Lem=_|Len=7|MSeg=fuck-ing
5	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=4
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	obl	5:obl:at	Entity=(6-event-giv:inact-cf2-1-coref)|Lem=_|Len=2|SpaceAfter=No
8	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1

~~~


